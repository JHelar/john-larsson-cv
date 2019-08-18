<template>
    <section class="cv-section">
        <header class="cv-section-header">
            <span class="cv-section-header__icon" :class="icon" aria-hidden="true"></span>
            <h2 class="cv-section-header__title">{{ title }}</h2>
        </header>
        <main class="cv-section-content">
            <ul class="cv-section-rows">
                <cv-section-row v-for="(row, rowIndex) in rows" :key="rowIndex + title" v-bind="{...row}"/>
            </ul> 
        </main>
    </section>
</template>

<script>
import CvSectionRow from './CvSectionRow';

export default {
    props: {
        icon: String,
        title: String,
        rows: Array
    },
    components: {
        CvSectionRow
    }
}
</script>

<style lang="scss">
.cv-section {
    display: flex;
    flex-flow: column;

    $iconWidth: 35px;

    &-header {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        align-content: flex-start;
        color: var(--color-blue);

        &__title {
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 1.25px;
            line-height: 1.75rem;
            margin: 0;
        }

        &__icon {
            flex: 0 0 auto;
            width: $iconWidth;
            height: $iconWidth;

            font-size: 1.25rem;
            border-radius: 50%;

            color: var(--color-white);
            background-color: var(--color-blue);

            display: flex;
            align-items: center;
            justify-content: center;

            line-height: 1;

            margin-right: calc(var(--content-padding) * 0.5);
        }
    }

    &-content {
        
    }
    &-rows {
        position: relative;
        padding: 0 0 var(--content-padding) 0;
        margin: 0 0 0 ($iconWidth / 2) - 0.5px;
        display: flex;
        flex-flow: column nowrap;
        list-style: none;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            border-left: 1px solid var(--color-dark-gray);
        }
    }

    &-row {
        position: relative;
        padding-left: ($iconWidth / 2) - 0.5px;
        margin-top: calc(var(--content-padding) * 0.5);

        &::before {
            content: '';
            color: var(--color-blue);
            position: absolute;
            left: .5px;
            top: 8px;
            transform: translateX(-50%);
            display: block;
            width: .5rem;
            height: .5rem;
            background: var(--color-blue);
            border-radius: 50%;

            @media print {
                left: 1px;
            }
        }
    }
}
</style>