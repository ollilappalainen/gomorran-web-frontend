<template>
    <div id="entrance" ref="entrance" class="hero section">
        <img class="hero-image logo" src="gomorran-logo.png" alt="Gomorran band logo" />
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
}

.hero-image {
    width: 100%;
}

.section .main-image-wrapper {
    box-shadow: 0px 8px 17px -10px #000;
    margin-left: -2rem;
    margin-right: -2rem;

    @include desktop {
        margin-left: -8rem;
        margin-right: -8rem;
    }
}

.logo {
    width: 100%;
    max-width: 1024px;
    margin-bottom: 2rem;

    @include tablet {
        padding: 0 4rem;
    }
}
</style>