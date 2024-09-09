<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from '@radix-icons/vue'

const sidebarItem = [
	{
		title: 'Home',
		url: '/',
		icon: '',
	},
	{
		title: 'Datatable',
		url: '/datatable',
		icon: '',
	},
	{
		title: 'Profile',
		url: '',
		icon: '',
	},
]
</script>

<template>
	<div class="fixed top-0 left-0 right-0 h-14 shadow z-10"></div>

	<div class="fixed top-0 bottom-0 left-0 w-64 bg-white p-4 shadow-xl z-20">
		<Button variant="ghost" size="icon" class="absolute top-2.5 -right-12">
			<ChevronLeftIcon class="w-4 h-4" />
		</Button>

		<div class="w-full text-xl text-center">
			<h1>Application Name</h1>
		</div>

		<div class="flex flex-col gap-2 mt-10">
			<Button variant="ghost" class="text-left" v-for="item in sidebarItem" @click="navigateTo(item.url)">
				{{ item.title }}
			</Button>
		</div>
	</div>

</template>