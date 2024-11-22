<template>
    <div class="contactme">
        <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px">
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sanskarjaiswal2904@gmail.com&tf=1"
              target="_main"
            >
            <h1><i class="fa-regular fa-envelope"></i> G-MAIL</h1>
            
              <h2 style="font-style: normal; color: rgb(33, 29, 29)">
                sanskarjaiswal2904@gmail.com
              </h2>
            </a>
          </div>
    </div>
</template>

<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContactMe',
    setup() {
      return {};
    },
  });
  </script>

<style scoped>
.aboutAuthor{
    font-style: italic;
    font-size: larger;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-stretch: expanded;
    align-items: center;
}

.aboutAuthor h1{
    letter-spacing: 15px;
}

.container {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
}

.container img{
    width: 400px;
    height: auto;
}
</style>
