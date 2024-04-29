<script script setup lang="ts">
import { useMainStore } from '../../stores/modules/main';

const mainStore = useMainStore()
</script>

<template>
  <div class="dropdown">
    <button class="normal-20 dropbtn">
      {{ mainStore.currentGame?.name }}
    </button>
    <div class="dropdown-content">
      <RouterLink
        v-for="(game, index) in mainStore.possibleGames"
        :key="game.id.toString"
        :to="'/leaderboard/' + game.abbreviation"
        class="dropdown-item normal-20"
        :class="[{ dropdownlast: index === mainStore.possibleGames.length - 1 }, 
                 { dropdownactive: mainStore.currentGame === game }]"
        @click="mainStore.newGame(game)"
      >
        {{ game.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.dropbtn {
  font-family: Poppins;
  height: 48px;
  color: var(--text-white);
  padding-left: 16px;
  padding-right: 16px;
  width: 300px;
  text-align: end;
  background-color: var(--base-underground);
  border: none;
  border-radius: 16px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  width: 300px;
  /* z-index: 1; */
}

.dropdown-content .dropdown-item {
  background-color: var(--base-underground);
  color: var(--text-white);
  padding: 12px 16px;
  text-align: end;
  text-decoration: none;
  display: block;
}

.dropdown-content .dropdown-item:hover {
  -webkit-box-shadow: inset 0px 2px 0px 0px var(--theme-pink), inset 0px -2px 0px 0px var(--theme-pink);
  -moz-box-shadow: inset 0px 2px 0px 0px var(--theme-pink), inset 0px -2px 0px 0px var(--theme-pink);
  box-shadow: inset 0px 2px 0px 0px var(--theme-pink), inset 0px -2px 0px 0px var(--theme-pink);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  border-radius: 16px 16px 0px 0px;
}

.dropdown-content .dropdownlast {
  border-radius: 0px 0px 16px 16px !important
}

.dropdown-content .dropdownactive {
  background-color: var(--theme-pink) !important;
}
</style>