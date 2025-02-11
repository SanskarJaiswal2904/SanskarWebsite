<template>
  <div class="certificate-gallery">
    <div class="aboutAuthor" style="margin-top: 50px; margin-bottom: 5px;">
      <h1>My Certificates</h1>
    </div>
    <div class="grid">
      <div v-for="(certificate, index) in certificates" :key="index" class="card">
        <img :src="`./certificates-img/${certificate}`" :alt="`${certificate}`" :title="`${certificate}`" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        'AndroidOreoUdemy.jpg',
        'MERNFullStackUdemy.jpg',
        'CPPScaler.png',
        'GitHubAllison.png',
        'JavaScaler.png',
        'OOPScaler.png',
        'RestAPIIntermediateHackerRank.jpg',
        'SQLBasicHackerRank.jpg',
        'SQLIntermediateHackerRank.jpg',
      ],
    };
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.image:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.4);
}
.certificate-gallery {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 25px;
  color: #333;
}

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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}
</style>

