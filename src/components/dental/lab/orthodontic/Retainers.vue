<template>
    <div class="ratainers">
        <div class="row my-3">
            <h4>{{lang[local].headers.applianceOptions}}</h4>
            <div class="col-md-4" v-for="(value,key) in lang[local].applianceOptions" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.applianceOptions[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.bleachingTrays}}</h4>
            <div class="col-md-4 " v-for="(value,key) in lang[local].bleachingTrays" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.bleachingTrays[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.essixInvisibleRetainers}}</h4>
            <div class="col-md-4 " v-for="(value,key) in lang[local].essixInvisibleRetainers" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.essixInvisibleRetainers[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.acrylicDesignOptions}}</h4>
            <div class="col-md-6 col-lg-4 " v-for="(value,key) in lang[local].acrylicDesignOptions" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.acrylicDesignOptions[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.retainerType}}</h4>
            <div class="col-md-6 col-lg-4 " v-for="(value,key) in lang[local].retainerType" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.retainerType[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.acrylicColor}}</h4>
            <div class="col-md-6 col-lg-4 " v-for="(value,key) in lang[local].acrylicColor" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.acrylicColor[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
            <div class="col-md-6 col-lg-4 " >
                <div class="check-container d-flex align-items-start  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.acrylicColor.other" :binary="true" />
                        <div >
                            <InputText 
                            class="mx-1" 
                            :placeholder="lang[local].placeholder"
                            v-model="data.lab.orthodontal.ratainers.acrylicColor.otherInput"
                            @change="$v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$touch()"
                            :class="{
                                'border-error':$v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$invalid && $v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$dirty,
                            }"
                            > </InputText>
                            <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.notContainsHtmlTags && $v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$dirty
                                        "
                                        >
                                        {{ errors.inputError('') }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.minLen && $v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            '',
                                            $v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.maxLen && $v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            '',
                                            $v.data.lab.orthodontal.ratainers.acrylicColor.otherInput.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                            </div>
                        </div>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.labialWire}}</h4>
            <div class="col-md-6 col-lg-4 " v-for="(value,key) in lang[local].labialWire" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.labialWire[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <h4>{{lang[local].headers.clasps}}</h4>
            <div class="col-md-6 col-lg-4 " v-for="(value,key) in lang[local].clasps" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.ratainers.clasps[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
        <hr class="sparator">
        <div class="pontic my-3">
            <h4>{{lang[local].headers.pontic}}</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="61.97" viewBox="0 0 522 61.97">
                            
                            <g id="upper">
                                <g  @click="handleTooth(1)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(1)"  style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(22 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(2)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(2)"  style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(51 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(3)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(3)"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(82 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(4)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(4)"  style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(112 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(5)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(5)"  style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(141 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(6)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(6)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(172 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(7)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(7)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(208 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(8)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(8)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(240 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(9)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(9)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(264 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g  @click="handleTooth(10)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(10)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(291 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(11)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(11)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(323 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(12)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(12)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(352 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(13)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(13)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(382 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(14)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(14)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(412 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(15)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(15)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(447 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(16)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(16)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(478 10)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                            </g>
                            <g id="lower">
                                <g @click="handleTooth(32)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(32)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(22 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g  @click="handleTooth(31)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(31)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(51 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(30)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(30)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(82 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(29)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(29)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(112 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(28)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(28)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(141 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(27)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(27)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(172 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(26)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(26)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(208 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(25)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(25)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(240 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(24)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(24)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(264 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(23)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(23)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(291 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(22)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(22)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(323 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(21)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(21)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(352 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(20)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(20)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(382 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(19)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(19)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(412 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(18)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(18)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(447 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                                <g @click="handleTooth(17)" v-if="data.lab.orthodontal.ratainers.pontic.pontic.includes(17)" style="pointer-events: bounding-box; cursor: pointer;"  id="Ellipse_41" data-name="Ellipse 41" transform="translate(478 34)" fill="#56c596" stroke="#56c596" stroke-width="1" opacity="0.39">
                                    <ellipse cx="11" cy="9.5" rx="11" ry="9.5" stroke="none"/>
                                    <ellipse cx="11" cy="9.5" rx="10.5" ry="9" fill="none"/>
                                </g>
                            </g>
                            <g id="Group_508" data-name="Group 508" transform="translate(-81 -1623.152)">
                                
                                <g id="Group_482" data-name="Group 482" transform="translate(-46 11)">
                                <line id="Line_41" data-name="Line 41" x2="487.263" transform="translate(144.285 1644.137)" fill="none" stroke="#707070" stroke-width="1"/>
                                <line id="Line_42" data-name="Line 42" y2="61.97" transform="translate(391.208 1612.152)" fill="none" stroke="#707070" stroke-width="1"/>
                                <text @click="handleTooth(24)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-1" data-name="1" transform="translate(401 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">1</tspan></text>
                                <text @click="handleTooth(23)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-2" data-name="2" transform="translate(429 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">2</tspan></text>
                                <text @click="handleTooth(22)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-3" data-name="3" transform="translate(461 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">3</tspan></text>
                                <text @click="handleTooth(21)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-4" data-name="4" transform="translate(490 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">4</tspan></text>
                                <text @click="handleTooth(20)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-5" data-name="5" transform="translate(520 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">5</tspan></text>
                                <text @click="handleTooth(19)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-6" data-name="6" transform="translate(551 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">6</tspan></text>
                                <text @click="handleTooth(18)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-7" data-name="7" transform="translate(586 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">7</tspan></text>
                                <text @click="handleTooth(17)" style="pointer-events: bounding-box; cursor: pointer;"  id="4-8" data-name="8" transform="translate(617 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">8</tspan></text>
                                <text @click="handleTooth(9)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-2" data-name="1" transform="translate(401 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">1</tspan></text>
                                <text @click="handleTooth(10)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-2" data-name="2" transform="translate(429 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">2</tspan></text>
                                <text @click="handleTooth(11)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-3" data-name="3" transform="translate(461 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">3</tspan></text>
                                <text @click="handleTooth(12)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-4" data-name="4" transform="translate(490 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">4</tspan></text>
                                <text @click="handleTooth(13)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-5" data-name="5" transform="translate(520 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">5</tspan></text>
                                <text @click="handleTooth(14)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-6" data-name="6" transform="translate(551 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">6</tspan></text>
                                <text @click="handleTooth(15)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-7" data-name="7" transform="translate(586 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">7</tspan></text>
                                <text @click="handleTooth(16)" style="pointer-events: bounding-box; cursor: pointer;"  id="2-8" data-name="8" transform="translate(617 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">8</tspan></text>
                                <text @click="handleTooth(8)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-1" data-name="1" transform="translate(378 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">1</tspan></text>
                                <text @click="handleTooth(7)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-2" data-name="2" transform="translate(346 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">2</tspan></text>
                                <text @click="handleTooth(6)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-3" data-name="3" transform="translate(311 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">3</tspan></text>
                                <text @click="handleTooth(5)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-4" data-name="4" transform="translate(279 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">4</tspan></text>
                                <text @click="handleTooth(4)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-5" data-name="5" transform="translate(251 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">5</tspan></text>
                                <text @click="handleTooth(3)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-6" data-name="6" transform="translate(220 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">6</tspan></text>
                                <text @click="handleTooth(2)"  style="pointer-events: bounding-box; cursor: pointer;"  id="1-7" data-name="7" transform="translate(189 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">7</tspan></text>
                                <text @click="handleTooth(1)" style="pointer-events: bounding-box; cursor: pointer;"  id="1-8" data-name="8" transform="translate(160 1636)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">8</tspan></text>
                                <text @click="handleTooth(32)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-8" data-name="8" transform="translate(160 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">8</tspan></text>
                                <text @click="handleTooth(31)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-7" data-name="7" transform="translate(189 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">7</tspan></text>
                                <text @click="handleTooth(30)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-6" data-name="6" transform="translate(220 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">6</tspan></text>
                                <text @click="handleTooth(29)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-5" data-name="5" transform="translate(251 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">5</tspan></text>
                                <text @click="handleTooth(28)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-4" data-name="4" transform="translate(279 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">4</tspan></text>
                                <text @click="handleTooth(27)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-3" data-name="3" transform="translate(311 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">3</tspan></text>
                                <text @click="handleTooth(26)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-2" data-name="2" transform="translate(346 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">2</tspan></text>
                                <text @click="handleTooth(25)" style="pointer-events: bounding-box; cursor: pointer;"  id="3-1" data-name="1" transform="translate(378 1659)" fill="#205072" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="-3.234" y="0">1</tspan></text>
                                <text id="L" transform="translate(645 1646)" fill="#205072" font-size="12" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="-3.067" y="0">L</tspan></text>
                                <text id="R" transform="translate(131 1646)" fill="#205072" font-size="12" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="-3.917" y="0">R</tspan></text>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div>
                        <div class="d-flex">
                            <label class="mx-3" > {{lang[local].shade}}</label>
                            <div >
                                <InputText
                                v-model="data.lab.orthodontal.ratainers.pontic.shade"
                                @change="$v.data.lab.orthodontal.ratainers.pontic.shade.$touch()"
                                :class="{
                                    'border-error':$v.data.lab.orthodontal.ratainers.pontic.shade.$invalid && $v.data.lab.orthodontal.ratainers.pontic.shade.$dirty,
                                    }"  
                                :placeholder="lang[local].shade"></InputText>
                                <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.orthodontal.ratainers.pontic.shade.notContainsHtmlTags && $v.data.lab.orthodontal.ratainers.pontic.shade.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].shade) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.orthodontal.ratainers.pontic.shade.minLen && $v.data.lab.orthodontal.ratainers.pontic.shade.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].shade,
                                            $v.data.lab.orthodontal.ratainers.pontic.shade.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.orthodontal.ratainers.pontic.shade.maxLen && $v.data.lab.orthodontal.ratainers.pontic.shade.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].shade,
                                            $v.data.lab.orthodontal.ratainers.pontic.shade.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
import { maxLength, minLength } from "vuelidate/lib/validators";
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../../../helpers/errors";
import { notContainsHtmlTags } from "../../../helpers/customValidators";
export default {
    components:{
        Checkbox,
        InputText
    },
    props:['data'],
    data(){
        return {
            
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    placeholder:"{text/no}",
                    shade:"Shade",
                    headers:{
                        applianceOptions:"Appliance Options",
                        bleachingTrays:"Bleaching Trays",
                        essixInvisibleRetainers:"Essix/Invisible Retainers",
                        acrylicDesignOptions:"Acrylic Design Options",
                        retainerType:"Retainer Type",
                        acrylicColor:"Acrylic Color",
                        labialWire:"Labial Wire",
                        clasps:"Clasps",
                        pontic:"Pontic",
                        auxiliaries:"Auxiliaries"
                    },
                    applianceOptions:{
                        upper:"Upper",
                        lower:"Lower",
                        both:"Both"
                    },
                    bleachingTrays:{
                        soft:"Soft",
                        mm15:"1.5mm"
                    },
                    essixInvisibleRetainers:{
                        fullOcclusal:"Full occlusal",
                        scalloped:"Scalloped",
                        straight:"Straight*"
                    },
                    acrylicDesignOptions:{
                        anteriorBitePlate:"Anterior Bite Plate",
                        reverseIncline:"Reverse Incline Bite Plate",
                        scallopedAnteriors:"Scalloped Anteriors",
                        PosteriorBitePlate:"Posterior Bite Plate",
                        horseshoePalate:"Horseshoe Palate",
                        facialAcrylic:"Facial Acrylic on Labial Bow"
                    },
                    retainerType:{
                        hawley:"Hawley*",
                        wraparound:"Wraparound",
                        flipperPontic:"Flipper + 1 Pontic",
                        BondedRetainer:"3x3 bonded retainer",
                        QCM:"QCM",
                        wraparoundWithout :"Wraparound without"
                    },
                    acrylicColor:{
                        pink:"Pink*",
                        clear:"Clear"
                    },
                    labialWire:{
                        three:"3-3*",
                        two:"2-2",
                        four:"4-4",
                        flatLabial:"Flat labial bow"
                    },
                    clasps:{
                        ball:"Ball*",
                        arrow:"Arrow",
                        soldered:"Soldered C",
                        C:"C",
                        adams:"Adams",
                        solderedAdams:"Soldered Adams",
                        occlusalRest:"Occlusal Rest"
                    }

                },
                ar:{
                    placeholder:"{text/no}",
                    shade:"Shade",
                    headers:{
                        applianceOptions:"Appliance Options",
                        bleachingTrays:"Bleaching Trays",
                        essixInvisibleRetainers:"Essix/Invisible Retainers",
                        acrylicDesignOptions:"Acrylic Design Options",
                        retainerType:"Retainer Type",
                        acrylicColor:"Acrylic Color",
                        labialWire:"Labial Wire",
                        clasps:"Clasps",
                        pontic:"Pontic",
                        auxiliaries:"Auxiliaries"
                    },
                    applianceOptions:{
                        upper:"Upper",
                        lower:"Lower",
                        both:"Both"
                    },
                    bleachingTrays:{
                        soft:"Soft",
                        mm15:"1.5mm"
                    },
                    essixInvisibleRetainers:{
                        fullOcclusal:"Full occlusal",
                        scalloped:"Scalloped",
                        straight:"Straight*"
                    },
                    acrylicDesignOptions:{
                        anteriorBitePlate:"Anterior Bite Plate",
                        reverseIncline:"Reverse Incline Bite Plate",
                        scallopedAnteriors:"Scalloped Anteriors",
                        PosteriorBitePlate:"Posterior Bite Plate",
                        horseshoePalate:"Horseshoe Palate",
                        facialAcrylic:"Facial Acrylic on Labial Bow"
                    },
                    retainerType:{
                        hawley:"Hawley*",
                        wraparound:"Wraparound",
                        flipperPontic:"Flipper + 1 Pontic",
                        BondedRetainer:"3x3 bonded retainer",
                        QCM:"QCM",
                        wraparoundWithout :"Wraparound without"
                    },
                    acrylicColor:{
                        pink:"Pink*",
                        clear:"Clear"
                    },
                    labialWire:{
                        three:"3-3*",
                        two:"2-2",
                        four:"4-4",
                        flatLabial:"Flat labial bow"
                    },
                    clasps:{
                        ball:"Ball*",
                        arrow:"Arrow",
                        soldered:"Soldered C",
                        C:"C",
                        adams:"Adams",
                        solderedAdams:"Soldered Adams",
                        occlusalRest:"Occlusal Rest"
                    }


                }
            },
            errors:{
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    methods:{
        handleTooth(i){
            if(this.data.lab.orthodontal.ratainers.pontic.pontic.includes(i))
                this.data.lab.orthodontal.ratainers.pontic.pontic.splice(this.data.lab.orthodontal.ratainers.pontic.pontic.indexOf(i),1)
            else
            this.data.lab.orthodontal.ratainers.pontic.pontic.push(i)
        }
    },
    validations:{
        data:{
            lab:{
                orthodontal:{
                    ratainers: {
                        acrylicColor:{
                            otherInput:{
                                minLen: minLength(2),
                                maxLen: maxLength(100),
                                notContainsHtmlTags(val) {
                                if (!val) return true;
                                return notContainsHtmlTags(val);
                                },
                            },
                        },
                        pontic:{
                            shade:{
                                minLen: minLength(2),
                                maxLen: maxLength(100),
                                notContainsHtmlTags(val) {
                                if (!val) return true;
                                return notContainsHtmlTags(val);
                                },
                            }
                        },
                    },
                }
            }
        },
    },
    watch:{
        "data.lab.orthodontal.ratainers":{
            handler(){
                this.$store.dispatch("setToothLabRatainersIsValid",this.$v.data.lab.orthodontal.ratainers.$invalid );
            },
            deep:true
        },
    },

}
</script>
<style lang="scss" scoped>
.table{
    td,th{
        color: $name-color;
        font-weight: 300;
    }
    .sparator{
        height: 2px;
        border-radius: 20px;
    }
}
</style>