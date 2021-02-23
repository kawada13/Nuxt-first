<template>
  <div>
    <h1>記事個別ページ{{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.postId)
  return { post: data }
},
head(){
    return {
      title: this.post.title
    }
  },
}
</script>

<style>

</style>