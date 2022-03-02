<template>

    <div class="swiper swiper-container home-slider" :style="{ height:'80vh', minHeight: '600px' }">
        <!-- Additional required wrapper-->
        <div class="swiper-wrapper">
        <!-- Slides-->
            <div class="swiper-slide bg-cover bg-cover-left" :style="{backgroundImage: 'url(https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/home-5.jpg)' }">
            <div class="container-fluid px-lg-6 h-100">
                <div class="row h-100 align-items-center" data-swiper-parallax="-500">
                <div class="col-lg-6 ms-auto">
                    <p class="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">Our all-time favourites</p>
                    <h2 class="display-3" :style="{lineHeight: '1'}">Blouses &amp; Tops</h2>
                    <p class="text-muted mb-5">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p><a class="btn btn-dark" href="/#">Discover more</a>
                </div>
                </div>
            </div>
            </div>
            <div class="swiper-slide bg-cover bg-cover-right" :style="{backgroundImage: 'url(https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/home-1.jpg)' }">
            <div class="container-fluid px-lg-6 h-100">
                <div class="row h-100 align-items-center" data-swiper-parallax="-500">
                <div class="col-lg-6">
                    <p class="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">Our all-time favourites</p>
                    <h2 class="display-3" :style="{lineHeight: '1'}">Blouses &amp; Tops</h2>
                    <p class="text-muted mb-5">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p><a class="btn btn-dark" href="/#">Discover more</a>
                </div>
                </div>
            </div>
            </div>
            <div class="swiper-slide bg-cover bg-cover-abnor" :style="{backgroundImage: 'url(https://d19m59y37dris4.cloudfront.net/varkala/2-1/img/photo/home-2.jpg)' }">
            <div class="container-fluid px-lg-6 h-100">
                <div class="row h-100 justify-content-center align-items-center text-center" data-swiper-parallax="-500">
                <div class="col-lg-6">
                    <p class="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">Blue &amp; White</p>
                    <h2 class="display-3" :style="{lineHeight: '1'}">Linen and denim</h2><a class="btn btn-dark" href="/#">Start shopping</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-nav d-none d-lg-block">
            <div class="swiper-button-prev" id="homePrev"></div>
            <div class="swiper-button-next" id="homeNext">       </div>
        </div>
    </div>
    
</template>

<script>

    export default {
        name: 'Wrapper',
    }

</script>