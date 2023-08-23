export const boxStyles = {
  // style object for base or default style
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '3rem',
    width: '100%',
  },

  //styles for different variants (outline, solid, primary, etc)
  variants: {
    container: {
      alignItems: 'flex-start',
      backgroundColor: '#F8E4D0',
      minHeight: '100vh',
    },
    wrapper: {
      padding: '2rem',
      maxWidth: '1600px',
    },
    wrapperSmall: {
      maxWidth: '700px',
    },
    glass: {
      bgColor: 'rgba(255,255,255,0.2)',
      borderRadius: '1rem',
      backdropFilter: 'blur(16px)',
      boxShadow: ' 0 .25rem 4rem rgba(0,0,0,0.8)',
      border: '1px solid #fff',
    },
  },
};
