<template>
  <div class="spalm-header">
    <div class="header__desktop">
      <div></div>
      <ul>
        <li>
          <router-link to="/">SHOP</router-link>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
      <div class="shopping">
        <router-link to="/asdf">
          <small>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </small>
          <small class="header__shopping--count">0</small>
        </router-link>
      </div>
    </div>
    <div class="header__laptop">
      <font-awesome-icon icon="fa-solid fa-bars" class="header__laptop--bars" />
      <ul class="header__laptop--list">
        <li>
          <router-link to="/">SHOP</router-link>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
        <li>
          <router-link to="/asdf">
            <small>
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </small>
            <small class="header__shopping--count">0</small>
          </router-link>

        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'spalm-header',
  props: {

  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__desktop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__desktop ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

.header__desktop ul li {
  padding: 30px 10px;
  font-size: 13px;
}

.header__desktop ul li a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
}

.header__desktop ul li a:hover {
  color: black;
}

.header__shopping--count {
  position: absolute;
  top: 15px;
  font-size: 11px;
  color: white;
  background: #d1c286;
  border-radius: 50%;
  padding: 0 5px;
}

.shopping a {
  color: black;
}

.header__laptop {
  display: none;
}

.header__laptop:hover .header__laptop--list {
  display: block;
}

.header__laptop--list {
  display: none;
  list-style-type: none;
  padding: 0;
  min-width: 100px;
}

.header__laptop li {
  padding: 3px 0;
}

.header__laptop li a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
}

.header__laptop li a:hover {
  color: rgba(0, 0, 0, 0.8);
}

.header__laptop li:last-child {
  position: absolute;
}

.header__laptop .header__shopping--count {
  position: absolute;
  top: -5px;
  font-size: 11px;
  color: white;
  background: #d1c286;
  border-radius: 50%;
  padding: 0 5px;
}

@media only screen and (max-width: 768px) {
  .header__desktop {
    display: none;
  }

  .spalm-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;
  }

  .header__laptop {
    display: block;
    position: relative;
    padding: 20px 0;
    height: 44px;
    width: 44px;
  }
}
</style>
  