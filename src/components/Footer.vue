<template>
  <div>
    <footer class="footer">
      <div class="footer-content">

        <div style="margin-bottom: 10px;" title="Back to Top">
          <button class="upload-button" @click="scrollToTop">
              <i class="fas fa-angle-double-up"></i>
          </button>
      </div>
        <div class="footer-logo"> © {{new Date().getFullYear()}}  by Sanskar Jaiswal</div>
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
          <a href="https://twitter.com/_Sanskkkkar" target="_main" title="X.com"><i class="fa-brands fa-x-twitter"></i></a>
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


      </div>
      <div class="icon-holder">
      <p>This website is built with  </p>
    <div class="icons">
      <div style="display: flex; align-items: center; gap: 20px;">
        <i class="fa-brands fa-html5" title="HTML5" style="color: #E34F26; margin-left: 20px;"></i>
        <i class="fa-brands fa-css3" title="CSS3" style="color: #1572B6;"></i>
        <i class="fa-brands fa-js" title="JavaScript (ES6+)" style="color: #F7DF1E;"></i>
        <i class="fa-brands fa-vuejs" title="Vue.js" style="color: #42B883;"></i>
        <i class="fa-brands fa-node-js" title="Node.js" style="color: #8CC84B;"></i>
        <i class="fa-solid fa-leaf" title="MongoDB" style="color: #47A248;"></i>
        <img src="../assets/triangle.svg" alt="Server Icon" title="Vercel" width="17" height="17">
      </div>
    </div>
  </div>
  <div class="footer-text" title="Will only update once every 24 hours">
    <p>
      Total Visitors: <span>{{ counter === 0 ? '346' : counter }}</span>
      <i class="fa-solid fa-plus plus-icon" :disabled="!isUpdated"></i>
    </p>
  </div>
  <!-- <a href="https://www.hitwebcounter.com" target="_blank">
    <img src="https://hitwebcounter.com/counter/counter.php?page=17775593&style=0006&nbdigits=5&type=ip&initCount=172" title="Counter Widget" Alt="Visit counter For Websites"   border="0" />
  </a>  -->
    </footer>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "FooterItem",
  setup() {
    const counter = ref(0); // Initialize counter with 0
    const isUpdated = ref(false); // Tracks if the counter is updated

    const showWarning = () => {
      alert("This site is under construction.");
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const updateLocalStorage = (now) => {
      localStorage.setItem("lastVisit", now.toString());
    };

    onMounted(() => {
      const now = new Date();
      const lastVisit = localStorage.getItem("lastVisit");
      const lastVisitDate = lastVisit ? new Date(lastVisit) : new Date(0); // Default to epoch if not found
      const is24HoursPassed = !lastVisit || now - lastVisitDate > 24 * 60 * 60 * 1000;

      const backendServer = process.env.VUE_APP_BACKEND_SERVER;

      // Fetch the total visit count from the server
      axios
        .get(`${backendServer}/get-counter`)
        .then((response) => {
          counter.value = response.data.count; // Update counter from server
        })
        .catch((error) => {
          console.error("Error fetching counter from server:", error);
          counter.value = "336"; // Fallback value
        });

      // Increment counter if 24 hours have passed
      if (is24HoursPassed) {
        axios
          .post(`${backendServer}/increment-counter`)
          .then((response) => {
            counter.value = response.data.count; // Update counter from server after increment
            updateLocalStorage(now);
            isUpdated.value = true; // Show the "+1" icon
            setTimeout(() => {
              isUpdated.value = false; // Hide icon after 3 minutes
            }, 3 * 60 * 1000);
            console.log("Counter updated on the server");
          })
          .catch((error) => {
            console.error("Error updating counter on server:", error);
          });
      }
    });

    return { counter, showWarning, scrollToTop };
  },
};
</script>


<style scoped>
.plus-icon {
  color: green; /* Change to desired color */
  margin-left: 5px;
  animation: fade-out 2s forwards; /* Optional fade-out animation */
}

.plus-icon:disabled {
  opacity: 0.2; /* Make it more faded when disabled */
  cursor: not-allowed; /* Show 'not-allowed' cursor */
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.upload-button {
  background: linear-gradient(90deg, #555, #777, #999);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.upload-button i {
  font-size: 1.5rem;
}

.upload-button:hover {
  background: linear-gradient(90deg, #777, #999, #bbb);
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

.upload-button:active {
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

  .icon-holder{
    display: flex;
    flex-direction: column;
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
  