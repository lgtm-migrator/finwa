import { Layout } from '~/model/layout'
import { builtinCategories, Category, uncategorized } from '~/model/category'
import { Expense } from '~/model/expense'
import { mapExpensesToCategories } from '~/model'
import { Month } from '~/model/month'
import { findById } from '~/utils/collections'

export interface State {
  categories: Category[]
  months: Month[]
  layout: Layout
  useDarkTheme: boolean
}

export const state: () => State = () => ({
  categories: builtinCategories,
  months: [] as Month[],
  layout: 'default',
  useDarkTheme: false,
})

export const getters = {
  monthById: (state: State) => (id: string) => {
    return findById(state.months, id)
  },
}

export const mutations = {
  addCategory(state: State, category: Category) {
    state.categories.push(category)
  },
  addExpenseToMonth(state: State, { month, expense }: { month: Month; expense: Expense }) {
    findById(state.months, month.id)?.expenses?.push(expense)
  },
  addMonth(state: State, month: Month) {
    state.months.push(month)
  },
  resetData(state: State) {
    state.categories = builtinCategories
    state.months = []
  },
  removeCategory(state: State, category: Category) {
    if (category.isBuiltin) {
      return
    }
    const index = state.categories.indexOf(category)
    state.categories.splice(index, 1)
    const expenses = state.months.flatMap((month) => month.expenses)
    mapExpensesToCategories(expenses, [category])[0].expenses.forEach((expense) => {
      expense.categoryId = uncategorized.id
    })
  },
  removeExpenseFromMonth(state: State, { month, expense }: { month: Month; expense: Expense }) {
    const expenses = findById(state.months, month.id)?.expenses
    if (expenses === undefined) {
      return
    }
    const index = expenses.indexOf(expense)
    expenses.splice(index, 1)
  },
  setLayout(state: State, layout: Layout) {
    state.layout = layout
  },
  toggleTheme(state: State) {
    state.useDarkTheme = !state.useDarkTheme
  },
}