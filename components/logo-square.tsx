import clsx from 'clsx';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-[var(--color-neutral-light)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] shadow-sm',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <span
        className={clsx(
          'font-satoshi font-bold text-white',
          {
            'text-lg': !size,
            'text-sm': size === 'sm'
          }
        )}
      >
        R
      </span>
    </div>
  );
}
