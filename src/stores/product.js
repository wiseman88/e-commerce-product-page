import { defineStore } from "pinia";

export const useProductStore = defineStore({
    id: 'product',
    state: () => {
        return {
            data: {
                "thumbnail": "/src/assets/images/image-product-1-thumbnail.jpg",
                "name": "Fall Limited Edition Sneakers",
                "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                "price": 250,
                "discount": 50,
            },
            imgUrl: '',
            images: [
                {
                    "id": 1,
                    "image": "/src/assets/images/image-product-1.jpg",
                    'thumbnail': "/src/assets/images/image-product-1-thumbnail.jpg"
                },
                {
                    "id": 2,
                    "image": "/src/assets/images/image-product-2.jpg",
                    'thumbnail': "/src/assets/images/image-product-2-thumbnail.jpg"
                },
                {
                    "id": 3,
                    "image": "/src/assets/images/image-product-3.jpg",
                    'thumbnail': "/src/assets/images/image-product-3-thumbnail.jpg"
                },
                {
                    "id": 4,
                    "image": "/src/assets/images/image-product-4.jpg",
                    'thumbnail': "/src/assets/images/image-product-4-thumbnail.jpg"
                },
            ],
            inCart: false,
            lightboxShow: false,
        }
    },
    getters: {
        discountPrice: (state) => (state.data.price - state.data.price / 100 * state.data.discount).toFixed(2),
        mainImageUrl: (state) => state.imgUrl ? state.imgUrl : state.images[0].image
    },
    actions: {
        addToCart() {
            this.inCart = true;
        },
        removeFromCart() {
            this.inCart = false;
        },
        setImageUrl(event) {
            let imgElements = document.querySelectorAll('.product-image');
            imgElements.forEach(img => {
                img.classList.remove('active');
            });
            this.imgUrl = event.target.src;
            event.target.classList.add('active');
        }
    }
})