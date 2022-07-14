<template>
    <div id="entrance" ref="entrance" class="hero section">
        <div class="main-image-wrapper">
            <img class="hero-image" src="gomorran-entrance.jpg" alt="Gomorran logo and band on stage" />
            <img class="hero-image mobile" src="gomorran-entrance-mbl.jpg" alt="Gomorran logo and band on stage" />
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
    overflow: hidden;

    @include desktop {
        max-width: 100vw;
        margin-left: -8rem;
        margin-right: -8rem;
    }
}

.hero-image {
    display: none;
    max-width: 100%;

    @include desktop {
        display: flex;
    }
}

.mobile {
    display: flex;

    @include desktop {
        display: none;
    }
}
</style>