<template>
	<div class="product p-6 flex justify-between">
		<div class="text-center">
			<h1 class="font-extrabold p-2">{{ product.title }}</h1>
			<p class="max-w-lg">{{ product.descr + product.descr }}</p>
		</div>
		<div>
			<img :src="product.img" :alt="product.title" />
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				product: null,
			};
		},
		created() {
			let id = this.$route.params.id;
			this.product = this.$store.getters.getProduct(Number(id));
		},
	};
</script>
