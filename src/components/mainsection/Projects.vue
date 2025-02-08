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
              <a :href="project.github" target="_blank" class="github-link" title="GitHub Repo" @click.stop>
                GitHub
                <i class="fab fa-github"></i>
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
          title: "AskMyPDF",
          description: "An AI-powered PDF analyzer built with React.js, Material-UI, Node.js, Axios, and Gemini AI.",
          image: "/projects-logo/AskMyPDF-PNG.png",
          link: "https://ask-my-pdf-brown.vercel.app/",
          github: "https://github.com/SanskarJaiswal2904/AskMyPDF",
          details: "AskMyPDF is an advanced document analysis tool that allows users to upload PDF files and extract key insights using AI. Ask any question you want. It supports dark mode. With an intuitive React.js and Material-UI interface, users can ask questions directly from the uploaded document and receive instant responses. The app features text extraction, metadata retrieval, and intelligent compression. Powered by Gemini AI, it delivers accurate answers and document summaries. A robust backend with Node.js and Axios ensures efficient file processing, chunked data handling, and API rate management. Users can also download results for offline access."
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
        {
            title: 'Bharat-YT-Playlist Length',
            description: 'A YouTube playlist analyzer built with React, Node.js, YouTube API and Material-UI.',
            image: '/projects-logo/YTPlaylist-len.png', 
            link: 'https://bharat-yt-playlist-length.vercel.app',
            github: 'https://github.com/SanskarJaiswal2904/Bharat-YT-Playlist-Length',
            details:
              'Bharat-YT-Playlist Length is a robust application that allows users to analyze and extract details from YouTube playlists. It calculates the length of multiple playlist, its\'s average duration, it\'s length with different playback speed, and more. Built with React for the frontend and Material-UI for styling, the app features a clean and responsive interface. It includes functionality for fetching playlist snippets and content details using Axios, efficient handling of API errors, and dark mode support. The app also leverages regular expressions for playlist ID extraction and provides a visually engaging user experience. It also has Dark Mode.',
        },
        {
          title: "Bharat YT-Comment-Analyzer",
          description: "A YouTube comment analyzer built with NEXT.js, YouTube API, Node.js, Axios, Gemini AI and Material-UI.",
          image: "/projects-logo/YT-comment-analyzer.png", 
          link: "https://bharat-yt-comment-analyzer.vercel.app/",
          github: "https://github.com/SanskarJaiswal2904/Bharat-YT-Comment-Analyzer",
          details: "Bharat-YT-Comment-Analyzer is an advanced tool that empowers users to analyze and extract YouTube video comments. It processes comment data based on various prompt lengths (small, medium, or large). The application boasts a sleek, responsive UI built with NEXT.js and Material-UI, offering a seamless dark mode experience. With the help of Gemini AI, the app delivers smarter analysis and categorization of comments. Axios is used for efficient API communication, while robust error handling ensures reliability. Additionally, the app allows users to easily copy video details to the clipboard and directly view the video on YouTube. The flexibility to analyze comments in different lengths and the use of regular expressions for extracting video IDs further enhance its functionality."
        },
        {
        title: "WhatsApp Chat Analyzer",
        description: "An intuitive WhatsApp chat analyzer built with React.js, Material-UI, Node.js, Axios, and Gemini AI.",
        image: "/projects-logo/WCALogo.png",
        link: "https://whatsapp-chat-analyzer-nine.vercel.app",
        github: "https://github.com/SanskarJaiswal2904/WhatsApp-Chat-Analyzer",
        details: "WhatsApp Chat Analyzer is a powerful tool that enables users to upload and analyze exported WhatsApp chats. User can set precision. It provides insightful summaries and trend analyses based on AI-driven processing. Built with React.js and Material-UI, the app offers a seamless user experience, including responsive design and dark mode. You can download results as pdf. Gemini AI ensures smarter data analysis, while robust backend logic with Node.js and Axios handles efficient processing and error management. The app supports custom prompts for tailored analyses and ensures reliability with retry mechanisms and chunked data processing."
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
          title: "IndiaHoliday",
          description: "A simple Node.js package to fetch and display Indian holidays for any given date.",
          image: "/projects-logo/npm-logo.png",
          link: "https://www.npmjs.com/package/india-holiday-1.0",
          github: "https://github.com/SanskarJaiswal2904/IndiaHoliday-npmPackage",
          details: "IndiaHoliday is a lightweight Node.js package designed to help developers retrieve and display Indian holidays for a given year. It simplifies the process of holiday lookup by providing an intuitive API that returns holiday names, dates, and types. This package is perfect for any application that requires holiday data in India, including apps that need to manage holiday-based functionalities. The package uses efficient algorithms to fetch holiday data, making it easy to integrate into your projects. You can also add functionality to have Holiday but in India's Flag Tricolor."
        },
        {
          title: 'Low Level Design',
          description: 'A collection of Java-based Object-Oriented Programming projects.',
          image: '/projects-logo/LLD-logo.png', 
          link: 'https://github.com/SanskarJaiswal2904/Low-Level-Design',
          github: 'https://github.com/SanskarJaiswal2904/Low-Level-Design',
          details:
            'This repository features a series of low-level design implementations for various real-world systems. Each project is built with core OOP principles like encapsulation, inheritance, and polymorphism, demonstrating modular and scalable design patterns. Technologies used include Java, with a focus on clean architecture and SOLID principles. \nProjects: Chess, Elevator, HotelManagementSystem, LoggingFramework, MovieTicketSystem, ParkingLot, RateLimiter, SnakeAndLadder, Splitwise, TicTacToe, VendingMachine, GameArcade.',
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
    margin-top: 25px;
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