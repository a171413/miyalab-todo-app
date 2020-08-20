<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input id="addName" type="text" name="addName" placeholder="タスクを入力してください">
      <button id="addButton" class="button button--green">
        追加
      </button>
    </div>
    <div class="Filter">
      <button class="button button--gray is-active">
        全て
      </button>
      <button class="button button--gray">
        作業前
      </button>
      <button class="button button--gray">
        作業中
      </button>
      <button class="button button--gray">
        完了
      </button>
    </div>
    <table class="Lists">
      <thread>
        <tr>
          <th>タスク</th>
          <th>登録日時</th>
          <th>状態</th>
          <th />
        </tr>
      </thread>
      <tbody>
        <!--v-forで繰り返し-->
        <tr v-for="(item, index) in todos" :key="index">
          <td>
            {{ item.content }}
          </td>
          <td>
            {{ item.created }}
          </td>
          <td>
            <button class="button">
              {{ item.state }}
            </button>
          </td>
          <td>
            <button class="button button--delete">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.addArea {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/*.title {*/
/*  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,*/
/*    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  display: block;*/
/*  font-weight: 300;*/
/*  font-size: 100px;*/
/*  color: #35495e;*/
/*  letter-spacing: 1px;*/
/*}*/

/*.subtitle {*/
/*  font-weight: 300;*/
/*  font-size: 42px;*/
/*  color: #526488;*/
/*  word-spacing: 5px;*/
/*  padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*  padding-top: 15px;*/
/*}*/
</style>
