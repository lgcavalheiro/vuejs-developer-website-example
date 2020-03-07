<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg justify-content-center">
        <button type="button" class="btn btn-dark btn-lg mx-5 my-1">About me</button>
        <button type="button" class="btn btn-dark btn-lg mx-5 my-1">Curriculum</button>
        <button type="button" class="btn btn-dark btn-lg mx-5 my-1">Portfolio</button>
        <button type="button" class="btn btn-dark btn-lg mx-5 my-1">Contact</button>
      </nav>
    </header>
    <footer>
      <nav class="navbar navbar-expand-lg justify-content-center">
        <button type="button" class="btn btn-dark btn-lg mx-5 my-1"
        onclick=" window.open('https://github.com/lgcavalheiro','_blank')">
          <i class="fab fa-github"></i>
        </button>
        <button type="button" class="btn btn-dark btn-lg mx-5 my-1"
        onclick=" window.open('https://www.linkedin.com/in/lgcavalheiro/','_blank')">
          <i class="fab fa-linkedin-in"></i>
        </button>
      </nav>
    </footer>
  </div>
</template>
<script src="./Navigation.js"></script>
<style src="./Navigation.css"></style>
