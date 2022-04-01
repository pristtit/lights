<template>
	<div>
		<h1>pii</h1>
		<test 
			v-for='item in massiv'
			v-bind:item='item'
			@goto='go'
		/>
	</div>
</template>

<script>
import test from '@/components/test'
export default {
  props: ['massiv'],
  components: {
    test
  },
  methods: {
  	go(item) {
  		this.$router.push({ name: 'Home' });
  	}
  }
 }
</script>