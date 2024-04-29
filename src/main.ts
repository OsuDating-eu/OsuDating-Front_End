import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from './views/HomeView.vue';
import LeaderboardView from './views/LeaderboardView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/leaderboard/:game', name: 'Leaderboard', component: LeaderboardView }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app');
