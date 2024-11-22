<template>
    <div class="fixedsidebar">
        <div class="fixed-sidebar">
            <a
              href="https://www.facebook.com/SansKar.jaiswal.2904"
              target="_main"
              title="Facebook"
            >
              <button class="social-button">
                <i class="fab fa-facebook-f"></i>
               </button>
            </a>
            <a
              href="https://www.linkedin.com/in/sanskkkkar/"
              title="LinkedIn"
              target="_main"
            >
              <button class="social-button">
                <i class="fab fa-linkedin"></i>
              </button>
            </a>
            <router-link to="/contactme" target="_main" title="Resume">
              <button class="social-button">
                <i class="far fa-file-pdf"></i>
              </button>
            </router-link>
            <a
              href="https://twitter.com/_Sanskkkkar"
              target="_main"
              title="Twitter"
            >
              <button class="social-button">
                <i class="fab fa-twitter"></i>
              </button>
            </a>
    
            <router-link to="/contactme" target="_main" title="Code">
              <button class="social-button">
                <i class="fas fa-code"></i>
              </button>
            </router-link>
            <a
              href="https://github.com/SanskarJaiswal2904"
              title="GitHub"
              target="_main"
            >
              <button class="social-button">
                <i class="fab fa-github"></i>
              </button>
            </a>
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sanskarjaiswal2904@gmail.com&tf=1"
              target="_main"
              title="Gmail"
            >
              <button class="social-button">
                <i class="fas fa-envelope"></i>
              </button>
            </a>

          </div>
    </div>
</template>

<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FixedSidebar',
    setup() {
      return {};
    },
  });
  </script>



<style scoped>
.fixed-sidebar {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    z-index: 10;
}

.social-button {
    margin-bottom: 10px;
    background: linear-gradient(135deg, #d4fc79, #96e6a1); /* Green gradient */
    /* LinkedIn blue */
    color: black;
    cursor: pointer;
    border: 1px solid #9cd1f4;
    margin-right: 10px;
    width: 50px;
    /* Adjust width and height as needed */
    height: 50px;
    border-radius: 40%;
    /* Makes the button circular */

}

.social-button:hover {
  background: linear-gradient(135deg, #96e6a1, #d4fc79); /* Reverse gradient */
  color: black;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

}

.image-container {
    width: 100%;
    height: 100%;
    background-position: center;
    z-index: 1;
}

.image-container img {
    width: auto;
    height: auto;
}

@media screen and (max-width: 900px) {
    
    .container img{
        width: 50px;
    }
  }
  

</style>
