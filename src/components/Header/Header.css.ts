import { style } from '@vanilla-extract/css';

const header = style({
  position: 'fixed',
  top: '48px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  width: 'fit-content',
  listStyle: 'none',
  fontSize: '12px',
  fontWeight: 500,
  color: '#888',
  borderRadius: '999px',
  border: '1px solid #333',
  boxShadow: '0 25px 50px -12px #ffffff15',
  backgroundColor: '#111',
  padding: '4px 8px',
  gap: '8px',
  zIndex: '999',
  margin: '0 auto',
});

const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const menu = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '0 8px',
});

const anchor = style({
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'background-color 0.15s',
  borderRadius: '999px',
  padding: '4px',

  ':hover': {
    backgroundColor: '#222',
  },
});

export const wrap = {
  header,
  nav,
};

export const item = {
  menu,
  anchor,
};
