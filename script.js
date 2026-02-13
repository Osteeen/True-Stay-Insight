
// --- Translation Logic ---
const flags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  de: '🇩🇪'
};

const langNames = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  it: 'IT',
  de: 'DE'
};

window.updateLanguage = (lang) => {
  if (typeof translations === 'undefined' || !translations[lang]) {
    console.error('Translations not loaded or language not supported:', lang);
    return;
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Handle elements with children (like H1 with span)
      if (key === 'hero_title' || key === 'hero_subtitle' || key === 'about_p1' || key === 'about_p2') {
        el.innerHTML = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  // Render FAQ from translations
  if (translations[lang].faq_data) {
    window.renderFAQ(translations[lang].faq_data);
  }

  // Render Sentiment Feed from translations
  if (translations[lang].sentiment_feed) {
    window.renderSentimentFeed(translations[lang].sentiment_feed);
  }

  // Update language selector UI
  const flagEl = document.getElementById('current-lang-flag');
  const nameEl = document.getElementById('current-lang-name');
  if (flagEl) flagEl.innerText = flags[lang];
  if (nameEl) nameEl.innerText = langNames[lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Save preference
  localStorage.setItem('preferred-lang', lang);
};

window.changeLanguage = (lang) => {
  window.updateLanguage(lang);

  // Close dropdown instantly
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) {
    dropdown.classList.add('invisible', 'opacity-0');
  }
};

const detectLanguage = () => {
  // 1. Check localStorage
  const savedLang = localStorage.getItem('preferred-lang');
  if (savedLang && typeof translations !== 'undefined' && translations[savedLang]) {
    window.updateLanguage(savedLang);
  } else {
    // 2. Default to English
    window.updateLanguage('en');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Consolidated Observer ---
  const sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;

      // Handle fade-in sections
      if (target.classList.contains('fade-in-section')) {
        if (entry.isIntersecting) {
          target.classList.add('is-visible');
          sharedObserver.unobserve(target);
        }
      }

      // Handle mobile-only scroll interactions (hover effect)
      if (target.classList.contains('scroll-trigger')) {
        if (window.innerWidth < 768) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            target.classList.add('is-active');
          } else {
            target.classList.remove('is-active');
          }
        }
      }

      // Handle sentiment trend bars
      if (target.classList.contains('sentiment-trend-container')) {
        if (entry.isIntersecting) {
          target.classList.add('is-visible');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.4, 0.5] // Multiple thresholds for different behaviors
  });

  // Start observing all relevant elements
  document.querySelectorAll('.fade-in-section, .scroll-trigger, .sentiment-trend-container').forEach(el => {
    sharedObserver.observe(el);
  });

  window.renderSentimentFeed = (items) => {
    const marqueeContent = document.getElementById('marquee-content');
    if (!marqueeContent) return;

    marqueeContent.innerHTML = [...items, ...items].map(item => {
      const isPositive = item.sentiment === 'POSITIVE' || item.sentiment === 'POSITIF' || item.sentiment === 'POSITIVO' || item.sentiment === 'POSITIV';
      const sentimentClass = isPositive
        ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5'
        : 'text-rose-400 border-rose-400/30 bg-rose-400/5';

      return `
      <div class="flex items-center gap-4 bg-[#101628] border border-white/10 px-6 py-3 rounded-full hover:border-purple-500/50 transition-all cursor-default group">
        <span class="text-gray-500 text-xs font-medium font-mono">${item.location}</span>
        <span class="text-gray-300 text-sm italic">"${item.text}"</span>
        <span class="text-[10px] font-bold px-2.5 py-1 rounded border ${sentimentClass}">
          ${item.sentiment}
        </span>
      </div>
    `;
    }).join('');
  };

  window.renderFAQ = (categories) => {
    const faqCategoriesEl = document.getElementById('faq-categories');
    const faqContentEl = document.getElementById('faq-content');
    const faqMobileEl = document.getElementById('faq-mobile');

    // Use a local active category state or global if needed. 
    // For simplicity, we'll reset to 0 on language change or maintain it.
    const activeIdx = window.activeFAQCategory || 0;

    if (!categories[activeIdx]) return;

    const itemsHTML = categories[activeIdx].items.map((item) => `
    <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button onclick="toggleAccordion(this)" class="w-full p-6 text-left flex justify-between items-center group">
        <span class="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors leading-tight">${item.q}</span>
        <span class="text-2xl font-light ml-4 shrink-0 text-gray-300 accordion-icon transition-transform duration-300">+</span>
      </button>
      <div class="accordion-content h-0 overflow-hidden accordion-transition opacity-0">
        <div class="px-6 pb-6 text-gray-500 leading-relaxed text-lg border-t border-gray-50 pt-4">
          ${item.a}
        </div>
      </div>
    </div>
  `).join('');

    // Desktop Render
    if (faqCategoriesEl && faqContentEl) {
      faqCategoriesEl.innerHTML = categories.map((cat, i) => `
      <button 
        onclick="switchCategory(${i})"
        class="w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeIdx === i ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'text-gray-500 hover:bg-white hover:text-gray-900'}"
      >
        ${cat.title}
      </button>
    `).join('');
      faqContentEl.innerHTML = `<div class="space-y-4 animate-fade-slide">${itemsHTML}</div>`;
    }

    // Mobile Render
    if (faqMobileEl) {
      faqMobileEl.innerHTML = `
      <div class="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar mb-4">
        ${categories.map((cat, i) => `
          <button 
            onclick="switchCategory(${i})"
            class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${activeIdx === i ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-white text-gray-500 border border-gray-100'}"
          >
            ${cat.title}
          </button>
        `).join('')}
      </div>
      <div class="animate-fade-slide"><div class="space-y-4">${itemsHTML}</div></div>
    `;
    }
  };

  window.switchCategory = (index) => {
    window.activeFAQCategory = index;
    const currentLang = document.documentElement.lang || 'en';
    if (translations[currentLang] && translations[currentLang].faq_data) {
      window.renderFAQ(translations[currentLang].faq_data);
    }
  };

  window.toggleAccordion = (btn) => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.accordion-icon');

    // Close others
    document.querySelectorAll('.accordion-content').forEach(el => {
      if (el !== content && el.style.height !== '0px' && el.style.height !== '') {
        el.style.height = '0px';
        el.style.opacity = '0';
        const otherIcon = el.previousElementSibling.querySelector('.accordion-icon');
        if (otherIcon) {
          otherIcon.textContent = '+';
          otherIcon.style.transform = 'rotate(0deg)';
          otherIcon.classList.remove('text-purple-600');
          otherIcon.classList.add('text-gray-300');
        }
      }
    });

    // Toggle current
    requestAnimationFrame(() => {
      if (!content.style.height || content.style.height === '0px') {
        content.style.height = content.scrollHeight + 'px';
        content.style.opacity = '1';
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
        icon.classList.remove('text-gray-300');
        icon.classList.add('text-purple-600');
      } else {
        content.style.height = '0px';
        content.style.opacity = '0';
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
        icon.classList.remove('text-purple-600');
        icon.classList.add('text-gray-300');
      }
    });
  };

  // --- Smooth Scroll Fallback ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Language selector toggle logic
  const langSelector = document.getElementById('lang-selector');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langSelector && langDropdown) {
    const btn = langSelector.querySelector('button');

    // Toggle logic for mobile/click
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = langDropdown.classList.contains('invisible');
      if (isHidden) {
        langDropdown.classList.remove('invisible', 'opacity-0');
      } else {
        langDropdown.classList.add('invisible', 'opacity-0');
      }
    });

    // Hover logic for desktop
    langSelector.addEventListener('mouseenter', () => {
      if (window.innerWidth >= 768) {
        langDropdown.classList.remove('invisible', 'opacity-0');
      }
    });

    langSelector.addEventListener('mouseleave', () => {
      if (window.innerWidth >= 768) {
        langDropdown.classList.add('invisible', 'opacity-0');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      langDropdown.classList.add('invisible', 'opacity-0');
    });
  }

  // Initial render is handled by detectLanguage() -> updateLanguage()
  detectLanguage();
});

