<script setup lang="ts">
import CustomElementBlock from "@/components/CustomElementBlock.vue";
</script>

<template>
  <div class="about">
    <div>
      <h1>Home</h1>
      <CustomElementBlock />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
