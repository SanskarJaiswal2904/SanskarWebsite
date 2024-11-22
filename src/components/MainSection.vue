<template>
    <div class="main">
        <FixedSidebar/>
        <HomeIntro/>
        <AboutMe/>
        <Feedback/>
        <ContactMe/>
        
    </div>
</template>


<script>
import { defineComponent } from 'vue';
import HomeIntro from './mainsection/HomeIntro.vue';
import FixedSidebar from './mainsection/FixedSidebar.vue';
import AboutMe from './mainsection/AboutMe.vue';
import Feedback from './mainsection/Feedback.vue';
import ContactMe from './mainsection/ContactMe.vue';


export default defineComponent({
  name: 'MainSection',
  components: {
    HomeIntro,
    FixedSidebar,
    AboutMe,
    Feedback,
    ContactMe,
    


  },
  setup() {
    document.title = "SansKar Jaiswal";
    return {};
  },
});
</script>


<style scoped>

</style>
