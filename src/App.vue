<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<div class="btns">
			<my-button @click="shwDialog"> Создать пост </my-button>
			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />
		<div v-else>
			<img
				style="width: 80px; height: 80px"
				src="../public/img/spinner.gif"
				alt="Идет загрузка..."
			/>
		</div>
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
		async fetchPosts() {
			try {
				this.isPostLoading = true;
				const response = await axios.get(
					'http://jsonplaceholder.typicode.com/posts?_limit=10'
				);
				this.posts = response.data;
			} catch (e) {
				alert('Ошибка соединения');
			} finally {
				this.isPostLoading = false;
			}
		},
	},
	mounted() {
		this.fetchPosts();
	},
	watch: {
		selectedSort(newValue) {
			this.posts.sort((post1, post2) => {
				return post1[newValue]?.localeCompare(
					post2[newValue]
				);
			});
		},
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}

.btns {
	margin: 15px 0;
	display: flex;
	justify-content: space-between;
}
</style>
