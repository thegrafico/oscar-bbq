<template>
  <div class="container-fluid">
    <div class="row pt-5">
      <p>Oscar BBQ Asadores</p>

      <p>
        T&eacute;lefono: <br />
        <a
          style="color: #b82633"
          href="tel:7872027713"
          data-track-event="click"
          data-track-action="phone_link"
          >(787) 202-7713</a
        >
      </p>

      <p>
        Email: <br />
        <a
          style="color: #b82633"
          href="mailto:oscar.bbqpr@gmail.com"
          target="_blank"
          rel="noopener"
          data-track-event="click"
          data-track-action="email_link"
          ><span class="monoglobalWrap">oscar.bbqpr@gmail.com</span></a
        >
      </p>
    </div>

    <div class="socials d-flex justify-content-center pb-5">
        <div class="p-2">
        <a href="https://www.facebook.com/Oscar-BBQ-Asadores-PR-103133248226506">
            <i class="fab fa-facebook"></i>
        </a>
      </div>

      <div class="p-2">
        <a href="https://www.instagram.com/oscar.bbq.asadores.pr/">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  background-color: #333;
  color: white;
}

.socials a{
    text-decoration: none;
}

i {
  font-size: 2em;
  color: white;
}
</style>
