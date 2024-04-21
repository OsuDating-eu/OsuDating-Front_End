<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import HeaderButton from '../ui/HeaderButton.vue';
import LogoButton from '../ui/LogoButton.vue';

import isMobile from '../../helpers/mobile';
import { ref } from 'vue';

const isMenuOpen = ref(false)
</script>

<template>
  <div class="nav">
    <div class="header-container">
      <div class="child">
        <LogoButton :isMobile="isMobile()" buttonText="OsuDating" buttonDestination="/"></LogoButton>
      </div>
      <div class="child" v-if="!isMobile()">
        <HeaderButton buttonText="Home" buttonDestination="/" :isFocused="$route.name == 'Home'"/>
      </div>
      <div class="child" v-if="!isMobile()">
        <HeaderButton buttonText="Leaderboard" buttonDestination="leaderboard" :isFocused="$route.name == 'Leaderboard'"/>
      </div>
      <a class="right-align child nav-menu" @click="isMenuOpen = !isMenuOpen" v-if="isMobile()">
        <FontAwesomeIcon :icon="faBars" />
      </a>
    </div>
    <div :class="{ mobileNav: !isMenuOpen }">
      <HeaderButton buttonText="Home" buttonDestination="/" :isFocused="$route.name == 'Home'"/>
      <HeaderButton buttonText="Leaderboard" buttonDestination="leaderboard" :isFocused="$route.name == 'Leaderboard'"/>
    </div>
  </div>
</template>

<style scoped>
.nav {
  box-shadow: 0 0 4px 0 black;
}

.nav-menu {
  text-decoration: inherit;
  color: var(--text-white)
}

.header-container {
  background-color: var(--base-background);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100px;
}

.header-container > .child {
  padding-left: 24px;
  padding-right: 24px;
}

.right-align {
  margin-left: auto;
}

.mobileNav {
  display: none;
}

</style>