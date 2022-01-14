<template>
  <div class="container-fluid mt-4">
    <div class="row mb-5 d-flex justify-content-center">
      <div class="col-10">

        <!-- Search Filter -->
        <div class="input-group rounded">
          
          <div class="shopping-icon">
            <i class="fas fa-shopping-bag"></i>
          </div>

          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>


      </div>
    </div>

    <div class="row">
      <div v-for='asador in asadores' :key="asador._id" class="col-sm-12 col-md-6 mb-4" >
        
        <div class="image-container">

            <!-- IMAGE AND BUTTON -->
          <div class="image">
            <!-- TODO: Image here -->
            <div class="add-to-card">
              <button class="btn btn-success"> Agregar al carrito </button>
            </div>
          </div>

          <div>
            <p class="mt-1 mb-0 asador-title">{{asador['name']}}</p>

            <p class="asador-price">
              US ${{asador['us-price']}}
            </p>

          </div>
        
        </div>

      </div>
      <div class="col-sm-12 col-md-6"></div>
    </div>

    <div class="row mb-5">

      <div class="container">
        <img src="../assets/Asadores-De-Barril-Oscar-BBQ-Asadores.jpeg" alt="Tipos de asadores">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Asadores",
  methods: {},
  
  data() {
    return {
      asadores: [ {'img': null, 'name': 'Asador 1', 'us-price': 30, '_id': 'random-id'},
      {'img': null, 'name': 'Asador 2', 'us-price': 150.26, '_id': 'random-id-2'}
      ],
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.image-container {
  position: relative; 
}

.image-container .image:hover{
  opacity: .9;
}

.image-container .image{
  width: 80%;
  margin-left: 10%;
  height: 50vh;
  background-color: red;
}

.image-container .add-to-card{
  position: absolute;
  top: 40%;
  left: 40%;
  z-index: -1;
  display: none;
}

.image-container .image:hover > .add-to-card{
  display: block;
}

.shopping-icon{
  margin-right: 1rem;
  display: flex;
  align-items: center;
}
.shopping-icon i{
  font-size: 1.9em;
}


.asador-title{
  font-weight: 300;
}

.asador-price{
  font-weight: 400;
}

</style>
