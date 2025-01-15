<template>
  <div class="contactme">
      <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px; text-align: center;">
        <div title="Copy to clipboard" @click="copyToClipboard" style="cursor: pointer;">
          <h1 style="margin-bottom: 10px;"><i class="fa-regular fa-envelope"></i> G-MAIL <i class="fa-regular fa-copy" style="color: rgb(33, 29, 29);"></i></h1>
        </div>
          <div style="display: inline-flex; align-items: center; justify-content: center;">
              <h2 style="font-style: normal; color: rgb(33, 29, 29); margin-right: 10px;">
                  sanskarjaiswal2904@gmail.com
              </h2>
              <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=sanskarjaiswal2904@gmail.com&tf=1" target="_main">
                  <i class="fa-solid fa-link" title="Open gmail" style="font-size: 1.5rem; color: rgb(33, 29, 29); margin-right: 10px;"></i>
              </a>
          </div>
      </div>
      <img id="gif-image" src="../../assets/flowers4-unscreen.gif" style="display: block; margin: auto; height: 520px; margin-top: 40px">
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactMe',
  setup() {
    const copyToClipboard = () => {
      navigator.clipboard.writeText('sanskarjaiswal2904@gmail.com')
        .then(() => {
          alert('Email copied to clipboard!');
        })
        .catch(err => {
          console.error('Could not copy text: ', err);
        });
    };

    return {
      copyToClipboard,
    };
  },
});
</script>

<style scoped>
.aboutAuthor {
  font-style: italic;
  font-size: larger;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-stretch: expanded;
  align-items: center;
  text-align: center;
}

.aboutAuthor h1 {
  letter-spacing: 15px;
  margin-bottom: 10px;
}

.aboutAuthor h2 {
  margin-right: 10px;
}

.container {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}

.container img {
  width: 400px;
  height: auto;
}
</style>
