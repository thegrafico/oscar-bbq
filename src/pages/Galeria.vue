<template>
  <div id="app">

    <!-- Main Header with burger menu -->
    <Header/>

    <!-- Call us -->
    <ContentBanner v-bind="bannerSetup"/>

     <!-- FORM CONTACT -->
    <ContactUs/>

    <!-- FOOTER -->
    <Footer/>


  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ContentBanner from '../components/ContactBanner.vue'
import ContactUs from '../components/ContactUs.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Galeria',
  components: {
    Header,
    ContentBanner,
    ContactUs,
    Footer
  },

  data () {
    return {
      bannerSetup: {
        bgImage: 'maiz.jpg',
        titleStart: "¿Quieres más información acerca de nuestros",
        titleMiddle: "asadores",
        titleEnd: "?",
        bodyMsg: "¡ Déjanos tu información !",
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
