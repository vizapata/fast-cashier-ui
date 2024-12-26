<template>
  <div class="current-record">
    <CategoryItem :category="category" :icon-only="false" />
    <span class="current-input">{{ formattedDisplay }}</span>
  </div>
</template>

<script setup lang="ts">
import { useKeyboardStore } from '@/stores/keyboard'
import { computed, type Ref } from 'vue'
import CategoryItem from '../categories/CategoryItem.vue'
import { formatCurrency } from '@/utils/currency'
import { useAppConfigStore } from '@/stores/config'

const keyboardStore = useKeyboardStore()
const appConfigStore = useAppConfigStore()
const category = computed(() => appConfigStore.getOrDefault(keyboardStore.category.value))
const formattedDisplay: Ref<string> = computed(() => formatCurrency(keyboardStore.value))
</script>

<style lang="scss" scoped>
.current-record {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 20px;

  .current-input {
    justify-self: flex-end;
    align-self: center;
    font-size: 2em;
  }
}

img {
  max-width: 50px;
}
</style>
