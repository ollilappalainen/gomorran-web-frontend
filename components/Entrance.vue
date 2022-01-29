<template>
    <div id="entrance" ref="entrance" class="hero section">
        <img class="hero-image logo" src="gomorran-logo.png" alt="Gomorran band logo" />
        <img class="hero-image" src="gomorran-band-photo-1.jpg" alt="Black and white Gomorran band photo" />
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
}

.hero-image {
    width: 100%;
}

.logo {
    max-width: 1024px;
    width: 100%;
}
</style>