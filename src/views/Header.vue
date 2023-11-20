<template >
    
      <div class="div-3">
        <div class="div-4">
          <div class="div-5">Welcome to Our Store Hiscraves</div>
          <div class="div-6">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed49bfb-1ea5-474e-8537-5bcb054d3de4?" class="img" />
            <div class="div-7">Call Us: 1234567890</div>
          </div>
        </div>
      </div>
      <div class="div-8">
        <div class="div-9">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c59fbe-c45a-45d6-9327-f972319e49bc?"
            class="img-2" />
          <div class="div-10">Logo Here</div>
          <div class="div-11">
            <img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa8fce13-0cc3-46cd-b751-0836e31e0881?"
              class="img" /><img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd253d5a-b55e-40d6-82e6-b147822c12b5?"
              class="img" /><img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b274ab4-d921-4a12-9500-b9ac6eb4036d?"
              class="img" /><img loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/064a8b86-0d8c-4086-8b4c-44dcea56a210?" class="img" />
          </div>
        </div>
      </div>
</template>
<script>
export default {
    name: 'HeaderPage',
}
</script>
<style scoped>


.div-3 {
  background-color: #1f1f1f;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
}

@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
  }
}

.div-4 {
  display: flex;
  width: 100%;
  max-width: 1102px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.div-5 {
  color: #fff;
  width: 246px;
  margin: auto 0;
  font: 500 14px/17px Montserrat, sans-serif;
}

.div-6 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
}

.div-7 {
  color: #fff;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-7 {
    white-space: initial;
  }
}

.div-8 {
  box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px;
}

@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
  }
}

.div-9 {
  display: flex;
  width: 100%;
  max-width: 1120px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}

.div-10 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 7px;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.div-11 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-11 {
    justify-content: center;
  }
}




</style>