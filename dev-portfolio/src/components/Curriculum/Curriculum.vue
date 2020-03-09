<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg col-12 mx-lg-1 my-1" id="column">
          <h5>Work history</h5>
          <div class="accordion" id="accordionExample">
            <div class="card bg-dark">
              <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                {{work[0].name}}
              </button>
              <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                <ul>
                  <li>Description: {{work[0].description}}</li>
                  <li>Results: {{work[0].results}}</li>
                </ul>
              </div>
            </div>
            <div class="card bg-dark">
              <button class="btn btn-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                {{work[1].name}}
              </button>
              <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                <ul>
                  <li>Description: {{work[1].description}}</li>
                  <li>Results: {{work[1].results}}</li>
                </ul>
              </div>
            </div>
            <div class="card bg-dark">
              <button class="btn btn-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                {{work[2].name}}
              </button>
              <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                <ul>
                  <li>Description: {{work[2].description}}</li>
                  <li>Results: {{work[2].results}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg col-12 mx-lg-1 my-1" id="column">
          <h5>Academics and Certifications</h5>
          <ul class="text-left">
            <li v-for="(degree, index) in degrees" v-bind:key="index">
              {{degree}}
            </li>
            <li>
              <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/15163263" alt="">
            </li>
          </ul>
        </div>

        <div class="col-lg col-12 mx-lg-1 my-1" id="column">

          <h5>Skills</h5>
          <div class="row" id="skills">
            <div class="col-3">
              <ul style="list-style-type:none;">
                <li v-for="(skill, index) in skills.languages" v-bind:key="index">
                  <i v-bind:class="skill.icon"></i>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul style="list-style-type:none;">
                <li v-for="(skill, index) in skills.extra" v-bind:key="index">
                  <i v-bind:class="skill.icon"></i>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul style="list-style-type:none;">
                <li v-for="(skill, index) in skills.frameworks" v-bind:key="index">
                  <i v-bind:class="skill.icon"></i>
                </li>
              </ul>
            </div>
            <div class="col-3">
              <ul style="list-style-type:none;">
                <li v-for="(skill, index) in skills.extra2" v-bind:key="index">
                  <i v-bind:class="skill.icon"></i>
                </li>
              </ul>
            </div>
          </div>

          <div class="row pb-4" id="skills">
            <div class="col-6">
              <ul style="list-style-type:none;">
                <li v-for="(skill, index) in skills.practices" v-bind:key="index">
                  {{skill}}
                </li>
              </ul>
            </div>
            <div class="col-6">
              <ul style="list-style-type:none;">
                <li v-for="(skill, index) in skills.practices2" v-bind:key="index">
                  {{skill}}
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script src="./Curriculum.js"></script>
<style src="./Curriculum.css"></style>
