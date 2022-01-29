<template>
    <div id="merch" ref="merch" class="merch section">
        <div class="content">
            <div class="content-half">
                <img class="image" src="gomorran-merch.png" alt="Image of Gomorran merchandise" />
            </div>
            <div class="content-half">
                <div class="text-content">
                    <h1 class="text">Get Gomorran merchandise from our</h1>
                    <a
                        class="link"
                        href="https://morbidnorth.com/gomorran/"
                        target="_blank"
                    >
                        <span class="link text">STORE</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'Merch',
    mixins: [scrollreportMixin],
};
</script>

<style lang="scss" scoped>
.merch {
    width: 100%;
    background: rgb(1,1,1);
    background: radial-gradient(circle, rgba(35,37,38,1) 0%, rgba(1,1,1,1) 90%);
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include tablet {
        flex-direction: row;
    }

    .content-half {
        padding: 0 1rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        @include tablet {
            width: 50%;
        }

        @include large-tablet {
            padding: 2rem;
        }

        @include desktop {
            padding: 4rem;
        }
    }

    .image {
        width: 100%;
        margin-bottom: 2rem;

        @include tablet {
            margin-bottom: 0;
        }
    }

    .text-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        .text {
            font-size: 1.75rem;
            text-align: center;
            margin-bottom: 2rem;

            @include tablet {
                font-size: 2rem;
                margin-bottom: 0;
            }

            @include large-tablet {
                font-size: 4rem;
            }

            @include desktop {
                font-size: 6rem;
            }
        }
    }

    .link {
        margin-top: 2rem;
        text-decoration: none;
        transform: scale(1);
        transition: transform .5s;

        @include large-tablet {
            margin-top: 4rem;
        }

        span {
            font-family: 'Old English Text MT';
            text-transform: uppercase;
            color: var(--white);
            border: 2px solid var(--white);
            padding: .5rem;
            font-size: 1.5rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0);
            transition: box-shadow .5s;

            @include tablet {
                font-size: 1.75rem;
                padding: .5rem;
            }

            @include large-tablet {
                font-size: 4rem;
                padding: .75rem;
            }

            @include desktop {
                font-size: 6rem;
                padding: 1rem;
            }
        }

        span:hover {
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        &:hover {
            transform: scale(1.1, 1.1);
        }
    }
}
</style>