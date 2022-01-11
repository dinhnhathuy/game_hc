import { acceptHMRUpdate, defineStore } from "pinia"

export const userAdmin = defineStore({
    id: 'userAdmin',

    state:() => ({
        user: {
            userName: 'admin' as string,
            password: 'admin' as string,
        },
        loading: true as boolean,
        login: false as boolean,
        mode: '' as string,
        error: '' as string
    }),

    getters: {
        userInfo: (state) => state.user
    },

    actions: {
        logIn(userName: string = 'admin', password: string = 'admin') {
            if(userName === this.user.userName && password === this.user.password) {
                this.login = true
            } else this.error = 'Login fail'
        },
        openModal() {
            this.mode = 'login'
        }
    }
})