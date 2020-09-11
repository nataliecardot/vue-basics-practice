<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
// This is a local component
export default {
  data: () => {
    return {
      status: "Critical",
    };
  },
  methods: {
    // Reminder: ES6 concise method syntax
    changeStatus() {
      // We can return status even though it's an object returned by a function; Vue.js takes care of this
      this.status = "Normal";
    },
  },
};
</script>