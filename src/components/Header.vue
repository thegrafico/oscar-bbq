<template>
  <div class="container-fluid">
    <div class="container">
      <img src="../assets/oscar-bbq-logo.jpeg" alt="oscar-bbq-logo" />

      <!-- Only visible when phone -->
      <div class="burger-menu-container">
        <a href="#" type="button" @click="toggleBurgerMenu">
          <i class="fas fa-bars f-icon"></i>
        </a>
      </div>

      <div
        class="header-links"
        v-bind:class="{ 'show-burger-menu': toggleMenu }"
      >
        <a href="#" class="closebtn" @click="toggleBurgerMenu">&times;</a>

        <v-link href="/">Home</v-link>
        <v-link href="/asadores">Asadores</v-link>
        <v-link href="/galeria">Galer&iacute;a</v-link>
        <v-link href="/contacto">Contacto</v-link>

      </div>
    </div>
  </div>
</template>

<script>

import VLink from '../components/VLink.vue'

export default {
  name: "Header",
  props: {
    title: String,
    activeRoute: String,
  },
  methods: {
    toggleBurgerMenu: function () {
      this.toggleMenu = !this.toggleMenu;
    },
  },
  components: {
    VLink
  },

  data() {
    return {
      toggleMenu: false,
      links: [
        { route: "/", name: "Inicio" },
        { route: "/asadores", name: "Asadores" },
        { route: "/galeria", name: "Galería" },
        { route: "/contacto", name: "contacto" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  color: white;
  background-color: #1e1e1e;
  padding-bottom: 0.8rem;
}

.header-links a {
  text-decoration: none;
  color: white;
  margin: 0 1.5rem;
  font-size: 1.5em;
}

.header-links a:hover {
  font-weight: bold;
  border-bottom: 0.15rem solid red;
}

.icon {
  font-size: 5em;
}

.f-icon {
  color: gray;
}

.burger-menu-container,
.closebtn {
  display: none;
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .header-links {
    /* display: none; */
    height: 100%;
    width: 0%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    transition: 0.5s;
    padding-top: 60px;
  }

  .show-burger-menu {
    width: 70% !important;
  }

  .closebtn {
    display: block;
  }

  .header-links a {
    display: block;
    margin-top: 1.5rem;
    font-size: 2em;
  }

  .header-links a:hover,
  .active {
    border-bottom: none;
  }

  .burger-menu-container {
    display: block;
    font-size: 3em;
    margin-top: 2rem;
  }

  .container-fluid {
    padding-bottom: 1rem;
    margin-bottom: 0rem;
  }

  .header-links .closebtn {
    position: absolute;
    top: 0;
    left: 25px;
    font-size: 2.5em;
    margin-left: 1rem;
  }
}
</style>
