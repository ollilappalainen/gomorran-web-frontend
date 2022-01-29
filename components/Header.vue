<template>
    <div class="header">
        <div class="navigation">
            <button class="btn" :class="{ 'highlight': visibleSection === 'Entrance' }" value="entrance" @click="handleClick">Entrance</button>
            <button class="btn" :class="{ 'highlight': visibleSection === 'Music' }" value="music" @click="handleClick">Music</button>
            <button class="btn" :class="{ 'highlight': visibleSection === 'Story' }" value="story" @click="handleClick">Story</button>
            <button class="btn" :class="{ 'highlight': visibleSection === 'Merch' }" value="merch" @click="handleClick">Merch</button>
            <button class="btn" :class="{ 'highlight': visibleSection === 'Live' }" value="live" @click="handleClick">Live</button>
            <button class="btn" :class="{ 'highlight': visibleSection === 'TheBand' }" value="theBand" @click="handleClick">The Band</button>
        </div>
        <Socials />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Socials from './Socials';

export default {
    name: 'Header',
    components: {
        Socials,
    },
    data() {
        return {
            sticky: false,
        };
    },
    computed: {
        ...mapGetters([
            'visibleSection',
        ]),
    },
    methods: {
        handleClick(e) {
            this.$emit('navigate', e.target.value);
        },
        isActive(slug) {
            return slug === this.visibleSection;
        }
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem 0 5rem;
    height: 80px;
}

.navigation {
    .btn {
        background-color: var(--black);
        border: 0;
        color: var(--white);
        padding: 1rem;
        margin: 0 1rem;
        font-family: 'Old English Text MT';
        font-size: 2rem;
        height: auto;
        border: 1px solid var(--black);
        transform: scale(1);
        transition: transform .5s;

        &:hover {
            color: var(--gold);
            transform: scale(1.2, 1.2);
        }
    }

    .btn.highlight {
        color: var(--gold);
        transform: scale(1.1, 1.1);
    }
}
</style>
