import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.path !== from.path && to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            left: 0,
            top: 0,
            el: to.hash,
            behavior: 'smooth',
          });
        }, 500);
      });
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      };
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          left: savedPosition?.left || 0,
          top: savedPosition?.top || 0,
        });
      }, 500);
    });
  },
};
