import { defineStore } from "pinia";
import { JubeatLeaderboardEntry } from '../../models/leaderboard/entries';

export const useJubeatLeaderboardStore = defineStore('jubeatLeaderboard', {
  state: () => ({
    leaderboard: [] as JubeatLeaderboardEntry[],
    updatedOn: new Date(Date.now())
  }),
  getters: {

  },
  actions: {
    async getLeaderboard() {
      // TODO Fetch from API (Awaiting back-end completion)
      if (!this.leaderboard.length) {
        this.leaderboard = [
          new JubeatLeaderboardEntry({
            id: "user1",
            placement: 1,
            name: "username1",
            jubility: 2500,
            flower_id: "flowerUser1",
            username: "flowerUsername1",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
          new JubeatLeaderboardEntry({
            id: "user2",
            placement: 2,
            name: "username2",
            jubility: 2500,
            flower_id: "flowerUser2",
            username: "flowerUsername2",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
          new JubeatLeaderboardEntry({
            id: "user3",
            placement: 3,
            name: "username3",
            jubility: 2500,
            flower_id: "flowerUser3",
            username: "flowerUsername3",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
        ];
      }
    }
  }
});