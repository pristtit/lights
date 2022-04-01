<template>
	<article class='green' :class="{
		done: $route.params.id === 'green',
		mig: timer[0] < 4 && $route.params.id === 'green'
	}">
	</article>

	<article class='yellow' :class="{
		done: $route.params.id === 'yellow',
		mig: timer[0] < 4 && $route.params.id === 'yellow'
	}">
	</article>

	<article class='red' :class="{
		done: $route.params.id === 'red',
		mig: timer[0] < 4 && $route.params.id === 'red'
	}">
	</article>
	<h1 align='center'><strong>До смены сфетофора осталось: {{ this.timer[0] }}</strong></h1>
</template>


<script>
export default {
  data() {
    return {
      massiv: [['green', 6000], ['yellow', 6000], ['red', 6000]],
      timer: (!localStorage.timer ? 
  			[10, true] : 
  			JSON.parse(localStorage.getItem('timer'))
  		),
    }
  },
  mounted() {
  	this.$nextTick(function rt() {
  		const self = this;
  		let i = this.$route.params.id === 'red' ? 2 : this.$route.params.id === 'yellow' ? 1 : 0;
  		this.timer = (!localStorage.timer ? 
  			[this.massiv[i][1]/1000, true] : 
  			JSON.parse(localStorage.getItem('timer'))
  		);
  		let timee = setInterval(() => {
  			self.timer[0]--;
  			localStorage.setItem('timer', JSON.stringify(self.timer));
  		}, 1000);

  		setTimeout(function gogo() {

  			clearInterval(timee);

  			switch (i) {
			case 0:
				self.timer[1] = true;
				break;
			case 2:
				self.timer[1] = false;
				break;
			}

			self.timer[1] ? i++: i--;
  			self.$router.push('/'+self.massiv[i][0]);
  			self.timer[0] = self.massiv[i][1]/1000;
  			localStorage.setItem('timer', JSON.stringify(self.timer));

  			timee = setInterval(() => {
  				self.timer[0]--;
  				localStorage.setItem('timer', JSON.stringify(self.timer));
  			}, 1000);
  			
  			setTimeout(gogo, self.massiv[i][1]);
  		}, self.timer[0]);
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