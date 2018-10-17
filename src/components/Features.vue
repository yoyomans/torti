<template>
    <div class="hero">
        <div>
            <hgroup>
                <h1>Features</h1>
                <div class="features">
                    <p>Torti is a smart utility designed to keep track of your reptiles health and allowing you to have full control over their microclimate</p>
                </div>
            </hgroup>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    /*
    Fade content bs-carousel with hero headers
    Code snippet by maridlcrmn (Follow me on Twitter @maridlcrmn) for Bootsnipp.com
    Image credits: unsplash.com
    */

    /********************************/
    /*          Hero Headers        */
    /********************************/
    .features {
        text-align: right !important;
    }
    .hero {
        position : relative;
        bottom : 0;
        right: 50%;
        left: 50%;
        color: black;
        width: 100% !important;
        text-align: center;
        text-transform: uppercase;
        background-color: #dfeeee;
        text-shadow: 1px 1px 0 rgba(0,0,0,.75);
        -webkit-transform: translate3d(-50%,-50%,0);
        -moz-transform: translate3d(-50%,-50%,0);
        -ms-transform: translate3d(-50%,-50%,0);
        -o-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);
    }
    .hero h1 {
        font-size: 6em;
        font-weight: bold;
        margin: 0;
        padding: 0;
    }


    /********************************/
    /*          Media Queries       */
    /********************************/
    @media screen and (min-width: 980px){
        .hero { width: 980px; }
    }
    @media screen and (max-width: 640px){
        .hero h1 { font-size: 4em; }
    }
</style>