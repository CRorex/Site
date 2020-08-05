<template>
  <div id="app">
    <h1 id="header">Christopher J. Rorex</h1>
    <div class="contact">
    </div>
    <div class="sidenav">
      <a href="https://www.linkedin.com/in/crorex/"> <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
      </a>
      <router-link to="/">About</router-link>
      <router-link to="/experience">Experience</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  background-color: black;
  text-align: center;
}

.sidenav a {
  display: block;
  padding: 5px 5px 5px 5px;
  color: darkgrey;
  font-size: 25px;
  text-decoration: none;
}

.sidenav a:hover {
  color: whitesmoke;
}

#header {
  text-decoration: underline;
  margin-left: 155px;
  padding: 3px 0px 0px 5px;
  text-align: center;
}

.contact a {
  margin-left: 255px;
}

.contact a:link, .contact a:visited {
  background-color: blue;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.contact a:hover {
  background-color: darkgray;
}
</style>
