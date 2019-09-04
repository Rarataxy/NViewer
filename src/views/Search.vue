<template>
<div>
    <h1>Results for: <span id="query">{{q}}</span></h1>
    <button @click="show"></button>
</div>
</template>

<script>
import { resolve } from 'dns';

export default {
    props: ['q'],
    name: 'Search',
    data() {
        return {
            results: ''
        }
    },
    methods: {
        show() {
            console.log(this.results)
        }
    },
    mounted(){
        const axios = require('axios')
        axios.get(`https://nhentai.net/api/gallery/${this.q}`)
        .then(response => {console.log(response)});
    }
}

</script>