export default {
	state: {
		shopList: [
			{
				id: 1,
				title: 'Nike Red',
				descr:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				img: require('../assets/img/1.png'),
				gallery: [
					{
						name: 'Nike boots First',
						img: require('../assets/img/1.png'),
					},
					{
						name: 'Nike boots Two',
						img: require('../assets/img/2.png'),
					},
					{
						name: 'Nike boots Three',
						img: require('../assets/img/3.png'),
					},
				],
			},
			{
				id: 2,
				title: 'Nike Default',
				descr:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				img: require('../assets/img/4.png'),
			},
			{
				id: 3,
				title: 'Nike Green',
				descr:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				img: require('../assets/img/7.png'),
			},
			{
				id: 4,
				title: 'Nike Street',
				descr:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				img: require('../assets/img/10.png'),
			},
		],
	},
	mutations: {},
	actions: {},
	getters: {
		getShopList(state) {
			return state.shopList;
		},
		getProduct: (state) => (id) => {
			return state.shopList.find((product) => product.id === id);
		},
	},
};
