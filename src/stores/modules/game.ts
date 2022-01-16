import { defineStore } from "pinia";
import { topRatingGames, topUpcomingGames } from "../data/games";

export const gamesArticle = defineStore({
    id: 'games',
    state:() => ({
        topGaming: {
            topRatingGames,
            topUpcomingGames
        }
    }),

    getters: {
        topUpcomingGames:(state) => state.topGaming.topUpcomingGames,
        topRatingGames:(state) => state.topGaming.topRatingGames
    }
})