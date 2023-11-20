<template>
    <div>
      <!-- Fixed Navbar -->
      <!-- Your Navbar with search and menu options -->
  
      <div class="container mt-4">
        <div class="row">
          <!-- Sidebar with filter options -->
  
          <div class="col-md-8">
            <!-- Product listing using cards -->
            <div v-for="product in products" :key="product.id" class="card mb-3">
              <!-- Card content -->
              <div class="card-body">
                <!-- Product image with hover animation -->
                <img
                  @mouseover="hoverAnimation(true)"
                  @mouseleave="hoverAnimation(false)"
                  class="card-img-top"
                  :src="product.image"
                  alt="Product Image"
                />
                <!-- Product details -->
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <!-- Add to cart button with animation -->
                <button @click="addToCartAnimation" class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHovered: false,
        products: [
          // Sample product data
          { id: 1, name: 'Product 1', description: 'Description 1', image: 'product1.jpg' },
          // Add more products as needed
        ],
      };
    },
    methods: {
      hoverAnimation(isHovered) {
        // Add hover animation logic here
        this.isHovered = isHovered;
      },
      addToCartAnimation() {
        // Add add to cart animation logic here
      },
    },
  };
  </script>
  
  <style>
  .card-img-top {
  transition: transform 0.3s ease;
}

.card-img-top.hovered {
  transform: scale(1.1);
}
  </style>
  