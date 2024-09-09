<template>
	<div class="w-full h-full">
		<!-- sidebar -->
		<SidebarMain></SidebarMain>

		<!-- main container -->
		<div class="ml-64 pt-14 h-screen">
			<div class="flex flex-col h-full overflow-y-auto bg-white">
				<!-- content -->
				<div class="px-6 py-4 flex-1">
					<slot />
				</div>

				<!-- footer -->
				<div v-if="true" class="flex justify-end py-2 px-3 w-full border-t text-slate-300">
					<span class="text-xs">&copy; noovproject 2024</span>
				</div>
			</div>

		</div>
	</div>
</template>