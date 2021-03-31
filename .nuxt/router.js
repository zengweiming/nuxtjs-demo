import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55ecd233 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _7faefa28 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _76689340 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _57b793c0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _307af4ec = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _4a1df876 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _3e81d70d = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _55ecd233,
    children: [{
      path: "",
      component: _7faefa28,
      name: "home"
    }, {
      path: "/login",
      component: _76689340,
      name: "login"
    }, {
      path: "/register",
      component: _76689340,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _57b793c0,
      name: "profile"
    }, {
      path: "/settings",
      component: _307af4ec,
      name: "settings"
    }, {
      path: "/editor",
      component: _4a1df876,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3e81d70d,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
