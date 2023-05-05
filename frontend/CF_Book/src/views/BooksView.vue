<template >
    <div class="home-view mt-4 container-fluid">
        <h4>Vườn Sách nhà LILY</h4>
        <div class="sections row">
            <template v-for="(book, index) in books" :key="index">

                <div v-if="book.category == 'book'" class="card  mx-2 my-2" style="width: 14.8rem;">
                    <!-- <router-link :to="'/books/' + book.slug"> -->
                    <img class="card-img-top img-fluid img-thumbnail" :src="path + book.image" alt="Card image cap">
                    <!-- </router-link> -->
                    <div class="card-body">
                        <h5 class="card-title">{{ book.name }}</h5>
                        <p class="card-text">Thể loại: {{ book.typeOf }}</p>
                    </div>
                </div>

            </template>

        </div>

    </div>
</template>
<script>
import axios from 'axios';
import staticPath from '../assets/staticPath/index';

export default {
    data() {
        return {
            books: []
        };
    },

    computed: {
        path() {
            return staticPath;
        }
    },

    created() {
        axios.get("http://localhost:3000/abc")
            .then(res => {
                this.books = res.data.books;
                console.log(this.books);
            })
            .catch(err => {
                console.log(err);
            });
    },
}
</script>
<style scoped></style>