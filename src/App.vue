<template>
	<div class="max-w-5xl container m-auto">
		<header class="shadow">
			<nav class="navbar text-white bg-gray-700 p-6 flex justify-between">
				<div class="logo">VUE</div>
				<ul class="navbar__list flex">
					<li
						class="navbar__item mr-3"
						v-for="link in links"
						:key="link.title"
					>
						<router-link :to="link.url">{{
							link.title
						}}</router-link>
					</li>
				</ul>
			</nav>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				links: [
					{ title: 'Home', url: '/' },
					{ title: 'Shop', url: '/shop' },
				],
			};
		},
	};
</script>
<style scoped>
	.router-link-exact-active {
		border-bottom: 1px solid #fff;
	}
</style>
