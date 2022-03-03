<template>
	<div class="navbar">
		<div @click="$router.push('/')" class="main">Vue 3</div>
		<div class="btns">
			<my-button @click="$router.push('/posts')">Посты</my-button>
			<my-button @click="$router.push('/about')" style="margin-left: 15px"
				>О сайте</my-button
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}
.btns {
	margin-left: auto;
}
.main {
	cursor: pointer;
}
</style>
