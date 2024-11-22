<template>
    <div class="Navbar">
        <header>
            <nav class="horizontalnav">
              <div class="button center-text" id="button-5">
                <div id="translate"></div>
                <router-link to="/" title="Home"
                  >Welcome to Sanskar Jaiswal Website
                </router-link>
              </div>
              <ul>
                <li id="homeid" title="Home">
                  <router-link to="/" style="color: inherit"
                    ><i class="fa-solid fa-house"></i> Home</router-link
                  >
                </li>
                
                <li id="blogid">
                  <a href="javascript:void(0);" @click="showWarning" style="color: inherit">
                    <i class="fa-solid fa-blog"></i> Blog
                  </a>
                </li>
                
                
                <li id="resumeid">
                  <router-link to="/contactme" style="color: inherit">
                    <button class="glow-on-hover">
                      <i class="far fa-file-pdf iconCM"></i> Resume
                    </button>
                  </router-link>
                </li>
                <li id="contactmeid">
                  <router-link to="/contactme"  style="color: inherit">
                    <button class="glow-on-hover">
                      <i class="fa-regular fa-address-book"></i> Contact Me
                    </button>
                  </router-link>
                </li>
              </ul>
            </nav>

          </header>

          <router-view></router-view>


    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'NavBar',
    setup() {
      // const notifyUser = () => { //----------------------------------> uncomment this when blog site is ready
      //   if (confirm("This will take you to another site. Do you want to proceed?")) {
      //     window.location.href = "blog.html"; // Redirect to blog page
      //   }
      // };

      const showWarning = () => {
        alert("This site is under construction.");
  };

      return { showWarning };
    },
  });
</script>


<style >
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;

}

header{
    height: auto;
}

.horizontalnav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(180deg, #1e90ff, #00bfff, #87cefa); /* More intense gradient */
  position: fixed;
  top: 0;
  width: 100vw;
  margin-bottom: 10px;
}

.horizontalnav ul li {
    list-style-type: none;
    margin: 5px 30px 5px 12px;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;

}

.horizontalnav ul li:hover {
    padding: 0;
    color: blue;
}

.horizontalnav ul {
    display: flex;
    cursor: pointer;
}

.horizontalnav .center-text {
    margin-right: auto;
    margin-left: 10px;
    /* Push to the right */
    color: #000000;
    /* Text color */
    font-weight: 500;
    /* Bold text */

    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}

/* Button Styles */

.button {
    display: inline-flex;
    height: 40px;
    width: 450px;
    margin: 20px 20px 20px 20px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  a {
    color: black;
    text-decoration: none;
    letter-spacing: 1px;
  }
  
  /* Fifth Button */
  
  #button-5 {
      position: relative;
      overflow: hidden;
    }
    
    #button-5 a {
      position: relative;
      transition: all .45s ease-Out;
    }
    
    #translate {
      transform: rotate(50deg);
      width: 100%;
      height: 250%;
      left: -350px;
      top: -30px;
      background: rgb(144, 144, 255);
      position: absolute;
      transition: all .3s ease-Out;
    }
    
    #button-5:hover #translate {
      left: 0;
      border: 2px solid #BFC0C0;
    }
    
    #button-5:hover a {
      color: #2D3142;
      border: 2px solid #BFC0C0;
  
    }
  
  
    .containerCM {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .big-button {
        width: 90%; /* Adjust width to take up full width */
        padding: 25px; /* Adjust padding to increase button size */
        font-size: 24px; /* Adjust font size to increase button size */
        background-color: #4CAF50;
        color: white;
        text-align: center;
        text-decoration: none;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #4CAF50;
    
    }
    
    .big-button:hover {
        background-color: white;
        color: #4CAF50;
        border: 2px solid #4CAF50;
    }
    
    .iconCM {
        margin-right: 10px; /* Adjust margin to space the icon from the button text */
    }
    
    
    

.glow-on-hover {
    padding: 10px 12px;
    font-size: 16px;
    font-weight: 200;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>
  