<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<my-button @click="shwDialog" style="margin: 15px 0;">Создать пост</my-button>
		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>
		<post-list :posts="posts" @remove="removePost" />
	</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from './components/UI/MyButton.vue';
export default {
	components: { PostForm, PostList, MyButton },
	data() {
		return {
			posts: [
				{ id: uuidv4(), title: 'Javascript', body: 'Описание поста' },
				{ id: uuidv4(), title: 'Javascript 2', body: 'Описание поста 2' },
				{ id: uuidv4(), title: 'Javascript 3', body: 'Описание поста 3' },
				{ id: uuidv4(), title: 'Javascript 4', body: 'Описание поста 4' },
			],
			dialogVisible: false,
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
		}
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
</style>
