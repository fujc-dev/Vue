<template>
  <div class="main">
    <router-view></router-view>
    <mu-container class="tab-nav">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item title="Recents" to="/H1"
          active-class='router-link-exact-active router-link-active hover mu-bottom-item-active' icon="restore">
        </mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" to="/H2"
          active-class='router-link-exact-active router-link-active hover mu-bottom-item-active' icon="favorite">
        </mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" to="/H3"
          active-class='router-link-exact-active router-link-active hover mu-bottom-item-active' icon="books">
        </mu-bottom-nav-item>
        <mu-bottom-nav-item title="Books" to="/H4"
          active-class='router-link-exact-active router-link-active hover mu-bottom-item-active' icon="location_on">
        </mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
  import { Group, Cell } from "vux";


  export default {
    data() {
      return {
        bottomNav: 'recents'
      }
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
      }
    }
  }

</script>

<style>
  .main{overflow: hidden;}
  .main .container.tab-nav {
    position: fixed;
    bottom: 0px;
    z-index: 9999;
    height: 56px;
  }
</style>