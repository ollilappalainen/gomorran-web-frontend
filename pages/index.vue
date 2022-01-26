<template>
    <div class="root">
        <header>
            <Header :active-item="activeMenuItem" @navigate="handleNavigate" />
        </header>
        <div class="scroll-content">
            <vuescroll ref="scrl" :ops="ops" @handle-scroll="handleScroll">
                <main>
                    <Hero ref="entrance" />
                    <Streaming ref="music" />
                    <Bio ref="story" />
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
import Hero from '~/components/Hero';
import Streaming from '~/components/Streaming';
import Bio from '~/components/Bio';
import Merch from '~/components/Merch';
import Live from '~/components/Live';
import TheBand from '~/components/TheBand';
import Footer from '~/components/Footer';
import vuescroll from 'vuescroll';

export default {
    name: 'IndexPage',
    components: {
        Header,
        Hero,
        Streaming,
        Bio,
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
        };
    },
    methods: {
        handleNavigate(e) {
            this.$refs['scrl'].scrollIntoView(`#${e}`, 500);
        },
        handleScroll(vertical) {
            if (vertical.scrollTop >= (this.$refs.entrance.$el.offsetTop + (this.$refs.entrance.$el.offsetHeight / 2))) {
                this.activeMenuItem = 'music';
            } else if (vertical.scrollTop <= (this.$refs.entrance.$el.offsetTop + (this.$refs.entrance.$el.offsetHeight / 2))) {
                this.activeMenuItem = 'entrance';
            }
        }
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
