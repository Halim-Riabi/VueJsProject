<template>
  <div class="firstcard">
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>
<script>
export default {
  name: "Info-Card",
  props: {
    event: Object,
  },
};
</script>

<style scoped>
.firstcard {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.firstcard:hover {
  transform: scale(1.03);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
