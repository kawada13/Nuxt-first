<template>
<div>
  <h1>記事一覧</h1>
  <ul>
    <li v-for="post in posts" :key=post.id>
        {{ post.title }}
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
import axios from 'axios';

export default {
  async asyncData() {
  const responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  const responseUser = await axios.get('https://jsonplaceholder.typicode.com/users/')
  console.log(responseUser)
  return { posts: responsePost.data, users:responseUser.data }
},
  // data(){
  //   return {
  //     posts: []
  //   }
  // },
  // mounted(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //         .then(response => {
  //           console.log(response);
  //           this.posts = response.data
  //           });
  // }
}
</script>