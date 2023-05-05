<template >
    <div class="products-view mt-4 container">
        <form method="POST" @submit.prevent="addBeverage">
            <div class="form-group row ">
                <label for="name-product" class="col-sm-2 col-form-label font-weight-bold">Tên sản phẩm</label>
                <div class="col-sm-10">
                    <input type="text" v-model="posts.name" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label for="image-product" class="col-sm-2 col-form-label font-weight-bold">Hình ảnh</label>
                
                    <input type="file" name="name-file" id="pathURL">
                
            </div>
            <div class="form-group row">
                <label for="discription-product" class="col-sm-2 col-form-label font-weight-bold">Mô tả</label>
                <div class="col-sm-10">
                    <textarea v-model="posts.description" cols="50" rows="10"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="price-product" class="col-sm-2 col-form-label font-weight-bold">Giá</label>
                <div class="col-sm-10">
                    <input type="text" v-model="posts.price" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="ID-product" class="col-sm-2 col-form-label font-weight-bold">ID</label>
                <div class="col-sm-10">
                    <input type="text" v-model="posts.ID" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <label for="typeOf-product" class="col-sm-2 col-form-label font-weight-bold">Loại</label>
                <div class="col-sm-10">
                    <input type="text" v-model="posts.typeOf" class="form-control" >
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" @click="getNameFileImg">Thêm sản phẩm</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: {
                ID: null,
                name: null,
                description: null,
                image: null,
                price: null,
                typeOf: null,
                
            }
        }
    },

    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },

        addBeverage() {
            axios.post("http://localhost:3000/beverage/store", this.posts)
            .then(res => {
                    if (res.data.status == 200) {
                        window.alert("Thêm sản phẩm mới thành công")
                        this.posts.ID = "";
                        this.posts.name = "";
                        this.posts.price = "";
                        this.posts.description = "";
                        this.posts.typeOf = "";
                        this.posts.image = "";
                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status == 500) {
                        window.alert("Thêm sản phẩm mới thất bại")
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
    }
}
</script>
<style scoped>
    
</style>