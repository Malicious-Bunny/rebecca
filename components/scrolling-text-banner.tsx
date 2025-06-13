'use client';

interface ScrollingTextBannerProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export function ScrollingTextBanner({
  items,
  direction = 'left',
  speed = 'normal',
  className = ''
}: ScrollingTextBannerProps) {
  const speedClass = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll',
    fast: 'animate-scroll-fast'
  }[speed];

  const directionClass = direction === 'right' ? 'reverse' : '';

  return (
    <div className={`overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] py-4 ${className}`}>
      <div className={`flex whitespace-nowrap ${speedClass} ${directionClass}`}>
        {/* First set of items */}
        <div className="flex items-center space-x-8 pr-8">
          {items.map((item, index) => (
            <span
              key={`first-${index}`}
              className="font-satoshi text-lg font-medium text-white uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 pr-8">
          {items.map((item, index) => (
            <span
              key={`second-${index}`}
              className="font-satoshi text-lg font-medium text-white uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Third set for extra seamless effect */}
        <div className="flex items-center space-x-8 pr-8">
          {items.map((item, index) => (
            <span
              key={`third-${index}`}
              className="font-satoshi text-lg font-medium text-white uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
