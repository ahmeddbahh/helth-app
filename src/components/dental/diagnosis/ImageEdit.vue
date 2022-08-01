<template>
  <section class="diangonosis-edit-image">
    <div >
      <div class="source" >
        <vue-drawing-canvas
          ref="VueCanvasDrawing"
          :image.sync="image"
          :stroke-type="strokeType.id"
          :fill-shape="fillShape"
          :eraser="eraser"
          :lineWidth="line.value"
          :color="color"
          :background-image="backgroundImage"
          :saveAs="type"
          :styles="{
            border: 'solid 1px #205072',
            cursor: 'pointer',
            width:'100%',
            height:'100%'
    
          }"
          class="convas-container"
          :lock="disabled"
          
        />
          <!-- @mousemove="getCoordinate($event)" -->
          <!-- :background-color="backgroundColor" -->
        <div class="button-container my-2">
          <button class="mx-2 btn-actions" type="button" @click.prevent="disabled = !disabled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#56c596"
              class="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path
                v-if="!disabled"
                d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"
              />
              <path
                v-else
                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
              />
            </svg>
            <span v-if="!disabled">{{lang[local].unlock}}</span>
            <span v-else>{{lang[local].lock}}</span>
          </button>
          <button class="mx-3 btn-actions"  type="button" @click.prevent="$refs.VueCanvasDrawing.undo()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#56c596"
              class="bi bi-arrow-counterclockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
              />
            </svg>
            <span>{{lang[local].undo}}</span>
          </button>
          <button class="mx-3 btn-actions"  type="button" @click.prevent="$refs.VueCanvasDrawing.redo()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#56c596"
              class="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              />
            </svg>
            <span>{{lang[local].redo}}</span>
          </button>
          <button
            type="button" class="mx-3 btn-actions" @click.prevent="$refs.VueCanvasDrawing.redraw()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#56c596"
              class="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
              />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
            <span>{{lang[local].refresh}}</span>
          </button>
          <button class="mx-3 btn-actions"  type="button" @click.prevent="$refs.VueCanvasDrawing.reset()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#56c596"
              class="bi bi-file-earmark"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
              />
            </svg>
            <span>{{lang[local].reset}}</span>
          </button>
        </div>
        <div class="button-container">
          <div class="d-flex   align-items-center flex-wrap">
 
          
          <div class="d-flex my-3 align-items-center">
            <label for="font-size" class="mx-2 w-25">{{lang[local].size}}</label>
            <Dropdown  v-model="line" :options="lineOptions" optionLabel="value"></Dropdown>
          </div>
          <div class="d-flex " >
            <label for="font-size" class="mx-2">{{lang[local].color}}</label>
            <input type="color" v-model="color" />
          </div>
          
          </div>
          <div class="d-flex  align-items-center">
            <label class="mx-2">{{lang[local].shape}}</label>
            <div class="btns">
            <Button @click="strokeType=strokeTypeOptions[0]" :class="{'shape-active':strokeType.id ==strokeTypeOptions[0].id}"  class="mx-2">
                <img src="../../../UI/icons/clinic/edit-text.svg" alt="">
              {{strokeTypeOptions[0][local=='ar'?'arabic':'english']}} 
              </Button>
            <Button @click="strokeType=strokeTypeOptions[1]" :class="{'shape-active':strokeType.id ==strokeTypeOptions[1].id}"  class="mx-2">
                <svg id="circle-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31.424 31.425">
                <path id="Path_532" fill="#fff" data-name="Path 532" d="M15.712,3.132a12.58,12.58,0,1,1-12.58,12.58,12.6,12.6,0,0,1,12.58-12.58m0-3.132A15.712,15.712,0,1,0,31.424,15.712,15.712,15.712,0,0,0,15.712,0Z" />
              </svg>
                <span class="mx-1">{{strokeTypeOptions[1][local=='ar'?'arabic':'english']}} </span>
            </Button>
            <Button @click="strokeType=strokeTypeOptions[2]" :class="{'shape-active':strokeType.id ==strokeTypeOptions[2].id}"  class="mx-2"> 
              
              <svg id="Group_409" data-name="Group 409" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29.861 29.861">
              <path id="Path_530" data-name="Path 530" d="M29.861,29.861H0V0H29.861ZM1.233,28.628H28.628V1.233H1.233Z" fill="#fff"/>
            </svg>
              <span class="mx-1">{{strokeTypeOptions[2][local=='ar'?'arabic':'english']}} </span>
              
              </Button>
            <Button @click="strokeType=strokeTypeOptions[3]" :class="{'shape-active':strokeType.id ==strokeTypeOptions[3].id}"  class="mx-2">
              <svg id="triangle-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28.585 29.475">
                <path id="Path_531" data-name="Path 531" d="M0,29.475H28.585V0ZM27.078,27.92H3.64L27.078,3.754Z" fill="#fff"/>
              </svg>
              <span class="mx-1">{{strokeTypeOptions[3][local=='ar'?'arabic':'english']}}</span> 
              </Button>
            <Button @click="strokeType=strokeTypeOptions[4]" :class="{'shape-active':strokeType.id ==strokeTypeOptions[4].id}"  class="mx-2">
              <svg id="triangle-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28.585 29.475">
                <path id="Path_531" data-name="Path 531" d="M0,29.475H28.585V0ZM27.078,27.92H3.64L27.078,3.754Z" fill="#fff"/>
              </svg>
              <span class="mx-1"> {{strokeTypeOptions[4][local=='ar'?'arabic':'english']}} </span>
              
              </Button>
            </div>

          </div>
        
            
        </div>
      
      </div>

    </div>
  </section>
