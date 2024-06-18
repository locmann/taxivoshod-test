import { CSSProperties, MouseEventHandler } from 'react';

type PropsType = {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
export function SampleNextArrow({ className, style, onClick }: PropsType) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow({ className, style, onClick }: PropsType) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}
