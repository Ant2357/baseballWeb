<template>
  <nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand">野球の記録を見るやつ</span>
    <ul class="d-block navbar-nav mr-auto list-inline">
      <li class="list-inline-item nav-item">
        <router-link to="/standings" class="nav-link">順位表</router-link>
      </li>
      <li class="list-inline-item nav-item">
        <router-link to="/playerScore" class="nav-link">個人成績</router-link>
      </li>
    </ul>
  </nav>
</template>
