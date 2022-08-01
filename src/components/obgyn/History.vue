<template>
    <div class="obg-History">
        <h3 class="mt-3">{{lang[local].mainItems}}</h3>
        <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                        <label>{{lang[local].surgicalHistory}}</label>
                        <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                            <i class="pi pi-search" />                        
                            <AutoComplete
                                :placeholder="lang[local].surgicalHistory"
                                v-model="data.mainItems.surgicalHistory.manualInsertion" 
                                :suggestions="filteredSurgicalHistory"
                                @item-select="surgicalHistorySelection"
                                @complete="searchSurgicalHistory($event)" 
                                :field="local=='ar'?'arabic':'english'" 
                            />
                        </span>
                        <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.mainItems.surgicalHistory.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].surgicalHistory) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.surgicalHistory.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].surgicalHistory,$v.data.mainItems.surgicalHistory.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.surgicalHistory.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].surgicalHistory, $v.data.mainItems.surgicalHistory.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                        
                    </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                        <label>{{lang[local].pastHistory}}</label>
                        <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                            <i class="pi pi-search" />                        
                            <AutoComplete
                                :placeholder="lang[local].pastHistory"
                                v-model="data.mainItems.pastHistory.manualInsertion" 
                                :suggestions="filteredPastHistoryOptions"
                                @item-select="pastHistorySelection"
                                @complete="searchPastHistory($event)" 
                                :field="local=='ar'?'arabic':'english'" 
                                
                            />
                        </span>
                        <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.mainItems.pastHistory.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].pastHistory) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.pastHistory.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].pastHistory,$v.data.mainItems.pastHistory.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.pastHistory.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].pastHistory, $v.data.mainItems.pastHistory.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                        
                    </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                        <label>{{lang[local].presentRiskFactors}}</label>
                        <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                            <i class="pi pi-search" />                        
                            <AutoComplete
                                :placeholder="lang[local].presentRiskFactors"
                                v-model="data.mainItems.presentRiskFactors.manualInsertion" 
                                :suggestions="filteredPresentRiskFactorsOptions"
                                @item-select="presentRiskFactorsSelection"
                                @complete="searchPresentRiskFactors($event)" 
                                :field="local=='ar'?'arabic':'english'" 
                                
                            />
                        </span>
                        <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.mainItems.presentRiskFactors.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].presentRiskFactors) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.presentRiskFactors.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].presentRiskFactors,$v.data.mainItems.presentRiskFactors.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.presentRiskFactors.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].presentRiskFactors, $v.data.mainItems.presentRiskFactors.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                        
                    </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                        <label>{{lang[local].Remarks}}</label>
                        <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                            <i class="pi pi-search" />                        
                            <AutoComplete
                                :placeholder="lang[local].Remarks"
                                v-model="data.mainItems.Remarks.manualInsertion" 
                                :suggestions="filteredRemarksOptions"
                                @item-select="presentRemarksSelection"
                                @complete="searchRemarksFactors($event)" 
                                :field="local=='ar'?'arabic':'english'" 
                                
                            />
                        </span>
                        <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.mainItems.Remarks.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].Remarks) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.Remarks.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].Remarks,$v.data.mainItems.Remarks.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.mainItems.Remarks.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].Remarks, $v.data.mainItems.Remarks.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                        
                    </div>
            </div>
        </div>
        <h3 class="mt-3">{{lang[local].otherData}}</h3>
        <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label>{{lang[local].husbandName}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].husbandName"
                            v-model="data.otherData.husbandName.manualInsertion" 
                            :suggestions="filteredHusbandNameOptions"
                            @item-select="presentHusbandNameSelection"
                            @complete="searchHusbandNameFactors($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.husbandName.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].husbandName) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.husbandName.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].husbandName,$v.data.otherData.husbandName.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.husbandName.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].husbandName, $v.data.otherData.husbandName.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
                <div class="my-3 d-flex align-items-center justify-content-between gap-2">
                    <label class="mx-3">{{lang[local].thereIsAPreviousMarriage}}</label>
                    <Checkbox
                    v-model="data.otherData.Marriage.thereIsAPreviousMarriage" 
                    :binary="true" 
                    ></Checkbox>
                </div>
                <div class="my-3 d-flex align-items-center justify-content-between gap-2">
                    <label class="mx-3">{{lang[local].sonsOfThisMarriage}}</label>
                    <Checkbox
                    v-model="data.otherData.Marriage.sonsOfThisMarriage" 
                    :binary="true" 
                    ></Checkbox>
                </div> 
                <div class="my-3 d-flex align-items-center justify-content-between gap-2">
                    <label class="mx-3">{{lang[local].pregnant}}</label>
                    <Checkbox
                    v-model="data.otherData.Marriage.pregnant" 
                    :binary="true" 
                    ></Checkbox>
                </div>
            
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].age}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].age" 
                        v-model="data.otherData.age"
                        @change="$v.data.otherData.age.$touch()" 
                        :class="{'border-error':!$v.data.otherData.age.numeric  && $v.data.otherData.age.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.age.numeric && $v.data.otherData.age.$dirty">
                            {{ errors.inputError(lang[local].age) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].ageAtStartOfMenstruation}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].ageAtStartOfMenstruation" 
                        v-model="data.otherData.ageAtStartOfMenstruation"
                        @change="$v.data.otherData.ageAtStartOfMenstruation.$touch()" 
                        :class="{'border-error':!$v.data.otherData.ageAtStartOfMenstruation.numeric  && $v.data.otherData.ageAtStartOfMenstruation.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.ageAtStartOfMenstruation.numeric && $v.data.otherData.ageAtStartOfMenstruation.$dirty">
                            {{ errors.inputError(lang[local].ageAtStartOfMenstruation) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].marriagePeriod}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].marriagePeriod" 
                        v-model="data.otherData.marriagePeriod"
                        @change="$v.data.otherData.marriagePeriod.$touch()" 
                        :class="{'border-error':!$v.data.otherData.marriagePeriod.numeric  && $v.data.otherData.marriagePeriod.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.marriagePeriod.numeric && $v.data.otherData.marriagePeriod.$dirty">
                            {{ errors.inputError(lang[local].marriagePeriod) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].pregnancyTimes}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].pregnancyTimes" 
                        v-model="data.otherData.pregnancyTimes"
                        @change="$v.data.otherData.pregnancyTimes.$touch()" 
                        :class="{'border-error':!$v.data.otherData.pregnancyTimes.numeric  && $v.data.otherData.pregnancyTimes.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.pregnancyTimes.numeric && $v.data.otherData.pregnancyTimes.$dirty">
                            {{ errors.inputError(lang[local].pregnancyTimes) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].numberOfBirthsFemales}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].numberOfBirthsFemales" 
                        v-model="data.otherData.numberOfBirthsFemales"
                        @change="$v.data.otherData.numberOfBirthsFemales.$touch()" 
                        :class="{'border-error':!$v.data.otherData.numberOfBirthsFemales.numeric  && $v.data.otherData.numberOfBirthsFemales.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.numberOfBirthsFemales.numeric && $v.data.otherData.numberOfBirthsFemales.$dirty">
                            {{ errors.inputError(lang[local].numberOfBirthsFemales) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].numberOfBirthsMales}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].numberOfBirthsMales" 
                        v-model="data.otherData.numberOfBirthsMales"
                        @change="$v.data.otherData.numberOfBirthsMales.$touch()" 
                        :class="{'border-error':!$v.data.otherData.numberOfBirthsMales.numeric  && $v.data.otherData.numberOfBirthsMales.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.numberOfBirthsMales.numeric && $v.data.otherData.numberOfBirthsMales.$dirty">
                            {{ errors.inputError(lang[local].numberOfBirthsMales) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].TimesAMiscarriage}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].TimesAMiscarriage" 
                        v-model="data.otherData.TimesAMiscarriage"
                        @change="$v.data.otherData.TimesAMiscarriage.$touch()" 
                        :class="{'border-error':!$v.data.otherData.TimesAMiscarriage.numeric  && $v.data.otherData.TimesAMiscarriage.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.TimesAMiscarriage.numeric && $v.data.otherData.TimesAMiscarriage.$dirty">
                            {{ errors.inputError(lang[local].TimesAMiscarriage) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2 label-sm">{{lang[local].theAmountOfBleedingInTheMenstrual}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].theAmountOfBleedingInTheMenstrual" 
                        v-model="data.otherData.theAmountOfBleedingInTheMenstrual"
                        @change="$v.data.otherData.theAmountOfBleedingInTheMenstrual.$touch()" 
                        :class="{'border-error':$v.data.otherData.theAmountOfBleedingInTheMenstrual.$invalid  && $v.data.otherData.theAmountOfBleedingInTheMenstrual.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.theAmountOfBleedingInTheMenstrual.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].theAmountOfBleedingInTheMenstrual) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.theAmountOfBleedingInTheMenstrual.minLen">
                            {{errors.minLengthError(lang[local].theAmountOfBleedingInTheMenstrual,$v.data.otherData.theAmountOfBleedingInTheMenstrual.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.theAmountOfBleedingInTheMenstrual.maxLen">
                            {{errors.maxLengthError(lang[local].theAmountOfBleedingInTheMenstrual, $v.data.otherData.theAmountOfBleedingInTheMenstrual.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].bleedingDays}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].bleedingDays" 
                        v-model="data.otherData.bleedingDays"
                        @change="$v.data.otherData.bleedingDays.$touch()" 
                        :class="{'border-error':!$v.data.otherData.bleedingDays.numeric  && $v.data.otherData.bleedingDays.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.bleedingDays.numeric && $v.data.otherData.bleedingDays.$dirty">
                            {{ errors.inputError(lang[local].bleedingDays) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].regularMenstruation}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].regularMenstruation" 
                        v-model="data.otherData.regularMenstruation"
                        @change="$v.data.otherData.regularMenstruation.$touch()" 
                        :class="{'border-error':$v.data.otherData.regularMenstruation.$invalid  && $v.data.otherData.regularMenstruation.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.regularMenstruation.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].regularMenstruation) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.regularMenstruation.minLen">
                            {{errors.minLengthError(lang[local].regularMenstruation,$v.data.otherData.regularMenstruation.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.regularMenstruation.maxLen">
                            {{errors.maxLengthError(lang[local].regularMenstruation, $v.data.otherData.regularMenstruation.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].ageOfMenopause}}</label>
                    <InputText 
                        type="number" 
                        :placeholder="lang[local].ageOfMenopause" 
                        v-model="data.otherData.ageOfMenopause"
                        @change="$v.data.otherData.ageOfMenopause.$touch()" 
                        :class="{'border-error':!$v.data.otherData.ageOfMenopause.numeric  && $v.data.otherData.ageOfMenopause.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.ageOfMenopause.numeric && $v.data.otherData.ageOfMenopause.$dirty">
                            {{ errors.inputError(lang[local].ageOfMenopause) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2 label-sm">{{lang[local].theFirstDayOfTheLastMenstrualPeriod}}</label>
                    <Calendar 
                    :showIcon="true"  
                    :placeholder="lang[local].theFirstDayOfTheLastMenstrualPeriod" 
                    :manualInput="false" 
                    :monthNavigator="true" 
                    :yearNavigator="true" 
                    yearRange="1950:2030" 
                    :touchUI.sync="displayUI" 
                    dateFormat="mm-dd-yy"
                    v-model="data.otherData.theFirstDayOfTheLastMenstrualPeriod" 
                    :class="{'border-error':!$v.data.otherData.theFirstDayOfTheLastMenstrualPeriod.notValidDate  && $v.data.otherData.theFirstDayOfTheLastMenstrualPeriod.$dirty}"
                    
                    />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.theFirstDayOfTheLastMenstrualPeriod.notValidDate && $v.data.otherData.theFirstDayOfTheLastMenstrualPeriod.$dirty">
                            {{ errors.inputError(lang[local].theFirstDayOfTheLastMenstrualPeriod) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].usingAMethodOfContraception}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].usingAMethodOfContraception" 
                        v-model="data.otherData.usingAMethodOfContraception"
                        @change="$v.data.otherData.usingAMethodOfContraception.$touch()" 
                        :class="{'border-error':$v.data.otherData.usingAMethodOfContraception.$invalid  && $v.data.otherData.usingAMethodOfContraception.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.usingAMethodOfContraception.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].usingAMethodOfContraception) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.usingAMethodOfContraception.minLen">
                            {{errors.minLengthError(lang[local].usingAMethodOfContraception,$v.data.otherData.usingAMethodOfContraception.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.usingAMethodOfContraception.maxLen">
                            {{errors.maxLengthError(lang[local].usingAMethodOfContraception, $v.data.otherData.usingAMethodOfContraception.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                        <label>{{lang[local].typeOfContraception}}</label>
                        <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                            <i class="pi pi-search" />                        
                            <AutoComplete
                                :placeholder="lang[local].typeOfContraception"
                                v-model="data.otherData.typeOfContraception.manualInsertion" 
                                :suggestions="filteredTypeOfContraceptionOptions"
                                @item-select="typeOfContraceptionSelection"
                                @complete="searchTypeOfContraception($event)" 
                                :field="local=='ar'?'arabic':'english'" 
                                
                            />
                        </span>
                        <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.otherData.typeOfContraception.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].typeOfContraception) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.typeOfContraception.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].typeOfContraception,$v.data.otherData.typeOfContraception.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.otherData.typeOfContraception.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].typeOfContraception, $v.data.otherData.typeOfContraception.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                        
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoComplete from 'primevue/autocomplete';
import InputText from "primevue/inputtext";
import Checkbox from 'primevue/checkbox';
import {minLength,maxLength,numeric} from "vuelidate/lib/validators";
import { notContainsHtmlTags,notValidDate} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../helpers/errors";
import Calendar from 'primevue/calendar';
export default {
    props:['data'],
    components:{
        AutoComplete,
        Checkbox,
        InputText,
        Calendar
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            lang:{
                en:{
                    mainItems:"Main items",
                    otherData:"Other Data",
                    surgicalHistory:"Surgical History",
                    pastHistory:"Past History",
                    presentRiskFactors:"Present Risk Factors",
                    Remarks:"Remarks",
                    husbandName:"Husband Name",
                    marriagePeriod:"Marriage period",
                    thereIsAPreviousMarriage:"there is s previous marriage",
                    sonsOfThisMarriage:"Sons of this Marriage",
                    pregnant:"Pregnant",
                    age:"Age",
                    ageAtStartOfMenstruation:"Age At Start Of Menstruation",
                    theAmountOfBleedingInTheMenstrual:"The amount of bleeding in The menstrual",
                    bleedingDays:"Bleeding days",
                    regularMenstruation:"Regular menstruation",
                    ageOfMenopause:"Age of menopause",
                    theFirstDayOfTheLastMenstrualPeriod:"the first day of the last menstrual Period",
                    usingAMethodOfContraception:"Using a method of contraception",
                    typeOfContraception:"Type of contraception",
                    pregnancyTimes:"Pregnancy times",
                    numberOfBirthsFemales:"number of births females",
                    numberOfBirthsMales:"number of births males",
                    TimesAMiscarriage:"Times a miscarriage",
                },
                ar:{
                    mainItems:"Main items",
                    otherData:"Other Data",
                    surgicalHistory:"Surgical History",
                    pastHistory:"Past History",
                    presentRiskFactors:"Present Risk Factors",
                    Remarks:"Remarks",
                    husbandName:"Husband Name",
                    marriagePeriod:"Marriage period",
                    thereIsAPreviousMarriage:"there is s previous marriage",
                    sonsOfThisMarriage:"Sons of this Marriage",
                    pregnant:"Pregnant",
                    age:"Age",
                    ageAtStartOfMenstruation:"Age At Start Of Menstruation",
                    theAmountOfBleedingInTheMenstrual:"The amount of bleeding in The menstrual",
                    bleedingDays:"Bleeding days",
                    regularMenstruation:"Regular menstruation",
                    ageOfMenopause:"Age of menopause",
                    theFirstDayOfTheLastMenstrualPeriod:"the first day of the last menstrual Period",
                    usingAMethodOfContraception:"Using a method of contraception",
                    typeOfContraception:"Type of contraception",
                    pregnancyTimes:"Pregnancy times",
                    numberOfBirthsFemales:"number of births females",
                    numberOfBirthsMales:"number of births males",
                    TimesAMiscarriage:"Times a miscarriage",
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            surgicalHistoryoPtions:[
                {english:"Appendicectomised",arabic:"Appendicectomised"},
                {english:"Breast lumpectomy",arabic:"Breast lumpectomy"},
                {english:"Carpal tunnel release",arabic:"Carpal tunnel release"},
                {english:"Cerclage =  times",arabic:"Cerclage =  times "},
                {english:"Cholecyctomised ",arabic:"Cholecyctomised "},
                {english:"Classical repair",arabic:"Classical repair"},
                {english:"Cx dilatation ",arabic:"Cx dilatation"},
                {english:"D & C =  times ",arabic:"D & C =  times"},
                {english:"Haemrrhoidectomy ",arabic:"Haemrrhoidectomy"},
                {english:"Herneorrhaphy ",arabic:"Herneorrhaphy"},
                {english:"Kidney stone ",arabic:"Kidney stone"},
                {english:"Tubal ligation",arabic:"Tubal ligation"},
                {english:"Tubal ligation",arabic:"Tubal ligation"},
                {english:"Thyroidectomised",arabic:"Thyroidectomised"},
                {english:"Spleenectomised",arabic:"Spleenectomised"},
                {english:"Previous= C.S",arabic:"Previous= C.S"},
                {english:"Myomectomised",arabic:"Myomectomised"},
                {english:"MV replacement",arabic:"MV replacement"},
                {english:"Laparotmy for tortion ovarian cyst ",arabic:"Laparotmy for tortion ovarian cyst"},
                {english:"Laparotmy for ovarian cyst ",arabic:"Laparotmy for ovarian cyst "},
                {english:"Laparotmy for ectopic pregnancy - without slpingectomy ",arabic:"Laparotmy for ectopic pregnancy - without slpingectomy"},
                {english:"Laparotmy for ectopic pregnancy - slpingectomised ",arabic:"Laparotmy for ectopic pregnancy - slpingectomised"},
                {english:"Laparotmy for ectopic pregnancy",arabic:"Laparotmy for ectopic pregnancy"},
                {english:"Laparoscopy - surgical",arabic:"Laparoscopy - surgical"},
                {english:"Laparoscopy - diagnostic",arabic:"Laparoscopy - diagnostic"},
                {english:"other ",arabic:"other"},
            ],
            filteredSurgicalHistory:[],
            
            pastHistoryOptions:[
                {english:"1st. trimester abortion ( times ) successive . unsuccissive . with no rule",arabic:"1st. trimester abortion ( times ) successive . unsuccissive . with no rule"},
                {english:"1st. trimester abortion ( once )",arabic:"1st. trimester abortion ( once )"},
                {english:"1st. trimester abortion ( thrice ) successive - unsuccissive",arabic:"1st. trimester abortion ( thrice ) successive - unsuccissive"},
                {english:"1st. trimester abortion ( twice ) successive - unsuccissive",arabic:"1st. trimester abortion ( twice ) successive - unsuccissive"},
                {english:"2nd. trimester abortion ( times ) successive . unsuccissive . with no rule  ",arabic:"2nd. trimester abortion ( times ) successive . unsuccissive . with no rule"},
                {english:"2nd. trimester abortion ( twice ) successive - unsuccissive ",arabic:"2nd. trimester abortion ( twice ) successive - unsuccissive "},
                {english:"ASD ",arabic:"ASD"},
                {english:"Allergy",arabic:"Allergy"},
                {english:"Anaemia",arabic:"Anaemia"},
                {english:"Anal fissure ",arabic:"Anal fissure "},
                {english:"Antepartum hge",arabic:"Antepartum hge"},
                {english:"Arthralgia",arabic:"Arthralgia"},
                {english:"Antepartum he",arabic:"Antepartum he"},
                {english:"Axillary L.N. neoplasiaother",arabic:"Axillary L.N. neoplasiaother"},
                {english:"Babies with cerebral palsy",arabic:"Babies with cerebral palsy"},
                {english:"Babies with devloped hepatosplenomegally after delivery",arabic:"Babies with devloped hepatosplenomegally after delivery"},
                {english:"Bacteruria ",arabic:"Bacteruria "},
                {english:"Bad obstetric history",arabic:"Bad obstetric history"},
                {english:"Blood transfusion",arabic:"Blood transfusion"},
                {english:"Bronchial Asthma",arabic:"Bronchial Asthma"},
                {english:"COPD",arabic:"COPD"},
                {english:"Calcular Cholecystitis",arabic:"Calcular Cholecystitis"},
                {english:"Cerclage",arabic:"Cerclage"},
                {english:"Cervical tear",arabic:"Cervical tear"},
                {english:"Cholecystitis",arabic:"Cholecystitis"},
                {english:"D&C biopsy",arabic:"D&C biopsy"},
                {english:"D.V.T.",arabic:"D.V.T."},
                {english:"DM",arabic:"DM"},
                {english:"Disc",arabic:"Disc"},
                {english:"Dyslipidaemia",arabic:"Dyslipidaemia"},
                {english:"Ectopic pregnancy ttted by methotrexate",arabic:"Ectopic pregnancy ttted by methotrexate"},
                {english:"Epilepsy",arabic:"Epilepsy"},
                {english:"Exploration of rupture ovarian cyst ",arabic:"Exploration of rupture ovarian cyst "},
                {english:"GERD",arabic:"GERD"},
                {english:"Gastritis",arabic:"Gastritis"},
                {english:"Gestational Diabetes ",arabic:"Gestational Diabetes "},
                {english:"H.of preterm labour",arabic:"H.of preterm labour"},
                {english:"HTN ",arabic:"HTN "},
                {english:"Headache - frontal",arabic:"Headache - frontal"},
                {english:"Hepatitis - c",arabic:"Hepatitis - c"},
                {english:"History of polyhydramnios",arabic:"History of polyhydramnios"},
                {english:"History of postpartum pyrexia",arabic:"History of postpartum pyrexia"},
                {english:"Home abortion ",arabic:"Home abortion "},
                {english:"Hydros fetalis ",arabic:"Hydros fetalis "},
                {english:"Hypertension",arabic:"Hypertension"},

            ],
            filteredPastHistoryOptions:[],
            presentRiskFactorsOptions:[
            ],
            filteredPresentRiskFactorsOptions:[],
            remarksOptions:[
                {english:"+ve HBsAg",arabic:"+ve HBsAg"},
                {english:"Asthmatic patient",arabic:"Asthmatic patient"},
                {english:"patient",arabic:"patient"},
                {english:"Bad obstetric history",arabic:"Bad obstetric history"},
                {english:"Bicornuate uterus",arabic:"Bicornuate uterus"},
                {english:"Breech",arabic:"Breech , "},
                {english:"Cerclage",arabic:"Cerclage"},
                {english:"Diabetes",arabic:"Diabetes"},
                {english:"Elderly primigravida",arabic:"Elderly primigravida"},
                {english:"Endometrial polyp",arabic:"Endometrial polyp"},
                {english:"Fibroid with pregnancy",arabic:"Fibroid with pregnancy"},
                {english:"Gestational Diabetes",arabic:"Gestational Diabetes"},
                {english:"Grandmultipara",arabic:"Grandmultipara"},
                {english:"HCV + ve",arabic:"HCV + ve"},
                {english:"History of trauma",arabic:"History of trauma"},
                {english:"History of unexplained IUFD",arabic:"History of unexplained IUFD"},
                {english:"Hypertensive",arabic:"Hypertensive"},
                {english:"Hypothyroidism",arabic:"Hypothyroidism"},
                {english:"Hydrosalpinx Rt. tube",arabic:"Hydrosalpinx Rt. tube"},
                {english:"ICSI",arabic:"ICSI"},
                {english:"Incompetent Cx Os",arabic:"Incompetent Cx Os"},
                {english:"Last delivery s.ys",arabic:"Last delivery s.ys"},
                {english:"Multiple pregnancy - twins",arabic:"Multiple pregnancy - twins"},
                {english:"Myoma with pregnancy",arabic:"Myoma with pregnancy"},
                {english:"Needs cerclage in the next pregnancies",arabic:"Needs cerclage in the next pregnancies"},
                {english:"Oligohydramnios",arabic:"Oligohydramnios"},
                {english:"On psychotherapy",arabic:"On psychotherapy"},
                {english:"Other fetal demise",arabic:"Other fetal demise"},
                {english:"Perimenopausal ut. bleeding",arabic:"Perimenopausal ut. bleeding"},
                {english:"Piles",arabic:"Piles"},
                {english:"Placenta insufficiency",arabic:"Placenta insufficiency"},
                {english:"Placenta on the site of the scar",arabic:"Placenta on the site of the scar"},
                {english:"Placenta praevia",arabic:"Placenta praevia"},
                {english:"Post date",arabic:"Post date"},
                {english:"Precious baby (1ry ifertility years)",arabic:"Precious baby (1ry ifertility years)"},
                {english:"Precious baby (male baby)",arabic:"Precious baby (male baby)"},
                {english:"Pregnancy on IUD",arabic:"Pregnancy on IUD"},
                {english:"Preterm labours",arabic:"Preterm labours"},
                {english:"Previous CS",arabic:"Previous CS"},
                {english:"Recurrent 1st. trimester abortion=Ab.",arabic:"Recurrent 1st. trimester abortion=Ab."},
                {english:"Rh -- ve ( husband Rh +ve )",arabic:"Rh -- ve ( husband Rh +ve )"},
                {english:"Rheumatic heart",arabic:"Rheumatic heart"},
                {english:"Thrombocytopenia",arabic:"Thrombocytopenia"},
                {english:"Toxoplasma IgG + ve",arabic:"Toxoplasma IgG + ve"},
                {english:"Toxoplasma IgM + ve",arabic:"Toxoplasma IgM + ve"},
                {english:"Varicosities",arabic:"Varicosities"},
                {english:"X - ray exposure",arabic:"X - ray exposure"},
                {english:"bacteruria",arabic:"bacteruria"},
                {english:"morbid fetus",arabic:"morbid fetus"},
            ],
            filteredRemarksOptions:[],
            husbandNameOptions:[],
            filteredHusbandNameOptions:[],
            
            typeOfContraceptionOptions:[],
            filteredTypeOfContraceptionOptions:[],
            displayUI:false,
        }
    },
    created(){
        this.displayUI = window.innerWidth <=425 ;
    },
    validations:{
        data:{
            mainItems:{
                surgicalHistory:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                pastHistory:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                presentRiskFactors:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                Remarks:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
            },
            otherData:{
                husbandName:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                age:{
                    numeric
                },
                ageAtStartOfMenstruation:{
                    numeric
                },
                marriagePeriod:{
                    numeric
                },
                pregnancyTimes:{
                    numeric
                },
                numberOfBirthsFemales:{
                    numeric
                },
                numberOfBirthsMales:{
                    numeric
                },
                TimesAMiscarriage:{
                    numeric
                },
                theAmountOfBleedingInTheMenstrual:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                bleedingDays:{
                    numeric
                },
                regularMenstruation:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                ageOfMenopause:{
                    numeric
                },
                theFirstDayOfTheLastMenstrualPeriod:{
                    notValidDate(val) {
                        if (!val) return true;
                        return !notValidDate(val);
                    },
                },
                usingAMethodOfContraception:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                typeOfContraception:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                
            },
        }
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setOBJGYNHistoryIsValid",this.$v.data.$invalid );
            },
            deep: true,
        },
    },
    methods:{
        searchSurgicalHistory(event){
                this.filteredSurgicalHistory =this.surgicalHistoryoPtions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        surgicalHistorySelection(){
            this.data.mainItems.surgicalHistory={
                english:this.data.mainItems.surgicalHistory.manualInsertion.english,
                arabic:this.data.mainItems.surgicalHistory.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.mainItems.surgicalHistory.manualInsertion.arabic:this.data.mainItems.surgicalHistory.manualInsertion.english
            }
            
        },
        searchPastHistory(event){
                this.filteredPastHistoryOptions =this.pastHistoryOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        pastHistorySelection(){
            this.data.mainItems.pastHistory={
                english:this.data.mainItems.pastHistory.manualInsertion.english,
                arabic:this.data.mainItems.pastHistory.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.mainItems.pastHistory.manualInsertion.arabic:this.data.mainItems.pastHistory.manualInsertion.english
            }
        },
        searchPresentRiskFactors(event){
                this.filteredPresentRiskFactorsOptions =this.presentRiskFactorsOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        presentRiskFactorsSelection(){
            this.data.mainItems.presentRiskFactors={
                english:this.data.mainItems.presentRiskFactors.manualInsertion.english,
                arabic:this.data.mainItems.presentRiskFactors.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.mainItems.presentRiskFactors.manualInsertion.arabic:this.data.mainItems.presentRiskFactors.manualInsertion.english
            }
        },
        searchRemarksFactors(event){
                this.filteredRemarksOptions =this.remarksOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        presentRemarksSelection(){
            this.data.mainItems.Remarks={
                english:this.data.mainItems.Remarks.manualInsertion.english,
                arabic:this.data.mainItems.Remarks.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.mainItems.Remarks.manualInsertion.arabic:this.data.mainItems.Remarks.manualInsertion.english
            }
        },
        searchHusbandNameFactors(event){
                this.filteredHusbandNameOptions =this.husbandNameOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        presentHusbandNameSelection(){
            this.data.otherData.husbandName={
                english:this.data.otherData.husbandName.manualInsertion.english,
                arabic:this.data.otherData.husbandName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.otherData.husbandName.manualInsertion.arabic:this.data.otherData.husbandName.manualInsertion.english
            }
        },
        searchTypeOfContraception(event){
                this.filteredTypeOfContraceptionOptions =this.typeOfContraceptionOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        typeOfContraceptionSelection(){
            this.data.otherData.typeOfContraception={
                english:this.data.otherData.typeOfContraception.manualInsertion.english,
                arabic:this.data.otherData.typeOfContraception.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.otherData.typeOfContraception.manualInsertion.arabic:this.data.otherData.typeOfContraception.manualInsertion.english
            }
        },
    },
    
}
</script>
<style lang="scss" scoped>
.obg-History{
    .label-sm{
        font-size: 9px;
    }
}

</style>