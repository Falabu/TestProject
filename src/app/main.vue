<template>
  <h1>{{ getMessage }}</h1>
</template>
<script lang="ts" setup>
import { useExampleStore } from "../store/example-store";
import { storeToRefs } from "pinia";

const { getMessage } = storeToRefs(useExampleStore());

</script>

<style scoped lang="scss">

</style>
