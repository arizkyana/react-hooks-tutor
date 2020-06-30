export default (theme) => ({
  debug: {
    '& * ': {
      border: '1px solid gold'
    }
  },
  profile: {
    // background: 'red',
    margin: '3rem 0',
    padding: '1rem',
    borderRadius: '0.5rem'
  },
  'avatar-lg': {
    width: theme.spacing(8),
    height: theme.spacing(8)
  },

  // menu 
  menu: {
    padding: 0,
    '& > li': {
      listStyleType: 'none',
      display: 'inline',
      marginRight: '.8rem',
      '&:hover': {
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }
  },

  // nav
  nav: {
    borderBottom: '1px solid gray'
  },

  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});