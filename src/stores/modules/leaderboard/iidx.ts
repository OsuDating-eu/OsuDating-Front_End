import { defineStore } from "pinia";
import { IidxLeaderboardEntry } from '../../models/leaderboard/entries';

export const useIidxLeaderboardStore = defineStore('iidxLeaderboard', {
  state: () => ({
    leaderboard: [] as IidxLeaderboardEntry[],
    updatedOn: new Date(Date.now())
  }),
  getters: {

  },
  actions: {
    async getLeaderboard() {
      // TODO Fetch from API (Awaiting back-end completion)
      if (!this.leaderboard.length) {
        this.leaderboard = [
          new IidxLeaderboardEntry({
            id: "user1",
            name: "username1",
            spRank: 1,
            spPoints: 5000,
            spClass: "",
            dpRank: 1,
            dpPoints: 2500,
            dpClass: "",
            flower_id: "flowerUser1",
            username: "flowerUsername1",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
          new IidxLeaderboardEntry({
            id: "user2",
            name: "username2",
            spRank: 2,
            spPoints: 5000,
            spClass: "",
            dpRank: 2,
            dpPoints: 2500,
            dpClass: "",
            flower_id: "flowerUser2",
            username: "flowerUsername2",
            arcade: "Arcade NL",
            nationality: "NL"
          }),
          new IidxLeaderboardEntry({
            id: "user3",
            name: "username3",
            spRank: 3,
            spPoints: 5000,
            spClass: "",
            dpRank: 3,
            dpPoints: 2500,
            dpClass: "",
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