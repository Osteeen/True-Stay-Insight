
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

  // --- Sentiment Feed ---
  const feedItems = [
    { location: 'Suite 102', text: 'Perfect stay, loved the welcome wine.', sentiment: 'POSITIVE' },
    { location: 'Room 501', text: 'Housekeeping missed the towels.', sentiment: 'NEGATIVE' },
    { location: 'Villa 7', text: 'Power outlet next to bed was loose.', sentiment: 'NEGATIVE' },
    { location: 'Room 214', text: 'Breakfast buffet was exceptional today.', sentiment: 'POSITIVE' },
    { location: 'Suite 305', text: 'The view is better than the photos.', sentiment: 'POSITIVE' },
    { location: 'Room 112', text: 'AC was a bit loud at night.', sentiment: 'NEGATIVE' },
  ];

  const marqueeContent = document.getElementById('marquee-content');
  // Use innerHTML for a single batch update to the DOM
  marqueeContent.innerHTML = [...feedItems, ...feedItems].map(item => {
    const sentimentClass = item.sentiment === 'POSITIVE'
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

  // --- FAQ ---
  const categories = [
    {
      title: "General",
      items: [
        { q: "What is TrueStay Insight?", a: "TrueStay Insight is an AI powered guest feedback platform that automatically calls guests after checkout, listens to their experience in a natural conversation, and turns those conversations into structured insights for hotel teams." },
        { q: "How is this different from surveys or review links?", a: "Surveys are easy to ignore. Calls feel personal. TrueStay Insight captures real voice feedback, follow up questions, tone, and context that surveys miss, allowing hotels to detect issues early before they reach public review platforms." },
        { q: "Do guests know they are speaking with AI?", a: "Yes. The AI clearly introduces itself as a virtual assistant calling on behalf of the hotel. There is no deception." },
        { q: "When are guests contacted?", a: "Calls are placed after checkout at a configurable delay. Hotels can control timing based on their operations and guest preferences." },
        { q: "What happens if a guest does not answer?", a: "If the guest does not answer, the system automatically retries based on predefined rules. Call attempts are capped to avoid disturbing guests." },
        { q: "Does this replace my existing feedback system?", a: "It can, but it does not have to. Many hotels run TrueStay Insight alongside surveys and reviews to capture deeper insights while maintaining existing workflows." },
        { q: "How quickly can we go live?", a: "Most hotels go live within 3 to 5 business days after onboarding." }
      ]
    },
    {
      title: "Technical",
      items: [
        { q: "What systems does TrueStay Insight integrate with?", a: "TrueStay Insight integrates with Hotel PMS systems, Spreadsheets and data feeds, Airtable, and Custom APIs. If you can export guest checkout data, TrueStay Insight can work with it." },
        { q: "What guest data is required to start?", a: "At minimum, we need the Guest name, Phone number, and Checkout date and time. Additional fields like room number, guest category, or stay type can be included for deeper analysis." },
        { q: "Can this work if we use Google Sheets or another system instead of Airtable?", a: "Yes. Guest data can be ingested automatically from Google Sheets or other systems and synced into the platform." },
        { q: "How many calls can be made at once?", a: "Call concurrency is configurable. Hotels can limit how many calls happen simultaneously to match their operational preferences." },
        { q: "What happens if the guest hangs up or says nothing?", a: "The system detects call outcomes and handles them gracefully. If no meaningful interaction occurs, the call is logged and no false insights are generated." }
      ]
    },
    {
      title: "Billing",
      items: [
        { q: "How is pricing structured?", a: "Pricing is based on call volume. This ensures predictable costs that scale with your property." },
        { q: "Is there a setup fee?", a: "Yes. There is a one time setup fee of that ranges from $1,500 to $3000 depending on the usecase, which covers system configuration, integration setup, AI voice customization, and workflow tuning." },
        { q: "Are there long term contracts?", a: "No long term contracts are required. Plans are billed monthly." },
        { q: "What happens if we exceed our call limit?", a: "You will never be charged unexpectedly. Overage handling is discussed and approved before activation." },
        { q: "Do you offer custom pricing?", a: "Yes. Multi property hotels and custom workflows are priced individually. Please contact sales for tailored pricing." }
      ]
    },
    {
      title: "Security & Privacy",
      items: [
        { q: "Is guest data secure?", a: "Yes. All data is encrypted in transit and at rest using industry standard security practices." },
        { q: "Do you store call recordings?", a: "Call recordings can be enabled or disabled based on hotel policy. Transcripts and insights are stored securely." },
        { q: "Who owns the guest data?", a: "You do. TrueStay Insight does not sell, share, or reuse guest data for any purpose outside your account." },
        { q: "Is this compliant with privacy regulations?", a: "TrueStay Insight is built with privacy by design and supports compliance with data protection regulations such as GDPR." },
        { q: "Can guests opt out?", a: "Yes. Guests can opt out at any time, and future calls will be automatically suppressed." }
      ]
    }
  ];

  let activeCategory = 0;
  const faqCategoriesEl = document.getElementById('faq-categories');
  const faqContentEl = document.getElementById('faq-content');
  const faqMobileEl = document.getElementById('faq-mobile');

  function renderFAQ() {
    const itemsHTML = categories[activeCategory].items.map((item) => `
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

    // Desktop Render (Tabs)
    if (faqCategoriesEl && faqContentEl) {
      faqCategoriesEl.innerHTML = categories.map((cat, i) => `
        <button 
          onclick="switchCategory(${i})"
          class="w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all ${activeCategory === i ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'text-gray-500 hover:bg-white hover:text-gray-900'}"
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
              class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === i ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-white text-gray-500 border border-gray-100'}"
            >
              ${cat.title}
            </button>
          `).join('')}
        </div>
        <div class="animate-fade-slide"><div class="space-y-4">${itemsHTML}</div></div>
      `;
    }
  }

  window.switchCategory = (index) => {
    activeCategory = index;
    renderFAQ();
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
        otherIcon.textContent = '+';
        otherIcon.style.transform = 'rotate(0deg)';
        otherIcon.classList.remove('text-purple-600');
        otherIcon.classList.add('text-gray-300');
      }
    });

    // Toggle current
    // We use requestAnimationFrame to ensure the browser has registered the content rendering if needed
    requestAnimationFrame(() => {
      if (!content.style.height || content.style.height === '0px') {
        content.style.height = content.scrollHeight + 'px';
        content.style.opacity = '1';
        icon.textContent = '−'; // Using minus sign for better typography
        icon.style.transform = 'rotate(180deg)'; // Optional rotation for visual flair, though we change char
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

  // --- Smooth Scroll Fallback/Polyfill ---
  // This ensures smooth scrolling works on browsers where CSS scroll-behavior might be inconsistent or disabled
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

  // Initial Render
  renderFAQ();
});

function showSampleMessage() {
  const btn = document.querySelector('[onclick="showSampleMessage()"]');
  const originalText = btn.querySelector('.text-sm').innerText;

  if (btn.dataset.locked) return;
  btn.dataset.locked = "true";

  btn.querySelector('.text-sm').innerText = "Audio coming soon!";
  btn.querySelector('.text-sm').classList.add('text-purple-600');

  setTimeout(() => {
    btn.querySelector('.text-sm').innerText = originalText;
    btn.querySelector('.text-sm').classList.remove('text-purple-600');
    delete btn.dataset.locked;
  }, 2000);
}
