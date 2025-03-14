import { Dom, gsap } from '@brandocms/jupiter'

export default (application) => ({
  // rafScroll: false,
  el: 'header[data-nav]',
  sections: {
    __home__: {},
  },

  default: {
    unPinOnResize: false,
    regBgColor: 'transparent',
    altBgColor: 'white',
  },
})
