<template>
  <div class="casecade-rx-dosage">
    <Cascader   
      class="select"
      :class="{'border-error':$v.value.$invalid && $v.value.$dirty}"
      @change="$v.value.$touch"
      v-model="value"
      :options="showOptions"
      expandType="click"
      :placeholder="placeholder"
      >
    </Cascader >
  </div>
</template>
<script>
import {Cascader} from '@livelybone/vue-select';
import {required} from "vuelidate/lib/validators";
export default {
  name:'cascade',
  components:{Cascader},
  props:["initData","placeholder"],
  data() {

    let optionsEn = [
      {name: '1 Time', value:'1 Time', children: [
        {name: 'Day', value: 'Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
        {name: '2 Day', value: '2 Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
          { name: 'Week', value: 'Week' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Month', value: 'Month' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 2 Months', value: 'Every 2 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 3 Months', value: 'Every 3 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 6 Months', value:'Every 6 Months' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Year', value: 'Year' ,children:[{name: 'Random', value: 'Random'}]},
        ],
      },
      {name: '2 Times', value: '2 Times', children: [
        {name: 'Day', value: 'Day', children: [
              { name: 'Before', value: 'Before' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'After', value: 'After' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'Morning/Night', value: 'Morning/Night'},
              { name: 'Random', value: 'Random'},
            ],
          },
        ],
      },
      {
        name: '3 Times', value: '3 Times', children: [
          { name: 'Day', value: 'Day', children: [
                  {
                    name: 'Before', value: 'Before',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'After', value: 'After',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'Random', value: 'Random',
                  }
              ]},
        ],
      },
      { name: '4 Times', value:  '4 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '5 Times', value: '5 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '6 Times', value: '6 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
    ]
    let optionsAr = [
      {name: '1 Time', value:'1 Time', children: [
        {name: 'Day', value: 'Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
        {name: '2 Day', value: '2 Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
          { name: 'Week', value: 'Week' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Month', value: 'Month' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 2 Months', value: 'Every 2 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 3 Months', value: 'Every 3 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 6 Months', value:'Every 6 Months' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Year', value: 'Year' ,children:[{name: 'Random', value: 'Random'}]},
        ],
      },
      {name: '2 Times', value: '2 Times', children: [
        {name: 'Day', value: 'Day', children: [
              { name: 'Before', value: 'Before' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'After', value: 'After' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'Morning/Night', value: 'Morning/Night'},
              { name: 'Random', value: 'Random'},
            ],
          },
        ],
      },
      {
        name: '3 Times', value: '3 Times', children: [
          { name: 'Day', value: 'Day', children: [
                  {
                    name: 'Before', value: 'Before',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'After', value: 'After',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'Random', value: 'Random',
                  }
              ]},
        ],
      },
      { name: '4 Times', value:  '4 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '5 Times', value: '5 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '6 Times', value: '6 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
    ]
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      value: this.initData,
      optionsEn: optionsEn,
      optionsAr: optionsAr,
      keyword: '',
      arrowPosition: 'start',
      arrowOffsetScaling: 1,
      popperOptions: {
        placement: 'bottom-start',
        positionFixed: true,
      
      },
    }
  },
  validations:{
    value:{
      required
    }
  },
  computed: {
    showOptions() {
      if(this.local=='ar')
      return this.keyword ? this.optionsAr.filter(this.filter) : this.optionsAr
      else
      return this.keyword ? this.optionsEn.filter(this.filter) : this.optionsEn
    },
  },
  watch: {
    value(val) {
      this.$emit("getDosage",val);
      // console.log(val)
    },
    options(val) {
      console.log(val)
    },
  },
  methods: {
    log(val) {
      // console.log(val)
      this.keyword = val
    },
    filter(op) {
      return op.name.toString().indexOf(this.keyword) > -1
    },
    makeValueEmpty(){
      this.value=[] ; 
    }
  },
};
</script>
<style lang="scss">
@import 'node_modules/@livelybone/vue-select/lib/css/index.scss';
.casecade-rx-dosage{
    .select {
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      border: 1px solid #68b2a0;
      height: 40px;
      vertical-align: center;
      border-radius: 34px;
      background: #ffff;

      .value{
        margin-top: 3px;
        font-size: 15px;
        color:#68b2a0;
        overflow: hidden;
      }
      .placeholder{
        color :#68b2a0 !important;
        background: #fff;
        opacity: 1;
        cursor: auto !important;
      }
      .input{
      margin-top: 5px;
      font-size: 15px;
      color:#68b2a0;
        &::placeholder{
          color:#68b2a0;
        }
      }
      .icon-arrow,.icon-arrow.reverse{
        right: 12px;
        width: 12px;
        height: 12px;
        top: 35%;
        &::before{
          border-top-color:#68b2a0;
        }
      }
      .icon-arrow.reverse{top:50%}
        .scrollbar-wrap{
          min-width:125px;
          .option{
            font-size: 12px;
          }
        }
    }
    /deep/.select-base, .select-multi, .cascader, .cascader-multi{
      color: #cde0c9 !important;
    }
}
</style>