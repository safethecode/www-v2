import { style } from '@vanilla-extract/css';

export const background = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  backgroundImage:
    'linear-gradient(#fff .1em, transparent .1em), linear-gradient(90deg, #fff .1em, transparent .1em)',
  backgroundSize: '1em 1em',
  opacity: '0.1',
  zIndex: '-1',
});
