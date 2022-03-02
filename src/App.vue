<template>
	<div class="app">
		<post-form @create="createPost" />
		<post-list :posts="posts" @remove="removePost" />
	</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
export default {
	components: { PostForm, PostList },
	data() {
		return {
			posts: [
				{ id: uuidv4(), title: 'Javascript', body: 'Описание поста' },
				{ id: uuidv4(), title: 'Javascript 2', body: 'Описание поста 2' },
				{ id: uuidv4(), title: 'Javascript 3', body: 'Описание поста 3' },
				{ id: uuidv4(), title: 'Javascript 4', body: 'Описание поста 4' },
			],
		};
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
		},
		removePost(post) {
			this.posts = this.posts.filter((p) => p.id !== post.id);
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
</style>
