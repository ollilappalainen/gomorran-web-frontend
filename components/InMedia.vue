<template>
    <div id="inMedia" ref="inMedia" class="in-media section">
        <div class="content">
            <div class="in-media-text">
                <h2>Gomorran media appearances</h2>
                <div class="image-wrapper">
                    <img class="image" src="gomorran-band-live.jpg" alt="Gomorran band photo taken in an autumn forest" />
                </div>
                <div class="media-links">
                    <a href="https://tuonelamagazine.com/gallery-17-3-2022-gomorran-astral-corpse-orbiter-hard-rock-house-helsinki/" rel="nofollow">Tuonela Magazine 17.3.2022 - GALLERY: Gomorran, Astral Corpse, & Orbiter @ Hard Rock House, Helsinki</a>
                    <a href="https://tuonelamagazine.com/17-3-2022-gomorran-astral-corpse-orbiter-hard-rock-house-helsinki/" rel="nofollow">Tuonela Magazine 17.3.2022 - Gomorran, Astral Corpse, & Orbiter @ Hard Rock House, Helsinki</a>
                    <a href="http://www.metal-temple.com/site/catalogues/entry/reviews/cd_3/g_2/gomorran-excerpts.htm" rel="nofollow">Metal Temple 23.2.2022 - Gomorran "Excerpts from the Dark Age" review</a>
                    <a href="https://metalalliancemag.ch/2022/02/gomorran-excerpts-from-the-dark-age-ep/" rel="nofollow">Metal Alliance 1.2.2022 - Gomorran "Excerpts from the Dark Age" review</a>
                    <a href="https://bringerofdeathzine.blogspot.com/2021/12/gomarran-interview.html" rel="nofollow">Blackdeathmetalzine 20.12.2021 - Gomorran interview</a>
                    <a href="https://overtone.site/2021/12/03/review-excerpts-from-the-dark-age-the-start-of-something-great-for-gomorran/" rel="nofollow">Overtone 3.12.2021 - Gomorran "Excerpts from the Dark Age" review</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'InMedia',
    mixins: [scrollreportMixin],
};
</script>

<style lang="scss" scoped>
.in-media {
    width: 100%;
    background: var(--black);
}

.content {
    .image-wrapper {
        width: 100%;
        margin-top: 2rem;

        @include large-tablet {
            float: right;
            margin: 1.5rem 0 2rem 2rem;
            max-width: 50%;
        }

        @include desktop {
            margin: 1.5rem 0 2rem 4rem;
        }
    }

    .image {
        width: 100%;
        box-shadow: 0px 0px 36px 4px #000;
    }

    .in-media-text {
        a {
            padding: .75rem 0;
            font-size: 18px;
            text-align: justify;
            color: var(--white);
            text-decoration: none;
        }

        a:hover {
            color: var(--gold);
        }

        @include large-tablet {
            a {
                padding: .25rem 0;
            }
        }
    }
}

.media-links {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}
</style>