<template>
    <div class="pediatric my-3">
        <h3>{{lang[local].diagnosis}}</h3>
        <div class="obgyn-main-diagnosis ">
            <div class="input-wrapper d-flex align-items-start my-3">
                <label class="mx-3"> {{ lang[local].complaint }} </label>
                <div class="compaint flex-grow-1">
                    <InputText
                        class="mx-2 w-100"
                        type="text"
                        :placeholder="lang[local].complaint"
                        @change="$v.data.mainDiagnosis.complaint.$touch()"
                        v-model="data.mainDiagnosis.complaint"
                        :class="{
                            'border-error':$v.data.mainDiagnosis.complaint.$invalid && $v.data.mainDiagnosis.complaint.$dirty}"
                    />
                    <small class="text-error my-2" v-if="!$v.data.mainDiagnosis.complaint.notContainsHtmlTags && $v.data.mainDiagnosis.complaint.$dirty">
                        {{ errors.inputError(lang[local].complaint) }}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.mainDiagnosis.complaint.minLen && $v.data.mainDiagnosis.complaint.$dirty">
                        {{errors.minLengthError(lang[local].complaint,$v.data.mainDiagnosis.complaint.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.mainDiagnosis.complaint.maxLen && $v.data.mainDiagnosis.complaint.$dirty">
                        {{errors.maxLengthError(lang[local].complaint,$v.data.mainDiagnosis.complaint.$params.maxLen.max)}}
                    </small>
                </div>
            </div>
            <div class="input-wrapper d-flex align-items-start my-3">
                <label class="mx-3"> {{ lang[local].mainDiagnosis }} </label>
                <div class="main-diagnosis-input flex-grow-1">
                    <div class="d-flex gap-2">
                        <span  class="mx-2" :class="local == 'ar' ? 'p-input-icon-right' : 'p-input-icon-left'">
                            <i class="pi pi-search" />
                            <AutoComplete
                                field="name"
                                :placeholder="lang[local].mainDiagnosis"
                                :suggestions="mainDiagnosis"
                                @item-select="getMainDiagnosis"
                                @complete="searchDiagnosis"
                                v-model="diagnosisToPush.value.manualInsertion"
                            />
                        </span>

                        <div>
                            <Button
                            icon="pi pi-plus"
                            :class="{ 'arabic-icon': local == 'ar' }"
                            @click="addMainDiagnosis"
                            :disabled="$v.diagnosisToPush.value.manualInsertion.$invalid ||!diagnosisToPush.value.manualInsertion"
                            class="p-button-rounded"
                        />
                        </div>
                    </div>

                    <small class="text-error my-2" v-if="!$v.diagnosisToPush.value.manualInsertion.notContainsHtmlTags &&$v.diagnosisToPush.value.manualInsertion.$customdirty">
                        {{ errors.inputError(lang[local].mainDiagnosis) }}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.diagnosisToPush.value.manualInsertion.minLen &&$v.diagnosisToPush.value.manualInsertion.$customdirty">
                        {{errors.minLengthError(lang[local].mainDiagnosis,$v.diagnosisToPush.value.manualInsertion.$params.minLen.min)}}
                    </small>
                    <small  class="text-error my-2" v-else-if="!$v.diagnosisToPush.value.manualInsertion.maxLen && $v.diagnosisToPush.value.manualInsertion.$customdirty">
                        {{errors.maxLengthError(lang[local].mainDiagnosis,$v.diagnosisToPush.value.manualInsertion.$params.maxLen.max)}}
                    </small>
                </div>
            </div>
            <div class="input-wrapper d-flex align-items-start my-3">
                <label class="mx-3"> {{ lang[local].details }} </label>
                <div class="details flex-grow-1">
                    <InputText
                        v-model="data.details"
                        class="mx-2"
                        type="text"
                        :placeholder="lang[local].details"
                        @change="$v.data.mainDiagnosis.details.$touch()"
                        :class="{'border-error': $v.data.mainDiagnosis.details.$invalid && $v.data.mainDiagnosis.details.$dirty,}"
                    />
                    <small class="text-error my-2" v-if="!$v.data.mainDiagnosis.details.notContainsHtmlTags && $v.data.mainDiagnosis.details.$dirty">
                        {{ errors.inputError(lang[local].details) }}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.mainDiagnosis.details.minLen && $v.data.mainDiagnosis.details.$dirty">
                        {{errors.minLengthError(lang[local].details,$v.data.mainDiagnosis.details.$params.minLen.min) }}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.mainDiagnosis.details.maxLen && $v.data.mainDiagnosis.details.$dirty">
                        {{errors.maxLengthError(lang[local].details,$v.data.mainDiagnosis.details.$params.maxLen.max)}}
                    </small>
                </div>
            </div>
            <div class="diagnosis-list mt-3 d-flex">
                <div class="diagnosis my-2 d-flex mx-3" v-for="(dia, index) in data.mainDiagnosis.mainDiagnosis" :key="index">
                    <div>
                        <h6 class="p-2">{{ dia.manualInsertion }}</h6>
                    </div>
                    <div class="delete-diagnosis">
                        <Button
                            icon="pi pi-minus"
                            class="p-button-rounded p-button-danger"
                            :class="{ 'arabic-icon': local == 'ar' }"
                            @click.prevent="deleteMainDiagnosis(index)"
                        />
                    </div>
                </div>
            </div>
        </div>
        <h3 >{{lang[local].Rx}}</h3>
        <div class="rx my-3">
        <div class="prescription-form ">
            <div class="row flex-wrap">
                <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                    <div class="form-group mx-2">
                        <label>{{lang[local].drugName}}</label>
                        <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                <i class="pi pi-search" style="z-index: 2;" />                        
                                <AutoComplete 
                                    v-model="prescriptionObject.drugName.manualInsertion" 
                                    :suggestions.sync="filteredDrugs"
                                    @change="$v.prescriptionObject.drugName.$touch()"
                                    @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].drugName"
                                    :class="{'p-invalid':$v.prescriptionObject.drugName.$invalid}"
                                />
                        </span>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.drugName.manualInsertion.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].drugName) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugName.manualInsertion.minLen">
                                {{errors.minLengthError(lang[local].drugName,$v.prescriptionObject.drugName.manualInsertion.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugName.manualInsertion.maxLen">
                                {{errors.maxLengthError(lang[local].drugName, $v.prescriptionObject.drugName.manualInsertion.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].dosage}}</label>
                        <DosageCascade  ref="DosageCascade" :initData="prescriptionObject.dosage" @getDosage="getDosage" :placeholder="lang[local].dosage"></DosageCascade>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].form}}</label>
                        <Dropdown 
                            v-model="prescriptionObject.form" 
                            :options="rxData.form" 
                            :filter="true" :optionLabel="local=='ar'?'arabic':'english'" 
                            :filterPlaceholder="lang[local].search" 
                            :placeholder="lang[local].form"
                            ></Dropdown>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].dose}}</label>
                        <div class="d-flex"> 
                            <InputText 
                                type="number" 
                                :class="{'border-error':$v.prescriptionObject.dose.$invalid  && $v.prescriptionObject.dose.value.$dirty}" 
                                v-model="prescriptionObject.dose.value" 
                                @change="$v.prescriptionObject.dose.$touch()" 
                                :placeholder="lang[local].value"
                                step="0.01" 
                            ></InputText>
                            <Dropdown 
                            v-model="prescriptionObject.dose.type" 
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            :placeholder="lang[local].unit"
                            :options="rxData.dose" 
                            ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.dose.value.decimal && $v.prescriptionObject.dose.value.$dirty">
                                {{ errors.inputError(lang[local].dose) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].strength}}</label>
                        <div class="d-flex">
                            <InputText type="number" 
                                :class="{'border-error':$v.prescriptionObject.strength.$invalid  && $v.prescriptionObject.strength.value.$dirty}" 
                                @change="$v.prescriptionObject.strength.$touch()" 
                                v-model="prescriptionObject.strength.value" 
                                :placeholder="lang[local].value"
                                step="0.01" 
                            > </InputText>
                            <Dropdown 
                            v-model="prescriptionObject.strength.unit" 
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            :placeholder="lang[local].unit"
                            :options="rxData.strength" 
                            :filter="true"
                            ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.strength.value.decimal && $v.prescriptionObject.strength.value.$dirty">
                                {{ errors.inputError(lang[local].strength) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].period}}</label>
                        <div class="d-flex">
                            <InputText 
                                type="number" 
                                v-model="prescriptionObject.period.time"
                                @change="$v.prescriptionObject.period.$touch()" 
                                :placeholder="lang[local].time" 
                                :class="{'border-error':$v.prescriptionObject.period.$invalid  && $v.prescriptionObject.period.time.$dirty}"
                                > </InputText>
                            <Dropdown 
                                v-model="prescriptionObject.period.period" 
                                :optionLabel="local=='ar'?'arabic':'english'" 
                                :placeholder="lang[local].unit"
                                :options="rxData.period" 
                            ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.period.time.numeric && $v.prescriptionObject.period.time.$dirty">
                                {{ errors.inputError(lang[local].period) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].refill}}</label>
                        <InputText 
                        type="number" 
                        v-model="prescriptionObject.refill"
                        @change="$v.prescriptionObject.refill.$touch()" 
                        :placeholder="lang[local].refill" 
                        :class="{'border-error':$v.prescriptionObject.refill.$invalid  && $v.prescriptionObject.refill.$dirty}"
                        > </InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.refill.numeric && $v.prescriptionObject.refill.$dirty">
                                {{ errors.inputError(lang[local].refill) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                            <label>{{lang[local].routeOfAdminstration}}</label>
                            <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="prescriptionObject.routeOfAdminstration.manualInsertion" 
                                        @change="$v.prescriptionObject.routeOfAdminstration.$touch()"
                                        :class="{'p-invalid':$v.prescriptionObject.routeOfAdminstration.$invalid}"
                                        :suggestions.sync="filteredDrugs"
                                        :placeholder="lang[local].routeOfAdminstration"
                                        @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                    />
                            </span>
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.prescriptionObject.routeOfAdminstration.manualInsertion.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.prescriptionObject.routeOfAdminstration.manualInsertion.minLen">
                                    {{errors.minLengthError(lang[local].routeOfAdminstration,$v.prescriptionObject.routeOfAdminstration.manualInsertion.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.prescriptionObject.routeOfAdminstration.manualInsertion.maxLen">
                                    {{errors.maxLengthError(lang[local].routeOfAdminstration, $v.prescriptionObject.routeOfAdminstration.manualInsertion.$params.maxLen.max) }}
                                </small>
                            </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="d-flex  align-items-end">
                        <div class="form-group flex-grow-1 mx-2">
                            <label>{{lang[local].drugComment}}</label>
                            <InputText 
                                type="text"
                                v-model="prescriptionObject.drugComment"
                                :class="{'border-error':$v.prescriptionObject.drugComment.$invalid  && $v.prescriptionObject.drugComment.$dirty}" 
                                @change="$v.prescriptionObject.drugComment.$touch()" 
                                :placeholder="lang[local].drugComment"
                                > </InputText>
                            
                        </div>
                        <div >
                            <Button
                                icon="pi pi-plus"
                                :class="{ 'arabic-icon': local == 'ar' }"
                                class="p-button-rounded"
                                @click="addToPrescription"
                                :disabled="$v.prescriptionObject.$invalid"
                            />
                        </div>
                    </div>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.prescriptionObject.drugComment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].drugComment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugComment.minLen">
                            {{errors.minLengthError(lang[local].drugComment,$v.prescriptionObject.drugComment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugComment.maxLen">
                            {{errors.maxLengthError(lang[local].drugComment, $v.prescriptionObject.drugComment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-wrapper table-responsive" v-if="data.rx.length">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{lang[local].drugName}}</th>                                
                        <th scope="col">{{lang[local].dosage}}</th>                                
                        <th scope="col">{{lang[local].form}}</th>                                
                        <th scope="col">{{lang[local].dose}}</th>                                
                        <th scope="col">{{lang[local].strength}} </th>
                        <th scope="col">{{lang[local].period}}</th>
                        <th scope="col">{{lang[local].refill}}</th>
                        <th scope="col">{{lang[local].routeOfAdminstration}}</th>
                        <th scope="col">{{lang[local].drugComment}}</th>
                        <th scope="col">{{lang[local].settings}}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- {{$v.data.rx.$each[index]}} -->
                    <tr v-for="(drug,index) in data.rx" :key="index" >
                        <td >{{index+1}}</td>
                        <td>
                            <div v-if="index == editingId">
                                <span  :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="drug.drugName.manualInsertion" 
                                        :suggestions.sync="filteredDrugs"
                                        @change="$v.data.rx.$each[index].drugName.$touch()"
                                        @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                        :class="{'p-invalid':$v.data.rx.$each[index].drugName.$invalid}"
                                    />
                                </span>
                                <!-- {{$v.data.rx.$each[index].drugName.manualInsertion}} -->
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].drugName.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].drugName) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.rx.$each[index].drugName.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].drugName,$v.data.rx.$each[index].drugName.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.rx.$each[index].drugName.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].drugName, $v.data.rx.$each[index].drugName.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.drugName.manualInsertion}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <DosageCascade :initData="drug.dosage" @getDosage="getDosageFromTable($event,index)" :placeholder="lang[local].dosage"></DosageCascade>
                            </div>
                            <span v-else >{{drug.dosage.join(" / ")}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <Dropdown 
                                    v-model="drug.form" 
                                    :options="rxData.form" 
                                    :filter="true"
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                    :filterPlaceholder="lang[local].search" 
                                ></Dropdown>
                            </div>
                            <span v-else >{{local =='ar'?drug.form.arabic:drug.form.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <div class="d-flex"> 
                                    <InputText 
                                        type="number" 
                                        :class="{'border-error':$v.data.rx.$each[index].dose.$invalid  && $v.data.rx.$each[index].dose.value.$dirty}" 
                                        v-model="drug.dose.value" 
                                        @change="$v.data.rx.$each[index].dose.$touch()" 
                                        step="0.01" 
                                    ></InputText>
                                    <Dropdown 
                                        v-model="drug.dose.type" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :options="rxData.dose" 
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].dose.value.decimal && $v.data.rx.$each[index].dose.value.$dirty">
                                        {{ errors.inputError(lang[local].dose) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else @click="editRow(index)">{{drug.dose.value}} {{local =='ar'?drug.dose.type.arabic:drug.dose.type.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <div class="d-flex"> 
                                    <InputText 
                                        type="number" 
                                        :class="{'border-error':$v.data.rx.$each[index].strength.$invalid  && $v.data.rx.$each[index].strength.value.$dirty}" 
                                        v-model="drug.strength.value" 
                                        @change="$v.data.rx.$each[index].strength.$touch()" 
                                        step="0.01" 
                                    ></InputText>
                                    <Dropdown 
                                        v-model="drug.strength.unit" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :options="rxData.strength" 
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].strength.value.decimal && $v.data.rx.$each[index].strength.value.$dirty">
                                        {{ errors.inputError(lang[local].strength) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.strength.value}} {{local =='ar'?drug.strength.unit.arabic:drug.strength.unit.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <div class="d-flex"> 
                                    <InputText 
                                        type="number" 
                                        :class="{'border-error':$v.data.rx.$each[index].period.$invalid  && $v.data.rx.$each[index].period.time.$dirty}" 
                                        v-model="drug.period.time" 
                                        @change="$v.data.rx.$each[index].period.$touch()" 
                                        step="0.01" 
                                    ></InputText>
                                    <Dropdown 
                                        v-model="drug.period.period" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :options="rxData.period" 
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].period.time.numeric && $v.data.rx.$each[index].period.time.$dirty">
                                        {{ errors.inputError(lang[local].period) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.period.time}} {{local =='ar'?drug.period.period.arabic:drug.period.period.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <InputText 
                                    type="number" 
                                    :class="{'border-error':$v.data.rx.$each[index].refill.$invalid  && $v.data.rx.$each[index].refill.$dirty}" 
                                    v-model="drug.refill" 
                                    @change="$v.data.rx.$each[index].refill.$touch()" 
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].refill.numeric && $v.data.rx.$each[index].refill.$dirty">
                                        {{ errors.inputError(lang[local].refill) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.refill}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <span  :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="drug.routeOfAdminstration.manualInsertion" 
                                        :suggestions.sync="filteredDrugs"
                                        @change="$v.data.rx.$each[index].routeOfAdminstration.$touch()"
                                        @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                        :class="{'p-invalid':$v.data.rx.$each[index].routeOfAdminstration.$invalid}"
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].routeOfAdminstration.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.rx.$each[index].routeOfAdminstration.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].routeOfAdminstration,$v.data.rx.$each[index].routeOfAdminstration.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.rx.$each[index].routeOfAdminstration.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].routeOfAdminstration, $v.data.rx.$each[index].routeOfAdminstration.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.routeOfAdminstration.manualInsertion}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text"
                                    v-model="drug.drugComment"
                                    :class="{'border-error':$v.data.rx.$each[index].drugComment.$invalid  && $v.prescriptionObject.drugComment.$dirty}" 
                                    @change="$v.data.rx.$each[index].drugComment.$touch()" 
                                ></InputText>
                                    

                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.rx.$each[index].drugComment.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.rx.$each[index].drugComment.minLen">
                                        {{errors.minLengthError(lang[local].routeOfAdminstration,$v.prescriptionObject.drugComment.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.rx.$each[index].drugComment.maxLen">
                                        {{errors.maxLengthError(lang[local].drugComment, $v.data.rx.$each[index].drugComment.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.drugComment}}</span>
                            
                        </td>
                        <td>
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
    </div>
    </div>
</template>
<script>
import InputText from "primevue/inputtext";
import { maxLength, minLength,decimal ,numeric } from "vuelidate/lib/validators";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import DosageCascade from "../shared/DosageCascade.vue";
import Dropdown from 'primevue/dropdown';
import {minLengthError,maxLengthError,inputError,} from "../helpers/errors";
import { notContainsHtmlTags } from "../helpers/customValidators";
import {rxData} from "../helpers/RxData" ;

export default {
    props: ["data","prescriptionObject","diagnosisToPush"],
    components: {
        InputText,
        AutoComplete,
        Button,
        DosageCascade,
        Dropdown,
    },
    data() {
        return {
        local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
        lang: {
            en: {
                diagnosis:"Diagnosis",
                Rx:"RX",
                complaint: "complaint",
                mainDiagnosis: "main diagnosis",
                details: "details",
                drugName:"Drug name",
                dosage:"Dosage",
                form:"Form",
                dose:"Dose",
                period:"Period",
                routeOfAdminstration:"Route of adminstration",
                strength:"Strength",
                drugComment:"Drug comment",
                search:"Search",
                settings:"Settings",
                value:"value",
                unit:"unit",
                time:"time",
                refill:"Refill"
            },
            ar: {
                diagnosis:"Diagnosis",
                Rx:"RX",
                complaint: "complaint",
                mainDiagnosis: "main diagnosis",
                details: "details",
                drugName:"Drug name",
                dosage:"Dosage",
                form:"Form",
                dose:"Dose",
                period:"Period",
                routeOfAdminstration:"Route of adminstration",
                strength:"Strength",
                drugComment:"Drug comment",
                search:"Search",
                settings:"Settings",
                value:"value",
                unit:"unit",
                time:"time",
                refill:"Refill"
            },
        },
        mainDiagnosis: [],
        errors: {
            minLengthError,
            maxLengthError,
            inputError,
        },
        rxData:rxData,
        filteredDrugs: [],
        editingId:-1,
        DosageCascade:null
        
        };
    },
    mounted(){
        this.DosageCascade = this.$refs.DosageCascade ;
    },

    validations: {
        data: {
            mainDiagnosis:{
                complaint: {
                    minLen: minLength(2),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                details: {
                    minLen: minLength(2),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
            },
            rx:{
                $each:{
                    drugName:{
                        manualInsertion:{
                            minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        }, 
                    },
                    dose:{
                        value:{
                            decimal
                        }
                    },
                    strength:{
                        value:{
                            decimal
                        }
                    },
                    period:{
                        time:{
                            numeric,
                        },
                    },
                    refill:{
                        numeric
                    },
                    routeOfAdminstration:{
                        manualInsertion:{
                            minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        }, 
                    },
                    drugComment:{
                        minLen: minLength(1),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                    }

                }
            },
        },
        prescriptionObject:{
            drugName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }, 
            },
            dose:{
                value:{
                    decimal
                }
            },
            strength:{
                value:{
                    decimal
                }
            },
            period:{
                time:{
                    numeric,

                },

            },
            refill:{
                numeric
            },
            routeOfAdminstration:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }, 
            },
            drugComment:{
                minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
            }

        },
        diagnosisToPush: {
            value:{
                manualInsertion: {
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
    watch: {
        "diagnosisToPush.value.manualInsertion"() {
            this.$v.diagnosisToPush.value.manualInsertion.$customdirty = true;
            this.$store.dispatch("setPediatricPxIsValid",this.$v.data.rx.$invalid || this.$v.diagnosisToPush.$invalid || this.$v.prescriptionObject.$invalid);
        },
        data: {
            handler() {
                this.$store.dispatch("setPediatricPxIsValid",this.$v.data.rx.$invalid || this.$v.diagnosisToPush.$invalid || this.$v.prescriptionObject.$invalid);
            },
            deep: true,
        },
        diagnosisToPush: {
            handler() {
                this.$store.dispatch("setPediatricPxIsValid",this.$v.data.rx.$invalid || this.$v.diagnosisToPush.$invalid || this.$v.prescriptionObject.$invalid);
            },
            deep: true,
        },
        prescriptionObject: {
            handler() {
                this.$store.dispatch("setPediatricPxIsValid",this.$v.data.rx.$invalid || this.$v.diagnosisToPush.$invalid || this.$v.prescriptionObject.$invalid);
            },
            deep: true,
        },
    },
    methods: {
        searchDiagnosis(val) {
        if(val){
            this.mainDiagnosis=[]
        }
        },
        getMainDiagnosis(val) {
        if (val) this.addMainDiagnosis();
        },
        addMainDiagnosis() {
        if (this.diagnosisToPush.value.manualInsertion) {
            if (typeof this.diagnosisToPush.value.manualInsertion == "object")
            this.diagnosisToPush.value.manualInsertion =
                this.diagnosisToPush.value.manualInsertion.name;
            if (!this.$v.diagnosisToPush.value.manualInsertion.$invalid) {
            this.data.mainDiagnosis.mainDiagnosis.push({ ...this.diagnosisToPush.value });
            this.diagnosisToPush.value = {
                english: null,
                arabic: null,
                manualInsertion: null
            };
            this.$v.diagnosisToPush.value.manualInsertion.$reset();
            }
        }
        },
        deleteMainDiagnosis(index) {
        this.data.mainDiagnosis.mainDiagnosis.splice(index, 1);
        },
        searchDrugs(val){
                if(val)
                this.filteredDrugs = []
                
            
        },
        getDosage(val){
            this.prescriptionObject.dosage=val ;
        },
        getDosageFromTable(val,index){
            this.data[index].dosage = val 
        },
        addToPrescription(){
            if(!this.$v.prescriptionObject.$invalid){
                this.data.rx.push({...this.prescriptionObject});
                // this.prescriptionObject = prescriptionData() ;
                this.$emit("resetData")
                this.DosageCascade.makeValueEmpty();
                this.$v.prescriptionObject.$reset()
            }
        },
        editRow(index){
        if(!this.$v.data.rx.$invalid)
            this.editingId=index;
        },
        deleteFromTable(index){
            this.data.rx.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.rx.$invalid)
                this.editingId=-1 ;
        }
    },
};
</script>
<style lang="scss" scoped>
.pediatric{
    .obgyn-main-diagnosis {
        .input-wrapper {
            max-width: 570px;
            label {
            width: 120px;
            }
        }
        .diagnosis-list {
            .diagnosis {
            background: #fff;
            padding: 10px;
            border-radius: 20px;
            }
        }
    }
    .table{
        border-radius: 34px;
        width:150%;
        th {
            color:$name-color ;

        }
        tr{
            text-align: center;
            font-size: 12px;
            
        }
        td {
                color:$name-color ;
                font-size: 14px;
        }
        .table-header{
            border-bottom: 2px solid   #DEE2E6  ;
        }
    }

}
    
</style>