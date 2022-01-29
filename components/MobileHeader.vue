<template>
    <div class="mobile-menu">
        <div class="mobile-menu-content">
            <button class="mobile-menu-toggle" @click="drawer = !drawer">
                <v-icon
                    aria-label="toggle-mobile-menu"
                    role="img"
                    aria-hidden="false"
                    large
                >
                    {{ icons.mdiMenu }}
                </v-icon>
                <span>{{ currentPage }}</span>
            </button>
            <Socials />
        </div>

        <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            dark
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title>
                            <button class="btn" :class="{ 'highlight': visibleSection === 'Entrance' }" value="entrance" @click="handleClick">Entrance</button>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>
                            <button class="btn" :class="{ 'highlight': visibleSection === 'Music' }" value="music" @click="handleClick">Music</button>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>
                            <button class="btn" :class="{ 'highlight': visibleSection === 'Story' }" value="story" @click="handleClick">Story</button>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>
                            <button class="btn" :class="{ 'highlight': visibleSection === 'Merch' }" value="merch" @click="handleClick">Merch</button>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>
                            <button class="btn" :class="{ 'highlight': visibleSection === 'Live' }" value="live" @click="handleClick">Live</button>
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>
                            <button class="btn" :class="{ 'highlight': visibleSection === 'TheBand' }" value="theBand" @click="handleClick">The Band</button>
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mdiMenu } from '@mdi/js';
import Socials from './Socials';

export default {
    name: 'MobileHeader',
    components: {
        Socials,
    },
    data() {
        return {
            icons: {
                mdiMenu,
            },
            drawer: false,
            group: null,
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
    computed: {
        ...mapGetters(['visibleSection']),
        currentPage() {
            const pages = {
                'Entrance': 'Entrance',
                'Music': 'Music',
                'Story': 'Story',
                'Merch': 'Merch',
                'Live': 'Live',
                'TheBand': 'The Band',
            };

            return pages[this.visibleSection];
        }
    },
    methods: {
        handleClick(e) {
            this.drawer = !this.drawer;
            this.$emit('navigate', e.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
    @include large-tablet {
        display: none;
    }
}

.mobile-menu-toggle {
    display: flex;
    align-items: center;
    font-family: 'Old English Text MT';
    color: var(--gold);
    border: 0;
    font-size: 2rem;
    padding: .5rem 1rem;
}

::v-deep .v-icon {
    color: var(--gold);
    margin-right: 1rem;
}

.mobile-menu-content {
    display: flex;
    flex-direction: column-reverse;
    padding: .5rem 1rem;

    @include tablet {
        flex-direction: row;
    }

    ::v-deep .socials {
        flex: 1;
        justify-content: center;

        .link {
            padding: .5rem;
        }

        img {
            max-width: 1.75rem;
        }

        @include tablet {
            justify-content: flex-end;

            img {
                max-width: 2rem;
            }
        }
    }
}

.btn {
    background-color: none;
    border: 0;
    color: var(--white);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
    font-family: 'Old English Text MT';
    font-size: 2rem;
    height: auto;
    border: 1px solid none;
    transform: scale(1);
    transition: transform .5s;

    &:hover {
        color: var(--gold);
        transform: scale(1.2, 1.2);
    }
}

.highlight {
    color: var(--gold);
    transform: scale(1.1, 1.1);
}
</style>
