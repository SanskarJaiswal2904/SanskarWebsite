<template>
    <div class="home">
        <div class="image-container">
            <a href="#">
              <!-- <img src="https://source.unsplash.com/1600x900/?computer,table,aesthetic,technology" alt="Nature Landscape"> -->
              <img src="../../assets/aestheticImg2.jpg" alt="Nature Landscape" width="950px" height="650px"/> <!-- if this becomes a problem keep the width to 950 px and remove height -->

              <!--               <img src="../../assets/aestheticImg2.jpg" alt="Nature Landscape" width="1550px" height="680px"/>  if this becomes a problem keep the width to 950 px and remove height, width="1550px" height="680px" for max width and height -->
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



@media screen and (max-width: 900px) {
    
    .container img{
        width: 50px;
    }
  }
  
</style>
