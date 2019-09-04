<template>
    <div class="main-wrapper">
        <div class="main-nav">
        <ul>
            <router-link tag="li" to="/settings"><a href="#" ><i class="glyphicon glyphicon-menu-hamburger"></i></a></router-link>
            <router-link tag="li" to="/" exact><a href="#">Library</a></router-link>
            <router-link tag="li" to="/recentlyread"><a href="#">Recently Read</a></router-link>
            <router-link tag="li" to="/downloaded"><a href="#">Downloaded</a></router-link>
        </ul>
            <div class="search">
                <i class="glyphicon glyphicon-search"></i>
                <input @keyup.enter="search" id="search" type="text" placeholder="Search for names, ids, tags itp">
            </div>
        </div>
        <div class="main-content">
            <router-view :q="searchtext" :key="searchtext"/>
        </div>
    </div>
</template>

<script>
    require('../src/toolbar.js');

    export default {
    name: "app",
    data() {
        return {
            searchtext: ''
        }
    },
    methods: {
        search(){
            this.searchtext = document.getElementById('search').value;
            this.$router.push({ path: 'search' }).catch(() => {
                console.log('loading same route')
            })
        }
    }
    }
</script>

<style>
    @import url('./assets/css/bootstrap.min.css');
    @import url('./css/main.css');

.main-nav {
    overflow: hidden;
    height: 8vh;
    width: 100vw;
    background-color: #D90368;
    position: fixed;
    line-height: 3vh;
}

.main-nav ul {
    float: left;
    margin: 0;
    padding: 0;
}

.main-nav li {
    height: 8vh;
    display: inline-block;
    padding: 3vh 1.4vw;
    font-family: 'Poppins', sans-serif;
}

.main-nav a {
    padding: 0 0 0.6vh;
    color: #ffffff;
    text-decoration: none;
    font-size: 2.3vh;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
}

.main-nav a:hover {
    color: #dfdfdf;
    text-decoration: none;
}

.main-nav a:focus {
    color: #b1b1b1;
    text-decoration: none;
}

.main-nav .active a:focus {
    color: #dfdfdf;
}

.search{
    float: right;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 33vw;
    display: flex;
}

#search{
    width: 80%;
    display: block;
    margin: 1.7vh 2vw;
    border-radius: 5px;
    box-shadow: none;
    border: none;
    font-size: 2vh;
    font-family: 'Poppins', sans-serif;
}

#search:focus{
    outline: none;
}

.search input{
    padding: 0 0 0 4.5vh;
}

input::placeholder{
    color: #a9a9a9;
}

.search .glyphicon-search {
    font-size: 2vh;
    left: 4vw;
    top: 3.1vh;
    height: 2vh;
    color: #a9a9a9;
}

.active {
    background-color: rgb(207, 5, 99);
    box-shadow: inset 1px 1px 3px rgb(185, 2, 88);
}

.active a {
    color: #dfdfdf;
}
</style>