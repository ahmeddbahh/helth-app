<template>
    <div class="top-bar d-flex justify-content-between" :class="{'ar':local=='ar'}">
        <div class="logo-navigator flex-grow-1 p-2">
            <h2 class="text-white">Logo</h2>
        </div>
        <div class="profile-navigator flex-grow-1 p-2">
            <div class="h-100 d-flex justify-content-center align-items-end">
                <div >Welcom Back ! <strong>Mahmoud</strong></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
        }
    },
}
</script>
<style lang="scss" scoped>
.top-bar{
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: #F5F6FA;
    .logo-navigator{
        
        background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-2,$gradient-color-1);
        border-radius: 0px 34px 0px 0px;
    }
}
.ar{
    direction: rtl;
    .logo-navigator{
        border-radius: 34px 0px 0px 0px;
        background-image: linear-gradient(160deg,$gradient-color-1,$gradient-color-2,$gradient-color-2);
    }
}
</style>