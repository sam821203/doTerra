<template>
  <section class="promo layout--main">
    <div class="promo__left">
      <div class="promo__left--decor"></div>
      <div class="promo__left--info">
        <div>
          <h2 class="m-bottom--sm">Scents of the Season</h2>
          <p class="m-bottom--md">For life's fast-paced moments, from a busy work day to festive activities, try using Wild Orange during periods of low energy for a quick boost.</p>
          <button class="btn-cta">Add to Cart</button>
        </div>
      </div>
      <div class="promo__left--product product">
        <div class="product__info">
          <div class="product__text">
            <div class="product__text--capacity">10ml</div>
            <h4 class="product__text--name">lemongrass</h4>
            <div class="product__text--desc">ingredient・pepper・ipsum</div>
          </div>
          <div class="product__price">
            <div class="product__price--point"><span>11,00</span>PV</div>
            <div class="product__price--discount">NT$<span>1,980</span><span>2,200</span></div>
          </div>
        </div>
        <div class="product__img">
          <img src="" alt="">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div class="promo__right"></div>
  </section>
</template>

<style  lang="scss" scoped>
.promo {
  display: flex;
  justify-content: space-between;
}

.promo__left {
  display: flex;
  width: calc(68% - 10px);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-1);

  .promo__left--decor {
    width: 4%;
    background-color: var(--primary-100);
    border-radius: 6px 0 0 6px;
  }

  .promo__left--info {
    padding: 22px;
    width: 52%;

    > div {
      border-right: 1px solid var(--gray-300);
    }

    h2 {
      font-size: var(--header-1);
    }
  }

  .promo__left--product {
    width: 44%
  }

  .product__info {
    display: flex;
    justify-content: space-between;
    padding: 0 12px 0 4px;
    height: 88%;
    flex-direction: column;
  }

  .product__text--capacity {
    margin-bottom: 12px;
    width: 46px;
    height: 22px;
    font-size: 12px;
    text-align: center;
    color: var(--primary-300);
    background-color: var(--primary-100);
    border-radius: 0 0 2px 2px;
    line-height: 23px;
  }

  .product__text--name {
    margin-bottom: 8px;
    font-size: var(--header-2);
  }

  .product__text--desc {
    font-size: 12px;
    color: var(--secondary-100);
  }

  .product__price {
    font-size: 14px;

    .product__price--point {
      padding: 2.6% 2.6% 2%;
      width: fit-content;
      color: var(--primary-300);
      background-color: var(--gray-100);
      border: 1px solid var(--primary-100);
      border-radius: var(--border-radius-sm);

      span {
        font-weight: 700;
        margin-right: 2px;
      }
    }

    .product__price--discount {
      margin-top: 12px;
      color: var(--red-500);

      span {
        font-size: 20px;
        letter-spacing: 0.6px;

        &:first-child {
          font-weight: 700;
          margin-left: 4px;
          margin-right: 8px;
        }

        &:last-child {
          font-size: 12px;
          color: var(--secondary-200);
          text-decoration-line: line-through;
        }
      }
    }
  }
}

.promo__right {
  display: flex;
  width: calc(32% - 10px);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-1);
}

</style>
