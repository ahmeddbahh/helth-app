export default {
    data() {
        return {
            lang: {
                en: {
                    title: "Adult tooths",
                    
                    dialog: {
                        header: "all data will removed",
                        body: "warning , all the data you  will be removed",
                        ok: "Ok",
                        cancel: "Cancel"
                    },
                    diagnosis: {

                        diagnosisActions: {
                            category: "category",
                            categoryType: "category type",
                            style: "style",
                            tooths: "thooths",
                            diagnosis: "diagnosis",
                            procedures: "procedures",
                        },
                        diagnosis: {
                            other: "other",
                            endodontTreatment: "endodont treatment",
                            crown: "crown",
                            filling: "filling",
                            caries: "caries",
                            fracture: "fracture",
                            trauma: "trauma",
                            resorption: "resorption",
                            abscess: "abscess",
                            cyst: "cyst",
                            grade: "grade",
                            type: "type",
                            amalgamFilling: "amalgam filling",
                            state: "state",
                            compositFilling: "composit filling",
                            drawbacks: "drawbacks",
                            glassIonomerFilling: "glass Ionomer filling",
                            class: "class",
                            etch: "etch",
                            bond: "bond",
                            pain: "pain",
                            eshetics: "eshetics",
                            social: "social",
                            colorChange: "color change",
                            leakage: "leakage",
                            pulpExposure: "pulp exposure",
                            endo: "endo",
                            glassIonomer: "glass ionomer",
                            composite: "composite",
                            postAndCore: "post and core",
                            periapical: "periapical",
                            mobility: "mobility",
                            history: "history",
                            pulp: "pulp",
                            material: "material",
                            finishLine: "finish line",
                            ammount: "ammount",
                            technique: "technique",
                            marginalFit: "marginal fit",
                            occlusion: "occlusion",
                            retention: "retention",
                            classic: "classic",
                            vita3dMaster: "vita 3D Master",
                            reduction: "reduction",
                            shortMargine: "short margine",
                            orthodontic: "type"

                        },
                        procedures: {
                            type: "type",
                            ammount: "ammount",
                            safe: "safe",
                            rootFracture: "root fracture",
                            bleeding: "bleeding",
                            tuberosityFracture: "tuberosity fracture",
                            plateFracture: "plate fracture",
                            extension: "extension",
                            size: "size",
                            material: "material",
                            etch: "etch",
                            bond: "bond",
                            dentine: "dentine",
                            enamel: "enamel",
                            state: "state",
                            colorChange: "color change",
                            leakage: "leakage",
                            pulpExposure: "pulp exposure",
                            fracture: "fracture",
                            history: "history",
                            pulp: "pulp",
                            canals: "canals",
                            masterCone: "master cone",
                            masterLength: "master length",
                            solutions: "solutions",
                            sodiumHypochlorite: "sodium Hypochlorite",
                            sealer: "sealer",
                            fileFracture: "file fracture",
                            perforation: "perforation",
                            overFilling: "over filling",
                            shortFilling: "short filling",
                            missingCanals: "missing canals",
                            finishLine: "finish line",
                            technique: "technique",
                            marginalFit: "marginal fit",
                            occlusion: "occlusion",
                            retention: "retention",
                            classic: "classic",
                            vita3dMaster: "vita 3D Master",
                            reduction: "reduction",
                            shortMargine: "short margine",


                        },
                    },
                    btnsActions: {
                        followCase: "follow case",
                        print: "print",
                        done: "done",
                        cancel: "cancel"
                    },
                    lab: {
                        headers: {
                            labForm: "FORM FOR THE LAB",
                            PfmMargin: "PFM MARGIN DESIGN",
                            crownDesign: "CROWN DESIGN",
                            rxSpecific: "RX SPECIFIC INSTRUCTIONS",
                            please: "Please select single units",
                            marginPlease: "Please select your choice(s) of margin combination for PFM",

                        },
                        labForm: {
                            headers: {

                                Pfm: "PFM",
                                FullCast: "Full Cast",
                                metalFree: "Metal_Free",
                                other: "other",
                                fullCast: "Full Cast",
                                returnFor: "Return For",
                                restoration: "Restoration",
                            },
                            pfm: {
                                white: "White HN*",
                                semiPrecious: "Semi-Precious",
                                nonPrecious: "Non-Precious",
                                yellow: "Yellow HN (for PFM)",
                            },
                            metalFree: {
                                zirconiaSolid: "Zirconia Solid (not recommended for anterior)",
                                zirconiaLayered: "Zirconia Layered",
                                highTranslucent: "High Translucent (max 3 unite bridge)",
                                solidLingual: "Solid Lingual with Porcelain Facial",
                                Ips: "IPS e.max Press (max 3 unite bridge)",
                                lithiumDisilicate: "Lithium Disilicate",
                                compositeCrown: "Composite Crown"
                            },
                            fullCast: {
                                HnGold: "Full Cast Yellow HN Gold",
                                noble: "Full Cast Yellow noble (2% AU)",
                                hN: "Full Cast White HN",
                                semiPrecious: "Full Cast Semi-Precious",
                                nonPrecious: "Full Cast Non-Precious"
                            },
                            other: {
                                diagnosticwax: "Diagnostic wax-up",
                                clearstent: "Clear stent",
                                puttymatrix: "Putty matrix",
                                temporary: "temporary",
                                temporarymetal: "Temporary w/ metal"
                            },
                            returnFor: {
                                finish: "Finish*",
                                dieTrim: "Die trim",
                                bisque: "Bisque",
                                metalTryin: "Metal try-in",

                            },
                            restoration: {
                                crown: "Crown",
                                bridge: "Bridge",
                                noprepVeneer: "No-prep veneer",
                                veneer: "Veneer",
                                inlayOnlay: "Inlay/Onlay",
                                implant: "Implant",
                                diagnosticwaxup: "Diagnostic wax-up",
                                restSeats: "Rest seats",
                                crownUnderPartial: "Crown Under Partial"
                            },
                            pfmMarginDesign: {
                                showNoMetal360: "Show nometal 360°*",
                                allprocelainDhoulder360: "All procelain shoulder 360°",
                                metalCollar360: "Metal collar 360°",
                                facialProcelainShoulder360: "Facial procelain shoulder 360°",
                                lingualMetalCollar: "Lingual metal collar (traditional)",
                                metalOcclusal: "Metal occlusal",
                                metalLingual: "sMetal lingual"
                            },

                        },
                    },
                },
                ar: {
                    title: "Adult tooths",
                    dialog: {
                        header: "all data will removed",
                        body: "warning , all the data you  will be removed",
                        ok: "Ok",
                        cancel: "Cancel"
                    },

                    diagnosis: {

                        diagnosisActions: {
                            category: "category",
                            categoryType: "category type",
                            style: "style",
                            tooths: "thooths",
                            diagnosis: "diagnosis",
                            procedures: "procedures",
                        },
                        diagnosis: {
                            other: "other",
                            endodontTreatment: "endodont treatment",
                            crown: "crown",
                            filling: "filling",
                            caries: "caries",
                            fracture: "fracture",
                            trauma: "trauma",
                            resorption: "resorption",
                            abscess: "abscess",
                            cyst: "cyst",
                            grade: "grade",
                            type: "type",
                            amalgamFilling: "amalgam filling",
                            state: "state",
                            compositFilling: "composit filling",
                            drawbacks: "drawbacks",
                            glassIonomerFilling: "glass Ionomer filling",
                            class: "class",
                            etch: "etch",
                            bond: "bond",
                            pain: "pain",
                            eshetics: "eshetics",
                            social: "social",
                            colorChange: "color change",
                            leakage: "leakage",
                            pulpExposure: "pulp exposure",
                            endo: "endo",
                            glassIonomer: "glass ionomer",
                            composite: "composite",
                            postAndCore: "post and core",
                            periapical: "periapical",
                            mobility: "mobility",
                            history: "history",
                            pulp: "pulp",
                            material: "material",
                            finishLine: "finish line",
                            ammount: "ammount",
                            technique: "technique",
                            marginalFit: "marginal fit",
                            occlusion: "occlusion",
                            retention: "retention",
                            classic: "classic",
                            vita3dMaster: "vita 3D Master",
                            reduction: "reduction",
                            shortMargine: "short margine",
                            orthodontic: "type"







                        },
                        procedures: {
                            type: "type",
                            ammount: "ammount",
                            safe: "safe",
                            rootFracture: "root fracture",
                            bleeding: "bleeding",
                            tuberosityFracture: "tuberosity fracture",
                            plateFracture: "plate fracture",
                            extension: "extension",
                            size: "size",
                            material: "material",
                            etch: "etch",
                            bond: "bond",
                            dentine: "dentine",
                            enamel: "enamel",
                            state: "state",
                            colorChange: "color change",
                            leakage: "leakage",
                            pulpExposure: "pulp exposure",
                            fracture: "fracture",
                            history: "history",
                            pulp: "pulp",
                            canals: "canals",
                            masterCone: "master cone",
                            masterLength: "master length",
                            solutions: "solutions",
                            sodiumHypochlorite: "sodium Hypochlorite",
                            sealer: "sealer",
                            fileFracture: "file fracture",
                            perforation: "perforation",
                            overFilling: "over filling",
                            shortFilling: "short filling",
                            missingCanals: "missing canals",
                            finishLine: "finish line",
                            technique: "technique",
                            marginalFit: "marginal fit",
                            occlusion: "occlusion",
                            retention: "retention",
                            classic: "classic",
                            vita3dMaster: "vita 3D Master",
                            reduction: "reduction",
                            shortMargine: "short margine",


                        },
                    },
                    lab: {
                        headers: {
                            labForm: "FORM FOR THE LAB",
                            PfmMargin: "PFM MARGIN DESIGN",
                            crownDesign: "CROWN DESIGN",
                            rxSpecific: "RX SPECIFIC INSTRUCTIONS",
                            please: "Please select single units",
                            marginPlease: "Please select your choice(s) of margin combination for PFM",
                        },
                        labForm: {
                            headers: {
                                Pfm: "PFM",
                                FullCast: "Full Cast",
                                metalFree: "Metal_Free",
                                fullCast: "Full Cast",
                                other: "other",
                                returnFor: "Return For",
                                restoration: "Restoration",
                            },
                            pfm: {
                                white: "White HN*",
                                semiPrecious: "Semi-Precious",
                                nonPrecious: "Non-Precious",
                                yellow: "Yellow HN (for PFM)",
                            },
                            metalFree: {
                                zirconiaSolid: "Zirconia Solid (not recommended for anterior)",
                                zirconiaLayered: "Zirconia Layered",
                                highTranslucent: "High Translucent (max 3 unite bridge)",
                                solidLingual: "Solid Lingual with Porcelain Facial",
                                Ips: "IPS e.max Press (max 3 unite bridge)",
                                lithiumDisilicate: "Lithium Disilicate",
                                compositeCrown: "Composite Crown"
                            },
                            fullCast: {
                                HnGold: "Full Cast Yellow HN Gold",
                                noble: "Full Cast Yellow noble (2% AU)",
                                hN: "Full Cast White HN",
                                semiPrecious: "Full Cast Semi-Precious",
                                nonPrecious: "Full Cast Non-Precious"
                            },
                            Other: {
                                diagnosticwax: "Diagnostic wax-up",
                                clearstent: "Clear stent",
                                puttymatrix: "Putty matrix",
                                temporary: "temporary",
                                temporarymetal: "Temporary w/ metal"
                            },
                            returnFor: {
                                finish: "Finish*",
                                dieTrim: "Die trim",
                                bisque: "Bisque",
                                metalTryin: "Metal try-in",

                            },
                            restoration: {
                                crown: "Crown",
                                bridge: "Bridge",
                                noprepVeneer: "No-prep veneer",
                                veneer: "Veneer",
                                inlayOnlay: "Inlay/Onlay",
                                implant: "Implant",
                                diagnosticwaxup: "Diagnostic wax-up",
                                restSeats: "Rest seats",
                                crownUnderPartial: "Crown Under Partial"
                            }
                        },
                    },
                    btnsActions: {
                        followCase: "follow case",
                        print: "print",
                        done: "done",
                        cancel: "cancel"
                    },
                }
            },
            mainOptions: [{
                    english: "diagnosis",
                    arabic: "diagnosis",
                    id: 1,
                },
                {
                    english: "operations",
                    arabic: "operations",
                    id: 2,
                },
                {
                    english: "planing",
                    arabic: "planing",
                    id: 4,
                },
                {
                    english: "LAB",
                    arabic: "LAB",
                    id: 3,
                },
                {
                    english: "3D Scanner",
                    arabic: "3D Scanner",
                    id: 5,
                },
            ],
            options: {
                main: {
                    diagnosis: [{
                            arabic: "main diagnosis",
                            english: "main diagnosis",
                            id: 1
                        }, {
                            arabic: "tooth chart",
                            english: "tooth chart",
                            id: 2
                        },
                        {
                            arabic: "gallary & Xrays",
                            english: "gallary & Xrays",
                            id: 3
                        },

                    ],
                    operations: [{
                            arabic: "tooth chart",
                            english: "tooth chart",
                            id: 2
                        },
                        {
                            arabic: "gallary & Xrays",
                            english: "gallary & Xrays",
                            id: 3
                        }
                    ],
                    planing: [{
                            arabic: "tooth chart",
                            english: "tooth chart",
                            id: 2
                        },
                        {
                            arabic: "gallary & Xrays",
                            english: "gallary & Xrays",
                            id: 3
                        }
                    ],

                },
                diagnosis: {
                    diagnosisSubOptions: [{
                            english: "extraction",
                            arabic: "extraction",
                        },
                        {
                            english: "caries",
                            arabic: "caries",
                        },
                        {
                            english: "pulp",
                            arabic: "pulp",
                        },
                        {
                            english: "periapical",
                            arabic: "periapical",
                        },
                        {
                            english: "periodontal",
                            arabic: "periodontal",
                        },
                        {
                            english: "filling",
                            arabic: "filling",
                        },
                        {
                            english: "endo",
                            arabic: "endo",
                        },
                        {
                            english: "post",
                            arabic: "post",
                        },
                        {
                            english: "crown",
                            arabic: "crown",
                        },
                        {
                            english: "perio",
                            arabic: "perio",
                        },
                        {
                            english: "removable",
                            arabic: "removable",
                        },
                        {
                            english: "implant",
                            arabic: "implant",
                        },
                        {
                            english: "alignment",
                            arabic: "alignment",
                        },
                        {
                            english: "ginfivitis",
                            arabic: "ginfivitis",
                        },
                        {
                            english: "orthodontic",
                            arabic: "orthodontic",
                        },
                        {
                            english: "Orto, Facial, TMJ",
                            arabic: "Orto, Facial, TMJ",
                        },
                        {
                            english: "Bone Regeneration",
                            arabic: "Bone Regeneration",
                        },
                        {
                            english: "Fraction / Damaged",
                            arabic: "Fraction / Damaged",
                        },
                        {
                            english: "fractures",
                            arabic: "fractures",
                        },
                        {
                            english: "Restorative color",
                            arabic: "Restorative color",
                        },

                    ],
                    diagnosisActions: {
                        categoryTypeActions: {
                            extraction: [{

                                    english: "extraction",
                                    arabic: "extraction"
                                },
                                {

                                    english: "missing",
                                    arabic: "missing"

                                }
                            ],
                            caries: [{

                                    english: "class I",
                                    arabic: "class I",
                                },
                                {

                                    english: "class IV mesial",
                                    arabic: "class IV mesial"
                                },
                                {

                                    english: "class IV distal",
                                    arabic: "class IV distal"
                                }, {

                                    english: "class V",
                                    arabic: "class V"
                                },
                                {

                                    english: "class III distal",
                                    arabic: "class III distal"
                                },
                                {

                                    english: "class II distal",
                                    arabic: "class II distal"
                                },
                                {

                                    english: "class III mesial",
                                    arabic: "class III mesial"
                                },
                                {

                                    english: "class II mesial",
                                    arabic: "class II mesial"
                                },
                                {

                                    english: "class II MOD",
                                    arabic: "class II MOD"
                                },
                                {

                                    english: "class III MOD",
                                    arabic: "class III MOD"
                                },
                                {

                                    english: "class IV MOD",
                                    arabic: "class IV MOD"
                                },
                            ],
                            pulp: [{

                                    english: "pathosis",
                                    arabic: "pathosis"
                                },
                                {

                                    english: "stones",
                                    arabic: "stones"
                                }
                            ],
                            periapical: [{

                                    english: "pathosis",
                                    arabic: "pathosis"
                                },
                                {

                                    english: "stones",
                                    arabic: "stones"
                                }
                            ],
                            periodontal: [],
                            filling: [{

                                    english: "class I",
                                    arabic: "class I",
                                },
                                {

                                    english: "class IV mesial",
                                    arabic: "class IV mesial"
                                },
                                {

                                    english: "class IV distal",
                                    arabic: "class IV distal"
                                }, {

                                    english: "class V",
                                    arabic: "class V"
                                },
                                {

                                    english: "class III distal",
                                    arabic: "class III distal"
                                },
                                {

                                    english: "class II distal",
                                    arabic: "class II distal"
                                },
                                {

                                    english: "class III mesial",
                                    arabic: "class III mesial"
                                },
                                {

                                    english: "class II mesial",
                                    arabic: "class II mesial"
                                },
                                {

                                    english: "class II MOD",
                                    arabic: "class II MOD"
                                },
                                {

                                    english: "class III MOD",
                                    arabic: "class III MOD"
                                },
                                {

                                    english: "class IV MOD",
                                    arabic: "class IV MOD"
                                },
                            ],
                            endo: [{
                                    english: "canal filling",
                                    arabic: "canal filling",
                                },
                                {
                                    english: "pulp regeniration",
                                    arabic: "pulp regeniration",
                                },
                                {
                                    english: "Apixification",
                                    arabic: "Apixification",
                                },
                                {
                                    english: "Root Canal Treatment",
                                    arabic: "Root Canal Treatment",
                                },
                                {
                                    english: "Root Canal Re-Treatment",
                                    arabic: "Root Canal Re-Treatment",
                                },
                                {
                                    english: "Root Canal Re-Treatment & Instrument Removal",
                                    arabic: "Root Canal Re-Treatment & Instrument Removal",
                                },
                                {
                                    english: "Apicectomy",
                                    arabic: "Apicectomy",
                                },
                                {
                                    english: "Necrosis",
                                    arabic: "Necrosis",
                                },
                                {
                                    english: "Broken Instrument in Canal",
                                    arabic: "Broken Instrument in Canal",
                                },
                                {
                                    english: "Root Resorption",
                                    arabic: "Root Resorption",
                                },
                            ],
                            post: [{

                                english: "ready made",
                                arabic: "ready made"
                            }, {

                                english: "custom made",
                                arabic: "custom made"
                            }],
                            crown: [{

                                    english: "full veneer",
                                    arabic: "full veneer"

                                },
                                {

                                    english: "laminate veneer",
                                    arabic: "laminate veneer"
                                },
                                {

                                    english: "occlusal veneer",
                                    arabic: "occlusal veneer",
                                },
                                {

                                    english: "post crown",
                                    arabic: "post crown",
                                },
                                {

                                    english: "endo crown",
                                    arabic: "endo crown",
                                },
                                {

                                    english: "bridge",
                                    arabic: "bridge",
                                },
                                {

                                    english: "Denture",
                                    arabic: "Denture",
                                },
                                {

                                    english: "onlay",
                                    arabic: "onlay",
                                },
                            ],
                            perio: [{
                                    english: "hygien",
                                    arabic: "hygien",
                                },
                                {
                                    english: "surgery",
                                    arabic: "surgery",
                                },
                                {
                                    english: "Plaque & Hygiene",
                                    arabic: "Plaque & Hygiene",
                                },
                                {
                                    english: "Periodontitis",
                                    arabic: "Periodontitis",
                                },
                                {
                                    english: "Gingival Recession",
                                    arabic: "Gingival Recession",
                                },
                                {
                                    english: "Gingival Overgrowth",
                                    arabic: "Gingival Overgrowth",
                                },
                                {
                                    english: "Gummy Smile",
                                    arabic: "Gummy Smile",
                                },
                                {
                                    english: "Gingival Graft",
                                    arabic: "Gingival Graft",
                                },
                                {
                                    english: "Professional Tooth Cleaning",
                                    arabic: "Professional Tooth Cleaning",
                                },
                                {
                                    english: "Scaling/Root Planning",
                                    arabic: "Scaling/Root Planning",
                                },
                                {
                                    english: "Bone Regeneration",
                                    arabic: "Bone Regeneration",
                                },
                                {
                                    english: "Pocket Reduction",
                                    arabic: "Pocket Reduction",
                                },
                                {
                                    english: "Plastic Perio Surgery",
                                    arabic: "Plastic Perio Surgery",
                                },
                                {
                                    english: "Crown Lengthening",
                                    arabic: "Crown Lengthening",
                                },
                                {
                                    english: "Gingivectomy",
                                    arabic: "Gingivectomy",
                                },
                                {
                                    english: "Laser Gingivectomy",
                                    arabic: "Laser Gingivectomy",
                                },

                            ],
                            removable: [{

                                    english: "partial",
                                    arabic: "partial",
                                },
                                {

                                    english: "Complete",
                                    arabic: "Complete",
                                }
                            ],
                            implant: [{

                                    english: "immediate",
                                    arabic: "immediate",
                                },
                                {

                                    english: "compressive",
                                    arabic: "compressive",
                                },
                                {

                                    english: "Malpositined",
                                    arabic: "Malpositined",
                                },
                                {

                                    english: "with bone loss",
                                    arabic: "with bone loss",
                                },
                                {

                                    english: "with gingival recession",
                                    arabic: "with gingival recession",
                                },
                            ],
                            alignment: [{

                                    english: "mesial shift",
                                    arabic: "mesial shift",
                                },

                                {

                                    english: "distal shift",
                                    arabic: "distal shift",
                                },

                                {

                                    english: "mesial tilting",
                                    arabic: "mesial tilting",
                                },

                                {

                                    english: "distal tilting",
                                    arabic: "distal tilting",
                                },

                                {

                                    english: "extrusion",
                                    arabic: "extrusion",
                                },

                                {

                                    english: "intrusion",
                                    arabic: "intrusion",
                                }
                            ],
                            ginfivitis: [],
                            orthodontic: [{
                                    english: "stable",
                                    arabic: "stable",
                                },
                                {
                                    english: "mobile",
                                    arabic: "mobile",
                                }
                            ],
                            ortoFacialTMJ: [{
                                    english: "Malooclusion",
                                    arabic: "Malooclusion"
                                },
                                {
                                    english: "Facial",
                                    arabic: "Facial",
                                },
                                {
                                    english: "TMJ & Muscles",
                                    arabic: "TMJ & Muscles"
                                }
                            ],
                            fraction: [{
                                    english: "root",
                                    arabic: "root"
                                },
                                {
                                    english: "crown",
                                    arabic: "crown"
                                },
                                {
                                    english: "both",
                                    arabic: "both"
                                },
                            ],
                            fractures: [{
                                    english: "Fracture",
                                    arabic: "Fracture"
                                },
                                {
                                    english: "Severely Damaged",
                                    arabic: "Severely Damaged"
                                },
                                {
                                    english: "Wear",
                                    arabic: "Wear"
                                },
                            ],
                            restorativeColor: [{
                                    english: "Rostoration",
                                    arabic: "Rostoration"
                                },
                                {
                                    english: "splint",
                                    arabic: "splint"
                                },
                                {
                                    english: "Discolored Teeth",
                                    arabic: "Discolored Teeth"
                                },
                            ],


                        },
                        styleActions: {
                            extraction: [

                                {
                                    english: "normal",
                                    arabic: "normal"
                                },
                                {
                                    english: "surgical",
                                    arabic: "surgical"
                                },
                            ],
                            caries: [{
                                    english: "shallow caries",
                                    arabic: "shallow caries",
                                },

                                {
                                    english: "deep caries",
                                    arabic: "deep caries",
                                },

                            ],
                            pulp: [{
                                    english: "pulpitis",
                                    arabic: "pulpitis",
                                },

                                {
                                    english: "hypremia",
                                    arabic: "hypremia",
                                },

                                {
                                    english: "necrosis",
                                    arabic: "necrosis",
                                },

                                {
                                    english: "abscess",
                                    arabic: "abscess",
                                },

                                {
                                    english: "polyp",
                                    arabic: "polyp",
                                },

                                {
                                    english: "cyst",
                                    arabic: "cyst",
                                },

                                {
                                    english: "classified",
                                    arabic: "classified",
                                },

                            ],
                            periapical: [{
                                    english: "cyst",
                                    arabic: "cyst",
                                },

                                {
                                    english: "classified",
                                    arabic: "classified",
                                },
                            ],
                            periodontal: [

                                {
                                    english: "red",
                                    arabic: "red",
                                },

                                {
                                    english: "green",
                                    arabic: "green",
                                },

                                {
                                    english: "brown",
                                    arabic: "brown",
                                },

                            ],
                            filling: [{
                                    english: "amalgam",
                                    arabic: "amalgam",
                                },

                                {
                                    english: "composite",
                                    arabic: "composite",
                                },

                                {
                                    english: "glass ionomer",
                                    arabic: "glass ionomer",
                                },

                                {
                                    english: "compomere",
                                    arabic: "compomere",
                                },

                            ],
                            endo: [{
                                    english: "mta",
                                    arabic: "mta",
                                },

                                {
                                    english: "Conventional",
                                    arabic: "Conventional",
                                },

                                {
                                    english: "ZOE",
                                    arabic: "ZOE",
                                },

                                {
                                    english: "Calcium hydroxide",
                                    arabic: "Calcium hydroxide",
                                },

                                {
                                    english: "fiber",
                                    arabic: "fiber",
                                },

                                {
                                    english: "metal post",
                                    arabic: "metal post",
                                },

                            ],
                            post: [{
                                    english: "fiber",
                                    arabic: "fiber",
                                },
                                {
                                    english: "metal",
                                    arabic: "metal",
                                },
                                {
                                    english: "cast metal",
                                    arabic: "cast metal",
                                },
                            ],
                            crown: [{
                                    english: "metal ceramic",
                                    arabic: "metal ceramic",
                                },

                                {
                                    english: "zirconia",
                                    arabic: "zirconia",
                                },

                                {
                                    english: "emax",
                                    arabic: "emax",
                                },

                                {
                                    english: "full metal",
                                    arabic: "full metal",
                                },

                            ],
                            perio: [{
                                english: "scaling",
                                arabic: "scaling",
                            }],
                            removable: [{
                                    english: "acrylic",
                                    arabic: "acrylic",
                                },

                                {
                                    english: "vitalium",
                                    arabic: "vitalium",
                                },

                                {
                                    english: "thermopress",
                                    arabic: "thermopress",
                                },

                            ],
                            implant: [{
                                    english: "MILD",
                                    arabic: "MILD",
                                },
                                {
                                    english: "MODERATE",
                                    arabic: "MODERATE",
                                },
                                {
                                    english: "SEVERE",
                                    arabic: "SEVERE",
                                },
                            ],
                            alignment: [

                                {
                                    english: 5,
                                    arabic: 5
                                },
                                {
                                    english: 10,
                                    arabic: 10
                                },
                                {
                                    english: 15,
                                    arabic: 15
                                },


                                {
                                    english: 20,
                                    arabic: 20
                                },

                                {
                                    english: 25,
                                    arabic: 25
                                },
                                {
                                    english: 30,
                                    arabic: 30
                                },
                                {
                                    english: 35,
                                    arabic: 35
                                },
                                {
                                    english: 40,
                                    arabic: 40
                                },
                                {
                                    english: 45,
                                    arabic: 45
                                },
                                {
                                    english: 50,
                                    arabic: 50
                                },
                                {
                                    english: 55,
                                    arabic: 55
                                },
                                {
                                    english: 60,
                                    arabic: 60
                                },
                                {
                                    english: 65,
                                    arabic: 65
                                },
                                {
                                    english: 70,
                                    arabic: 70
                                },
                                {
                                    english: 75,
                                    arabic: 75
                                },
                                {
                                    english: 80,
                                    arabic: 80
                                },
                                {
                                    english: 85,
                                    arabic: 85
                                },

                                {
                                    english: 90,
                                    arabic: 90
                                },

                            ],
                            ginfivitis: [],
                            orthodontic: {
                                stable: [{
                                        english: "metal",
                                        arabic: "metal",
                                    },
                                    {
                                        english: "ceramic",
                                        arabic: "ceramic",
                                    },
                                    {
                                        english: "transparent",
                                        arabic: "transparent",
                                    },
                                    {
                                        english: "internal",
                                        arabic: "internal",
                                    },
                                ],
                                mobile: [{
                                        english: "wire",
                                        arabic: "wire",
                                    },
                                    {
                                        english: "transparent",
                                        arabic: "transparent",
                                    },
                                ],
                                type: [{
                                        english: "upper",
                                        arabic: "upper"
                                    },
                                    {
                                        english: "lower",
                                        arabic: "lower"
                                    },
                                    {
                                        english: "both",
                                        arabic: "both"
                                    },
                                ]
                            },
                            fractures: {
                                fructure: [{
                                        english: "CROWN",
                                        arabic: "CROWN",
                                    },
                                    {
                                        english: "ROOT",
                                        arabic: "ROOT",
                                    },
                                ],
                                severelyDamaged: [],
                                wear: [{
                                        english: "MILD",
                                        arabic: "MILD"
                                    },
                                    {
                                        english: "MODERATE",
                                        arabic: "MODERATE"
                                    },
                                    {
                                        english: "SEVERE",
                                        arabic: "SEVERE"
                                    },
                                ],
                            },
                            restorativeColor: [{
                                    english: "MILD",
                                    arabic: "MILD"
                                },
                                {
                                    english: "MODERATE",
                                    arabic: "MODERATE"
                                },
                                {
                                    english: "SEVERE",
                                    arabic: "SEVERE"
                                },
                            ],
                        },
                        diagnosisAction: {
                            extraction: [{
                                    english: "history",
                                    arabic: "history"
                                },

                                {
                                    english: "crownState",
                                    arabic: "crownState"
                                },

                                {
                                    english: "root",
                                    arabic: "root"
                                },

                                {
                                    english: "periapical",
                                    arabic: "periapical"
                                },

                                {
                                    english: "mobility",
                                    arabic: "mobility"
                                },

                            ],
                            filling: [{
                                    english: "dentalHistory",
                                    arabic: "dentalHistory"
                                },

                                {
                                    english: "caries",
                                    arabic: "caries"
                                },

                                {
                                    english: "fracture",
                                    arabic: "fracture"
                                },

                                {
                                    english: "complaint",
                                    arabic: "complaint"
                                },

                                {
                                    english: "complications",
                                    arabic: "complications"
                                },



                            ],
                            endo: [{
                                    english: "history",
                                    arabic: "history"
                                },

                                {
                                    english: "caries",
                                    arabic: "caries"
                                },

                                {
                                    english: "pulp",
                                    arabic: "pulp"
                                },

                                {
                                    english: "complaint",
                                    arabic: "complaint"
                                },

                            ],
                        },
                    },
                    diagnosisSubAction: {
                        extraction: {
                            history: {
                                endodontTreatment: [{
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },

                                    {
                                        english: "missing canals",
                                        arabic: "missing canals"
                                    },
                                ],
                                crown: [{
                                        english: "open margin",
                                        arabic: "open margin"
                                    },

                                    {
                                        english: "perforation",
                                        arabic: "perforation"
                                    },

                                    {
                                        english: "no retention",
                                        arabic: "no retention"
                                    },

                                ],
                                filling: [{
                                        english: "amalgam",
                                        arabic: "amalgam"
                                    },

                                    {
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                ],
                            },
                            crownState: {
                                caries: [{
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "occlusal",
                                        arabic: "occlusal"
                                    },
                                ],
                                fracture: [{
                                        english: "I",
                                        arabic: "I"
                                    },

                                    {
                                        english: "II",
                                        arabic: "II"
                                    },

                                    {
                                        english: "III",
                                        arabic: "III"
                                    },
                                ],
                                trauma: [{
                                        english: "milde",
                                        arabic: "milde"
                                    },
                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },
                                ],
                            },
                            root: {
                                fracture: [{
                                        english: "horizontal",
                                        arabic: "horizontal"
                                    },

                                    {
                                        english: "vertical",
                                        arabic: "vertical"
                                    },
                                ],
                                resorption: [

                                    {
                                        english: "internal",
                                        arabic: "internal"
                                    },

                                    {
                                        english: "external",
                                        arabic: "external"
                                    },

                                ]
                            },
                            periapical: {
                                abscess: [{
                                        english: "acute",
                                        arabic: "acute"
                                    },

                                    {
                                        english: "chronic",
                                        arabic: "chronic"
                                    },

                                ],
                                cyst: [{
                                        english: "radicular",
                                        arabic: "radicular"
                                    },

                                    {
                                        english: "periodontal",
                                        arabic: "periodontal"
                                    },

                                ]
                            },
                            mobility: {
                                grade: [{
                                        english: "I",
                                        arabic: "I"
                                    },

                                    {
                                        english: "II",
                                        arabic: "II"
                                    },

                                    {
                                        english: "III",
                                        arabic: "III"
                                    },
                                ],
                                type: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                    {
                                        english: 4,
                                        arabic: 4
                                    },

                                    {
                                        english: 5,
                                        arabic: 5
                                    },

                                    {
                                        english: 6,
                                        arabic: 6
                                    },

                                ]
                            }
                        },
                        filling: {
                            dentalHistory: {
                                caries: [{
                                        english: "classi",
                                        arabic: "class i"
                                    },

                                    {
                                        english: "calss i",
                                        arabic: "calss i"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                                amalgamFilling: [{
                                        english: "classI",
                                        arabic: "classI"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },


                                ],
                                state: [{
                                        english: "started",
                                        arabic: "started"
                                    },

                                    {
                                        english: "completed",
                                        arabic: "completed"
                                    },

                                ],
                                compositFilling: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                                drawbacks: [{
                                        english: "recurrent caries",
                                        arabic: "recurrent caries"
                                    },

                                    {
                                        english: "fracture",
                                        arabic: "fracture"
                                    },

                                    {
                                        english: "proximal caries",
                                        arabic: "proximal caries"
                                    },


                                ],
                                glassIonomerFilling: [

                                    {
                                        english: "classI",
                                        arabic: "classI"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                            },
                            caries: {
                                type: [{
                                        english: "simple",
                                        arabic: "simple"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "shallow",
                                        arabic: "shallow"
                                    },
                                ],
                                class: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ]
                            },
                            fracture: {
                                etch: [{
                                        english: "tolal",
                                        arabic: "tolal"
                                    },

                                    {
                                        english: "selective",
                                        arabic: "selective"
                                    },
                                ],
                                bond: [{
                                        english: "selfe",
                                        arabic: "selfe"
                                    },

                                    {
                                        english: "etch",
                                        arabic: "etch"
                                    },


                                ],
                            },
                            complaint: {
                                pain: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "with sweet",
                                        arabic: "with sweet"
                                    },

                                    {
                                        english: "with cold",
                                        arabic: "with cold"
                                    },

                                    {
                                        english: "with percussion",
                                        arabic: "with percussion"
                                    },
                                ],
                                eshetics: [{
                                    english: "bad esthestics",
                                    arabic: "bad esthestics"
                                }, ],
                                social: [{
                                        english: "bad Oder",
                                        arabic: "bad Oder"
                                    },

                                    {
                                        english: "phonetcs",
                                        arabic: "phonetcs"
                                    },


                                ],
                            },
                            complications: {
                                colorChange: [{
                                        english: "minor",
                                        arabic: "minor"
                                    },

                                    {
                                        english: "major",
                                        arabic: "major"
                                    },

                                ],
                                leakage: [{
                                        english: "discoloration",
                                        arabic: "discoloration"
                                    },

                                    {
                                        english: "pulp necrosis",
                                        arabic: "pulp necrosis"
                                    },

                                ],
                                pulpExposure: [{
                                        english: "minute",
                                        arabic: "minute"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },


                                ],
                                fracture: [{
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },

                                    {
                                        english: "tooth",
                                        arabic: "tooth"
                                    },


                                ],
                            },

                        },
                        endo: {
                            history: {
                                endo: [{
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },
                                ],
                                caries: [{
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },
                                ],
                                filling: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                glassIonomer: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                composite: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                crown: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                postAndCore: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                            },
                            caries: {
                                type: [{
                                        english: "simple",
                                        arabic: "simple"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "shallow",
                                        arabic: "shallow"
                                    },
                                ],
                                class: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ]
                            },
                            pulp: {
                                state: [{
                                        english: "hyperemia",
                                        arablic: "hyperemia"
                                    },

                                    {
                                        english: "pulpitis",
                                        arablic: "pulpitis"
                                    },

                                    {
                                        english: "necrosis",
                                        arablic: "necrosis"
                                    },

                                    {
                                        english: "abscess",
                                        arablic: "abscess"
                                    },

                                    {
                                        english: "internal resorption",
                                        arablic: "internal resorption"
                                    },

                                ],
                                periapical: [{
                                        english: "normal",
                                        arabic: "normal"
                                    },

                                    {
                                        english: "abscess",
                                        arabic: "abscess"
                                    },

                                    {
                                        english: "cyst",
                                        arabic: "cyst"
                                    },

                                    {
                                        english: "granuloma",
                                        arabic: "granuloma"
                                    },

                                ],
                            },
                            complaint: {
                                pain: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "on percussion",
                                        arabic: "on percussion"
                                    },
                                ],
                                mobility: [{
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                ],
                            },
                        },
                    },
                    proceduresAction: {
                        extraction: [{
                                english: "anesthesia",
                                arabic: "anesthesia"
                            },

                            {
                                english: "extraction",
                                arabic: "extraction"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },
                        ],
                        filling: [{
                                english: "cavityPreparation",
                                arabic: "cavityPreparation"
                            },

                            {
                                english: "base",
                                arabic: "base"
                            },

                            {
                                english: "etchAndBond",
                                arabic: "etchAndBond"
                            },

                            {
                                english: "shadeSelection",
                                arabic: "shadeSelection"
                            },

                            {
                                english: "finalFilling",
                                arabic: "finalFilling"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },

                        ],
                        endo: [{
                                english: "diagnosis",
                                arabic: "diagnosis"
                            },

                            {
                                english: "gainingAccess",
                                arabic: "gainingAccess"
                            },

                            {
                                english: "preparation",
                                arabic: "preparation"
                            },

                            {
                                english: "irrigation",
                                arabic: "irrigation"
                            },

                            {
                                english: "obturation",
                                arabic: "obturation"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },

                        ],
                        post: [

                            {
                                english: "canalPreparation",
                                arabic: "canalPreparation"
                            },
                            {
                                english: "cementation",
                                arabic: "cementation"
                            },
                            {
                                english: "coreBuildUp",
                                arabic: "coreBuildUp"
                            },
                        ],
                        crown: [{
                                english: "studyImpression",
                                arabic: "studyImpression"
                            },
                            {
                                english: "toothReduction",
                                arabic: "toothReduction"
                            },
                            {
                                english: "finalImpression",
                                arabic: "finalImpression"
                            },
                            {
                                english: "temporaryProtection",
                                arabic: "temporaryProtection"
                            },
                            {
                                english: "tryIn",
                                arabic: "tryIn"
                            },
                            {
                                english: "colorSelection",
                                arabic: "colorSelection"
                            },
                            {
                                english: "cementation",
                                arabic: "cementation"
                            },
                            {
                                english: "complications",
                                arabic: "complications"
                            },
                        ],
                        removable: [{
                                english: "primaryImpression",
                                arabic: "primaryImpression"
                            },

                            {
                                english: "finalImpression",
                                arabic: "finalImpression"
                            },

                            {
                                english: "tryIn",
                                arabic: "tryIn"
                            },

                            {
                                english: "delivery",
                                arabic: "delivery"
                            },

                        ],
                    },
                    proceduresSubAction: {
                        extraction: {
                            anesthesia: {
                                type: [{
                                        english: "egypt",
                                        arabic: "egypt"
                                    },

                                    {
                                        english: "spain",
                                        arabic: "spain"
                                    },

                                    {
                                        english: "france",
                                        arabic: "france"
                                    },

                                    {
                                        english: "with adrenalin",
                                        arabic: "with adrenalin"
                                    },

                                    {
                                        english: "without adrenalin",
                                        arabic: "without adrenalin"
                                    },
                                ],
                                ammount: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                ],
                            },
                            extraction: {
                                safe: [{
                                        english: "no problem",
                                        arabic: "no problem"
                                    },
                                    {
                                        english: "with complication",
                                        arabic: "with complication"
                                    },
                                ],
                            },
                            complications: {
                                rootFracture: [{
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "1pical third",
                                        arabic: "1pical third"
                                    },

                                    {
                                        english: "one half",
                                        arabic: "one half"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },


                                ],
                                bleeding: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },
                                ],
                                tuberosityFracture: [{
                                        english: "small",
                                        arabic: "small"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },
                                ],
                                plateFracture: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                ],

                            },
                        },
                        filling: {
                            cavityPreparation: {
                                extension: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "cusp",
                                        arabic: "cusp"
                                    },

                                    {
                                        english: "buccal pit",
                                        arabic: "buccal pit"
                                    },

                                    {
                                        english: "lingual pit",
                                        arabic: "lingual pit"
                                    },


                                ],
                                size: [{
                                        english: "wide",
                                        arabic: "wide"
                                    },

                                    {
                                        english: "very wide",
                                        arabic: "very wide"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "very deep",
                                        arabic: "very deep"
                                    },
                                ],
                            },
                            base: {
                                material: [{
                                        english: "zinc phosphate",
                                        arabic: "zinc phosphate"
                                    },

                                    {
                                        english: "zinc poly carboxylate",
                                        arabic: "zinc poly carboxylate"
                                    },

                                    {
                                        english: "calcium hydroxide",
                                        arabic: "calcium hydroxide"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },
                                ],
                            },
                            etchAndBond: {
                                etch: [{
                                        english: "tolal",
                                        arabic: "tolal"
                                    },

                                    {
                                        english: "selective",
                                        arabic: "selective"
                                    },


                                ],
                                bond: [{
                                    english: "selfe etch",
                                    arabic: "selfe etch"
                                }],
                            },
                            shadeSelection: {
                                dentine: [{
                                        english: "a1",
                                        arabic: "a1"
                                    },

                                    {
                                        english: "a2",
                                        arabic: "a2"
                                    },

                                    {
                                        english: "a3",
                                        arabic: "a3"
                                    },

                                    {
                                        english: "a3.5",
                                        arabic: "a3.5"
                                    },

                                    {
                                        english: "b1",
                                        arabic: "b1"
                                    },

                                    {
                                        english: "b2",
                                        arabic: "b2"
                                    },

                                    {
                                        english: "b3",
                                        arabic: "b3"
                                    },

                                    {
                                        english: "c1",
                                        arabic: "c1"
                                    },

                                    {
                                        english: "c2",
                                        arabic: "c2"
                                    },

                                    {
                                        english: "c3",
                                        arabic: "c3"
                                    },

                                ],
                                enamel: [{
                                        english: "a1",
                                        arabic: "a1"
                                    },

                                    {
                                        english: "a2",
                                        arabic: "a2"
                                    },

                                    {
                                        english: "a3",
                                        arabic: "a3"
                                    },

                                    {
                                        english: "a3.5",
                                        arabic: "a3.5"
                                    },

                                    {
                                        english: "b1",
                                        arabic: "b1"
                                    },

                                    {
                                        english: "b2",
                                        arabic: "b2"
                                    },

                                    {
                                        english: "b3",
                                        arabic: "b3"
                                    },

                                    {
                                        english: "c1",
                                        arabic: "c1"
                                    },

                                    {
                                        english: "c2",
                                        arabic: "c2"
                                    },

                                    {
                                        english: "c3",
                                        arabic: "c3"
                                    },

                                ],
                            },
                            finalFilling: {
                                state: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "accepted",
                                        arabic: "accepted"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },
                                    {
                                        english: "excellent",
                                        arabic: "excellent"
                                    },
                                ],
                            },
                            complications: {
                                colorChange: [{
                                        english: "minor",
                                        arabic: "minor"
                                    },

                                    {
                                        english: "major",
                                        arabic: "major"
                                    },

                                ],
                                leakage: [{
                                        english: "discoloration",
                                        arabic: "discoloration"
                                    },

                                    {
                                        english: "pulp necrosis",
                                        arabic: "pulp necrosis"
                                    },

                                ],
                                pulpExposure: [{
                                        english: "minute",
                                        arabic: "minute"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },

                                ],
                                fracture: [{
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },

                                    {
                                        english: "tooth",
                                        arabic: "tooth"
                                    },

                                ],

                            },
                        },
                        endo: {
                            diagnosis: {
                                history: [{
                                        english: "no dental history",
                                        arabic: "no dental history"
                                    },

                                    {
                                        english: "trauma",
                                        arabic: "trauma"
                                    },

                                    {
                                        english: "bad periodontics treatment",
                                        arabic: "bad periodontics treatment"
                                    },


                                ],
                                pulp: [{
                                        english: "necrotic",
                                        arabic: "necrotic"
                                    },

                                    {
                                        english: "pulpits",
                                        arabic: "pulpits"
                                    },

                                    {
                                        english: "hypremia",
                                        arabic: "hypremia"
                                    },
                                ],
                            },
                            gainingAccess: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                            },
                            preparation: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                masterCone: [{
                                        english: "#20",
                                        arabic: "#20"
                                    },

                                    {
                                        english: "#25",
                                        arabic: "#25"
                                    },

                                    {
                                        english: "#30",
                                        arabic: "#30"
                                    },

                                    {
                                        english: "#35",
                                        arabic: "#35"
                                    },

                                    {
                                        english: "#40",
                                        arabic: "#40"
                                    },

                                    {
                                        english: "#45",
                                        arabic: "#45"
                                    },

                                    {
                                        english: "#50",
                                        arabic: "#50"
                                    },

                                    {
                                        english: "#55",
                                        arabic: "#55"
                                    },

                                    {
                                        english: "#60",
                                        arabic: "#60"
                                    },

                                    {
                                        english: "#65",
                                        arabic: "#65"
                                    },

                                    {
                                        english: "#70",
                                        arabic: "#70"
                                    },

                                    {
                                        english: "#75",
                                        arabic: "#75"
                                    },

                                    {
                                        english: "#80",
                                        arabic: "#80"
                                    },

                                    {
                                        english: "taper2",
                                        arabic: "taper2"
                                    },

                                    {
                                        english: "taper4",
                                        arabic: "taper4"
                                    },

                                    {
                                        english: "taper6",
                                        arabic: "taper6"
                                    },


                                ],
                                masterLength: [{
                                        english: "15mm",
                                        arabic: "15mm"
                                    },

                                    {
                                        english: "16mm",
                                        arabic: "16mm"
                                    },

                                    {
                                        english: "17mm",
                                        arabic: "17mm"
                                    },

                                    {
                                        english: "18mm",
                                        arabic: "18mm"
                                    },

                                    {
                                        english: "19mm",
                                        arabic: "19mm"
                                    },

                                    {
                                        english: "20mm",
                                        arabic: "20mm"
                                    },

                                    {
                                        english: "21mm",
                                        arabic: "21mm"
                                    },

                                    {
                                        english: "22mm",
                                        arabic: "22mm"
                                    },

                                    {
                                        english: "23mm",
                                        arabic: "23mm"
                                    },

                                    {
                                        english: "24mm",
                                        arabic: "24mm"
                                    },

                                    {
                                        english: "25mm",
                                        arabic: "25mm"
                                    },

                                    {
                                        english: "26mm",
                                        arabic: "26mm"
                                    },

                                    {
                                        english: "27mm",
                                        arabic: "27mm"
                                    },

                                    {
                                        english: "28mm",
                                        arabic: "28mm"
                                    },

                                    {
                                        english: "+0.5mm",
                                        arabic: "+0.5mm"
                                    },

                                    {
                                        english: "-0.5mm",
                                        arabic: "-0.5mm"
                                    },


                                ],
                            },
                            irrigation: {
                                solutions: [{
                                        english: "sodium hypochlorite",
                                        arabic: "sodium hypochlorite"
                                    },

                                    {
                                        english: "normal saline",
                                        arabic: "normal saline"
                                    },

                                    {
                                        english: "chlorhexidine",
                                        arabic: "chlorhexidine"
                                    },
                                ],
                                sodiumHypochlorite: [{
                                        english: "normal saline",
                                        arabic: "normal saline"

                                    },
                                    {
                                        english: "chlorhexidine",
                                        arabic: "chlorhexidine"

                                    },

                                ],
                            },
                            obturation: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                material: [{
                                        english: "gutta percha",
                                        arabic: "gutta percha"
                                    },

                                    {
                                        english: "biodentine",
                                        arabic: "biodentine"
                                    },

                                    {
                                        english: "zinc oxide eugenole",
                                        arabic: "zinc oxide eugenole"
                                    },

                                    {
                                        english: "MTA",
                                        arabic: "MTA"
                                    },
                                ],
                                sealer: [{
                                        english: "zinc oxide eugenole",
                                        arabic: "zinc oxide eugenole"
                                    },

                                    {
                                        english: "resin base sealer",
                                        arabic: "resin base sealer"
                                    },

                                    {
                                        english: "addseal",
                                        arabic: "addseal"
                                    },
                                ],
                            },
                            complications: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                fileFracture: [{
                                        english: "apical",
                                        arabic: "apical"
                                    },

                                    {
                                        english: "middle",
                                        arabic: "middle"
                                    },

                                    {
                                        english: "coronal",
                                        arabic: "coronal"
                                    },
                                ],
                                perforation: [{
                                        english: "apical",
                                        arabic: "apical"
                                    },

                                    {
                                        english: "meddle",
                                        arabic: "meddle"
                                    },

                                    {
                                        english: "coronal",
                                        arabic: "coronal"
                                    },

                                    {
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                ],
                                overFilling: [{
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },

                                    {
                                        english: "2mm",
                                        arabic: "2mm"
                                    },

                                    {
                                        english: "2.5mm",
                                        arabic: "2.5mm"
                                    },

                                    {
                                        english: "3mm",
                                        arabic: "3mm"
                                    },

                                ],
                                shortFilling: [{
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },

                                    {
                                        english: "2mm",
                                        arabic: "2mm"
                                    },

                                    {
                                        english: "2.5mm",
                                        arabic: "2.5mm"
                                    },

                                    {
                                        english: "3mm",
                                        arabic: "3mm"
                                    },
                                ],
                                missingCanals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },
                                ],
                            },
                        },
                        post: {
                            canalPreparation: {
                                history: [{
                                        english: "no dental history",
                                        arabic: "no dental history"
                                    },

                                    {
                                        english: "trauma",
                                        arabic: "trauma"
                                    },

                                    {
                                        english: "bad periodontics treatment",
                                        arabic: "bad periodontics treatment"
                                    },
                                ],
                                pulp: [{
                                        english: "necrotic",
                                        arabic: "necrotic"
                                    },

                                    {
                                        english: "pulpits",
                                        arabic: "pulpits"
                                    },

                                    {
                                        english: "hypremia",
                                        arabic: "hypremia"
                                    },
                                ],
                            },
                            cementation: {
                                material: [{
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                    {
                                        english: "resin cement",
                                        arabic: "resin cement"
                                    },

                                    {
                                        english: "zinc phosphate cement",
                                        arabic: "zinc phosphate cement"
                                    },

                                    {
                                        english: "zinc poly carboxylate cement",
                                        arabic: "zinc poly carboxylate cement"
                                    },


                                ],
                            },
                            coreBuildUp: {
                                material: [{
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "amalgam",
                                        arabic: "amalgam"
                                    },

                                    {
                                        english: "base metal",
                                        arabic: "base metal"
                                    },
                                ],

                            },
                        },
                        crown: {
                            studyImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },
                                ],
                            },
                            toothReduction: {
                                finishLine: [{
                                        english: "chamfer",
                                        arabic: "chamfer"
                                    },

                                    {
                                        english: "shoulder",
                                        arabic: "shoulder"
                                    },

                                    {
                                        english: "indefinite",
                                        arabic: "indefinite"
                                    },


                                ],
                                ammount: [{
                                        english: "0.3mm",
                                        arabic: "0.3mm"
                                    },

                                    {
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "0.8mm",
                                        arabic: "0.8mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.2mm",
                                        arabic: "1.2mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },


                                ],
                            },
                            finalImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "addition silicon",
                                        arabic: "addition silicon"
                                    },

                                    {
                                        english: "condinsation silicon",
                                        arabic: "condinsation silicon"
                                    },

                                ],
                                technique: [{
                                        english: "4 hand",
                                        arabic: "4 hand"
                                    },

                                    {
                                        english: "two step",
                                        arabic: "two step"
                                    },
                                ],
                            },
                            temporaryProtection: {
                                material: [{
                                        english: "acrylic",
                                        arabic: "acrylic"
                                    },

                                    {
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "ready made",
                                        arabic: "ready made"
                                    },

                                    {
                                        english: "custome made",
                                        arabic: "custome made"
                                    },
                                ],
                            },
                            tryIn: {
                                marginalFit: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "opened",
                                        arabic: "opened"
                                    },

                                    {
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },


                                ],
                                occlusion: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "under",
                                        arabic: "under"
                                    },

                                    {
                                        english: "over",
                                        arabic: "over"
                                    },
                                ],
                                retention: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },

                                ],
                            },
                            colorSelection: {
                                classic: [{
                                        english: "A",
                                        arabic: "A"
                                    },
                                    {
                                        english: "B",
                                        arabic: "B"
                                    },
                                    {
                                        english: "C",
                                        arabic: "C"
                                    },
                                    {
                                        english: "D",
                                        arabic: "D"
                                    },
                                    {
                                        english: 1,
                                        arabic: 1
                                    },
                                    {
                                        english: 2,
                                        arabic: 2
                                    },
                                    {
                                        english: 3,
                                        arabic: 3
                                    },
                                    {
                                        english: .5,
                                        arabic: .5
                                    },
                                ],
                                vita3dMaster: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 2.5,
                                        arabic: 2.5
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                    {
                                        english: 3.5,
                                        arabic: 3.5
                                    },

                                    {
                                        english: "L",
                                        arabic: "L"
                                    },

                                    {
                                        english: "M",
                                        arabic: "M"
                                    },

                                    {
                                        english: "R",
                                        arabic: "R"
                                    },

                                    {
                                        english: "/1",
                                        arabic: "/1"
                                    },

                                    {
                                        english: "/2",
                                        arabic: "/2"
                                    },

                                    {
                                        english: "/2.5",
                                        arabic: "/2.5"
                                    },

                                    {
                                        english: "/3",
                                        arabic: "/3"
                                    },

                                    {
                                        english: 3.5,
                                        arabic: 3.5
                                    },


                                ],
                            },
                            cementation: {
                                material: [{
                                        english: "zinc phosphate",
                                        arabic: "zinc phosphate"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                    {
                                        english: "resin cement",
                                        arabic: "resin cement"
                                    },
                                ],
                            },
                            complications: {
                                reduction: [{
                                        english: "over reduction",
                                        arabic: "over reduction"
                                    },

                                    {
                                        english: "over taper",
                                        arabic: "over taper"
                                    },

                                    {
                                        english: "pulp exposure",
                                        arabic: "pulp exposure"
                                    },

                                ],
                                shortMargine: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                            },
                        },
                        removable: {
                            primaryImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "impression compound",
                                        arabic: "impression compound"
                                    },
                                ],
                            },
                            finalImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "addition silicon",
                                        arabic: "addition silicon"
                                    },

                                    {
                                        english: "condinsation silicon",
                                        arabic: "condinsation silicon"
                                    },
                                ],
                                technique: [{
                                        english: "4 hand",
                                        arabic: "4 hand"
                                    },

                                    {
                                        english: "two step",
                                        arabic: "two step"
                                    },
                                ],
                            },
                            tryIn: {
                                marginalFit: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "opened",
                                        arabic: "opened"
                                    },

                                    {
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },


                                ],
                                occlusion: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "under",
                                        arabic: "under"
                                    },

                                    {
                                        english: "over",
                                        arabic: "over"
                                    },
                                ],
                                retention: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },

                                ],
                            },
                            delivery: {
                                state: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },


                                ],


                            },
                        },
                    },

                },
                operations: {
                    diagnosisSubOptions: [{
                            english: "extraction",
                            arabic: "extraction",
                        },
                        {
                            english: "filling",
                            arabic: "filling",
                        },
                        {
                            english: "endo",
                            arabic: "endo",
                        },
                        {
                            english: "post",
                            arabic: "post",
                        },
                        {
                            english: "crown",
                            arabic: "crown",
                        },
                        {
                            english: "perio",
                            arabic: "perio",
                        },
                        {
                            english: "removable",
                            arabic: "removable",
                        },
                        {
                            english: "implant",
                            arabic: "implant",
                        },
                        {
                            english: "orthodontic",
                            arabic: "orthodontic",
                        },
                        {
                            english: "Bone Regeneration",
                            arabic: "Bone Regeneration",
                        },
                        {
                            english: "Prevention Hygiene",
                            arabic: "Prevention Hygiene",
                        },
                        {
                            english: "Other Surgery",
                            arabic: "Other Surgery",
                        },

                    ],
                    diagnosisActions: {
                        categoryTypeActions: {
                            extraction: [{

                                    english: "extraction",
                                    arabic: "extraction"
                                },
                                {

                                    english: "missing",
                                    arabic: "missing"

                                }
                            ],
                            filling: [{

                                    english: "class I",
                                    arabic: "class I",
                                },
                                {

                                    english: "class IV mesial",
                                    arabic: "class IV mesial"
                                },
                                {

                                    english: "class IV distal",
                                    arabic: "class IV distal"
                                }, {

                                    english: "class V",
                                    arabic: "class V"
                                },
                                {

                                    english: "class III distal",
                                    arabic: "class III distal"
                                },
                                {

                                    english: "class II distal",
                                    arabic: "class II distal"
                                },
                                {

                                    english: "class III mesial",
                                    arabic: "class III mesial"
                                },
                                {

                                    english: "class II mesial",
                                    arabic: "class II mesial"
                                },
                                {

                                    english: "class II MOD",
                                    arabic: "class II MOD"
                                },
                                {

                                    english: "class III MOD",
                                    arabic: "class III MOD"
                                },
                                {

                                    english: "class IV MOD",
                                    arabic: "class IV MOD"
                                },
                            ],
                            endo: [{
                                    english: "canal filling",
                                    arabic: "canal filling",
                                },
                                {
                                    english: "pulp regeniration",
                                    arabic: "pulp regeniration",
                                },
                                {
                                    english: "Apixification",
                                    arabic: "Apixification",
                                },
                                {
                                    english: "Root Canal Treatment",
                                    arabic: "Root Canal Treatment",
                                },
                                {
                                    english: "Root Canal Re-Treatment",
                                    arabic: "Root Canal Re-Treatment",
                                },
                                {
                                    english: "Root Canal Re-Treatment & Instrument Removal",
                                    arabic: "Root Canal Re-Treatment & Instrument Removal",
                                },
                                {
                                    english: "Apicectomy",
                                    arabic: "Apicectomy",
                                },
                                {
                                    english: "Necrosis",
                                    arabic: "Necrosis",
                                },
                                {
                                    english: "Broken Instrument in Canal",
                                    arabic: "Broken Instrument in Canal",
                                },
                                {
                                    english: "Root Resorption",
                                    arabic: "Root Resorption",
                                },
                            ],
                            post: [{

                                english: "ready made",
                                arabic: "ready made"
                            }, {

                                english: "custom made",
                                arabic: "custom made"
                            }],
                            crown: [{

                                    english: "full veneer",
                                    arabic: "full veneer"

                                },
                                {

                                    english: "laminate veneer",
                                    arabic: "laminate veneer"
                                },
                                {

                                    english: "occlusal veneer",
                                    arabic: "occlusal veneer",
                                },
                                {

                                    english: "post crown",
                                    arabic: "post crown",
                                },
                                {

                                    english: "endo crown",
                                    arabic: "endo crown",
                                },
                                {

                                    english: "bridge",
                                    arabic: "bridge",
                                },
                                {

                                    english: "Denture",
                                    arabic: "Denture",
                                },
                                {

                                    english: "onlay",
                                    arabic: "onlay",
                                },

                            ],
                            perio: [{
                                    english: "hygien",
                                    arabic: "hygien",
                                },
                                {
                                    english: "surgery",
                                    arabic: "surgery",
                                },
                                {
                                    english: "Plaque & Hygiene",
                                    arabic: "Plaque & Hygiene",
                                },
                                {
                                    english: "Periodontitis",
                                    arabic: "Periodontitis",
                                },
                                {
                                    english: "Gingival Recession",
                                    arabic: "Gingival Recession",
                                },
                                {
                                    english: "Gingival Overgrowth",
                                    arabic: "Gingival Overgrowth",
                                },
                                {
                                    english: "Gummy Smile",
                                    arabic: "Gummy Smile",
                                },
                                {
                                    english: "Gingival Graft",
                                    arabic: "Gingival Graft",
                                },
                                {
                                    english: "Professional Tooth Cleaning",
                                    arabic: "Professional Tooth Cleaning",
                                },
                                {
                                    english: "Scaling/Root Planning",
                                    arabic: "Scaling/Root Planning",
                                },
                                {
                                    english: "Bone Regeneration",
                                    arabic: "Bone Regeneration",
                                },
                                {
                                    english: "Pocket Reduction",
                                    arabic: "Pocket Reduction",
                                },
                                {
                                    english: "Plastic Perio Surgery",
                                    arabic: "Plastic Perio Surgery",
                                },
                                {
                                    english: "Crown Lengthening",
                                    arabic: "Crown Lengthening",
                                },
                                {
                                    english: "Gingivectomy",
                                    arabic: "Gingivectomy",
                                },
                                {
                                    english: "Laser Gingivectomy",
                                    arabic: "Laser Gingivectomy",
                                },

                            ],
                            removable: [{

                                    english: "partial",
                                    arabic: "partial",
                                },
                                {

                                    english: "Complete",
                                    arabic: "Complete",
                                }
                            ],
                            implant: [{

                                    english: "immediate",
                                    arabic: "immediate",
                                },
                                {

                                    english: "compressive",
                                    arabic: "compressive",
                                },
                                {

                                    english: "Malpositined",
                                    arabic: "Malpositined",
                                },
                                {

                                    english: "with bone loss",
                                    arabic: "with bone loss",
                                },
                                {
                                    english: "with gingival recession",
                                    arabic: "with gingival recession",
                                },
                                {
                                    english: "Full arch Implants/Denture",
                                    arabic: "Full arch Implants/Denture",
                                },
                                {
                                    english: "Remove Implant",
                                    arabic: "Remove Implant",
                                },
                            ],
                            ortoFacialTMJ: [{
                                    english: "Malooclusion",
                                    arabic: "Malooclusion"
                                },
                                {
                                    english: "Facial",
                                    arabic: "Facial",
                                },
                                {
                                    english: "TMJ & Muscles",
                                    arabic: "TMJ & Muscles"
                                }
                            ],
                            preventionHygiene: [{
                                    english: "Plaque & Hygiene",
                                    arabic: "Plaque & Hygiene"
                                },
                                {
                                    english: "Professional Tooth Cleaning",
                                    arabic: "Professional Tooth Cleaning"
                                },
                                {
                                    english: "Topical Fluoride",
                                    arabic: "Topical Fluoride"
                                },
                            ],
                            otherSurgery: [{
                                    english: "Sinus Lift",
                                    arabic: "Sinus Lift"
                                },
                                {
                                    english: "Bone Regeneration",
                                    arabic: "Bone Regeneration"
                                },

                            ],
                            orthodontic: [{
                                    english: "stable",
                                    arabic: "stable",
                                },
                                {
                                    english: "mobile",
                                    arabic: "mobile",
                                }
                            ],
                        },
                        styleActions: {
                            extraction: [

                                {
                                    english: "normal",
                                    arabic: "normal"
                                },
                                {
                                    english: "surgical",
                                    arabic: "surgical"
                                },
                            ],
                            filling: [{
                                    english: "amalgam",
                                    arabic: "amalgam",
                                },

                                {
                                    english: "composite",
                                    arabic: "composite",
                                },

                                {
                                    english: "glass ionomer",
                                    arabic: "glass ionomer",
                                },

                                {
                                    english: "compomere",
                                    arabic: "compomere",
                                },

                            ],
                            endo: [{
                                    english: "mta",
                                    arabic: "mta",
                                },

                                {
                                    english: "Conventional",
                                    arabic: "Conventional",
                                },

                                {
                                    english: "ZOE",
                                    arabic: "ZOE",
                                },

                                {
                                    english: "Calcium hydroxide",
                                    arabic: "Calcium hydroxide",
                                },

                                {
                                    english: "fiber",
                                    arabic: "fiber",
                                },

                                {
                                    english: "metal post",
                                    arabic: "metal post",
                                },

                            ],
                            post: [{
                                    english: "fiber",
                                    arabic: "fiber",
                                },
                                {
                                    english: "metal",
                                    arabic: "metal",
                                },
                                {
                                    english: "cast metal",
                                    arabic: "cast metal",
                                },
                            ],
                            crown: [{
                                    english: "metal ceramic",
                                    arabic: "metal ceramic",
                                },

                                {
                                    english: "zirconia",
                                    arabic: "zirconia",
                                },

                                {
                                    english: "emax",
                                    arabic: "emax",
                                },

                                {
                                    english: "full metal",
                                    arabic: "full metal",
                                },

                            ],
                            perio: [{
                                english: "scaling",
                                arabic: "scaling",
                            }],
                            removable: [{
                                    english: "acrylic",
                                    arabic: "acrylic",
                                },

                                {
                                    english: "vitalium",
                                    arabic: "vitalium",
                                },

                                {
                                    english: "thermopress",
                                    arabic: "thermopress",
                                },

                            ],
                            implant: [{
                                    english: "MILD",
                                    arabic: "MILD",
                                },
                                {
                                    english: "MODERATE",
                                    arabic: "MODERATE",
                                },
                                {
                                    english: "SEVERE",
                                    arabic: "SEVERE",
                                },
                            ],
                            orthodontic: {
                                stable: [{
                                        english: "metal",
                                        arabic: "metal",
                                    },
                                    {
                                        english: "ceramic",
                                        arabic: "ceramic",
                                    },
                                    {
                                        english: "transparent",
                                        arabic: "transparent",
                                    },
                                    {
                                        english: "internal",
                                        arabic: "internal",
                                    },
                                ],
                                mobile: [{
                                        english: "wire",
                                        arabic: "wire",
                                    },
                                    {
                                        english: "transparent",
                                        arabic: "transparent",
                                    },
                                ],
                                type: [{
                                        english: "upper",
                                        arabic: "upper"
                                    },
                                    {
                                        english: "lower",
                                        arabic: "lower"
                                    },
                                    {
                                        english: "both",
                                        arabic: "both"
                                    },
                                ]
                            },

                        },
                        diagnosisAction: {
                            extraction: [{
                                    english: "history",
                                    arabic: "history"
                                },

                                {
                                    english: "crownState",
                                    arabic: "crownState"
                                },

                                {
                                    english: "root",
                                    arabic: "root"
                                },

                                {
                                    english: "periapical",
                                    arabic: "periapical"
                                },

                                {
                                    english: "mobility",
                                    arabic: "mobility"
                                },

                            ],
                            filling: [{
                                    english: "dentalHistory",
                                    arabic: "dentalHistory"
                                },

                                {
                                    english: "caries",
                                    arabic: "caries"
                                },

                                {
                                    english: "fracture",
                                    arabic: "fracture"
                                },

                                {
                                    english: "complaint",
                                    arabic: "complaint"
                                },

                                {
                                    english: "complications",
                                    arabic: "complications"
                                },



                            ],
                            endo: [{
                                    english: "history",
                                    arabic: "history"
                                },

                                {
                                    english: "caries",
                                    arabic: "caries"
                                },

                                {
                                    english: "pulp",
                                    arabic: "pulp"
                                },

                                {
                                    english: "complaint",
                                    arabic: "complaint"
                                },

                            ],
                        },
                    },
                    diagnosisSubAction: {
                        extraction: {
                            history: {
                                endodontTreatment: [{
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },

                                    {
                                        english: "missing canals",
                                        arabic: "missing canals"
                                    },
                                ],
                                crown: [{
                                        english: "open margin",
                                        arabic: "open margin"
                                    },

                                    {
                                        english: "perforation",
                                        arabic: "perforation"
                                    },

                                    {
                                        english: "no retention",
                                        arabic: "no retention"
                                    },

                                ],
                                filling: [{
                                        english: "amalgam",
                                        arabic: "amalgam"
                                    },

                                    {
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                ],
                            },
                            crownState: {
                                caries: [{
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "occlusal",
                                        arabic: "occlusal"
                                    },
                                ],
                                fracture: [{
                                        english: "I",
                                        arabic: "I"
                                    },

                                    {
                                        english: "II",
                                        arabic: "II"
                                    },

                                    {
                                        english: "III",
                                        arabic: "III"
                                    },
                                ],
                                trauma: [{
                                        english: "milde",
                                        arabic: "milde"
                                    },
                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },
                                ],
                            },
                            root: {
                                fracture: [{
                                        english: "horizontal",
                                        arabic: "horizontal"
                                    },

                                    {
                                        english: "vertical",
                                        arabic: "vertical"
                                    },
                                ],
                                resorption: [

                                    {
                                        english: "internal",
                                        arabic: "internal"
                                    },

                                    {
                                        english: "external",
                                        arabic: "external"
                                    },

                                ]
                            },
                            periapical: {
                                abscess: [{
                                        english: "acute",
                                        arabic: "acute"
                                    },

                                    {
                                        english: "chronic",
                                        arabic: "chronic"
                                    },

                                ],
                                cyst: [{
                                        english: "radicular",
                                        arabic: "radicular"
                                    },

                                    {
                                        english: "periodontal",
                                        arabic: "periodontal"
                                    },

                                ]
                            },
                            mobility: {
                                grade: [{
                                        english: "I",
                                        arabic: "I"
                                    },

                                    {
                                        english: "II",
                                        arabic: "II"
                                    },

                                    {
                                        english: "III",
                                        arabic: "III"
                                    },
                                ],
                                type: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                    {
                                        english: 4,
                                        arabic: 4
                                    },

                                    {
                                        english: 5,
                                        arabic: 5
                                    },

                                    {
                                        english: 6,
                                        arabic: 6
                                    },

                                ]
                            }
                        },
                        filling: {
                            dentalHistory: {
                                caries: [{
                                        english: "classi",
                                        arabic: "class i"
                                    },

                                    {
                                        english: "calss i",
                                        arabic: "calss i"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                                amalgamFilling: [{
                                        english: "classI",
                                        arabic: "classI"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },


                                ],
                                state: [{
                                        english: "started",
                                        arabic: "started"
                                    },

                                    {
                                        english: "completed",
                                        arabic: "completed"
                                    },

                                ],
                                compositFilling: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                                drawbacks: [{
                                        english: "recurrent caries",
                                        arabic: "recurrent caries"
                                    },

                                    {
                                        english: "fracture",
                                        arabic: "fracture"
                                    },

                                    {
                                        english: "proximal caries",
                                        arabic: "proximal caries"
                                    },


                                ],
                                glassIonomerFilling: [

                                    {
                                        english: "classI",
                                        arabic: "classI"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                            },
                            caries: {
                                type: [{
                                        english: "simple",
                                        arabic: "simple"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "shallow",
                                        arabic: "shallow"
                                    },
                                ],
                                class: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ]
                            },
                            fracture: {
                                etch: [{
                                        english: "tolal",
                                        arabic: "tolal"
                                    },

                                    {
                                        english: "selective",
                                        arabic: "selective"
                                    },
                                ],
                                bond: [{
                                        english: "selfe",
                                        arabic: "selfe"
                                    },

                                    {
                                        english: "etch",
                                        arabic: "etch"
                                    },


                                ],
                            },
                            complaint: {
                                pain: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "with sweet",
                                        arabic: "with sweet"
                                    },

                                    {
                                        english: "with cold",
                                        arabic: "with cold"
                                    },

                                    {
                                        english: "with percussion",
                                        arabic: "with percussion"
                                    },
                                ],
                                eshetics: [{
                                    english: "bad esthestics",
                                    arabic: "bad esthestics"
                                }, ],
                                social: [{
                                        english: "bad Oder",
                                        arabic: "bad Oder"
                                    },

                                    {
                                        english: "phonetcs",
                                        arabic: "phonetcs"
                                    },


                                ],
                            },
                            complications: {
                                colorChange: [{
                                        english: "minor",
                                        arabic: "minor"
                                    },

                                    {
                                        english: "major",
                                        arabic: "major"
                                    },

                                ],
                                leakage: [{
                                        english: "discoloration",
                                        arabic: "discoloration"
                                    },

                                    {
                                        english: "pulp necrosis",
                                        arabic: "pulp necrosis"
                                    },

                                ],
                                pulpExposure: [{
                                        english: "minute",
                                        arabic: "minute"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },


                                ],
                                fracture: [{
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },

                                    {
                                        english: "tooth",
                                        arabic: "tooth"
                                    },


                                ],
                            },

                        },
                        endo: {
                            history: {
                                endo: [{
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },
                                ],
                                caries: [{
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },
                                ],
                                filling: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                glassIonomer: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                composite: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                crown: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                postAndCore: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                            },
                            caries: {
                                type: [{
                                        english: "simple",
                                        arabic: "simple"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "shallow",
                                        arabic: "shallow"
                                    },
                                ],
                                class: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ]
                            },
                            pulp: {
                                state: [{
                                        english: "hyperemia",
                                        arablic: "hyperemia"
                                    },

                                    {
                                        english: "pulpitis",
                                        arablic: "pulpitis"
                                    },

                                    {
                                        english: "necrosis",
                                        arablic: "necrosis"
                                    },

                                    {
                                        english: "abscess",
                                        arablic: "abscess"
                                    },

                                    {
                                        english: "internal resorption",
                                        arablic: "internal resorption"
                                    },

                                ],
                                periapical: [{
                                        english: "normal",
                                        arabic: "normal"
                                    },

                                    {
                                        english: "abscess",
                                        arabic: "abscess"
                                    },

                                    {
                                        english: "cyst",
                                        arabic: "cyst"
                                    },

                                    {
                                        english: "granuloma",
                                        arabic: "granuloma"
                                    },

                                ],
                            },
                            complaint: {
                                pain: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "on percussion",
                                        arabic: "on percussion"
                                    },
                                ],
                                mobility: [{
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                ],
                            },
                        },
                    },
                    proceduresAction: {
                        extraction: [{
                                english: "anesthesia",
                                arabic: "anesthesia"
                            },

                            {
                                english: "extraction",
                                arabic: "extraction"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },
                        ],
                        filling: [{
                                english: "cavityPreparation",
                                arabic: "cavityPreparation"
                            },

                            {
                                english: "base",
                                arabic: "base"
                            },

                            {
                                english: "etchAndBond",
                                arabic: "etchAndBond"
                            },

                            {
                                english: "shadeSelection",
                                arabic: "shadeSelection"
                            },

                            {
                                english: "finalFilling",
                                arabic: "finalFilling"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },

                        ],
                        endo: [{
                                english: "diagnosis",
                                arabic: "diagnosis"
                            },

                            {
                                english: "gainingAccess",
                                arabic: "gainingAccess"
                            },

                            {
                                english: "preparation",
                                arabic: "preparation"
                            },

                            {
                                english: "irrigation",
                                arabic: "irrigation"
                            },

                            {
                                english: "obturation",
                                arabic: "obturation"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },

                        ],
                        post: [

                            {
                                english: "canalPreparation",
                                arabic: "canalPreparation"
                            },
                            {
                                english: "cementation",
                                arabic: "cementation"
                            },
                            {
                                english: "coreBuildUp",
                                arabic: "coreBuildUp"
                            },
                        ],
                        crown: [{
                                english: "studyImpression",
                                arabic: "studyImpression"
                            },
                            {
                                english: "toothReduction",
                                arabic: "toothReduction"
                            },
                            {
                                english: "finalImpression",
                                arabic: "finalImpression"
                            },
                            {
                                english: "temporaryProtection",
                                arabic: "temporaryProtection"
                            },
                            {
                                english: "tryIn",
                                arabic: "tryIn"
                            },
                            {
                                english: "colorSelection",
                                arabic: "colorSelection"
                            },
                            {
                                english: "cementation",
                                arabic: "cementation"
                            },
                            {
                                english: "complications",
                                arabic: "complications"
                            },
                        ],
                        removable: [{
                                english: "primaryImpression",
                                arabic: "primaryImpression"
                            },

                            {
                                english: "finalImpression",
                                arabic: "finalImpression"
                            },

                            {
                                english: "tryIn",
                                arabic: "tryIn"
                            },

                            {
                                english: "delivery",
                                arabic: "delivery"
                            },

                        ],
                    },
                    proceduresSubAction: {
                        extraction: {
                            anesthesia: {
                                type: [{
                                        english: "egypt",
                                        arabic: "egypt"
                                    },

                                    {
                                        english: "spain",
                                        arabic: "spain"
                                    },

                                    {
                                        english: "france",
                                        arabic: "france"
                                    },

                                    {
                                        english: "with adrenalin",
                                        arabic: "with adrenalin"
                                    },

                                    {
                                        english: "without adrenalin",
                                        arabic: "without adrenalin"
                                    },
                                ],
                                ammount: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                ],
                            },
                            extraction: {
                                safe: [{
                                        english: "no problem",
                                        arabic: "no problem"
                                    },
                                    {
                                        english: "with complication",
                                        arabic: "with complication"
                                    },
                                ],
                            },
                            complications: {
                                rootFracture: [{
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "1pical third",
                                        arabic: "1pical third"
                                    },

                                    {
                                        english: "one half",
                                        arabic: "one half"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },


                                ],
                                bleeding: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },
                                ],
                                tuberosityFracture: [{
                                        english: "small",
                                        arabic: "small"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },
                                ],
                                plateFracture: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                ],

                            },
                        },
                        filling: {
                            cavityPreparation: {
                                extension: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "cusp",
                                        arabic: "cusp"
                                    },

                                    {
                                        english: "buccal pit",
                                        arabic: "buccal pit"
                                    },

                                    {
                                        english: "lingual pit",
                                        arabic: "lingual pit"
                                    },


                                ],
                                size: [{
                                        english: "wide",
                                        arabic: "wide"
                                    },

                                    {
                                        english: "very wide",
                                        arabic: "very wide"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "very deep",
                                        arabic: "very deep"
                                    },
                                ],
                            },
                            base: {
                                material: [{
                                        english: "zinc phosphate",
                                        arabic: "zinc phosphate"
                                    },

                                    {
                                        english: "zinc poly carboxylate",
                                        arabic: "zinc poly carboxylate"
                                    },

                                    {
                                        english: "calcium hydroxide",
                                        arabic: "calcium hydroxide"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },
                                ],
                            },
                            etchAndBond: {
                                etch: [{
                                        english: "tolal",
                                        arabic: "tolal"
                                    },

                                    {
                                        english: "selective",
                                        arabic: "selective"
                                    },


                                ],
                                bond: [{
                                    english: "selfe etch",
                                    arabic: "selfe etch"
                                }],
                            },
                            shadeSelection: {
                                dentine: [{
                                        english: "a1",
                                        arabic: "a1"
                                    },

                                    {
                                        english: "a2",
                                        arabic: "a2"
                                    },

                                    {
                                        english: "a3",
                                        arabic: "a3"
                                    },

                                    {
                                        english: "a3.5",
                                        arabic: "a3.5"
                                    },

                                    {
                                        english: "b1",
                                        arabic: "b1"
                                    },

                                    {
                                        english: "b2",
                                        arabic: "b2"
                                    },

                                    {
                                        english: "b3",
                                        arabic: "b3"
                                    },

                                    {
                                        english: "c1",
                                        arabic: "c1"
                                    },

                                    {
                                        english: "c2",
                                        arabic: "c2"
                                    },

                                    {
                                        english: "c3",
                                        arabic: "c3"
                                    },

                                ],
                                enamel: [{
                                        english: "a1",
                                        arabic: "a1"
                                    },

                                    {
                                        english: "a2",
                                        arabic: "a2"
                                    },

                                    {
                                        english: "a3",
                                        arabic: "a3"
                                    },

                                    {
                                        english: "a3.5",
                                        arabic: "a3.5"
                                    },

                                    {
                                        english: "b1",
                                        arabic: "b1"
                                    },

                                    {
                                        english: "b2",
                                        arabic: "b2"
                                    },

                                    {
                                        english: "b3",
                                        arabic: "b3"
                                    },

                                    {
                                        english: "c1",
                                        arabic: "c1"
                                    },

                                    {
                                        english: "c2",
                                        arabic: "c2"
                                    },

                                    {
                                        english: "c3",
                                        arabic: "c3"
                                    },

                                ],
                            },
                            finalFilling: {
                                state: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "accepted",
                                        arabic: "accepted"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },
                                    {
                                        english: "excellent",
                                        arabic: "excellent"
                                    },
                                ],
                            },
                            complications: {
                                colorChange: [{
                                        english: "minor",
                                        arabic: "minor"
                                    },

                                    {
                                        english: "major",
                                        arabic: "major"
                                    },

                                ],
                                leakage: [{
                                        english: "discoloration",
                                        arabic: "discoloration"
                                    },

                                    {
                                        english: "pulp necrosis",
                                        arabic: "pulp necrosis"
                                    },

                                ],
                                pulpExposure: [{
                                        english: "minute",
                                        arabic: "minute"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },

                                ],
                                fracture: [{
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },

                                    {
                                        english: "tooth",
                                        arabic: "tooth"
                                    },

                                ],

                            },
                        },
                        endo: {
                            diagnosis: {
                                history: [{
                                        english: "no dental history",
                                        arabic: "no dental history"
                                    },

                                    {
                                        english: "trauma",
                                        arabic: "trauma"
                                    },

                                    {
                                        english: "bad periodontics treatment",
                                        arabic: "bad periodontics treatment"
                                    },


                                ],
                                pulp: [{
                                        english: "necrotic",
                                        arabic: "necrotic"
                                    },

                                    {
                                        english: "pulpits",
                                        arabic: "pulpits"
                                    },

                                    {
                                        english: "hypremia",
                                        arabic: "hypremia"
                                    },
                                ],
                            },
                            gainingAccess: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                            },
                            preparation: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                masterCone: [{
                                        english: "#20",
                                        arabic: "#20"
                                    },

                                    {
                                        english: "#25",
                                        arabic: "#25"
                                    },

                                    {
                                        english: "#30",
                                        arabic: "#30"
                                    },

                                    {
                                        english: "#35",
                                        arabic: "#35"
                                    },

                                    {
                                        english: "#40",
                                        arabic: "#40"
                                    },

                                    {
                                        english: "#45",
                                        arabic: "#45"
                                    },

                                    {
                                        english: "#50",
                                        arabic: "#50"
                                    },

                                    {
                                        english: "#55",
                                        arabic: "#55"
                                    },

                                    {
                                        english: "#60",
                                        arabic: "#60"
                                    },

                                    {
                                        english: "#65",
                                        arabic: "#65"
                                    },

                                    {
                                        english: "#70",
                                        arabic: "#70"
                                    },

                                    {
                                        english: "#75",
                                        arabic: "#75"
                                    },

                                    {
                                        english: "#80",
                                        arabic: "#80"
                                    },

                                    {
                                        english: "taper2",
                                        arabic: "taper2"
                                    },

                                    {
                                        english: "taper4",
                                        arabic: "taper4"
                                    },

                                    {
                                        english: "taper6",
                                        arabic: "taper6"
                                    },


                                ],
                                masterLength: [{
                                        english: "15mm",
                                        arabic: "15mm"
                                    },

                                    {
                                        english: "16mm",
                                        arabic: "16mm"
                                    },

                                    {
                                        english: "17mm",
                                        arabic: "17mm"
                                    },

                                    {
                                        english: "18mm",
                                        arabic: "18mm"
                                    },

                                    {
                                        english: "19mm",
                                        arabic: "19mm"
                                    },

                                    {
                                        english: "20mm",
                                        arabic: "20mm"
                                    },

                                    {
                                        english: "21mm",
                                        arabic: "21mm"
                                    },

                                    {
                                        english: "22mm",
                                        arabic: "22mm"
                                    },

                                    {
                                        english: "23mm",
                                        arabic: "23mm"
                                    },

                                    {
                                        english: "24mm",
                                        arabic: "24mm"
                                    },

                                    {
                                        english: "25mm",
                                        arabic: "25mm"
                                    },

                                    {
                                        english: "26mm",
                                        arabic: "26mm"
                                    },

                                    {
                                        english: "27mm",
                                        arabic: "27mm"
                                    },

                                    {
                                        english: "28mm",
                                        arabic: "28mm"
                                    },

                                    {
                                        english: "+0.5mm",
                                        arabic: "+0.5mm"
                                    },

                                    {
                                        english: "-0.5mm",
                                        arabic: "-0.5mm"
                                    },


                                ],
                            },
                            irrigation: {
                                solutions: [{
                                        english: "sodium hypochlorite",
                                        arabic: "sodium hypochlorite"
                                    },

                                    {
                                        english: "normal saline",
                                        arabic: "normal saline"
                                    },

                                    {
                                        english: "chlorhexidine",
                                        arabic: "chlorhexidine"
                                    },
                                ],
                                sodiumHypochlorite: [{
                                        english: "normal saline",
                                        arabic: "normal saline"

                                    },
                                    {
                                        english: "chlorhexidine",
                                        arabic: "chlorhexidine"

                                    },

                                ],
                            },
                            obturation: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                material: [{
                                        english: "gutta percha",
                                        arabic: "gutta percha"
                                    },

                                    {
                                        english: "biodentine",
                                        arabic: "biodentine"
                                    },

                                    {
                                        english: "zinc oxide eugenole",
                                        arabic: "zinc oxide eugenole"
                                    },

                                    {
                                        english: "MTA",
                                        arabic: "MTA"
                                    },
                                ],
                                sealer: [{
                                        english: "zinc oxide eugenole",
                                        arabic: "zinc oxide eugenole"
                                    },

                                    {
                                        english: "resin base sealer",
                                        arabic: "resin base sealer"
                                    },

                                    {
                                        english: "addseal",
                                        arabic: "addseal"
                                    },
                                ],
                            },
                            complications: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                fileFracture: [{
                                        english: "apical",
                                        arabic: "apical"
                                    },

                                    {
                                        english: "middle",
                                        arabic: "middle"
                                    },

                                    {
                                        english: "coronal",
                                        arabic: "coronal"
                                    },
                                ],
                                perforation: [{
                                        english: "apical",
                                        arabic: "apical"
                                    },

                                    {
                                        english: "meddle",
                                        arabic: "meddle"
                                    },

                                    {
                                        english: "coronal",
                                        arabic: "coronal"
                                    },

                                    {
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                ],
                                overFilling: [{
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },

                                    {
                                        english: "2mm",
                                        arabic: "2mm"
                                    },

                                    {
                                        english: "2.5mm",
                                        arabic: "2.5mm"
                                    },

                                    {
                                        english: "3mm",
                                        arabic: "3mm"
                                    },

                                ],
                                shortFilling: [{
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },

                                    {
                                        english: "2mm",
                                        arabic: "2mm"
                                    },

                                    {
                                        english: "2.5mm",
                                        arabic: "2.5mm"
                                    },

                                    {
                                        english: "3mm",
                                        arabic: "3mm"
                                    },
                                ],
                                missingCanals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },
                                ],
                            },
                        },
                        post: {
                            canalPreparation: {
                                history: [{
                                        english: "no dental history",
                                        arabic: "no dental history"
                                    },

                                    {
                                        english: "trauma",
                                        arabic: "trauma"
                                    },

                                    {
                                        english: "bad periodontics treatment",
                                        arabic: "bad periodontics treatment"
                                    },
                                ],
                                pulp: [{
                                        english: "necrotic",
                                        arabic: "necrotic"
                                    },

                                    {
                                        english: "pulpits",
                                        arabic: "pulpits"
                                    },

                                    {
                                        english: "hypremia",
                                        arabic: "hypremia"
                                    },
                                ],
                            },
                            cementation: {
                                material: [{
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                    {
                                        english: "resin cement",
                                        arabic: "resin cement"
                                    },

                                    {
                                        english: "zinc phosphate cement",
                                        arabic: "zinc phosphate cement"
                                    },

                                    {
                                        english: "zinc poly carboxylate cement",
                                        arabic: "zinc poly carboxylate cement"
                                    },


                                ],
                            },
                            coreBuildUp: {
                                material: [{
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "amalgam",
                                        arabic: "amalgam"
                                    },

                                    {
                                        english: "base metal",
                                        arabic: "base metal"
                                    },
                                ],

                            },
                        },
                        crown: {
                            studyImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },
                                ],
                            },
                            toothReduction: {
                                finishLine: [{
                                        english: "chamfer",
                                        arabic: "chamfer"
                                    },

                                    {
                                        english: "shoulder",
                                        arabic: "shoulder"
                                    },

                                    {
                                        english: "indefinite",
                                        arabic: "indefinite"
                                    },


                                ],
                                ammount: [{
                                        english: "0.3mm",
                                        arabic: "0.3mm"
                                    },

                                    {
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "0.8mm",
                                        arabic: "0.8mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.2mm",
                                        arabic: "1.2mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },


                                ],
                            },
                            finalImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "addition silicon",
                                        arabic: "addition silicon"
                                    },

                                    {
                                        english: "condinsation silicon",
                                        arabic: "condinsation silicon"
                                    },

                                ],
                                technique: [{
                                        english: "4 hand",
                                        arabic: "4 hand"
                                    },

                                    {
                                        english: "two step",
                                        arabic: "two step"
                                    },
                                ],
                            },
                            temporaryProtection: {
                                material: [{
                                        english: "acrylic",
                                        arabic: "acrylic"
                                    },

                                    {
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "ready made",
                                        arabic: "ready made"
                                    },

                                    {
                                        english: "custome made",
                                        arabic: "custome made"
                                    },
                                ],
                            },
                            tryIn: {
                                marginalFit: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "opened",
                                        arabic: "opened"
                                    },

                                    {
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },


                                ],
                                occlusion: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "under",
                                        arabic: "under"
                                    },

                                    {
                                        english: "over",
                                        arabic: "over"
                                    },
                                ],
                                retention: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },

                                ],
                            },
                            colorSelection: {
                                classic: [{
                                        english: "A",
                                        arabic: "A"
                                    },
                                    {
                                        english: "B",
                                        arabic: "B"
                                    },
                                    {
                                        english: "C",
                                        arabic: "C"
                                    },
                                    {
                                        english: "D",
                                        arabic: "D"
                                    },
                                    {
                                        english: 1,
                                        arabic: 1
                                    },
                                    {
                                        english: 2,
                                        arabic: 2
                                    },
                                    {
                                        english: 3,
                                        arabic: 3
                                    },
                                    {
                                        english: .5,
                                        arabic: .5
                                    },
                                ],
                                vita3dMaster: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 2.5,
                                        arabic: 2.5
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                    {
                                        english: 3.5,
                                        arabic: 3.5
                                    },

                                    {
                                        english: "L",
                                        arabic: "L"
                                    },

                                    {
                                        english: "M",
                                        arabic: "M"
                                    },

                                    {
                                        english: "R",
                                        arabic: "R"
                                    },

                                    {
                                        english: "/1",
                                        arabic: "/1"
                                    },

                                    {
                                        english: "/2",
                                        arabic: "/2"
                                    },

                                    {
                                        english: "/2.5",
                                        arabic: "/2.5"
                                    },

                                    {
                                        english: "/3",
                                        arabic: "/3"
                                    },

                                    {
                                        english: 3.5,
                                        arabic: 3.5
                                    },


                                ],
                            },
                            cementation: {
                                material: [{
                                        english: "zinc phosphate",
                                        arabic: "zinc phosphate"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                    {
                                        english: "resin cement",
                                        arabic: "resin cement"
                                    },
                                ],
                            },
                            complications: {
                                reduction: [{
                                        english: "over reduction",
                                        arabic: "over reduction"
                                    },

                                    {
                                        english: "over taper",
                                        arabic: "over taper"
                                    },

                                    {
                                        english: "pulp exposure",
                                        arabic: "pulp exposure"
                                    },

                                ],
                                shortMargine: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                            },
                        },
                        removable: {
                            primaryImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "impression compound",
                                        arabic: "impression compound"
                                    },
                                ],
                            },
                            finalImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "addition silicon",
                                        arabic: "addition silicon"
                                    },

                                    {
                                        english: "condinsation silicon",
                                        arabic: "condinsation silicon"
                                    },
                                ],
                                technique: [{
                                        english: "4 hand",
                                        arabic: "4 hand"
                                    },

                                    {
                                        english: "two step",
                                        arabic: "two step"
                                    },
                                ],
                            },
                            tryIn: {
                                marginalFit: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "opened",
                                        arabic: "opened"
                                    },

                                    {
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },


                                ],
                                occlusion: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "under",
                                        arabic: "under"
                                    },

                                    {
                                        english: "over",
                                        arabic: "over"
                                    },
                                ],
                                retention: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },

                                ],
                            },
                            delivery: {
                                state: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },


                                ],


                            },
                        },
                    },

                },
                planing: {
                    diagnosisSubOptions: [{
                            english: "extraction",
                            arabic: "extraction",
                        },
                        {
                            english: "filling",
                            arabic: "filling",
                        },
                        {
                            english: "endo",
                            arabic: "endo",
                        },
                        {
                            english: "post",
                            arabic: "post",
                        },
                        {
                            english: "crown",
                            arabic: "crown",
                        },
                        {
                            english: "perio",
                            arabic: "perio",
                        },
                        {
                            english: "removable",
                            arabic: "removable",
                        },
                        {
                            english: "implant",
                            arabic: "implant",
                        },
                        {
                            english: "orthodontic",
                            arabic: "orthodontic",
                        },
                        {
                            english: "Bone Regeneration",
                            arabic: "Bone Regeneration",
                        },
                        {
                            english: "Prevention Hygiene",
                            arabic: "Prevention Hygiene",
                        },
                        {
                            english: "Other Surgery",
                            arabic: "Other Surgery",
                        },

                    ],
                    diagnosisActions: {
                        categoryTypeActions: {
                            extraction: [{

                                    english: "extraction",
                                    arabic: "extraction"
                                },
                                {

                                    english: "missing",
                                    arabic: "missing"

                                }
                            ],
                            filling: [{

                                    english: "class I",
                                    arabic: "class I",
                                },
                                {

                                    english: "class IV mesial",
                                    arabic: "class IV mesial"
                                },
                                {

                                    english: "class IV distal",
                                    arabic: "class IV distal"
                                }, {

                                    english: "class V",
                                    arabic: "class V"
                                },
                                {

                                    english: "class III distal",
                                    arabic: "class III distal"
                                },
                                {

                                    english: "class II distal",
                                    arabic: "class II distal"
                                },
                                {

                                    english: "class III mesial",
                                    arabic: "class III mesial"
                                },
                                {

                                    english: "class II mesial",
                                    arabic: "class II mesial"
                                },
                                {

                                    english: "class II MOD",
                                    arabic: "class II MOD"
                                },
                                {

                                    english: "class III MOD",
                                    arabic: "class III MOD"
                                },
                                {

                                    english: "class IV MOD",
                                    arabic: "class IV MOD"
                                },
                            ],
                            endo: [{
                                    english: "canal filling",
                                    arabic: "canal filling",
                                },
                                {
                                    english: "pulp regeniration",
                                    arabic: "pulp regeniration",
                                },
                                {
                                    english: "Apixification",
                                    arabic: "Apixification",
                                },
                                {
                                    english: "Root Canal Treatment",
                                    arabic: "Root Canal Treatment",
                                },
                                {
                                    english: "Root Canal Re-Treatment",
                                    arabic: "Root Canal Re-Treatment",
                                },
                                {
                                    english: "Root Canal Re-Treatment & Instrument Removal",
                                    arabic: "Root Canal Re-Treatment & Instrument Removal",
                                },
                                {
                                    english: "Apicectomy",
                                    arabic: "Apicectomy",
                                },
                                {
                                    english: "Necrosis",
                                    arabic: "Necrosis",
                                },
                                {
                                    english: "Broken Instrument in Canal",
                                    arabic: "Broken Instrument in Canal",
                                },
                                {
                                    english: "Root Resorption",
                                    arabic: "Root Resorption",
                                },
                            ],
                            post: [{

                                english: "ready made",
                                arabic: "ready made"
                            }, {

                                english: "custom made",
                                arabic: "custom made"
                            }],
                            crown: [{

                                    english: "full veneer",
                                    arabic: "full veneer"

                                },
                                {

                                    english: "laminate veneer",
                                    arabic: "laminate veneer"
                                },
                                {

                                    english: "occlusal veneer",
                                    arabic: "occlusal veneer",
                                },
                                {

                                    english: "post crown",
                                    arabic: "post crown",
                                },
                                {

                                    english: "endo crown",
                                    arabic: "endo crown",
                                },
                                {

                                    english: "bridge",
                                    arabic: "bridge",
                                },
                                {

                                    english: "Denture",
                                    arabic: "Denture",
                                },
                                {

                                    english: "onlay",
                                    arabic: "onlay",
                                },

                            ],
                            perio: [{
                                    english: "hygien",
                                    arabic: "hygien",
                                },
                                {
                                    english: "surgery",
                                    arabic: "surgery",
                                },
                                {
                                    english: "Plaque & Hygiene",
                                    arabic: "Plaque & Hygiene",
                                },
                                {
                                    english: "Periodontitis",
                                    arabic: "Periodontitis",
                                },
                                {
                                    english: "Gingival Recession",
                                    arabic: "Gingival Recession",
                                },
                                {
                                    english: "Gingival Overgrowth",
                                    arabic: "Gingival Overgrowth",
                                },
                                {
                                    english: "Gummy Smile",
                                    arabic: "Gummy Smile",
                                },
                                {
                                    english: "Gingival Graft",
                                    arabic: "Gingival Graft",
                                },
                                {
                                    english: "Professional Tooth Cleaning",
                                    arabic: "Professional Tooth Cleaning",
                                },
                                {
                                    english: "Scaling/Root Planning",
                                    arabic: "Scaling/Root Planning",
                                },
                                {
                                    english: "Bone Regeneration",
                                    arabic: "Bone Regeneration",
                                },
                                {
                                    english: "Pocket Reduction",
                                    arabic: "Pocket Reduction",
                                },
                                {
                                    english: "Plastic Perio Surgery",
                                    arabic: "Plastic Perio Surgery",
                                },
                                {
                                    english: "Crown Lengthening",
                                    arabic: "Crown Lengthening",
                                },
                                {
                                    english: "Gingivectomy",
                                    arabic: "Gingivectomy",
                                },
                                {
                                    english: "Laser Gingivectomy",
                                    arabic: "Laser Gingivectomy",
                                },

                            ],
                            removable: [{

                                    english: "partial",
                                    arabic: "partial",
                                },
                                {

                                    english: "Complete",
                                    arabic: "Complete",
                                }
                            ],
                            implant: [{

                                    english: "immediate",
                                    arabic: "immediate",
                                },
                                {

                                    english: "compressive",
                                    arabic: "compressive",
                                },
                                {

                                    english: "Malpositined",
                                    arabic: "Malpositined",
                                },
                                {

                                    english: "with bone loss",
                                    arabic: "with bone loss",
                                },
                                {
                                    english: "with gingival recession",
                                    arabic: "with gingival recession",
                                },
                                {
                                    english: "Full arch Implants/Denture",
                                    arabic: "Full arch Implants/Denture",
                                },
                                {
                                    english: "Remove Implant",
                                    arabic: "Remove Implant",
                                },
                            ],
                            ortoFacialTMJ: [{
                                    english: "Malooclusion",
                                    arabic: "Malooclusion"
                                },
                                {
                                    english: "Facial",
                                    arabic: "Facial",
                                },
                                {
                                    english: "TMJ & Muscles",
                                    arabic: "TMJ & Muscles"
                                }
                            ],
                            preventionHygiene: [{
                                    english: "Plaque & Hygiene",
                                    arabic: "Plaque & Hygiene"
                                },
                                {
                                    english: "Professional Tooth Cleaning",
                                    arabic: "Professional Tooth Cleaning"
                                },
                                {
                                    english: "Topical Fluoride",
                                    arabic: "Topical Fluoride"
                                },
                            ],
                            otherSurgery: [{
                                    english: "Sinus Lift",
                                    arabic: "Sinus Lift"
                                },
                                {
                                    english: "Bone Regeneration",
                                    arabic: "Bone Regeneration"
                                },

                            ],
                            orthodontic: [{
                                    english: "stable",
                                    arabic: "stable",
                                },
                                {
                                    english: "mobile",
                                    arabic: "mobile",
                                }
                            ],
                        },
                        styleActions: {
                            extraction: [

                                {
                                    english: "normal",
                                    arabic: "normal"
                                },
                                {
                                    english: "surgical",
                                    arabic: "surgical"
                                },
                            ],
                            filling: [{
                                    english: "amalgam",
                                    arabic: "amalgam",
                                },

                                {
                                    english: "composite",
                                    arabic: "composite",
                                },

                                {
                                    english: "glass ionomer",
                                    arabic: "glass ionomer",
                                },

                                {
                                    english: "compomere",
                                    arabic: "compomere",
                                },

                            ],
                            endo: [{
                                    english: "mta",
                                    arabic: "mta",
                                },

                                {
                                    english: "Conventional",
                                    arabic: "Conventional",
                                },

                                {
                                    english: "ZOE",
                                    arabic: "ZOE",
                                },

                                {
                                    english: "Calcium hydroxide",
                                    arabic: "Calcium hydroxide",
                                },

                                {
                                    english: "fiber",
                                    arabic: "fiber",
                                },

                                {
                                    english: "metal post",
                                    arabic: "metal post",
                                },

                            ],
                            post: [{
                                    english: "fiber",
                                    arabic: "fiber",
                                },
                                {
                                    english: "metal",
                                    arabic: "metal",
                                },
                                {
                                    english: "cast metal",
                                    arabic: "cast metal",
                                },
                            ],
                            crown: [{
                                    english: "metal ceramic",
                                    arabic: "metal ceramic",
                                },

                                {
                                    english: "zirconia",
                                    arabic: "zirconia",
                                },

                                {
                                    english: "emax",
                                    arabic: "emax",
                                },

                                {
                                    english: "full metal",
                                    arabic: "full metal",
                                },

                            ],
                            perio: [{
                                english: "scaling",
                                arabic: "scaling",
                            }],
                            removable: [{
                                    english: "acrylic",
                                    arabic: "acrylic",
                                },

                                {
                                    english: "vitalium",
                                    arabic: "vitalium",
                                },

                                {
                                    english: "thermopress",
                                    arabic: "thermopress",
                                },

                            ],
                            implant: [{
                                    english: "MILD",
                                    arabic: "MILD",
                                },
                                {
                                    english: "MODERATE",
                                    arabic: "MODERATE",
                                },
                                {
                                    english: "SEVERE",
                                    arabic: "SEVERE",
                                },
                            ],
                            orthodontic: {
                                stable: [{
                                        english: "metal",
                                        arabic: "metal",
                                    },
                                    {
                                        english: "ceramic",
                                        arabic: "ceramic",
                                    },
                                    {
                                        english: "transparent",
                                        arabic: "transparent",
                                    },
                                    {
                                        english: "internal",
                                        arabic: "internal",
                                    },
                                ],
                                mobile: [{
                                        english: "wire",
                                        arabic: "wire",
                                    },
                                    {
                                        english: "transparent",
                                        arabic: "transparent",
                                    },
                                ],
                                type: [{
                                        english: "upper",
                                        arabic: "upper"
                                    },
                                    {
                                        english: "lower",
                                        arabic: "lower"
                                    },
                                    {
                                        english: "both",
                                        arabic: "both"
                                    },
                                ]
                            },

                        },
                        diagnosisAction: {
                            extraction: [{
                                    english: "history",
                                    arabic: "history"
                                },

                                {
                                    english: "crownState",
                                    arabic: "crownState"
                                },

                                {
                                    english: "root",
                                    arabic: "root"
                                },

                                {
                                    english: "periapical",
                                    arabic: "periapical"
                                },

                                {
                                    english: "mobility",
                                    arabic: "mobility"
                                },

                            ],
                            filling: [{
                                    english: "dentalHistory",
                                    arabic: "dentalHistory"
                                },

                                {
                                    english: "caries",
                                    arabic: "caries"
                                },

                                {
                                    english: "fracture",
                                    arabic: "fracture"
                                },

                                {
                                    english: "complaint",
                                    arabic: "complaint"
                                },

                                {
                                    english: "complications",
                                    arabic: "complications"
                                },



                            ],
                            endo: [{
                                    english: "history",
                                    arabic: "history"
                                },

                                {
                                    english: "caries",
                                    arabic: "caries"
                                },

                                {
                                    english: "pulp",
                                    arabic: "pulp"
                                },

                                {
                                    english: "complaint",
                                    arabic: "complaint"
                                },

                            ],
                        },
                    },
                    diagnosisSubAction: {
                        extraction: {
                            history: {
                                endodontTreatment: [{
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },

                                    {
                                        english: "missing canals",
                                        arabic: "missing canals"
                                    },
                                ],
                                crown: [{
                                        english: "open margin",
                                        arabic: "open margin"
                                    },

                                    {
                                        english: "perforation",
                                        arabic: "perforation"
                                    },

                                    {
                                        english: "no retention",
                                        arabic: "no retention"
                                    },

                                ],
                                filling: [{
                                        english: "amalgam",
                                        arabic: "amalgam"
                                    },

                                    {
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                ],
                            },
                            crownState: {
                                caries: [{
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "occlusal",
                                        arabic: "occlusal"
                                    },
                                ],
                                fracture: [{
                                        english: "I",
                                        arabic: "I"
                                    },

                                    {
                                        english: "II",
                                        arabic: "II"
                                    },

                                    {
                                        english: "III",
                                        arabic: "III"
                                    },
                                ],
                                trauma: [{
                                        english: "milde",
                                        arabic: "milde"
                                    },
                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },
                                ],
                            },
                            root: {
                                fracture: [{
                                        english: "horizontal",
                                        arabic: "horizontal"
                                    },

                                    {
                                        english: "vertical",
                                        arabic: "vertical"
                                    },
                                ],
                                resorption: [

                                    {
                                        english: "internal",
                                        arabic: "internal"
                                    },

                                    {
                                        english: "external",
                                        arabic: "external"
                                    },

                                ]
                            },
                            periapical: {
                                abscess: [{
                                        english: "acute",
                                        arabic: "acute"
                                    },

                                    {
                                        english: "chronic",
                                        arabic: "chronic"
                                    },

                                ],
                                cyst: [{
                                        english: "radicular",
                                        arabic: "radicular"
                                    },

                                    {
                                        english: "periodontal",
                                        arabic: "periodontal"
                                    },

                                ]
                            },
                            mobility: {
                                grade: [{
                                        english: "I",
                                        arabic: "I"
                                    },

                                    {
                                        english: "II",
                                        arabic: "II"
                                    },

                                    {
                                        english: "III",
                                        arabic: "III"
                                    },
                                ],
                                type: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                    {
                                        english: 4,
                                        arabic: 4
                                    },

                                    {
                                        english: 5,
                                        arabic: 5
                                    },

                                    {
                                        english: 6,
                                        arabic: 6
                                    },

                                ]
                            }
                        },
                        filling: {
                            dentalHistory: {
                                caries: [{
                                        english: "classi",
                                        arabic: "class i"
                                    },

                                    {
                                        english: "calss i",
                                        arabic: "calss i"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                                amalgamFilling: [{
                                        english: "classI",
                                        arabic: "classI"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },


                                ],
                                state: [{
                                        english: "started",
                                        arabic: "started"
                                    },

                                    {
                                        english: "completed",
                                        arabic: "completed"
                                    },

                                ],
                                compositFilling: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                                drawbacks: [{
                                        english: "recurrent caries",
                                        arabic: "recurrent caries"
                                    },

                                    {
                                        english: "fracture",
                                        arabic: "fracture"
                                    },

                                    {
                                        english: "proximal caries",
                                        arabic: "proximal caries"
                                    },


                                ],
                                glassIonomerFilling: [

                                    {
                                        english: "classI",
                                        arabic: "classI"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                            },
                            caries: {
                                type: [{
                                        english: "simple",
                                        arabic: "simple"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "shallow",
                                        arabic: "shallow"
                                    },
                                ],
                                class: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ]
                            },
                            fracture: {
                                etch: [{
                                        english: "tolal",
                                        arabic: "tolal"
                                    },

                                    {
                                        english: "selective",
                                        arabic: "selective"
                                    },
                                ],
                                bond: [{
                                        english: "selfe",
                                        arabic: "selfe"
                                    },

                                    {
                                        english: "etch",
                                        arabic: "etch"
                                    },


                                ],
                            },
                            complaint: {
                                pain: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "with sweet",
                                        arabic: "with sweet"
                                    },

                                    {
                                        english: "with cold",
                                        arabic: "with cold"
                                    },

                                    {
                                        english: "with percussion",
                                        arabic: "with percussion"
                                    },
                                ],
                                eshetics: [{
                                    english: "bad esthestics",
                                    arabic: "bad esthestics"
                                }, ],
                                social: [{
                                        english: "bad Oder",
                                        arabic: "bad Oder"
                                    },

                                    {
                                        english: "phonetcs",
                                        arabic: "phonetcs"
                                    },


                                ],
                            },
                            complications: {
                                colorChange: [{
                                        english: "minor",
                                        arabic: "minor"
                                    },

                                    {
                                        english: "major",
                                        arabic: "major"
                                    },

                                ],
                                leakage: [{
                                        english: "discoloration",
                                        arabic: "discoloration"
                                    },

                                    {
                                        english: "pulp necrosis",
                                        arabic: "pulp necrosis"
                                    },

                                ],
                                pulpExposure: [{
                                        english: "minute",
                                        arabic: "minute"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },


                                ],
                                fracture: [{
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },

                                    {
                                        english: "tooth",
                                        arabic: "tooth"
                                    },


                                ],
                            },

                        },
                        endo: {
                            history: {
                                endo: [{
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },
                                ],
                                caries: [{
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },
                                ],
                                filling: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                glassIonomer: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                composite: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                crown: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                                postAndCore: [

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },
                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                ],
                            },
                            caries: {
                                type: [{
                                        english: "simple",
                                        arabic: "simple"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "shallow",
                                        arabic: "shallow"
                                    },
                                ],
                                class: [{
                                        english: "class I",
                                        arabic: "class I"
                                    },

                                    {
                                        english: "calss II",
                                        arabic: "calss II"
                                    },

                                    {
                                        english: "class III",
                                        arabic: "class III"
                                    },

                                    {
                                        english: "class IV",
                                        arabic: "class IV"
                                    },

                                    {
                                        english: "class V",
                                        arabic: "class V"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ]
                            },
                            pulp: {
                                state: [{
                                        english: "hyperemia",
                                        arablic: "hyperemia"
                                    },

                                    {
                                        english: "pulpitis",
                                        arablic: "pulpitis"
                                    },

                                    {
                                        english: "necrosis",
                                        arablic: "necrosis"
                                    },

                                    {
                                        english: "abscess",
                                        arablic: "abscess"
                                    },

                                    {
                                        english: "internal resorption",
                                        arablic: "internal resorption"
                                    },

                                ],
                                periapical: [{
                                        english: "normal",
                                        arabic: "normal"
                                    },

                                    {
                                        english: "abscess",
                                        arabic: "abscess"
                                    },

                                    {
                                        english: "cyst",
                                        arabic: "cyst"
                                    },

                                    {
                                        english: "granuloma",
                                        arabic: "granuloma"
                                    },

                                ],
                            },
                            complaint: {
                                pain: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "on percussion",
                                        arabic: "on percussion"
                                    },
                                ],
                                mobility: [{
                                        english: "mild",
                                        arabic: "mild"
                                    },

                                    {
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                ],
                            },
                        },
                    },
                    proceduresAction: {
                        extraction: [{
                                english: "anesthesia",
                                arabic: "anesthesia"
                            },

                            {
                                english: "extraction",
                                arabic: "extraction"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },
                        ],
                        filling: [{
                                english: "cavityPreparation",
                                arabic: "cavityPreparation"
                            },

                            {
                                english: "base",
                                arabic: "base"
                            },

                            {
                                english: "etchAndBond",
                                arabic: "etchAndBond"
                            },

                            {
                                english: "shadeSelection",
                                arabic: "shadeSelection"
                            },

                            {
                                english: "finalFilling",
                                arabic: "finalFilling"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },

                        ],
                        endo: [{
                                english: "diagnosis",
                                arabic: "diagnosis"
                            },

                            {
                                english: "gainingAccess",
                                arabic: "gainingAccess"
                            },

                            {
                                english: "preparation",
                                arabic: "preparation"
                            },

                            {
                                english: "irrigation",
                                arabic: "irrigation"
                            },

                            {
                                english: "obturation",
                                arabic: "obturation"
                            },

                            {
                                english: "complications",
                                arabic: "complications"
                            },

                        ],
                        post: [

                            {
                                english: "canalPreparation",
                                arabic: "canalPreparation"
                            },
                            {
                                english: "cementation",
                                arabic: "cementation"
                            },
                            {
                                english: "coreBuildUp",
                                arabic: "coreBuildUp"
                            },
                        ],
                        crown: [{
                                english: "studyImpression",
                                arabic: "studyImpression"
                            },
                            {
                                english: "toothReduction",
                                arabic: "toothReduction"
                            },
                            {
                                english: "finalImpression",
                                arabic: "finalImpression"
                            },
                            {
                                english: "temporaryProtection",
                                arabic: "temporaryProtection"
                            },
                            {
                                english: "tryIn",
                                arabic: "tryIn"
                            },
                            {
                                english: "colorSelection",
                                arabic: "colorSelection"
                            },
                            {
                                english: "cementation",
                                arabic: "cementation"
                            },
                            {
                                english: "complications",
                                arabic: "complications"
                            },
                        ],
                        removable: [{
                                english: "primaryImpression",
                                arabic: "primaryImpression"
                            },

                            {
                                english: "finalImpression",
                                arabic: "finalImpression"
                            },

                            {
                                english: "tryIn",
                                arabic: "tryIn"
                            },

                            {
                                english: "delivery",
                                arabic: "delivery"
                            },

                        ],
                    },
                    proceduresSubAction: {
                        extraction: {
                            anesthesia: {
                                type: [{
                                        english: "egypt",
                                        arabic: "egypt"
                                    },

                                    {
                                        english: "spain",
                                        arabic: "spain"
                                    },

                                    {
                                        english: "france",
                                        arabic: "france"
                                    },

                                    {
                                        english: "with adrenalin",
                                        arabic: "with adrenalin"
                                    },

                                    {
                                        english: "without adrenalin",
                                        arabic: "without adrenalin"
                                    },
                                ],
                                ammount: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                ],
                            },
                            extraction: {
                                safe: [{
                                        english: "no problem",
                                        arabic: "no problem"
                                    },
                                    {
                                        english: "with complication",
                                        arabic: "with complication"
                                    },
                                ],
                            },
                            complications: {
                                rootFracture: [{
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "1pical third",
                                        arabic: "1pical third"
                                    },

                                    {
                                        english: "one half",
                                        arabic: "one half"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },


                                ],
                                bleeding: [{
                                        english: "severe",
                                        arabic: "severe"
                                    },

                                    {
                                        english: "mild",
                                        arabic: "mild"
                                    },
                                ],
                                tuberosityFracture: [{
                                        english: "small",
                                        arabic: "small"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },
                                ],
                                plateFracture: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                ],

                            },
                        },
                        filling: {
                            cavityPreparation: {
                                extension: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                    {
                                        english: "cusp",
                                        arabic: "cusp"
                                    },

                                    {
                                        english: "buccal pit",
                                        arabic: "buccal pit"
                                    },

                                    {
                                        english: "lingual pit",
                                        arabic: "lingual pit"
                                    },


                                ],
                                size: [{
                                        english: "wide",
                                        arabic: "wide"
                                    },

                                    {
                                        english: "very wide",
                                        arabic: "very wide"
                                    },

                                    {
                                        english: "deep",
                                        arabic: "deep"
                                    },

                                    {
                                        english: "very deep",
                                        arabic: "very deep"
                                    },
                                ],
                            },
                            base: {
                                material: [{
                                        english: "zinc phosphate",
                                        arabic: "zinc phosphate"
                                    },

                                    {
                                        english: "zinc poly carboxylate",
                                        arabic: "zinc poly carboxylate"
                                    },

                                    {
                                        english: "calcium hydroxide",
                                        arabic: "calcium hydroxide"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },
                                ],
                            },
                            etchAndBond: {
                                etch: [{
                                        english: "tolal",
                                        arabic: "tolal"
                                    },

                                    {
                                        english: "selective",
                                        arabic: "selective"
                                    },


                                ],
                                bond: [{
                                    english: "selfe etch",
                                    arabic: "selfe etch"
                                }],
                            },
                            shadeSelection: {
                                dentine: [{
                                        english: "a1",
                                        arabic: "a1"
                                    },

                                    {
                                        english: "a2",
                                        arabic: "a2"
                                    },

                                    {
                                        english: "a3",
                                        arabic: "a3"
                                    },

                                    {
                                        english: "a3.5",
                                        arabic: "a3.5"
                                    },

                                    {
                                        english: "b1",
                                        arabic: "b1"
                                    },

                                    {
                                        english: "b2",
                                        arabic: "b2"
                                    },

                                    {
                                        english: "b3",
                                        arabic: "b3"
                                    },

                                    {
                                        english: "c1",
                                        arabic: "c1"
                                    },

                                    {
                                        english: "c2",
                                        arabic: "c2"
                                    },

                                    {
                                        english: "c3",
                                        arabic: "c3"
                                    },

                                ],
                                enamel: [{
                                        english: "a1",
                                        arabic: "a1"
                                    },

                                    {
                                        english: "a2",
                                        arabic: "a2"
                                    },

                                    {
                                        english: "a3",
                                        arabic: "a3"
                                    },

                                    {
                                        english: "a3.5",
                                        arabic: "a3.5"
                                    },

                                    {
                                        english: "b1",
                                        arabic: "b1"
                                    },

                                    {
                                        english: "b2",
                                        arabic: "b2"
                                    },

                                    {
                                        english: "b3",
                                        arabic: "b3"
                                    },

                                    {
                                        english: "c1",
                                        arabic: "c1"
                                    },

                                    {
                                        english: "c2",
                                        arabic: "c2"
                                    },

                                    {
                                        english: "c3",
                                        arabic: "c3"
                                    },

                                ],
                            },
                            finalFilling: {
                                state: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "accepted",
                                        arabic: "accepted"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },
                                    {
                                        english: "excellent",
                                        arabic: "excellent"
                                    },
                                ],
                            },
                            complications: {
                                colorChange: [{
                                        english: "minor",
                                        arabic: "minor"
                                    },

                                    {
                                        english: "major",
                                        arabic: "major"
                                    },

                                ],
                                leakage: [{
                                        english: "discoloration",
                                        arabic: "discoloration"
                                    },

                                    {
                                        english: "pulp necrosis",
                                        arabic: "pulp necrosis"
                                    },

                                ],
                                pulpExposure: [{
                                        english: "minute",
                                        arabic: "minute"
                                    },

                                    {
                                        english: "large",
                                        arabic: "large"
                                    },

                                ],
                                fracture: [{
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                    {
                                        english: "all",
                                        arabic: "all"
                                    },

                                    {
                                        english: "tooth",
                                        arabic: "tooth"
                                    },

                                ],

                            },
                        },
                        endo: {
                            diagnosis: {
                                history: [{
                                        english: "no dental history",
                                        arabic: "no dental history"
                                    },

                                    {
                                        english: "trauma",
                                        arabic: "trauma"
                                    },

                                    {
                                        english: "bad periodontics treatment",
                                        arabic: "bad periodontics treatment"
                                    },


                                ],
                                pulp: [{
                                        english: "necrotic",
                                        arabic: "necrotic"
                                    },

                                    {
                                        english: "pulpits",
                                        arabic: "pulpits"
                                    },

                                    {
                                        english: "hypremia",
                                        arabic: "hypremia"
                                    },
                                ],
                            },
                            gainingAccess: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                            },
                            preparation: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                masterCone: [{
                                        english: "#20",
                                        arabic: "#20"
                                    },

                                    {
                                        english: "#25",
                                        arabic: "#25"
                                    },

                                    {
                                        english: "#30",
                                        arabic: "#30"
                                    },

                                    {
                                        english: "#35",
                                        arabic: "#35"
                                    },

                                    {
                                        english: "#40",
                                        arabic: "#40"
                                    },

                                    {
                                        english: "#45",
                                        arabic: "#45"
                                    },

                                    {
                                        english: "#50",
                                        arabic: "#50"
                                    },

                                    {
                                        english: "#55",
                                        arabic: "#55"
                                    },

                                    {
                                        english: "#60",
                                        arabic: "#60"
                                    },

                                    {
                                        english: "#65",
                                        arabic: "#65"
                                    },

                                    {
                                        english: "#70",
                                        arabic: "#70"
                                    },

                                    {
                                        english: "#75",
                                        arabic: "#75"
                                    },

                                    {
                                        english: "#80",
                                        arabic: "#80"
                                    },

                                    {
                                        english: "taper2",
                                        arabic: "taper2"
                                    },

                                    {
                                        english: "taper4",
                                        arabic: "taper4"
                                    },

                                    {
                                        english: "taper6",
                                        arabic: "taper6"
                                    },


                                ],
                                masterLength: [{
                                        english: "15mm",
                                        arabic: "15mm"
                                    },

                                    {
                                        english: "16mm",
                                        arabic: "16mm"
                                    },

                                    {
                                        english: "17mm",
                                        arabic: "17mm"
                                    },

                                    {
                                        english: "18mm",
                                        arabic: "18mm"
                                    },

                                    {
                                        english: "19mm",
                                        arabic: "19mm"
                                    },

                                    {
                                        english: "20mm",
                                        arabic: "20mm"
                                    },

                                    {
                                        english: "21mm",
                                        arabic: "21mm"
                                    },

                                    {
                                        english: "22mm",
                                        arabic: "22mm"
                                    },

                                    {
                                        english: "23mm",
                                        arabic: "23mm"
                                    },

                                    {
                                        english: "24mm",
                                        arabic: "24mm"
                                    },

                                    {
                                        english: "25mm",
                                        arabic: "25mm"
                                    },

                                    {
                                        english: "26mm",
                                        arabic: "26mm"
                                    },

                                    {
                                        english: "27mm",
                                        arabic: "27mm"
                                    },

                                    {
                                        english: "28mm",
                                        arabic: "28mm"
                                    },

                                    {
                                        english: "+0.5mm",
                                        arabic: "+0.5mm"
                                    },

                                    {
                                        english: "-0.5mm",
                                        arabic: "-0.5mm"
                                    },


                                ],
                            },
                            irrigation: {
                                solutions: [{
                                        english: "sodium hypochlorite",
                                        arabic: "sodium hypochlorite"
                                    },

                                    {
                                        english: "normal saline",
                                        arabic: "normal saline"
                                    },

                                    {
                                        english: "chlorhexidine",
                                        arabic: "chlorhexidine"
                                    },
                                ],
                                sodiumHypochlorite: [{
                                        english: "normal saline",
                                        arabic: "normal saline"

                                    },
                                    {
                                        english: "chlorhexidine",
                                        arabic: "chlorhexidine"

                                    },

                                ],
                            },
                            obturation: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                material: [{
                                        english: "gutta percha",
                                        arabic: "gutta percha"
                                    },

                                    {
                                        english: "biodentine",
                                        arabic: "biodentine"
                                    },

                                    {
                                        english: "zinc oxide eugenole",
                                        arabic: "zinc oxide eugenole"
                                    },

                                    {
                                        english: "MTA",
                                        arabic: "MTA"
                                    },
                                ],
                                sealer: [{
                                        english: "zinc oxide eugenole",
                                        arabic: "zinc oxide eugenole"
                                    },

                                    {
                                        english: "resin base sealer",
                                        arabic: "resin base sealer"
                                    },

                                    {
                                        english: "addseal",
                                        arabic: "addseal"
                                    },
                                ],
                            },
                            complications: {
                                canals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },


                                ],
                                fileFracture: [{
                                        english: "apical",
                                        arabic: "apical"
                                    },

                                    {
                                        english: "middle",
                                        arabic: "middle"
                                    },

                                    {
                                        english: "coronal",
                                        arabic: "coronal"
                                    },
                                ],
                                perforation: [{
                                        english: "apical",
                                        arabic: "apical"
                                    },

                                    {
                                        english: "meddle",
                                        arabic: "meddle"
                                    },

                                    {
                                        english: "coronal",
                                        arabic: "coronal"
                                    },

                                    {
                                        english: "isthmus",
                                        arabic: "isthmus"
                                    },

                                ],
                                overFilling: [{
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },

                                    {
                                        english: "2mm",
                                        arabic: "2mm"
                                    },

                                    {
                                        english: "2.5mm",
                                        arabic: "2.5mm"
                                    },

                                    {
                                        english: "3mm",
                                        arabic: "3mm"
                                    },

                                ],
                                shortFilling: [{
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },

                                    {
                                        english: "2mm",
                                        arabic: "2mm"
                                    },

                                    {
                                        english: "2.5mm",
                                        arabic: "2.5mm"
                                    },

                                    {
                                        english: "3mm",
                                        arabic: "3mm"
                                    },
                                ],
                                missingCanals: [{
                                        english: "single",
                                        arabic: "single"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "palatal",
                                        arabic: "palatal"
                                    },

                                    {
                                        english: "mesio-buccal",
                                        arabic: "mesio-buccal"
                                    },

                                    {
                                        english: "mesio-lingual",
                                        arabic: "mesio-lingual"
                                    },

                                    {
                                        english: "disto-buccal",
                                        arabic: "disto-buccal"
                                    },

                                    {
                                        english: "disto-lingual",
                                        arabic: "disto-lingual"
                                    },

                                    {
                                        english: "MB2",
                                        arabic: "MB2"
                                    },

                                    {
                                        english: "other",
                                        arabic: "other"
                                    },
                                ],
                            },
                        },
                        post: {
                            canalPreparation: {
                                history: [{
                                        english: "no dental history",
                                        arabic: "no dental history"
                                    },

                                    {
                                        english: "trauma",
                                        arabic: "trauma"
                                    },

                                    {
                                        english: "bad periodontics treatment",
                                        arabic: "bad periodontics treatment"
                                    },
                                ],
                                pulp: [{
                                        english: "necrotic",
                                        arabic: "necrotic"
                                    },

                                    {
                                        english: "pulpits",
                                        arabic: "pulpits"
                                    },

                                    {
                                        english: "hypremia",
                                        arabic: "hypremia"
                                    },
                                ],
                            },
                            cementation: {
                                material: [{
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                    {
                                        english: "resin cement",
                                        arabic: "resin cement"
                                    },

                                    {
                                        english: "zinc phosphate cement",
                                        arabic: "zinc phosphate cement"
                                    },

                                    {
                                        english: "zinc poly carboxylate cement",
                                        arabic: "zinc poly carboxylate cement"
                                    },


                                ],
                            },
                            coreBuildUp: {
                                material: [{
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "amalgam",
                                        arabic: "amalgam"
                                    },

                                    {
                                        english: "base metal",
                                        arabic: "base metal"
                                    },
                                ],

                            },
                        },
                        crown: {
                            studyImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },
                                ],
                            },
                            toothReduction: {
                                finishLine: [{
                                        english: "chamfer",
                                        arabic: "chamfer"
                                    },

                                    {
                                        english: "shoulder",
                                        arabic: "shoulder"
                                    },

                                    {
                                        english: "indefinite",
                                        arabic: "indefinite"
                                    },


                                ],
                                ammount: [{
                                        english: "0.3mm",
                                        arabic: "0.3mm"
                                    },

                                    {
                                        english: "0.5mm",
                                        arabic: "0.5mm"
                                    },

                                    {
                                        english: "0.8mm",
                                        arabic: "0.8mm"
                                    },

                                    {
                                        english: "1mm",
                                        arabic: "1mm"
                                    },

                                    {
                                        english: "1.2mm",
                                        arabic: "1.2mm"
                                    },

                                    {
                                        english: "1.5mm",
                                        arabic: "1.5mm"
                                    },


                                ],
                            },
                            finalImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "addition silicon",
                                        arabic: "addition silicon"
                                    },

                                    {
                                        english: "condinsation silicon",
                                        arabic: "condinsation silicon"
                                    },

                                ],
                                technique: [{
                                        english: "4 hand",
                                        arabic: "4 hand"
                                    },

                                    {
                                        english: "two step",
                                        arabic: "two step"
                                    },
                                ],
                            },
                            temporaryProtection: {
                                material: [{
                                        english: "acrylic",
                                        arabic: "acrylic"
                                    },

                                    {
                                        english: "composite",
                                        arabic: "composite"
                                    },

                                    {
                                        english: "ready made",
                                        arabic: "ready made"
                                    },

                                    {
                                        english: "custome made",
                                        arabic: "custome made"
                                    },
                                ],
                            },
                            tryIn: {
                                marginalFit: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "opened",
                                        arabic: "opened"
                                    },

                                    {
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },


                                ],
                                occlusion: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "under",
                                        arabic: "under"
                                    },

                                    {
                                        english: "over",
                                        arabic: "over"
                                    },
                                ],
                                retention: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },

                                ],
                            },
                            colorSelection: {
                                classic: [{
                                        english: "A",
                                        arabic: "A"
                                    },
                                    {
                                        english: "B",
                                        arabic: "B"
                                    },
                                    {
                                        english: "C",
                                        arabic: "C"
                                    },
                                    {
                                        english: "D",
                                        arabic: "D"
                                    },
                                    {
                                        english: 1,
                                        arabic: 1
                                    },
                                    {
                                        english: 2,
                                        arabic: 2
                                    },
                                    {
                                        english: 3,
                                        arabic: 3
                                    },
                                    {
                                        english: .5,
                                        arabic: .5
                                    },
                                ],
                                vita3dMaster: [{
                                        english: 1,
                                        arabic: 1
                                    },

                                    {
                                        english: 2,
                                        arabic: 2
                                    },

                                    {
                                        english: 2.5,
                                        arabic: 2.5
                                    },

                                    {
                                        english: 3,
                                        arabic: 3
                                    },

                                    {
                                        english: 3.5,
                                        arabic: 3.5
                                    },

                                    {
                                        english: "L",
                                        arabic: "L"
                                    },

                                    {
                                        english: "M",
                                        arabic: "M"
                                    },

                                    {
                                        english: "R",
                                        arabic: "R"
                                    },

                                    {
                                        english: "/1",
                                        arabic: "/1"
                                    },

                                    {
                                        english: "/2",
                                        arabic: "/2"
                                    },

                                    {
                                        english: "/2.5",
                                        arabic: "/2.5"
                                    },

                                    {
                                        english: "/3",
                                        arabic: "/3"
                                    },

                                    {
                                        english: 3.5,
                                        arabic: 3.5
                                    },


                                ],
                            },
                            cementation: {
                                material: [{
                                        english: "zinc phosphate",
                                        arabic: "zinc phosphate"
                                    },

                                    {
                                        english: "glass ionomer",
                                        arabic: "glass ionomer"
                                    },

                                    {
                                        english: "resin cement",
                                        arabic: "resin cement"
                                    },
                                ],
                            },
                            complications: {
                                reduction: [{
                                        english: "over reduction",
                                        arabic: "over reduction"
                                    },

                                    {
                                        english: "over taper",
                                        arabic: "over taper"
                                    },

                                    {
                                        english: "pulp exposure",
                                        arabic: "pulp exposure"
                                    },

                                ],
                                shortMargine: [{
                                        english: "buccal",
                                        arabic: "buccal"
                                    },

                                    {
                                        english: "lingual",
                                        arabic: "lingual"
                                    },

                                    {
                                        english: "mesial",
                                        arabic: "mesial"
                                    },

                                    {
                                        english: "distal",
                                        arabic: "distal"
                                    },

                                ],
                            },
                        },
                        removable: {
                            primaryImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "impression compound",
                                        arabic: "impression compound"
                                    },
                                ],
                            },
                            finalImpression: {
                                material: [{
                                        english: "alginate",
                                        arabic: "alginate"
                                    },

                                    {
                                        english: "rubber base",
                                        arabic: "rubber base"
                                    },

                                    {
                                        english: "addition silicon",
                                        arabic: "addition silicon"
                                    },

                                    {
                                        english: "condinsation silicon",
                                        arabic: "condinsation silicon"
                                    },
                                ],
                                technique: [{
                                        english: "4 hand",
                                        arabic: "4 hand"
                                    },

                                    {
                                        english: "two step",
                                        arabic: "two step"
                                    },
                                ],
                            },
                            tryIn: {
                                marginalFit: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "opened",
                                        arabic: "opened"
                                    },

                                    {
                                        english: "short",
                                        arabic: "short"
                                    },

                                    {
                                        english: "long",
                                        arabic: "long"
                                    },


                                ],
                                occlusion: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "under",
                                        arabic: "under"
                                    },

                                    {
                                        english: "over",
                                        arabic: "over"
                                    },
                                ],
                                retention: [{
                                        english: "bad",
                                        arabic: "bad"
                                    },

                                    {
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "vgood",
                                        arabic: "vgood"
                                    },

                                ],
                            },
                            delivery: {
                                state: [{
                                        english: "good",
                                        arabic: "good"
                                    },

                                    {
                                        english: "bad",
                                        arabic: "bad"
                                    },


                                ],


                            },
                        },
                    },

                },

            }
        }
    }
}