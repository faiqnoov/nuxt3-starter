<script setup lang="ts">
import { h } from 'vue'
import { ArrowUpDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import DataTable from '@/components/DataTable.vue'
import DropdownAction from '@/components/DataTableDropDown.vue'

const columns = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected(),
      'onUpdate:checked': (value: boolean) => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => h(Checkbox, {
      'checked': row.getIsSelected(),
      'onUpdate:checked': (value: boolean) => row.toggleSelected(!!value),
      'ariaLabel': 'Select row',
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Title', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('title')),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Description', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: '' }, row.getValue('description')),
  },
  {
    accessorKey: 'author',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Author', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: '' }, row.getValue('author')),
  },
  {
    accessorKey: 'published_year',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Year', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: '' }, row.getValue('published_year')),
  },
]

const mappedData = ref([])

const { data, status, refresh } = await useFetch('http://localhost:1337/api/books/')

watch(data, (value) => {
  mappedData.value = value.data.map((d: any) => {
    return {
      id: d.id,
      ...d.attributes,
    }
  })
})

onMounted(async () => {
  refresh()
})
</script>

<template>
  <div>
    <DataTable :columns="columns" :data="mappedData" />
  </div>
</template>