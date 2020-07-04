<template>
  <div>
    <nav id="navigueytor">
      <ul>
        <li style="float: left">
          <h1>VIDEO PACHA TV</h1>
        </li>
        <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">
          <li id="elem">{{ routes.text }}</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          id: 1,
          text: "Añadir Video",
          page: "/add"
        },
        {
          id: 2,
          text: "Home",
          page: "/home"
        }
      ]
    };
  }
};
</script>

<style>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: lightcoral;
}
li h1{
    margin:0;
    padding: 0;
    font-size: 20px;
}
nav li {
  float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin: 0 auto;
}

nav li a:hover:not(.active) {
  background-color: #111;
}

nav .active {
  background-color: #4caf50;
}

nav #elem {
  border-left: 1px solid black;
}

nav li:last-child {
  border-left: none;
}

nav ul {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
