function thooth() {
    return {
        dent: {
            root1: true,
            root2: true,
            crown1: true,
            crown2: true,
            crown3: true,
        },
        extraction: false,
        filling_caries_class_i: false,
        filling_caries_class_iv_mesial: false,
        filling_caries_class_iv_distal: false,
        filling_caries_class_v: false,
        filling_caries_class_iii_distal: false,
        filling_caries_class_iii_mesial: false,
        crown: {
            fullVeneer: false,
            laminateVeneer: false,
            occlusalVeneer: false,
            postCrown: false,
            endoCrown: false,
            bridge: false,
            denture: false,
            onlay: false
        },
        bone: false,
        fraction: {
            root: false,
            crown: false
        },
        removeImplant: false,
        endo: {
            endo1: false,
            endo2: false,
            endo3: false,
        },
        pulp: {
            pulp1: false,
            pulp2: false,
            pulp3: false
        },
        post: {
            post1: false,
            post2: false,
            post3: false,
        },
        ginfivitis: {
            left: false,
            right: false,
        },
        periodontal: {
            left: false,
            right: false,

        },
        perio: {
            left: false,
            right: false
        },
        implant: false,
        endo_crown: {
            crown1: false,
            crown2: false,
            crown3: false,
        },
        periapical: {
            periapical1: false,
            periapical2: false,
            periapical3: false,
        },
        // veneer: {
        //   veneer1: false,
        //   veneer2: false,
        // },
        removable: false,
        alignement: {
            //postive x 
            mesialShift: 0,
            //negative x 
            distalShift: 0,
            //postive y
            intrusion: 0,
            //negative Y
            extrusion: 0,
            //postive roation
            distalTilting: 0,
            //negative rotation
            mesialTilting: 0
        },
        images: {
            xray: null,
            image: null
        }
    }
}

function thoothObject() {
    return {
        one: thooth(),
        two: thooth(),
        three: thooth(),
        four: thooth(),
        five: thooth(),
        six: thooth(),
        seven: thooth(),
        eight: thooth(),
        nine: thooth(),
        ten: thooth(),
        eleven: thooth(),
        twelve: thooth(),
        thirteen: thooth(),
        fourteen: thooth(),
        fifteen: thooth(),
        sixteen: thooth(),
        seventeen: thooth(),
        eighteen: thooth(),
        nineteen: thooth(),
        twenty: thooth(),
        twentyOne: thooth(),
        twentyTwo: thooth(),
        twentyThree: thooth(),
        twentyFour: thooth(),
        twentyFive: thooth(),
        twentySix: thooth(),
        twentySeven: thooth(),
        twentyEight: thooth(),
        twentyNine: thooth(),
        thirty: thooth(),
        thirtyOne: thooth(),
        thirtyTwo: thooth(),
        orthodontic: {
            stable: {
                metal: {
                    upper: false,
                    lower: false,
                },
                ceramic: {
                    upper: false,
                    lower: false,
                },
                internal: false,
                transparent: {
                    upper: false,
                    lower: false,
                }
            },
            mobile: {
                transparent: {
                    upper: false,
                    lower: false,
                },
                wire: {
                    upper: false,
                    lower: false,
                }
            }
        },
        images: {
            panoramicXray: null,
            panoramicImage: null
        },
    }
}

function childTooth() {
    return {
        A: thooth(),
        B: thooth(),
        C: thooth(),
        D: thooth(),
        E: thooth(),
        F: thooth(),
        G: thooth(),
        H: thooth(),
        I: thooth(),
        J: thooth(),
        T: thooth(),
        S: thooth(),
        R: thooth(),
        Q: thooth(),
        P: thooth(),
        O: thooth(),
        N: thooth(),
        M: thooth(),
        L: thooth(),
        K: thooth(),
        orthodontic: {
            stable: {
                metal: {
                    upper: false,
                    lower: false,
                },
                ceramic: {
                    upper: false,
                    lower: false,
                },
                internal: false,
                transparent: {
                    upper: false,
                    lower: false,
                }
            },
            mobile: {
                transparent: {
                    upper: false,
                    lower: false,
                },
                wire: {
                    upper: false,
                    lower: false,
                }
            }
        },
        images: {
            panoramicXray: null,
            panoramicImage: null
        },

    }
}




module.exports = {
    childToothObject: childTooth,
    adultToothObject: thoothObject,
    singleAdultTooth: thooth
}