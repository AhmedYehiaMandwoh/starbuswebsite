import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Auth from "./Auth.js";


const router = createRouter({
  
  history: createWebHashHistory(),
  routes: [
    
    {
      path: '/',
      redirect: "/home",
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/home/privacy',
      name: 'privacy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Privacy.vue')
    },
    {
      path: '/home/private',
      name: 'Private',

      component: () => import('../views/Private.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Private",
        breadcrumb: [
          {
            text: "Private",
            active: true,
          },
        ],
      },
    },
    {
      path: '/home/business',
      name: 'Business',

      component: () => import('../views/Business.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "Business",
        breadcrumb: [
          {
            text: "Business",
            active: true,
          },
        ],
      },
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
      path: '/home/ticket/details-seat/:date/:schedule_id/:route_id/:from/:to/:uuid',
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
      path: '/home/invoice/:uuid',
      name: 'invoice',
      component: () => import('../views/TicketInvoice.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: "invoice",
        breadcrumb: [
          {
            text: "invoice",
            active: true,
          },
        ],
      },
    },
    // {
    //   path: '/home/dashboard/profile',
    //   name: 'profile',
    //   component: () => import('../views/Dashboard/Profile.vue'),
    //   meta: {
    //     requiresAuth: true,
    //     pageTitle: "Profile",
    //     breadcrumb: [
    //       {
    //         text: "Profile",
    //         active: true,
    //       },
    //     ],
    //   },
    // },
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
    // {
    //   path: "/error-404",
    //   name: "error-404",
    //   component: () => import("@/views/error/Error404.vue"),
    // },
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "error-404",
    // },

  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.redirectIfLoggedIn)) {
    next({ path: "/home" });
    return;
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('access_token')) {
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
