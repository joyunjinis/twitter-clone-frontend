<template>
  <div>
    <button @click="fruitStore.removeFirstItem">Remove First Item</button>
    <button @click="fruitStore.removeLastItem">Remove Last Item</button>
    <ul>
      <ItemComponent
        v-for="item in fruitStore.fruitList"
        :key="item.id"
        :item="item"
      />
    </ul>
    <div>getFruitListLength: {{ fruitStore.getFruitListLength }}</div>
    <div>getFruitByNameWithA: {{ fruitStore.getFruitByNameWith }}</div>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";
import { useFruitStore } from "@/store/fruit";
export default {
  name: "DemoPage",
  components: { ItemComponent },
  data() {
    return {
      fruitStore: useFruitStore(),
    };
  },
};
</script>
