<template>
    <div class="education-container">
        <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px;">
            <h1>My Education</h1>
        </div>
        <ul class="tree">
            <li v-for="edu in education" :key="edu.institution" class="education-box">
                <div class="institution">
                    <i class="fas fa-school"></i> {{ edu.institution }}
                    <span class="year"><i class="fa-regular fa-calendar"></i> {{ edu.year }}</span>
                </div>
                <div class="course-degree">
                   {{ edu.degree }} - {{ edu.course }}
                </div>
                <div class="grade">
                    <i class="fas fa-graduation-cap"></i> Grade: {{ edu.grade }}
                </div>
                <div class="skills">
                    <i class="fas fa-lightbulb"></i> Skills: {{ edu.skills }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const education = ref([
    {
        institution: "Narula Institute of Technology (NiT)",
        degree: "BTech",
        course: "Computer Science and Technology",
        year: "2019 - 2023",
        grade: "A+",
        skills: "Coding Standards · Programming · Programming Languages · C++ · Volunteering · Object-Oriented Programming (OOP) · Computer Science"
    },
    {
        institution: "St. Augustine's Day School - India",
        degree: "ISC",
        course: "Science",
        year: "2019",
        grade: "8.0+",
        skills: "Activities and societies: Debate Team, Extempo, Cricket"
    },
    {
        institution: "St. Augustine's Day School - India",
        degree: "ICSE",
        course: "Science",
        year: "2017",
        grade: "8.0+",
        skills: "Activities and societies: Debate Team, Extempo, Cricket"
    }
]);
</script>

<style scoped>
.education-container {
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

.education-box {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 12px;
    margin: 15px 0;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.education-box:hover {
    transform: scale(1.08);
}

.institution {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222;
}

.year {
    font-size: 14px;
    color: #555;
    display: flex;
    align-items: center;
}

.year i {
    margin-right: 5px;
    color: #007bff;
}

.course-degree {
    font-size: 18px;
    margin-top: 10px;
    color: #333;
    font-weight: 500;
}

.grade {
    font-size: 16px;
    margin-top: 5px;
    font-weight: bold;
    color: #444;
}

.skills {
    font-size: 15px;
    margin-top: 10px;
    color: #555;
    font-style: italic;
    display: flex;
    align-items: center;
}

.skills i {
    margin-right: 5px;
    color: #ff4f8b;
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
