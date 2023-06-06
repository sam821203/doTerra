<template>
  <div class="top-banner">
    <div>
      <p>Free 2-day shipping on orders $50+</p>
    </div>
  </div>
  <header class="layout--main">
    <div> 
      <img src="./logo.svg" alt="">
    </div>
    <ul>
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
    <div>

    </div>
  </header>  
</template>

<script>

</script>

<style>
  header {
    display: flex;
  }

  .top-banner {
    background-color: var(--primary-300);
    width: 100%;
    color: var(--gray-100);
  }

  .top-banner > div {
    text-align: center;
    height: 48px;
    line-height: 48px;
  }
</style>