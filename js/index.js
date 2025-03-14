/**
 * BRANDO APPLICATION FRONTEND
 * (c) 2023
 */

/**
 * JUPITER IMPORTS
 */
import {
  Application,
  Cookies,
  // Draggable,
  // Dropdown,
  Events,
  Lazyload,
  Links,
  MobileMenu,
  Moonwalk,
  // Popover,
  FixedHeader,
  // EqualHeightImages,
  ScrollSpy,
  // Toggler,
  Typography,
  gsap,
  Dom,
  Dataloader,
  // ScrollTrigger,
} from '@brandocms/jupiter'

import Panama from '@univers-agency/panama'

/**
 * APP SPECIFIC MODULE IMPORTS
 */

/**
 * CONFIG IMPORTS
 */
import configureBreakpoints from './config/BREAKPOINTS'
import configureHeader from './config/HEADER'
import configureMobileMenu from './config/MOBILE_MENU'
import configureMoonwalk from './config/MOONWALK'

import '../css/app.css'

const app = new Application({
  breakpointConfig: configureBreakpoints,
  faderOpts: {
    fadeIn: (callback) => {
      if (Dom.hasClass(document.documentElement, 'is-live-preview')) {
        gsap.set('.fader', { display: 'none' })
        document.body.classList.remove('unloaded')
        callback()
        return
      }

      gsap.to('.fader', {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        onComplete: () => {
          if (window.bfTO) {
            clearTimeout(window.bfTO)
          }
          gsap.set('.fader', { display: 'none' })
          document.body.classList.remove('unloaded')
        },
      })
      callback()
    },
  },
})

app.registerCallback(Events.APPLICATION_READY, () => {
  app.links = new Links(app, { triggerEvents: false })
  app.lazyload = new Lazyload(app, { useNativeLazyloadIfAvailable: false })
})

app.registerCallback(Events.APPLICATION_PRELUDIUM, () => {
  app.moonwalk = new Moonwalk(app, configureMoonwalk(app))
  app.header = new FixedHeader(app, configureHeader(app))
  app.mobileMenu = new MobileMenu(app, configureMobileMenu(app))
  app.cookies = new Cookies(app)
  app.typo = new Typography()
  app.scrollSpy = new ScrollSpy(app)

  app.dataloaders = []
  Dom.all('[data-loader]').forEach(($dl) =>
    app.dataloaders.push(
      new Dataloader(app, $dl, {
        onFetch: (dataloader) => {
          const mw = new Moonwalk(
            app,
            configureMoonwalk(app),
            dataloader.$canvasEl
          )
          new Lazyload(
            app,
            { useNativeLazyloadIfAvailable: false },
            dataloader.$canvasEl
          )
          mw.ready()
        },
      })
    )
  )

  app.panama = new Panama(app, {
    // triggerContainer: false,
    wheel: false,
    extendedEnd: true,
    padContainerEnd: true,
    loopExperimental: false,
    draggableDefaults: {
      edgeResistance: 0.35,
      dragClickables: false,
      overshootTolerance: 1,
    },
  })
})

app.registerCallback(Events.APPLICATION_REVEALED, () => {
  // called after Application is finished revealing
})

// trigger ready state
if (
  document.attachEvent
    ? document.readyState === 'complete'
    : document.readyState !== 'loading'
) {
  app.initialize()
} else {
  document.addEventListener('DOMContentLoaded', app.initialize.apply(app))
}
