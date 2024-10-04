import type { Category } from '@/domain/category'
import { MOCK_CATEGORIES } from '@/domain/mocks'

interface CategoryService {
  create(category: Category): Promise<Category>
  read(id: string): Promise<Category | null>
  update(id: string, category: Category): Promise<Category>
  delete(id: string): Promise<boolean>
  list(): Promise<Category[]>
}

class CategoryServiceImpl implements CategoryService {
  private categories: Category[] = MOCK_CATEGORIES

  async create(category: Category): Promise<Category> {
    category.id = '' + this.categories.length + 1
    this.categories.push(category)
    return category
  }

  async read(id: string): Promise<Category | null> {
    return this.categories.find((cat) => cat.id === id) || null
  }

  async update(id: string, updatedCategory: Category): Promise<Category> {
    const index = this.categories.findIndex((cat) => cat.id === id)
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...updatedCategory }
      return this.categories[index]
    }
    throw new Error('Category not found')
  }

  async delete(id: string): Promise<boolean> {
    const index = this.categories.findIndex((cat) => cat.id === id)
    if (index !== -1) {
      this.categories.splice(index, 1)
      return true
    }
    return false
  }

  async list(): Promise<Category[]> {
    return this.categories
  }
}

export const categoryService = new CategoryServiceImpl()
