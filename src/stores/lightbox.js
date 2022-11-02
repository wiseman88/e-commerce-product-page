import { defineStore } from "pinia";

export const useLightboxStore = defineStore({
    id: 'lightbox',
    state: () => {
        return {
            imgUrl: '',
            imgId: '',
            images: [
                {
                    "id": 1,
                    "image": "/images/image-product-1.jpg",
                    'thumbnail': "/images/image-product-1-thumbnail.jpg"
                },
                {
                    "id": 2,
                    "image": "/images/image-product-2.jpg",
                    'thumbnail': "/images/image-product-2-thumbnail.jpg"
                },
                {
                    "id": 3,
                    "image": "/images/image-product-3.jpg",
                    'thumbnail': "/images/image-product-3-thumbnail.jpg"
                },
                {
                    "id": 4,
                    "image": "/images/image-product-4.jpg",
                    'thumbnail': "/images/image-product-4-thumbnail.jpg"
                },
            ],
        }
    },
    getters: {
        mainImageUrl: (state) => state.imgUrl ? state.imgUrl : state.images[0].image,
        mainImageId: (state) => state.imgId ? state.imgId : state.images[0].id
    },
    actions: {
        setImageUrl(event) {
            this.imgUrl = event.target.attributes.src.value;
            this.imgId = event.target.alt;
        },
        nextImage() {
            if (this.imgId < this.images.length - 1) {
                this.imgId++;
                this.imgUrl = this.images[this.imgId].image;
            } else {
                return;
            }
        },
        prevImage() {
            if (this.imgId > 0) {
                this.imgId--;
                this.imgUrl = this.images[this.imgId].image;
            } else {
                return;
            }
        }
    }
})