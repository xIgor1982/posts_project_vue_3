<template>
	<form class="form" @submit.prevent>
		<h4>Создание поста</h4>
		<my-input
			v-model="post.title"
			type="text"
			placeholder="Название"
		/>
		<my-input
			v-model="post.body"
			type="text"
			placeholder="Описание"
		/>
		<my-button class="btn" @click="createPost">Создать</my-button>
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
.form {
	display: flex;
	flex-direction: column;
}

.btn {
	align-self: flex-end;
	margin-top: 15px;
}
</style>
