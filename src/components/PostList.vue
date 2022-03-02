<template>
	<div v-if="posts.length > 0">
		<h3>Список постов</h3>
		<post-item
			v-for="post in posts"
			:key="post.id"
			:post="post"
			@remove="$emit('remove', post)"
		/>
	</div>
	<div v-else style="color: red; text-align: center;">
		<h2>Список постов пуст!</h2>
	</div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
	components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped></style>
