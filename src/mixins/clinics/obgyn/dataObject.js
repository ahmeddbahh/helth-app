import { prescriptionData } from "../../../components/helpers/RxData";
export default {
    data() {
        return {
            data: {
                diagnosis: {
                    mainDiagnosis: {
                        complaint: null,
                        mainDiagnosis: [],
                        details: null
                    }
                },
                medicalRx: [],
                obstetric: {
                    common: {
                        pregnancyNo: null,
                        bloodGroup: {
                            english: null,
                            arabic: null
                        },
                        rH: {
                            english: null,
                            arabic: null
                        },
                        prevLabours: {
                            english: null,
                            arabic: null
                        },
                        fetusesNo: null,
                        sex: {
                            english: null,
                            arabic: null
                        }
                    },
                    womanHealth: {
                        gravida: null,
                        term: null,
                        preterm: null,
                        abortion: null, //number
                        living: null, //number
                        lmp: null, // date
                        edd: null, // date
                        mens: null, //number
                        mP: null, //number
                        cSNo: null, //number
                        cSDate: null, // date
                        gA: {
                            week: null, // number
                            days: null // number
                        },
                        comment: null,
                        uploadFile: null,
                    },
                    antenatal: []
                },
                gyn: {
                    infertility: {
                        primary: false,
                        secondary: false,
                        duration: {
                            number: null,
                            selection: {
                                english: null,
                                arabic: null
                            }
                        },
                        count: null,
                        gradA: null,
                        gradB: null,
                        other: null,
                        husband: {
                            english: null,
                            arabic: null
                        },
                        lH: null,
                        fsh: null,
                        tsh: null,
                        amh: null,
                        semen: {
                            english: null,
                            arabic: null
                        },
                        prolactin: null,
                        progestron: null,
                        e2: null,
                        wife: {
                            english: null,
                            arabic: null
                        },
                        cycle: {
                            english: null,
                            arabic: null
                        },
                        ultrasound: {
                            english: null,
                            arabic: null
                        },
                        hsg: {
                            english: null,
                            arabic: null
                        },
                        leftTube: {
                            english: null,
                            arabic: null
                        },
                        rightTube: {
                            english: null,
                            arabic: null
                        },
                        laproscope: null
                    },
                    folliculometry: {
                        lmp: null,
                        comment: null,
                        otherData: []
                    },
                    pid: {
                        otherData: [],
                        Laproscope: null
                    },
                    contraception: {
                        comment: null,
                        otherData: []
                    },
                    perimenopausalBleeding: {
                        comment: null,
                        otherData: []
                    },
                    postMenopausalBleeding: {
                        comment: null,
                        otherData: []
                    }
                },
                borns: {
                    common: {
                        bornPlace: null,
                        motherComplications: null,
                        bornMethod: null,
                        childComplications: null,
                        bornResult: null
                    },
                    otherData: [],
                    comment: null
                },
                pregUs: {
                    fetus: {
                        common: {
                            number: null,
                            fhm: null,
                            lie: null,
                            congenitalAnomalies: null,
                            fl: null,
                            crl: null,
                            fw: null,
                            fetalAge: null,
                            viability: null,
                            movements: null,
                            presentation: null,
                            bpd: null,
                            gs: null,
                            hcAc: null,
                            fhr: null
                        },
                        amnioticFluid: {
                            amount: null,
                            afIndex: null,
                            turbidity: null,
                            deepestPocket: null
                        },
                        placentaMyometrium: {
                            site: null,
                            retroplacentalAbnormalities: null,
                            ovaries: null,
                            grade: null,
                            myometrialMasses: null
                        },
                        other: null,
                    },
                    comment: null
                },
                history: {
                    mainItems: {
                        surgicalHistory: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        pastHistory: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        presentRiskFactors: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        Remarks: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        }
                    },
                    otherData: {
                        husbandName: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        marriagePeriod: null,
                        Marriage: {
                            thereIsAPreviousMarriage: false,
                            sonsOfThisMarriage: false,
                            pregnant: false
                        },
                        age: null,
                        ageAtStartOfMenstruation: null,
                        theAmountOfBleedingInTheMenstrual: null,
                        bleedingDays: null,
                        regularMenstruation: null,
                        ageOfMenopause: null,
                        theFirstDayOfTheLastMenstrualPeriod: null,
                        usingAMethodOfContraception: null,
                        typeOfContraception: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        pregnancyTimes: null,
                        numberOfBirthsFemales: null,
                        numberOfBirthsMales: null,
                        TimesAMiscarriage: null
                    }
                },
                pelvicUs: {
                    uterus: {
                        common: {
                            size: null,
                            shape: null,
                            position: null,
                            uterineCavity: null,
                            enContents: null,
                            myometrium: null
                        },
                        rightOvary: {
                            size: null,
                            shape: null
                        },
                        leftOvary: {
                            size: null,
                            shape: null,
                            adnexae: null,
                            douglasPouch: null,
                            opinion: null
                        },
                        other: null
                    },
                    comment: null
                },
                ultrasoundsAndMedia: []
            },
            initData: {
                medicalRx: prescriptionData(),
                antenatal: {
                    date: null,
                    bP: null,
                    urine: null,
                    bloodSugar: null,
                    hb: null,
                    wtKg: null,
                    gestWks: null,
                    uSGA: null,
                    fHR: null,
                    lLAedema: null,
                    presentationPos: null,
                    vaccinationInvestigation: null,
                    complaint: null,
                    riskFactor: null,
                },
                gyn: {
                    folliculometry: {
                        date: null,
                        day: null,
                        rightOv: null,
                        rSize: null,
                        leftOv: null,
                        lFollicles: null,
                        lSize: null,
                        endo: null,
                        dp: null,
                        mod: null,
                        nextVisit: null
                    },
                    pid: {
                        date: null,
                        cervix: null,
                        ulterus: null,
                        overies: null,
                        nextVisit: null
                    },
                    contraception: {
                        date: null,
                        pills: null,
                        loop: null,
                        injection: null,
                        implanon: null,
                        local: null,
                        nextVisit: null
                    },
                    perimenopausalBleeding: {
                        date: null,
                        fibroid: null,
                        endometrium: null,
                        rightOv: null,
                        leftOv: null,
                        nextVisit: null
                    },
                    postMenopausalBleeding: {
                        date: null,
                        fibroid: null,
                        endometrium: null,
                        overies: null,
                        nextVisit: null
                    },
                },
                borns: {
                    pregnancyNo: null,
                    pregnancyPeriod: null,
                    bornMethod: null,
                    bornPlace: null,
                    bornResult: null,
                    childComplications: null,
                    motherComplications: null,
                    ago: null,
                    remarks: null
                },

            },
            backUpData: {
                medicalRx: prescriptionData(),
                antenatal: {
                    date: null,
                    bP: null,
                    urine: null,
                    bloodSugar: null,
                    hb: null,
                    wtKg: null,
                    gestWks: null,
                    uSGA: null,
                    fHR: null,
                    lLAedema: null,
                    presentationPos: null,
                    vaccinationInvestigation: null,
                    complaint: null,
                    riskFactor: null,
                },
                gyn: {
                    folliculometry: {
                        date: null,
                        day: null,
                        rightOv: null,
                        rSize: null,
                        leftOv: null,
                        lFollicles: null,
                        lSize: null,
                        endo: null,
                        dp: null,
                        mod: null,
                        nextVisit: null
                    },
                    pid: {
                        date: null,
                        cervix: null,
                        ulterus: null,
                        overies: null,
                        nextVisit: null
                    },
                    contraception: {
                        date: null,
                        pills: null,
                        loop: null,
                        injection: null,
                        implanon: null,
                        local: null,
                        nextVisit: null
                    },
                    perimenopausalBleeding: {
                        date: null,
                        fibroid: null,
                        endometrium: null,
                        rightOv: null,
                        leftOv: null,
                        nextVisit: null
                    },
                    postMenopausalBleeding: {
                        date: null,
                        fibroid: null,
                        endometrium: null,
                        overies: null,
                        nextVisit: null
                    },
                },
                borns: {
                    pregnancyNo: null,
                    pregnancyPeriod: null,
                    bornMethod: null,
                    bornPlace: null,
                    bornResult: null,
                    childComplications: null,
                    motherComplications: null,
                    ago: null,
                    remarks: null
                },
            },
            restData: {
                diagnosis: {
                    mainDiagnosis: {
                        complaint: null,
                        mainDiagnosis: [],
                        details: null
                    }
                },
                medicalRx: [],
                obstetric: {
                    common: {
                        pregnancyNo: null,
                        bloodGroup: {
                            english: null,
                            arabic: null
                        },
                        rH: {
                            english: null,
                            arabic: null
                        },
                        prevLabours: {
                            english: null,
                            arabic: null
                        },
                        fetusesNo: null,
                        sex: {
                            english: null,
                            arabic: null
                        }
                    },
                    womanHealth: {
                        gravida: null,
                        term: null,
                        preterm: null,
                        abortion: null, //number
                        living: null, //number
                        lmp: null, // date
                        edd: null, // date
                        mens: null, //number
                        mP: null, //number
                        cSNo: null, //number
                        cSDate: null, // date
                        gA: {
                            week: null, // number
                            days: null // number
                        },
                        comment: null,
                        uploadFile: null,
                    },
                    antenatal: []
                },
                gyn: {
                    infertility: {
                        primary: false,
                        secondary: false,
                        duration: {
                            number: null,
                            selection: {
                                english: null,
                                arabic: null
                            }
                        },
                        count: null,
                        gradA: null,
                        gradB: null,
                        other: null,
                        husband: {
                            english: null,
                            arabic: null
                        },
                        lH: null,
                        fsh: null,
                        tsh: null,
                        amh: null,
                        semen: {
                            english: null,
                            arabic: null
                        },
                        prolactin: null,
                        progestron: null,
                        e2: null,
                        wife: {
                            english: null,
                            arabic: null
                        },
                        cycle: {
                            english: null,
                            arabic: null
                        },
                        ultrasound: {
                            english: null,
                            arabic: null
                        },
                        hsg: {
                            english: null,
                            arabic: null
                        },
                        leftTube: {
                            english: null,
                            arabic: null
                        },
                        rightTube: {
                            english: null,
                            arabic: null
                        },
                        laproscope: null
                    },
                    folliculometry: {
                        lmp: null,
                        comment: null,
                        otherData: []
                    },
                    pid: {
                        otherData: [],
                        Laproscope: null
                    },
                    contraception: {
                        comment: null,
                        otherData: []
                    },
                    perimenopausalBleeding: {
                        comment: null,
                        otherData: []
                    },
                    postMenopausalBleeding: {
                        comment: null,
                        otherData: []
                    }
                },
                borns: {
                    common: {
                        bornPlace: null,
                        motherComplications: null,
                        bornMethod: null,
                        childComplications: null,
                        bornResult: null
                    },
                    otherData: [],
                    comment: null
                },
                pregUs: {
                    fetus: {
                        common: {
                            number: null,
                            fhm: null,
                            lie: null,
                            congenitalAnomalies: null,
                            fl: null,
                            crl: null,
                            fw: null,
                            fetalAge: null,
                            viability: null,
                            movements: null,
                            presentation: null,
                            bpd: null,
                            gs: null,
                            hcAc: null,
                            fhr: null
                        },
                        amnioticFluid: {
                            amount: null,
                            afIndex: null,
                            turbidity: null,
                            deepestPocket: null
                        },
                        placentaMyometrium: {
                            site: null,
                            retroplacentalAbnormalities: null,
                            ovaries: null,
                            grade: null,
                            myometrialMasses: null
                        },
                        other: null,
                    },
                    comment: null
                },
                history: {
                    mainItems: {
                        surgicalHistory: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        pastHistory: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        presentRiskFactors: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        Remarks: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        }
                    },
                    otherData: {
                        husbandName: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        marriagePeriod: null,
                        Marriage: {
                            thereIsAPreviousMarriage: false,
                            sonsOfThisMarriage: false,
                            pregnant: false
                        },
                        age: null,
                        ageAtStartOfMenstruation: null,
                        theAmountOfBleedingInTheMenstrual: null,
                        bleedingDays: null,
                        regularMenstruation: null,
                        ageOfMenopause: null,
                        theFirstDayOfTheLastMenstrualPeriod: null,
                        usingAMethodOfContraception: null,
                        typeOfContraception: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        pregnancyTimes: null,
                        numberOfBirthsFemales: null,
                        numberOfBirthsMales: null,
                        TimesAMiscarriage: null
                    }
                },
                pelvicUs: {
                    uterus: {
                        common: {
                            size: null,
                            shape: null,
                            position: null,
                            uterineCavity: null,
                            enContents: null,
                            myometrium: null
                        },
                        rightOvary: {
                            size: null,
                            shape: null
                        },
                        leftOvary: {
                            size: null,
                            shape: null,
                            adnexae: null,
                            douglasPouch: null,
                            opinion: null
                        },
                        other: null
                    },
                    comment: null
                },
                ultrasoundsAndMedia: []
            }
        }
    },
}