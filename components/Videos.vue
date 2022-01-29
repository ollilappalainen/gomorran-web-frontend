<template>
    <div class="videos section">
        <div class="video-wrapper">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/TBUJWA7UuCM" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/wsLczThoimw" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/lI6KuMTTUQY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <div class="video">
                <iframe src="https://www.youtube.com/embed/IoYyyvTO3d8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 0;
}

.video-wrapper {
    padding: 1rem 0;
    flex-basis: 100%;
}

.video {
    flex-basis: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    position: relative;
    height: 0;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

@include tablet {
    .video-wrapper {
        padding: 2rem 0;
    }
}

@include large-tablet {
    .video-wrapper {
        flex-basis: 50%;
        padding: 2rem;
    }

    // .video {
    //     padding-bottom: 56.25%; /* 16:9 */
    // }
}
</style>