let sampleAudio = null;

function showSampleMessage() {
  const btn = document.querySelector('[onclick="showSampleMessage()"]');
  if (!btn) return;
  const textEl = btn.querySelector('.text-sm');
  const iconContainer = document.getElementById('sample-call-icon');
  const restartBtn = document.getElementById('sample-restart-btn');
  const waves = document.getElementById('sample-call-waves');
  const currentLang = document.documentElement.lang || 'en';

  // Get original text from translations if available
  const originalText = (typeof translations !== 'undefined' && translations[currentLang])
    ? translations[currentLang].hero_guest_msg
    : textEl.innerText;

  const playIcon = `<svg class="w-5 h-5 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>`;
  const pauseIcon = `<svg class="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>`;

  if (!sampleAudio) {
    sampleAudio = new Audio('dist/TSI Sample Call.mp3');
    sampleAudio.onended = () => {
      textEl.innerText = originalText;
      textEl.classList.remove('text-purple-600');
      iconContainer.innerHTML = playIcon;
      btn.dataset.playing = "false";
      restartBtn.classList.add('hidden');
      waves.classList.remove('hidden');
    };
  }

  // If audio ended, reset to beginning before playing
  if (sampleAudio.ended) {
    sampleAudio.currentTime = 0;
  }

  if (sampleAudio.paused) {
    sampleAudio.play();
    textEl.innerText = "Playing sample...";
    textEl.classList.add('text-purple-600');
    iconContainer.innerHTML = pauseIcon;
    btn.dataset.playing = "true";
    restartBtn.classList.remove('hidden');
    waves.classList.add('hidden');
  } else {
    sampleAudio.pause();
    textEl.innerText = originalText;
    textEl.classList.remove('text-purple-600');
    iconContainer.innerHTML = playIcon;
    btn.dataset.playing = "false";
  }
}

function restartSampleAudio() {
  if (sampleAudio) {
    sampleAudio.pause();
    sampleAudio.currentTime = 0;
    sampleAudio.play();

    // Ensure UI is in playing state
    const btn = document.querySelector('[onclick="showSampleMessage()"]');
    const textEl = btn.querySelector('.text-sm');
    const iconContainer = document.getElementById('sample-call-icon');
    const pauseIcon = `<svg class="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>`;

    textEl.innerText = "Playing sample...";
    textEl.classList.add('text-purple-600');
    iconContainer.innerHTML = pauseIcon;
    btn.dataset.playing = "true";
  }
}
