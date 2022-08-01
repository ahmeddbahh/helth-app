<template>
    <div class="obgyn-obstetric my-3">
        <div class="common">
            <div class="row">
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].pregnancyNo}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].pregnancyNo" 
                            v-model="data.common.pregnancyNo"
                            @change="$v.data.common.pregnancyNo.$touch()" 
                            :class="{'border-error':$v.data.common.pregnancyNo.$invalid  && $v.data.common.pregnancyNo.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.common.pregnancyNo.numeric && $v.data.common.pregnancyNo.$dirty">
                                {{ errors.inputError(lang[local].pregnancyNo) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="form-group">
                        <label class="mx-2">{{lang[local].bloodGroup}}</label>
                        <Dropdown 
                            :placeholder="lang[local].bloodGroup" 
                            :options="bloodGroupOptions"
                            v-model="data.common.bloodGroup"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                        ></Dropdown>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].RH}}</label>
                        <Dropdown 
                            type="number"   
                            :placeholder="lang[local].RH" 
                            :options="RHOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.common.rH"
                        ></Dropdown>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].prevLabours}}</label>
                        <Dropdown 
                            type="number"   
                            :placeholder="lang[local].prevLabours" 
                            :options="prevLaboursOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.common.prevLabours"
                        ></Dropdown>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].fetusesNo}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].fetusesNo" 
                            v-model="data.common.fetusesNo"
                            @change="$v.data.common.fetusesNo.$touch()" 
                            :class="{'border-error':$v.data.common.fetusesNo.$invalid  && $v.data.common.fetusesNo.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.common.fetusesNo.numeric && $v.data.common.fetusesNo.$dirty">
                                {{ errors.inputError(lang[local].fetusesNo) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].sex}}</label>
                        <Dropdown 
                            :placeholder="lang[local].sex" 
                            :options="sexOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.common.sex"
                        ></Dropdown>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="mt-3">{{lang[local].womanHealthTitle}}</h3>
        <div class="woman-heath ">
            <div class="row">
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.gravida}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].womanHealth.gravida" 
                            v-model="data.womanHealth.gravida"
                            @change="$v.data.womanHealth.gravida.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.gravida.$invalid  && $v.data.womanHealth.gravida.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.gravida.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].womanHealth.gravida) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.gravida.minLen">
                                {{errors.minLengthError(lang[local].womanHealth.gravida,$v.data.womanHealth.gravida.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.gravida.maxLen">
                                {{errors.maxLengthError(lang[local].womanHealth.gravida, $v.data.womanHealth.gravida.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.term}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].womanHealth.term" 
                            v-model="data.womanHealth.term"
                            @change="$v.data.womanHealth.term.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.term.$invalid  && $v.data.womanHealth.term.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.term.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].womanHealth.term) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.term.minLen">
                                {{errors.minLengthError(lang[local].womanHealth.term,$v.data.womanHealth.term.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.term.maxLen">
                                {{errors.maxLengthError(lang[local].womanHealth.term, $v.data.womanHealth.term.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.preterm}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].womanHealth.preterm" 
                            v-model="data.womanHealth.preterm"
                            @change="$v.data.womanHealth.preterm.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.preterm.$invalid  && $v.data.womanHealth.preterm.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.preterm.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].womanHealth.preterm) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.preterm.minLen">
                                {{errors.minLengthError(lang[local].womanHealth.preterm,$v.data.womanHealth.preterm.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.preterm.maxLen">
                                {{errors.maxLengthError(lang[local].womanHealth.preterm, $v.data.womanHealth.preterm.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.abortion}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.abortion" 
                            v-model="data.womanHealth.abortion"
                            @change="$v.data.womanHealth.abortion.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.abortion.$invalid  && $v.data.womanHealth.abortion.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.abortion.numeric && $v.data.womanHealth.abortion.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.abortion) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.living}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.living" 
                            v-model="data.womanHealth.living"
                            @change="$v.data.womanHealth.living.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.living.$invalid  && $v.data.womanHealth.living.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.living.numeric && $v.data.womanHealth.living.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.living) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.lmp}}</label>
                        <Calendar 
                            :showIcon="true"  
                            :placeholder="lang[local].womanHealth.lmp" 
                            :manualInput="false" 
                            :monthNavigator="true" 
                            :yearNavigator="true" 
                            yearRange="1950:2030" 
                            :touchUI.sync="displayUI" 
                            dateFormat="mm-dd-yy"
                            v-model="data.womanHealth.lmp"
                            :class="{'border-error':!$v.data.womanHealth.lmp.notValidDate  && $v.data.womanHealth.lmp.$dirty}"
                            ></Calendar>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.lmp.notValidDate && $v.data.womanHealth.lmp.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.lmp) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.edd}}</label>
                        <Calendar 
                            :showIcon="true"  
                            :placeholder="lang[local].womanHealth.edd" 
                            :manualInput="false" 
                            :monthNavigator="true" 
                            :yearNavigator="true" 
                            yearRange="1950:2030" 
                            :touchUI.sync="displayUI" 
                            dateFormat="mm-dd-yy"
                            v-model="data.womanHealth.edd"
                            :class="{'border-error':!$v.data.womanHealth.edd.notValidDate  && $v.data.womanHealth.edd.$dirty}"
                        ></Calendar>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.edd.notValidDate && $v.data.womanHealth.edd.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.edd) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.mens}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.mens" 
                            v-model="data.womanHealth.mens"
                            @change="$v.data.womanHealth.mens.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.mens.$invalid  && $v.data.womanHealth.mens.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.mens.numeric && $v.data.womanHealth.mens.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.mens) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.mP}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.mP" 
                            v-model="data.womanHealth.mP"
                            @change="$v.data.womanHealth.mP.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.mP.$invalid  && $v.data.womanHealth.mP.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.mP.numeric && $v.data.womanHealth.mP.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.mP) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.cSNo}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.cSNo" 
                            v-model="data.womanHealth.cSNo"
                            @change="$v.data.womanHealth.cSNo.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.cSNo.$invalid  && $v.data.womanHealth.cSNo.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.cSNo.numeric && $v.data.womanHealth.cSNo.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.cSNo) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.cSDate}}</label>
                        <Calendar 
                            :showIcon="true"  
                            :placeholder="lang[local].womanHealth.cSDate"  
                            :manualInput="false" 
                            :monthNavigator="true" 
                            :yearNavigator="true" 
                            yearRange="1950:2030" 
                            :touchUI.sync="displayUI" 
                            dateFormat="mm-dd-yy"
                            v-model="data.womanHealth.cSDate"
                            :class="{'border-error':!$v.data.womanHealth.cSDate.notValidDate  && $v.data.womanHealth.cSDate.$dirty}"
                        ></Calendar>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.cSDate.notValidDate && $v.data.womanHealth.cSDate.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.cSDate) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.gA.week}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.gA.week" 
                            v-model="data.womanHealth.gA.week"
                            @change="$v.data.womanHealth.gA.week.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.gA.week.$invalid  && $v.data.womanHealth.gA.week.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.gA.week.numeric && $v.data.womanHealth.gA.week.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.gA.week) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.gA.days}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].womanHealth.gA.days" 
                            v-model="data.womanHealth.gA.days"
                            @change="$v.data.womanHealth.gA.days.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.gA.days.$invalid  && $v.data.womanHealth.gA.days.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.gA.days.numeric && $v.data.womanHealth.gA.days.$dirty">
                                {{ errors.inputError(lang[local].womanHealth.gA.days) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].womanHealth.comment}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].womanHealth.comment" 
                            v-model="data.womanHealth.comment"
                            @change="$v.data.womanHealth.comment.$touch()" 
                            :class="{'border-error':$v.data.womanHealth.comment.$invalid  && $v.data.womanHealth.comment.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.comment.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].womanHealth.comment) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.comment.minLen">
                                {{errors.minLengthError(lang[local].womanHealth.comment,$v.data.womanHealth.comment.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.comment.maxLen">
                                {{errors.maxLengthError(lang[local].womanHealth.comment, $v.data.womanHealth.comment.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3 " >
                    <div class="form-group  mt-4">
                        <Button class="d-block" :label="lang[local].womanHealth.uploadFile" @click="$refs.upladreportfile.click()"></Button>
                        <input type="file" accept=".jpg,jpeg,.png,.docx,.pdf"   @input="getReportFile($event)" style="display: none ; " ref="upladreportfile" name="" id="">
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.womanHealth.uploadFile.fileExtension">
                                {{ errors.fileTypeError() }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.womanHealth.uploadFile.imageSize">
                                {{errors.fileSizeError(5) }}
                            </small>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3 ">
                    <div class="upladed-files inner-img-box"  v-if="data.womanHealth.uploadFile&&!$v.data.womanHealth.uploadFile.$invalid">
                        <img v-if="data.womanHealth.uploadFile.type.includes('image')"  :src="windOb(data.womanHealth.uploadFile)">
                        <div v-if="data.womanHealth.uploadFile.type.includes('pdf')" class="pdf-file">  
                            <img src="../../UI/icons/pdf.svg" alt="">
                        </div>
                        <div v-if="data.womanHealth.uploadFile.type.includes('docx')" class="docx-file">
                            <img src="../../UI/icons/word.svg" alt="">
                        </div>
                        <small class="d-block">{{lang[local].fileName}}:{{data.womanHealth.uploadFile.name}}</small>
                        <small class="d-block">{{lang[local].filesize}}:{{(data.womanHealth.uploadFile.size/(1000*1024)).toFixed(2)}} {{lang[local].mb}}</small>
                        <span  class="delete-image" @click="deleteFile()"><i class="pi pi-times"></i></span>
                    </div>
                </div>
            </div>
            
        </div>

        <h3 class="mt-3">{{lang[local].antenatalTitle}}</h3>
        <div class="antenatal">
            <div class="row">
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.date}}</label>
                        <Calendar 
                            :showIcon="true"  
                            :placeholder="lang[local].antenatal.date"   
                            :manualInput="false" 
                            :monthNavigator="true" 
                            :yearNavigator="true" 
                            yearRange="1950:2030" 
                            :touchUI.sync="displayUI" 
                            dateFormat="mm-dd-yy"
                            v-model="antenatal.date"
                            :class="{'border-error':!$v.antenatal.date.notValidDate  && $v.antenatal.date.$dirty}"
                        ></Calendar>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.date.notValidDate && $v.  antenatal.date.$dirty">
                                {{ errors.inputError(lang[local].antenatal.date) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.bP}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].antenatal.bP" 
                            v-model="antenatal.bP"
                            @change="$v.antenatal.bP.$touch()" 
                            :class="{'border-error':$v.antenatal.bP.$invalid  && $v.antenatal.bP.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.bP.numeric && $v.antenatal.bP.$dirty">
                                {{ errors.inputError(lang[local].antenatal.bP) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.urine}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.urine" 
                            v-model="antenatal.urine"
                            @change="$v.antenatal.urine.$touch()" 
                            :class="{'border-error':$v.antenatal.urine.$invalid  && $v.antenatal.urine.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.urine.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.urine) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.urine.minLen">
                                {{errors.minLengthError(lang[local].antenatal.urine,$v.antenatal.urine.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.urine.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.urine, $v.antenatal.urine.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.bloodSugar}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.bloodSugar" 
                            v-model="antenatal.bloodSugar"
                            @change="$v.antenatal.bloodSugar.$touch()" 
                            :class="{'border-error':$v.antenatal.bloodSugar.$invalid  && $v.antenatal.bloodSugar.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.bloodSugar.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.bloodSugar) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.bloodSugar.minLen">
                                {{errors.minLengthError(lang[local].antenatal.bloodSugar,$v.antenatal.bloodSugar.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.bloodSugar.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.bloodSugar, $v.antenatal.bloodSugar.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.hb}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.hb" 
                            v-model="antenatal.hb"
                            @change="$v.antenatal.hb.$touch()" 
                            :class="{'border-error':$v.antenatal.hb.$invalid  && $v.antenatal.hb.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.hb.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.hb) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.hb.minLen">
                                {{errors.minLengthError(lang[local].antenatal.hb,$v.antenatal.hb.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.hb.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.hb, $v.antenatal.hb.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.wtKg}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.wtKg" 
                            v-model="antenatal.wtKg"
                            @change="$v.antenatal.wtKg.$touch()" 
                            :class="{'border-error':$v.antenatal.wtKg.$invalid  && $v.antenatal.wtKg.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.wtKg.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.wtKg) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.wtKg.minLen">
                                {{errors.minLengthError(lang[local].antenatal.wtKg,$v.antenatal.wtKg.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.wtKg.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.wtKg, $v.antenatal.wtKg.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.gestWks}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.gestWks" 
                            v-model="antenatal.gestWks"
                            @change="$v.antenatal.gestWks.$touch()" 
                            :class="{'border-error':$v.antenatal.gestWks.$invalid  && $v.antenatal.gestWks.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.gestWks.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.gestWks) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.gestWks.minLen">
                                {{errors.minLengthError(lang[local].antenatal.gestWks,$v.antenatal.gestWks.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.gestWks.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.gestWks, $v.antenatal.gestWks.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.uSGA}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.uSGA" 
                            v-model="antenatal.uSGA"
                            @change="$v.antenatal.uSGA.$touch()" 
                            :class="{'border-error':$v.antenatal.uSGA.$invalid  && $v.antenatal.uSGA.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.uSGA.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.uSGA) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.minLen">
                                {{errors.minLengthError(lang[local].antenatal.uSGA,$v.antenatal.uSGA.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.uSGA, $v.antenatal.uSGA.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.fHR}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.fHR" 
                            v-model="antenatal.fHR"
                            @change="$v.antenatal.fHR.$touch()" 
                            :class="{'border-error':$v.antenatal.fHR.$invalid  && $v.antenatal.fHR.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.fHR.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.fHR) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.fHR.minLen">
                                {{errors.minLengthError(lang[local].antenatal.fHR,$v.antenatal.fHR.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.fHR.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.fHR, $v.antenatal.fHR.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.lLAedema}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.lLAedema" 
                            v-model="antenatal.lLAedema"
                            @change="$v.antenatal.lLAedema.$touch()" 
                            :class="{'border-error':$v.antenatal.lLAedema.$invalid  && $v.antenatal.lLAedema.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.lLAedema.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.lLAedema) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.lLAedema.minLen">
                                {{errors.minLengthError(lang[local].antenatal.lLAedema,$v.antenatal.lLAedema.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.lLAedema, $v.antenatal.lLAedema.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.presentationPos}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.presentationPos" 
                            v-model="antenatal.presentationPos"
                            @change="$v.antenatal.presentationPos.$touch()" 
                            :class="{'border-error':$v.antenatal.presentationPos.$invalid  && $v.antenatal.presentationPos.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.presentationPos.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.presentationPos) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.presentationPos.minLen">
                                {{errors.minLengthError(lang[local].antenatal.presentationPos,$v.antenatal.presentationPos.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.presentationPos, $v.antenatal.presentationPos.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.vaccinationInvestigation}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.vaccinationInvestigation" 
                            v-model="antenatal.vaccinationInvestigation"
                            @change="$v.antenatal.vaccinationInvestigation.$touch()" 
                            :class="{'border-error':$v.antenatal.vaccinationInvestigation.$invalid  && $v.antenatal.vaccinationInvestigation.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.vaccinationInvestigation.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.vaccinationInvestigation) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.vaccinationInvestigation.minLen">
                                {{errors.minLengthError(lang[local].antenatal.vaccinationInvestigation,$v.antenatal.vaccinationInvestigation.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.vaccinationInvestigation, $v.antenatal.vaccinationInvestigation.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.complaint}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.complaint" 
                            v-model="antenatal.complaint"
                            @change="$v.antenatal.complaint.$touch()" 
                            :class="{'border-error':$v.antenatal.complaint.$invalid  && $v.antenatal.complaint.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.complaint.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.complaint) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.complaint.minLen">
                                {{errors.minLengthError(lang[local].antenatal.complaint,$v.antenatal.complaint.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.complaint, $v.antenatal.complaint.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].antenatal.riskFactor}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].antenatal.riskFactor" 
                            v-model="antenatal.riskFactor"
                            @change="$v.antenatal.riskFactor.$touch()" 
                            :class="{'border-error':$v.antenatal.riskFactor.$invalid  && $v.antenatal.riskFactor.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.antenatal.riskFactor.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].antenatal.riskFactor) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.riskFactor.minLen">
                                {{errors.minLengthError(lang[local].antenatal.riskFactor,$v.antenatal.riskFactor.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.antenatal.uSGA.maxLen">
                                {{errors.maxLengthError(lang[local].antenatal.riskFactor, $v.antenatal.riskFactor.$params.maxLen.max) }}
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
                                :disabled="$v.antenatal.$invalid"
                                @click="addToAntenatal"
                                
                            />
                    </div>
                </div>
            </div>
        </div>
        <div class="antenatal-table table-responsive my-4" v-if="data.antenatal.length">
            <table class="table table-bordered ">
                <thead>
                    <tr  scope="row" class="table-header">
                        <th >#</th>
                        <th scope="col"  >{{lang[local].antenatal.date}} </th>
                        <th scope="col"  >{{lang[local].antenatal.bP}} </th>
                        <th scope="col"  >{{lang[local].antenatal.urine}} </th>
                        <th scope="col"  >{{lang[local].antenatal.bloodSugar}} </th>
                        <th scope="col"  >{{lang[local].antenatal.hb}} </th>
                        <th scope="col"  >{{lang[local].antenatal.wtKg}} </th>
                        <th scope="col"  >{{lang[local].antenatal.gestWks}} </th>
                        <th scope="col"  >{{lang[local].antenatal.uSGA}} </th>
                        <th scope="col"  >{{lang[local].antenatal.fHR}} </th>
                        <th scope="col"  >{{lang[local].antenatal.lLAedema}} </th>
                        <th scope="col"  >{{lang[local].antenatal.presentationPos}} </th>
                        <th scope="col"  >{{lang[local].antenatal.vaccinationInvestigation}} </th>
                        <th scope="col"  >{{lang[local].antenatal.complaint}} </th>
                        <th scope="col"  >{{lang[local].antenatal.riskFactor}} </th>
                        <th scope="col"  >{{lang[local].antenatal.settings}} </th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(row,index) in data.antenatal" :key="index" >
                        <td scope="row" >{{index+1}}</td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <Calendar 
                                        :showIcon="true"  
                                        :placeholder="lang[local].antenatal.date"   
                                        :manualInput="false" 
                                        :monthNavigator="true" 
                                        :yearNavigator="true" 
                                        yearRange="1950:2030" 
                                        :touchUI.sync="displayUI" 
                                        dateFormat="mm-dd-yy"
                                        v-model="row.date"
                                        :class="{'border-error':!$v.data.antenatal.$each[index].notValidDate  && $v.data.antenatal.$each[index].$dirty}"
                                    ></Calendar>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].notValidDate && $v.data.antenatal.$each[index].$dirty">
                                            {{ errors.inputError(lang[local].antenatal.date) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.date?row.date.toISOString().split('T')[0]:row.date}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="number" 
                                    :placeholder="lang[local].antenatal.bP" 
                                    v-model="row.bP"
                                    @change="$v.data.antenatal.$each[index].bP.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].bP.$invalid  && $v.data.antenatal.$each[index].bP.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].bP.numeric && $v.data.antenatal.$each[index].bP.$dirty">
                                        {{ errors.inputError(lang[local].antenatal.bP) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.bP}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.urine" 
                                    v-model="row.urine"
                                    @change="$v.data.antenatal.$each[index].urine.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].urine.$invalid  && $v.data.antenatal.$each[index].urine.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].urine.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.urine) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].urine.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.urine,$v.data.antenatal.$each[index].urine.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].urine.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.urine, $v.data.antenatal.$each[index].urine.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.urine}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.bloodSugar" 
                                    v-model="row.bloodSugar"
                                    @change="$v.data.antenatal.$each[index].bloodSugar.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].bloodSugar.$invalid  && $v.data.antenatal.$each[index].bloodSugar.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].bloodSugar.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.bloodSugar) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].bloodSugar.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.bloodSugar,$v.data.antenatal.$each[index].bloodSugar.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].bloodSugar.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.bloodSugar, $v.data.antenatal.$each[index].bloodSugar.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.bloodSugar}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.hb" 
                                    v-model="row.hb"
                                    @change="$v.data.antenatal.$each[index].hb.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].hb.$invalid  && $v.data.antenatal.$each[index].hb.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].hb.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.hb) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].hb.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.hb,$v.data.antenatal.$each[index].hb.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].hb.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.hb, $v.data.antenatal.$each[index].hb.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.hb}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.wtKg" 
                                    v-model="row.wtKg"
                                    @change="$v.data.antenatal.$each[index].wtKg.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].wtKg.$invalid  && $v.data.antenatal.$each[index].wtKg.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].wtKg.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.wtKg) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].wtKg.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.wtKg,$v.data.antenatal.$each[index].wtKg.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].wtKg.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.wtKg, $v.data.antenatal.$each[index].wtKg.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.wtKg}}</span>
                        </td>
                        <td scope="row" >
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.gestWks" 
                                    v-model="row.gestWks"
                                    @change="$v.data.antenatal.$each[index].gestWks.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].gestWks.$invalid  && $v.data.antenatal.$each[index].gestWks.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].gestWks.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.gestWks) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].gestWks.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.gestWks,$v.data.antenatal.$each[index].gestWks.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].gestWks.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.gestWks, $v.data.antenatal.$each[index].gestWks.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.gestWks}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.uSGA" 
                                    v-model="row.uSGA"
                                    @change="$v.data.antenatal.$each[index].uSGA.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].uSGA.$invalid  && $v.data.antenatal.$each[index].uSGA.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].uSGA.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.uSGA) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].uSGA.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.uSGA,$v.data.antenatal.$each[index].uSGA.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].uSGA.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.uSGA, $v.data.antenatal.$each[index].uSGA.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.uSGA}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.fHR" 
                                    v-model="row.fHR"
                                    @change="$v.data.antenatal.$each[index].fHR.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].fHR.$invalid  && $v.data.antenatal.$each[index].fHR.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].fHR.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.fHR) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].fHR.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.fHR,$v.data.antenatal.$each[index].fHR.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].fHR.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.fHR, $v.data.antenatal.$each[index].fHR.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.fHR}}</span>
                        </td >
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.lLAedema" 
                                    v-model="row.lLAedema"
                                    @change="$v.data.antenatal.$each[index].lLAedema.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].lLAedema.$invalid  && $v.data.antenatal.$each[index].lLAedema.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].lLAedema.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.lLAedema) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].lLAedema.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.lLAedema,$v.data.antenatal.$each[index].lLAedema.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].lLAedema.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.lLAedema, $v.data.antenatal.$each[index].lLAedema.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.lLAedema}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.presentationPos" 
                                    v-model="row.presentationPos"
                                    @change="$v.data.antenatal.$each[index].presentationPos.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].presentationPos.$invalid  && $v.data.antenatal.$each[index].presentationPos.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].presentationPos.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.presentationPos) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].presentationPos.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.presentationPos,$v.data.antenatal.$each[index].presentationPos.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].presentationPos.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.presentationPos, $v.data.antenatal.$each[index].presentationPos.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.presentationPos}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.vaccinationInvestigation" 
                                    v-model="row.vaccinationInvestigation"
                                    @change="$v.data.antenatal.$each[index].vaccinationInvestigation.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].vaccinationInvestigation.$invalid  && $v.data.antenatal.$each[index].vaccinationInvestigation.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].vaccinationInvestigation.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.vaccinationInvestigation) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].vaccinationInvestigation.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.vaccinationInvestigation,$v.data.antenatal.$each[index].vaccinationInvestigation.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].vaccinationInvestigation.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.vaccinationInvestigation, $v.data.antenatal.$each[index].vaccinationInvestigation.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.vaccinationInvestigation}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.complaint" 
                                    v-model="row.complaint"
                                    @change="$v.data.antenatal.$each[index].complaint.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].complaint.$invalid  && $v.data.antenatal.$each[index].complaint.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].complaint.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.complaint) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].complaint.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.complaint,$v.data.antenatal.$each[index].complaint.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].complaint.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.complaint, $v.data.antenatal.$each[index].complaint.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.complaint}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].antenatal.riskFactor" 
                                    v-model="row.riskFactor"
                                    @change="$v.data.antenatal.$each[index].riskFactor.$touch()" 
                                    :class="{'border-error':$v.data.antenatal.$each[index].riskFactor.$invalid  && $v.data.antenatal.$each[index].riskFactor.$dirty}"
                                ></InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.antenatal.$each[index].riskFactor.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].antenatal.riskFactor) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].riskFactor.minLen">
                                        {{errors.minLengthError(lang[local].antenatal.riskFactor,$v.data.antenatal.$each[index].riskFactor.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.antenatal.$each[index].riskFactor.maxLen">
                                        {{errors.maxLengthError(lang[local].antenatal.riskFactor, $v.data.antenatal.$each[index].riskFactor.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.riskFactor}}</span>
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


    </div>
</template>
<script>
// minLength,maxLength,decimal,
import {numeric,minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags,notValidDate ,fileExtension,imageSize} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError,fileTypeError,fileSizeError} from "../helpers/errors";
import InputText from "primevue/inputtext";
import Dropdown from 'primevue/dropdown';
import Button from "primevue/button";
import Calendar from 'primevue/calendar';

export default {
    props:['data','antenatal'],
    components:{
        InputText,
        Dropdown,
        Button,
        Calendar
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    pregnancyNo:"Pregnancy No.",
                    bloodGroup:"Blood Group",
                    RH:"RH",
                    prevLabours:"Prev.Labours",
                    fetusesNo:"Fetuses No.",
                    sex:"Sex",
                    womanHealthTitle:"Woman Health",
                    womanHealth:{
                        gravida:"Gravida",
                        term:"Term",
                        preterm:"Preterm",
                        abortion:"Abortion",
                        living:"Living",
                        lmp:"Lmp",
                        edd:"Edd",
                        mens:"Mens (day)",
                        mP:"MP",
                        cSNo:"C.S. No.",
                        cSDate:"C.S Date",
                        comment:"comment",
                        gA:{days:"GA weeks",week:"GA days"},
                        uploadFile:"UPLOAD BIRTH REPORT",
                        },
                        fileName:"name",
                        filesize:"size",
                        mb:"MB",
                        antenatalTitle:"Antenatal",
                        antenatal:{
                            date:"Date",
                            bP:"B.P",
                            urine:"Urine",
                            bloodSugar:"Blood Sugar",
                            hb:"Hb",
                            wtKg:"Wt. Kg",
                            gestWks:"Gest. Wks.",
                            uSGA:"U/S G.A.",
                            fHR:"FHR",
                            lLAedema:"LL.Aedema",
                            presentationPos:"Presentation & Pos.",
                            vaccinationInvestigation:"Vaccination Investigation",
                            complaint:"Complaint",
                            riskFactor:"Risk Factor",
                            settings:"settings"
                        }

                },
                ar:{
                    pregnancyNo:"Pregnancy No.",
                    bloodGroup:"Blood Group",
                    RH:"RH",
                    prevLabours:"Prev.Labours",
                    fetusesNo:"Fetuses No.",
                    sex:"Sex",
                    womanHealthTitle:"Woman Health",
                    womanHealth:{
                        gravida:"Gravida",
                        term:"Term",
                        preterm:"Preterm",
                        abortion:"Abortion",
                        living:"Living",
                        lmp:"Lmp",
                        edd:"Edd",
                        mens:"Mens (day)",
                        mP:"MP",
                        cSNo:"C.S. No.",
                        cSDate:"C.S Date",
                        comment:"comment",
                        gA:{days:"GA weeks",week:"GA days"},
                        uploadFile:"UPLOAD BIRTH REPORT",
                        },
                        fileName:"name",
                        filesize:"size",
                        mb:"MB",
                        antenatalTitle:"Antenatal",
                        antenatal:{
                            date:"Date",
                            bP:"B.P",
                            urine:"Urine",
                            bloodSugar:"Blood Sugar",
                            hb:"Hb",
                            wtKg:"Wt. Kg",
                            gestWks:"Gest. Wks.",
                            uSGA:"U/S G.A.",
                            fHR:"FHR",
                            lLAedema:"LL.Aedema",
                            presentationPos:"Presentation & Pos.",
                            vaccinationInvestigation:"Vaccination Investigation",
                            complaint:"Complaint",
                            riskFactor:"Risk Factor",
                            settings:"settings"
                        }

                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
                fileTypeError,
                fileSizeError
            },
            bloodGroupOptions:[
                {english:'A+',arabic:'A+'},
                {english:'A-',arabic:'A-'},
                {english:'B+',arabic:'B+'},
                {english:'B-',arabic:'B-'},
                {english:'O+',arabic:'O+'},
                {english:'O-',arabic:'O-'},
                {english:'AB+',arabic:'AB+'},
                {english:'AB-',arabic:'AB-'},
            ],
            RHOptions:[
                {english:'-VE',arabic:'-VE'},
                {english:'+VE',arabic:'+VE'},   
            ],
            prevLaboursOptions:[
                {english:'normal',arabic:'normal'},
                {english:'c.s.',arabic:'c.s.'},
                {english:'normal/C. S.',arabic:'normal/C. S.'},
            ],
            sexOptions:[
                {english:'male',arabic:'male'},
                {english:'female',arabic:'female'},
                {english:'m/f',arabic:'m/f'},
            ],
            windOb:URL.createObjectURL,
            editingId:-1,
            displayUI:false,
        }
    },
    created(){
        this.displayUI = window.innerWidth <=425 ;
    },
    validations:{
        data:{
            common:{
                pregnancyNo:{
                    numeric
                },
                fetusesNo:{
                    numeric
                },
            },
            womanHealth:{
                gravida:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                term:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                preterm:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                abortion:{
                    numeric
                },
                living:{
                    numeric
                },
                lmp:{
                    notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                    },
                },
                edd:{
                    notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                    },
                },
                mens:{
                    numeric
                },
                mP:{
                    numeric
                },
                cSNo:{
                    numeric
                },
                cSDate:{
                    notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                    },
                },
                gA:{
                    week:{numeric},
                    days:{numeric}
                },
                comment:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
                uploadFile:{
                    fileExtension(val){
                        if (!val) return true;
                    return fileExtension(val);
                    },
                    imageSize(val){
                        if (!val) return true;
                    return imageSize(val,5 * 1024 * 1000);
                    }

                },
            },
            antenatal:{
                $each:{ 
                    date: {
                        notValidDate(val) {
                        if (!val) return true;
                        return !notValidDate(val);
                        },
                    }, 
                    bP: {
                        numeric
                    }, 
                    urine:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    bloodSugar: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    hb: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    wtKg: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    gestWks: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    uSGA: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    fHR:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    lLAedema: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    presentationPos: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    vaccinationInvestigation: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    complaint:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    riskFactor: {
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                }
            },
        },
        antenatal:{ 
            date: {
                notValidDate(val) {
                if (!val) return true;
                return !notValidDate(val);
                },
            }, 
            bP: {
                numeric
            }, 
            urine:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            bloodSugar: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            hb: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            wtKg: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            gestWks: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            uSGA: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            fHR:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            lLAedema: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            presentationPos: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            vaccinationInvestigation: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            complaint:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            riskFactor: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
        }
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setOBJObstetricIsValid",this.$v.data.$invalid ||this.$v.antenatal.$invalid);
            },
            deep: true,
        },
        antenatal: {
            handler() {
                this.$store.dispatch("setOBJObstetricIsValid",this.$v.data.$invalid ||this.$v.antenatal.$invalid);
            },
            deep: true,
        },
    },
    methods:{
        getReportFile(e){
            let target = e.target
            let file = e.target.files[0]
            this.$v.data.womanHealth.uploadFile.$touch();
            this.data.womanHealth.uploadFile = file ;
            target.value =""
        },
        deleteFile(){
            this.data.womanHealth.uploadFile = null ;
            this.$v.data.womanHealth.uploadFile.$reset();
        },
        addToAntenatal(){
            if(!this.$v.antenatal.$invalid){
                this.data.antenatal.push({...this.antenatal});
                this.$emit("restData");
                this.$v.antenatal.$reset()
            }
        },
        editRow(index){
            
        if(!this.$v.data.antenatal.$invalid)
            this.editingId=index;
        },
        deleteFromTable(index){
            this.data.antenatal.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.antenatal.$invalid)
                this.editingId= -1 ;
            console.log(this.editingId)
        }
    },
}
</script>
<style lang="scss" scoped>
.obgyn-obstetric{
    .inner-img-box{
        position: relative;
        box-shadow: 1px 1px 5px #f8f9fa, -1px -1px 5px #f8f9fa;   
        width:150px;
        height:150px;   
        img{
            padding: 15px;
            image-rendering:-webkit-optimize-contrast;
            width: 100%;
            height: 100%;
        }
        
        .docx-file,.pdf-file{
            text-align: center;
            span{
                display: block;
                font-size: 60px;
            }
        }
        small{
            text-align: center;
            word-break: break-all;
        }
        
        .delete-image{
            position: absolute;
            top:0;
            right:0;
            padding:6px;
            background-color:red;
            cursor: pointer;
            i{
                color: #fff;
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