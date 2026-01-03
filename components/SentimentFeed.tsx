
import React from 'react';

const SentimentFeed: React.FC = () => {
  const feedItems = [
    { location: 'Suite 102', text: 'Perfect stay, loved the welcome wine.', sentiment: 'POSITIVE' },
    { location: 'Room 501', text: 'Housekeeping missed the towels.', sentiment: 'NEGATIVE' },
    { location: 'Villa 7', text: 'Power outlet next to bed was loose.', sentiment: 'NEGATIVE' },
    { location: 'Room 214', text: 'Breakfast buffet was exceptional today.', sentiment: 'POSITIVE' },
    { location: 'Suite 305', text: 'The view is better than the photos.', sentiment: 'POSITIVE' },
    { location: 'Room 112', text: 'AC was a bit loud at night.', sentiment: 'NEGATIVE' },
  ];

  return (
    <section className="bg-[#050914] py-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center gap-4">
        <div className="text-[10px] font-black text-emerald-400 tracking-[0.2em] uppercase whitespace-nowrap">Live Feed</div>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-6 py-2">
          {[...feedItems, ...feedItems, ...feedItems].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 bg-[#101628] border border-white/10 px-6 py-3 rounded-full hover:border-purple-500/50 transition-all cursor-default group"
            >
              <span className="text-gray-500 text-xs font-medium font-mono">{item.location}</span>
              <span className="text-gray-300 text-sm italic">"{item.text}"</span>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded border ${
                item.sentiment === 'POSITIVE' 
                  ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5' 
                  : 'text-rose-400 border-rose-400/30 bg-rose-400/5'
              }`}>
                {item.sentiment}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SentimentFeed;
