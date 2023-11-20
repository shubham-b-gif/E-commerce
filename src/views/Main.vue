<template >
    <div class="div-2">
        <Header/>
        <ProductPage/>
    </div>
</template>
<script>
import Header from './Header.vue';
import ProductPage from './ProductPage.vue';
export default {
    name: 'MainPage',
    components: {
        Header,
        ProductPage
  }
}
</script>
<style >
.div-2 {
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
  }
}
</style>