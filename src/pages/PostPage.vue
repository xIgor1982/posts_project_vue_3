<template>
	<div>
		<h1>Страница с постами</h1>
		<my-input v-model="searchQuery" placeholder="Поиск..." v-focus />
		<div class="btns">
			<my-button @click="shwDialog"> Создать пост </my-button>
			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list
			:posts="sortedAndSearchedPosts"
			@remove="removePost"
			v-if="!isPostLoading"
		/>
		<div v-else>
			<img
				style="width: 80px; height: 80px"
				src="@/../public/img/spinner.gif"
				alt="Идет загрузка..."
			/>
		</div>
		<div v-intersection="loadMorePosts" class="observer"></div>
		<!-- <div ref="observer" class="observer"></div> -->
		<!-- <div class="wrapper">
			<div
				v-for="pageNum in totalPages"
				:key="pageNum"
				class="page"
				:class="{ 'current-page': page === pageNum ? true : false }"
				@click="changePage(pageNum)"
			>
				{{ pageNum }}
			</div>
		</div> -->
	</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios';

export default {
	components: { PostForm, PostList, MyButton },
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostLoading: false,
			selectedSort: '',
			searchQuery: '',
			page: 1,
			limit: 10,
			totalPages: 0,
			sortOptions: [
				{ value: 'title', name: 'По значению' },
				{ value: 'body', name: 'По содержанию' },
			],
		};
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter((p) => p.id !== post.id);
		},
		shwDialog() {
			this.dialogVisible = true;
		},
		// changePage(pageNum) {
		// 	this.page = pageNum;
		// },
		async fetchPosts() {
			try {
				this.isPostLoading = true;
				const response = await axios.get(
					'http://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				);
				this.posts = response.data;
			} catch (e) {
				alert('Ошибка соединения');
			} finally {
				this.isPostLoading = false;
			}
		},
		async loadMorePosts() {
			try {
				this.page += 1;
				const response = await axios.get(
					'http://jsonplaceholder.typicode.com/posts',
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers['x-total-count'] / this.limit
				);
				this.posts = [...this.posts, ...response.data];
			} catch (e) {
				alert('Ошибка соединения');
			}
		},
	},
	mounted() {
		this.fetchPosts();
		console.log(this.$refs.observer);
		// 	const options = {
		// 		rootMargin: '0px',
		// 		threshold: 1.0,
		// 	};
		// 	const callback = (entries, observer) => {
		// 		if (entries[0].isIntersecting && this.page < this.totalPages) {
		// 			this.loadMorePosts();
		// 		}
		// 	};
		// 	const observer = new IntersectionObserver(callback, options);
		// 	observer.observe(this.$refs.observer);
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((post1, post2) => {
				return post1[this.selectedSort]?.localeCompare(
					post2[this.selectedSort]
				);
			});
		},
		sortedAndSearchedPosts() {
			return this.sortedPosts.filter((post) =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		},
	},
	watch: {
		// page() {
		// 	this.fetchPosts();
		// },
	},
};
</script>

<style scoped>
.btns {
	margin: 15px 0;
	display: flex;
	justify-content: space-between;
}
.wrapper {
	display: flex;
	margin-top: 15px;
}

.page {
	border: 1px solid black;
	padding: 10px;
	cursor: pointer;
}
.current-page {
	border: 2px solid teal;
}

.observer {
	height: 5px;
	/* background: green; */
}
</style>
