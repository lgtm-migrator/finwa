import { ChartData, ChartDataSets } from 'chart.js'
// eslint-disable-next-line import/named
import { NuxtI18nInstance } from 'nuxt-i18n'
import { Category } from '~/model/category'
import { sum, toArray } from '~/utils/collections'
import { Month } from '~/model/month'
import { CategoryMapping, HasValue } from '~/model/types'
import { Expense } from '~/model/expense'

export function mapExpensesToCategories<T extends Expense>(expenses: T[], categories: Category[]): CategoryMapping<T>[] {
  return categories.map((category) => ({
    category,
    expenses: expenses.filter((expense) => expense.categoryId === category.id),
  }))
}

export function sumExpenses<T extends Expense>(categoryMappings: CategoryMapping<T>[]): (CategoryMapping<T> & HasValue)[] {
  return categoryMappings.map((mapping) => ({
    ...mapping,
    value: sum(mapping.expenses.map((expense) => expense.value)),
  }))
}

export function generateMonthChartData(months: Month[], categories: Category[], i18n: NuxtI18nInstance): ChartData {
  const monthValues = months.map((month) => sumExpenses(mapExpensesToCategories(toArray(month.expenses), categories)))
  const datasets: ChartDataSets[] = categories.map((category) => ({
    label: i18n.t(category.name) as string,
    borderColor: category.color,
    backgroundColor: `${category.color}10`,
    data: monthValues.flatMap((mappings) => mappings.filter((mapping) => mapping.category.id === category.id))?.map((value) => value.value),
  }))
  return {
    labels: months.map((month) => i18n.d(new Date(month.id), 'month')),
    datasets,
  }
}
