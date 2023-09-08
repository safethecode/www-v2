import Balancer from 'react-wrap-balancer';

import { Fragment } from 'react';

import { Anchor, Profile, Button } from '@/components';
import { ArrowRight, ArrowDown } from 'react-feather';

import {
  h1,
  highlight,
  heroContextGroup,
  description,
  buttonGroup,
  list,
  listItem,
  mouseIcon,
} from '../index.css';

export const HeroSection = () => {
  return (
    <Fragment>
      <ul className={list}>
        I Favorite
        <li className={listItem}>
          <img
            src="/_static/icon/icon-tumbler-glass.png"
            alt="icon_tumbler"
            width={14}
          />
          Whisky
        </li>
        <li className={listItem}>
          <img
            src="/_static/icon/icon-hot-beverage.png"
            alt="icon_espresso"
            width={14}
          />
          Espresso
        </li>
      </ul>
      <div className={heroContextGroup}>
        <h1 className={h1}>
          For a better
          <span className={highlight}>
            <img
              src="/_static/icon/icon-robot.png"
              alt="robot_icon"
              width={48}
            />
            User Experience
          </span>
        </h1>
        <h1 className={h1}>
          and we cant ignore DX
          <img
            src="/_static/icon/icon-smiling-face-with-sunglasses.png"
            alt="robot_icon"
            width={48}
          />
        </h1>
      </div>
      <Balancer as="p" className={description}>
        4 Year front-end engineer who values both user experience and developer
        experience. Currently, Im working at team
        <Anchor href="https://github.com/aybridge" target="_blank">
          @aybridge
        </Anchor>
        , where were experimenting with various projects!
      </Balancer>
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/59228569?v=4"
        user={{
          name: 'Aaron Son',
          socialId: 'Safethecode',
        }}
      />
      <div className={buttonGroup}>
        <Anchor
          href="https://whattime.co.kr/safethecode/meet"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="primary"
            rightIcon={<ArrowRight size={16} />}
            aria-label="Meeting Request"
          >
            Meet in 30 seconds
          </Button>
        </Anchor>
        <Anchor
          href="https://my.surfit.io/w/1811686632"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost" aria-label="Read Resume">
            Read the Resume
          </Button>
        </Anchor>
      </div>
      <ArrowDown size={32} color="#888" className={mouseIcon} />
    </Fragment>
  );
};
