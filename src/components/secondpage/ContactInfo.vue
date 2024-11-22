<template>
  <NavBar />
  <div class="contactinfo">
    <main>
        <div class="aboutAuthor" style="margin-bottom: 5px; margin-top: 105px">
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sanskarjaiswal2904@gmail.com&tf=1"
            target="_main"
          >
            <h1><i class="fa-regular fa-envelope"></i> G-MAIL</h1>
  
            <h2 style="font-style: normal; color: rgb(33, 29, 29)">
              sanskarjaiswal2904@gmail.com
            </h2>
          </a>
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
          href="https://drive.google.com/file/d/1O4ICVbmcropuegUIxsD5naIlZcYsbns5/view?usp=drive_link"
          class=" glow-on-hover"
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
      return {};
    },
  });
</script>


  
  
  <style scoped>

  .aboutAuthor{
    font-style: italic;
    font-size: larger;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-stretch: expanded;
    align-items: center;
  }

  .aboutAuthor h1{
    letter-spacing: 15px;
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

  /*-------------------------------------Glow Button-------------------------------------*/
  .glow-on-hover {
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
    align-items: center;
    justify-content: center;
    border: 2px solid #3b5998;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    top: -2px;
    left: -2px;
    background-size: 400%;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 1; /* Ensure opacity is always 1 for the glowing effect */
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}



.glow-on-hover:after {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

  </style>
  