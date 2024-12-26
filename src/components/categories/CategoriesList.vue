<template>
  <div class="categories-list">
    <CategoryItem
      v-for="category in appConfigStore.categories"
      :key="category.id"
      :category="category"
      icon-only
    />
  </div>
</template>

<script setup lang="ts">
import CategoryItem from '@/components/categories/CategoryItem.vue'
import { useAppConfigStore } from '@/stores/config'
const appConfigStore = useAppConfigStore()
</script>

<style lang="scss" scoped>
.categories-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 20px;
}
</style>
