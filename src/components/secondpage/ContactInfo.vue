<template>
  <NavBar />
  <div class="contactinfo">
    <main>

      <img id="gif-image" src="../../assets/flowers5-unscreen.gif" style="display: block; margin: auto; height: 480px; margin-top: 80px">
      
      
      <div class="contactme">
        <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px; text-align: center;">
          <div title="Copy to clipboard" @click="copyToClipboard" style="cursor: pointer;">
            <h1 style="margin-bottom: 10px;"><i class="fa-regular fa-envelope"></i> G-MAIL <i class="fa-regular fa-copy" style="color: rgb(33, 29, 29);"></i></h1>
          </div>
            <div style="display: inline-flex; align-items: center; justify-content: center;">
                <h2 style="font-style: normal; color: rgb(33, 29, 29); margin-right: 10px;">
                    sanskarjaiswal2904@gmail.com
                </h2>
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sanskarjaiswal2904@gmail.com&tf=1" target="_main">
                    <i class="fa-solid fa-link" title="Open gmail" style="font-size: 1.5rem; color: rgb(33, 29, 29); margin-right: 10px;"></i>
                </a>
            </div>
        </div>
    </div>

  
        <div class="containerCM" style="margin: 20px">
          <a
            href="https://leetcode.com/Sanskar_Jaiswal/"
            class="big-button"
            target="_main"
            ><i class="fas fa-code iconCM"></i> LeetCode</a
          >
  
          <a
            href="https://www.linkedin.com/in/sanskkkkar/"
            class="big-button"
            target="_main"
            ><i class="fab fa-linkedin iconCM"></i> LinkedIn</a
          >

          <a
          href="https://drive.google.com/file/d/1HRRRMrEDwolQUaW5YUm7rNjcCFyq1jbM/view"
          class=" big-button glow-without-hover"
          target="_main"
        >
          <i class="far fa-file-pdf iconCM"></i> Resume
        </a>
          <a
            href="https://github.com/SanskarJaiswal2904"
            class="big-button"
            target="_main"
            ><i class="fab fa-github iconCM"></i> GitHub</a
          >
        </div>
      </main>
  
      <img id="gif-image" src="../../assets/flowers2-unscreen.gif" style="display: block; margin: auto; height: 480px; margin-top: 20px">
      

   </div>
   <Footer />

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import NavBar from '../NavBar.vue';
  import Footer from '../Footer.vue';

  export default defineComponent({
    name: 'MainSection',
    components: {
      NavBar,
      Footer,
    },
    setup() {
      document.title = "Portfolio"
      const copyToClipboard = () => {
      navigator.clipboard.writeText('sanskarjaiswal2904@gmail.com')
        .then(() => {
          alert('Email copied to clipboard!');
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    };
      return {
        copyToClipboard
      };
    },
  });
</script>


  
  
  <style scoped>

  .aboutAuthor {
    font-style: italic;
    font-size: larger;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-stretch: expanded;
    align-items: center;
    text-align: center;
  }
  
  .aboutAuthor h1 {
    letter-spacing: 15px;
    margin-bottom: 10px;
  }
  
  .aboutAuthor h2 {
    margin-right: 10px;
  }
  
  .container {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
  }
  
  .container img {
    width: 400px;
    height: auto;
  }
  

  .containerCM {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.big-button {
  width: 90%;
  padding: 25px;
  font-size: 24px;
  background: linear-gradient(135deg, #3b5998, #8b9dc3); /* A professional blue gradient */
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3b5998;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.big-button:hover {
  background: linear-gradient(135deg, #3b5998, #4c6a92); /* Darker shade on hover for a subtle effect */
  color: white;
  border: 2px solid #3b5998;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow effect */
}


.iconCM {
    margin-right: 10px; /* Adjust margin to space the icon from the button text */
}

.glow-without-hover {
  position: relative;
  display: inline-block;
}

.glow-without-hover:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  background-size: 400%;
  filter: blur(5px);
  border-radius: inherit;
  animation: glowing 20s linear infinite;
  z-index: -1;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}

  

  </style>
  