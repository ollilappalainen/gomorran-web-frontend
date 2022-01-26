<template>
    <div id="merch" ref="merch" class="merch section">
        <div class="content">
            <div class="content-half">
                <img class="image" src="gomorran-merch.png" alt="Image of Gomorran merchandise" />
            </div>
            <div class="content-half">
                <div class="text-content">
                    <h1>Get Gomorran merchandise from our</h1>
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
export default {
    name: 'Merch',
};
</script>

<style lang="scss" scoped>
.merch {
    width: 100%;
    margin-top: -4rem;
    background: rgb(1,1,1);
    background: radial-gradient(circle, rgba(35,37,38,1) 0%, rgba(1,1,1,1) 90%);
}

.content {
    display: flex;

    .content-half {
        width: 50%;
        padding: 4rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image {
        width: 100%;
    }

    .text-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        h1 {
            font-size: 96px;
            text-align: center;
        }
    }

    .link {
        margin-top: 4rem;
        text-decoration: none;
        transform: scale(1);
        transition: transform .5s;

        span {
            font-family: 'Old English Text MT';
            text-transform: uppercase;
            color: var(--white);
            border: 2px solid var(--white);
            padding: 1rem;
            font-size: 96px;
            box-shadow: 0 5px 15px rgba(0,0,0,0);
            transition: box-shadow .5s;
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