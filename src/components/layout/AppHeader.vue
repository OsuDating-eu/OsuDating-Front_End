<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import HeaderButton from '../ui/HeaderButton.vue';
import LogoButton from '../ui/LogoButton.vue';

import { useMainStore } from '../../stores/modules/main';

import isMobile from '../../helpers/mobile';
import { ref } from 'vue';

const mainStore = useMainStore()

const isMenuOpen = ref(false);
</script>

<template>
  <header class="header-container">
    <div class="child">
      <LogoButton
        :is-mobile="isMobile()"
        button-text="OsuDating"
        button-destination="/"
      />
    </div>
    <div
      v-if="!isMobile()"
      class="child"
    >
      <HeaderButton
        button-text="Home"
        button-destination="/"
        :is-focused="$route.name == 'Home'"
      />
    </div>
    <div
      v-if="!isMobile()"
      class="child"
    >
      <HeaderButton
        button-text="Leaderboard"
        :button-destination="'/leaderboard/' + mainStore.currentGame?.abbreviation"
        :is-focused="$route.name == 'Leaderboard'"
      />
    </div>
    <a
      v-if="isMobile()"
      class="right-align child nav-menu"
      @click="isMenuOpen = !isMenuOpen"
    >
      <FontAwesomeIcon :icon="faBars" />
    </a>
    <div
      v-if="isMenuOpen"
      class="nav-dropdown"
    >
      <HeaderButton
        button-text="Home"
        button-destination="/"
        :is-focused="$route.name == 'Home'"
        @click="isMenuOpen = !isMenuOpen"
      />
      <HeaderButton
        button-text="Leaderboard"
        :button-destination="'/leaderboard/' + mainStore.currentGame?.abbreviation"
        :is-focused="$route.name == 'Leaderboard'"
        @click="isMenuOpen = !isMenuOpen"
      />
    </div>
  </header>
</template>

<style scoped>
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
  box-shadow: 0 0 4px 0 black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.header-container>.child {
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
</style>