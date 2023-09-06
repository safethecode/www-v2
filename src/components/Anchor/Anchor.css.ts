import { style } from '@vanilla-extract/css';

export const anchor = style({
  color: '#fff',
  cursor: 'pointer',
  marginLeft: '4px',
  textDecoration: 'none',
  transition: 'color 0.15s',

  ':hover': {
    color: '#888',
  },
});
