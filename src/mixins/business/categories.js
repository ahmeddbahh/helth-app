export default {
    data(){
        return {
            categories:[
                {
                    enTitle:'Clinic',
                    arTitle:'عيادة',
                    icon:require('../../UI/icons/business/categories/ambulatory_clinic.svg'),
                    to:{name:"chooseClinic"}
                },
                {
                    enTitle:'Pharmacy',
                    arTitle:'صيدلية',
                    icon:require('../../UI/icons/business/categories/pharmacy.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Laboratory',
                    arTitle:'معمل',
                    icon:require('../../UI/icons/business/categories/microscope.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Hospital',
                    arTitle:'مستشفي',
                    icon:require('../../UI/icons/business/categories/hospital.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Drug Wholesaler',
                    arTitle:'تاجر أدوية بالجملة',
                    icon:require('../../UI/icons/business/categories/medicines.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Pharmaceutical Company',
                    arTitle:'شركة أدوية',
                    icon:require('../../UI/icons/business/categories/company.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Health Insurance Company',
                    arTitle:'شركة التأمين الصحي',
                    icon:require('../../UI/icons/business/categories/company.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Nurse',
                    arTitle:'ممرض / ممرضة',
                    icon:require('../../UI/icons/business/categories/nurse.svg'),
                    to:'/business/chooseclinic'
                },
                {
                    enTitle:'Medical Field Student',
                    arTitle:'طالب ميداني طبي',
                    icon:require('../../UI/icons/business/categories/doctor.svg'),
                    to:'/business/chooseclinic'
                },
            ],
      }
    }
}