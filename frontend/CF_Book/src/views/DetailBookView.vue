<template lang="">
    <div class="detail-book-view">
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-md-4 book-img">
                    <img :src="path + book.name" class="image-responsive">
                </div>

                <div class="col-md-8 book-info-detail">
                    <div class="row" style="margin: 20px;">
                        <div class="col-md-12">
                            <h1 class="book-title text-capitalize">{{ book.image }}</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <p class="label label-primary font-italic">{{ book.category}}</p>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                            <p class="description text-justify">
                                {{ book.description }}
                            </p>
                        </div>
                    </div>

                    <div class="row add-to-cart">
                        <div class="col-md-4">
                            <h5>{{ book.ID}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import staticPath from '../assets/staticPath/index';
export default {
    data() {
        return {
            book: null
        }
    },
    computed: {
        slug() {
            return this.$route.params.slug;
        },
        path() {
            return staticPath;
        }
    },
    created() {
        console.log(this.$route.params._id)
        axios
            .get('http://localhost:3000/book/' + this._id)
            .then(res => {
                this.book = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },
}
</script>

<style scoped>
/* .detail-book-view {
    margin: 16px auto;
}
.container {
    background-color: #eee;
    display: flex;
}
.book-img {
    flex: 1;
}
.image-responsive {
    width: 100%;
    margin: 20px;
}
.monospaced {
    font-family: 'Ubuntu Mono', monospaced;
}
.add-to-cart .btn {
    color: #fff;
} */
</style>