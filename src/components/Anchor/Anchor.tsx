import { AnchorHTMLAttributes, ReactNode } from 'react';
import { anchor } from './Anchor.css';

interface AnchorContent {
  children: ReactNode;
}

type AnchorProps = AnchorContent & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = ({ children, href, target, ...props }: AnchorProps) => {
  return (
    <a className={anchor} href={href} target={target} {...props}>
      <strong>{children}</strong>
    </a>
  );
};
