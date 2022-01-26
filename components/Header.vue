<template>
    <div class="header">
        <div class="navigation">
            <button class="btn" :class="{ 'active': isActive('entrance') }" value="entrance" @click="handleClick">Entrance</button>
            <button class="btn" :class="{ 'active': isActive('music') }" value="music" @click="handleClick">Music</button>
            <button class="btn" :class="{ 'active': isActive('story') }" value="story" @click="handleClick">Story</button>
            <button class="btn" :class="{ 'active': isActive('merch') }" value="merch" @click="handleClick">Merch</button>
            <button class="btn" :class="{ 'active': isActive('live') }" value="live" @click="handleClick">Live</button>
            <button class="btn" :class="{ 'active': isActive('theBand') }" value="theBand" @click="handleClick">The Band</button>
        </div>
        <Socials />
    </div>
</template>

<script>
import Socials from './Socials';

export default {
    name: 'Header',
    components: {
        Socials,
    },
    props: {
        activeItem: {
            type: String,
            default: 'entrance',
        },
    },
    data() {
        return {
            sticky: false,
        };
    },
    methods: {
        handleClick(e) {
            this.$emit('navigate', e.target.value);
        },
        isActive(slug) {
            return slug === this.activeItem;
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
    padding: 0 4rem 0 3rem;
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

        &:hover {
            border-bottom: 1px solid var(--gold);
            border-left: 1px solid var(--gold);
            color: var(--gold);
        }
    }
}

.active {
    border-bottom: 1px solid var(--gold);
    border-left: 1px solid var(--gold);
    color: var(--gold);
}
</style>
