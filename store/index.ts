export interface Category {
  name: string
  color: string
}

export interface Expense {
  categoryName: string
  value: number
}

export type Layout = 'compact' | 'default'

export interface State {
  categories: Category[]
  expenses: Expense[]
  layout: Layout
  useDarkTheme: boolean
}

export const state: () => State = () => ({
  categories: [
    {
      name: 'domain.category.food',
      color: 'green',
    },
    {
      name: 'domain.category.livelihood',
      color: 'red',
    },
    {
      name: 'domain.category.leisure',
      color: 'blue',
    },
  ],
  expenses: [],
  layout: 'default',
  useDarkTheme: true,
})

export const mutations = {
  addExpense(state: State, expense: Expense) {
    state.expenses.push(expense)
  },
  removeExpense(state: State, expense: Expense) {
    const index = state.expenses.indexOf(expense)
    state.expenses.splice(index, 1)
  },
  setLayout(state: State, layout: Layout) {
    state.layout = layout
  },
  toggleTheme(state: State) {
    state.useDarkTheme = !state.useDarkTheme
  },
}
