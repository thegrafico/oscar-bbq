<template>
  <a v-bind:href="href" v-bind:class="{ active: (href === urlPath) }" v-on:click="go">
    <slot></slot>
  </a>
</template>

<script>
import routes from "../routes";

export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    },
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, routes[this.href], this.href);
    },
  },

  data () {
      return {
          urlPath: window.location.pathname,
      }
  }
};
</script>

<style scoped>
.active {
  border-bottom: 0.15rem solid red;
}
</style>
