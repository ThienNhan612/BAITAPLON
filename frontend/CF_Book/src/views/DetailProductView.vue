<template>
    <div class="detail-beverage-view d-flex align-items-center">
        <div class="container my-4 p-4">
            <div class="row">
                <div class="col-md-4 beverage-img img-fluid">
                    <img :src="path + beverage.image" class="image-responsive">
                </div>

                <div class="col-md-8 beverage-info-detail">
                    <div class="row" style="margin: 20px;">
                        <div class="col-md-12">
                            <h1 class="beverage-title text-capitalize">{{ beverage.name }}</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <h5 class="label label-primary font-italic price-beverage">Giá: {{ beverage.price }}</h5>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                            <h5>Mô tả: </h5> <br/>
                            <p class="description text-justify text-justify">
                                {{ beverage.description }}
                            </p>
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
            beverage: null
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        path() {
            return staticPath;
        }
    },
    created() {
        axios
            .get('http://localhost:3000/beverage/' + this.id)
            .then(res => {
                this.beverage = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },
}
</script>

<style scoped>
.beverage-img {
    flex: 1;
}

.image-responsive {
    width: 100%;
    margin: 20px;
}

.price-beverage {
    color: rgb(244, 237, 30);
}

.beverage-info-detail {
    margin-left: 24px;
}

.detail-beverage-view {
    min-height: 500px;
}

.container {
    background-color: #dd8cf3;
    display: flex;
}
</style>