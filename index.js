/**
 * Created by yankunjie on 2017/3/9.
 */
export default {
    props: {
        pagination: {
            type: Object,
            required: true
        },
        callback: {
            type: Function,
            required: true
        },
        options: {
            type: Object
        },
        size: {
            type: String
        }
    },
    computed: {
        array() {
            if (this.pagination.last_page <= 0) {
                return [];
            }

            let from = this.pagination.current_page - this.config.offset;
            if (from < 1) {
                from = 1;
            }

            let to = from + (this.config.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            const arr = [];
            while (from <= to) {
                arr.push(from);
                from++;
            }

            return arr;
        },
        config() {
            return Object.assign({
                offset: 3,
                ariaPrevious: 'Previous',
                ariaNext: 'Next',
                previousText: '«',
                nextText: '»',
                alwaysShowPrevNext: false
            }, this.options);
        },
        sizeClass() {
            if (this.size === 'large') {
                return 'pagination-lg';
            } else if (this.size === 'small') {
                return 'pagination-sm';
            } else {
                return '';
            }
        }
    },
    watch: {
        'pagination.per_page'(newVal, oldVal) {
            if (+newVal !== +oldVal) {
                this.callback();
            }
        }
    },
    methods: {
        showPrevious() {
            return this.config.alwaysShowPrevNext || this.pagination.current_page > 1;
        },
        showNext() {
            return this.config.alwaysShowPrevNext || this.pagination.current_page < this.pagination.last_page;
        },
        changePage(page) {
            if (this.pagination.current_page === page) {
                return;
            }

            this.$set(this.pagination, 'current_page', page);
            this.callback();
        }
    }
};
