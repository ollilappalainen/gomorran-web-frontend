<template>
    <div id="music" ref="music" class="music section">
        <div class="content">
            <div class="content-half">
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
    margin-top: -4rem;
    background: rgb(1,1,1);
    background: radial-gradient(circle, rgba(35,37,38,1) 0%, rgba(1,1,1,1) 90%);
    padding: 4rem;
}

.content {
    display: flex;

    .content-half {
        width: 50%;
        padding: 4rem;
        position: relative;
    }

    .image {
        width: 100%;
        box-shadow: 0px 0px 36px 4px #000;
    }

    .music-links {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .music-link {
        width: 90%;
        transition: width .5s;

        &:hover {
            width: 100%;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    }

    .music-link--small {
        width: 45%;

        &:hover {
            width: 50%;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    }

    .music-logo {
        width: 100%;
        padding: 2rem 4rem;
    }
}
</style>