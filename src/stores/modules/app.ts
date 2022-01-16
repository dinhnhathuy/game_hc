import {
    defineStore
} from "pinia";

export const appDetails = defineStore({
    id: 'app',
    state: () => ({
        consoleOptions: [{
            id: 1,
            name: "PC gaming",
            to: "/games/pc",
        }, {
            id: 2,
            name: "PS5",
            to: "/games/ps5",
        }, {
            id: 3,

            name: "PS4",
            to: "/games/ps4",
        }, {
            id: 4,
            name: "Mobile",
            to: "/games/mobile",
        }, {
            id: 5,
            name: "Xbox",
            to: "/games/xbox",
        }, {
            id: 6,
            name: "Switch",
            to: "/games/switch",
        }]
    }),

    getters: {
        machineType:(state) => {
            return state.consoleOptions
        }
    }

})