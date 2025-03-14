import { Dom, gsap } from '@brandocms/jupiter'
import { SplitText } from '../modules/SplitText'

gsap.registerPlugin(SplitText)

export default (app) => ({
  rootMargin: '0% 0% -2% 0%',
  threshold: 0,
  initialDelay: 100,

  walks: {
    default: {
      interval: 0.2,
      duration: 0.35,
      transition: null,
    },

    r: {
      interval: 0.2,
      duration: 0.35,
      transition: null,
    },

    l: {
      interval: 0.08,
      duration: 0.35,
      transition: null,
    },

    u: {
      interval: 0.1,
      duration: 0.35,
      transition: null,
    },

    uFast: {
      interval: 0.03,
      duration: 0.35,
      alphaTween: true,
      transition: {
        from: {
          y: 30,
        },

        to: {
          y: 0,
          ease: 'power3.out',
        },
      },
    },
  },
})
