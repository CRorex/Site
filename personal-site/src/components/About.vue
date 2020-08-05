<template>
  <div class="main">
    <div class="abt">
      <h2>About Me</h2>
      <p>Software Engineer</p>
    </div>
    <div>
        <img src="../assets/rorex.jpg" />
    </div>
    <div class="text">
      <h3>Bio</h3>
      <p>
        Hello! My name is Christopher Rorex. I attend Vanderbilt University.
        I am currently a computer science major with a minor in engineering
        management.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.main {
  margin-left: 155px;
  padding: 3px 0px 0px 5px;
}

img {
  width: 250px;
  border-radius: 20%;
  display: block;
  margin-left: auto;
  margin-right: 400px;
  float: right;
}

.abt {
  text-align: center;
  border-bottom: 2px solid lightgray;
  width: 75%;
  margin: auto;
}

.text {
  margin-left: 140px;
  width: 30%;
  top: 300px;
}
</style>