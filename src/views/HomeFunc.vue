<script>
	export default {
		mounted() {
		  	this.$nextTick(function startSlide() {

		  		function functimer() {
		  			this.stat[0]--;
		  			localStorage.setItem('stat', JSON.stringify(this.stat));
		  		}

		  		function mainFunc() {

		  			clearInterval(startTimer);

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
					startTimer = setInterval(timer, 1000);
		  			setTimeout(bindMainFunc, this.stat[0]);

		  		}


		  		let bindMainFunc = mainFunc.bind(this);
		  		let timer = functimer.bind(this);
		  		let item = this.$route.params.id === 'red' ? 2 : this.$route.params.id === 'yellow' ? 1 : 0;
		  		this.stat = (!localStorage.stat ? 
		  			[this.massiv[item][1]/1000, true] : 
		  			JSON.parse(localStorage.getItem('stat'))
		  		);

		  		let startTimer = setInterval(timer, 1000);
		  		setTimeout(bindMainFunc, this.stat[0]);
		  	})
		}
	}
</script>