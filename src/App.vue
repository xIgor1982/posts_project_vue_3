<template>
	<div class="app">
		<form class="form" @submit.prevent>
      <h4>Создание поста</h4>
			<input
				v-bind:value="title"
				@input="title = $event.target.value"
				class="input"
				type="text"
				placeholder="Название"
			/>
			<input
				v-bind:value="body"
				@input="body = $event.target.value"
				class="input"
				type="text"
				placeholder="Описание"
			/>
			<button class="btn" @click="createPost">Создать</button>
		</form>
		<div class="post" v-for="post in posts" :key="post.id">
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
	</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
	data() {
		return {
			posts: [
				{ id: uuidv4(), title: 'Javascript', body: 'Описание поста' },
				{ id: uuidv4(), title: 'Javascript 2', body: 'Описание поста 2' },
				{ id: uuidv4(), title: 'Javascript 3', body: 'Описание поста 3' },
			],
			title: '',
			body: '',
		};
	},
	methods: {
		createPost() {
			const newPost = {
				id: uuidv4(),
				title: this.title,
				body: this.body,
			};
			this.posts.push(newPost);
			this.title = '';
			this.body = '';
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

.btn {
	margin-top: 15px;
	align-self: flex-end;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 1px solid teal;
}

.form {
	display: flex;
	flex-direction: column;
}

.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
}

.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}
</style>
