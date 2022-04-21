<template>
    <div class="socials">
        <a
            v-for="link in socials"
            :key="link.alt"
            class="link"
            :href="link.url"
            target="_blank"
            rel="nofollow"
        >
            <img :src="link.img" :alt="link.alt" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'Socials',
    data() {
        return {
            socials: [
                {
                    img: 'icons/spotify-icon.png',
                    alt: 'Spotify link',
                    url: 'https://open.spotify.com/artist/2gYZWsir5p6qtSkTDF7Qkt?si=5xPEgyhMSiqStqcXzwhvRQ',
                },
                {
                    img: 'icons/youtube-icon.png',
                    alt: 'Youtube link',
                    url: 'https://www.youtube.com/channel/UCFqXljGmvd7WQG7P8jO2YqA',
                },
                {
                    img: 'icons/instagram-icon.png',
                    alt: 'Instagram link',
                    url: 'https://www.instagram.com/gomorranmetal/',
                },
                {
                    img: 'icons/facebook-icon.png',
                    alt: 'Facebook link',
                    url: 'https://www.facebook.com/gomorranmetal',
                },
                {
                    img: 'icons/bandcamp-icon.png',
                    alt: 'Bandcamp link',
                    url: 'https://gomorran.bandcamp.com/',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.socials {
    display: flex;
    align-items: center;
}

.link {
    padding: .75rem;
    transform: scale(1);
    transition: transform .5s;

    &:hover {
        transform: scale(1.2, 1.2);
    }
}

img {
    max-width: 2.5rem;
    width: 100%;
}
</style>