<template>
    <div>
      <NavBar />
      <MainSection />
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from './components/NavBar.vue';
  import MainSection from './components/MainSection.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    name: 'HomeTask',
    components: {
      NavBar,
      MainSection,
      Footer,
    }
  }
  </script>
  
  <style scoped>
  /* You can add specific styles for Home.vue here */
  </style>
  