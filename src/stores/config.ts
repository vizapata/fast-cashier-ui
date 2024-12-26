import type { Category } from '@/domain/category'
import type { KeyValue } from '@/domain/key-metadata'
import { DEFAULT_MOCK_CATEGORY } from '@/domain/mocks'
import { defineStore } from 'pinia'

export const useAppConfigStore = defineStore('useAppConfigStore', {
  state: () => ({
    assetsBaseUrl: '',
    categories: [] as Array<Category>,
    defaultCategory: DEFAULT_MOCK_CATEGORY as Category
  }),
  getters: {
    getOrDefault: (state) => {
      return (key: KeyValue) =>
        state.categories.find((cat) => cat.id === key) ?? state.defaultCategory
    }
  }
})
