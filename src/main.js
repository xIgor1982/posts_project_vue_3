// import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI/index';
import router from '@/components/router/router';

const app = createApp(App);

components.forEach((component) => {
	app.component(component.name, component);
});

app
.use(router)
.mount('#app');

// import 'bootstrap/dist/js/bootstrap.js';
