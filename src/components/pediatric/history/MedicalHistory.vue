<template>
    <div class="medical-history my-3">
        <h3 class="mb-3">{{lang[local].conditions}}</h3>
        <div class="row ">
            <div class="col-md-6 col-lg-4">
                <div class="conditions my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="handleMainChack(data.conditions.heartDisease,'heartDisease',data.conditions.heartDisease.subChecks)"  
                        v-model="data.conditions.heartDisease.heartDisease"  />
                        <label > {{lang[local].heartDisease}}</label>
                    </div>
                    <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.conditions.heartDisease.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"
                        v-if="key != 'kind'" 
                        @change="setAsChecked(
                            data.conditions.heartDisease.subChecks[key],
                            data.conditions.heartDisease,'heartDisease',
                            key,
                            data.conditions.heartDisease.subChecks,
                            'kind'
                            
                            )" 
                        v-model="data.conditions.heartDisease.subChecks[key]"  />
                        <label v-if="key != 'kind'"  > {{lang[local][key]}}</label>
                        <div v-if="key == 'kind' && data.conditions.heartDisease.subChecks.other">
                            <InputText 
                            type="text"
                            v-model="data.conditions.heartDisease.subChecks.kind"
                            :class="{'border-error':$v.data.conditions.heartDisease.subChecks.kind.$invalid  && $v.data.conditions.heartDisease.subChecks.kind.$dirty}" 
                            @change="$v.data.conditions.heartDisease.subChecks.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.heartDisease.subChecks.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.heartDisease.subChecks.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.heartDisease.subChecks.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.heartDisease.subChecks.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.heartDisease.subChecks.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="depression my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.depression"  />
                        <label > {{lang[local].depression}}</label>
                    </div>
                </div>
                <div class="anxiety my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.anxiety"  />
                        <label > {{lang[local].anxiety}}</label>
                    </div>
                </div>
                <div class="hemorrhoids my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.hemorrhoids"  />
                        <label > {{lang[local].hemorrhoids}}</label>
                    </div>
                </div>
                <div class="allergicToLatex my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.allergicToLatex"  />
                        <label > {{lang[local].allergicToLatex}}</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="lungDisease my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="handleMainChack(data.conditions.lungDisease,'lungDisease',data.conditions.lungDisease.subChecks)"  
                        v-model="data.conditions.lungDisease.lungDisease"  />
                        <label > {{lang[local].lungDisease}}</label>
                    </div>
                    <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.conditions.lungDisease.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"
                        v-if="key != 'kind'" 
                        @change="setAsChecked(
                            data.conditions.lungDisease.subChecks[key],
                            data.conditions.lungDisease,'lungDisease',
                            key,
                            data.conditions.lungDisease.subChecks,
                            'kind'
                            
                            )" 
                        v-model="data.conditions.lungDisease.subChecks[key]"  />
                        <label v-if="key != 'kind'"  > {{lang[local][key]}}</label>
                        <div v-if="key == 'kind' && data.conditions.lungDisease.subChecks.other">
                            <InputText 
                            type="text"
                            v-model="data.conditions.lungDisease.subChecks.kind"
                            :class="{'border-error':$v.data.conditions.lungDisease.subChecks.kind.$invalid  && $v.data.conditions.lungDisease.subChecks.kind.$dirty}" 
                            @change="$v.data.conditions.lungDisease.subChecks.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.lungDisease.subChecks.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.lungDisease.subChecks.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.lungDisease.subChecks.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.lungDisease.subChecks.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.lungDisease.subChecks.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="seizures my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.seizures"  />
                        <label > {{lang[local].seizures}}</label>
                    </div>
                </div>
                <div class="migraines my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.migraines"  />
                        <label > {{lang[local].migraines}}</label>
                    </div>
                </div>
                <div class="alcoholism my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.alcoholism"  />
                        <label > {{lang[local].alcoholism}}</label>
                    </div>
                </div>
                <div class="drugAddiction my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.drugAddiction"  />
                        <label > {{lang[local].drugAddiction}}</label>
                    </div>
                </div>
                <div class="bipolarDisorder my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.bipolarDisorder"  />
                        <label > {{lang[local].bipolarDisorder}}</label>
                    </div>
                </div>
                <div class="escophagealRefluxOrStomachUlcer my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.escophagealRefluxOrStomachUlcer"  />
                        <label > {{lang[local].escophagealRefluxOrStomachUlcer}}</label>
                    </div>
                </div>
                <div class="glaucoma my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.glaucoma"  />
                        <label > {{lang[local].glaucoma}}</label>
                    </div>
                </div>
                
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="chronicFatigueSyndrome my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.chronicFatigueSyndrome"  />
                        <label > {{lang[local].chronicFatigueSyndrome}}</label>
                    </div>
                </div>
                <div class="arthritis my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.arthritis"  />
                        <label > {{lang[local].arthritis}}</label>
                    </div>
                </div>
                <div class="lowBackInjury my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.conditions.lowBackInjury"  />
                        <label > {{lang[local].lowBackInjury}}</label>
                    </div>
                </div>
                <div class="hIVOrAIDS my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.hIVOrAIDS"  />
                        <label > {{lang[local].hIVOrAIDS}}</label>
                    </div>
                </div>
                <div class="diverticulitisOrDiverticulosis my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        v-model="data.conditions.diverticulitisOrDiverticulosis"  />
                        <label > {{lang[local].diverticulitisOrDiverticulosis}}</label>
                    </div>
                </div>
                
                
                <div class="liverDisease my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="data.conditions.liverDisease.kind=null"  
                        v-model="data.conditions.liverDisease.liverDisease"  />
                        <label > {{lang[local].liverDisease}}</label>
                    </div>
                    <div class="my-2 mx-2 d-flex  gap-2 align-items-center" v-if="data.conditions.liverDisease.liverDisease">
                        <div >
                            <InputText 
                            type="text"
                            v-model="data.conditions.liverDisease.kind"
                            :class="{'border-error':$v.data.conditions.liverDisease.kind.$invalid  && $v.data.conditions.liverDisease.kind.$dirty}" 
                            @change="$v.data.conditions.liverDisease.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.liverDisease.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.liverDisease.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.liverDisease.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.liverDisease.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.liverDisease.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kidneyDisease my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="data.conditions.kidneyDisease.kind=null"  
                        v-model="data.conditions.kidneyDisease.kidneyDisease"  />
                        <label > {{lang[local].kidneyDisease}}</label>
                    </div>
                    <div class=" my-2 mx-2 d-flex  gap-2 align-items-center" v-if="data.conditions.kidneyDisease.kidneyDisease">
                        <div >
                            <InputText 
                            type="text"
                            v-model="data.conditions.kidneyDisease.kind"
                            :class="{'border-error':$v.data.conditions.kidneyDisease.kind.$invalid  && $v.data.conditions.kidneyDisease.kind.$dirty}" 
                            @change="$v.data.conditions.kidneyDisease.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.kidneyDisease.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.kidneyDisease.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.kidneyDisease.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.kidneyDisease.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.kidneyDisease.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="thyroidDisease my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="data.conditions.thyroidDisease.kind=null"  
                        v-model="data.conditions.thyroidDisease.thyroidDisease"  />
                        <label > {{lang[local].thyroidDisease}}</label>
                    </div>
                    <div class="my-2 mx-2 d-flex  gap-2 align-items-center" v-if="data.conditions.thyroidDisease.thyroidDisease">
                        <div >
                            <InputText 
                            type="text"
                            v-model="data.conditions.thyroidDisease.kind"
                            :class="{'border-error':$v.data.conditions.thyroidDisease.kind.$invalid  && $v.data.conditions.thyroidDisease.kind.$dirty}" 
                            @change="$v.data.conditions.thyroidDisease.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.thyroidDisease.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.thyroidDisease.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.thyroidDisease.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.thyroidDisease.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.thyroidDisease.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="canserDisease my-2">
                    <div class="mx-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="data.conditions.canserDisease.kind=null"  
                        v-model="data.conditions.canserDisease.canserDisease"  />
                        <label > {{lang[local].canserDisease}}</label>
                    </div>
                    <div class="my-2 mx-2 d-flex  gap-2 align-items-center" v-if="data.conditions.canserDisease.canserDisease">
                        <div >
                            <InputText 
                            type="text"
                            v-model="data.conditions.canserDisease.kind"
                            :class="{'border-error':$v.data.conditions.canserDisease.kind.$invalid  && $v.data.conditions.canserDisease.kind.$dirty}" 
                            @change="$v.data.conditions.canserDisease.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.canserDisease.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.canserDisease.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.canserDisease.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.canserDisease.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.canserDisease.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="other my-2">
                    <div class="mx-2  d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true" 
                        @change="data.conditions.kind=null"
                        v-model="data.conditions.other"  />
                        <label > {{lang[local].other}}</label>
                    </div>
                    <div class="my-2 mx-2 d-flex  gap-2 align-items-center" v-if="data.conditions.other">
                        <div >
                            <InputText 
                            type="text"
                            v-model="data.conditions.kind"
                            :class="{'border-error':$v.data.conditions.kind.$invalid  && $v.data.conditions.kind.$dirty}" 
                            @change="$v.data.conditions.kind.$touch()" 
                            :placeholder="lang[local].kind"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.conditions.kind.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].kind) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.kind.minLen">
                                    {{errors.minLengthError(lang[local].kind,$v.data.conditions.kind.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.conditions.kind.maxLen">
                                    {{errors.maxLengthError(lang[local].kind, $v.data.conditions.kind.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div> 
        <h3 class="my-3">{{lang[local].disability}}</h3>
        <div class="row mb-3">
            <div class="col-md-6 col-lg-4">
                <div class="visionDisability ">
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.vision" 
                        @change ="handActiveDisaplity(data.disability.visionDisability.vision,'visionDisability')"
                        />
                        <label > {{lang[local].visionDisability}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.mobility" 
                        @change ="handActiveDisaplity(data.disability.mobilityDisability.mobility,'mobilityDisability')"
                        />
                        <label > {{lang[local].mobilityDisability}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.hearingDisability.hearing" 
                        @change ="handActiveDisaplity(data.disability.hearingDisability.hearing,'hearingDisability')"
                        />
                        <label > {{lang[local].hearingDisability}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.independentLivingDisability.independentLiving" 
                        @change ="handActiveDisaplity(data.disability.independentLivingDisability.independentLiving,'independentLivingDisability')"
                        />
                        <label > {{lang[local].independentLivingDisability}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.cognitiveDisability.cognitive" 
                        @change ="handActiveDisaplity(data.disability.cognitiveDisability.cognitive,'cognitiveDisability')"
                        />
                        <label > {{lang[local].cognitiveDisability}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.speechDisorder.speech"
                        @change ="handActiveDisaplity(data.disability.speechDisorder.speech,'speechDisorder')"
                        />
                        <label > {{lang[local].speechDisorder}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.selfCare"  />
                        <label > {{lang[local].selfCare}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.other" 
                        @change="data.disability.otherDisability = null"
                        />
                        <label > {{lang[local].other}}</label>
                    </div>
                    <div v-if="data.disability.other">
                            <div class="mx-3">
                                <InputText 
                                type="text"
                                v-model="data.disability.otherDisability"
                                :class="{'border-error':$v.data.disability.otherDisability.$invalid  && $v.data.disability.otherDisability$dirty}" 
                                @change="$v.data.disability.otherDisability.$touch()" 
                                :placeholder="lang[local].otherDisability"
                                /> 
                            </div>
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.disability.otherDisability.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].otherDisability) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.disability.otherDisability.minLen">
                                    {{errors.minLengthError(lang[local].otherDisability,$v.data.disability.otherDisability.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.disability.otherDisability.maxLen">
                                    {{errors.maxLengthError(lang[local].otherDisability, $v.data.disability.otherDisability.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div v-if="activeDisability == 'visionDisability'" class=" my-3">
                    <h4>{{lang[local].visionDisability}}</h4>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.blindness"  />
                        <label > {{lang[local].blindness}}</label>
                    </div> 
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.visionConditions.visionConditions" 
                        @change="handleMainChack(data.disability.visionDisability.subChecks.visionConditions,'visionConditions', data.disability.visionDisability.subChecks.visionConditions.subChecks)" 
                        />
                        
                        <label > {{lang[local].visionConditions}}</label>
                    </div> 
                    <div class="visionConditions" >
                        <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.visionDisability.subChecks.visionConditions.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.visionConditions.subChecks[key]"  
                        @change="handleMainChack(data.disability.visionDisability.subChecks.visionConditions,'visionConditions', data.disability.visionDisability.subChecks.visionConditions.subChecks)"  
                        />
                        <label > {{lang[local][key]}}</label>

                        </div>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.lowVision.lowVision" 
                        @change="handleMainChack(data.disability.visionDisability.subChecks.lowVision,'lowVision', data.disability.visionDisability.subChecks.lowVision.subChecks)"  
                        />
                        <label > {{lang[local].lowVision}}</label>
                    </div>
                    <div class="visionConditions" >
                        <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.visionDisability.subChecks.lowVision.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.lowVision.subChecks[key]"  
                        @change="handleMainChack(data.disability.visionDisability.subChecks.lowVision,'lowVision', data.disability.visionDisability.subChecks.lowVision.subChecks)"  
                        />
                        <label > {{lang[local][key]}}</label>
                        </div>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.colorBlindness.colorBlindness"  
                        @change="handleMainChack(data.disability.visionDisability.subChecks.colorBlindness,'colorBlindness', data.disability.visionDisability.subChecks.colorBlindness.subChecks)"
                        />
                        <label > {{lang[local].colorBlindness}}</label>
                    </div>
                    <div class="visionConditions" >
                        <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.visionDisability.subChecks.colorBlindness.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.visionDisability.subChecks.colorBlindness.subChecks[key]"  
                        @change="handleMainChack(data.disability.visionDisability.subChecks.colorBlindness,'colorBlindness', data.disability.visionDisability.subChecks.colorBlindness.subChecks)"  
                        />
                        <label > {{lang[local][key]}}</label>

                        </div>
                    </div>
                </div>
                <div v-if="activeDisability == 'mobilityDisability'" class="my-3">
                    <h4>{{lang[local].mobilityDisability}}</h4>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.absentLimb.absentLimb" 
                        @change="handleMainChack(data.disability.mobilityDisability.subChecks.absentLimb,'absentLimb', data.disability.mobilityDisability.subChecks.absentLimb.subChecks)" 
                        />
                        
                        <label > {{lang[local].absentLimb}}</label>
                    </div> 
                    <div class="absentLimb" >
                        <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.mobilityDisability.subChecks.absentLimb.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.absentLimb.subChecks[key]"  
                        @change="handleMainChack(data.disability.mobilityDisability.subChecks.absentLimb,'absentLimb', data.disability.mobilityDisability.subChecks.absentLimb.subChecks)"  
                        />
                        <label > {{lang[local][key]}}</label>

                        </div>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.arthritis.arthritis" 
                        @change="handleMainChack(data.disability.mobilityDisability.subChecks.arthritis,'arthritis', data.disability.mobilityDisability.subChecks.arthritis.subChecks)"  
                        />
                        <label > {{lang[local].arthritis}}</label>
                    </div>
                    <div class="arthritis" >
                        <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.mobilityDisability.subChecks.arthritis.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.arthritis.subChecks[key]"  
                        @change="handleMainChack(data.disability.mobilityDisability.subChecks.arthritis,'arthritis', data.disability.mobilityDisability.subChecks.arthritis.subChecks)"  
                        />
                        <label > {{lang[local][key]}}</label>
                        </div>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.paralysisDue.paralysisDue"  
                        @change="handleMainChack(data.disability.mobilityDisability.subChecks.paralysisDue,'paralysisDue', data.disability.mobilityDisability.subChecks.paralysisDue.subChecks)"
                        />
                        <label > {{lang[local].paralysisDue}}</label>
                    </div>
                    <div class="paralysisDue" >
                        <div class="my-2 mx-5 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.mobilityDisability.subChecks.paralysisDue.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.paralysisDue.subChecks[key]"  
                        @change="handleMainChack(data.disability.mobilityDisability.subChecks.paralysisDue,'paralysisDue', data.disability.mobilityDisability.subChecks.paralysisDue.subChecks)"  
                        />
                        <label > {{lang[local][key]}}</label>

                        </div>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.cerebralPalsy"  />
                        <label > {{lang[local].cerebralPalsy}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.multipleSclerosis"  />
                        <label > {{lang[local].multipleSclerosis}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.muscularDystrophy"  />
                        <label > {{lang[local].muscularDystrophy}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.motorNeuroneDisease"  />
                        <label > {{lang[local].motorNeuroneDisease}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.caudaEquinaSyndrome"  />
                        <label > {{lang[local].caudaEquinaSyndrome}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.hemiplegia"  />
                        <label > {{lang[local].hemiplegia}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.paralysisOfTheFace"  />
                        <label > {{lang[local].paralysisOfTheFace}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.guillainBarreSyndrome"  />
                        <label > {{lang[local].guillainBarreSyndrome}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.parkinsonDisease"  />
                        <label > {{lang[local].parkinsonDisease}}</label>
                    </div>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.mobilityDisability.subChecks.polio"  />
                        <label > {{lang[local].polio}}</label>
                    </div>
                </div>
                <div v-if="activeDisability == 'hearingDisability'" class="my-3">
                    <h4>{{lang[local].hearingDisability}}</h4>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.hearingDisability.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.hearingDisability.subChecks[key]"  />
                        <label > {{lang[local][key]}}</label>
                    </div>
                </div>
                <div v-if="activeDisability == 'independentLivingDisability'"  class="my-3">
                    <h4>{{lang[local].independentLivingDisability}}</h4>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.independentLivingDisability.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.independentLivingDisability.subChecks[key]"  />
                        <label > {{lang[local][key]}}</label>
                    </div>
                    
                </div>
                <div v-if="activeDisability =='cognitiveDisability'" class="my-3">
                    <h4>{{lang[local].cognitiveDisability}}</h4>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.cognitiveDisability.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.cognitiveDisability.subChecks[key]"  />
                        <label > {{lang[local][key]}}</label>
                    </div>
                </div>
                <div v-if="activeDisability == 'speechDisorder'" class="my-3">
                    <h4>{{lang[local].speechDisorder}}</h4>
                    <div class="mx-2 my-2 d-flex  gap-2 align-items-center" v-for="(value,key) in data.disability.speechDisorder.subChecks" :key="key">
                        <Checkbox 
                        :binary="true"  
                        v-model="data.disability.speechDisorder.subChecks[key]"  />
                        <label > {{lang[local][key]}}</label>
                    </div>
                </div>
            </div>
        </div>
        <h3 >{{lang[local].surgical}}</h3>
        <div class="row">
            <div class="col-md-6 col-lg-3 col-xl-2  my-3">
                <div class="form-group">
                    <label>{{lang[local].name}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].name"
                            v-model="dataObject.name.manualInsertion" 
                            :suggestions="filteredName"
                            @item-select="nameSelection"
                            @complete="searchName($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.name.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].name) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.name.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].name,$v.dataObject.name.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.name.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].name, $v.dataObject.name.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group ">
                    <label >{{lang[local].date}}</label>
                    <Calendar 
                    :showIcon="true"  
                    :placeholder="lang[local].date" 
                    :manualInput="false" 
                    :monthNavigator="true" 
                    :yearNavigator="true" 
                    yearRange="1950:2030" 
                    :touchUI.sync="displayUI" 
                    dateFormat="mm-dd-yy"
                    v-model="dataObject.date" 
                    :class="{'border-error':$v.dataObject.date.$invalid && $v.dataObject.date.$error}"
                    
                    />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.date.notValidDate && $v.dataObject.date.$dirty">
                            {{ errors.inputError(lang[local].date) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group">
                    <label >{{lang[local].comment}}</label>
                    <InputText 
                        type="text" 
                        v-model="dataObject.comment"
                        @change="$v.dataObject.comment.$touch()" 
                        :placeholder="lang[local].comment" 
                        :class="{'border-error':$v.dataObject.comment.$invalid  && $v.dataObject.comment.$dirty}"
                    > </InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.comment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].comment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.comment.minLen">
                            {{errors.minLengthError(lang[local].comment,$v.dataObject.comment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.comment.maxLen">
                            {{errors.maxLengthError(lang[local].comment, $v.dataObject.comment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3  col-xl-2 my-3">
                <div class="form-group mx-2 my-4">
                    <input type="file" hidden @change="getFielsFromBtn($event)" multiple="true" ref="inputFile">
                        <Button
                            :label="lang[local].upladFiles"
                            @click="$refs.inputFile.click()"
                        >
                        </Button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group btn-form my-lg-4 d-flex justify-content-center align-items-center">
                    <Button
                        icon="pi pi-plus"
                        :class="{ 'arabic-icon': local == 'ar' }"
                        class="p-button-rounded"
                        @click="addToTable"
                        :disabled="$v.dataObject.$invalid"
                    />
                </div>
            </div>
        </div>
        <div class="display-files d-flex align-items-center flex-wrap gap-2 " v-if="dataObject.files.length">
            <div v-for="(file,index) in dataObject.files" :key="index"  >
                <div class="file-box m-4">
                    <img 
                        v-if="checkFileName(file.name).image" 
                        :src="ObjectURL(file)"
                    >
                    <video   controls  v-else-if="checkFileName(file.name).video">
                        <source :src="ObjectURL(file)" />
                    </video>
                    <img
                        v-else-if="checkFileName(file.name).pdf" 
                        src="../../../UI/icons/pdf.svg">
                    <span v-else-if="checkFileName(file.name).file"><i class="pi pi-file " style="font-size: 5rem"></i></span>
                    <span v-else><i class="pi pi-file-excel" style="font-size: 5rem"></i></span>
                    <h6 class="text-center">{{file.name.substring(0,8)}} {{file.name.length>8?'...':''}}</h6>
                    <div class="delete">
                        <img src="../../../UI/icons/shared/trash.svg" style="cursor: pointer;" @click="deleteFileItem(index)" alt="">
                    </div>
                </div>
                <div class="media-errors text-center">
                    <small v-if="!$v.dataObject.files.$each[index].fileExtension" class="text-error">{{errors.inputError(file.name)}}</small>
                    <small v-else-if="!$v.dataObject.files.$each[index].fileSize" class="text-error" >
                        {{ checkFileName(file.name).image? errors.fileSizeError(5):errors.fileSizeError(5)}}
                    </small>
                </div>
            </div>
        </div>
        <div class="table-wrapper table-responsive" v-if="data.surgical.length">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{lang[local].name}}</th>                                
                        <th scope="col">{{lang[local].date}}</th>                                
                        <th scope="col">{{lang[local].comment}}</th>                                
                        <th scope="col">{{lang[local].upladFiles}}</th>                                
                    </tr>
                </thead>
                <tbody>
                    <!-- {{$v.data.rx.$each[index]}} -->
                    <tr v-for="(row,index) in data.surgical" :key="index" >
                        <td >{{index+1}}</td>
                        <td >{{row.name.manualInsertion}}</td>
                        <td >{{row.date?row.date.toISOString().split('T')[0]:''}}</td>
                        <td >{{row.comment}}</td>
                        <td >{{row.files.length}}</td>
                        <td>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="mx-2">
                                    <img src="../../../UI/icons/clinic/trash.svg" @click="deleteFromTable(index)" style="cursor: pointer;" alt="">
                                </div>
                            </div>
                        </td>
                        
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
import { minLengthError, maxLengthError, inputError,fileSizeError } from "../../helpers/errors";
import { maxLength, minLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags,notValidDate,fileExtension ,fileSize } from "../../helpers/customValidators";
import AutoComplete from 'primevue/autocomplete';
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
export default {
    props:['data','dataObject'],
    components:{
        Checkbox,
        InputText,
        AutoComplete,
        Button,
        Calendar
    },

    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    conditions:"Conditions",
                    heartDisease:"Heart disease",
                    congestiveHeartFailur:"Congestive heart failur",
                    heartAttack:"Heart attack",
                    angina:"Angina",
                    heartValveDisease:"Heart valve disease",
                    heartMurmmur:"Heart murmmur",
                    other:"Other",
                    kind:"kind",
                    lungDisease:"Lung disease",
                    asthma:"Asthma",
                    emphysema:"Emphysema",
                    liverDisease:"Liver disease",
                    kidneyDisease:"Kidney disease",
                    thyroidDisease:"Thyroid Disease",
                    canserDisease:"Canser disease",
                    seizures:"Seizures",
                    migraines:"Migraines",
                    alcoholism:"Alcoholism",
                    drugAddiction:"Drug Addiction",
                    depression:"Depression",
                    anxiety:"Anxiety",
                    bipolarDisorder:"BipolarDisorder",
                    chronicFatigueSyndrome:"Chronic fatigue syndrome",
                    arthritis:"Arthritis",
                    lowBackInjury:"LowBackInjury",
                    hIVOrAIDS:"HIV Or AIDS",
                    diverticulitisOrDiverticulosis:"Diverticulitis Or Diverticulosis",
                    escophagealRefluxOrStomachUlcer:"Escophageal reflux Or Stomach ulcer",
                    hemorrhoids:"Hemorrhoids",
                    glaucoma:"Hlaucoma",
                    allergicToLatex:"Allergic to latex",
                    disability:"Disability",
                    visionDisability:"Vision Disability",
                    vision:"Vision",
                    blindness:"Blindness",
                    visionConditions:"Vision conditions",
                    mobilityDisability:"Mobility disability",
                    hearingDisability:"Hearing disability",
                    independentLivingDisability:"Independent Living disability",
                    cognitiveDisability:"Cognitive disability",
                    speechDisorder:"Speech disorder",
                    selfCare:"Self care",
                    otherDisability:"Other disability",
                    lowVision:"Low vision",
                    colorBlindness:"Color blindness",
                    myopia:"Myopia",
                    hyperopia:"Hyperopia",
                    astigmatism:"Astigmatism",
                    diabeticRetinopathy:"Diabetic Retinopathy",
                    ageRelatedMacularDegeneration:"Age related macular degeneration",
                    cataracts:"Cataracts",
                    monochromasy:"Monochromasy",
                    protanomaly:"Protanomaly",
                    deuteranomaly:"Deuteranomaly",
                    dichromasy:"Dichromasy",
                    protanopia:"Protanopia",
                    deuteranopia:"Deuteranopia",
                    absentLimb:"Absent Limb",
                    birthDefect:"Birth defect",
                    lossOfLimbsThroughAccidents:"Loss of limbs through accidents",
                    amputation:"Amputation",
                    osteoarthritis:"Osteoarthritis",
                    rheumatoidArthritis:"Rheumatoid arthritis",
                    septicArthritis:"Septic arthritis",
                    psoriaticArthritis:"Psoriatic srthritis",
                    autoimmuneDiseases:"Autoimmune diseases",
                    paralysisDue:"Paralysis due",
                    paraplegia:"Paraplegia",
                    quadriplegiaOrTetraplegia:"Quadriplegia or tetraplegia",
                    cerebralPalsy:"Cerebral palsy",
                    multipleSclerosis:"Multiple sclerosis",
                    muscularDystrophy:"Muscular dystrophy",
                    motorNeuroneDisease:"Motor neurone disease",
                    caudaEquinaSyndrome:"Cauda equina syndrome",
                    hemiplegia:"Hemiplegia",
                    paralysisOfTheFace:"Paralysis of the face",
                    guillainBarreSyndrome:"Guillain barre syndrome",
                    parkinsonDisease:"Parkinson disease",
                    polio:"Polio",
                    mild:"Mild",
                    moderate:"Moderate",
                    serve:"Serve",
                    profound:"Profound",
                    information:"Information",
                    equipmentAidAndAdaptions:"Equipment aid and adaptions",
                    personalAssistance:"Personal assistance",
                    transport:"Transport",
                    accessibleEnvironment:"Accessible environment",
                    mentalRetardation:"Mental retardation",
                    attentionDeficitHyperactivityDisorder:"Attention deficit hyperactivity disorder",
                    dyslexia:"Dyslexia",
                    aphasia:"Aphasia",
                    brainInjury:"BrainInjury",
                    languageDelay:"LanguageDelay",
                    learningDisabilities:"Learning disabilities",
                    autism:"Autism",
                    dyscalculia:"Dyscalculia",
                    intellectual:"Intellectual",
                    memoryLoss:"MemoryLoss",
                    downSyndrome:"DownSyndrome",
                    epilepsy:"Epilepsy",
                    peerSupport:"Peer support",
                    cerebralpalsy:"Cerebralpalsy",
                    apraxiaOfSpeech:"Apraxia of Speech",
                    orofacialMyofunctional:"Orofacial Myofunctional",
                    speechSound:"Speech Sound",
                    stutteringStammering:"Stuttering stammering",
                    receptive:"Receptive",
                    autismRelatedSpeech:"Autism relatedSpeech",
                    resonance:"Resonance",
                    brainInjuryRelatedSpeech:"Brain injury related speech",
                    dysarthria:"Dysarthria",
                    lisping:"Lisping",
                    spasmodicDysphonia:"Spasmodic dysphonia",
                    cluttering:"Cluttering",
                    mutenessSelectiveMutism:"Muteness selective mutism",
                    speechDelayAlalia:"Speech delay alalia",
                    surgical:"Surgical",
                    name:"Name",
                    comment:"Comment",
                    date:"Date",
                    upladFiles:"Upload files"
                },
                ar:{
                    conditions:"Conditions",
                    heartDisease:"Heart disease",
                    congestiveHeartFailur:"Congestive heart failur",
                    heartAttack:"Heart attack",
                    angina:"Angina",
                    heartValveDisease:"Heart valve disease",
                    heartMurmmur:"Heart murmmur",
                    other:"Other",
                    kind:"kind",
                    lungDisease:"Lung disease",
                    asthma:"Asthma",
                    emphysema:"Emphysema",
                    liverDisease:"Liver disease",
                    kidneyDisease:"Kidney disease",
                    thyroidDisease:"Thyroid Disease",
                    canserDisease:"Canser disease",
                    seizures:"Seizures",
                    migraines:"Migraines",
                    alcoholism:"Alcoholism",
                    drugAddiction:"Drug Addiction",
                    depression:"Depression",
                    anxiety:"Anxiety",
                    bipolarDisorder:"BipolarDisorder",
                    chronicFatigueSyndrome:"Chronic fatigue syndrome",
                    arthritis:"Arthritis",
                    lowBackInjury:"LowBackInjury",
                    hIVOrAIDS:"HIV Or AIDS",
                    diverticulitisOrDiverticulosis:"Diverticulitis Or Diverticulosis",
                    escophagealRefluxOrStomachUlcer:"Escophageal reflux Or Stomach ulcer",
                    hemorrhoids:"Hemorrhoids",
                    glaucoma:"Hlaucoma",
                    allergicToLatex:"Allergic to latex",
                    disability:"Disability",
                    visionDisability:"Vision Disability",
                    vision:"Vision",
                    blindness:"Blindness",
                    visionConditions:"Vision conditions",
                    mobilityDisability:"Mobility disability",
                    hearingDisability:"Hearing disability",
                    independentLivingDisability:"Independent Living disability",
                    cognitiveDisability:"Cognitive disability",
                    speechDisorder:"Speech disorder",
                    selfCare:"Self care",
                    otherDisability:"Other disability",
                    lowVision:"Low vision",
                    colorBlindness:"Color blindness",
                    myopia:"Myopia",
                    hyperopia:"Hyperopia",
                    astigmatism:"Astigmatism",
                    diabeticRetinopathy:"Diabetic Retinopathy",
                    ageRelatedMacularDegeneration:"Age related macular degeneration",
                    cataracts:"Cataracts",
                    monochromasy:"Monochromasy",
                    protanomaly:"Protanomaly",
                    deuteranomaly:"Deuteranomaly",
                    dichromasy:"Dichromasy",
                    protanopia:"Protanopia",
                    deuteranopia:"Deuteranopia",
                    absentLimb:"Absent Limb",
                    birthDefect:"Birth defect",
                    lossOfLimbsThroughAccidents:"Loss of limbs through accidents",
                    amputation:"Amputation",
                    osteoarthritis:"Osteoarthritis",
                    rheumatoidArthritis:"Rheumatoid arthritis",
                    septicArthritis:"Septic arthritis",
                    psoriaticArthritis:"Psoriatic srthritis",
                    autoimmuneDiseases:"Autoimmune diseases",
                    paralysisDue:"Paralysis due",
                    paraplegia:"Paraplegia",
                    quadriplegiaOrTetraplegia:"Quadriplegia or tetraplegia",
                    cerebralPalsy:"Cerebral palsy",
                    multipleSclerosis:"Multiple sclerosis",
                    muscularDystrophy:"Muscular dystrophy",
                    motorNeuroneDisease:"Motor neurone disease",
                    caudaEquinaSyndrome:"Cauda equina syndrome",
                    hemiplegia:"Hemiplegia",
                    paralysisOfTheFace:"Paralysis of the face",
                    guillainBarreSyndrome:"Guillain barre syndrome",
                    parkinsonDisease:"Parkinson disease",
                    polio:"Polio",
                    mild:"Mild",
                    moderate:"Moderate",
                    serve:"Serve",
                    profound:"Profound",
                    information:"Information",
                    equipmentAidAndAdaptions:"Equipment aid and adaptions",
                    personalAssistance:"Personal assistance",
                    transport:"Transport",
                    accessibleEnvironment:"Accessible environment",
                    mentalRetardation:"Mental retardation",
                    attentionDeficitHyperactivityDisorder:"Attention deficit hyperactivity disorder",
                    dyslexia:"Dyslexia",
                    aphasia:"Aphasia",
                    brainInjury:"BrainInjury",
                    languageDelay:"LanguageDelay",
                    learningDisabilities:"Learning disabilities",
                    autism:"Autism",
                    dyscalculia:"Dyscalculia",
                    intellectual:"Intellectual",
                    memoryLoss:"MemoryLoss",
                    downSyndrome:"DownSyndrome",
                    epilepsy:"Epilepsy",
                    peerSupport:"Peer support",
                    cerebralpalsy:"Cerebralpalsy",
                    apraxiaOfSpeech:"Apraxia of Speech",
                    orofacialMyofunctional:"Orofacial Myofunctional",
                    speechSound:"Speech Sound",
                    stutteringStammering:"Stuttering stammering",
                    receptive:"Receptive",
                    autismRelatedSpeech:"Autism relatedSpeech",
                    resonance:"Resonance",
                    brainInjuryRelatedSpeech:"Brain injury related speech",
                    dysarthria:"Dysarthria",
                    lisping:"Lisping",
                    spasmodicDysphonia:"Spasmodic dysphonia",
                    cluttering:"Cluttering",
                    mutenessSelectiveMutism:"Muteness selective mutism",
                    speechDelayAlalia:"Speech delay alalia",
                    surgical:"Surgical",
                    name:"Name",
                    comment:"Comment",
                    date:"Date",
                    upladFiles:"Upload files"
                }
            },
            errors: {
            minLengthError,
            maxLengthError,
            inputError,
            fileSizeError
            },
            activeDisability:null,
            nameOptions:[],
            filteredName:[],
            displayUI:false,
            ObjectURL:window.URL.createObjectURL
        }
    },
    created(){
        this.displayUI = window.innerWidth <=425 ;
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setPediatricMedicalHistoryIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
        dataObject: {
            handler() {
                this.$store.dispatch("setPediatricMedicalHistoryIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
    },
    validations:{
        dataObject:{
            name:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
            },
            comment:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
            },
            date:{
                notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                }
            },
            files:{
                $each:{
                    fileExtension(val){
                        if (!val) return true;
                            return fileExtension(val);
                    },
                    fileSize(val){
                        if (!val) return true;
                            return fileSize(val,5*1000*1024,5*1000*1024,10*1000*1024);
                    }

                }
            },
        },
        data:{
            conditions:{
                heartDisease:{
                    subChecks:{
                        kind:{
                            minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        }
                    }
                },
                lungDisease:{
                    subChecks:{
                        kind:{
                            minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        }
                    }
                },
                liverDisease:{
                    kind:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                    
                },
                kidneyDisease:{
                    kind:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                    
                },
                thyroidDisease:{
                    kind:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                    
                },
                canserDisease:{
                    kind:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                    
                },
                kind:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
            },
            disability:{
                otherDisability:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }
            },
            surgical:{
                $each:{
                    name:{
                        manualInsertion:{
                            minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                    },
                    comment:{
                            minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                    },
                    date:{
                        notValidDate(val) {
                        if (!val) return true;
                        return !notValidDate(val);
                        },
                    }
                }
            },
        },
    },
    methods:{
        setAsChecked(value,obj,mainkey,key='',subChecks={},kindKey=''){
            if(value)
                if(!obj[mainkey])
                    obj[mainkey] = true ;
            if(key == 'other' &&subChecks&&kindKey)
                subChecks[kindKey] = null ;
            
        },
        handleMainChack(main,mainKey,subchecks){
            let keys = Object.keys(subchecks) ; 
            if(!main[mainKey]){
                for (let i = 0 ; i < keys.length ; i++ ){
                    if(subchecks[keys[i]]){
                        main[mainKey] = true ;
                        break ; 
                    }
                }
            }
        },
        handActiveDisaplity(value,key){
            if(value)
                this.activeDisability = key ;
        },
        searchName(event){
                this.filteredName =this.nameOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        nameSelection(index=null){
            if(!index)
            this.dataObject.name={
                english:this.dataObject.name.manualInsertion.english,
                arabic:this.dataObject.name.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.dataObject.name.manualInsertion.arabic:this.dataObject.name.manualInsertion.english
            }
            else
            this.data[index].name={
                english:this.data[index].name.manualInsertion.english,
                arabic:this.data[index].name.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data[index].name.manualInsertion.arabic:this.data[index].name.manualInsertion.english
            }
            
        },
        addToTable(){
            if(!this.$v.dataObject.$invalid){
                let files =this.getBase64(this.dataObject.files)
                this.data.surgical.push({...this.dataObject,files:files});
                this.$emit("resetData")
                this.$v.dataObject.$reset()
            }
        },
        editRow(index){
        if(!this.$v.data.$invalid)
            this.editingId=index;
        },
        deleteFromTable(index){
            this.data.surgical.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.$invalid)
                this.editingId= -1 ;
        },
        getFielsFromBtn(event){
            for(let i =0 ; i< event.target.files.length ; i++)
                this.dataObject.files.push(event.target.files[i])
            
        },
        checkFileName(name){
            let type =  {video:false,image:false,pdf:false,file:false}
            if(name.endsWith('jpg') || name.endsWith('jpeg') || name.endsWith('png') || name.endsWith('bmp'))
            {
                type.image = true ;
                return type 
            }
            else if(name.endsWith('mp4')||name.endsWith('mov')||name.endsWith('avi')||name.endsWith('webm')||name.endsWith('mkv'))
            {
                type.video = true ;
                return type 
            }
            else if(name.endsWith('pdf')){
                type.pdf = true  ; 
                return type
            }
            else if(name.endsWith('docx') ||name.endsWith("ppt") || name.endsWith("pptx") || name.endsWith("doc") || name.endsWith("txt")){
                type.file = true  ; 
                return type
            }
            return type ;
        },
        
        deleteFileItem(index){
            
            this.dataObject.files.splice(index,1)
        },
        getBase64(files) {
            let results = []
            for(let i =0 ; i < files.length ; i++){
                var reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload =  ()=> {
                    results.push(reader.result)
                };
            }
            return results ;
            
        }
    },

}
</script>
<style lang="scss" scoped>

.medical-history{
    .table{
            border-radius: 34px;
            th {
                color:$name-color ;
            }
            td {
                color:$name-color ;
                font-size: 14px;
            }
            tr{
                text-align: center;
                font-size: 12px;
            }
            .table-header{
                border-bottom: 2px solid  $tradmark-color  ;
            }
    }
}
.display-files{
    
    .file-box{
        width:100px ;
        height: 100px;
        position: relative;
        video , img{
            width: 100%;
            height: 100%;
        }
    .delete{
        position: absolute;
        padding: 6px;
        background: #ddd;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: -10px;
        top: -10px;
        z-index: 4;
        width: 30px;
        height: 30px;
        img{
            width:100%;
            height: 100%;
        }
    }
    }
}

</style>
