<template>
  <div id='app'>
    <header></header>
    <div class='content'>
      <div class='sidebar'>
        <p>Basic</p>
        <ul>
          <li><router-link to='/button'>Button 按钮</router-link></li>
          <li><router-link to='/'>Layout 布局</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
  html, body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  #app {
    header {
      height: 50px;
      width: 100%;
      background-color: #FF6666;
    }
    .content {
      min-height: 100%;
      display: flex;
      flex-direction: row;
    }
    .sidebar {
      width: 250px;
      height: 100%;
      overflow-y: auto;
      p {
        font-weight: bold;
        margin: 0;
        padding-left: 20px;
        line-height: 40px;
        font-size: 20px;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          line-height: 40px;
          padding-left: 40px;
          a {
            text-decoration: none;
            color: #000;
          }
        }
      }
      p:hover, li:hover {
        background-color: #FFCCCC;
      }
    }
    pre {
      overflow-x: auto;
    }
  }
</style>
