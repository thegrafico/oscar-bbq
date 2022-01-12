<template>
  <div id="app">

    <!-- Main Header with burger menu -->
    <MainHeader/>

    <!-- Call us -->
    <ContentBanner/>

    <!-- Main information (Body information) -->
    <MainContent/>

    <!-- Asadores -->
    <Asadores/>

  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import ContentBanner from './components/ContactBanner.vue'
import MainContent from './components/MainContent.vue'
import Asadores from './components/Asadores.vue'


export default {
  name: 'App',
  components: {
    MainHeader,
    ContentBanner,
    MainContent,
    Asadores
  }
}
</script>

<style>
#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.upper-case{
  text-transform: uppercase;
}

.container-fluid{
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.red-text{
  color: #b82633;
}

.normal-text{
  font-weight: 400;
}

.medium-text{
  font-weight: 500;
}

.bold-text{
  font-weight: bold;
}

.btn-warning{
  background-color: #fff00d;
  font-weight: bold;
  width: 30%;
  
}

</style>
