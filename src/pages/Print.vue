<template>
  <div class="print">
    <div class="heading">
      <p class="text-center">SHOP</p>
      <h2 class="text-center">PRINT</h2>
    </div>
    <ListItem :images="images" :isDetail="isDetail" class="list" />
  </div>
</template>
  
<script>

import ListItem from '../components/ListItem.vue'

export default {
  name: 'PrintPage',

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
      isDetail: true
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.print {
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
  