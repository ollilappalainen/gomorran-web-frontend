<template>
    <div id="entrance" ref="entrance" class="hero section">
        <div class="logo-wrapper">
            <img class="hero-image logo" src="gomorran-logo.svg" alt="Gomorran band logo" />
        </div>
        <div class="main-image-wrapper">
            <img class="hero-image" src="gomorran-band-photo-1.jpg" alt="Black and white Gomorran band photo" />
        </div>
    </div>
</template>

<script>
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'Entrance',
    mixins: [scrollreportMixin],
};
</script>

<style lang="scss" scoped>
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 5;
    padding: 2rem;
    max-width: 100vw;
    height: calc(100vh - 135px);
    overflow-x: hidden;

    @include desktop {
        max-height: calc(100vh - 80px);
        height: 100%;
    }
}

.section .main-image-wrapper {
    box-shadow: 0px 8px 17px -10px #000;
    margin-left: -2rem;
    margin-right: -2rem;
    flex: 1;
    animation:slide 20s infinite linear;
    overflow: hidden;

    @include desktop {
        max-width: 100vw;
        margin-left: -8rem;
        margin-right: -8rem;
        animation: none;
    }
}

.hero-image {
    @include desktop {
        max-width: 100%;
    }
}

@keyframes slide{
    0% {
        transform: translateX(0);
    }

    33% {
        transform: translateX(calc(-50% + 70vw));
    }

    66% {
        transform: translateX(calc(50% - 70vw));
    }

    100% {
        transform: translateX(0);
    }
}

.logo {
    width: 100%;
    max-width: 100vw;
    margin-bottom: 2rem;

    @include tablet {
        padding: 0 4rem;
        max-width: 80vw;
    }
}
</style>