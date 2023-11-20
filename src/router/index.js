const routes = [
    {
      path: '/product-listing',
      name: 'ProductListing',
      component: () => import(/* webpackChunkName: "product-listing" */ '../views/ProductListing.vue'),
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: () => import(/* webpackChunkName: "product-page" */ '../views/ProductPage.vue'),
    },
    // Add more routes as needed
  ];
  