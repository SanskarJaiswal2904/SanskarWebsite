<template>
  <div class="feedback">
    <div class="aboutAuthor" style="margin-top: 125px; margin-bottom: 5px">
      <h1>COLLEAGUE FEEDBACK</h1>
    </div>

    <section class="main-section">
      <div class="container">
        <div class="reviews">
          <div
            v-for="(feedback, index) in feedbacks"
            :key="index"
            class="review"
            :title="feedback.name"
          >
            <p>"{{ feedback.comment }}"</p>
            <p class="author">
              <a :href="feedback.linkedin" target="_main">
                - {{ feedback.name + " "}}<i class="fa-brands fa-linkedin"></i>

              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeedBack',
  setup() {
    const feedbacks = [
      {
        name: 'Kamya Lala',
        comment:
          'Sanskar is simply exceptional! His dedication to his craft is inspiring, and his ability to tackle even the most challenging tasks with ease is truly remarkable. Always willing to lend a helping hand and share his expertise, Sanskar brings positivity and enthusiasm to our team every single day. We\'re incredibly fortunate to have him as a colleague, and his contributions never fail to leave a lasting impact. Keep shining, Sanskar!',
        linkedin: 'https://www.linkedin.com/in/kamya-lala-04a41a231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5R5BSxsvS0uvoLbYcu5Oeg%3D%3D',
      },
      {
        name: 'Shubham Kumar Singh',
        comment:
          'Sanskar is a true asset to our team. His passion for innovation and relentless pursuit of excellence set him apart. Whether it\'s diving deep into complex problems or offering invaluable insights, Sanskar\'s expertise and positivity never cease to amaze us. His collaborative spirit and unwavering dedication make him a joy to work with, and his presence elevates our collective success. Here\'s to Sanskar – a true standout among colleagues!',
        linkedin: 'https://www.linkedin.com/in/shubham-kumar-singh-356427206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B10dYTrGsSryWsvGM3vgfmw%3D%3D',
      },
      {
        name: 'Aryan Saha',
        comment:
          'Sanskar is the epitome of excellence. His unwavering commitment to quality and relentless drive for improvement inspire everyone around him. With a keen eye for detail and a creative approach to problem-solving, Sanskar consistently delivers outstanding results.',
        linkedin: 'https://www.linkedin.com/in/aryan-saha-0a61a3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5YGt%2FiUqQZG3sgAs%2B%2F9Jag%3D%3D',
      },
    ];

    return {
      feedbacks,
    };
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
  letter-spacing: 8px;
}

.reviews {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.review {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef); /* Subtle light gradient */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 100%;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
}

.review:hover {
  transform: scale(1.05); /* Slight zoom effect */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  background: linear-gradient(135deg, #ffffff, #d4d4d4); /* Slightly darker gradient on hover */
}

.review p {
  font-size: 16px;
  color: #444;
  margin-bottom: 12px;
  line-height: 1.5;
}

.review .author {
  font-size: 20px;
  text-align: right;
  font-weight: bold;
}

</style>
