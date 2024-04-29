import { defineStore } from "pinia";
import { Game } from '../models/game';

export const useMainStore = defineStore('main', {
  state: () => ({
    currentGame: null as Game | null,
    possibleGames: [] as Game[]
  }),
  getters: {

  },
  actions: {
    async getGames() {
      // TODO Fetch from API (Awaiting back-end completion)
      this.possibleGames = await new Array(
        new Game({
          id: 1,
          name: "Sound Voltex",
          abbreviation: "sdvx",
          version: "1"
        }),
        new Game({
          id: 2,
          name: "beatmania IIDX",
          abbreviation: "iidx",
          version: "1"
        }),
        new Game({
          id: 3,
          name: "Pop'n Music",
          abbreviation: "popn",
          version: "1"
        }),
        new Game({
          id: 4,
          name: "Jubeat",
          abbreviation: "jubeat",
          version: "1"
        })
      );
    },
    newGame(game: Game) {
      this.currentGame = game
    }
  }
});