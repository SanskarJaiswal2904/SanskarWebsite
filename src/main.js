import { createApp } from 'vue';
import App from './App.vue';
import 'font-awesome/css/font-awesome.css';
import router from './routes/index';

const app = createApp(App);

app.use(router); // Use the router in the app

app.mount('#app'); // Mount the app once
