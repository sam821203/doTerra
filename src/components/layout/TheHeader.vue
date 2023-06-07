<template>
  <div class="top-banner">
    <div>
      <p>Free 2-day shipping<span> on orders $50+</span></p>
    </div>
  </div>
  <header>
    <div class="header__wrap layout--main">
      <div class="header__left">
        <img src="../../images/logo.svg" alt="">
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
          <base-button mode="btn-search">
            <img src="../../images/search.svg" alt="">
          </base-button>
        </li>
      </ul>
      <div class="header__right">
        <div>
          <a href="">
            <img src="../../images/help.svg" alt="">
          </a>
        </div>
        <div>
          <a href="">
            <img src="../../images/account.svg" alt="">
          </a>
        </div>
        <div>
          <a href="">
            <img src="../../images/like.svg" alt="">
          </a>
        </div>
        <div>
          <a href="">
            <img src="../../images/cart.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style scoped>
  header {
    width: 100%;
    height: 104px;
    box-shadow: var(--box-shadow-1);
  }

  p {
    color: var(--gray-100);
    line-height: unset;
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
    width: 13%;
  }

  .header__center {
    display: flex;
    align-items: center;
    width: 68%;
  }

  .header__center li {
    margin-right: 32px;
    word-break: keep-all;
  }

  .header__center li:last-child {
    position: relative;
    margin-right: 0;
    width: 68%;
  }

  .header__center li:last-child input {
    padding-left: 16px;
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 50px;
    box-shadow: var(--box-shadow-1);
  }

  .header__center li:last-child input:focus {
    border: none;
  }

  .header__center li:last-child input::placeholder {
    color: var(--gray-400);
  }

  .header__right {
    display: flex;
    justify-content: end;
    width: 19%;
  }
</style>
