import { mapGetters, mapMutations} from 'vuex';

const scrollreportMixin = {
    computed: {
        ...mapGetters([
            'visibleSection',
            'verticalOffsetTop',
        ]),
        offsetTop() {
            return this.$el.offsetTop;
        },
        offsetHeight() {
            return this.$el.offsetHeight;
        },
    },
    watch: {
        verticalOffsetTop(val) {
            if (val > (this.offsetTop - 100) && val < this.offsetTop + this.offsetHeight - 100) {
                this.setVisibleSection(this.$options.name);
            }
        },
    },
    methods: {
        ...mapMutations({
            setVisibleSection: 'visibleSection',
        }),
    },
};

export default scrollreportMixin;
