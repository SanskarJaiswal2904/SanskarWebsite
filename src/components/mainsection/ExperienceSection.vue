<template>
  <div class="experience-container">
      <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px;">
          <h1>My Experience</h1>
      </div>
      <ul class="tree">
          <li v-for="job in experience" :key="job.title" class="experience-box">
            <div class="company">
              <i class="fas fa-briefcase"></i> {{ job.company }}
                  <span class="duration"><i class="fa-regular fa-calendar"></i> {{ job.duration }}</span>
            </div>
              <div class="role">
                  {{ job.title }}
              </div>
              <div class="location">{{ job.location }}</div>
              <ul class="details">
                  <li v-for="detail in job.details" :key="detail">
                      <i class="fas fa-tasks" style="margin-right: 20px;"></i> {{ detail }}
                  </li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const experience = ref([
  {
    title: "Junior SME",
    company: "Angstrom Education Pvt Ltd",
    duration: "Jan 2022 - Apr 2022",
    location: "Remote",
    details: [
      "Lead Multiple teams of 30+ Content Writers (Front-end), increasing file delivery by 20% from last year.",
      "Provided Trainee support to the new recruits, saving the company's 30% on annual cost of training them, and enhanced their knowledge of B2B content delivery.",
      "Increased the quality of Content delivery par with Clients like Unacademy, BYJUs, Swiftlearn, etc."
    ]
  },
  {
    title: "Associate Subject Specialist",
    company: "Angstrom Education Pvt Ltd",
    duration: "Mar 2021 - Apr 2021",
    location: "Remote",
    details: [
      "Wrote articles on advanced topics of PCMB subjects for competitive exams like JEE and NEET, providing high-quality knowledgeable content and ensuring no plagiarism.",
      "Worked on various portals of Study.com and Reliance, and wrote CAT and other competitive exam questions on multiple platforms."
    ]
  }
]);
</script>

<style scoped>
.experience-container {
  font-family: "Poppins", sans-serif;
  background: white;
  backdrop-filter: blur(15px);
  padding: 40px;
  width: 100%;
  max-width: 850px;
  margin: 50px auto;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.tree {
  list-style-type: none;
  padding-left: 0;
}

.experience-box {
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 12px;
  margin: 15px 0;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.experience-box:hover {
  transform: scale(1.08);
}

.company{
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #222;
}

.role {
  font-size: 20px;
  color: #555;
  margin-top: 5px;
  text-align: center;
  font-style: italic;
}

.location {
  font-size: 20px;
  color: #555;
  margin-top: 5px;
  text-align: center;
  font-style: italic;
}

.duration {
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
}

.duration i {
  margin-right: 5px;
  color: #007bff;
}

.details {
  font-size: 15px;
  margin-top: 10px;
  color: #555;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
}

.details i {
  margin-right: 5px;
  color: #007bff;
}

.aboutAuthor {
  font-style: italic;
  font-size: larger;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-stretch: expanded;
  align-items: center;
  text-align: center;
  color: #222;
}

.aboutAuthor h1 {
  letter-spacing: 10px;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  background: black;
  -webkit-background-clip: text;
  color: transparent;
  transition: letter-spacing 0.3s ease-in-out;
}

.aboutAuthor h1:hover {
  letter-spacing: 14px;
}
</style>
