<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in filteredProject" :key="project.index">
        <SingleProject :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: { SingleProject },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
};
</script>
