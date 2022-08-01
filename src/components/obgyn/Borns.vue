<template>
    <div class="Borns">
        <div class="row ">
            <div class="col-md-6 col-lg-4 my-4">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bornPlace}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bornPlace" 
                        v-model="data.common.bornPlace"
                        @change="$v.data.common.bornPlace.$touch()" 
                        :class="{'border-error':$v.data.common.bornPlace.$invalid  && $v.data.common.bornPlace.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.common.bornPlace.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bornPlace) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.bornPlace.minLen">
                            {{errors.minLengthError(lang[local].bornPlace,$v.data.common.bornPlace.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.bornPlace.maxLen">
                            {{errors.maxLengthError(lang[local].bornPlace, $v.data.common.bornPlace.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-4">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].motherComplications}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].motherComplications" 
                        v-model="data.common.motherComplications"
                        @change="$v.data.common.motherComplications.$touch()" 
                        :class="{'border-error':$v.data.common.motherComplications.$invalid  && $v.data.common.motherComplications.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.common.motherComplications.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].motherComplications) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.motherComplications.minLen">
                            {{errors.minLengthError(lang[local].motherComplications,$v.data.common.motherComplications.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.motherComplications.maxLen">
                            {{errors.maxLengthError(lang[local].motherComplications, $v.data.common.motherComplications.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-4">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bornMethod}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bornMethod" 
                        v-model="data.common.bornMethod"
                        @change="$v.data.common.bornMethod.$touch()" 
                        :class="{'border-error':$v.data.common.bornMethod.$invalid  && $v.data.common.bornMethod.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.common.bornMethod.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bornMethod) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.bornMethod.minLen">
                            {{errors.minLengthError(lang[local].bornMethod,$v.data.common.bornMethod.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.bornMethod.maxLen">
                            {{errors.maxLengthError(lang[local].bornMethod, $v.data.common.bornMethod.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-4">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].childComplications}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].childComplications" 
                        v-model="data.common.childComplications"
                        @change="$v.data.common.childComplications.$touch()" 
                        :class="{'border-error':$v.data.common.childComplications.$invalid  && $v.data.common.childComplications.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.common.childComplications.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].childComplications) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.childComplications.minLen">
                            {{errors.minLengthError(lang[local].childComplications,$v.data.common.childComplications.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.childComplications.maxLen">
                            {{errors.maxLengthError(lang[local].childComplications, $v.data.common.childComplications.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 my-4">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bornResult}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bornResult" 
                        v-model="data.common.bornResult"
                        @change="$v.data.common.bornResult.$touch()" 
                        :class="{'border-error':$v.data.common.bornResult.$invalid  && $v.data.common.bornResult.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.common.bornResult.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bornResult) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.bornResult.minLen">
                            {{errors.minLengthError(lang[local].bornResult,$v.data.common.bornResult.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.common.bornResult.maxLen">
                            {{errors.maxLengthError(lang[local].bornResult, $v.data.common.bornResult.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-5">
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].pregnancyNo}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].pregnancyNo" 
                            v-model="tableData.pregnancyNo"
                            @change="$v.tableData.pregnancyNo.$touch()" 
                            :class="{'border-error':$v.tableData.pregnancyNo.$invalid  && $v.tableData.pregnancyNo.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.pregnancyNo.numeric && $v.tableData.pregnancyNo.$dirty">
                                {{ errors.inputError(lang[local].pregnancyNo) }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].pregnancyPeriod}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].pregnancyPeriod" 
                            v-model="tableData.pregnancyPeriod"
                            @change="$v.tableData.pregnancyPeriod.$touch()" 
                            :class="{'border-error':$v.tableData.pregnancyPeriod.$invalid  && $v.tableData.pregnancyPeriod.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.pregnancyPeriod.numeric && $v.tableData.pregnancyPeriod.$dirty">
                                {{ errors.inputError(lang[local].pregnancyPeriod) }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bornMethod}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bornMethod" 
                        v-model="tableData.bornMethod"
                        @change="$v.tableData.bornMethod.$touch()" 
                        :class="{'border-error':$v.tableData.bornMethod.$invalid  && $v.tableData.bornMethod.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.bornMethod.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bornMethod) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.bornMethod.minLen">
                            {{errors.minLengthError(lang[local].bornMethod,$v.tableData.bornMethod.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.bornMethod.maxLen">
                            {{errors.maxLengthError(lang[local].bornMethod, $v.tableData.bornMethod.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bornPlace}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bornPlace" 
                        v-model="tableData.bornPlace"
                        @change="$v.tableData.bornPlace.$touch()" 
                        :class="{'border-error':$v.tableData.bornPlace.$invalid  && $v.tableData.bornPlace.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.bornPlace.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bornPlace) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.bornPlace.minLen">
                            {{errors.minLengthError(lang[local].bornPlace,$v.tableData.bornPlace.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.bornPlace.maxLen">
                            {{errors.maxLengthError(lang[local].bornPlace, $v.tableData.bornPlace.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].bornResult}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].bornResult" 
                        v-model="tableData.bornResult"
                        @change="$v.tableData.bornResult.$touch()" 
                        :class="{'border-error':$v.tableData.bornResult.$invalid  && $v.tableData.bornResult.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.bornResult.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].bornResult) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.bornResult.minLen">
                            {{errors.minLengthError(lang[local].bornResult,$v.tableData.bornResult.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.bornResult.maxLen">
                            {{errors.maxLengthError(lang[local].bornResult, $v.tableData.bornResult.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].childComplications}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].childComplications" 
                        v-model="tableData.childComplications"
                        @change="$v.tableData.childComplications.$touch()" 
                        :class="{'border-error':$v.tableData.childComplications.$invalid  && $v.tableData.childComplications.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.childComplications.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].childComplications) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.childComplications.minLen">
                            {{errors.minLengthError(lang[local].childComplications,$v.tableData.childComplications.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.childComplications.maxLen">
                            {{errors.maxLengthError(lang[local].childComplications, $v.tableData.childComplications.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].motherComplications}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].motherComplications" 
                        v-model="tableData.motherComplications"
                        @change="$v.tableData.motherComplications.$touch()" 
                        :class="{'border-error':$v.tableData.motherComplications.$invalid  && $v.tableData.motherComplications.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.motherComplications.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].motherComplications) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.motherComplications.minLen">
                            {{errors.minLengthError(lang[local].motherComplications,$v.tableData.motherComplications.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.motherComplications.maxLen">
                            {{errors.maxLengthError(lang[local].motherComplications, $v.tableData.motherComplications.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].ago}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].ago" 
                        v-model="tableData.ago"
                        @change="$v.tableData.ago.$touch()" 
                        :class="{'border-error':$v.tableData.ago.$invalid  && $v.tableData.ago.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.ago.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].ago) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.ago.minLen">
                            {{errors.minLengthError(lang[local].ago,$v.tableData.ago.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.ago.maxLen">
                            {{errors.maxLengthError(lang[local].ago, $v.tableData.ago.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].remarks}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].remarks" 
                        v-model="tableData.remarks"
                        @change="$v.tableData.remarks.$touch()" 
                        :class="{'border-error':$v.tableData.remarks.$invalid  && $v.tableData.remarks.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.remarks.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].remarks) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.remarks.minLen">
                            {{errors.minLengthError(lang[local].remarks,$v.tableData.remarks.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.remarks.maxLen">
                            {{errors.maxLengthError(lang[local].remarks, $v.tableData.remarks.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group mt-4 " style="margin-top:3px ;">
                        <Button
                            icon="pi pi-plus"
                            :class="{ 'arabic-icon': local == 'ar' }"
                            class="p-button-rounded"
                            :disabled="$v.tableData.$invalid"
                            @click="addToTable"
                            
                        />
                </div>
            </div>
        </div>

        <div class="otherData-table table-responsive my-4" v-if="data.otherData.length">
            <table class="table table-bordered ">
                <thead>
                    <tr  scope="row" class="table-header">
                        <th >#</th>
                        <th>{{lang[local].pregnancyNo}}</th>
                        <th>{{lang[local].pregnancyPeriod}}</th>
                        <th>{{lang[local].bornMethod}}</th>
                        <th>{{lang[local].bornPlace}}</th>
                        <th>{{lang[local].bornResult}}</th>
                        <th>{{lang[local].childComplications}}</th>
                        <th>{{lang[local].motherComplications}}</th>
                        <th>{{lang[local].ago}}</th>
                        <th>{{lang[local].remarks}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(row,index) in data.otherData" :key="index" >
                        <td scope="row" >{{index+1}}</td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="number" 
                                    :placeholder="lang[local].pregnancyNo" 
                                    v-model="row.pregnancyNo"
                                    @change="$v.data.otherData.$each[index].pregnancyNo.$touch()" 
                                    :class="{'border-error':$v.data.otherData.$each[index].pregnancyNo.$invalid  && $v.data.otherData.$each[index].pregnancyNo.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].pregnancyNo.numeric && $v.data.otherData.$each[index].pregnancyNo.$dirty">
                                        {{ errors.inputError(lang[local].pregnancyNo) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.pregnancyNo}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="number" 
                                    :placeholder="lang[local].pregnancyPeriod" 
                                    v-model="row.pregnancyPeriod"
                                    @change="$v.data.otherData.$each[index].pregnancyPeriod.$touch()" 
                                    :class="{'border-error':$v.data.otherData.$each[index].pregnancyPeriod.$invalid  && $v.data.otherData.$each[index].pregnancyPeriod.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].pregnancyPeriod.numeric && $v.data.otherData.$each[index].pregnancyPeriod.$dirty">
                                        {{ errors.inputError(lang[local].pregnancyPeriod) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.pregnancyPeriod}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].bornMethod" 
                                        v-model="row.bornMethod"
                                        @change="$v.data.otherData.$each[index].bornMethod.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].bornMethod.$invalid  && $v.data.otherData.$each[index].bornMethod.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].bornMethod.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].bornMethod) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].bornMethod.minLen">
                                            {{errors.minLengthError(lang[local].bornMethod,$v.data.otherData.$each[index].bornMethod.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].bornMethod.maxLen">
                                            {{errors.maxLengthError(lang[local].bornMethod, $v.data.otherData.$each[index].bornMethod.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.bornMethod}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].bornPlace" 
                                        v-model="row.bornPlace"
                                        @change="$v.data.otherData.$each[index].bornPlace.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].bornPlace.$invalid  && $v.data.otherData.$each[index].bornPlace.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].bornPlace.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].bornPlace) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].bornPlace.minLen">
                                            {{errors.minLengthError(lang[local].bornPlace,$v.data.otherData.$each[index].bornPlace.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].bornPlace.maxLen">
                                            {{errors.maxLengthError(lang[local].bornPlace, $v.data.otherData.$each[index].bornPlace.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.bornPlace}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].bornResult" 
                                        v-model="row.bornResult"
                                        @change="$v.data.otherData.$each[index].bornResult.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].bornResult.$invalid  && $v.data.otherData.$each[index].bornResult.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].bornResult.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].bornResult) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].bornResult.minLen">
                                            {{errors.minLengthError(lang[local].bornResult,$v.data.otherData.$each[index].bornResult.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].bornResult.maxLen">
                                            {{errors.maxLengthError(lang[local].bornResult, $v.data.otherData.$each[index].bornResult.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.bornResult}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].childComplications" 
                                        v-model="row.childComplications"
                                        @change="$v.data.otherData.$each[index].childComplications.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].childComplications.$invalid  && $v.data.otherData.$each[index].childComplications.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].childComplications.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].childComplications) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].childComplications.minLen">
                                            {{errors.minLengthError(lang[local].childComplications,$v.data.otherData.$each[index].childComplications.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].childComplications.maxLen">
                                            {{errors.maxLengthError(lang[local].childComplications, $v.data.otherData.$each[index].childComplications.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.childComplications}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].motherComplications" 
                                        v-model="row.motherComplications"
                                        @change="$v.data.otherData.$each[index].motherComplications.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].motherComplications.$invalid  && $v.data.otherData.$each[index].motherComplications.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].motherComplications.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].motherComplications) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].motherComplications.minLen">
                                            {{errors.minLengthError(lang[local].motherComplications,$v.data.otherData.$each[index].motherComplications.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].motherComplications.maxLen">
                                            {{errors.maxLengthError(lang[local].motherComplications, $v.data.otherData.$each[index].motherComplications.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.motherComplications}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].ago" 
                                        v-model="row.ago"
                                        @change="$v.data.otherData.$each[index].ago.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].ago.$invalid  && $v.data.otherData.$each[index].ago.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].ago.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].ago) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].ago.minLen">
                                            {{errors.minLengthError(lang[local].ago,$v.data.otherData.$each[index].ago.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].ago.maxLen">
                                            {{errors.maxLengthError(lang[local].ago, $v.data.otherData.$each[index].ago.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.remarks}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].remarks" 
                                        v-model="row.remarks"
                                        @change="$v.data.otherData.$each[index].remarks.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].remarks.$invalid  && $v.data.otherData.$each[index].remarks.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].remarks.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].remarks) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].remarks.minLen">
                                            {{errors.minLengthError(lang[local].remarks,$v.data.otherData.$each[index].remarks.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].remarks.maxLen">
                                            {{errors.maxLengthError(lang[local].remarks, $v.data.otherData.$each[index].remarks.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.remarks}}</span>
                        </td>


                        <td scope="row">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="mx-2">
                                    <img src="../../UI/icons/clinic/check.svg" v-if="index == editingId" style="cursor: pointer;" @click="closeRow()" alt="">
                                    <img src="../../UI/icons/clinic/edit.svg"  v-else style="cursor: pointer;" @click="editRow(index)" alt="">
                                </div>
                                <div class="mx-2">
                                    <img src="../../UI/icons/clinic/trash.svg" @click="deleteFromTable(index)" style="cursor: pointer;" alt="">
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="row ">
            <div class="col-md-6 col-lg-4 my-4">
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
import {minLength,maxLength,numeric} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../helpers/errors";
import Button from "primevue/button";
export default {
    props:['data','tableData'],
    components:{
        Button,
        InputText
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    pregnancyNo:"Pregnancy No",
                    pregnancyPeriod:"Pregnancy period",
                    bornMethod: "Born Method",
                    bornPlace: "Born Place",
                    bornResult: "Born Result",
                    childComplications:"Child complications",
                    motherComplications:"Mother complications",
                    ago:"Ago",
                    remarks:"Remarks",
                    comment:"Comment"
                },
                ar:{
                    pregnancyNo:"Pregnancy No",
                    pregnancyPeriod:"Pregnancy period",
                    bornMethod: "Born Method",
                    bornPlace: "Born Place",
                    bornResult: "Born Result",
                    childComplications:"Child complications",
                    motherComplications:"Mother complications",
                    ago:"Ago",
                    remarks:"Remarks",
                    comment:"Comment"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            editingId:-1
        }
    },
    validations:{
        tableData:{
            pregnancyNo:{
                numeric,
            },
            pregnancyPeriod:{
                numeric,
            },
            bornMethod:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            bornPlace:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            bornResult:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            childComplications:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            motherComplications:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            ago:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            remarks:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
        },
        data:{
            common:{
                bornPlace:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                motherComplications:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                },
                bornMethod:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                },
                childComplications:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                },
                bornResult:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                },

            },
            otherData:{
                $each:{
                    pregnancyNo:{
                        numeric,
                    },
                    pregnancyPeriod:{
                        numeric,
                    },
                    bornMethod:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    bornPlace:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    bornResult:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    childComplications:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    motherComplications:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    ago:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    remarks:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
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
        },
    
    },
    watch:{
        data: {
            handler() {
                
                this.$store.dispatch("setOBJGYNBornsIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },
        tableData: {
            handler() {
                this.$store.dispatch("setOBJGYNBornsIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },

    },
    methods:{
        addToTable(){
            if(!this.$v.tableData.$invalid){
                this.data.otherData.push({...this.tableData});
                this.$emit("restData") ;
                this.$v.tableData.$reset()
            }
        },
        editRow(index){
            
        if(!this.$v.data.otherData.$invalid)
            this.editingId=index;
        },
        deleteFromTable(index){
            this.data.otherData.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.otherData.$invalid)
                this.editingId= -1 ;
        }
    },
    
}
</script>
<style lang="scss" scoped>
.Borns{
    .table{
            border-radius: 34px;
            width:150%;
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
                border-bottom: 2px solid   #DEE2E6  ;
            }
    }
}
</style>