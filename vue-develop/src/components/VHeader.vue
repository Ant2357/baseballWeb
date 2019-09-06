<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand>野球の記録を見るやつ</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/standings">順位表</b-nav-item>
        <b-nav-item to="/playerScore">個人成績</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
