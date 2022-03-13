<template>

    <div class="swiper swiper-container home-slider" :style="{ height:'480px', minHeight: '480px' }">
        <!-- Additional required wrapper-->
        <div class="swiper-wrapper">
        <!-- Slides-->
            <div class="swiper-slide bg-cover" :style="{backgroundImage: 'url(https://images.unsplash.com/photo-1462430638866-7ad892655344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }">
            <div class="container-fluid px-lg-6 h-100">
                <div class="row h-100 align-items-center" data-swiper-parallax="-500">
                <div class="col-lg-6 ms-auto text-light text-right">
                    <h2 class="display-4 font-weight-bold" :style="{lineHeight: '1'}">Orb Events</h2>
                    <p class="mb-5 display-5">Where events live</p><a class="btn btn-dark" href="/#">Discover more</a>
                </div>
                </div>
            </div>
            </div>
            <div class="swiper-slide bg-cover bg-cover-right" :style="{backgroundImage: 'url(https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)' }">
            <div class="container-fluid px-lg-6 h-100">
                <div class="row h-100 align-items-center" data-swiper-parallax="-500">
                <div class="col-lg-6 text-light">
                    <h2 class="display-4 font-weight-bold" :style="{lineHeight: '1'}">Orb Events</h2>
                    <p class="mb-5 display-5">Where events live</p><a class="btn btn-dark" href="/#">Discover more</a>
                </div>
                </div>
            </div>
            </div>
            <div class="swiper-slide bg-cover" :style="{backgroundImage: 'url(https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)' }">
            <div class="container-fluid px-lg-6 h-100">
                <div class="row h-100 justify-content-center align-items-center text-center" data-swiper-parallax="-500">
                <div class="col-lg-6 text-light">
                    <h2 class="display-4 font-weight-bold" :style="{lineHeight: '1'}">Orb Events</h2>
                    <p class="mb-5 display-5">Where events live</p>
                    <a class="btn btn-dark" href="/#">Discover more</a>
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

<style scoped>
    .display-4{
        font-size: 36px;
    }
    .display-5{
        font-size: 18px;
        margin-top: -8px;
    }
    a{
        height: 48px;
        padding-top: 10px;
        background: #F3A13B;
        font-size: 16px;
    }
    .bg-cover {
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
    }
    .bg-cover.bg-cover-left {
        background-position: left center;
    }
    .bg-cover.bg-cover-right {
        background-position: right center;
    }
    @media (min-width: 992px) {
        .px-lg-6 {
            padding-right: 6rem !important;
            padding-left: 6rem !important;
        }
    }
    .ms-auto {
        margin-left: auto !important;
    }

    .swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        display: none !important;
    }
    .swiper-button-next,.swiper-button-prev{
        display: none !important;
    }
</style>