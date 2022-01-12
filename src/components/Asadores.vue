<template>
  <div class="container-fluid">
    <div class="row mb-5 d-flex justify-content-center">
      <div class="col-10">

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
  </div>
</template>

<script>
export default {
  name: "Asadores",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.shopping-icon{
  margin-right: 1rem;
  display: flex;
  align-items: center;
}
.shopping-icon i{
  font-size: 1.9em;
}
</style>
