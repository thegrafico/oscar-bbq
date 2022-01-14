<template>
  <div id="app">

    <!-- Main Header with burger menu -->
    <Header/>

    <!-- Call us -->
    <ContentBanner v-bind="bannerSetup"/>

    <!-- Asadores -->
    <Asadores/>

    <!-- SUB MENU -->
    <SubMenu/>

    <!-- FOOTER -->
    <Footer/>


  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ContentBanner from '../components/ContactBanner.vue'
import Asadores from '../components/Asadores.vue'
import SubMenu from '../components/SubMenu.vue'
import Footer from '../components/Footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    ContentBanner,
    Asadores,
    SubMenu,
    Footer
  },

  data () {
    return {
      bannerSetup: {
        bgImage: 'pinchos.jpg',
        titleStart: "Adquiere tu",
        titleMiddle: "Oscar BBQ",
        titleEnd: "Asador hoy",
        bodyMsg: "Escoge entre uno de los cinco modelos disponibles.",
        showBtn: false,
      }
    }
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
