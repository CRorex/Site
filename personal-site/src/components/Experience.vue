<template>
  <div class="main">
    <h2 style="text-align: left; text-decoration: underline;">Technical Experience</h2>

    <div>
      <p>
        <img src="../assets/DSG.jpeg" style="width: 200px; float: left;" />
      </p>
      <p>
        <strong>Company:</strong> DICK'S Sporting Goods
        <br />
        <strong>Title:</strong> Software Engineering Intern
        <br />
        <strong>Duration:</strong> June 2020 - August 2020
        <br />
        <strong>Location:</strong> Coraopolis, PA (this position was remote due to COVID-19)
      </p>
    </div>
    <div class="bullets">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>

    <div>
      <p>
        <img
          src="../assets/Equifax.png"
          style="height: 150px; width: 200px; float: left; padding-top: 20px;"
        />
      </p>
      <p style="padding-top: 20px;">
        <strong>Company:</strong> Equifax
        <br />
        <strong>Title:</strong> Technology/Site Reliability Engineering Intern
        <br />
        <strong>Duration:</strong> May 2019 - August 2019
        <br />
        <strong>Location:</strong> Alpharetta, GA
      </p>
    </div>

        <div class="bullets">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
.main {
  margin-left: 155px;
  padding: 3px 0px 0px 5px;
}

.bullets {
  clear: left;
  padding-top: 1px;
}
</style>
