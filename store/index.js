export const state = () => ({
    verticalOffsetTop: 0,
    visibleSection: 'Entrance',
    pastEvents: [],
    events: [],
});

export const mutations = {
    verticalOffsetTop(state, verticalOffsetTop) {
        state.verticalOffsetTop = verticalOffsetTop;
    },
    visibleSection(state, visibleSection) {
        state.visibleSection = visibleSection;
    },
    pastEvents(state, pastEvents) {
        state.pastEvents = pastEvents;
    },
    events(state, events) {
        state.events = events;
    }
};

export const actions = {
    async getPastEvents(ctx) {
        const url = `https://api.songkick.com/api/3.0/artists/${this.$config.songkickArtistId}/gigography.json?order=desc&apikey=${this.$config.songkickApiKey}`;
        const pastEvents = await this.$axios.$get(url);

        if (pastEvents?.resultsPage?.results?.event?.length) {
            ctx.commit('pastEvents', pastEvents.resultsPage.results.event);
        }

        return pastEvents;
    },
    async getEvents(ctx) {
        const url = `https://api.songkick.com/api/3.0/artists/${this.$config.songkickArtistId}/calendar.json?apikey=${this.$config.songkickApiKey}`;
        const events = await this.$axios.$get(url);

        if (events?.resultsPage?.results?.event?.length) {
            ctx.commit('events', events.resultsPage.results.event);
        }

        return events;
    },
};

export const getters = {
    verticalOffsetTop: state => state.verticalOffsetTop,
    visibleSection: state => state.visibleSection,
    pastEvents: state => state.pastEvents,
    events: state => state.events,
};
