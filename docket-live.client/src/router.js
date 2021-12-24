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
    beforeEnter: authGuard
  },
  {
    path: '/instructor',
    name: 'InstructorLandingPage',
    component: loadPage('InstructorLandingPage'),
    beforeEnter: authGuard,
    children: [{
      path: 'surveys',
      name: 'SurveysPage',
    component: loadPage('SurveysPage'),
    beforeEnter: authGuard
    }, {
      path: 'livePolls',
      name: 'LivePollsPage',
    component: loadPage('LivePollsPage'),
    beforeEnter: authGuard
    }, {
      path: 'results',
      name: 'ResultsPage',
    component: loadPage('ResultsPage'),
    beforeEnter: authGuard
    }]
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/startLivePoll/:id',
    name: 'StartLivePollPage',
    component: loadPage('StartLivePollPage'),
    beforeEnter: authGuard
  },
  {
    path: '/startLivePoll/:id/question/:index',
    name: 'QuestionPage',
    component: loadPage('QuestionPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
