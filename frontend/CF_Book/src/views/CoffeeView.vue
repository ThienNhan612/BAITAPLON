<template >
    <div class="coffee-view mt-4 container-fluid">
        <h4>Cà Phê cùng LILY</h4>
        <div class="sections row">
            <template v-for="(beverage, index) in beverages" :key="index">

                <div v-if="beverage.typeOf == 'coffee'" class="card  mx-2 my-2" style="width: 14.8rem;">
                    <router-link :to="'/beverage/' + beverage._id">
                        <img class="card-img-top img-fluid" :src="path + beverage.image" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ beverage.name }}</h5>
                        <p class="card-text">{{ beverage.price }}</p>
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
            beverages: []
        };
    },

    computed: {
        path() {
            return staticPath;
        }
    },

    created() {
        axios.get("http://localhost:3000/beverage")
            .then(res => {
                this.beverages = res.data.beverages;
            })
            .catch(err => {
                console.log(err);
            });
    },
}
</script>
<style scoped></style>