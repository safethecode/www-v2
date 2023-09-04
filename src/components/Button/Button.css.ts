import { style, styleVariants } from '@vanilla-extract/css';

const button = style({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 800,
  border: 'none',
  borderRadius: '8px',
  padding: '10px 14px',
  gap: '4px',
  appearance: 'button',
  cursor: 'pointer',

  transition: 'background-color 0.15s',

  ':hover': {
    backgroundColor: '#ccc',
  },
});

export const buttonVariant = styleVariants({
  primary: [
    button,
    {
      backgroundColor: 'white',
    },
  ],
  outline: [
    button,
    {
      color: 'white',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px hsla(0, 0%, 100%, .5)',

      ':hover': {
        backgroundColor: 'hsla(0, 0%, 12%, 1)',
      },
    },
  ],
  ghost: [
    button,
    {
      color: 'white',
      backgroundColor: 'transparent',

      ':hover': {
        backgroundColor: 'hsla(0, 0%, 12%, 1)',
      },
    },
  ],
});
