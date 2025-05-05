module.exports = {
  setMaxForVw: true,
  // Global reference viewport width for dpx units
  dpxViewportSize: 1440,

  // dpxViewportSizes: {
  //   // Direct breakpoint references
  //   xs: 375,
  //   sm: 768,

  //   // Breakpoint collections
  //   $desktop: 1440,
  //   $tablet: 768,
  //   $mobile: 375
  // },
  theme: {
    breakpoints: {
      iphone: '0',
      mobile: '480px',
      ipad_portrait: '768px',
      ipad_landscape: '1024px',
      desktop_md: '1200px',
      desktop_lg: '1440px',
      desktop_xl: '1920px',
    },

    breakpointCollections: {
      $mobile: '<=mobile',
      $tablet: 'ipad_portrait/ipad_landscape',
      $desktop: '>=desktop_md',
      $lg: '>=ipad_landscape',
      $sm: '<=ipad_portrait',
    },

    arrows: {
      travel: '0.1em',
    },

    colors: () => ({
      transparent: 'transparent',
      dbg: 'yellow',

      body: {
        foreground: '#000000',
        background: '#E8E6E4',
      },
    }),

    container: {
      maxWidth: {
        iphone: '100%',
        mobile: '560px',
        ipad_portrait: '810px',
        ipad_landscape: '100%',
        desktop_md: '100%',
        desktop_lg: '100%',
        desktop_xl: '1920px',
      },

      padding: {
        iphone: '20px',
        mobile: '20px',
        ipad_portrait: '20px',
        ipad_landscape: '25dpx',
        desktop_md: '25dpx',
        desktop_lg: '25dpx',
        desktop_xl: '25dpx',
      },
    },

    columns: {
      count: {
        iphone: 6,
        mobile: 6,
        ipad_portrait: 12,
        ipad_landscape: 12,
        desktop_md: 12,
        desktop_lg: 12,
        desktop_xl: 12,
      },
      gutters: {
        iphone: '20px',
        mobile: '20px',
        ipad_portrait: '20px',
        ipad_landscape: '25dpx',
        desktop_md: '25dpx',
        desktop_lg: '25dpx',
        desktop_xl: '25dpx',
      },
    },

    typography: {
      /* `base` is the px value of 1rem set as font-size on the html element. */
      base: '20px',

      /* line heights per breakpoint */
      lineHeight: {
        iphone: 1.5,
        mobile: 1.5,
        ipad_portrait: 1.5,
        ipad_landscape: 1.5,
        desktop_md: 1.5,
        desktop_lg: 1.5,
        desktop_xl: 1.5,
      },

      /* main font sizing map */
      sizes: {
        /* this is per SIZE followed by per BREAKPOINT */
        base: {
          iphone: '18px',
          mobile: '18px',
          ipad_portrait: '18px',
          ipad_landscape: '20dpx',
          desktop_md: '20dpx',
          desktop_lg: '20dpx',
          desktop_xl: '20dpx',
        },
      },

      sections: {},

      families: {
        main: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],

        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },

    spacing: {},
  },
}
