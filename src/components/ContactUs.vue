<template>
  <div class="container-fluid mt-5">
    <div class="row pt-4 red-text">
      <h3 class="form-title">¿NECESITAS M&aacute;S INFORMACI&oacute;N?</h3>

      <p>Llena el formulario y pronto nos pondremos en contacto.</p>
    </div>

    <div class="row ">
      <div class="col-2"></div>
      <div class="col-8 col-md-5">
        
        <!-- Nombre -->
        <div class="form-group red-text mb-3">
          <label for="exampleInputEmail1">Nombre*</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Nombre"
          />
        </div>

        <!-- Telefono -->
        <div class="form-group red-text mb-3">
          <label for="exampleInputEmail1">T&eacute;lefono</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Telefono"
          />
        </div>

        <!-- Email -->
        <div class="form-group red-text mb-3">
          <label for="exampleInputEmail1">Email*</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        
        <!-- MENSAJE -->
        <div class="form-group red-text mb-3">
          <label for="exampleFormControlTextarea1">Mensaje*</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button class="btn btn-warning mb-5"> Enviar </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  methods: {},

  data() {
    return {
      asadores: [
        { img: null, name: "Asador 1", "us-price": 30, _id: "random-id" },
        { img: null, name: "Asador 2", "us-price": 150.26, _id: "random-id-2" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  background-color: rgba(128, 128, 128, 0.2);
}

.form-title {
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.col-8{ 
  text-align: left;

}
</style>
