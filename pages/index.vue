<template>
  <div>
    <section class="container">
      <div>
        <h3>Nuxt.jsのタグがつけられた投稿一覧</h3>
        <ul>
          <li v-for="item in items" :key="item.id">
            <h4>
              <span>{{item.title}}</span>
              <small>
                <span>by </span>
                <nuxt-link :to="`/users/${item.user.id}`">
                {{item.user.id}}
                </nuxt-link>
              </small>
            </h4>
            <div>{{item.body.slice(0, 130)}}・・・・・</div>
            <p><a :href='item.url'>{{item.url}}</a></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  

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