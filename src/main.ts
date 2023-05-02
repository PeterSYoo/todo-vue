import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { setup as setupFirebase } from './services/firebase.service';

setupFirebase();

createApp(App).use(router).mount('#app');
