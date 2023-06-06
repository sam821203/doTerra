<template>
  <div class="top-banner">
    <div>
      <p>Free 2-day shipping<span> on orders $50+</span></p>
    </div>
  </div>
  <header>
    <div class="header__wrap layout--main">
      <div class="header__left">
        <img src="./logo.svg" alt="">
      </div>
      <ul class="header__center">
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Our Story</a>
        </li>
        <li>
          <a href="">Discover</a>
        </li>
        <li>
          <input type="text" placeholder="Search...">
        </li>
      </ul>
      <div class="header__right">
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style>
  header {
    width: 100%;
    height: 104px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  }

  .header__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header__wrap ul {
    display: flex;
  }

  .top-banner {
    width: 100%;
    color: var(--gray-100);
    background-color: var(--primary-300);
  }

  .top-banner > div {
    height: 48px;
    text-align: center;
    line-height: 48px;
  }

  .top-banner span {
    font-weight: 700;
  }

  .header__left {
    width: 14%;
  }

  .header__center {
    width: 70%;
  }

  .header__right {
    width: 16%;
  }
</style>
