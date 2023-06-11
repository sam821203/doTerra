<template>
  <section class="recommend">
    <div class="recommend__block">
      <base-card class="recommend__left" mode="shadow">
        <div class="overlay">
          <h2>Dr. Hill<span>Recommends</span></h2>
          <p>Adding a drop of Cinnamon to hot drinks, cakes and pastries provides a delightfully spicy flavour...</p>
          <a href="">
            <h6>Read more</h6>
          </a>
        </div>
        <div class="buttons">
          <button>+</button>
          <base-button mode="btn-round">Add to Cart</base-button>
        </div>
      </base-card>
      <base-card class="recommend__right" mode="shadow">
      </base-card>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  margin-bottom: 112px;
  color: var(--gray-100);
}

h2, p {
  margin-bottom: 12px;
  color: var(--gray-100);
}

h2 > span {
  font-weight: 400;
  margin-left: 8px;
}

h6 {
  color: rgba(255, 255, 255, 0.75);
}

button {
  background-color: var(--primary-300);
}

.overlay {
  position: absolute;
  bottom: 0;
  padding: 24px 120px 22px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0 0 6px 6px;
}

.recommend__block {
  display: flex;
  justify-content: space-between;
}

.recommend__block > div {
  width: calc(50% - 10px);
}

.recommend__left {
  position: relative;
  height: 700px;
  background-position: center;
  background-size: auto;
}

.buttons > button:first-child {
  position: absolute;
  top: 40%;
  left: 60%;
  width: 30px;
  height: 30px;
  font-size: 24px;
  color: var(--gray-100);
  border-radius: var(--border-radius-circle);
  line-height: 80%;
}

.buttons > button:last-child {
  position: absolute;
  top: 42%;
  left: 66%;
}
</style>
