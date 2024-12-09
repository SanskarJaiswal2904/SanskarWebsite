<template>
    <div class="aboutme">
      <div class="aboutAuthor">
          <img id="gif-image" src="../../assets/flowers3.gif" style="display: block; margin: auto; height: 320px; margin-top: 40px">
            <h1 style="margin-top: 80px">HELLO</h1>
            <div class="container image-container">
              <img src="../../assets/sanskar4.png" class="responsive-image" alt="author.png" />
              <div class="vertical-line"></div>
              <img src="../../assets/sanskarIntro.jpeg" class="responsive-image" alt="author.png" />
            </div>
          </div>
          
    </div>
</template>

<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutMe',
    setup() {
      return {};
    },
  });
  </script>

  <style scoped>

  .responsive-image {
    width: 460px; /* Default for desktop */
    height: 550px;
  }
  
  /* Media queries for different device sizes */
  @media screen and (max-width: 1280px) {
    .responsive-image {
      width: 500px; /* Default for desktop */
      height: 610px;
    }
    .image-container {
      margin-top: 90px;
    }  
  }

  @media screen and (max-width: 1150px) {
    .responsive-image {
      width: 480px;
      height: 600px;
    }
    .image-container {
      margin-top: 90px;
    }  
  }
  
  @media screen and (max-width: 1024px) {
    .responsive-image {
      width: 450px;
      height: 600px;
    }
    .image-container {
      margin-top: 95px;
    }  
  
  }
  
  
  @media screen and (max-width: 768px) {
    .responsive-image {
      width: 400px;
      height: 500px;
    }
    .image-container {
      margin-top: 99px;
    }  
  }
  
  @media screen and (max-width: 480px) {
    .responsive-image {
      width: 350px;
      height: 250px;
    }
    .image-container {
      margin-top: 102px;
    }  
  }

  @media screen and (max-width: 360px) {
    .responsive-image {
      width: 280px;
      height: 150px;
    }
    .image-container {
      margin-top: 102px;
    }  
  }

  @media screen and (max-width: 240px) {
    .responsive-image {
      width: 220px;
      height: 140px;
    }
    .image-container {
      margin-top: 102px;
    }  
  }

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

.container {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
}


.vertical-line {
  margin-left: 50px;
  margin-right: 50px;
  width: 2px;
  height: 620px;
  border-left: 2px dotted rgb(127, 122, 122);
  position: relative;
  z-index: -1;

}

.vertical-line::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: linear-gradient(145deg, #333333, #bfbfbf);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.vertical-line::after:hover {
  transform: translateX(-50%) scale(1.2);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}


.main-section {
    padding: 50px 0;
    text-align: center;
}

.section-title {
    font-size: 36px;
    margin-bottom: 30px;
    color: #333;
}

</style>