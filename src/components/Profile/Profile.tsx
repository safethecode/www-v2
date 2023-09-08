'use client';

import { wrapper, avatar, inner, name, socialId } from './Profile.css';

interface ProfileProps {
  imageUrl: string;
  user?: {
    name: string;
    socialId: string;
  };
}

export const Profile = ({ imageUrl, user }: ProfileProps) => {
  return (
    <a
      className={wrapper}
      href={user && `https://github.com/${user.socialId}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={imageUrl} className={avatar} alt="image:user_avatar" />
      {user && (
        <div className={inner}>
          <span className={name}>{user.name}</span>
          <span className={socialId}>@{user.socialId}</span>
        </div>
      )}
    </a>
  );
};
