import type { Screen } from '../content';

/** A Voya Design V1 screen, exported with its approved iPhone frame. */
export function Phone({
  screen,
  className = '',
  eager = false,
  decorative = false,
}: {
  screen: Screen;
  className?: string;
  eager?: boolean;
  decorative?: boolean;
}) {
  return (
    <img
      className={`phone ${className}`}
      src={screen.src}
      alt={decorative ? '' : screen.alt}
      width={720}
      height={1510}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
    />
  );
}
