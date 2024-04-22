import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from './views/HomeView.vue';
import LeaderboardView from './views/LeaderboardView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/leaderboard', name: 'Leaderboard', component: LeaderboardView }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


createApp(App).use(router).mount('#app');
