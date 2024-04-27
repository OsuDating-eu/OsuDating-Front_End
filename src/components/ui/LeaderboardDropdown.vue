<script script setup lang="ts">
import { ref } from 'vue';

const currentGame = ref("Sound Voltex");

const games = [
  { name: "Sound Voltex", shortName: "sdvx", id: 1 },
  { name: "Beatmania IIDX", shortName: "iidx", id: 2 },
  { name: "Pop'n Music", shortName: "popn", id: 3 },
  { name: "Jubeat", shortName: "jubeat", id: 4 }
];
</script>

<template>
  <div class="dropdown">
    <button class="normal-20 dropbtn">
      {{ currentGame }}
    </button>
    <div class="dropdown-content">
      <RouterLink
        v-for="(game, index) in games"
        :key="game.id"
        :to="'/leaderboard/' + game.shortName"
        class="dropdown-item normal-20"
        :class="[{ dropdownlast: index === games.length - 1 }, 
                 { dropdownactive: currentGame === game.name }]"
        @click="currentGame = game.name"
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