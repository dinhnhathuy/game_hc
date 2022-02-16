import { defineStore } from "pinia";
import { breadcrumb } from "./types/item.model";

export type RootState = {
    breadcrumbs: breadcrumb[];
  };

export const breadCrumbs = defineStore({
    id: 'breadcrumbs',
    state:() => ({
        breadcrumbs: []
    }as RootState),

    actions: {
        set(breadcrumbs: Array<breadcrumb>) {
            if (!breadcrumbs) return;
            this.breadcrumbs = breadcrumbs
        },
        push(breadcrumb: breadcrumb) {
            if (!breadcrumb) return;
            this.breadcrumbs.push(breadcrumb)
        },
        pop() {
            this.breadcrumbs.pop()
        },
        replace(find: string, replace: breadcrumb) {
            const index: number = this.breadcrumbs.findIndex(breadCrumb => breadCrumb.text === find)
            if(index) {
                this.breadcrumbs.splice(index, 1, replace)
            }
        },
        empty() {
            this.breadcrumbs = []
        }
    }
})