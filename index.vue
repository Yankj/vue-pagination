<template>
    <nav>
        <ul class="pagination" v-if="pagination.last_page > 0" :class="sizeClass">
            <li v-if="showPrevious()" :class="{ 'disabled' : pagination.current_page <= 1 }">
                <span v-if="pagination.current_page <= 1">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </span>

                <a href="#" v-if="pagination.current_page > 1 " :aria-label="config.ariaPrevioius"
                   @click.prevent="changePage(pagination.current_page - 1)">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </a>
            </li>

            <li v-for="num in array" :class="{ 'active': num === pagination.current_page }">
                <a href="#" @click.prevent="changePage(num)">{{ num }}</a>
            </li>

            <li v-if="showNext()"
                :class="{ 'disabled' : pagination.current_page === pagination.last_page || pagination.last_page === 0 }">
                <span v-if="pagination.current_page === pagination.last_page || pagination.last_page === 0">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </span>

                <a href="#" v-if="pagination.current_page < pagination.last_page" :aria-label="config.ariaNext"
                   @click.prevent="changePage(pagination.current_page + 1)">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </a>
            </li>
        </ul>
    </nav>

</template>

<script src="./index.js"></script>

<style rel="stylesheet/css">
    @import "index.css";

</style>
