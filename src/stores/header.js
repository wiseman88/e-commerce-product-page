import { defineStore } from "pinia";

export const useHeaderStore = defineStore({
    id: 'header',
    state: () => {
        return {
            show: false,
            display: false,
            activeSvgColor: '#69707D',
            svgColor: 'hsl(220, 14%, 75%)',
            fillColor: 'hsl(220, 14%, 75%)',
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