<template>
    <div class="header-view">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

                <router-link to="/" class="navbar-brand">LILY COFFE BOOK</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item">
                            <router-link to="/beverage/tea" class="nav-link">TRÀ</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/beverage/coffee" class="nav-link">CÀ PHÊ</router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/book" class="nav-link">SÁCH</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/beverage/create" class="nav-link">Thêm sản phẩm </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/book/create" class="nav-link">Thêm sách</router-link>
                        </li>
                    </ul>

                </div>

            </nav>
        </header>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped></style>