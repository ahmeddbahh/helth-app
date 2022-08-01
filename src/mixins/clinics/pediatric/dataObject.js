export default {
    data() {
        return {
            data: {
                medicalRx: {
                    mainDiagnosis: {
                        complaint: null,
                        mainDiagnosis: [],
                        details: null
                    },
                    rx: []
                },
                feedingManaging: {
                    formula: [],
                    solid: [],
                    breastFeeding: null
                },
                growthCharts: {
                    gender: {
                        english: null,
                        arabic: null
                    },
                    age: null,
                    length: null,
                    weight: null,
                    head: null,
                    BMI: null
                },
                bilirubinChart: {
                    time: null,
                    serumBilirubin: null,
                },
                vaccination: [],
                physicalExam: {
                    physicalExam: {
                        temp: {
                            checked: false,
                            comment: null
                        },
                        skin: {
                            checked: false,
                            comment: null
                        },
                        nodes: {
                            checked: false,
                            comment: null
                        },
                        head: {
                            checked: false,
                            comment: null
                        },
                        eyesLeftRight: {
                            checked: false,
                            comment: null
                        },
                        earsLeftRight: {
                            checked: false,
                            comment: null
                        },
                        nose: {
                            checked: false,
                            comment: null
                        },
                        oropharynx: {
                            checked: false,
                            comment: null
                        },
                        neck: {
                            checked: false,
                            comment: null
                        },
                        chestBreast: {
                            checked: false,
                            comment: null
                        },
                        lung: {
                            checked: false,
                            comment: null
                        },
                        cardiovascular: {
                            checked: false,
                            comment: null
                        },
                        abdomen: {
                            checked: false,
                            comment: null
                        },
                        genitalia: {
                            checked: false,
                            comment: null
                        },
                        hips: {
                            checked: false,
                            comment: null
                        },
                        neuro: {
                            checked: false,
                            comment: null
                        },
                        evidence: {
                            checked: false,
                            comment: null
                        },
                        footLeft: {
                            checked: false,
                            comment: null
                        },
                        footRight: {
                            checked: false,
                            comment: null
                        },
                        handLeft: {
                            checked: false,
                            comment: null
                        },
                        handRight: {
                            checked: false,
                            comment: null
                        },
                        handFingersLeft: {
                            checked: false,
                            comment: null
                        },
                        handFingersRight: {
                            checked: false,
                            comment: null
                        },
                        footFingersLeft: {
                            checked: false,
                            comment: null
                        },
                        footFingerRight: {
                            checked: false,
                            comment: null
                        },

                    },
                    developmentalBehavioral: {
                        vocalizesBabbles: {
                            checked: false,
                            comment: null
                        },
                        recognizesParentsVoice: {
                            checked: false,
                            comment: null
                        },
                        graspingObjects: {
                            checked: false,
                            comment: null
                        },
                        rollsOver: {
                            checked: false,
                            comment: null
                        },
                        hearingFromBirth: {
                            checked: false,
                            comment: null
                        },
                        vision: {
                            checked: false,
                            comment: null
                        },
                        headNeckControl: {
                            checked: false,
                            comment: null
                        },
                        liftsChest: {
                            checked: false,
                            comment: null
                        },
                    },
                },
                history: {
                    medicalHistory: {
                        conditions: {
                            heartDisease: {
                                heartDisease: false,
                                subChecks: {
                                    congestiveHeartFailur: false,
                                    heartAttack: false,
                                    angina: false,
                                    heartValveDisease: false,
                                    heartMurmmur: false,
                                    other: false,
                                    kind: null
                                }
                            },
                            lungDisease: {
                                lungDisease: false,
                                subChecks: {
                                    asthma: false,
                                    emphysema: false,
                                    other: false,
                                    kind: null
                                }
                            },
                            liverDisease: {
                                liverDisease: false,
                                kind: null
                            },
                            kidneyDisease: {
                                kidneyDisease: false,
                                kind: null
                            },
                            thyroidDisease: {
                                thyroidDisease: false,
                                kind: null
                            },
                            canserDisease: {
                                canserDisease: false,
                                kind: null
                            },
                            seizures: false,
                            migraines: false,
                            alcoholism: false,
                            drugAddiction: false,
                            depression: false,
                            anxiety: false,
                            bipolarDisorder: false,
                            chronicFatigueSyndrome: false,
                            arthritis: false,
                            lowBackInjury: false,
                            hIVOrAIDS: false,
                            diverticulitisOrDiverticulosis: false,
                            escophagealRefluxOrStomachUlcer: false,
                            hemorrhoids: false,
                            glaucoma: false,
                            allergicToLatex: false,
                            other: false,
                            kind: null
                        },
                        surgical: [],
                        disability: {
                            visionDisability: {
                                vision: false,
                                subChecks: {
                                    blindness: false,
                                    visionConditions: {
                                        visionConditions: false,
                                        subChecks: {
                                            myopia: false,
                                            hyperopia: false,
                                            astigmatism: false
                                        }
                                    },
                                    lowVision: {
                                        lowVision: false,
                                        subChecks: {
                                            diabeticRetinopathy: false,
                                            ageRelatedMacularDegeneration: false,
                                            glaucoma: false,
                                            cataracts: false
                                        }
                                    },
                                    colorBlindness: {
                                        colorBlindness: false,
                                        subChecks: {
                                            monochromasy: false,
                                            protanomaly: false,
                                            deuteranomaly: false,
                                            dichromasy: false,
                                            protanopia: false,
                                            deuteranopia: false
                                        }
                                    }
                                }
                            },
                            mobilityDisability: {
                                mobility: false,
                                subChecks: {
                                    absentLimb: {
                                        absentLimb: false,
                                        subChecks: {
                                            birthDefect: false,
                                            lossOfLimbsThroughAccidents: false,
                                            amputation: false
                                        }
                                    },
                                    arthritis: {
                                        arthritis: false,
                                        subChecks: {
                                            osteoarthritis: false,
                                            rheumatoidArthritis: false,
                                            septicArthritis: false,
                                            psoriaticArthritis: false,
                                            autoimmuneDiseases: false
                                        }
                                    },
                                    paralysisDue: {
                                        paralysisDue: false,
                                        subChecks: {
                                            paraplegia: false,
                                            quadriplegiaOrTetraplegia: false
                                        }
                                    },
                                    cerebralPalsy: false,
                                    multipleSclerosis: false,
                                    muscularDystrophy: false,
                                    motorNeuroneDisease: false,
                                    caudaEquinaSyndrome: false,
                                    hemiplegia: false,
                                    paralysisOfTheFace: false,
                                    guillainBarreSyndrome: false,
                                    parkinsonDisease: false,
                                    polio: false
                                }
                            },
                            hearingDisability: {
                                hearing: false,
                                subChecks: {
                                    mild: false,
                                    moderate: false,
                                    serve: false,
                                    profound: false
                                }
                            },
                            independentLivingDisability: {
                                independentLiving: false,
                                subChecks: {
                                    information: false,
                                    peerSupport: false,
                                    equipmentAidAndAdaptions: false,
                                    personalAssistance: false,
                                    transport: false,
                                    accessibleEnvironment: false
                                }
                            },
                            cognitiveDisability: {
                                cognitive: false,
                                subChecks: {
                                    mentalRetardation: false,
                                    attentionDeficitHyperactivityDisorder: false,
                                    dyslexia: false,
                                    aphasia: false,
                                    brainInjury: false,
                                    languageDelay: false,
                                    learningDisabilities: false,
                                    autism: false,
                                    dyscalculia: false,
                                    intellectual: false,
                                    memoryLoss: false,
                                    downSyndrome: false,
                                    epilepsy: false,
                                    peerSupport: false,
                                    cerebralpalsy: false
                                }
                            },
                            speechDisorder: {
                                speech: false,
                                subChecks: {
                                    apraxiaOfSpeech: false,
                                    orofacialMyofunctional: false,
                                    speechSound: false,
                                    stutteringStammering: false,
                                    receptive: false,
                                    autismRelatedSpeech: false,
                                    resonance: false,
                                    brainInjuryRelatedSpeech: false,
                                    dysarthria: false,
                                    intellectual: false,
                                    lisping: false,
                                    spasmodicDysphonia: false,
                                    cluttering: false,
                                    mutenessSelectiveMutism: false,
                                    aphasia: false,
                                    speechDelayAlalia: false
                                }
                            },
                            selfCare: false,
                            other: false,
                            otherDisability: null
                        }
                    },
                    familyHistory: []
                },


            },
            initData: {
                rx: {
                    drugName: {
                        english: null,
                        arabic: null,
                        manualInsertion: null
                    },
                    dosage: [],
                    form: {
                        arabic: null,
                        english: null
                    },
                    dose: {
                        type: {
                            arabic: null,
                            english: null
                        },
                        value: null
                    },
                    strength: {
                        unit: {
                            arabic: null,
                            english: null
                        },
                        value: null
                    },
                    period: {
                        period: {
                            arabic: null,
                            english: null
                        },
                        time: null
                    },
                    routeOfAdminstration: {
                        english: null,
                        arabic: null,
                        manualInsertion: null
                    },
                    drugComment: null,
                    refill: null
                },
                feedingManaging: {
                    formula: {
                        formula: {
                            arabic: null,
                            english: null,
                            manualInsertion: null
                        },
                        meal: {
                            english: null,
                            arabic: null
                        },
                        period: {
                            value: null,
                            unit: {
                                english: null,
                                arabic: null
                            },
                        },
                        dose: {
                            value: null,
                            valueOfMl:null,
                            unit: {
                                english: null,
                                arabic: null
                            },
                            
                        },
                        dietComment: null,
                    },
                    solid: {
                        dietContent: {
                            arabic: null,
                            english: null,
                            manualInsertion: null
                        },
                        meal: {
                            english: null,
                            arabic: null
                        },
                        period: {
                            value: null,
                            unit: {
                                english: null,
                                arabic: null
                            },
                        },
                        dietComment: null,
                    },
                },
                vaccination: {
                    vaccineName: {
                        arabic: null,
                        english: null,
                        manualInsertion: null
                    },
                    tradeName: {
                        arabic: null,
                        english: null,
                        manualInsertion: null
                    },
                    comment: null,
                },
                history: {
                    medicalHistory: {
                        surgical: {
                            name: {
                                english: null,
                                arabic: null,
                                manualInsertion: null
                            },
                            date: null,
                            comment: null,
                            files: []
                        },
                    },
                    familyHistory: {
                        patientName: {
                            patient: {
                                id: null,
                                firstName: null,
                                secondName: null,
                                thirdName: null,
                                familyName: null,
                                age: null
                            },
                            manualPatient: null
                        },
                        relation: {
                            arabic: null,
                            english: null
                        },
                        status: {
                            arabic: null,
                            english: null
                        },
                        birthDate: null,
                        diseaseName: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        note: null
                    },
                },
            },
            backUpData: {
                rx: {
                    drugName: {
                        english: null,
                        arabic: null,
                        manualInsertion: null
                    },
                    dosage: [],
                    form: {
                        arabic: null,
                        english: null
                    },
                    dose: {
                        type: {
                            arabic: null,
                            english: null
                        },
                        value: null
                    },
                    strength: {
                        unit: {
                            arabic: null,
                            english: null
                        },
                        value: null
                    },
                    period: {
                        period: {
                            arabic: null,
                            english: null
                        },
                        time: null
                    },
                    routeOfAdminstration: {
                        english: null,
                        arabic: null,
                        manualInsertion: null
                    },
                    drugComment: null,
                    refill: null
                },
                feedingManaging: {
                    formula: {
                        formula: {
                            arabic: null,
                            english: null,
                            manualInsertion: null
                        },
                        meal: {
                            english: null,
                            arabic: null
                        },
                        period: {
                            value: null,
                            unit: {
                                english: null,
                                arabic: null
                            },
                        },
                        dose: {
                            value: null,
                            valueOfMl:null,
                            unit: {
                                english: null,
                                arabic: null
                            },
                            
                        },
                        dietComment: null,
                    },
                    solid: {
                        dietContent: {
                            arabic: null,
                            english: null,
                            manualInsertion: null
                        },
                        meal: {
                            english: null,
                            arabic: null
                        },
                        period: {
                            value: null,
                            unit: {
                                english: null,
                                arabic: null
                            },
                        },
                        dietComment: null,
                    },
                },
                vaccination: {
                    vaccineName: {
                        arabic: null,
                        english: null,
                        manualInsertion: null
                    },
                    tradeName: {
                        arabic: null,
                        english: null,
                        manualInsertion: null
                    },
                    comment: null,
                },
                history: {
                    medicalHistory: {
                        surgical: {
                            name: {
                                english: null,
                                arabic: null,
                                manualInsertion: null
                            },
                            date: null,
                            comment: null,
                            files: []
                        },
                    },
                    familyHistory: {
                        patientName: {
                            patient: {
                                id: null,
                                firstName: null,
                                secondName: null,
                                thirdName: null,
                                familyName: null,
                                age: null
                            },
                            manualPatient: null
                        },
                        relation: {
                            arabic: null,
                            english: null
                        },
                        status: {
                            arabic: null,
                            english: null
                        },
                        birthDate: null,
                        diseaseName: {
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        },
                        note: null
                    },
                },
            },
            restData: {
                medicalRx: {
                    mainDiagnosis: {
                        complaint: null,
                        mainDiagnosis: [],
                        details: null
                    },
                    rx: []
                },
                feedingManaging: {
                    formula: [],
                    solid: [],
                    breastFeeding: null
                },
                growthCharts: {
                    gender: {
                        english: null,
                        arabic: null
                    },
                    age: null,
                    length: null,
                    weight: null,
                    head: null,
                    BMI: null
                },
                bilirubinChart: {
                    time: null,
                    serumBilirubin: null,
                },
                vaccination: [],
                physicalExam: {
                    physicalExam: {
                        temp: {
                            checked: false,
                            comment: null
                        },
                        skin: {
                            checked: false,
                            comment: null
                        },
                        nodes: {
                            checked: false,
                            comment: null
                        },
                        head: {
                            checked: false,
                            comment: null
                        },
                        eyesLeftRight: {
                            checked: false,
                            comment: null
                        },
                        earsLeftRight: {
                            checked: false,
                            comment: null
                        },
                        nose: {
                            checked: false,
                            comment: null
                        },
                        oropharynx: {
                            checked: false,
                            comment: null
                        },
                        neck: {
                            checked: false,
                            comment: null
                        },
                        chestBreast: {
                            checked: false,
                            comment: null
                        },
                        lung: {
                            checked: false,
                            comment: null
                        },
                        cardiovascular: {
                            checked: false,
                            comment: null
                        },
                        abdomen: {
                            checked: false,
                            comment: null
                        },
                        genitalia: {
                            checked: false,
                            comment: null
                        },
                        hips: {
                            checked: false,
                            comment: null
                        },
                        neuro: {
                            checked: false,
                            comment: null
                        },
                        evidence: {
                            checked: false,
                            comment: null
                        },
                        footLeft: {
                            checked: false,
                            comment: null
                        },
                        footRight: {
                            checked: false,
                            comment: null
                        },
                        handLeft: {
                            checked: false,
                            comment: null
                        },
                        handRight: {
                            checked: false,
                            comment: null
                        },
                        handFingersLeft: {
                            checked: false,
                            comment: null
                        },
                        handFingersRight: {
                            checked: false,
                            comment: null
                        },
                        footFingersLeft: {
                            checked: false,
                            comment: null
                        },
                        footFingerRight: {
                            checked: false,
                            comment: null
                        },

                    },
                    developmentalBehavioral: {
                        vocalizesBabbles: {
                            checked: false,
                            comment: null
                        },
                        recognizesParentsVoice: {
                            checked: false,
                            comment: null
                        },
                        graspingObjects: {
                            checked: false,
                            comment: null
                        },
                        rollsOver: {
                            checked: false,
                            comment: null
                        },
                        hearingFromBirth: {
                            checked: false,
                            comment: null
                        },
                        vision: {
                            checked: false,
                            comment: null
                        },
                        headNeckControl: {
                            checked: false,
                            comment: null
                        },
                        liftsChest: {
                            checked: false,
                            comment: null
                        },
                    },
                },
                history: {
                    medicalHistory: {
                        conditions: {
                            heartDisease: {
                                heartDisease: false,
                                subChecks: {
                                    congestiveHeartFailur: false,
                                    heartAttack: false,
                                    angina: false,
                                    heartValveDisease: false,
                                    heartMurmmur: false,
                                    other: false,
                                    kind: null
                                }
                            },
                            lungDisease: {
                                lungDisease: false,
                                subChecks: {
                                    asthma: false,
                                    emphysema: false,
                                    other: false,
                                    kind: null
                                }
                            },
                            liverDisease: {
                                liverDisease: false,
                                kind: null
                            },
                            kidneyDisease: {
                                kidneyDisease: false,
                                kind: null
                            },
                            thyroidDisease: {
                                thyroidDisease: false,
                                kind: null
                            },
                            canserDisease: {
                                canserDisease: false,
                                kind: null
                            },
                            seizures: false,
                            migraines: false,
                            alcoholism: false,
                            drugAddiction: false,
                            depression: false,
                            anxiety: false,
                            bipolarDisorder: false,
                            chronicFatigueSyndrome: false,
                            arthritis: false,
                            lowBackInjury: false,
                            hIVOrAIDS: false,
                            diverticulitisOrDiverticulosis: false,
                            escophagealRefluxOrStomachUlcer: false,
                            hemorrhoids: false,
                            glaucoma: false,
                            allergicToLatex: false,
                            other: false,
                            kind: null
                        },
                        surgical: [],
                        disability: {
                            visionDisability: {
                                vision: false,
                                subChecks: {
                                    blindness: false,
                                    visionConditions: {
                                        visionConditions: false,
                                        subChecks: {
                                            myopia: false,
                                            hyperopia: false,
                                            astigmatism: false
                                        }
                                    },
                                    lowVision: {
                                        lowVision: false,
                                        subChecks: {
                                            diabeticRetinopathy: false,
                                            ageRelatedMacularDegeneration: false,
                                            glaucoma: false,
                                            cataracts: false
                                        }
                                    },
                                    colorBlindness: {
                                        colorBlindness: false,
                                        subChecks: {
                                            monochromasy: false,
                                            protanomaly: false,
                                            deuteranomaly: false,
                                            dichromasy: false,
                                            protanopia: false,
                                            deuteranopia: false
                                        }
                                    }
                                }
                            },
                            mobilityDisability: {
                                mobility: false,
                                subChecks: {
                                    absentLimb: {
                                        absentLimb: false,
                                        subChecks: {
                                            birthDefect: false,
                                            lossOfLimbsThroughAccidents: false,
                                            amputation: false
                                        }
                                    },
                                    arthritis: {
                                        arthritis: false,
                                        subChecks: {
                                            osteoarthritis: false,
                                            rheumatoidArthritis: false,
                                            septicArthritis: false,
                                            psoriaticArthritis: false,
                                            autoimmuneDiseases: false
                                        }
                                    },
                                    paralysisDue: {
                                        paralysisDue: false,
                                        subChecks: {
                                            paraplegia: false,
                                            quadriplegiaOrTetraplegia: false
                                        }
                                    },
                                    cerebralPalsy: false,
                                    multipleSclerosis: false,
                                    muscularDystrophy: false,
                                    motorNeuroneDisease: false,
                                    caudaEquinaSyndrome: false,
                                    hemiplegia: false,
                                    paralysisOfTheFace: false,
                                    guillainBarreSyndrome: false,
                                    parkinsonDisease: false,
                                    polio: false
                                }
                            },
                            hearingDisability: {
                                hearing: false,
                                subChecks: {
                                    mild: false,
                                    moderate: false,
                                    serve: false,
                                    profound: false
                                }
                            },
                            independentLivingDisability: {
                                independentLiving: false,
                                subChecks: {
                                    information: false,
                                    peerSupport: false,
                                    equipmentAidAndAdaptions: false,
                                    personalAssistance: false,
                                    transport: false,
                                    accessibleEnvironment: false
                                }
                            },
                            cognitiveDisability: {
                                cognitive: false,
                                subChecks: {
                                    mentalRetardation: false,
                                    attentionDeficitHyperactivityDisorder: false,
                                    dyslexia: false,
                                    aphasia: false,
                                    brainInjury: false,
                                    languageDelay: false,
                                    learningDisabilities: false,
                                    autism: false,
                                    dyscalculia: false,
                                    intellectual: false,
                                    memoryLoss: false,
                                    downSyndrome: false,
                                    epilepsy: false,
                                    peerSupport: false,
                                    cerebralpalsy: false
                                }
                            },
                            speechDisorder: {
                                speech: false,
                                subChecks: {
                                    apraxiaOfSpeech: false,
                                    orofacialMyofunctional: false,
                                    speechSound: false,
                                    stutteringStammering: false,
                                    receptive: false,
                                    autismRelatedSpeech: false,
                                    resonance: false,
                                    brainInjuryRelatedSpeech: false,
                                    dysarthria: false,
                                    intellectual: false,
                                    lisping: false,
                                    spasmodicDysphonia: false,
                                    cluttering: false,
                                    mutenessSelectiveMutism: false,
                                    aphasia: false,
                                    speechDelayAlalia: false
                                }
                            },
                            selfCare: false,
                            other: false,
                            otherDisability: null
                        }
                    },
                    familyHistory: []
                },


            },
        }
    },
}