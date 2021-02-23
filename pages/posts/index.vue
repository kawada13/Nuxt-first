<template>
<div>
  <h1>記事一覧</h1>
  <ul>
    <li v-for="post in posts" :key=post.id>
        <p>{{ post.title }}</p>
        <p><nuxt-link :to="'/posts/' + post.id">詳細</nuxt-link></p>
    </li>
  </ul>
  <hr>
  <ul>
    <li v-for="user in users" :key=user.id>
        NAME:{{ user.name }}
    </li>
  </ul>

</div>
</template>

<script>

export default {
  async asyncData({$axios}) {
  const responsePost = await $axios.$get('https://jsonplaceholder.typicode.com/posts/')
  const responseUser = await $axios.$get('https://jsonplaceholder.typicode.com/users/')
  return { posts: responsePost, users:responseUser }
},
}
</script>