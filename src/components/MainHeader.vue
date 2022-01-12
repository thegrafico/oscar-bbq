<template>
  <div class="container-fluid">
    <div class="container">
      <img src="../assets/oscar-bbq-logo.jpeg" alt="oscar-bbq-logo" />
      <div class="header-links">
        <a href="" class="current-link">Inicio</a>
        <a href="">Asadores</a>
        <a href="">Galer&iacute;a</a>
        <a href="">Contacto</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  color: white;
  background-color: #1e1e1e;
  margin-bottom: 1rem;
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

.current-link {
  border-bottom: 0.15rem solid red;
}

.icon{
  font-size: 5em;
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .header-links a{
    background-color: yellow;
    display: block;
    visibility: hidden;
  }

  .header-links a:hover, .current-link{
      border-bottom: none;
  }
}

</style>
