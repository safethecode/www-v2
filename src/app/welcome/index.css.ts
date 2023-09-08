import { position } from '@/styles/keyframes.css';
import { style } from '@vanilla-extract/css';

export const h1 = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '48px',
  fontWeight: '700',
  color: '#fff',
  gap: '8px',
});

export const heroContextGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '16px',
});

const hero = style({
  position: 'relative',
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const highlight = style({
  display: 'flex',
  width: 'min-content',
  height: '48px',
  alignItems: 'center',
  fontSize: '48px',
  fontWeight: '700',
  whiteSpace: 'nowrap',
  gap: '8px',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundImage: 'linear-gradient(110deg, #ea580c, #f59e0b)',
});

export const darkBlueHighlight = style({
  display: 'flex',
  width: 'min-content',
  height: '48px',
  alignItems: 'center',
  fontSize: '48px',
  fontWeight: '700',
  whiteSpace: 'nowrap',
  gap: '8px',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundImage: 'linear-gradient(90deg, #1f85fa, #23c494 47%, #23c494 103%)',
});

export const description = style({
  maxWidth: '1024px !important',
  textAlign: 'center',
  lineHeight: '1.8em',
  color: 'hsl(0, 0%, 63%)',
  fontSize: '14px',
  marginBottom: '16px',
});

export const buttonGroup = style({
  display: 'flex',
  gap: '8px',
  padding: '24px 0',
});

export const list = style({
  display: 'flex',
  width: 'fit-content',
  listStyle: 'none',
  fontSize: '12px',
  fontWeight: 500,
  color: '#888',
  borderRadius: '999px',
  boxShadow: 'inset 0 0 0 1px #333',
  backgroundColor: '#111',
  padding: '10px 24px',
  marginBottom: '16px',
  gap: '8px',
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '12px',
  gap: '4px',
});

const trustSection = style({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px 0',
});

const logoCarousel = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxWidth: '512px',
  columnGap: '32px',
  rowGap: '8px',
});

const textWrap = style({
  marginBottom: '32px',
});

export const mouseIcon = style({
  position: 'absolute',
  bottom: '64px',
  alignSelf: 'center',
  animation: `${position} 5s infinite`,
});

export const section = {
  hero,
  trust: trustSection,
};

export const wrap = {
  logo: logoCarousel,
  text: textWrap,
};
