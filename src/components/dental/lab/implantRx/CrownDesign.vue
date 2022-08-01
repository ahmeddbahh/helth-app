<template>
    <div class="crown-design">
        <div class="characterizations my-5">
            <h4>{{lang[local].headers.characterizations}}</h4>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="d-flex align-items-start  m-2">
                    <label class="mx-2"> 
                        <span>{{lang[local].toothShade}}</span>
                        <small class="d-block text-center text-small">({{lang[local].required}})</small>
                    </label>
                    <div class="flex-grow-1">
                        <InputText 
                        type="text"
                        @change="$v.data.lab.implantRx.crowmDesign.toothShade.$touch()"
                        v-model="data.lab.implantRx.crowmDesign.toothShade"
                        :placeholder="lang[local].toothShade"
                        class="px-2"
                        :class="{
                            'border-error':
                            $v.data.lab.implantRx.crowmDesign.toothShade.$invalid && $v.data.lab.implantRx.crowmDesign.toothShade.$dirty,
                        }"
                        ></InputText>
                        <div class="errors">
                        <small
                            class="text-error my-2"
                            v-if="
                                !$v.data.lab.implantRx.crowmDesign.toothShade.notContainsHtmlTags && $v.data.lab.implantRx.crowmDesign.toothShade.$dirty
                            "
                            >
                            {{ errors.inputError(lang[local].toothShade) }}
                            </small>
                            <small
                            class="text-error my-2"
                            v-else-if="!$v.data.lab.implantRx.crowmDesign.toothShade.minLen && $v.data.lab.implantRx.crowmDesign.toothShade.$dirty"
                            >
                            {{
                                errors.minLengthError(
                                lang[local].toothShade,
                                $v.data.lab.implantRx.crowmDesign.toothShade.$params.minLen.min
                                )
                            }}
                            </small>
                            <small
                            class="text-error my-2"
                            v-else-if="!$v.data.lab.implantRx.crowmDesign.toothShade.maxLen && $v.data.lab.implantRx.crowmDesign.toothShade.$dirty"
                            >
                            {{
                                errors.maxLengthError(
                                lang[local].toothShade,
                                $v.data.lab.implantRx.crowmDesign.toothShade.$params.maxLen.max
                                )
                            }}
                            </small>
                    </div>
                    </div>
            </div>
                </div>
            </div>
        </div>
        <div class="Pontic Design my-5">
            <h4>{{lang[local].headers.ponticDesign}}</h4>
            <div class="row">
                <div class="col-lg-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="331.23" height="174.908" viewBox="0 0 331.23 174.908">
                    <rect @click="data.lab.implantRx.crowmDesign.ponticDesign.modifiedTidgeLap = !data.lab.implantRx.crowmDesign.ponticDesign.modifiedTidgeLap" v-if="data.lab.implantRx.crowmDesign.ponticDesign.modifiedTidgeLap" id="Rectangle_102" style="z-index:5; transform: translate(-2px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.implantRx.crowmDesign.ponticDesign.FullRidgeLap = !data.lab.implantRx.crowmDesign.ponticDesign.FullRidgeLap" v-if="data.lab.implantRx.crowmDesign.ponticDesign.FullRidgeLap" id="Rectangle_102" style="z-index:5; transform: translate(67px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.implantRx.crowmDesign.ponticDesign.sanitaryHygienic = !data.lab.implantRx.crowmDesign.ponticDesign.sanitaryHygienic" v-if="data.lab.implantRx.crowmDesign.ponticDesign.sanitaryHygienic" id="Rectangle_102" style="z-index:5; transform: translate(136px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.implantRx.crowmDesign.ponticDesign.conical = !data.lab.implantRx.crowmDesign.ponticDesign.conical" v-if="data.lab.implantRx.crowmDesign.ponticDesign.conical" id="Rectangle_102" style="z-index:5; transform: translate(205px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.implantRx.crowmDesign.ponticDesign.ovate = !data.lab.implantRx.crowmDesign.ponticDesign.ovate" v-if="data.lab.implantRx.crowmDesign.ponticDesign.ovate" id="Rectangle_102" style="z-index:5; transform: translate(275px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <g  id="pontic_design" data-name="pontic design" transform="translate(-619.804 -449.47)">
                        <g  style="pointer-events: bounding-box; cursor: pointer;" @click="data.lab.implantRx.crowmDesign.ponticDesign.modifiedTidgeLap = !data.lab.implantRx.crowmDesign.ponticDesign.modifiedTidgeLap" id="modified_ridge-lap" data-name="modified ridge-lap">
                        <path id="Path_585" data-name="Path 585" d="M654.916,502.263c-5.331-.351-6.005-8.129-10.232-8.526-9.853-.926-23.106,39.746-17.81,42.631,3.639,1.983,13.484-15.266,25.01-12.694,4.4.981,5.839,4.133,9.474,3.41,2.076-.413,4.049-1.927,10.042-14.589,6.712-14.179,6.55-17.164,5.168-18.811a5.4,5.4,0,0,0-3.463-1.652C665.635,490.947,661.563,502.7,654.916,502.263Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_586" data-name="Path 586" d="M620.25,550.475a67.091,67.091,0,0,1,12.77-17.635c5.283-5.213,9.459-9.214,15.529-9.353,4.976-.114,8.8,2.422,10.453,3.516a23.825,23.825,0,0,1,8.8,11.45,28.463,28.463,0,0,1,2.084,11.179" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_587" data-name="Path 587" d="M671.618,490.484h9.6l-7.832,5.388,4.295-9.095,2.274,9.095Z" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P4" transform="translate(645.096 469.775)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P4</tspan></text>
                        <text id="Modified_ridge-lap-2" data-name="Modified ridge-lap" transform="translate(640.33 593.205) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-29.865" y="0">Modified</tspan><tspan x="-30.22" y="18">ridge-lap</tspan></text>
                        </g>
                        <g style="pointer-events: bounding-box; cursor: pointer;" @click="data.lab.implantRx.crowmDesign.ponticDesign.FullRidgeLap = !data.lab.implantRx.crowmDesign.ponticDesign.FullRidgeLap" id="full_ridge-lap" data-name="full ridge-lap">
                        <path id="Path_588" data-name="Path 588" d="M723.884,503.589c-3.05-.207-2.461-10.721-6.821-12.126-5.127-1.653-13.176,10.558-14.21,12.126a43.969,43.969,0,0,0-6.828,16.075c-2.019,10.129,1.152,13.533-2.267,21.252a32.634,32.634,0,0,1-6.253,9.094c.008.007,2.5-3.442,5.107-6.723,4.725-5.95,7.088-8.925,10.43-11.466,3.594-2.732,8.978-6.826,14.968-5.684,7.5,1.429,11.294,10.179,12.69,13.4,3.232,7.454,2.795,14.474,3.037,14.456.263-.021-1.34-8.2.379-17.622,1.379-7.56,3.557-8.585,6.821-18,2.038-5.878,7.574-21.847,2.652-25.389-3.054-2.2-10.048.457-14.021,4.168C726.153,500.339,725.617,503.707,723.884,503.589Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P5" transform="translate(711.438 469.47)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P5</tspan></text>
                        <text id="Full_ridge-lap-2" data-name="Full ridge-lap" transform="translate(709.52 593.205) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-11.539" y="0">Full</tspan><tspan x="-30.22" y="18">ridge-lap</tspan></text>
                        </g>
                        <g style="pointer-events: bounding-box; cursor: pointer;" @click="data.lab.implantRx.crowmDesign.ponticDesign.sanitaryHygienic = !data.lab.implantRx.crowmDesign.ponticDesign.sanitaryHygienic" id="sanitary_hygienic" data-name="sanitary/hygienic">
                        <path style="pointer-events: bounding-box;" id="Path_589" data-name="Path 589" d="M793.232,500.558c-.579-1.38-4.18-9.7-10.043-10.232-7.282-.659-15.194,10.958-14.021,21.411,1.046,9.317,9.2,16.715,17.432,17.81,13.791,1.834,24.153-14.5,25.768-25.958.25-1.767,1.321-9.367-2.273-11.557C806.694,489.959,799.826,493.159,793.232,500.558Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_590" data-name="Path 590" d="M755.905,551.147c.382-.548.958-1.348,1.706-2.273,2.222-2.754,13.632-16.889,29.936-15.916,11.225.67,21.466,8.3,26.906,19.326" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P1" transform="translate(780.543 469.47)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P1</tspan></text>
                        <text id="_Sanitary_hygienic" data-name="/Sanitary hygienic" transform="translate(777.356 592.164) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-29.377" y="0">/Sanitary</tspan><tspan x="-27.554" y="18">hygienic</tspan></text>
                        </g>
                        <g  style="pointer-events: bounding-box; cursor: pointer; " @click="data.lab.implantRx.crowmDesign.ponticDesign.conical = !data.lab.implantRx.crowmDesign.ponticDesign.conical" id="conical">
                        <path id="Path_591" data-name="Path 591" d="M856.326,503.211c2.677-8.222,8.987-12.628,13.263-11.558,4.728,1.182,6.8,9.014,6.064,14.589-.863,6.542-5.659,10.52-11.937,15.726-6.838,5.671-10.738,8.9-15.916,8.337-7.572-.831-13.3-9.291-14.4-16.863-1.351-9.266,3.652-21.079,10.61-21.41C848.664,491.81,853.42,496.758,856.326,503.211Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_592" data-name="Path 592" d="M830.179,548.874c3.247-9.912,11.674-16.922,21.032-17.621,12.073-.9,24.086,8.824,25.957,22.926" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P2" transform="translate(841.628 469.729)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P2</tspan></text>
                        <text id="Conical-2" data-name="Conical" transform="translate(857.354 590.426) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-24.196" y="0">Conical</tspan></text>
                        </g>
                        <g style="pointer-events: bounding-box; cursor: pointer;"  @click="data.lab.implantRx.crowmDesign.ponticDesign.ovate = !data.lab.implantRx.crowmDesign.ponticDesign.ovate" id="ovate">
                        <path id="Path_593" data-name="Path 593" d="M926.811,503.968c-3.456-6.931-8.585-11.618-12.885-10.989-6.163.9-8.956,12.478-8.147,20.463,1.049,10.36,8.88,21.767,18.189,22.548,14.394,1.206,27.9-23.36,23.306-36.758-.37-1.079-1.785-5.208-5.116-6.253C937.843,491.626,931.671,495.873,926.811,503.968Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_594" data-name="Path 594" d="M894.389,548.386c10.377-17.349,15.162-20.693,17.555-19.867,1.5.516,1.783,2.567,4.97,4.778a16.406,16.406,0,0,0,7.7,2.773c7.648.661,10.912-6.267,15.4-5.684,3.116.405,7.182,4.472,10.529,22.169" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P3" transform="translate(914.88 469.599)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P3</tspan></text>
                        <text id="Ovate-2" data-name="Ovate" transform="translate(927.945 589.236) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-19.526" y="0">Ovate</tspan></text>
                        </g>
                    </g>
                </svg>
                </div>
                <div class="col-lg-6">
                
                    <div class="d-flex align-items-center">
                        <div class="mx-4">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="177.934" viewBox="0 0 77.366 177.934">
                            <rect id="Rectangle_102" v-if="data.lab.implantRx.crowmDesign.ponticDesign.showNoMetal360" @click.prevent="data.lab.implantRx.crowmDesign.ponticDesign.showNoMetal360 = !data.lab.implantRx.crowmDesign.ponticDesign.showNoMetal360"  style="pointer-events: bounding-box; z-index:5; transform: translate(-5px, -10px);" data-name="Rectangle 102" width="90" height="156" fill="rgba(57,181,74,0.2)"/>
                                <g @click.prevent="data.lab.implantRx.crowmDesign.ponticDesign.showNoMetal360 = !data.lab.implantRx.crowmDesign.ponticDesign.showNoMetal360" style="pointer-events: bounding-box; cursor: pointer;" id="show_no_metal" data-name="show no metal" transform="translate(-275.94 -116.826)">
                                    <path id="Path_557" data-name="Path 557" d="M336.663,126.726c-.457.074.2,4.1-1.768,5.053-1.8.873-3.546-1.934-6.316-2.021-5.106-.16-6.64,9.14-11.368,10.105-6.943,1.418-12.206-16.884-18.19-16.421-10.422.807-20.331,58.314-5.053,65.937,5.088,2.538,8.773-2.548,22.485-2.274,15.591.312,20.138,7.074,25.263,4.295C355.5,183.925,338.408,126.444,336.663,126.726Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                                    <path id="Path_558" data-name="Path 558" d="M316.36,204.272c15.637-.107,27.889,14.944,26.021,29.377-1.543,11.922-12.669,23.038-26.526,22.69-14.669-.369-25.651-13.416-25.264-26.75C290.976,216.38,302.475,204.368,316.36,204.272Z" fill="#39b54a" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                                    <path id="Path_559" data-name="Path 559" d="M342.1,122.011h9.6l-7.832,5.388,4.295-9.095,2.274,9.095Z" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                                    <text id="Show_no_metal_360_" data-name="Show no
                                metal 360°*" transform="translate(306.94 276.76)" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-22.989" y="0">Show no</tspan><tspan x="-30.955" y="14.4">metal 360°*</tspan></text>
                                </g>
                            </svg>
                        </div>
                        <div class="mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="186.469" viewBox="0 0 62.161 186.469">
                            <rect id="Rectangle_102" v-if="data.lab.implantRx.crowmDesign.ponticDesign.metalLingual"  @click.prevent="data.lab.implantRx.crowmDesign.ponticDesign.metalLingual = !data.lab.implantRx.crowmDesign.ponticDesign.metalLingual"  style="pointer-events: bounding-box; z-index:5; transform: translate(-20px, -10px);" data-name="Rectangle 102" width="100" height="156" fill="rgba(57,181,74,0.2)"/>
                            <g @click.prevent="data.lab.implantRx.crowmDesign.ponticDesign.metalLingual = !data.lab.implantRx.crowmDesign.ponticDesign.metalLingual" style="pointer-events: bounding-box; cursor: pointer;" id="lingual_metal_collar" data-name="lingual metal collar" transform="translate(-674.263 -123.606)">
                                <path id="Path_568" data-name="Path 568" d="M725.463,127.395c-.457.074.2,4.1-1.768,5.053-1.8.873-3.546-1.934-6.316-2.021-5.106-.161-6.64,9.139-11.368,10.1-6.943,1.418-12.206-16.884-18.19-16.421-10.422.806-20.331,58.314-5.053,65.937,5.088,2.538,8.773-2.548,22.485-2.274,15.591.312,20.138,7.074,25.263,4.295C744.3,184.594,727.208,127.113,725.463,127.395Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_569" data-name="Path 569" d="M707.967,205.776c15.637-.108,27.89,14.943,26.021,29.377-1.543,11.921-12.669,23.038-26.526,22.69-14.669-.369-25.651-13.416-25.263-26.75C682.583,217.883,694.083,205.871,707.967,205.776Z" fill="#39b54a" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                                <path id="Path_570" data-name="Path 570" d="M735.109,179.725c-1.213-1.791-6.076-.234-14.533,2.133-12.718,3.561-16.351,4.135-16.268,5.134.1,1.156,4.944.153,13.474,2.709,5.73,1.716,9.744,4.026,12.772,2.1a8.861,8.861,0,0,0,2.314-2.314c.238-.344,1.065-1.587,1.771-5.1C735.193,181.635,735.47,180.258,735.109,179.725Z" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                                <g id="Path_571" data-name="Path 571" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M 710.0469970703125 260.3076782226562 L 710.0469970703125 256.7254028320312 C 721.2936401367188 254.0874481201172 729.4768676757812 244.3282012939453 730.0044555664062 232.85498046875 C 730.5453491210938 221.0967864990234 722.7344970703125 210.2778625488281 711.3748779296875 206.9559631347656 L 712.0089721679688 202.9891967773438 C 725.9791870117188 205.8538360595703 735.9693603515625 218.581787109375 735.321533203125 232.8092651367188 C 735.0098876953125 239.6603851318359 732.2278442382812 246.2229614257812 727.4879150390625 251.2881164550781 C 722.8701171875 256.2227783203125 716.6953735351562 259.4117736816406 710.0469970703125 260.3076782226562 Z" stroke="none"/>
                                <path d="M 712.4194946289062 203.588623046875 L 711.9375610351562 206.6034545898438 C 723.2864379882812 210.1318359375 731.048583984375 221.0377349853516 730.5039672851562 232.8779449462891 C 729.9721069335938 244.4429779052734 721.8118286132812 254.2993469238281 710.5469970703125 257.11865234375 L 710.5469970703125 259.7299499511719 C 716.8649291992188 258.7484741210938 722.71533203125 255.6564178466797 727.1228637695312 250.9464874267578 C 731.781494140625 245.9681549072266 734.5158081054688 239.5188446044922 734.822021484375 232.7865142822266 C 735.4508056640625 218.9773406982422 725.8831176757812 206.6056823730469 712.4194946289062 203.588623046875 M 711.5969848632812 202.3989868164062 C 726.1110229492188 205.1099853515625 736.4869995117188 218.2059936523438 735.8209838867188 232.8320007324219 C 735.166015625 247.2310028076172 723.9860229492188 259.2130126953125 709.5469970703125 260.8739929199219 L 709.5469970703125 256.3259887695312 C 720.7730102539062 253.8739929199219 728.9840087890625 244.1609954833984 729.5050048828125 232.8320007324219 C 730.0430297851562 221.1349945068359 722.260009765625 210.447998046875 710.8109741210938 207.3159942626953 L 711.5969848632812 202.3989868164062 Z" stroke="none" fill="#000"/>
                                </g>
                                <text id="Lingual_metal_collar_traditional_" data-name="Lingual
                                metal collar
                                (traditional)" transform="translate(705.263 278.075)" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-19.107" y="0">Lingual</tspan><tspan x="-30.82" y="14.4">metal collar</tspan><tspan x="-30.683" y="28.8">(traditional)</tspan></text>
                                </g>
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="if-insufficient-room">
            <h4 class="my-2">{{lang[local].headers.ifInsufficientRoom}}</h4>
            <div class="row">
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.trimOpposing" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.trimOpposing}}</span>
                    </div>
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.metalOcclusal" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.metalOcclusal}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.call" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.call}}</span>
                    </div>
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.metalIsland" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.metalIsland}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.reductionCoping" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.reductionCoping}}</span>
                    </div>
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.metal" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.metal}}</span>
                    </div>
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.ifInsufficientRoom.resin" :binary="true" />
                        <span class="mx-1">{{lang[local].ifInsufficientRoom.resin}}</span>
                    </div>
                </div>
                
                

            </div>
        </div>
        <div class="occlusal-clearance">
            <h4 class="my-2">{{lang[local].headers.occlusalClearance}}</h4>
            <div class="row">
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.occlusalClearance.light" :binary="true" />
                        <span class="mx-1">{{lang[local].occlusalClearance.light}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.occlusalClearance.open" :binary="true" />
                        <span class="mx-1">{{lang[local].occlusalClearance.open}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.occlusalClearance.tight" :binary="true" />
                        <span class="mx-1">{{lang[local].occlusalClearance.tight}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="occlusal-clearance">
            <h4 class="my-2">{{lang[local].headers.contact}}</h4>
            <div class="row">
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.contact.light" :binary="true" />
                        <span class="mx-1">{{lang[local].contact.light}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.contact.medium" :binary="true" />
                        <span class="mx-1">{{lang[local].contact.medium}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.implantRx.crowmDesign.contact.heavy" :binary="true" />
                        <span class="mx-1">{{lang[local].contact.heavy}}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import InputText from "primevue/inputtext";
import { maxLength, minLength } from "vuelidate/lib/validators";
import Checkbox from 'primevue/checkbox';
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../../../helpers/errors";
import { notContainsHtmlTags } from "../../../helpers/customValidators";
export default {
    components:{InputText,Checkbox},
    props:["data"],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    headers:{
                        characterizations:"Characterizations",
                        ponticDesign:"pontic Design",
                        ifInsufficientRoom:"If Insufficient Room",
                        occlusalClearance:"Occlusal Clearance",
                        contact:"Contact"
                    },
                    ponticDesign:"Pontic Design",
                    toothShade :"Tooth Shade",
                    required:"REQUIRED",
                    modifiedTidgeLap:"Modified ridge-lap",
                    FullRidgeLap:"Full ridge-lap",
                    sanitaryHygienic:"Sanitary/hygienic",
                    conical:"Conical",
                    ovate:"Ovate",
                    ifInsufficientRoom:{
                        trimOpposing:"Trim opposing*",
                        metalOcclusal:"Metal occlusal",
                        call:"Call",
                        metalIsland:"Metal island",
                        reductionCoping:"Reduction coping",
                        metal:"Metal",
                        resin:"Resin"
                    },
                    occlusalClearance:{
                        light:"Light*",
                        open:"Open",
                        tight :"Tight"
                    },
                    contact:{
                        light:"Light*",
                        medium:"Medium",
                        heavy :"Heavy"
                    },

                },
                ar:{},
            },
            errors:{
                minLengthError,
                maxLengthError,
                inputError,
            }
        }
    },
    watch:{
        "data.lab.implantRx.crowmDesign.ponticDesign":{
            handler(){
                this.$store.dispatch("setToothLabImplantRxCrownDesignIsValid",this.$v.data.lab.implantRx.crowmDesign.$invalid );
            },
            deep:true
        },
    },
    validations:{
        data:{
            lab:{
                implantRx:{
                    crowmDesign: {
                        toothShade:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                        
                    
                },
                }
            }
        },
    },
}
</script>