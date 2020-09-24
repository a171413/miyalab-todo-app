<!--<template>-->
<!--  <section class="container">-->
<!--    <h1>Todoリスト</h1>-->
<!--    <div class="addArea">-->
<!--      <input id="addName" type="text" name="addName" placeholder="タスクを入力してください">-->
<!--      <button id="addButton" class="button button&#45;&#45;green">-->
<!--        追加-->
<!--      </button>-->
<!--    </div>-->
<!--    <div class="Filter">-->
<!--      <button class="button button&#45;&#45;gray is-active">-->
<!--        全て-->
<!--      </button>-->
<!--      <button class="button button&#45;&#45;gray">-->
<!--        作業前-->
<!--      </button>-->
<!--      <button class="button button&#45;&#45;gray">-->
<!--        作業中-->
<!--      </button>-->
<!--      <button class="button button&#45;&#45;gray">-->
<!--        完了-->
<!--      </button>-->
<!--    </div>-->
<!--    <table class="Lists">-->
<!--      <thread>-->
<!--        <tr>-->
<!--          <th>タスク</th>-->
<!--          <th>登録日時</th>-->
<!--          <th>状態</th>-->
<!--          <th />-->
<!--        </tr>-->
<!--      </thread>-->
<!--      <tbody>-->
<!--        &lt;!&ndash;v-forで繰り返し&ndash;&gt;-->
<!--        <tr v-for="(item, index) in todos" :key="_id">-->
<!--          <td>-->
<!--            {{ item.content }}-->
<!--          </td>-->
<!--          <td>-->
<!--            {{ item.created }}-->
<!--          </td>-->
<!--          <td>-->
<!--            <button class="button">-->
<!--              {{ item.state }}-->
<!--            </button>-->
<!--          </td>-->
<!--          <td>-->
<!--            <button class="button button&#45;&#45;delete">-->
<!--              削除-->
<!--            </button>-->
<!--          </td>-->
<!--        </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </section>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->

<!--<style>-->
<!--  .container {-->
<!--    margin: 0 auto;-->
<!--    min-height: 100vh;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--    text-align: center;-->
<!--  }-->

<!--  .addArea {-->
<!--    margin: 0 auto;-->
<!--    min-height: 100vh;-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--    text-align: center;-->
<!--  }-->
<!--</style>-->
