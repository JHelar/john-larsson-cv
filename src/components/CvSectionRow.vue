<template>
    <li class="cv-section-row">
        <h3 class="cv-section-row__title" v-if="title">{{ title }}</h3>
        <h4 class="cv-section-row__sub-title" v-if="subTitle">{{ subTitle }}</h4>
        <p class="cv-section-row__content" v-html="content"></p>
    </li>
</template>
<script>
export default {
    props: {
        title: String,
        subTitle: String,
        content: String
    }
}
</script>
<style lang="scss">
.cv-section-row {
    $row: &;

    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;

    &__title {
        line-height: 23px;
        margin: 0;

        + #{$row}__sub-title {
            line-height: 1;
            padding: calc(var(--content-padding) * .25) 0;
        }
        ~ #{$row}__content {
            line-height: 1.25;
        }
    }
    &__sub-title {
        margin: 0;
        font-style: italic;
        font-weight: 300;
    }
    &__content {
        margin: 0;
        line-height: 23px;
    }
}
</style>