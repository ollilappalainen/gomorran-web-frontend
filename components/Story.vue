<template>
    <div id="story" ref="story" class="story section">
        <div class="content">
            <div class="story-text">
                <h1>The Story of Gomorran</h1>
                <div class="image-wrapper">
                    <img class="image" src="gomorran-band-photo-2.jpg" alt="Gomorran band photo on stage" />
                </div>
                <p>Gomorran was formed in Helsinki in the Fall of 2019 when Olli Lappalainen’s hiatus from playing drums came to an end. There was a burning desire to form a new band and get back to produce metal music. Guitarist Joonatan Wiitasalo ended his own hiatus and joined to release his heavy music creativity. In the following months many new song ideas came to light.</p>
                <p>Even though the composing was proceeding strong, the band desperately lacked members. By the end of summer 2020 the band was joined by an ambassador of evil soundwaves, singer guitarist Perttu Laamanen. Perttu gave a huge boost to the composing of new material. Song structures and ideas formed into complete songs and Gomorran started to plan on producing its debut record. In the beginning of 2021, right before the recordings of Excerpts from the Dark Age, bassist Panu Nykänen joined to amplify the lower frequencies.</p>
                <p>When Olli and Joonatan wanted to compose merciless ass-kicking music, inspired by Ajattara and Cannibal Corpse, Gomorran’s first song Black Plague was born in the spring of 2020. The song was held as a beacon to the direction the band should musically strive forward to. Gomorran perceives their music as death metal that draws influence from the murkiness of black metal. The impact of other music genres cannot be downplayed, since the members of the band own a wide range of musical influences. Lyrics on the Excerpts from the Dark Age record include harrowing stories about the Roman empire, Middle Ages and from pagan literature.</p>
                <p>The band ended up recording their debut album Excerpts from the Dark Age independently in the band’s rehearsal room in Vallila, Helsinki. Mixing and recording was done by Gomorran’s drummer Olli Lappalainen. Choir, keyboard and strings were arranged and produced by Markus Lappalainen. The recording and mixing of the album was finished in July of 2021, following mastering done by Sound Spiral Studios’ Juho Räihä. Excerpts from the Dark Age was published in the fall of 2021 by Inverse Records, a record label and a release agency.</p>
                <p>In May 2022 the original vocalist and guitarist Perttu Laamanen decided to leave the group due to differences in vision and ambitions. Guitarist Simo Happonen stepped in to fill in guitars and the vocals were filled by Julius Kantoluoto.</p>
            </div>
        </div>
    </div>
</template>

<script>
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'Story',
    mixins: [scrollreportMixin],
};
</script>

<style lang="scss" scoped>
.story {
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

    .story-text {
        p {
            margin: 1rem 0;
            font-size: 18px;
            text-align: justify;
        }
    }
}
</style>