export const state = () => ({
    verticalOffsetTop: 0,
    visibleSection: 'Entrance',
});

export const mutations = {
    verticalOffsetTop(state, verticalOffsetTop) {
        state.verticalOffsetTop = verticalOffsetTop;
    },
    visibleSection(state, visibleSection) {
        state.visibleSection = visibleSection;
    },
};

export const getters = {
    verticalOffsetTop: state => state.verticalOffsetTop,
    visibleSection: state => state.visibleSection,
};
