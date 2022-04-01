<template>
  <h1>GG</h1>
</template>

<script>
  export default {
    data() {
      return {
        nam: 'dima',
        t: 500,
      }
    },
    mounted() {
      let po = tes.bind(this);
      let sa = setInterval(() => console.log(500), this.t);
      setTimeout(() => {clearInterval(sa); console.log(1)}, 3000);
      function tes() {
        alert(this.nam);
      }
    }
  }
</script>