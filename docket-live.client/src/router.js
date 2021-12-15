import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/join',
    name: 'StudentLandingPage',
    component: loadPage('StudentLandingPage'),
    beforeEnter: authSettled
  },
  {
    path: '/instructor',
    name: 'InstructorLandingPage',
    component: loadPage('InstructorLandingPage'),
    beforeEnter: authSettled,
    children: [{
      path: 'surveys',
      name: 'SurveysPage',
    component: loadPage('SurveysPage'),
    beforeEnter: authSettled
    }, {
      path: 'livePolls',
      name: 'LivePollsPage',
    component: loadPage('LivePollsPage'),
    beforeEnter: authSettled
    }, {
      path: 'results',
      name: 'ResultsPage',
    component: loadPage('ResultsPage'),
    beforeEnter: authSettled
    }]
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
