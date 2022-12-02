<template>
  <div class="shop">
    <div class="heading">
      <p class="text-center">WELCOME TO THE GALLERY OF</p>
      <div class="sign">
        <img src="/img/signatureofficial.png" />
      </div>
      <p class="text-center">FINE ARTIST</p>
    </div>
    <ListItem :images="images" :isDetail="isDetail" class="list"/>
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'

export default {
  name: 'ShopPage',
  
  components: {
    ListItem
  },
  data: function () {
    return {
      images: [
        {
          "id": "1",
          "name": "/img/trending.jpg"
        },
        {
          "id": "2",
          "name": "/img/print.jpg"
        },
        {
          "id": "3",
          "name": "/img/original.jpg"
        },
      ],
      isDetail : false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop {
  padding-top: 112px;
}
.heading {
  margin-bottom: 5em;
}
p {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  font-family: "Montserrat", Arial, sans-serif;
  color: #828282;
}

.sign {
  display: flex;
  justify-content: center;
}

img {
  width: 175px;
  height: 75px;
}
.list {
  padding-bottom: 112px;
}
</style>
