<template>
    <div v-if="show" class="notification">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
      show: Boolean
    }
  }
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #b60000;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
  }
  </style>