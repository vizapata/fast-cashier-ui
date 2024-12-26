<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopBar from '@/components/AppTopBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { onMounted } from 'vue'
import { categoryService } from './service/category.service'
import { useAppConfigStore } from './stores/config'
import { loggerService } from './service/logger.service'

const appConfigStore = useAppConfigStore()

const loadApplicationData = () => {
  categoryService
    .list()
    .then((list) => (appConfigStore.categories = list))
    .then(() => loggerService.info('Categories loaded'))
}

onMounted(loadApplicationData)
</script>

<template>
  <div id="fc-app-container">
    <AppTopBar />
    <div class="layout-main-container">
      <div class="layout-main">
        <RouterView />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
