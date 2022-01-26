<template>
    <div id="live" ref="live" class="live section">
        <h1>Live shows</h1>
        <a href="https://www.songkick.com/artists/10171591" class="songkick-widget" data-theme="dark" data-other-artists="on" data-track-button="on" data-background-color="transparent" data-locale="en"></a>
        <script src="//widget.songkick.com/10171591/widget.js"></script>

        <div class="booking">
            <h1>Would you like us to play at your event?</h1>
            <h2>Feel free to contact us at:</h2>
            <a class="mail-to" href="mailto:gomorranmetal@gmail.com">gomorranmetal@gmail.com</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Live',
};
</script>

<style lang="scss" scoped>
.live {
    width: 100%;
    padding: 4rem;
}

.booking {
    width: 100%;
    text-align: center;
    margin: 4rem 0;

    h1, h2 {
        margin-bottom: 1rem;
        color: var(--white);
    }

    .mail-to {
        font-size: 1.5rem;
        color: var(--gold);
        text-decoration: none;
        font-family: 'Old English Text MT';
    }
}
</style>