</template>

<script type="module">
import VueDrawingCanvas from "vue-drawing-canvas/dist/vue-drawing-canvas.esm";
import Dropdown from 'primevue/dropdown';
import Button from "primevue/button";

export default {
  props:{
    imageInput:{
      required:true 
    },
    type:{
      requried:false,
      default:'jpeg'
    }
    
  },
  components: {
    "vue-drawing-canvas": VueDrawingCanvas,
    Dropdown,
    Button,

  },

  data() {
    return {
        local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
        x: 0,
        y: 0,
        image: "",
        eraser: false,
        disabled: false,
        fillShape: false,
        line: {value:2},
        color: "#000000",
        strokeType:  {
            english:"dash",
            arabic:"dash",
            id:"dash"
          },
        backgroundColor: "#FFFFFF",
        backgroundImage: null,
        strokeTypeOptions:[
          {
            english:"dash",
            arabic:"dash",
            id:"dash"
          },
          
          {
            english:"circle",
            arabic:"circle",
            id:"circle"
          },
          
          {
            english:"square",
            arabic:"square",
            id:"square"
          },
          
          {
            english:"triangle",
            arabic:"triangle",
            id:"triangle"
          },
          
          {
            english:"half triangle",
            arabic:"half triangle",
            id:"half_triangle"
          },
          
        ],
        lineOptions:[],
        lang:{
          en:{
            lock:"lock",
            unlock:"unlock",
            undo:"undo",
            refresh:"refresh",
            reset:"rest",
            shape:"shape",
            redo:"redo",
            size:"size",
            color:"color"

          },
          ar:{
            lock:"lock",
            unlock:"unlock",
            undo:"undo",
            refresh:"refresh",
            reset:"rest",
            shape:"shape",
            redo:"redo",
            size:"size",
            color:"color"

          },

        },
    
    };
  },
  mounted(){
    for(let i =1 ;  i< 30 ; i++) 
      this.lineOptions.push({value:i})
      this.backgroundImage = this.imageInput;

  },
  methods: {
    async setImage() {
      
    },

  },
};
</script>

<style lang="scss" scoped>
.diangonosis-edit-image{
  .button-container{
  .btn-actions{
    background: none;
    span{
      color:$tradmark-color !important ;
    }
  }
}
.convas-container{
    width:100%;
    height: 100%;
  }
.shape-active{
  background-image: linear-gradient(
        160deg,
        $gradient-color-3,
        $gradient-color-5
      ) !important;
  border: none;
  box-shadow:none;
}

}

</style>
