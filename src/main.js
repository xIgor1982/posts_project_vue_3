// import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI/index';
import router from '@/router/router';
import directives from '@/directives/index';

const app = createApp(App);

components.forEach((component) => {
	app.component(component.name, component);
});

directives.forEach((directive) => {
	app.directive(directive.name, directive);
});

// app.directive('intersection', VIntersection);

app.use(router).mount('#app');

// import 'bootstrap/dist/js/bootstrap.js';
