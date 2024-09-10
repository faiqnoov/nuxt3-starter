<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-icons/vue'

const isOpen = useState('is-sidebar-open', () => true)

const toggleSidebar = () => isOpen.value = !isOpen.value

watch(isOpen, (val) => console.log('isOpen:', val))

const sidebarItem = {
	top: [
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
	],
	bottom: [
		{
			title: 'Profile',
			url: '',
			icon: '',
		},
	],
}
</script>

<template>
	<div class="fixed top-0 left-0 right-0 h-14 shadow z-10"></div>

	<div 
		class="fixed flex flex-col top-0 left-0 h-screen w-64 bg-white p-4 shadow-xl z-20 transition-transform"
		:class="!isOpen ? '-translate-x-64' : ''"
	>
		<!-- sidebar toggle btn -->
		<Button variant="ghost" size="icon" class="absolute top-2.5 -right-12" @click="toggleSidebar">
			<ChevronLeftIcon v-if="isOpen" class="w-4 h-4" />
			<ChevronRightIcon v-else class="w-4 h-4" />
		</Button>

		<div class="w-full text-xl text-center">
			<h1>Empix Boolu</h1>
		</div>

		<div class="flex flex-col flex-1 gap-2 mt-10">
			<div class="flex flex-col flex-1">
				<Button 
					variant="ghost" 
					class="text-left" 
					v-for="item in sidebarItem.top" 
					@click="navigateTo(item.url)"
				>
					{{ item.title }}
				</Button>
			</div>
			<div class="flex flex-col">
				<Button 
					variant="ghost" 
					class="text-left" 
					v-for="item in sidebarItem.bottom" 
					@click="navigateTo(item.url)"
				>
					{{ item.title }}
				</Button>
			</div>
		</div>
	</div>

</template>