<template>
    <div id="live" ref="live" class="live section">
        <h2>Live shows</h2>
        <div class="events">
            <div class="upcoming-events">
                <!-- <a href="https://www.songkick.com/artists/10171591" class="songkick-widget" data-theme="dark" data-other-artists="on" data-track-button="on" data-background-color="transparent" data-locale="en" rel="nofollow"></a>
                <script src="//widget.songkick.com/10171591/widget.js"></script> -->
                <h3>UPCOMING</h3>
                <ul class="events-list">
                    <li v-for="event in events" :key="event.id" class="event">
                        <div class="details">
                            <span class="date">{{ getEventDate(event.start.date) }}</span>
                            <span class="location">{{ event.location.city }}, {{ event.venue.displayName }}</span>
                            <span class="name">{{ event.displayName }}</span>
                        </div>
                        <div class="action">
                            <a :href="event.uri" class="link" target="_blank" rel="nofollow">DETAILS</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="past-events">
                <h3>PAST</h3>
                <ul class="events-list">
                    <li v-for="event in pastEvents" :key="event.id" class="event past">
                        <span class="date">{{ getEventDate(event.start.date) }}</span>
                        <span class="location">{{ event.location.city }}, {{ event.venue.displayName }}</span>
                        <span class="name">{{ event.displayName }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="booking">
            <h2>Would you like us to play at your event?</h2>
            <h3>Feel free to contact us at:</h3>
            <a class="mail-to" href="mailto:gomorranmetal@gmail.com">gomorranmetal@gmail.com</a>
        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon';
import { mapActions, mapGetters } from 'vuex';
import scrollreportMixin from '~/mixins/scrollreport';

export default {
    name: 'Live',
    mixins: [scrollreportMixin],
    fetch() {
        this.getPastEvents();
        this.getEvents();
    },
    computed: {
        ...mapGetters({
            pastEvents: 'pastEvents',
            events: 'events',
        }),
    },
    methods: {
        ...mapActions({
            getPastEvents: 'getPastEvents',
            getEvents: 'getEvents',
        }),
        getEventDate(date) {
            return DateTime.fromISO(date).toFormat('yyyy LLL dd');
        },
    },
};
</script>

<style lang="scss" scoped>
.live {
    width: 100%;

    h2 {
        margin-bottom: 2rem;
    }
}

.events {
    display: flex;
    flex-direction: column;

    @include desktop {
        flex-direction: row;
    }

    h3 {
        margin-bottom: 2rem;
        font-family: 'Maven Pro';
        border-bottom: 1px solid var(--white);
    }
}

.upcoming-events {
    flex-basis: 100%;
    padding: 1rem 0 2rem;

    @include desktop {
        padding: 1rem 2rem 2rem 0;
        flex-basis: 50%;
        border-right: 2px solid var(--gold);
    }
}

.past-events {
    flex-basis: 100%;
    padding: 2rem 0;

    @include desktop {
        padding: 1rem 0 2rem 2rem;
        flex-basis: 50%;
    }
}

.events-list {
    list-style: none;
}

.event {
    font-family: 'Maven Pro';
    display: flex;
    margin-bottom: 1rem;

    .date {
        color: var(--gold);
    }

    .location {
        color: var(--gold);
    }

    .name {
        color: var(--white);
    }
}

.action {
    white-space: nowrap;
    border: 1px solid var(--gold);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;

    &:hover {
        background-color: var(--gold);
    }
}

.link {
    text-decoration: none;
    padding: .25rem .5rem;
    color: var(--gold);

    &:hover {
        background-color: var(--gold);
        color: var(--black);
    }
}

.details,
.past {
    flex-direction: column;
}

.booking {
    width: 100%;
    text-align: center;
    margin: 4rem 0;

    h2 {
        margin-bottom: 2rem;
        color: var(--white);
    }

    h3 {
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
