<template>
  <div id="app">

    <!-- Main Header with burger menu -->
    <Header/>

    <!-- Call us -->
    <ContentBanner/>

    <!-- Main information (Body information) -->
    <MainContent/>

    <!-- Asadores -->
    <Asadores/>

    <!-- SUB MENU -->
    <SubMenu/>

    <!-- FORM CONTACT -->
    <ContactUs/>

    <!-- FOOTER -->
    <Footer/>


  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ContentBanner from '../components/ContactBanner.vue'
import MainContent from '../components/MainContent.vue'
import Asadores from '../components/Asadores.vue'
import SubMenu from '../components/SubMenu.vue'
import ContactUs from '../components/ContactUs.vue'
import Footer from '../components/Footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    ContentBanner,
    MainContent,
    Asadores,
    SubMenu,
    ContactUs,
    Footer
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

#app{
  overflow-x: hidden;
}

</style>
