import { defineStore } from "pinia";

export const useHeaderStore = defineStore({
    id: 'header',
    state: () => {
        return {
            show: false,
            display: false,
            activeSvgColor: 'hsl(220, 13%, 13%)',
            svgColor: 'hsl(219, 9%, 45%)',
            fillColor: 'hsl(219, 9%, 45%)',
        }
    },
    getters: {

    },
    actions: {
        showCart() {
            this.show = !this.show;
        },
        toggleColor(color) {
            this.show === true ? this.fillColor = this.activeSvgColor : this.fillColor = color;
        },
        showSidebar() {
            this.display = !this.display;
        }
    }
})