<template>
	<div>
		<h1 @click="$emit('goto', item)">{{ item }}</h1>
	</div>
</template>

<script>
export default {
  props: ['item'],
 }
</script>