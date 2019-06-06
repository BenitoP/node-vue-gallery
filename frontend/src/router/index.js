import Vue from 'vue'
import Router from 'vue-router'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Dashboard from '../views/Dashboard'
import Gallery from '../views/Gallery'
import Upload from '../views/Upload'
import GalleryView from '../views/Image'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
      meta: {
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        guest: true
      }
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/',
          name: 'gallery',
          component: Gallery
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: Gallery
        },
        {
          path: '/gallery/:photoId',
          name: 'gallery-image',
          component: GalleryView
        },
        {
          path: '/upload',
          name: 'upload',
          component: Upload,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/signin',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    next()
  }
})

/* if (localStorage.getItem('jwt') == null) {
  next()
} else {
  next({ name: 'userboard' })
}
} else {
next()
}
}) */

export default router
