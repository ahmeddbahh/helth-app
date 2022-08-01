<template>
  <div class="is-you">
        <div class="content-wrapper" :class="{'arabic-content':local=='ar'}">
            <div class="back-icon d-flex justify-content-center align-items-center mb-3">
              <router-link :to="{name:'findAccount'}">
                <i :class="lang[local].icon" style="fontSize: 2rem"></i>
              </router-link>
              </div>
            <h2>{{lang[local].title}}</h2>
            <h5 class="my-2">{{lang[local].txt}}</h5>
            <div class="account-info d-flex justify-content-center">
                <div class="text-center">
                    <Avatar v-if="user.image" :image="`${backendMediaUrl}${user.image}`" shape="circle" size="xlarge"/>
                    <Avatar 
                    v-else 
                    :label="`${user.firstName[0].toUpperCase()}${user.secondName[0].toUpperCase()}`" 
                    shape="circle"
                    size="xlarge"
                    class="avatar-text"
                    />
                    <h5 class="my-2">{{user.firstName}} {{user.secondName}}</h5>
                    <small class="d-block my-2">{{encrypteEmail(user.email)}}</small>
                    <small class="d-block my-2">{{encryptePhone(user.nationalNumber)}}</small>
                </div>
            </div>
            <div class="create-btn d-flex justify-content-end">
                <div class="mt-4">
                    <Button :label="lang[local].yesBtn" @click.prevent="goNext" class="p-button-rounded primary-btn-gradient mx-3" />
                    <Button :label="lang[local].tryBtn" @click.prevent="tryAgain" class="p-button-rounded primary-btn-gradient-medium" />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
//profile/Avatar_-1-image.jpg
import isYouLang from '../../../mixins/authentication/isYouLang.js';
import backendDomains from '../../helpers/backendDomains.js';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
export default {
  mixins:[isYouLang,backendDomains],
  components: {
        Button,
        Avatar
  },
  data() {
    return {
      local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
      user:'',
    };
  },
  beforeRouteEnter(to, from, next) {
      if(!localStorage.getItem('foundedUser')){
      next({name:"findAccount"})
      return;
      }
      let user=JSON.parse(localStorage.getItem('foundedUser')); 
      if(!user.email || !user.firstName || !user.secondName || !user.nationalNumber){
          localStorage.removeItem('foundedUser');
          next({name:"findAccount"});
          return;
      }
      next();
  },
  created(){
    this.user=JSON.parse(localStorage.getItem('foundedUser'))
    
  },
  methods:{
    encrypteEmail(email){
      let term1 = email.split('@')[0]
      term1=term1.slice(0, 3) + term1.slice(3).replace(/.(?=..)/g, '*')
      let term2 =email.split('@')[1]
      return `${term1}@${term2}`

    },
    encryptePhone(phone){
      return phone= phone.slice(0, 4) + phone.slice(4).replace(/.(?=..)/g, '*');
    },
    tryAgain(){
      localStorage.removeItem('foundedUser')
      this.$router.push({name:'findAccount'})
    },
    goNext(){
      this.$router.push({name:'verificationType'})
    },
  }
};
</script>
<style lang="scss" scoped>
.is-you {
    .content-wrapper{
            .back-icon{
                width:40px;
                height:40px;
                border-radius: 50%;
                background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-1);
                i{
                  color: white !important;
                }
                
            }
          .avatar-text{
            background-image: linear-gradient(160deg,$gradient-color-2,$gradient-color-1);
            color: white ;
          }
    }
}

</style>
