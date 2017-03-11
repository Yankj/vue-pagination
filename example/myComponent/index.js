/**
 * Modified by Yankunjie on 2017/3/10.
 */
import pagination from 'public/pagination/index.vue';

export default {
    data() {
        return {
            items: [],
            pagination: {
                total: 0,
                /* eslint-disable */
                per_page: 12,    // required
                current_page: 1, // required
                last_page: 28,    // required
                /* eslint-enable */
                from: 1,
                to: 12           // required
            },
            paginationOptions: {
                offset: 4,
                previousText: 'Prev',
                nextText: 'Next',
                alwaysShowPrevNext: true
            }
        };
    },

    mounted() {
    },

    created() {

    },

    components: {
        pagination
    },

    methods: {

        loadData() {
            const options = {
                params: {
                    paginate: this.pagination.per_page,
                    page: this.pagination.current_page
                    /* additional parameters */
                }
            };
            this.$http.get('/getData', options).then(response => {
                this.items = response.data.data;

                // Overwrite pagination object
                this.pagination = response.data.pagination; // API response edited to have pagination data under pagination object

                // Or overwrite only values
                /*
                 this.pagination.current_page = response.data.current_page;
                 this.pagination.last_page = response.data.last_page;
                 ...
                 */
            });
        }
    }
};
