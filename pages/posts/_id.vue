<template>
  <div>
    <h1>記事個別ページ{{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body}}</p>
    <p>{{title}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(){
    return{
      title: '個別ページ'
    }
  },
  head(){
    return {
      title: this.title
    }
  },
  data(){
    return {
      post: {},
    }
  },
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
          .then(response => this.post = response.data);
  }
}
</script>

<style>

</style>