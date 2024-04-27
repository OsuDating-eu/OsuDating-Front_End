<script setup lang="ts">
import LeaderboardDropdown from '../components/ui/LeaderboardDropdown.vue';

import isMobile from '../helpers/mobile';
</script>

<template>
  <div
    v-if="!isMobile()"
    class="content"
  >
    <div class="lb-flex">
      <div class="child header-36">
        Leaderboard
      </div>
      <div class="child right-align">
        <LeaderboardDropdown />
      </div>
    </div>
    -- Leaderboard Below --
  </div>
  <div
    v-if="isMobile()"
    class="mobile-content"
  >
    <div class="header-36 header">
      Leaderboard
    </div>
    <LeaderboardDropdown />
  </div>
</template>

<style scoped>
  .content {
    margin: auto;
    max-width: 1000px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .lb-flex {
    display: flex;
  }

  .right-align {
    margin-left: auto;
  }

  .mobile-content {
    margin: auto;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .header {
    padding-bottom: 24px;
  }
</style>