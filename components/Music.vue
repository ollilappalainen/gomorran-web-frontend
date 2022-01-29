<template>
    <div id="music" ref="music" class="music section">
        <div class="content">
            <div class="content-half left">
                <img class="image" src="eftda-cover.jpg" alt="Excerpts from the Dark Age EP cover image" />
            </div>
            <div class="content-half">
                <div class="music-links">
                    <a
                        v-for="link in musicLinks"
                        :key="link.alt"
                        class="music-link"
                        :class="link.small ? 'music-link--small' : ''"
                        :href="link.src"
                        target="_blank"
                    >
                        <img class="music-logo" :src="link.img" :alt="link.alt" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'Music',
    mixins: [scrollreportMixin],
    data() {
        return {
            musicLinks: [
                {
                    img: 'icons/spotify-logo.png',
                    alt: 'Spotify logo',
                    src: 'https://open.spotify.com/artist/2gYZWsir5p6qtSkTDF7Qkt?si=5xPEgyhMSiqStqcXzwhvRQ',
                },
                {
                    img: 'icons/youtube-logo.png',
                    alt: 'Youtube logo',
                    src: 'https://music.youtube.com/channel/UCizEJdUl2kmERhcOpvJYMqQ?feature=share',
                },
                {
                    img: 'icons/tidal-logo-white.png',
                    alt: 'Tidal logo',
                    src: 'https://tidal.com/browse/artist/28369208',
                    small: true,
                },
                {
                    img: 'icons/deezer-logo.png',
                    alt: 'Deezer logo',
                    src: 'https://deezer.page.link/xLVnERCrG4w1tG3d7',
                    small: true,
                },
                {
                    img: 'icons/bandcamp-logo.png',
                    alt: 'Bandcamp logo',
                    src: 'https://gomorran.bandcamp.com/',
                    small: true,
                },
                {
                    img: 'icons/apple-music-logo.svg',
                    alt: 'Apple Music logo',
                    src: 'https://music.apple.com/us/artist/gomorran/1585396016',
                    small: true,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.music {
    width: 100%;
    margin-top: -2rem;
    padding-top: 8rem;
    background: rgb(1,1,1);
    background: radial-gradient(circle, rgba(35,37,38,1) 0%, rgba(1,1,1,1) 90%);

    @include tablet {
        margin-top: -4rem;
    }
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include large-tablet {
        flex-direction: row;
    }

    .content-half {
        position: relative;

        @include large-tablet {
            width: 50%;
        }

        @include desktop {
            padding: 0 1rem;
        }
    }

    .image {
        width: 100%;
        box-shadow: 0px 0px 36px 4px #000;
    }

    .music-links {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2rem;

        @include large-tablet {
            margin-top: 0;
        }
    }

    .music-link {
        width: 90%;
        padding: 1rem;
        transition: width .5s;

        &:hover {
            width: 100%;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        @include tablet {
            width: 45%;
            padding: 2rem 4rem;

            &:hover {
                width: 50%;
            }
        }

        @include large-tablet {
            width: 90%;

            &:hover {
                width: 100%;
            }
        }
    }

    .music-link--small {
        @include tablet {
            width: 45%;
            padding: 1rem 2rem;

            &:hover {
                width: 50%;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }
        }
    }

    .music-logo {
        width: 100%;
    }
}
</style>