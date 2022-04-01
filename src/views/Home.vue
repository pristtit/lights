<template>
	<article class='green' :class="{
		done: $route.params.id === 'green',
		mig: stat[0] < 4 && $route.params.id === 'green'
	}">
	</article>

	<article class='yellow' :class="{
		done: $route.params.id === 'yellow',
		mig: stat[0] < 4 && $route.params.id === 'yellow'
	}">
	</article>

	<article class='red' :class="{
		done: $route.params.id === 'red',
		mig: stat[0] < 4 && $route.params.id === 'red'
	}">
	</article>
	<h1 align='center'><strong>До смены сфетофора осталось: {{ this.stat[0] }}</strong></h1>
</template>


<script>
	export default {
	  data() {
	    return {
	      massiv: [['green', 5000], ['yellow', 4000], ['red', 3000]],
	      stat: [10, true]
	    }
	  },
	  mounted() {
	   	this.$nextTick(function startSlide() {

	   		function functimer() {
	   			this.stat[0]--;
	   			localStorage.setItem('stat', JSON.stringify(this.stat));
	   		}

	   		function mainFunc() {

	   			switch (item) {
	 					case 0:
	 						this.stat[1] = true;
	 						break;
	 					case 2:
	 						this.stat[1] = false;
	 						break;
	 				}
	 				this.stat[1] ? item++: item--;
	 				this.$router.push('/' + this.massiv[item][0]);
	 				this.stat[0] = this.massiv[item][1] / 1000;

	 				localStorage.setItem('stat', JSON.stringify(this.stat));
	   			setTimeout(bindMainFunc, this.stat[0]*1000);
	   		}


	   		let bindMainFunc = mainFunc.bind(this);
	   		let timer = functimer.bind(this);
	   		let item = this.$route.params.id === 'red' ? 2 : this.$route.params.id === 'yellow' ? 1 : 0;
	   		this.stat = (!localStorage.stat ? 
	   			[this.massiv[item][1]/1000, true] : 
	   			JSON.parse(localStorage.getItem('stat'))
	   		);

	   		let startTimer = setInterval(timer, 1000);
	   		setTimeout(bindMainFunc, this.stat[0]*1000);
	   	})
	  }
	}
</script>

<style scoped>
	article { 
		width: 80vw;
		height: 20vh;
		margin: 0% auto;
	}

	.red { 
		opacity: 0.4;	
		background-color: red;
	}

	.yellow {
		opacity: 0.4;
		background-color: yellow;
	}

	.green {
		opacity: 0.4;
		margin-top: 3%;
		background-color: green;
	}

	.done {
		opacity: 1;
	}

	.mig {
		animation: migaet  1s infinite ease-in-out;
	}

	@keyframes migaet {
		0% {
			opacity: 1
		}
		50% {
			opacity: 0.4
		}
		100% {
			opaciry: 1
		}
	}
</style>