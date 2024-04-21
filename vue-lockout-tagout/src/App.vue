<template>
  <header>
    <img src="../src/assets/In-N-Out_Burger_font.png" alt="">
    <p class="title">Lathrop Meat Department<br>Night Sanitation Daily Lockout Log</p>
    <p>Date: {{ currentDate }}</p>
  </header>
  <LockoutVue />
  <TagoutVue />
  <filter-search-vue />
</template>

<script>
import FilterSearchVue from './components/FilterSearch.vue'
import LockoutVue from './components/Lockout.vue'
import TagoutVue from './components/Tagout.vue'
export default {
  components: {
    LockoutVue,
    TagoutVue,
    FilterSearchVue
  },
  data() {
    return {
      currentDate: ''
    }
  },
  created() {
    this.currentDate = new Date().toDateString();
  }
}
</script>

<style scoped>
header {
  text-align: center;
  font-family: 'Montserrat';
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
    }
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      object-position:50% 50%;
    }
    p {
      text-align: center;
    }
    
</style>
