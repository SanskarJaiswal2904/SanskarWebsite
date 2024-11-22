<template>
  <div>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">© 2024 by Sanskar Jaiswal</div>
        <div class="footer-links">
          <router-link to="/" title="Home" target="_main" style="font-weight: bold;">Home</router-link>
          <a href="javascript:void(0);" @click="showWarning">
            Blog
          </a>
          <router-link to="/contactme" target="_main">Resume</router-link>
          <router-link to="/contactme" target="_main">Contact Me</router-link>
        </div>

        <div class="footer-social">
          <a href="https://www.facebook.com/SansKar.jaiswal.2904" target="_main" title="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="https://twitter.com/_Sanskkkkar" target="_main" title="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/sanskkkkar/?hl=en" target="_main" title="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/sanskkkkar/" target="_main" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <router-link to="/contactme" target="_main" title="Code"><i class="fas fa-code"></i></router-link>
          <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sanskarjaiswal2904@gmail.com&tf=1" target="_main" title="Gmail"><i class="fas fa-envelope"></i></a>
          <a href="https://github.com/SanskarJaiswal2904" target="_main" title="GitHub"><i class="fab fa-github"></i></a>
          <router-link to="/contactme" target="_main" title="Resume"><i class="far fa-file-pdf"></i></router-link>
        </div>

        <div class="footer-text">
          © 2024 Sanskar Jaiswal. All rights reserved.
        </div>

        <div class="footer-text">
          <!-- <p>Total Visitors: <span>{{ counter }}</span></p> -->
        </div>
      </div>
      <div class="icon-holder">
      <p>Built with  :  </p>
    <div class="icons">
      <div style="display: flex; align-items: center; gap: 20px;">
        <i class="fa-brands fa-html5" title="HTML5" style="color: #E34F26; margin-left: 20px;"></i>
        <i class="fa-brands fa-css3" title="CSS3" style="color: #1572B6;"></i>
        <i class="fa-brands fa-js" title="JavaScript (ES6+)" style="color: #F7DF1E;"></i>
        <i class="fa-brands fa-vuejs" title="Vue.js" style="color: #42B883;"></i>
        <i class="fa-solid fa-leaf" title="MongoDB" style="color: #47A248;"></i>
      </div>
      
    </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'footer-item',
  setup() {
    const showWarning = () => {
        alert("This site is under construction.");
  };
    const counter = ref(78);

    onMounted(() => {
      const now = new Date();
      const lastVisit = localStorage.getItem("lastVisit");
      let count = parseInt(localStorage.getItem("counter")) || 0;

      if (!lastVisit || new Date(lastVisit).toDateString() !== now.toDateString()) {
        count++;
        localStorage.setItem("counter", count);
        localStorage.setItem("lastVisit", now.toString());
      }

      // Make API call to update the global visit count on the server
      fetch('/api/increment-counter', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
          counter.value = data.count;  // Update the counter with the response from the server
        });

      // Update the local counter in Vue
      counter.value = count;
    });

    return { counter, showWarning };
  },
};
</script>



  
  <style scoped>
  .icon-holder{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 20px;
  }
  .icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    
  }

  .footer {
    background: linear-gradient(90deg, #333, #555, #777);
    color: #fff;
    padding: 50px 0;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100vw;
}

  
  .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .footer-logo {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
  }
  
  .footer-links {
      margin-bottom: 20px;
  }
  
  .footer-links a {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
      color: #007bff;
  }
  
  .footer-social {
      margin-bottom: 20px;
  }
  
  .footer-social a {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      font-size: 20px;
      transition: color 0.3s ease;
  }
  
  .footer-social a:hover {
      color: #007bff;
  }
  
  .footer-text {
      font-size: 14px;
  }
  </style>
  