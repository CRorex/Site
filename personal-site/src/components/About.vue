<template>
  <div class="main">
    <div class="abt">
      <h1 style="font-size: 50px;">About Me</h1>
      <h3>Software Engineer</h3>
    </div>
    <div>
        <img src="../assets/rorex.jpg" />
    </div>
    <div class="text">
      <h3>Bio</h3>
      <p>
        Hello! My name is Christopher Rorex. I am currently a senior at Vanderbilt University, studying for a B.S. in 
        Computer Science and a minor in Engineering Manganement. My most recent experience was at DICK'S Sporting Goods as
        a Software Engineering Intern. I am currently working as a TA at Vanderbilt for a Parallel functional programming class.
        I am actively looking for full-time positions as an entry level Software Engineer. I have experience with both frontend and 
        backend technologies, and I aspire to become a full-stack developer. Thank you for visiting my website! If you have questions, 
        feel free to email me or message me on LinkedIn. 
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
  margin-right: 350px;
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
  width: 40%;
  top: 300px;
}
</style>