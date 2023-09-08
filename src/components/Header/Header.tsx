'use clinet';

import { Profile } from '@/components/Profile';
import { wrap, item } from './Header.css';
import { Button } from '..';

export const Header = () => {
  return (
    <header className={wrap.header}>
      <nav className={wrap.nav}>
        <Profile imageUrl="https://avatars.githubusercontent.com/u/59228569?v=4" />
        <div className={item.menu}>
          <a href="" className={item.anchor}>
            Collaborated
          </a>
          <a href="" className={item.anchor}>
            Projects
          </a>
          <a href="" className={item.anchor}>
            Awards
          </a>
          <a href="" className={item.anchor}>
            Notes
          </a>
          <a href="" className={item.anchor}>
            Pricing
          </a>
          <a href="" className={item.anchor}>
            Contact
          </a>
          <Button variant="ghost">Try Console</Button>
        </div>
      </nav>
    </header>
  );
};
