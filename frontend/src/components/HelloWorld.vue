<template>
  <div class="hello">
      <p>{{ test }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
      return {
        test: '',
      }
  },
  methods: {
    setText(string) {
      this.test = string
    },
    getIt() {
        const apiUrl = 'http://127.0.0.1:1337/test'
        let self = this
      axios.get(apiUrl)
        .then(function (res) {
            const testmsg = String(res.data[0].test)
            //console.log(testmsg)
            self.setText(testmsg)
      })
    .catch(function (error) {
        return error
    });
    }
  },
  mounted() {
    this.getIt()
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
