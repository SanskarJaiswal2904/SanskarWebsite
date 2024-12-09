<template>
    <div class="main">
        <FixedSidebar/>
        <HomeIntro/>
        <AboutMe/>
        <ProjectsSection/>
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
import ProjectsSection from './mainsection/Projects.vue';


export default defineComponent({
  name: 'MainSection',
  components: {
    HomeIntro,
    FixedSidebar,
    AboutMe,
    ProjectsSection,
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
