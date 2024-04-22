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
  <header class="nav">
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
      <div :class="{ isNotVisible: !isMenuOpen }" class="nav-dropdown">
        <HeaderButton buttonText="Home" buttonDestination="/" :isFocused="$route.name == 'Home'"/>
        <HeaderButton buttonText="Leaderboard" buttonDestination="leaderboard" :isFocused="$route.name == 'Leaderboard'"/>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  box-shadow: 0 0 4px 0 black;
}

.nav-menu {
  text-decoration: inherit;
  color: var(--text-white)
}

.nav-dropdown {
  flex: 0 1 100%;
  text-align: end;
  margin-right: 24px;
}

.header-container {
  background-color: var(--base-background);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.header-container > .child {
  min-height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
}

.right-align {
  margin-left: auto;
}

.isNotVisible {
  display: none;
}
</style>