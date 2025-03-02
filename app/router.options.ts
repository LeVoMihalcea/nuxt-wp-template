import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
    scrollBehavior: (to, from, savedPosition) => {
        // If only the query params change, do not scroll
        if (to.path === from.path && to.fullPath !== from.fullPath) {
            return !to.path.includes('/staff');
        }

        // Smooth scroll to anchor if hash exists
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

        // Restore scroll position if navigating back/forward
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
