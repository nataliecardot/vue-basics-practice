<template>
  <!-- Have to wrap in div because will result in 5 elements in the end, so would have more than one root element  -->
  <div>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
  </div>
</template>

<script>
// Since it's a default export, name is up to you, but makes sense to use filename so you can see where it's coming from
import ServerStatus from "./ServerStatus.vue";

export default {
  components: {
    "app-server-status": ServerStatus,
  },
};
</script>