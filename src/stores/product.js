import { defineStore } from "pinia";
import { useCounterStore } from "./counter";
import { useLightboxStore } from "./lightbox";

export const useProductStore = defineStore({
    id: 'product',
    state: () => {
        return {
            data: {
                "thumbnail": "/images/image-product-1-thumbnail.jpg",
                "name": "Fall Limited Edition Sneakers",
                "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                "price": 250,
                "discount": 50,
            },
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
            inCart: false,
            lightboxShow: false,
        }
    },
    getters: {
        discountPrice: (state) => (state.data.price - state.data.price / 100 * state.data.discount).toFixed(2),
        mainImageUrl: (state) => state.imgUrl ? state.imgUrl : state.images[0].image,
    },
    actions: {
        addToCart() {
            this.inCart = true;
        },
        checkProductCount(){
            const counter = useCounterStore();
            counter.count > 0 ? this.addToCart() : null
        },
        removeFromCart() {
            this.inCart = false;
        },
        setImageUrl(event) {
            this.imgUrl = event.target.attributes.src.value;
            this.imgId = event.target.alt;
        },
        showLightbox() {
            const lightbox = useLightboxStore();
            this.lightboxShow = !this.lightboxShow;
            lightbox.imgUrl = this.imgUrl;
            lightbox.imgId = this.imgId;
        },
    }
})