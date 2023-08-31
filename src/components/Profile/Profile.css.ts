import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  width: 'min-content',
  alignItems: 'center',
  borderRadius: '8px',
  textDecoration: 'none',
  padding: '8px',
  gap: '8px',
  transition: 'background .2s ease',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: 'hsl(0, 0%, 10%)',
  },
});

export const avatar = style({
  width: '32px',
  borderRadius: '999px',
});

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const name = style({
  fontSize: '14px',
  fontWeight: 500,
  color: 'white',
});

export const socialId = style({
  fontSize: '12px',
  fontWeight: 400,
  color: 'hsl(0, 0%, 63%)',
});
