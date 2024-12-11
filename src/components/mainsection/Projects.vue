<template>
    <div class="project">
      <div class="projects-section">
        <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px;">
          <h1>My Projects</h1>
        </div>
        <div class="projects-container">
          <a
            v-for="(project, index) in projects"
            :key="index"
            :href="project.link"
            target="_blank"
            class="project-card"
          >
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-content">
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
              <p>{{ project.details }}</p>
              <a :href="project.github" target="_blank" class="github-link" @click.stop>
                Github
                <i class="fab fa-github" title="GitHub Repo"></i>
              </a>              
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ProjectsSection',
    setup() {
      const projects = [
        {
          title: 'Chat Karo',
          description: 'A real-time chat application built with Android.',
          image: '/projects-logo/chatkaro-logo.png', // Correct reference
          link: 'https://github.com/SanskarJaiswal2904/Chat-Karo',
          github: 'https://github.com/SanskarJaiswal2904/Chat-Karo',
          details:
            'Chat Karo is an Android app that facilitates real-time communication between users. It includes features to indicate online users and sends notifications for new messages. Built using XML, Java, and Firebase technologies, including Firestore for database management and Cloud Messaging for notifications.',
        },
        {
          title: 'Anime Spy',
          description: 'An informative anime app developed using React.',
          image: '/projects-logo/AnimeSpy-Logo.png', 
          link: 'https://anime-spy.vercel.app/',
          github: 'https://github.com/SanskarJaiswal2904/Anime-Spy',
          details:
            'Anime Spy is a React-based web application providing detailed information about anime. It fetches data from APIs and displays it with a clean and interactive UI. Styled-components and React Router Dom enhance the user experience, while the application is hosted on Vercel for accessibility.',
        },
        {
          title: 'To-Do Pal',
          description: 'A task management app built with Flask and Vue.js.',
          image: '/projects-logo/todopal-Logo.png', 
          link: 'https://to-do-pal-new.vercel.app/',
          github: 'https://github.com/SanskarJaiswal2904/To-DO-Pal-new',
          details:
            'To-Do Pal is a comprehensive task management application combining Flask for backend development, MongoDB for database handling, and Vue.js for the frontend. It supports secure user authentication, full CRUD operations for tasks, and an intuitive interface powered by Pinia state management and Vue Router. The app also includes an admin panel for account management.',
        },
      ];
  
      return {
        projects,
      };
    },
  });
  </script>
  
  
  <style scoped>
  .github-link {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px; 
    background-color: #24292F; 
    color: white;
    border-radius: 8px; 
    text-decoration: none;
    font-size: 1.2rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.github-link:hover {
  background-image: linear-gradient(45deg, #5b6167, #6e7473, #7f8682, #8f9891, #9faa9f, #aabbb0, #b6c7b8, #c2d3c0, #cddfcd, #d9ebd8);
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.github-link i {
    margin-left: 8px; /* Space between text and icon */
}

  
  .project-card {
    position: relative;
    padding: 20px;
  }
  
  /* Author section */
  .aboutAuthor {
      font-style: italic;
      font-size: larger;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-stretch: expanded;
      align-items: center;
      text-align: center;
    }
    
    .aboutAuthor h1 {
      letter-spacing: 8px;
      text-transform: uppercase;
      color: #333;
    }
    
    /* Project section */
    .projects-section {
      padding: 40px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      text-align: center;
      position: relative;
      margin-top: 80px; /* Prevents overlap with navbar */
    }
    
    /* Container for the projects */
    .projects-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;
      align-items: center;
    }
    
    /* Project Card CSS */
    .project-card {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(135deg, #d4f0ff, #e6faff);
      border: none;
      border-radius: 15px;
      width: 80%;
      padding: 20px;
      cursor: pointer;
      transition: transform 0.5s ease, box-shadow 0.5s ease, background-color 0.3s ease;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      animation: fadeInUp 0.8s ease forwards;
      z-index: 1; /* Updated z-index for responsiveness */
    }
    
    .project-card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
      background: linear-gradient(135deg, #d4f0ff, #f0faff);
      z-index: 2; /* Ensures hover state works properly */
    }
    
    .project-image {
      width: 20%;
      height: 20%;
      border-radius: 10px;
      margin: 0 15px;
      transition: transform 0.4s ease, filter 0.4s ease;
    }
    
    .project-card:hover .project-image {
      transform: scale(1.5);
      filter: brightness(0.9);
    }
    
    .project-content {
      text-align: left;
      flex: 1;
    }
    
    .project-content h2 {
      font-size: 1.5rem;
      margin: 10px 0;
      color: #333;
      transition: color 0.4s ease, transform 0.3s ease;
    }
    
    .project-content p {
      font-size: 1rem;
      color: #555;
      transition: color 0.4s ease, transform 0.3s ease;
    }
    
    .project-card:hover h2 {
      color: #007bff;
      transform: translateY(-5px);
    }
    
    .project-card:hover p {
      color: #333;
      transform: translateY(-3px);
    }
    
    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes textPopIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    /* Enhanced project image hover effect */
.project-card:hover .project-image {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.2);
    transition: transform 0.4s ease, box-shadow 0.3s ease, filter 0.3s ease;
    filter: brightness(1.2); /* Increases brightness on hover for a glowing effect */
  }
  
  .project-card .project-image {
    transition: transform 0.4s ease, box-shadow 0.3s ease, filter 0.3s ease;
  }
  
    
    /* Smooth background animation */
    .projects-section {
      background: linear-gradient(to bottom, white, white);
      animation: gradientScroll 10s linear infinite;
    }
    
    @keyframes gradientScroll {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
  </style>