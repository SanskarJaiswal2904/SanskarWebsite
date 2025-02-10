<template>
  <div class="home">
    <div class="image-container">
      <a href="#">
        <!-- <img src="https://source.unsplash.com/1600x900/?computer,table,aesthetic,technology" alt="Nature Landscape"> -->
        <img 
          src="../../assets/aestheticImg2.jpg" 
          alt="Nature Landscape" 
          class="responsive-image"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeIntro',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  background-position: center;
  z-index: 1;
}

.responsive-image {
  width: 1300px; /* Default for desktop */
  height: 600px;
}

/* Media queries for different device sizes */
@media screen and (max-width: 1300px) {
  .responsive-image {
    width: 1150px;
    height: 300px;
  }
  .image-container {
    margin-top: 85px;
  }  
}

@media screen and (max-width: 1150px) {
  .responsive-image {
    width: 900px;
    height: 680px;
  }
  .image-container {
    margin-top: 85px;
  }  
}

@media screen and (max-width: 1024px) {
  .responsive-image {
    width: 950px;
    height: 650px;
  }
  .image-container {
    margin-top: 90px;
  }  

}


@media screen and (max-width: 768px) {
  .responsive-image {
    width: 650px;
    height: 450px;
  }
  .image-container {
    margin-top: 90px;
  }  
}

@media screen and (max-width: 480px) {
  .responsive-image {
    width: 350px;
    height: 250px;
  }
  .image-container {
    margin-top: 95px;
  }  
}
</style>

