<template>
    <div id="theBand" ref="theBand" class="the-band section">
        <div class="head">
            <img class="logo" src="gomorran-logo.svg" alt="Gomorran logo" />
        </div>
        <div class="cards">
            <div v-for="card in cards" :key="card.name" class="card">
                <div class="img">
                    <img :src="card.img" :alt="card.alt" />
                </div>
                <h2>{{ card.name }}</h2>
                <h3>{{ card.instrument }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'TheBand',
    mixins: [scrollreportMixin],
    data() {
        return {
            cards: [
                {
                    img: 'portrait-olli.jpg',
                    alt: 'Portrait of Olli Lappalainen',
                    name: 'Olli Lappalainen',
                    instrument: 'drums',
                },
                {
                    img: 'portrait-julius.jpg',
                    alt: 'Portrait of Julius Kantoluoto',
                    name: 'Julius Kantoluoto',
                    instrument: 'vocals',
                },
                {
                    img: 'portrait-joonatan.jpg',
                    alt: 'Portrait of Joonatan Wiitasalo',
                    name: 'Joonatan Wiitasalo',
                    instrument: 'guitar',
                },
                {
                    img: 'portrait-simo.jpg',
                    alt: 'Portrait of Simo Happonen',
                    name: 'Simo Happonen',
                    instrument: 'guitar',
                },
                {
                    img: 'portrait-panu.jpg',
                    alt: 'Portrait of Panu Nykänen',
                    name: 'Panu Nykänen',
                    instrument: 'bass',
                },
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.the-band {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        max-width: 512px;
        margin-bottom: 8rem;
        width: 100%;
    }

    .cards {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
        flex-basis: 100%;
        margin-bottom: 4rem;

        h2 {
            color: var(--white);
            margin-bottom: 1rem;
            text-align: center;
        }

        h3 {
            color: var(--gold);
            font-family: 'Old English Text MT';
            text-align: center;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .img {
            margin-bottom: 1rem;
        }
    }

    @include tablet {
        .card {
            flex-basis: 50%;
            margin-bottom: 4rem;
        }

        h2 {
            font-size: 1.75rem;
        }

        h3 {

        }
    }

    @include large-tablet {
        .card {
            flex-basis: 20%;
        }

        h2 {
            font-size: 1.75rem;
        }
    }

    @include desktop {
        h2 {
            font-size: 2rem;
        }
    }
}
</style>