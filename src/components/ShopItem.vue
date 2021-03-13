<template>
	<div class="shop__item shadow-2xl max-w-xs p-6 m-5">
		<router-link :to="/shop/ + product.id" class="text-center font-bold"
			>{{ product.title }}
			<img :src="product.img" :alt="product.title" />
			<p class="font-medium">{{ product.descr }}</p>
		</router-link>
	</div>
</template>
<script>
	export default {
		props: {
			product: {
				type: Object,
				required: true,
			},
		},
	};
</script>
