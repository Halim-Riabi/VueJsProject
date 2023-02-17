<template>
  <div id="nav">
    <router-link to="/">Gaming</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/apps">Apps</router-link>
    <router-link to="/tech">Tech</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/advanced">Advanced</router-link>
    <router-link to="/diff">Diff</router-link>
    <router-link to="/aff">Aff</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
