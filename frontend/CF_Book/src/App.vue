<template >
    <HeaderView></HeaderView>

    <RouterView></RouterView>

    <!-- <router-view class="view" name="ViewBook"></router-view> -->

    <FooterView></FooterView>
</template>

<script>
import RouterView from './router';
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

export default {
    components: {
        HeaderView,
        FooterView
    }
}
</script>

<style scoped>

</style>