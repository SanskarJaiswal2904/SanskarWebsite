<template>
    <div>
      <NavBar />
      <div class="not-found-container">
        <img src="../assets/pagenotfound.png" alt="Page Not Found" height="450" />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for might be moved, renamed, or might never have existed.</p>
        <div class="text-white2">
          <router-link
            class="text-white2"
            to="/"
          >
            <i class="fas fa-link"></i> Contact Sanskar
          </router-link>
        </div>
      </div>      
    </div>
    <Footer />

  </template>
  
  <script>
  import Footer from './Footer.vue';
  import NavBar from './NavBar.vue';
  
  export default {
    name: 'PageNotFound',
    components: {
      NavBar,
      Footer,
    },
  };
  </script>


<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #f3f4f6, #dfe3e6);
  color: #2c3e50;
  font-family: 'Arial', sans-serif;
  padding: 0 20px;
}

.not-found-container img {
  margin-bottom: 2rem;
  margin-top: 3rem;
  max-width: 90%;
  border-radius: 15px;
}

.not-found-container h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #34495e;
}

.not-found-container p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.text-white2 {
  text-decoration: none;
  font-weight: normal;
  color: #2980b9;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border: 2px solid #2980b9;
  margin-bottom: 20px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.text-white2 i {
  margin-right: 8px;
}

.text-white2:hover {
  background-color: #2980b9;
  color: white;
  transform: scale(1.05);
}
</style>
