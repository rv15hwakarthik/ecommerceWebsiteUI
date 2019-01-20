<template>
   <div>
     <div id="myCarousel" class="carousel slide" data-ride="carousel">
<div class="row">
  <h2>Electronics</h2>
  <div class="column">
    <img src="static/electronics.jpg" alt="Snow" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics2.jpeg" alt="Forest" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics3.jpeg" alt="Mountains" style="width:80%">
  </div>
</div>
  </div>
    <!-- <div id="myCarousel" class="carousel slide" data-ride="carousel"> -->
<div class="row">
  <h2>Home Appliances</h2>
  <div class="column">
    <img src="static/electronics.jpg" alt="Snow" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics4.jpeg" alt="Forest" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics5.jpeg" alt="Mountains" style="width:80%">
  </div>
</div>
<div class="row">
  <h2>Groceries</h2>
  <div class="column">
    <img src="static/electronics5.jpeg" alt="Snow" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics6.jpeg" alt="Forest" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics7.jpeg" alt="Mountains" style="width:80%">
  </div>
</div>
<div class="row">
  <h2>Furniture</h2>
  <div class="column">
    <img src="static/electronics.jpg" alt="Snow" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics2.jpeg" alt="Forest" style="width:80%">
  </div>
  <div class="column">
    <img src="static/electronics3.jpeg" alt="Mountains" style="width:80%">
  </div>
</div>
  </div>




</template>

<script>
export default {
  name: 'slider',

}

</script>

<style scoped>
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

</style>
