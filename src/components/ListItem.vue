<template>
  <div class="row">
    <div class="col-md-4 col-sm-12 image" v-for="(image, index) in images" v-bind:key="index">
      <img v-bind:src="image.name" v-on:click="clicked(image.id)" />
      <div class="text-center image__title">{{ types[index] }}</div>
      <span class="image__sale" v-if="index == 0">🔥</span>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'SpalmerartContact',
  props: [
    'images', 'isDetail'
  ],
  data: function () {
    return {
      types: [
        'Trending', 'Print', 'Original'
      ]
    }
  },
  methods: {
    clicked(id) {
      if (!this.isDetail) {
        if (id == 1) this.$router.push({ path: '/trending' });
        else if (id == 2) this.$router.push({ path: '/print' });
        else this.$router.push({ path: 'original' });
      } else {
        this.$router.push({ path: `/detail/${id}`});
      }

    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  height: 350px;
}

img:hover {
  opacity: 0.5;
}

.image {
  position: relative;
}

.image__title {
  font-size: 12px;
  letter-spacing: 2px;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: bold;
}

.image__sale {
  position: absolute;
  top: 10px;
  left: 20px;
  padding: 10px;
  background: #d1c286;
  color: #fff;
  border-radius: 50%;
}
</style>
  