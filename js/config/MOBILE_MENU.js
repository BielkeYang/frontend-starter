import { Dom, gsap } from '@brandocms/jupiter'

export default _app => ({
  logoColor: '#000',
  logoPathSelector: 'svg path',
  contentSelector: 'section.main',
  hamburgerColor: '#000',

  onResize: m => {
    if (document.body.classList.contains('open-menu')) {
      gsap.set(m.bg, { height: window.innerHeight })
    }
  },

  openTween: m => {
    const timeline = gsap.timeline({ defaults: { overwrite: 'auto' } })

    m.hamburger.classList.toggle('is-active')
    document.body.classList.toggle('open-menu')
    const hamburger = Dom.find('#menu .hamburger')
    const hamburgerText = Dom.find(hamburger, '.hamburger-text')
    const main = Dom.find(m.header, '.main')

    timeline
      .set(m.lis, {
        opacity: 0,
      })
      .call(() => {
        // set hamburger text
        const newText = hamburger.dataset.closeText
        const currentText = hamburgerText.innerHTML.trim()

        let timeoutIterator = 0
        for (let i = currentText.length; i >= 0; i -= 1) {
          timeoutIterator++
          setTimeout(() => {
            hamburgerText.innerHTML = currentText.slice(0, i)
          }, 25 * timeoutIterator)
        }

        for (let i = 0; i <= newText.length; i += 1) {
          timeoutIterator++
          setTimeout(() => {
            hamburgerText.innerHTML = newText.slice(0, i)
          }, 25 * timeoutIterator)
        }
      })

      .fromTo(
        m.bg,
        {
          duration: 0.35,
          opacity: 0,
          height: window.innerHeight,
        },
        {
          display: 'block',
          duration: 0.35,
          opacity: 1,
          ease: 'none',
        }
      )
      .set(main, { display: 'flex' })
      .to(
        m.lis,
        {
          duration: 1,
          opacity: 1,
          ease: 'power3.out',
          stagger: 0.05,
        },
        '<'
      )
      .call(m._emitMobileMenuOpenEvent)
  },

  closeTween: m => {
    const timeline = gsap.timeline()
    const hamburger = Dom.find('#menu .hamburger')
    const hamburgerText = Dom.find(hamburger, '.hamburger-text')
    const main = Dom.find(m.header, '.main')

    timeline
      .call(() => {
        // set hamburger text
        const newText = hamburger.dataset.openText
        const currentText = hamburgerText.innerHTML.trim()
        let timeoutIterator = 0
        for (let i = currentText.length; i >= 0; i -= 1) {
          timeoutIterator++
          setTimeout(() => {
            hamburgerText.innerHTML = currentText.slice(0, i)
          }, 25 * timeoutIterator)
        }

        for (let i = 0; i <= newText.length; i += 1) {
          timeoutIterator++
          setTimeout(() => {
            hamburgerText.innerHTML = newText.slice(0, i)
          }, 25 * timeoutIterator)
        }
      })
      .call(() => {
        m._emitMobileMenuClosedEvent()
        document.body.classList.toggle('open-menu')
        m.hamburger.classList.toggle('is-active')
      })
      .set(main, { display: 'none' })
      .to(m.bg, {
        duration: 0.25,
        opacity: 0,
        ease: 'sine.in',
      })
      .set(m.nav, { clearProps: 'height' })
  },
})
