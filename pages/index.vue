<template>
    <div class="root">
        <header>
            <Header @navigate="handleNavigate" />
            <MobileHeader @navigate="handleNavigate" />
        </header>
        <div class="scroll-content">
            <vuescroll ref="scrl" :ops="ops" @handle-scroll="handleScroll">
                <main>
                    <Entrance ref="entrance" />
                    <Music ref="music" />
                    <Videos />
                    <Story ref="story" />
                    <Merch ref="merch" />
                    <Live ref="live" />
                    <TheBand ref="theBand" />
                </main>
                <footer>
                    <Footer />
                </footer>
            </vuescroll>
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header';
import Entrance from '~/components/Entrance';
import Music from '~/components/Music';
import Videos from '~/components/Videos';
import Story from '~/components/Story';
import Merch from '~/components/Merch';
import Live from '~/components/Live';
import TheBand from '~/components/TheBand';
import Footer from '~/components/Footer';
import vuescroll from 'vuescroll';
import { mapMutations } from 'vuex';

export default {
    name: 'IndexPage',
    components: {
        Header,
        Entrance,
        Music,
        Videos,
        Story,
        Merch,
        Live,
        TheBand,
        Footer,
        vuescroll,
    },
    data() {
        return {
            ops: {
                vuescroll: {},
                scrollPanel: {
                    easing: 'easeInOutQuad',
                    speed: 600,
                },
                rail: {
                },
                bar: {
                    background: '#968441',
                    size: '8px',
                }
            },
            activeMenuItem: 'entrance',
            verticalScrollTop: 0,
        };
    },
    methods: {
        ...mapMutations({
            setVerticalOffsetTop: 'verticalOffsetTop',
        }),
        handleNavigate(e) {
            this.$refs['scrl'].scrollIntoView(`#${e}`, 500);
        },
        handleScroll(vertical) {
            this.setVerticalOffsetTop(vertical.scrollTop);
        },
    },
};
</script>

<style lang="scss" scoped>
.root {
    background-color: var(--black);
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scroll-content {
    height: calc(100vh - 80px);
}
</style>
