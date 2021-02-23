<template>
  <div>
    <section class="container">
      <div>
        <h3>{{user.id}}</h3>
        <img :src="user.profile_image_url" width="120">
        <p>{{user.description || 'NO descripition'}}</p>
        <p>
          <nuxt-link to="/">
           トップへ戻る
          </nuxt-link>
        </p>
        <h3>{{user.id}}さんの投稿一覧</h3>
        <ul>
          <li v-for="item in items" :key="item.id">
            <h4>
              <span>{{item.title}}</span>
            </h4>
            <div>
              {{item.body.slice(0, 130)}}・・・
            </div>
            <p><a :href="item.url" target="_blank">{{item.url}}</a></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  async asyncData({ route, app }) {
    const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.userId}`)
    const items = await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.userId}`)
    return { user, items }
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  padding: 16px;
}

h3 {
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #ee55ee;
}

p {
  margin: 8px 0
}
</style>