import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Auth from "./Auth.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth/Signin.vue'),
      meta: {
        redirectIfLoggedIn: localStorage.getItem("access_token")
          ? true
          : false,

        layout: "full",
      },
    },
    {
      path: '/home/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth/Signup.vue')
    },
    {
      path: '/home/tickets/:from/:to/:date',
      name: 'tickets',
      component: () => import('../views/Tickets.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Tickets",
        breadcrumb: [
          {
            text: "Tickets",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/ticket/details-seat/:route_id/:from/:to/:uuid',
      name: 'ticket',
      component: () => import('../views/TicketDetails.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Ticket",
        breadcrumb: [
          {
            text: "Ticket",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard/Dashboard.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Dashboard",
        breadcrumb: [
          {
            text: "dashboard",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/dashboard/profile',
      name: 'profile',
      component: () => import('../views/Dashboard/Profile.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Profile",
        breadcrumb: [
          {
            text: "Profile",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/dashboard/mytickets',
      name: 'mytickets',
      component: () => import('../views/Dashboard/MyTickets.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "mytickets",
        breadcrumb: [
          {
            text: "mytickets",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/dashboard/wallet',
      name: 'wallet',
      component: () => import('../views/Dashboard/Wallet.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Wallet",
        breadcrumb: [
          {
            text: "wallet",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/dashboard/points',
      name: 'points',
      component: () => import('../views/Dashboard/Points.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Points",
        breadcrumb: [
          {
            text: "points",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/dashboard/changepassword',
      name: 'changepassword',
      component: () => import('../views/Dashboard/Points.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Change Password",
        breadcrumb: [
          {
            text: "changepassword",
            active: true,
          },
        ],
      },
    },
    {
      path: "/error-404",
      name: "error-404",
      component: () => import("@/views/error/Error404.vue"),
      meta: {
        layout: "full",
      },
    },

  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.redirectIfLoggedIn)) {
    next({ path: "/home" });
    return;
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Auth.check()) {
      next();
      return;
    } else {
      router.push("/home/signin").catch(() => { });
    }
  } else {
    next();
  }
});

export default router
