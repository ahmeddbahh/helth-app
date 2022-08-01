<template>
    <div class="obgyn-pregUs my-4">
        <h3>{{lang[local].fetus}}</h3>
        <div class="row ">
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].number}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].number" 
                        v-model="data.fetus.common.number"
                        @change="$v.data.fetus.common.number.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.number.$invalid  && $v.data.fetus.common.number.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.number.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].number) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.number.minLen">
                            {{errors.minLengthError(lang[local].number,$v.data.fetus.common.number.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.number.maxLen">
                            {{errors.maxLengthError(lang[local].number, $v.data.fetus.common.number.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].fhm}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].fhm" 
                        v-model="data.fetus.common.fhm"
                        @change="$v.data.fetus.common.fhm.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.fhm.$invalid  && $v.data.fetus.common.fhm.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.fhm.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].fhm) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fhm.minLen">
                            {{errors.minLengthError(lang[local].fhm,$v.data.fetus.common.fhm.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fhm.maxLen">
                            {{errors.maxLengthError(lang[local].fhm, $v.data.fetus.common.fhm.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].lie}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].lie" 
                        v-model="data.fetus.common.lie"
                        @change="$v.data.fetus.common.lie.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.lie.$invalid  && $v.data.fetus.common.lie.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.lie.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].lie) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.lie.minLen">
                            {{errors.minLengthError(lang[local].lie,$v.data.fetus.common.lie.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.lie.maxLen">
                            {{errors.maxLengthError(lang[local].lie, $v.data.fetus.common.lie.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].congenitalAnomalies}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].congenitalAnomalies" 
                        v-model="data.fetus.common.congenitalAnomalies"
                        @change="$v.data.fetus.common.congenitalAnomalies.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.congenitalAnomalies.$invalid  && $v.data.fetus.common.congenitalAnomalies.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.congenitalAnomalies.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].congenitalAnomalies) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.congenitalAnomalies.minLen">
                            {{errors.minLengthError(lang[local].congenitalAnomalies,$v.data.fetus.common.congenitalAnomalies.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.congenitalAnomalies.maxLen">
                            {{errors.maxLengthError(lang[local].congenitalAnomalies, $v.data.fetus.common.congenitalAnomalies.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].fl}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].fl" 
                        v-model="data.fetus.common.fl"
                        @change="$v.data.fetus.common.fl.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.fl.$invalid  && $v.data.fetus.common.fl.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.fl.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].fl) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fl.minLen">
                            {{errors.minLengthError(lang[local].fl,$v.data.fetus.common.fl.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fl.maxLen">
                            {{errors.maxLengthError(lang[local].fl, $v.data.fetus.common.fl.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].crl}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].crl" 
                        v-model="data.fetus.common.crl"
                        @change="$v.data.fetus.common.crl.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.crl.$invalid  && $v.data.fetus.common.crl.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.crl.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].crl) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.crl.minLen">
                            {{errors.minLengthError(lang[local].crl,$v.data.fetus.common.crl.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.crl.maxLen">
                            {{errors.maxLengthError(lang[local].crl, $v.data.fetus.common.crl.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].fw}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].fw" 
                        v-model="data.fetus.common.fw"
                        @change="$v.data.fetus.common.fw.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.fw.$invalid  && $v.data.fetus.common.fw.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.fw.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].fw) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fw.minLen">
                            {{errors.minLengthError(lang[local].fw,$v.data.fetus.common.fw.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fw.maxLen">
                            {{errors.maxLengthError(lang[local].fw, $v.data.fetus.common.fw.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].fetalAge}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].fetalAge" 
                        v-model="data.fetus.common.fetalAge"
                        @change="$v.data.fetus.common.fetalAge.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.fetalAge.$invalid  && $v.data.fetus.common.fetalAge.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.fetalAge.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].fetalAge) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fetalAge.minLen">
                            {{errors.minLengthError(lang[local].fetalAge,$v.data.fetus.common.fetalAge.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fetalAge.maxLen">
                            {{errors.maxLengthError(lang[local].fetalAge, $v.data.fetus.common.fetalAge.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].viability}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].viability" 
                        v-model="data.fetus.common.viability"
                        @change="$v.data.fetus.common.viability.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.viability.$invalid  && $v.data.fetus.common.viability.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.viability.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].viability) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.viability.minLen">
                            {{errors.minLengthError(lang[local].viability,$v.data.fetus.common.viability.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.viability.maxLen">
                            {{errors.maxLengthError(lang[local].viability, $v.data.fetus.common.viability.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].movements}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].movements" 
                        v-model="data.fetus.common.movements"
                        @change="$v.data.fetus.common.movements.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.movements.$invalid  && $v.data.fetus.common.movements.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.movements.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].movements) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.movements.minLen">
                            {{errors.minLengthError(lang[local].movements,$v.data.fetus.common.movements.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.movements.maxLen">
                            {{errors.maxLengthError(lang[local].movements, $v.data.fetus.common.movements.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].presentation}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].presentation" 
                        v-model="data.fetus.common.presentation"
                        @change="$v.data.fetus.common.presentation.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.presentation.$invalid  && $v.data.fetus.common.presentation.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.presentation.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].presentation) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.presentation.minLen">
                            {{errors.minLengthError(lang[local].presentation,$v.data.fetus.common.presentation.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.presentation.maxLen">
                            {{errors.maxLengthError(lang[local].presentation, $v.data.fetus.common.presentation.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bpd}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bpd" 
                        v-model="data.fetus.common.bpd"
                        @change="$v.data.fetus.common.bpd.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.bpd.$invalid  && $v.data.fetus.common.bpd.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.bpd.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bpd) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.bpd.minLen">
                            {{errors.minLengthError(lang[local].bpd,$v.data.fetus.common.bpd.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.bpd.maxLen">
                            {{errors.maxLengthError(lang[local].bpd, $v.data.fetus.common.bpd.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].gs}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].gs" 
                        v-model="data.fetus.common.gs"
                        @change="$v.data.fetus.common.gs.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.gs.$invalid  && $v.data.fetus.common.gs.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.gs.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].gs) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.gs.minLen">
                            {{errors.minLengthError(lang[local].gs,$v.data.fetus.common.gs.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.gs.maxLen">
                            {{errors.maxLengthError(lang[local].gs, $v.data.fetus.common.gs.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].hcAc}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].hcAc" 
                        v-model="data.fetus.common.hcAc"
                        @change="$v.data.fetus.common.hcAc.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.hcAc.$invalid  && $v.data.fetus.common.hcAc.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.hcAc.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].hcAc) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.hcAc.minLen">
                            {{errors.minLengthError(lang[local].hcAc,$v.data.fetus.common.hcAc.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.hcAc.maxLen">
                            {{errors.maxLengthError(lang[local].hcAc, $v.data.fetus.common.hcAc.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].fhr}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].fhr" 
                        v-model="data.fetus.common.fhr"
                        @change="$v.data.fetus.common.fhr.$touch()" 
                        :class="{'border-error':$v.data.fetus.common.fhr.$invalid  && $v.data.fetus.common.fhr.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.common.fhr.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].fhr) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fhr.minLen">
                            {{errors.minLengthError(lang[local].fhr,$v.data.fetus.common.fhr.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.common.fhr.maxLen">
                            {{errors.maxLengthError(lang[local].fhr, $v.data.fetus.common.fhr.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            
            
        </div>
        <h3 class="mt-3">{{lang[local].amnioticFluid}}</h3>
        <div class="row">
            <div class="col-md-4 col-lg-3  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].amount}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].amount" 
                        v-model="data.fetus.amnioticFluid.amount"
                        @change="$v.data.fetus.amnioticFluid.amount.$touch()" 
                        :class="{'border-error':$v.data.fetus.amnioticFluid.amount.$invalid  && $v.data.fetus.amnioticFluid.amount.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.amnioticFluid.amount.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].amount) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.amount.minLen">
                            {{errors.minLengthError(lang[local].amount,$v.data.fetus.amnioticFluid.amount.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.amount.maxLen">
                            {{errors.maxLengthError(lang[local].amount, $v.data.fetus.amnioticFluid.amount.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].afIndex}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].afIndex" 
                        v-model="data.fetus.amnioticFluid.afIndex"
                        @change="$v.data.fetus.amnioticFluid.afIndex.$touch()" 
                        :class="{'border-error':$v.data.fetus.amnioticFluid.afIndex.$invalid  && $v.data.fetus.amnioticFluid.afIndex.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.amnioticFluid.afIndex.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].afIndex) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.afIndex.minLen">
                            {{errors.minLengthError(lang[local].afIndex,$v.data.fetus.amnioticFluid.afIndex.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.afIndex.maxLen">
                            {{errors.maxLengthError(lang[local].afIndex, $v.data.fetus.amnioticFluid.afIndex.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].turbidity}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].turbidity" 
                        v-model="data.fetus.amnioticFluid.turbidity"
                        @change="$v.data.fetus.amnioticFluid.turbidity.$touch()" 
                        :class="{'border-error':$v.data.fetus.amnioticFluid.turbidity.$invalid  && $v.data.fetus.amnioticFluid.turbidity.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.amnioticFluid.turbidity.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].turbidity) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.turbidity.minLen">
                            {{errors.minLengthError(lang[local].turbidity,$v.data.fetus.amnioticFluid.turbidity.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.turbidity.maxLen">
                            {{errors.maxLengthError(lang[local].turbidity, $v.data.fetus.amnioticFluid.turbidity.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].deepestPocket}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].deepestPocket" 
                        v-model="data.fetus.amnioticFluid.deepestPocket"
                        @change="$v.data.fetus.amnioticFluid.deepestPocket.$touch()" 
                        :class="{'border-error':$v.data.fetus.amnioticFluid.deepestPocket.$invalid  && $v.data.fetus.amnioticFluid.deepestPocket.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.amnioticFluid.deepestPocket.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].deepestPocket) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.deepestPocket.minLen">
                            {{errors.minLengthError(lang[local].deepestPocket,$v.data.fetus.amnioticFluid.deepestPocket.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.amnioticFluid.deepestPocket.maxLen">
                            {{errors.maxLengthError(lang[local].deepestPocket, $v.data.fetus.amnioticFluid.deepestPocket.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="mt-3">{{lang[local].placentaMyometrium}}</h3>
        <div class="row">
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].site}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].site" 
                        v-model="data.fetus.placentaMyometrium.site"
                        @change="$v.data.fetus.placentaMyometrium.site.$touch()" 
                        :class="{'border-error':$v.data.fetus.placentaMyometrium.site.$invalid  && $v.data.fetus.placentaMyometrium.site.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.placentaMyometrium.site.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].site) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.site.minLen">
                            {{errors.minLengthError(lang[local].site,$v.data.fetus.placentaMyometrium.site.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.site.maxLen">
                            {{errors.maxLengthError(lang[local].site, $v.data.fetus.placentaMyometrium.site.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].retroplacentalAbnormalities}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].retroplacentalAbnormalities" 
                        v-model="data.fetus.placentaMyometrium.retroplacentalAbnormalities"
                        @change="$v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.$touch()" 
                        :class="{'border-error':$v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.$invalid  && $v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].retroplacentalAbnormalities) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.minLen">
                            {{errors.minLengthError(lang[local].retroplacentalAbnormalities,$v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.maxLen">
                            {{errors.maxLengthError(lang[local].retroplacentalAbnormalities, $v.data.fetus.placentaMyometrium.retroplacentalAbnormalities.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].ovaries}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].ovaries" 
                        v-model="data.fetus.placentaMyometrium.ovaries"
                        @change="$v.data.fetus.placentaMyometrium.ovaries.$touch()" 
                        :class="{'border-error':$v.data.fetus.placentaMyometrium.ovaries.$invalid  && $v.data.fetus.placentaMyometrium.ovaries.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.placentaMyometrium.ovaries.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].ovaries) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.ovaries.minLen">
                            {{errors.minLengthError(lang[local].ovaries,$v.data.fetus.placentaMyometrium.ovaries.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.ovaries.maxLen">
                            {{errors.maxLengthError(lang[local].ovaries, $v.data.fetus.placentaMyometrium.ovaries.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].grade}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].grade" 
                        v-model="data.fetus.placentaMyometrium.grade"
                        @change="$v.data.fetus.placentaMyometrium.grade.$touch()" 
                        :class="{'border-error':$v.data.fetus.placentaMyometrium.grade.$invalid  && $v.data.fetus.placentaMyometrium.grade.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.placentaMyometrium.grade.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].grade) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.grade.minLen">
                            {{errors.minLengthError(lang[local].grade,$v.data.fetus.placentaMyometrium.grade.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.grade.maxLen">
                            {{errors.maxLengthError(lang[local].grade, $v.data.fetus.placentaMyometrium.grade.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].myometrialMasses}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].myometrialMasses" 
                        v-model="data.fetus.placentaMyometrium.myometrialMasses"
                        @change="$v.data.fetus.placentaMyometrium.myometrialMasses.$touch()" 
                        :class="{'border-error':$v.data.fetus.placentaMyometrium.myometrialMasses.$invalid  && $v.data.fetus.placentaMyometrium.myometrialMasses.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.placentaMyometrium.myometrialMasses.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].myometrialMasses) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.myometrialMasses.minLen">
                            {{errors.minLengthError(lang[local].myometrialMasses,$v.data.fetus.placentaMyometrium.myometrialMasses.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.placentaMyometrium.myometrialMasses.maxLen">
                            {{errors.maxLengthError(lang[local].myometrialMasses, $v.data.fetus.placentaMyometrium.myometrialMasses.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="mt-3">{{lang[local].other}}</h3>
        <div class="row">
            <div class="col-md-8 col-lg-6  my-3">
                <div class="form-group ">
                    <!-- <label class="mx-2">{{lang[local].other}}</label> -->
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].other" 
                        v-model="data.fetus.other"
                        @change="$v.data.fetus.other.$touch()" 
                        :class="{'border-error':$v.data.fetus.other.$invalid  && $v.data.fetus.other.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.fetus.other.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].other) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.other.minLen">
                            {{errors.minLengthError(lang[local].other,$v.data.fetus.other.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fetus.other.maxLen">
                            {{errors.maxLengthError(lang[local].other, $v.data.fetus.other.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-8 col-lg-6  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].comment}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].comment" 
                        v-model="data.comment"
                        @change="$v.data.comment.$touch()" 
                        :class="{'border-error':$v.data.comment.$invalid  && $v.data.comment.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.comment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].comment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.comment.minLen">
                            {{errors.minLengthError(lang[local].comment,$v.data.comment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.comment.maxLen">
                            {{errors.maxLengthError(lang[local].comment, $v.data.comment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from "primevue/inputtext";
import {minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../helpers/errors";
export default {
    props:['data'],
    components:{
        InputText
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    fetus:"Fetus",
                    amnioticFluid:"Amniotic Fluid",
                    placentaMyometrium:"Placenta myometrium",
                    other:"Other",
                    comment:"Comment",
                    //fetus
                    number: "Number", 
                    fhm: "FHM", 
                    lie: "LIE", 
                    congenitalAnomalies: "Congenital anomalies", 
                    fl: "FL", 
                    crl: "CRL", 
                    fw: "FW", 
                    fetalAge: "FETAL_AGE", 
                    viability: "Viablility", 
                    movements: "Movements", 
                    presentation: "Presentation", 
                    bpd: "B P D", 
                    gs: "GS", 
                    hcAc: "HC : AC", 
                    fhr: "FHR",
                    //amnioticFluid
                    amount:"Amount", 
                    afIndex:"AF Index", 
                    turbidity:"Turbidity", 
                    deepestPocket:"Deepest pocket", 
                    //placentaMyometrium
                    site: "Site", 
                    retroplacentalAbnormalities: "Retroplacental abnormalities", 
                    ovaries: "Ovaries", 
                    grade: "Grade", 
                    myometrialMasses: "Myometrial masses" 
            
                },
                ar:{
                    fetus:"Fetus",
                    amnioticFluid:"Amniotic Fluid",
                    placentaMyometrium:"Placenta myometrium",
                    other:"Other",
                    comment:"Comment",
                    //fetus
                    number: "Number", 
                    fhm: "FHM", 
                    lie: "LIE", 
                    congenitalAnomalies: "Congenital anomalies", 
                    fl: "FL", 
                    crl: "CRL", 
                    fw: "FW", 
                    fetalAge: "FETAL_AGE", 
                    viability: "Viablility", 
                    movements: "Movements", 
                    presentation: "Presentation", 
                    bpd: "B P D", 
                    gs: "GS", 
                    hcAc: "HC : AC", 
                    fhr: "FHR",
                    //amnioticFluid
                    amount:"Amount", 
                    afIndex:"AF Index", 
                    turbidity:"Turbidity", 
                    deepestPocket:"Deepest pocket", 
                    //placentaMyometrium
                    site: "Site", 
                    retroplacentalAbnormalities: "Retroplacental abnormalities", 
                    ovaries: "Ovaries", 
                    grade: "Grade", 
                    myometrialMasses: "Myometrial masses" 
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    validations:{
        data:{
            fetus:{
                common:{
                    number:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    fhm:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    lie:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    congenitalAnomalies:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    fl:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    crl:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    fw:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    fetalAge:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    viability:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    movements:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    presentation:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    bpd:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    gs:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    hcAc:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    fhr:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
        

                },
                amnioticFluid: {
                    amount:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    afIndex:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    turbidity:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    deepestPocket:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                placentaMyometrium:{
                    site:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    retroplacentalAbnormalities:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    ovaries:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    grade:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    myometrialMasses:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },

                },
                other:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                }
            },
            comment:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            }
        }

    
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setOBJGYNPregUsIsValid",this.$v.data.$invalid );
            },
            deep: true,
        }
        
    },
    
}
</script>


