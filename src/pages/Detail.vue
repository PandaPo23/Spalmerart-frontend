<template>
  <div class="detail">
    <!-- {{ this.$route.params.id }} -->
    <p class="heading__title">SHOP</p>
    <h2 class="text-center">ORIGINAL</h2>
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" class="detail_carousel">
      <slide>
        <img src="/img/original.jpg" />
        <p class="slide__content">Preview photo may differ from actual product appearance.</p>
      </slide>
      <slide>
        <img src="/img/print.jpg" />
      </slide>
    </carousel>
    <div class="unframedOrframed">
      <div class="unframed">Unframed</div>
      <div class="framed">Framed</div>
    </div>
    <div class="unframedOrframed" data-aos="fade-up">
      <div class="framed">Buy Now</div>
    </div>
    <p class="addCart">ADD TO CART</p>
    <p class="budget">$160</p>
    <h2>The Escape from Swiss Cheese Island Painting (Framed)</h2>
    <p class="content">All the joy and excitement of The Escape from Swiss Cheese Island, except painted! ESCI is a
      script written by
      Stephen Palmer, and intended for animated motion picture. It tells the story of a young mouse, Finch, who is a
      savvy sailor and learned the trade from his late father, that sacrificed his life protecting his family from
      pirates when Finch was still an infant. Finch eventually grows up and this results in another run-in with the
      pirates during a sailing trip, who ends up capturing his girlfriend that he had accompanied on the excursion.
      Finch frantically chases after the pirates but gets caught in a storm before he could get to them and the storm
      wrecks his sailboat completely. He wakes up, washed up onto the shores of an island made entirely of Swiss cheese,
      that he later finds out is a horde of cheese stolen by the pirates, and floating in the ocean like Trash Island.
      In order to save his girlfriend, he meets an engineering genius, Sal, who helps him carve a new sailboat out of
      the cheese island. This is the depiction of Finch as he sails away with the boat made of Swiss cheese, with corks
      in the holes to keep it afloat. Spoiler alert: He saves his girlfriend and defeats the pirates! This illustration
      was created before the story was written, and was the inspiration for the entire script.

      Framed prints come with glass and are shipped for free anywhere in the US. Poster prints are shipped in mailing
      tubes. All sales are final.</p>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h6>Wonderful for Kid's Bedrooms</h6>
        <p class="content">The Escape from Swiss Cheese Island illustration depicts cartoon-like characters in a
          whimsical, imaginary world, proven to expand and spark the imagination and wonder of a child's heart, and
          hearts of all ages.</p>
      </div>
      <div class="col-md-6 col-sm-12">
        <h6>Wonderful for Kid's Bedrooms</h6>
        <p class="content">The Escape from Swiss Cheese Island illustration depicts cartoon-like characters in a
          whimsical, imaginary world, proven to expand and spark the imagination and wonder of a child's heart, and
          hearts of all ages.</p>
      </div>
    </div>
    <h4>Artwork Specifications</h4>
    <ul>
      <li>Authentic Giclée Print, Semi-Gloss. Matted and Framed</li>
      <li>Made in 2008</li>
      <li>Printed in 2022</li>
      <li>Frame Material and Size: Black Metal, Black Matte, 25" x 18"</li>
      <li>Free Shipping</li>
      <li>All Sales are Final</li>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: 'DetailPage',
  props: {

  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  width: 90%;
  margin: 0 auto;
}

.heading__title {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  line-height: 1.7;
  color: #828282;
  text-align: center;
}

img {
  width: 100%;
}

.slide__content {
  font-style: italic;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #828282;
  margin-top: 20px;
}

.detail_carousel {
  padding: 112px 0;
}

.unframedOrframed {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
}

.unframed {
  width: 140px;
  height: 60px;
  border: 1px solid #d1c286;
  background-color: white;
  color: #d1c286;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px
}

.framed {
  width: 140px;
  height: 60px;
  border: 1px solid #d1c286;
  background-color: #d1c286;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.addCart {
  text-align: center;
  color: #d1c286;
}

.budget {
  margin-top: 20px;
  color: #828282;
}

.content {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #828282;
  margin-bottom: 40px;
}

li {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #828282;
}

@media only screen and (max-width: 383px) {
  .unframedOrframed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
  