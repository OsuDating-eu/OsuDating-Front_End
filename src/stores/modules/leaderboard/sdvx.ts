import { defineStore } from "pinia";
import { SdvxLeaderboardEntry } from '../../models/leaderboard/entries';

export const useSdvxLeaderboardStore = defineStore('sdvxLeaderboard', {
  state: () => ({
    leaderboard: [] as SdvxLeaderboardEntry[],
    updatedOn: new Date(Date.now())
  }),
  getters: {

  },
  actions: {
    async getLeaderboard() {
      // TODO Fetch from API (Awaiting back-end completion)
      if (!this.leaderboard.length) {
        this.leaderboard = [
          new SdvxLeaderboardEntry({
            id: "user1",
            placement: 1,
            name: "username1",
            volforce: 12.123,
            skillLevel: "11",
            flower_id: "flowerUser1",
            username: "flowerUsername1",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
          new SdvxLeaderboardEntry({
            id: "user2",
            placement: 2,
            name: "username2",
            volforce: 12.123,
            skillLevel: "11",
            flower_id: "flowerUser2",
            username: "flowerUsername2",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
          new SdvxLeaderboardEntry({
            id: "user3",
            placement: 3,
            name: "username3",
            volforce: 12.123,
            skillLevel: "11",
            flower_id: "flowerUser3",
            username: "flowerUsername3",
            arcade: "Arcade NL",
            nationality: "NL"
          })
        ];
      }
    }
  }
});