    const app = {
        data() {
            return {
                pics : [{
                        title : "First Picture",
                        like : false,
                        style : "background-image: url(images/1.jpg);"
                    },{ 
                        title : "Sencond Picture",
                        like : false, 
                        style : "background-image: url(images/2.jpg);"
                    }, 
                    {
                        title : "Third Picture",
                        like : false,
                        style : "background-image: url(images/3.jpg);"
                    }
                    ]
            
            }
        },
        methods : {
            toggleLike(index) {
                this.pics[index].like = !this.pics[index].like
            }
        },
        computed : {
            countGallery() {
                return this.pics.length
            },
            countLike() {
                return this.pics.filter(pic => pic.like).length   
            }
        }
    }
    Vue.createApp(app).mount('#app')