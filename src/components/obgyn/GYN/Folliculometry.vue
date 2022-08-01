<template>
    <div class="GYN-folliculometry">
        <div class="row lmp">
            <div class="col-md-6 col-lg-4">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].lmp}}</label>
                    <Calendar 
                        :showIcon="true"  
                        :placeholder="lang[local].lmp"    
                        :manualInput="false" 
                        :monthNavigator="true" 
                        :yearNavigator="true" 
                        yearRange="1950:2030" 
                        :touchUI.sync="displayUI" 
                        dateFormat="mm-dd-yy"
                        v-model="data.lmp"
                        :class="{'border-error':!$v.data.lmp.notValidDate  && $v.data.lmp.$dirty}"
                    />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.lmp.notValidDate && $v.data.lmp.$dirty">
                            {{ errors.inputError(lang[local].lmp) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].date}}</label>
                        <Calendar 
                            :showIcon="true"  
                            :placeholder="lang[local].date"   
                            :manualInput="false" 
                            :monthNavigator="true" 
                            :yearNavigator="true" 
                            yearRange="1950:2030" 
                            :touchUI.sync="displayUI" 
                            dateFormat="mm-dd-yy"
                            v-model="tableData.date"
                            :class="{'border-error':!$v.tableData.date.notValidDate  && $v.tableData.date.$dirty}"
                        />
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.date.notValidDate && $v.tableData.date.$dirty">
                                {{ errors.inputError(lang[local].date) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].day}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].day" 
                            v-model="tableData.day"
                            @change="$v.tableData.day.$touch()" 
                            :class="{'border-error':!$v.tableData.day.numeric  && $v.tableData.day.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.day.numeric && $v.tableData.day.$dirty">
                                {{ errors.inputError(lang[local].day) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].rightOv}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].rightOv" 
                            v-model="tableData.rightOv"
                            @change="$v.tableData.rightOv.$touch()" 
                            :class="{'border-error':$v.tableData.rightOv.$invalid  && $v.tableData.rightOv.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.rightOv.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].rightOv) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.rightOv.minLen">
                                {{errors.minLengthError(lang[local].rightOv,$v.tableData.rightOv.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.rightOv.maxLen">
                                {{errors.maxLengthError(lang[local].rightOv, $v.tableData.rightOv.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].rSize}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].rSize" 
                            v-model="tableData.rSize"
                            @change="$v.tableData.rSize.$touch()" 
                            :class="{'border-error':$v.tableData.rSize.$invalid  && $v.tableData.rSize.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.rSize.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].rSize) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.rSize.minLen">
                                {{errors.minLengthError(lang[local].rSize,$v.tableData.rSize.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.rSize.maxLen">
                                {{errors.maxLengthError(lang[local].rSize, $v.tableData.rSize.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].leftOv}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].leftOv" 
                            v-model="tableData.leftOv"
                            @change="$v.tableData.leftOv.$touch()" 
                            :class="{'border-error':$v.tableData.leftOv.$invalid  && $v.tableData.leftOv.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.leftOv.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].leftOv) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.leftOv.minLen">
                                {{errors.minLengthError(lang[local].leftOv,$v.tableData.leftOv.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.leftOv.maxLen">
                                {{errors.maxLengthError(lang[local].leftOv, $v.tableData.leftOv.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].lFollicles}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].lFollicles" 
                            v-model="tableData.lFollicles"
                            @change="$v.tableData.lFollicles.$touch()" 
                            :class="{'border-error':$v.tableData.lFollicles.$invalid  && $v.tableData.lFollicles.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.lFollicles.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].lFollicles) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.lFollicles.minLen">
                                {{errors.minLengthError(lang[local].lFollicles,$v.tableData.lFollicles.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.lFollicles.maxLen">
                                {{errors.maxLengthError(lang[local].lFollicles, $v.tableData.lFollicles.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].lSize}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].lSize" 
                            v-model="tableData.lSize"
                            @change="$v.tableData.lSize.$touch()" 
                            :class="{'border-error':$v.tableData.lSize.$invalid  && $v.tableData.lSize.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.lSize.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].lSize) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.lSize.minLen">
                                {{errors.minLengthError(lang[local].lSize,$v.tableData.lSize.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.lSize.maxLen">
                                {{errors.maxLengthError(lang[local].lSize, $v.tableData.lSize.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].endo}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].endo" 
                            v-model="tableData.endo"
                            @change="$v.tableData.endo.$touch()" 
                            :class="{'border-error':$v.tableData.endo.$invalid  && $v.tableData.endo.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.endo.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].endo) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.endo.minLen">
                                {{errors.minLengthError(lang[local].endo,$v.tableData.endo.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.endo.maxLen">
                                {{errors.maxLengthError(lang[local].endo, $v.tableData.endo.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].dp}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].dp" 
                            v-model="tableData.dp"
                            @change="$v.tableData.dp.$touch()" 
                            :class="{'border-error':$v.tableData.dp.$invalid  && $v.tableData.dp.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.dp.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].dp) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.dp.minLen">
                                {{errors.minLengthError(lang[local].dp,$v.tableData.dp.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.dp.maxLen">
                                {{errors.maxLengthError(lang[local].dp, $v.tableData.dp.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].mod}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].mod" 
                            v-model="tableData.mod"
                            @change="$v.tableData.mod.$touch()" 
                            :class="{'border-error':$v.tableData.mod.$invalid  && $v.tableData.mod.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.tableData.mod.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].mod) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.mod.minLen">
                                {{errors.minLengthError(lang[local].mod,$v.tableData.mod.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.tableData.mod.maxLen">
                                {{errors.maxLengthError(lang[local].mod, $v.tableData.mod.$params.maxLen.max) }}
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
        </div>
        <div class="otherData-table table-responsive my-4" v-if="data.otherData.length">
            <table class="table table-bordered ">
                <thead>
                    <tr  scope="row" class="table-header">
                        <th >#</th>
                        <th>{{lang[local].date}}</th>
                        <th>{{lang[local].day}}</th>
                        <th>{{lang[local].rightOv}}</th>
                        <th>{{lang[local].rSize}}</th>
                        <th>{{lang[local].leftOv}}</th>
                        <th>{{lang[local].lFollicles}}</th>
                        <th>{{lang[local].lSize}}</th>
                        <th>{{lang[local].endo}}</th>
                        <th>{{lang[local].dp}}</th>
                        <th>{{lang[local].mod}}</th>
                        <th>{{lang[local].nextVisit}}</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(row,index) in data.otherData" :key="index" >
                        <td scope="row" >{{index+1}}</td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <Calendar 
                                    :showIcon="true"  
                                    :placeholder="lang[local].date"   
                                    :manualInput="false" 
                                    :monthNavigator="true" 
                                    :yearNavigator="true" 
                                    yearRange="1950:2030" 
                                    :touchUI.sync="displayUI" 
                                    dateFormat="mm-dd-yy"
                                    v-model="row.date"
                                    :class="{'border-error':!$v.data.otherData.$each[index].date.notValidDate  && $v.data.otherData.$each[index].date.$dirty}"
                                />
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].date.notValidDate && $v.data.otherData.$each[index].date.$dirty">
                                        {{ errors.inputError(lang[local].date) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.date?row.date.toISOString().split('T')[0]:row.date}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="number" 
                                        :placeholder="lang[local].day" 
                                        v-model="row.day"
                                        @change="$v.data.otherData.$each[index].day.$touch()" 
                                        :class="{'border-error':!$v.data.otherData.$each[index].day.numeric  && $v.data.otherData.$each[index].day.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].day.numeric && $v.data.otherData.$each[index].day.$dirty">
                                            {{ errors.inputError(lang[local].day) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.day}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].rightOv" 
                                        v-model="row.rightOv"
                                        @change="$v.data.otherData.$each[index].rightOv.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].rightOv.$invalid  && $v.data.otherData.$each[index].rightOv.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].rightOv.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].rightOv) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].rightOv.minLen">
                                            {{errors.minLengthError(lang[local].rightOv,$v.data.otherData.$each[index].rightOv.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].rightOv.maxLen">
                                            {{errors.maxLengthError(lang[local].rightOv, $v.data.otherData.$each[index].rightOv.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.rightOv}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].rSize" 
                                        v-model="row.rSize"
                                        @change="$v.data.otherData.$each[index].rSize.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].rSize.$invalid  && $v.data.otherData.$each[index].rSize.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].rSize.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].rSize) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].rSize.minLen">
                                            {{errors.minLengthError(lang[local].rSize,$v.data.otherData.$each[index].rSize.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].rSize.maxLen">
                                            {{errors.maxLengthError(lang[local].rSize, $v.data.otherData.$each[index].rSize.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.rSize}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].leftOv" 
                                        v-model="row.leftOv"
                                        @change="$v.data.otherData.$each[index].leftOv.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].leftOv.$invalid  && $v.data.otherData.$each[index].leftOv.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].leftOv.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].leftOv) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].leftOv.minLen">
                                            {{errors.minLengthError(lang[local].leftOv,$v.data.otherData.$each[index].leftOv.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].leftOv.maxLen">
                                            {{errors.maxLengthError(lang[local].leftOv, $v.data.otherData.$each[index].leftOv.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.leftOv}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].lSize" 
                                        v-model="row.lSize"
                                        @change="$v.data.otherData.$each[index].lSize.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].lSize.$invalid  && $v.data.otherData.$each[index].lSize.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].lSize.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].lSize) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].lSize.minLen">
                                            {{errors.minLengthError(lang[local].lSize,$v.data.otherData.$each[index].lSize.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].lSize.maxLen">
                                            {{errors.maxLengthError(lang[local].lSize, $v.data.otherData.$each[index].lSize.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.lSize}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].lFollicles" 
                                        v-model="row.lFollicles"
                                        @change="$v.data.otherData.$each[index].lFollicles.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].lFollicles.$invalid  && $v.data.otherData.$each[index].lFollicles.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].lFollicles.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].lFollicles) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].lFollicles.minLen">
                                            {{errors.minLengthError(lang[local].lFollicles,$v.data.otherData.$each[index].lFollicles.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].lFollicles.maxLen">
                                            {{errors.maxLengthError(lang[local].lFollicles, $v.data.otherData.$each[index].lFollicles.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.lFollicles}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].endo" 
                                        v-model="row.endo"
                                        @change="$v.data.otherData.$each[index].endo.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].endo.$invalid  && $v.data.otherData.$each[index].endo.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].endo.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].endo) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].endo.minLen">
                                            {{errors.minLengthError(lang[local].endo,$v.data.otherData.$each[index].endo.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].endo.maxLen">
                                            {{errors.maxLengthError(lang[local].endo, $v.data.otherData.$each[index].endo.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.endo}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].dp" 
                                        v-model="row.dp"
                                        @change="$v.data.otherData.$each[index].dp.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].dp.$invalid  && $v.data.otherData.$each[index].dp.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].dp.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].dp) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].dp.minLen">
                                            {{errors.minLengthError(lang[local].dp,$v.data.otherData.$each[index].dp.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].dp.maxLen">
                                            {{errors.maxLengthError(lang[local].dp, $v.data.otherData.$each[index].dp.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.dp}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].mod" 
                                        v-model="row.mod"
                                        @change="$v.data.otherData.$each[index].mod.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].mod.$invalid  && $v.data.otherData.$each[index].mod.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].mod.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].mod) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].mod.minLen">
                                            {{errors.minLengthError(lang[local].mod,$v.data.otherData.$each[index].mod.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].mod.maxLen">
                                            {{errors.maxLengthError(lang[local].mod, $v.data.otherData.$each[index].mod.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.dp}}</span>
                        </td>

                        <td scope="row">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="mx-2">
                                    <img src="../../../UI/icons/clinic/check.svg" v-if="index == editingId" style="cursor: pointer;" @click="closeRow()" alt="">
                                    <img src="../../../UI/icons/clinic/edit.svg"  v-else style="cursor: pointer;" @click="editRow(index)" alt="">
                                </div>
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
import InputText from "primevue/inputtext";
import {minLength,maxLength,numeric} from "vuelidate/lib/validators";
import { notContainsHtmlTags,notValidDate} from "../../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../../helpers/errors";
import Calendar from 'primevue/calendar';
import Button from "primevue/button";
export default {
    props:['data','tableData'],
    components:{
        InputText,
        Button,
        Calendar
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    lmp:'LMP',
                    date:'Date',
                    day:"Day",
                    rightOv:"Right Ov",
                    rSize:"R.Size",
                    leftOv:"Left Ov",
                    lFollicles:"L.Follicles",
                    lSize:"L.Size",
                    endo:"Endo",
                    dp:"DP",
                    mod:"Mod",
                    nextVisit:"Next visit"
                },
                ar:{
                    lmp:'LMP',
                    date:'Date',
                    day:"Day",
                    rightOv:"Right Ov",
                    rSize:"R.Size",
                    leftOv:"Left Ov",
                    lFollicles:"L.Follicles",
                    lSize:"L.Size",
                    endo:"Endo",
                    dp:"DP",
                    mod:"Mod",
                    nextVisit:"Next visit"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            editingId:-1,
            displayUI:false,
        }
    },
    created(){
        this.displayUI = window.innerWidth <=425 ;
    },
    validations:{
        tableData:{
            date:{
                notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                    },
            },
            day:{
                numeric
            },
            
            rightOv:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            rSize:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            leftOv:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            lFollicles:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            lSize:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            endo:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            dp:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            mod:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            nextVisit:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
        },
        data:{
            lmp:{
                notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
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
            otherData:{
                $each:{
                    date:{
                        notValidDate(val) {
                            if (!val) return true;
                            return !notValidDate(val);
                            },
                    },
                    day:{
                        numeric
                    },
                    
                    rightOv:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    rSize:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    leftOv:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    lFollicles:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    lSize:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    endo:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    dp:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    mod:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    nextVisit:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                },
            },
        },
    },
    watch:{
        "tableData.date"(){
            if(!this.$v.data.lmp.$invalid &&!this.$v.tableData.date.$invalid&&this.data.lmp && this.tableData.date){
                this.calculatedate()
                
            }
            
        },
        "data.lmp"(){
            if(!this.$v.data.lmp.$invalid &&!this.$v.tableData.date.$invalid&&this.data.lmp && this.tableData.date){
                this.calculatedate()
            }
        },
        data: {
            handler() {
                this.$store.dispatch("setOBJGYNFolliculometryIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },
        tableData: {
            handler() {
                this.$store.dispatch("setOBJGYNFolliculometryIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },

    },
    methods:{
        calculatedate(){
                var day1 = new Date(this.data.lmp);
                var day2 = new Date(this.tableData.date);
                var difference = Math.abs(day1.getTime()-day2.getTime())
                console.log(difference/(1000 * 3600 * 24))
                this.tableData.day = difference/(1000 * 3600 * 24)
        },
        addToTable(){
            if(!this.$v.tableData.$invalid){
                this.data.otherData.push({...this.tableData});
                this.$emit("restData");
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
            console.log(this.editingId)
        }
    },
}
</script>
<style lang="scss" scoped>
.GYN-folliculometry{
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
                cursor: pointer;
                text-align: center;
                font-size: 12px;
            }
            .table-header{
                border-bottom: 2px solid   #DEE2E6  ;
            }
    }
}
</style>