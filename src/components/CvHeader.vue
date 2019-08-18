<template>
  <header class="cv-header">
    <h1 class="cv-header__title">{{ title }}</h1>
    <h2 class="cv-header__sub-title">{{ subTitle }}</h2>
    <div class="cv-header-contact">
      <div
        class="cv-header-contact__info"
        v-for="(info, infoIndex) in contactInfo"
        :key="infoIndex + 'info'"
      >
        <span class="cv-header-contact__info-icon" :class="info.icon" aria-hidden="true"></span>
        <a v-if="info.link" :href="info.link" class="cv-header-contact__info-text">{{ info.text }}</a>
        <p v-else class="cv-header-contact__info-text">{{ info.text }}</p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: String,
    subTitle: String,
    contactInfo: Array
  }
};
</script>

<style lang="scss">
  .cv-header {
    &__title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-blue);
      line-height: 46px;
      letter-spacing: 1.3px;

      margin: 0;
    }

    &__sub-title {
      font-size: 1.25rem;
      font-weight: 300;
      color: var(--color-blue);
      line-height: 1;
      letter-spacing: 1px;

      margin: 0;
    }

    &-contact {
      margin-top: calc(var(--content-padding) * 1.5);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: calc(var(--content-padding) * .5);
      
      &__info {
        flex: 1 1 50%;
        display: flex;
        flex-flow: row nowrap;
        align-content: flex-start;
        align-items: flex-start;

        &-icon {
          flex: 0 0 auto;

          color: var(--color-white);
          font-size: 1rem;

          background-color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;

          width: 25px;
          height: 25px;

          border-radius: 50%;
        }

        &-text {
          display: block;
          padding-left: calc(var(--content-padding) * .5);
          font-size: 1rem;
          margin: 0;

          @at-root a#{&} {
            text-decoration: none;
            color: var(--color-black);
            &:hover {
              color: var(--color-blue);
            }
          }
        }
      }
    }
  }
</style>