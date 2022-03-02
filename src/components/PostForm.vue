<template>
	<form class="form" @submit.prevent>
		<h4>Создание поста</h4>
		<input
			v-model="post.title"
			class="input"
			type="text"
			placeholder="Название"
		/>
		<input
			v-model="post.body"
			class="input"
			type="text"
			placeholder="Описание"
		/>
		<button class="btn" @click="createPost">Создать</button>
	</form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		};
	},
	methods: {
		createPost() {
			this.id = uuidv4();
			this.$emit('create', this.post);
			this.post = {
				title: '',
				body: '',
			};
		},
	},
};
</script>

<style scoped>
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

.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px 15px;
	margin-top: 15px;
}
</style>
