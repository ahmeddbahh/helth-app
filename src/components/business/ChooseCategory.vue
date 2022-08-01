<template>
    <div class="choose-category">
        <div class="heading" :class="{'arabic-content':local=='ar'}">
                <h2 class="my-2">{{lang[local].head}}</h2>
                <p class="my-3">{{lang[local].txt}}</p>
        </div>
        <div class="categories p-2">
            <div class="row">
                <div class="col-md-6 col-xl-4" v-for="(category,index) in categories" :key="index">
                    <div class="category my-2 p-2">
                        <h3 v-if="local=='ar'" class="my-2">{{category.arTitle}}</h3>
                        <h3 v-else class="my-2">{{category.enTitle}}</h3>
                        <div class="icon-wrapper my-2">
                            <img :src="category.icon" alt="icon">
                        </div>
                        <router-link tag="button" :to="category.to" class="primary-btn-gradient px-5 py-2 my-2">{{lang[local].btnLabel}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import chooseCategoryLang from '../../mixins/business/chooseCategoryLang';
import categories from '../../mixins/business/categories';
export default {
    mixins:[chooseCategoryLang,categories],
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
        }
    },
    beforeCreate(){
        if(!(localStorage.getItem('accessToken')||localStorage.getItem('refreshToken'))){
            this.$router.push({name: "notFound"})
            return
        } 
    },
}
</script>
<style lang="scss" scoped>
.choose-category{
    .categories{
        max-height:50vh;
        overflow-y: auto;
        overflow-x:hidden;
        .category{
            text-align: center;
            box-shadow:$shadow-1;
            border-radius: 34px;
            padding:10px;
        }
    }
}
@media (max-width:768px){
    .choose-category{
        .categories{
            max-height:30vh;
        }
    }
    
}
</style>