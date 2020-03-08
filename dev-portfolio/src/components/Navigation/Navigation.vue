<template>
  <div>
    <header>
      <nav class="navbar justify-content-center">
          <router-link to="/about">
            <button type="button" class="btn btn-dark btn-sm mx-1">About me</button>
          </router-link>
          <router-link to="/curriculum">
             <button type="button" class="btn btn-dark btn-sm mx-1">Curriculum</button>
          </router-link>
          <router-link to="/portfolio">
            <button type="button" class="btn btn-dark btn-sm mx-1">Portfolio</button>
          </router-link>
          <router-link to="/contact">
            <button type="button" class="btn btn-dark btn-sm mx-1">Contact</button>
          </router-link>
      </nav>
    </header>
    <footer>
      <nav class="navbar navbar-expand-lg justify-content-center">
        <button type="button" class="btn btn-dark btn-sm mx-5 my-1"
        onclick=" window.open('https://github.com/lgcavalheiro','_blank')">
          <i class="fab fa-github"></i>
        </button>
        <button type="button" class="btn btn-dark btn-sm mx-5 my-1"
        onclick=" window.open('https://www.linkedin.com/in/lgcavalheiro/','_blank')">
          <i class="fab fa-linkedin-in"></i>
        </button>
      </nav>
    </footer>
  </div>
</template>
<script src="./Navigation.js"></script>
<style src="./Navigation.css"></style>
