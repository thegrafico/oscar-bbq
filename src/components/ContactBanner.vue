<template>
  <div class="container-fluid">
    
    <div class="contact-info">

      <div>
        <h1 class="upper-case">Descubre los asadores de <span>oscar bbq</span></h1>

        <p>La nueva forma de disfrutar de tus cartes favoritas</p>

        <button class="btn btn-warning"> <i class="fas fa-phone-alt"></i> Ll&aacute;manos</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ContactBanner",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/bbq-image.jpeg");
  background-repeat: no-repeat, repeat;
  background-position: top; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 45vh !important;
}

.contact-info{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
}

.contact-info h1{
  font-weight: bold;
  font-size:2em;
}

.contact-info h1 span{
  color: #fff00d;
}

.contact-info p{
  font-weight: bold;
  font-size: 1.1em
}

.btn-warning{
  background-color: #fff00d;
  font-weight: bold;
  width: 30%;  
}


</style>
