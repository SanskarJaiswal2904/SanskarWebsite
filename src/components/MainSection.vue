<template>
  <div class="main">
    <div class="hidden" ref="fixedSidebar">
      <FixedSidebar />
    </div>
    <div class="hidden" ref="homeIntro">
      <HomeIntro />
    </div>
    <div class="hidden" ref="aboutMe">
      <AboutMe />
    </div>
    <div class="hidden" ref="educationSection">
      <EducationSection />
    </div>
    <div class="hidden" ref="experienceSection">
      <ExperienceSection />
    </div>
    <div class="hidden" ref="projectsSection">
      <ProjectsSection />
    </div>
    <div class="hidden" ref="certificateSection">
      <CertificateSection />
    </div>
    <div class="hidden" ref="feedback">
      <Feedback />
    </div>
    <div class="hidden" ref="contactMe">
      <ContactMe />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import HomeIntro from './mainsection/HomeIntro.vue';
import FixedSidebar from './mainsection/FixedSidebar.vue';
import AboutMe from './mainsection/AboutMe.vue';
import EducationSection from './mainsection/EducationSection.vue';
import ExperienceSection from './mainsection/ExperienceSection.vue';
import Feedback from './mainsection/Feedback.vue';
import ContactMe from './mainsection/ContactMe.vue';
import ProjectsSection from './mainsection/Projects.vue';
import CertificateSection from './mainsection/CertificateSection.vue';

export default defineComponent({
  name: 'MainSection',
  components: {
    HomeIntro,
    FixedSidebar,
    AboutMe,
    ProjectsSection,
    CertificateSection,
    Feedback,
    ContactMe,
    ExperienceSection,
    EducationSection,
  },
  setup() {
    const fixedSidebar = ref(null);
    const homeIntro = ref(null);
    const aboutMe = ref(null);
    const educationSection = ref(null);
    const experienceSection = ref(null);
    const projectsSection = ref(null);
    const certificateSection = ref(null);
    const feedback = ref(null);
    const contactMe = ref(null);

    const animateOnScroll = (element) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(element);
    };

    onMounted(() => {
      animateOnScroll(fixedSidebar.value);
      animateOnScroll(homeIntro.value);
      animateOnScroll(aboutMe.value);
      animateOnScroll(educationSection.value);
      animateOnScroll(experienceSection.value);
      animateOnScroll(projectsSection.value);
      animateOnScroll(certificateSection.value);
      animateOnScroll(feedback.value);
      animateOnScroll(contactMe.value);
    });

    return { fixedSidebar, homeIntro, aboutMe, projectsSection, feedback, contactMe, educationSection, certificateSection, experienceSection };
  },
});
</script>

<style scoped>
/*/* Slide-in from left with a slight scale effect 
@keyframes slideInFromLeftWithScale {
  from {
    transform: translateX(-100%) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

/* Initially hidden 
.hidden {
  opacity: 0;
  transform: translateX(-100%) scale(0.9);
  transition: transform 1s ease-out, opacity 1s ease-out;
}

/* Slide-in effect with scale and fade 
.visible {
  opacity: 1;
  transform: translateX(0) scale(1);
} 

*/
</style>
