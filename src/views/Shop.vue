<template>
	<div class="Shop p-6">
		<div class="shop-wrapper flex justify-center flex-wrap">
			<ShopItem
				v-for="product in shopList"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>
<script>
	import ShopItem from '@/components/ShopItem.vue';
	export default {
		components: { ShopItem },
		data() {
			return {
				shopList: null,
			};
		},
		created() {
			this.shopList = this.$store.getters.getShopList;
		},
	};
</script>
