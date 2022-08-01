import {
    singleAdultTooth
} from "../../../components/helpers/toothObject";
export default {

    props: ["toothNumbers", "gallarAndXray", "selectedType"],
    data() {
        return {

            basic: false,
            implant: false,
            toothNumber: 0,
            toggleGinfivitis: false,
            toggleCariesFilling: false,
            toggleAlignement: false,
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            toothElement: null,
            lang:{
                en:{
                    activatedTooth:"Activated Tooth : ",
                    one:1,
                    two:2,
                    three:3,
                    four:4,
                    five:5,
                    six:6,
                    seven:7,
                    eight:8,
                    nine:9,
                    ten:10,
                    eleven:11,
                    twelve:12,
                    thirteen:13,
                    fourteen:14,
                    fifteen:15,
                    sixteen:16,
                    seventeen:17,
                    eighteen:18,
                    nineteen:19,
                    twenty:20,
                    twentyOne:21,
                    twentyTwo:22,
                    twentyThree:23,
                    twentyFour:24,
                    twentyFive:25,
                    twentySix:26,
                    twentySeven:27,
                    twentyEight:28,
                    twentyNine:29,
                    thirty:30,
                    thirtyOne:31,
                    thirtyTwo:32,
                },
                ar:{
                    activatedTooth:"Activated Tooth : ",
                    one:1,
                    two:2,
                    three:3,
                    four:4,
                    five:5,
                    six:6,
                    seven:7,
                    eight:8,
                    nine:9,
                    ten:10,
                    eleven:11,
                    twelve:12,
                    thirteen:13,
                    fourteen:14,
                    fifteen:15,
                    sixteen:16,
                    seventeen:17,
                    eighteen:18,
                    nineteen:19,
                    twenty:20,
                    twentyOne:21,
                    twentyTwo:22,
                    twentyThree:23,
                    twentyFour:24,
                    twentyFive:25,
                    twentySix:26,
                    twentySeven:27,
                    twentyEight:28,
                    twentyNine:29,
                    thirty:30,
                    thirtyOne:31,
                    thirtyTwo:32,
                }
            },

        };
    },

    watch: {
        "selectedType": {
            handler() {
                this.toothNumber = 0
            },
            deep: true
        },
        "action.category": {
            handler() {
                // if(this.toothNumber){
                //   if(!this.gallarAndXray){
                //     this.toothNumbers[this.toothNumber] = singleAdultTooth()
                //     this.whatchingActions();
                //   }
                // }
                this.toothNumber = 0
            },
            deep: true
        },
        "action.categoryType": {
            handler() {
                if (this.action.categoryType.caries)
                    if (this.toothNumber && !this.gallarAndXray && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                        this.restFillingAndCaries("caries");
                        // this.whatchingActions();
                        switch (this.action.category.english) {
                            case "caries":
                                switch (this.action.categoryType[this.action.category.english].english) {
                                    case "class I":
                                        this.toothCariesFillingClassI();
                                        if (!this.action.selectedTooths.caries.class_I.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_I.push(this.toothNumber)
                                        break
                                    case "class IV mesial":
                                        if (!this.action.selectedTooths.caries.class_IV_mesial.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_IV_mesial.push(this.toothNumber)
                                        this.toothCariesFillingClassIvMesial();
                                        break;
                                    case "class IV distal":
                                        if (!this.action.selectedTooths.caries.class_IV_distal.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_IV_distal.push(this.toothNumber)
                                        this.toothCariesFillingClassIvDistal();
                                        break;
                                    case "class III distal":
                                        if (!this.action.selectedTooths.caries.class_III_distal.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_III_distal.push(this.toothNumber)
                                        this.toothCariesFillingClassIiiDistal();
                                        break;
                                    case "class II distal":
                                        if (!this.action.selectedTooths.caries.class_II_distal.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_II_distal.push(this.toothNumber)
                                        this.toothCariesFillingClassIiDistal();
                                        break;
                                    case "class III mesial":
                                        if (!this.action.selectedTooths.caries.class_III_mesial.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_III_mesial.push(this.toothNumber)
                                        this.toothCariesFillingClassIiiMesial();
                                        break;
                                    case "class II mesial":
                                        if (!this.action.selectedTooths.caries.class_II_mesial.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_II_mesial.push(this.toothNumber)
                                        this.toothCariesFillingClassIvMesial();
                                        break;
                                    case "class II MOD":
                                        if (!this.action.selectedTooths.caries.class_II_MOD.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_II_MOD.push(this.toothNumber)
                                        this.toothCariesFillingClassIiMod();

                                        break;
                                    case "class III MOD":
                                        if (!this.action.selectedTooths.caries.class_III_MOD.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_III_MOD.push(this.toothNumber)
                                        this.toothCariesFillingClassIiiMod();
                                        break;
                                    case "class IV MOD":
                                        if (!this.action.selectedTooths.caries.class_IV_MOD.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_IV_MOD.push(this.toothNumber)
                                        this.toothCariesFillingClassIvMod();
                                        break;
                                    case "class V":
                                        if (!this.action.selectedTooths.caries.class_V.includes(this.toothNumber))
                                            this.action.selectedTooths.caries.class_V.push(this.toothNumber)
                                        this.toothCariesFillingClassV();
                                        break;
                                }
                                break;
                        }
                    }
            },
            deep: true
        },
        "action.categoryType.filling": {
            handler() {
                if (this.toothNumber && !this.gallarAndXray && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                    this.restFillingAndCaries("filling");
                    // this.whatchingActions();
                    switch (this.action.category.english) {
                        case "filling":
                            switch (this.action.categoryType[this.action.category.english].english) {
                                case "class I":
                                    this.toothCariesFillingClassI();
                                    if (!this.action.selectedTooths.filling.class_I.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_I.push(this.toothNumber)
                                    break
                                case "class IV mesial":
                                    if (!this.action.selectedTooths.filling.class_IV_mesial.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_IV_mesial.push(this.toothNumber)
                                    this.toothCariesFillingClassIvMesial();
                                    break;
                                case "class IV distal":
                                    if (!this.action.selectedTooths.filling.class_IV_distal.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_IV_distal.push(this.toothNumber)
                                    this.toothCariesFillingClassIvDistal();
                                    break;
                                case "class III distal":
                                    if (!this.action.selectedTooths.filling.class_III_distal.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_III_distal.push(this.toothNumber)
                                    this.toothCariesFillingClassIiiDistal();
                                    break;
                                case "class II distal":
                                    if (!this.action.selectedTooths.filling.class_II_distal.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_II_distal.push(this.toothNumber)
                                    this.toothCariesFillingClassIiDistal();
                                    break;
                                case "class III mesial":
                                    if (!this.action.selectedTooths.filling.class_III_mesial.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_III_mesial.push(this.toothNumber)
                                    this.toothCariesFillingClassIiiMesial();
                                    break;
                                case "class II mesial":
                                    if (!this.action.selectedTooths.filling.class_II_mesial.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_II_mesial.push(this.toothNumber)
                                    this.toothCariesFillingClassIvMesial();
                                    break;
                                case "class II MOD":
                                    if (!this.action.selectedTooths.filling.class_II_MOD.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_II_MOD.push(this.toothNumber)
                                    this.toothCariesFillingClassIiMod();

                                    break;
                                case "class III MOD":
                                    if (!this.action.selectedTooths.filling.class_III_MOD.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_III_MOD.push(this.toothNumber)
                                    this.toothCariesFillingClassIiiMod();
                                    break;
                                case "class IV MOD":
                                    if (!this.action.selectedTooths.filling.class_IV_MOD.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_IV_MOD.push(this.toothNumber)
                                    this.toothCariesFillingClassIvMod();
                                    break;
                                case "class V":
                                    if (!this.action.selectedTooths.filling.class_V.includes(this.toothNumber))
                                        this.action.selectedTooths.filling.class_V.push(this.toothNumber)
                                    this.toothCariesFillingClassV();
                                    break;
                            }
                            break;
                    }
                }
            },
            deep: true
        },
        "action.categoryType.crown": {
            handler() {
                if (this.toothNumber && !this.gallarAndXray && !this.toothNumbers[this.toothNumber].extraction) {
                    this.restCrown();
                    switch (this.action.category.english) {
                        case "crown":
                            switch (this.action.categoryType[this.action.category.english].english) {
                                case "full veneer":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {

                                        if (!this.action.selectedTooths.crown.fullVeneer.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.fullVeneer.push(this.toothNumber)
                                        this.toothNumbers[this.toothNumber].crown.fullVeneer = true;
                                    }
                                    break;
                                case "laminate veneer":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {

                                        if (!this.action.selectedTooths.crown.laminateVeneer.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.laminateVeneer.push(this.toothNumber)
                                        this.toothNumbers[this.toothNumber].crown.laminateVeneer = true;
                                    }

                                    break;
                                case "occlusal veneer":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {

                                        if (!this.action.selectedTooths.crown.occlusalVeneer.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.occlusalVeneer.push(this.toothNumber)
                                        this.toothNumbers[this.toothNumber].crown.occlusalVeneer = true;
                                    }

                                    break;
                                case "post crown":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {

                                        if (!this.action.selectedTooths.crown.postCrown.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.postCrown.push(this.toothNumber)
                                        this.toothNumbers[this.toothNumber].crown.postCrown = true;
                                        this.toothPost()
                                    }
                                    break;
                                case "endo crown":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {

                                        if (!this.action.selectedTooths.crown.endoCrown.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.endoCrown.push(this.toothNumber);
                                        this.toothEndoCrown()
                                    }
                                    break;
                                case "bridge":
                                    if (this.action.selectedTooths.crown.bridge.includes(this.toothNumber))
                                        this.action.selectedTooths.crown.bridge.push(this.toothNumber)
                                    this.toothNumbers[this.toothNumber].crown.bridge = true;
                                    break;
                                case "Denture":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {

                                        if (this.action.selectedTooths.crown.denture.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.denture.push(this.toothNumber)
                                        this.toothNumbers[this.toothNumber].crown.denture = true;
                                    }
                                    break;
                                case "onlay":
                                    if (!this.toothNumbers[this.toothNumber].removeImplant) {
                                        if (this.action.selectedTooths.crown.onlay.includes(this.toothNumber))
                                            this.action.selectedTooths.crown.onlay.push(this.toothNumber)
                                        this.toothNumbers[this.toothNumber].crown.onlay = true;
                                    }
                                    break;

                            }
                            break;

                    }
                }
            },
            deep: true
        },
        "action.style.alignment": {
            handler(val) {
                if (val && this.toothNumber && !this.gallarAndXray && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                    if (this.toothNumber && val.english) {
                        switch (this.action.categoryType[this.action.category.english].english) {
                            case "mesial shift":
                                this.toothAlignment("mesialShift", val.english)
                                break;
                            case "distal shift":
                                this.toothAlignment("mesialShift", -1 * val.english)
                                break;
                            case "intrusion":
                                this.toothAlignment("intrusion", val.english)
                                break;
                            case "extrusion":
                                this.toothAlignment("extrusion", -1 * val.english)
                                break;
                            case "distal tilting":
                                this.toothAlignment("distalTilting", val.english)
                                break;
                            case "mesial tilting":
                                this.toothAlignment("mesialTilting", -1 * val.english)
                                break;
                        }
                    }
                }
            },
            deep: true
        },
        "action.categoryType.alignment": {
            handler(val) {
                if (val && this.toothNumber && !this.gallarAndXray && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                    if (this.toothNumber && val.english && this.action.style[this.action.category.english].english) {
                        switch (this.action.categoryType[this.action.category.english].english) {
                            case "mesial shift":
                                this.toothAlignment("mesialShift", this.action.style[this.action.category.english].english)
                                break;
                            case "distal shift":
                                this.toothAlignment("mesialShift", -1 * this.action.style[this.action.category.english].english)
                                break;
                            case "intrusion":
                                this.toothAlignment("intrusion", this.action.style[this.action.category.english].english)
                                break;
                            case "extrusion":
                                this.toothAlignment("extrusion", -1 * this.action.style[this.action.category.english].english)
                                break;
                            case "distal tilting":
                                this.toothAlignment("distalTilting", this.action.style[this.action.category.english].english)
                                break;
                            case "mesial tilting":
                                this.toothAlignment("mesialTilting", -1 * this.action.style[this.action.category.english].english)
                                break;

                        }
                    }
                }
            },
            deep: true
        },
        "action.categoryType.orthodontic": {
            handler() {
                if (!this.gallarAndXray)
                    this.handOrthodontic();
            },
            deep: true
        },
        "action.categoryType.implant": {
            handler() {
                if (this.toothNumber) {
                    if (this.action.categoryType[this.action.category.english].english != "Remove Implant") {
                        if (!this.action.selectedTooths.implant.includes(this.toothNumber))
                            this.action.selectedTooths.implant.push(this.toothNumber)
                        this.toothImplant();
                        this.toothNumbers[this.toothNumber].removeImplant = false;
                    } else {
                        if (!this.action.selectedTooths.removeImplant.includes(this.toothNumber))
                            this.action.selectedTooths.removeImplant.push(this.toothNumber)
                        if (this.action.selectedTooths.implant.includes(this.toothNumber)) {
                            this.action.selectedTooths.implant.splice(this.action.selectedTooths.implant.indexOf(this.toothNumber), 1)
                            this.discardToothImplant();
                        }
                        this.toothNumbers[this.toothNumber].removeImplant = true;


                    }
                }

            },
            deep: true
        },
        "action.style.orthodontic": {
            handler() {
                if (!this.gallarAndXray)
                    this.handOrthodontic();
            },
            deep: true
        },
    },

    methods: {
        selectedTooth(toothNum) {
            this.toothNumber = toothNum;
            this.$emit("selectedTooth", this.toothNumber)
            if (!this.gallarAndXray) {
                this.handToothActins();
            }
            // if (this.action.selectedTooths.includes(this.toothNumber)) {


        },
        handToothActins() {
            switch (this.action.category.english) {
                case "extraction":
                    if (this.action.selectedTooths.extraction.includes(this.toothNumber)) {
                        this.discardToothExtraction();
                        this.action.selectedTooths.extraction.splice(this.action.selectedTooths.extraction.indexOf(this.toothNumber), 1)
                    } else {
                        this.action.selectedTooths.extraction.push(this.toothNumber)
                        this.toothExtraction()

                    }
                    break;
                case "caries":
                    if (this.action.categoryType[this.action.category.english]) {
                        this.handCariesAndFilling("caries");
                    }
                    break;
                case "filling":
                    if (this.action.categoryType[this.action.category.english]) {
                        this.handCariesAndFilling("filling");
                    }
                    break;
                case "pulp":
                    if (this.action.selectedTooths.pulp.includes(this.toothNumber)) {
                        this.dsicardPulp();
                        this.action.selectedTooths.pulp.splice(this.action.selectedTooths.pulp.indexOf(this.toothNumber), 1)
                    } else {
                        this.action.selectedTooths.pulp.push(this.toothNumber)
                        this.toothPulp()
                        if (this.action.selectedTooths.endo.includes(this.toothNumber))
                            this.action.selectedTooths.endo.splice(this.action.selectedTooths.endo.indexOf(this.toothNumber), 1)
                    }
                    break;
                case "endo":
                    if (this.action.selectedTooths.endo.includes(this.toothNumber)) {
                        this.action.selectedTooths.endo.splice(this.action.selectedTooths.endo.indexOf(this.toothNumber), 1)
                        this.discardEndo();
                    } else {
                        this.action.selectedTooths.endo.push(this.toothNumber)
                        this.toothEndo()
                        if (this.action.selectedTooths.pulp.includes(this.toothNumber))
                            this.action.selectedTooths.pulp.splice(this.action.selectedTooths.pulp.indexOf(this.toothNumber), 1)
                    }
                    break;
                case "periapical":
                    if (this.action.selectedTooths.periapical.includes(this.toothNumber)) {
                        this.action.selectedTooths.periapical.splice(this.action.selectedTooths.periapical.indexOf(this.toothNumber), 1)
                        this.discardToothPeriapical();
                    } else {
                        this.action.selectedTooths.periapical.push(this.toothNumber)
                        this.toothPeriapical();
                    }
                    break;
                case "post":
                    if (this.action.selectedTooths.post.includes(this.toothNumber)) {
                        this.action.selectedTooths.post.splice(this.action.selectedTooths.post.indexOf(this.toothNumber), 1)
                        this.discardToothPost();
                    } else {
                        this.action.selectedTooths.post.push(this.toothNumber)
                        this.toothPost();
                    }
                    break;
                case "crown":
                    this.handCrown()
                    break;
                case "removable":
                    if (this.action.selectedTooths.removable.includes(this.toothNumber)) {
                        this.action.selectedTooths.removable.splice(this.action.selectedTooths.removable.indexOf(this.toothNumber), 1)
                        this.discardRemovable();
                    } else {
                        this.action.selectedTooths.removable.push(this.toothNumber)
                        this.toothRemovable();
                    }
                    break;
                case "implant":
                    if (this.action.categoryType[this.action.category.english].english != "Remove Implant") {
                        if (this.action.selectedTooths.implant.includes(this.toothNumber)) {
                            this.action.selectedTooths.implant.splice(this.action.selectedTooths.implant.indexOf(this.toothNumber), 1)
                            this.discardToothImplant();
                        } else {
                            this.action.selectedTooths.implant.push(this.toothNumber)
                            this.toothImplant();
                        }
                    } else {
                        if (this.toothNumbers[this.toothNumber].implant || this.toothNumbers[this.toothNumber].removeImplant) {
                            if (this.action.selectedTooths.removeImplant.includes(this.toothNumber)) {
                                this.action.selectedTooths.removeImplant.splice(this.action.selectedTooths.removeImplant.indexOf(this.toothNumber), 1)
                                if (!this.action.selectedTooths.implant.includes(this.toothNumber))
                                    this.action.selectedTooths.implant.push(this.toothNumber)
                                this.toothImplant();

                                this.toothNumbers[this.toothNumber].removeImplant = false;
                            } else {
                                if (this.action.selectedTooths.implant.includes(this.toothNumber))
                                    this.action.selectedTooths.implant.splice(this.action.selectedTooths.implant.indexOf(this.toothNumber), 1)
                                this.discardToothImplant();
                                this.action.selectedTooths.removeImplant.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].removeImplant = true;
                            }
                        }
                    }
                    break;
                case "Restorative color":
                    if (this.action.selectedTooths.restorativeColor.includes(this.toothNumber))
                        this.action.selectedTooths.restorativeColor.splice(this.action.selectedTooths.restorativeColor.indexOf(this.toothNumber), 1)
                    else
                        this.action.selectedTooths.restorativeColor.push(this.toothNumber)
                    break;
                case "Prevention Hygiene":
                    if (this.action.selectedTooths.preventionHygiene.includes(this.toothNumber))
                        this.action.selectedTooths.preventionHygiene.splice(this.action.selectedTooths.preventionHygiene.indexOf(this.toothNumber), 1)
                    else
                        this.action.selectedTooths.preventionHygiene.push(this.toothNumber)
                    break;
                case "Other Surgery":
                    if (this.action.selectedTooths.otherSurgery.includes(this.toothNumber))
                        this.action.selectedTooths.otherSurgery.splice(this.action.selectedTooths.otherSurgery.indexOf(this.toothNumber), 1)
                    else
                        this.action.selectedTooths.otherSurgery.push(this.toothNumber)
                    break;
                case "Bone Regeneration":
                    if (this.action.selectedTooths.bone.includes(this.toothNumber)) {
                        this.action.selectedTooths.bone.splice(this.action.selectedTooths.bone.indexOf(this.toothNumber), 1)
                        this.discardToothBone();
                    } else {
                        this.action.selectedTooths.bone.push(this.toothNumber)
                        this.thoothBone();
                    }
                    break;
                case "ginfivitis":
                    // if (this.action.categoryType[this.action.category.english]) {
                    this.handGinfivitisAndPeriodontal("ginfivitis");
                    // }
                    break;
                case "periodontal":
                    // if (this.action.categoryType[this.action.category.english]) {
                    this.handGinfivitisAndPeriodontal("periodontal");
                    // }
                    break;
                case "perio":
                    // if (this.action.categoryType[this.action.category.english]) {
                    this.handGinfivitisAndPeriodontal("perio");
                    // }
                    break;
                case "alignment":
                    this.handAlignment();
                    break;
                case "Fraction / Damaged":
                    this.handFaction()
                    break;
                case "fractures":
                    this.handFractures();
                    break;


            }
        },
        // whatchingActions(){
        // switch (this.action.category.english) {
        //   case "extraction":
        //     if(!this.action.selectedTooths.extraction.includes(this.toothNumber))
        //         this.action.selectedTooths.extraction.push(this.toothNumber)

        //       this.toothExtraction()
        //     break;
        //   case "caries":
        //     switch (this.action.categoryType[this.action.category.english].english) {
        //       case "class I":
        //         this.toothCariesFillingClassI();
        //         if(!this.action.selectedTooths.caries.class_I.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_I.push(this.toothNumber)
        //         break
        //       case "class IV mesial":
        //         if(!this.action.selectedTooths.caries.class_IV_mesial.includes(this.toothNumber))
        //           this.action.selectedTooths.caries.class_IV_mesial.push(this.toothNumber)
        //           this.toothCariesFillingClassIvMesial();
        //           break;
        //       case "class IV distal":
        //         if(!this.action.selectedTooths.caries.class_IV_distal.includes(this.toothNumber))
        //           this.action.selectedTooths.caries.class_IV_distal.push(this.toothNumber)
        //           this.toothCariesFillingClassIvDistal();
        //           break;
        //       case "class III distal":
        //         if(!this.action.selectedTooths.caries.class_III_distal.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_III_distal.push(this.toothNumber)
        //           this.toothCariesFillingClassIiiDistal();
        //           break;
        //       case "class II distal":
        //         if(!this.action.selectedTooths.caries.class_II_distal.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_II_distal.push(this.toothNumber)
        //           this.toothCariesFillingClassIiDistal();
        //         break;
        //       case "class III mesial":
        //         if(!this.action.selectedTooths.caries.class_III_mesial.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_III_mesial.push(this.toothNumber)
        //           this.toothCariesFillingClassIiiMesial();
        //           break ;
        //       case "class II mesial":
        //         if(!this.action.selectedTooths.caries.class_II_mesial.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_II_mesial.push(this.toothNumber)
        //           this.toothCariesFillingClassIvMesial();
        //           break;
        //       case "class II MOD":
        //         if(!this.action.selectedTooths.caries.class_II_MOD.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_II_MOD.push(this.toothNumber)
        //           this.toothCariesFillingClassIiMod();

        //           break;
        //       case "class III MOD":
        //         if(!this.action.selectedTooths.caries.class_III_MOD.includes(this.toothNumber))
        //         this.action.selectedTooths.caries.class_III_MOD.push(this.toothNumber)
        //           this.toothCariesFillingClassIiiMod();
        //           break;
        //       case "class IV MOD":
        //         if(!this.action.selectedTooths.caries.class_IV_MOD.includes(this.toothNumber))
        //           this.action.selectedTooths.caries.class_IV_MOD.push(this.toothNumber)
        //           this.toothCariesFillingClassIvMod();
        //           break;
        //       case "class V":
        //         if(!this.action.selectedTooths.caries.class_V.includes(this.toothNumber))
        //           this.action.selectedTooths.caries.class_V.push(this.toothNumber)
        //           this.toothCariesFillingClassV();
        //           break ;
        //     }
        //     break;
        //   case "filling":
        //     switch (this.action.categoryType[this.action.category.english].english) {
        //       case "class I":
        //         this.toothCariesFillingClassI();
        //         if(!this.action.selectedTooths.filling.class_I.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_I.push(this.toothNumber)
        //         break
        //       case "class IV mesial":
        //         if(!this.action.selectedTooths.filling.class_IV_mesial.includes(this.toothNumber))
        //           this.action.selectedTooths.filling.class_IV_mesial.push(this.toothNumber)
        //           this.toothCariesFillingClassIvMesial();
        //           break;
        //       case "class IV distal":
        //         if(!this.action.selectedTooths.filling.class_IV_distal.includes(this.toothNumber))
        //           this.action.selectedTooths.filling.class_IV_distal.push(this.toothNumber)
        //           this.toothCariesFillingClassIvDistal();
        //           break;
        //       case "class III distal":
        //         if(!this.action.selectedTooths.filling.class_III_distal.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_III_distal.push(this.toothNumber)
        //           this.toothCariesFillingClassIiiDistal();
        //           break;
        //       case "class II distal":
        //         if(!this.action.selectedTooths.filling.class_II_distal.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_II_distal.push(this.toothNumber)
        //           this.toothCariesFillingClassIiDistal();
        //         break;
        //       case "class III mesial":
        //         if(!this.action.selectedTooths.filling.class_III_mesial.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_III_mesial.push(this.toothNumber)
        //           this.toothCariesFillingClassIiiMesial();
        //           break ;
        //       case "class II mesial":
        //         if(!this.action.selectedTooths.filling.class_II_mesial.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_II_mesial.push(this.toothNumber)
        //           this.toothCariesFillingClassIvMesial();
        //           break;
        //       case "class II MOD":
        //         if(!this.action.selectedTooths.filling.class_II_MOD.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_II_MOD.push(this.toothNumber)
        //           this.toothCariesFillingClassIiMod();

        //           break;
        //       case "class III MOD":
        //         if(!this.action.selectedTooths.filling.class_III_MOD.includes(this.toothNumber))
        //         this.action.selectedTooths.filling.class_III_MOD.push(this.toothNumber)
        //           this.toothCariesFillingClassIiiMod();
        //           break;
        //       case "class IV MOD":
        //         if(!this.action.selectedTooths.filling.class_IV_MOD.includes(this.toothNumber))
        //           this.action.selectedTooths.filling.class_IV_MOD.push(this.toothNumber)
        //           this.toothCariesFillingClassIvMod();
        //           break;
        //       case "class V":
        //         if(!this.action.selectedTooths.filling.class_V.includes(this.toothNumber))
        //           this.action.selectedTooths.filling.class_V.push(this.toothNumber)
        //           this.toothCariesFillingClassV();
        //           break ;
        //     }
        //     break;
        //   case "pulp":
        //       this.toothPulp()
        //       if(!this.action.selectedTooths.pulp.includes(this.toothNumber))
        //     this.action.selectedTooths.pulp.push(this.toothNumber)
        //       break;
        //   case "endo":
        //     if(!this.action.selectedTooths.endo.includes(this.toothNumber))
        //         this.action.selectedTooths.endo.push(this.toothNumber)
        //       this.toothEndo()
        //       break;
        //   case "periapical":
        //     if(!this.action.selectedTooths.periapical.includes(this.toothNumber))
        //     this.action.selectedTooths.periapical.push(this.toothNumber)
        //       this.toothPeriapical();
        //       break;
        //   case "post":
        //     if(!this.action.selectedTooths.post.includes(this.toothNumber))
        //     this.action.selectedTooths.post.push(this.toothNumber)
        //       this.toothPost();
        //       break;
        //   case "crown":
        //     switch (this.action.categoryType[this.action.category.english].english) {
        //       case "full veneer":
        //         if (!this.action.selectedTooths.crown.fullVeneer.includes(this.toothNumber)) 
        //           this.action.selectedTooths.crown.fullVeneer.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].crown.fullVeneer = true;
        //         break;
        //       case "laminate veneer":
        //         if (!this.action.selectedTooths.crown.laminateVeneer.includes(this.toothNumber)) 
        //               this.action.selectedTooths.crown.laminateVeneer.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].crown.laminateVeneer = true;

        //         break;
        //       case "occlusal veneer":
        //         if (!this.action.selectedTooths.crown.occlusalVeneer.includes(this.toothNumber)) 
        //             this.action.selectedTooths.crown.occlusalVeneer.push(this.toothNumber)
        //             this.toothNumbers[this.toothNumber].crown.occlusalVeneer = true;

        //         break;
        //       case "post crown":
        //         if (!this.action.selectedTooths.crown.postCrown.includes(this.toothNumber)) 
        //           this.action.selectedTooths.crown.postCrown.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].crown.postCrown = true;
        //           this.toothPost()
        //         break;
        //       case "endo crown":
        //         if (!this.action.selectedTooths.crown.endoCrown.includes(this.toothNumber)) 
        //           this.action.selectedTooths.crown.endoCrown.push(this.toothNumber);
        //           this.toothEndoCrown()
        //         break;
        //       case "bridge":
        //         if (this.action.selectedTooths.crown.bridge.includes(this.toothNumber)) 
        //           this.action.selectedTooths.crown.bridge.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].crown.bridge = true;
        //         break;
        //       case "Denture":
        //         if (this.action.selectedTooths.crown.denture.includes(this.toothNumber)) 
        //           this.action.selectedTooths.crown.denture.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].crown.denture = true;
        //         break;
        //       case "onlay":
        //         if (this.action.selectedTooths.crown.onlay.includes(this.toothNumber)) 
        //           this.action.selectedTooths.crown.onlay.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].crown.onlay = true;
        //         break;

        //       }
        //       break;
        //   case "removable":
        //     if(!this.action.selectedTooths.removable.includes(this.toothNumber))
        //       this.action.selectedTooths.removable.push(this.toothNumber)
        //       this.toothRemovable();
        //       break ;
        //   case "implant":
        //     if(this.action.categoryType[this.action.category.english].english != "Remove Implant"){
        //       if(!this.action.selectedTooths.implant.includes(this.toothNumber))
        //       this.action.selectedTooths.implant.push(this.toothNumber)
        //         this.toothImplant();
        //       }
        //     break;
        //   case "ginfivitis":
        //     if(!this.action.selectedTooths.ginfivitis.includes(this.toothNumber))
        //     this.action.selectedTooths.ginfivitis.push(this.toothNumber)
        //     this.toothGinfivitisLeft();
        //     this.toothGinfivitisRight()
        //     break;
        //   case "periodontal":
        //     if(!this.action.selectedTooths.periodontal.includes(this.toothNumber))
        //     this.action.selectedTooths.periodontal.push(this.toothNumber)
        //     this.toothPeriodontalLeft();
        //     this.toothPeriodontalRight();
        //     break;
        //   case "perio":
        //     if(!this.action.selectedTooths.perio.includes(this.toothNumber))
        //     this.action.selectedTooths.perio.push(this.toothNumber)
        //     this.toothPerioLeft();
        //     this.toothPerioRight();
        //     break;
        //   case "alignment":
        //     this.handAlignment();
        //     break;
        //   case "Fraction / Damaged":
        //     switch(this.action.categoryType.fraction.english){
        //       case "root":
        //         if (!this.action.selectedTooths.fraction.root.includes(this.toothNumber)) 
        //           this.action.selectedTooths.fraction.root.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].fraction.root = true;
        //           if (this.action.selectedTooths.fraction.crown.includes(this.toothNumber)) 
        //           this.action.selectedTooths.fraction.crown.splice(this.action.selectedTooths.fraction.crown.indexOf(this.toothNumber),1)
        //           this.toothNumbers[this.toothNumber].fraction.crown = false;
        //           break ;
        //       case "crown":
        //         if (!this.action.selectedTooths.fraction.crown.includes(this.toothNumber)) 
        //           this.action.selectedTooths.fraction.crown.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].fraction.crown = true;
        //           if (this.action.selectedTooths.fraction.root.includes(this.toothNumber)) 
        //           this.action.selectedTooths.fraction.root.splice(this.action.selectedTooths.fraction.root.indexOf(this.toothNumber),1)
        //           this.toothNumbers[this.toothNumber].fraction.root = false;
        //         break ; 
        //       case "both":
        //         if(!this.action.selectedTooths.fraction.crown.includes(this.toothNumber))
        //             this.action.selectedTooths.fraction.crown.push(this.toothNumber)
        //           if(!this.action.selectedTooths.fraction.root.includes(this.toothNumber))
        //             this.action.selectedTooths.fraction.root.push(this.toothNumber)
        //           this.toothNumbers[this.toothNumber].fraction.crown = true;
        //           this.toothNumbers[this.toothNumber].fraction.root = true;
        //         break ;
        //     }
        //     break ;
        //   case "fractures":
        //     switch(this.action.categoryType.fractures){
        //       case "Fracture":
        //         if(!this.action.selectedTooths.fractures.fructure.includes(this.toothNumber))
        //         this.action.selectedTooths.fractures.fructure.push(this.toothNumber)
        //         break ;
        //       case "Severely Damaged":
        //           if(!this.action.selectedTooths.fractures.severelyDamaged.includes(this.toothNumber))
        //           this.action.selectedTooths.fractures.severelyDamaged.push(this.toothNumber)
        //           break ;
        //       case "Wear":
        //         if(!this.action.selectedTooths.fractures.wear.includes(this.toothNumber))
        //           this.action.selectedTooths.fractures.wear.push(this.toothNumber)
        //           break ;
        //     }
        //     break ;
        //   case "Restorative color":
        //       if(!this.action.selectedTooths.restorativeColor.includes(this.toothNumber))
        //           this.action.selectedTooths.restorativeColor.push(this.toothNumber)
        //         break;
        //   case "Prevention Hygiene":
        //       if(!this.action.selectedTooths.preventionHygiene.includes(this.toothNumber))
        //           this.action.selectedTooths.preventionHygiene.push(this.toothNumber)
        //         break;
        //   case "Other Surgery":
        //       if(!this.action.selectedTooths.otherSurgery.includes(this.toothNumber))
        //           this.action.selectedTooths.otherSurgery.push(this.toothNumber)
        //         break;
        //   }

        // },
        handOrthodontic() {
            if (this.action.categoryType.orthodontic)
                switch (this.action.categoryType.orthodontic.english) {
                    case "stable":
                        switch (this.action.style.orthodontic.mainOption.english) {
                            case "metal":
                                this.addOrthodontic("stable", "metal")
                                break;
                            case "ceramic":
                                this.addOrthodontic("stable", "ceramic")
                                break;
                            case "transparent":
                                this.addOrthodontic("stable", "transparent")
                                break;
                            case "internal":
                                this.restOrthodontalObject();
                                break;
                        }
                        break;
                    case "mobile":
                        switch (this.action.style.orthodontic.mainOption.english) {
                            case "wire":
                                this.addOrthodontic("mobile", "wire")
                                break;
                            case "transparent":
                                this.addOrthodontic("mobile", "transparent")
                                break;
                        }
                        break;

                }
        },
        handFractures() {
            switch (this.action.categoryType.fractures.english) {
                case "Fracture":
                    if (this.action.selectedTooths.fractures.fructure.includes(this.toothNumber))
                        this.action.selectedTooths.fractures.fructure.splice(this.action.selectedTooths.fractures.fructure.indexOf(this.toothNumber), 1)
                    else
                        this.action.selectedTooths.fractures.fructure.push(this.toothNumber)

                    break;
                case "Severely Damaged":
                    if (this.action.selectedTooths.fractures.severelyDamaged.includes(this.toothNumber))
                        this.action.selectedTooths.fractures.severelyDamaged.splice(this.action.selectedTooths.fractures.severelyDamaged.indexOf(this.toothNumber), 1)
                    else
                        this.action.selectedTooths.fractures.severelyDamaged.push(this.toothNumber)

                    break;
                case "Wear":
                    if (this.action.selectedTooths.fractures.wear.includes(this.toothNumber))
                        this.action.selectedTooths.fractures.wear.splice(this.action.selectedTooths.fractures.wear.indexOf(this.toothNumber), 1)
                    else
                        this.action.selectedTooths.fractures.wear.push(this.toothNumber)

                    break;
            }
        },
        addOrthodontic(value_, type_) {
            this.restOrthodontalObject();
            switch (this.action.style.orthodontic.type.english) {
                case "upper":
                    this.toothNumbers.orthodontic[value_][type_].upper = true;
                    this.toothNumbers.orthodontic[value_][type_].lower = false;
                    break;
                case "lower":
                    this.toothNumbers.orthodontic[value_][type_].lower = true;
                    this.toothNumbers.orthodontic[value_][type_].upper = false;
                    break;
                case "both":
                    this.toothNumbers.orthodontic[value_][type_].upper = true;
                    this.toothNumbers.orthodontic[value_][type_].lower = true;
                    break;
            }

        },
        restOrthodontalObject() {
            this.toothNumbers.orthodontic = {
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
            };
        },
        restFillingAndCaries(type_) {
            this.toothNumbers[this.toothNumber].filling_caries_class_i = false;
            this.toothNumbers[this.toothNumber].filling_caries_class_iv_mesial = false;
            this.toothNumbers[this.toothNumber].filling_caries_class_iv_distal = false;
            this.toothNumbers[this.toothNumber].filling_caries_class_v = false;
            this.toothNumbers[this.toothNumber].filling_caries_class_iii_distal = false;
            this.toothNumbers[this.toothNumber].filling_caries_class_iii_mesial = false;
            if (this.action.selectedTooths[type_].class_I.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_I.splice(this.action.selectedTooths[type_].class_I.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_IV_mesial.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_IV_mesial.splice(this.action.selectedTooths[type_].class_IV_mesial.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_IV_distal.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_IV_distal.splice(this.action.selectedTooths[type_].class_IV_distal.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_III_distal.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_III_distal.splice(this.action.selectedTooths[type_].class_III_distal.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_II_distal.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_II_distal.splice(this.action.selectedTooths[type_].class_II_distal.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_III_mesial.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_III_mesial.splice(this.action.selectedTooths[type_].class_III_mesial.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_II_mesial.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_II_mesial.splice(this.action.selectedTooths[type_].class_II_mesial.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_II_MOD.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_II_MOD.splice(this.action.selectedTooths[type_].class_II_MOD.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_III_MOD.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_III_MOD.splice(this.action.selectedTooths[type_].class_III_MOD.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_IV_MOD.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_IV_MOD.splice(this.action.selectedTooths[type_].class_IV_MOD.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths[type_].class_V.includes(this.toothNumber)) {
                this.action.selectedTooths[type_].class_V.splice(this.action.selectedTooths[type_].class_V.indexOf(this.toothNumber), 1)
            }

        },
        restCrown() {
            this.toothNumbers[this.toothNumber].crown.fullVeneer = false;
            this.toothNumbers[this.toothNumber].crown.laminateVeneer = false;
            this.toothNumbers[this.toothNumber].crown.occlusalVeneer = false;
            this.toothNumbers[this.toothNumber].crown.postCrown = false;
            this.toothNumbers[this.toothNumber].crown.endoCrown = false;
            this.toothNumbers[this.toothNumber].crown.bridge = false;
            this.toothNumbers[this.toothNumber].crown.denture = false;
            this.toothNumbers[this.toothNumber].crown.onlay = false;

            if (this.action.selectedTooths.crown.fullVeneer.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.fullVeneer.splice(this.action.selectedTooths.crown.fullVeneer.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths.crown.laminateVeneer.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.laminateVeneer.splice(this.action.selectedTooths.crown.laminateVeneer.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths.crown.occlusalVeneer.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.occlusalVeneer.splice(this.action.selectedTooths.crown.occlusalVeneer.indexOf(this.toothNumber), 1)
            }
            if (this.action.selectedTooths.crown.postCrown.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.postCrown.splice(this.action.selectedTooths.crown.postCrown.indexOf(this.toothNumber), 1)
                this.discardToothPost()
            }
            if (this.action.selectedTooths.crown.endoCrown.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.endoCrown.splice(this.action.selectedTooths.crown.endoCrown.indexOf(this.toothNumber), 1);
                this.discardEndoCrown()
            }
            if (this.action.selectedTooths.crown.bridge.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.bridge.splice(this.action.selectedTooths.crown.bridge.indexOf(this.toothNumber), 1)

            }
            if (this.action.selectedTooths.crown.denture.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.denture.splice(this.action.selectedTooths.crown.denture.indexOf(this.toothNumber), 1)

            }
            if (this.action.selectedTooths.crown.onlay.includes(this.toothNumber)) {
                this.action.selectedTooths.crown.onlay.splice(this.action.selectedTooths.crown.onlay.indexOf(this.toothNumber), 1)

            }


        },
        handFaction() {
            switch (this.action.categoryType.fraction.english) {
                case "root":
                    if (this.action.selectedTooths.fraction.root.includes(this.toothNumber)) {
                        this.action.selectedTooths.fraction.root.splice(this.action.selectedTooths.fraction.root.indexOf(this.toothNumber), 1)
                        this.toothNumbers[this.toothNumber].fraction.root = false;

                    } else {
                        this.action.selectedTooths.fraction.root.push(this.toothNumber)
                        this.toothNumbers[this.toothNumber].fraction.root = true;
                    }
                    break;
                case "crown":
                    if (this.action.selectedTooths.fraction.crown.includes(this.toothNumber)) {
                        this.action.selectedTooths.fraction.crown.splice(this.action.selectedTooths.fraction.crown.indexOf(this.toothNumber), 1)
                        this.toothNumbers[this.toothNumber].fraction.crown = false;

                    } else {
                        this.action.selectedTooths.fraction.crown.push(this.toothNumber)
                        this.toothNumbers[this.toothNumber].fraction.crown = true;
                    }
                    break;
                case "both":
                    if (this.action.selectedTooths.fraction.crown.includes(this.toothNumber) && this.action.selectedTooths.fraction.root.includes(this.toothNumber)) {
                        this.action.selectedTooths.fraction.crown.splice(this.action.selectedTooths.fraction.crown.indexOf(this.toothNumber), 1)
                        this.action.selectedTooths.fraction.root.splice(this.action.selectedTooths.fraction.root.indexOf(this.toothNumber), 1)
                        this.toothNumbers[this.toothNumber].fraction.crown = false;
                        this.toothNumbers[this.toothNumber].fraction.root = false;

                    } else {
                        if (!this.action.selectedTooths.fraction.crown.includes(this.toothNumber))
                            this.action.selectedTooths.fraction.crown.push(this.toothNumber)
                        if (!this.action.selectedTooths.fraction.root.includes(this.toothNumber))
                            this.action.selectedTooths.fraction.root.push(this.toothNumber)
                        this.toothNumbers[this.toothNumber].fraction.crown = true;
                        this.toothNumbers[this.toothNumber].fraction.root = true;
                    }

                    break;
            }
        },
        checkIfExistsInArray(type_) {
            let exists = false;
            for (let i = 0; i < this.action.selectedTooths[type_].includes(this.toothNumber); i++) {
                if (this.action.selectedTooths[type_][i] == this.toothNumber) {
                    exists = true;
                    break;
                }
            }
            return exists;

        },
        handAlignment() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                if (this.action.categoryType[this.action.category.english].english && this.action.style[this.action.category.english].english) {
                    switch (this.action.categoryType[this.action.category.english].english) {
                        case "mesial shift":
                            this.handAlignmentNumbers("mesialShift")
                            break;
                        case "distal shift":
                            this.handAlignmentNumbers("distalShift")
                            break;
                        case "intrusion":
                            this.handAlignmentNumbers("intrusion")
                            break;
                        case "extrusion":
                            this.handAlignmentNumbers("extrusion")
                            break;
                        case "distal tilting":
                            this.handAlignmentNumbers("distalTilting")
                            break;
                        case "mesial tilting":
                            this.handAlignmentNumbers("mesialTilting")
                            break;
                    }
                }
            }

        },
        handAlignmentNumbers(type_) {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                if (this.action.selectedTooths.alignment[type_].includes(this.toothNumber)) {
                    this.action.selectedTooths.alignment[type_].splice(this.action.selectedTooths.alignment[type_].indexOf(this.toothNumber), 1)
                    this.discardAlignment(type_);
                } else {
                    this.action.selectedTooths.alignment[type_].push(this.toothNumber);
                    if (type_ == "distalShift" || type_ == "extrusion" || type_ == "mesialTilting") {
                        this.toothAlignment(type_, -1 * this.action.style[this.action.category.english].english)
                    } else {
                        this.toothAlignment(type_, this.action.style[this.action.category.english].english)
                    }
                }
            }

        },
        toothAlignment(type_, value) {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                for (let key in this.toothNumbers[this.toothNumber].alignement) {
                    this.toothNumbers[this.toothNumber].alignement[key] = 0
                }
                if (type_ != "distalTilting" && type_ != "mesialTilting")
                    this.toothNumbers[this.toothNumber].alignement[type_] = value / 3;
                else
                    this.toothNumbers[this.toothNumber].alignement[type_] = value;
            }
        },
        discardAlignment(type_) {
            this.toothNumbers[this.toothNumber].alignement[type_] = 0;
        },
        handGinfivitisAndPeriodontal(type_) {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                switch (type_) {
                    case "ginfivitis":
                        if (this.action.selectedTooths.ginfivitis.includes(this.toothNumber)) {
                            this.action.selectedTooths.ginfivitis.splice(this.action.selectedTooths.ginfivitis.indexOf(this.toothNumber), 1)
                            this.discardGinfivitisLeft();
                            this.discardGinfivitisRight();
                        } else {
                            this.action.selectedTooths.ginfivitis.push(this.toothNumber)
                            this.toothGinfivitisLeft();
                            this.toothGinfivitisRight()
                        }
                        break;
                    case "periodontal":

                        if (this.action.selectedTooths.periodontal.includes(this.toothNumber)) {
                            this.action.selectedTooths.periodontal.splice(this.action.selectedTooths.periodontal.indexOf(this.toothNumber), 1)
                            this.discarPeriodontalLeft();
                            this.discardPeriodontalRight();


                        } else {
                            this.action.selectedTooths.periodontal.push(this.toothNumber)
                            this.toothPeriodontalLeft();
                            this.toothPeriodontalRight();
                        }
                        break;
                    case "perio":

                        if (this.action.selectedTooths.perio.includes(this.toothNumber)) {
                            this.action.selectedTooths.perio.splice(this.action.selectedTooths.perio.indexOf(this.toothNumber), 1)
                            this.discardPerioLeft();
                            this.discardPerioRight();


                        } else {
                            this.action.selectedTooths.perio.push(this.toothNumber)
                            this.toothPerioLeft();
                            this.toothPerioRight();
                        }
                        break;
                }

            }
        },
        handCariesAndFilling(type_) {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                switch (this.action.categoryType[this.action.category.english].english) {
                    case "class I":
                        if (this.action.selectedTooths[type_].class_I.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_I.splice(this.action.selectedTooths[type_].class_I.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassI();

                        } else {
                            this.action.selectedTooths[type_].class_I.push(this.toothNumber)
                            this.toothCariesFillingClassI();
                        }
                        break
                    case "class IV mesial":
                        if (this.action.selectedTooths[type_].class_IV_mesial.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_IV_mesial.splice(this.action.selectedTooths[type_].class_IV_mesial.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIvMesial();

                        } else {
                            this.action.selectedTooths[type_].class_IV_mesial.push(this.toothNumber)
                            this.toothCariesFillingClassIvMesial();
                        }
                        break;
                    case "class IV distal":
                        if (this.action.selectedTooths[type_].class_IV_distal.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_IV_distal.splice(this.action.selectedTooths[type_].class_IV_distal.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIvDistal();

                        } else {
                            this.action.selectedTooths[type_].class_IV_distal.push(this.toothNumber)
                            this.toothCariesFillingClassIvDistal();
                        }
                        break;
                    case "class III distal":
                        if (this.action.selectedTooths[type_].class_III_distal.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_III_distal.splice(this.action.selectedTooths[type_].class_III_distal.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIiiDistal();

                        } else {
                            this.action.selectedTooths[type_].class_III_distal.push(this.toothNumber)
                            this.toothCariesFillingClassIiiDistal();
                        }
                        break;
                    case "class II distal":
                        if (this.action.selectedTooths[type_].class_II_distal.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_II_distal.splice(this.action.selectedTooths[type_].class_II_distal.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIiDistal();

                        } else {
                            this.action.selectedTooths[type_].class_II_distal.push(this.toothNumber)
                            this.toothCariesFillingClassIiDistal();
                        }
                        break;
                    case "class III mesial":
                        if (this.action.selectedTooths[type_].class_III_mesial.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_III_mesial.splice(this.action.selectedTooths[type_].class_III_mesial.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIiiMesial();

                        } else {
                            this.action.selectedTooths[type_].class_III_mesial.push(this.toothNumber)
                            this.toothCariesFillingClassIiiMesial();
                        }
                        break;
                    case "class II mesial":
                        if (this.action.selectedTooths[type_].class_II_mesial.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_II_mesial.splice(this.action.selectedTooths[type_].class_II_mesial.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIvMesial();

                        } else {
                            this.action.selectedTooths[type_].class_II_mesial.push(this.toothNumber)
                            this.toothCariesFillingClassIvMesial();
                        }
                        break;
                    case "class II MOD":
                        if (this.action.selectedTooths[type_].class_II_MOD.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_II_MOD.splice(this.action.selectedTooths[type_].class_II_MOD.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIiMod();

                        } else {
                            this.action.selectedTooths[type_].class_II_MOD.push(this.toothNumber)
                            this.toothCariesFillingClassIiMod();
                        }
                        break;
                    case "class III MOD":
                        if (this.action.selectedTooths[type_].class_III_MOD.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_III_MOD.splice(this.action.selectedTooths[type_].class_III_MOD.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIiiMod();

                        } else {
                            this.action.selectedTooths[type_].class_III_MOD.push(this.toothNumber)
                            this.toothCariesFillingClassIiiMod();
                        }
                        break;
                    case "class IV MOD":
                        if (this.action.selectedTooths[type_].class_IV_MOD.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_IV_MOD.splice(this.action.selectedTooths[type_].class_IV_MOD.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassIvMod();

                        } else {
                            this.action.selectedTooths[type_].class_IV_MOD.push(this.toothNumber)
                            this.toothCariesFillingClassIvMod();
                        }
                        break;
                    case "class V":
                        if (this.action.selectedTooths[type_].class_V.includes(this.toothNumber)) {
                            this.action.selectedTooths[type_].class_V.splice(this.action.selectedTooths[type_].class_V.indexOf(this.toothNumber), 1)
                            this.discardCariesFillingClassV();

                        } else {
                            this.action.selectedTooths[type_].class_V.push(this.toothNumber)
                            this.toothCariesFillingClassV();
                        }
                        break;


                }
            }
        },
        handCrown() {
            if (!this.toothNumbers[this.toothNumber].extraction) {
                switch (this.action.categoryType[this.action.category.english].english) {
                    case "full veneer":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {

                            if (this.action.selectedTooths.crown.fullVeneer.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.fullVeneer.splice(this.action.selectedTooths.crown.fullVeneer.indexOf(this.toothNumber), 1)
                                this.toothNumbers[this.toothNumber].crown.fullVeneer = false;

                            } else {
                                this.action.selectedTooths.crown.fullVeneer.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].crown.fullVeneer = true;
                            }
                        }
                        break;
                    case "laminate veneer":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {

                            if (this.action.selectedTooths.crown.laminateVeneer.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.laminateVeneer.splice(this.action.selectedTooths.crown.laminateVeneer.indexOf(this.toothNumber), 1)
                                this.toothNumbers[this.toothNumber].crown.laminateVeneer = false;

                            } else {
                                this.action.selectedTooths.crown.laminateVeneer.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].crown.laminateVeneer = true;
                            }
                        }
                        break;
                    case "occlusal veneer":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {
                            if (this.action.selectedTooths.crown.occlusalVeneer.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.occlusalVeneer.splice(this.action.selectedTooths.crown.occlusalVeneer.indexOf(this.toothNumber), 1)
                                this.toothNumbers[this.toothNumber].crown.occlusalVeneer = false;

                            } else {
                                this.action.selectedTooths.crown.occlusalVeneer.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].crown.occlusalVeneer = true;
                            }
                        }
                        break;
                    case "post crown":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {
                            if (this.action.selectedTooths.crown.postCrown.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.postCrown.splice(this.action.selectedTooths.crown.postCrown.indexOf(this.toothNumber), 1)
                                this.toothNumbers[this.toothNumber].crown.postCrown = false;
                                this.discardToothPost()

                            } else {
                                this.action.selectedTooths.crown.postCrown.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].crown.postCrown = true;
                                this.toothPost()
                            }
                        }
                        break;
                    case "endo crown":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {
                            if (this.action.selectedTooths.crown.endoCrown.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.endoCrown.splice(this.action.selectedTooths.crown.endoCrown.indexOf(this.toothNumber), 1)
                                this.discardEndoCrown();

                            } else {
                                this.action.selectedTooths.crown.endoCrown.push(this.toothNumber);
                                this.toothEndoCrown();

                            }
                        }
                        break;
                    case "bridge":
                        if (this.action.selectedTooths.crown.bridge.includes(this.toothNumber)) {
                            this.action.selectedTooths.crown.bridge.splice(this.action.selectedTooths.crown.bridge.indexOf(this.toothNumber), 1)
                            this.toothNumbers[this.toothNumber].crown.bridge = false;

                        } else {
                            this.action.selectedTooths.crown.bridge.push(this.toothNumber)
                            this.toothNumbers[this.toothNumber].crown.bridge = true;
                        }
                        break;
                    case "Denture":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {

                            if (this.action.selectedTooths.crown.denture.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.denture.splice(this.action.selectedTooths.crown.denture.indexOf(this.toothNumber), 1)
                                this.toothNumbers[this.toothNumber].crown.denture = false;

                            } else {
                                this.action.selectedTooths.crown.denture.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].crown.denture = true;
                            }
                        }
                        break;
                    case "onlay":
                        if (!this.toothNumbers[this.toothNumber].removeImplant) {
                            if (this.action.selectedTooths.crown.onlay.includes(this.toothNumber)) {
                                this.action.selectedTooths.crown.onlay.splice(this.action.selectedTooths.crown.onlay.indexOf(this.toothNumber), 1)
                                this.toothNumbers[this.toothNumber].crown.onlay = false;

                            } else {
                                this.action.selectedTooths.crown.onlay.push(this.toothNumber)
                                this.toothNumbers[this.toothNumber].crown.onlay = true;
                            }
                        }
                        break;



                }
            }
        },
        toothPulp() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.discardEndo();
                this.toothNumbers[this.toothNumber].pulp.pulp1 = true;
                this.toothNumbers[this.toothNumber].pulp.pulp2 = true;
                this.toothNumbers[this.toothNumber].pulp.pulp3 = true;
            }
        },
        dsicardPulp() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].pulp.pulp1 = false;
                this.toothNumbers[this.toothNumber].pulp.pulp2 = false;
                this.toothNumbers[this.toothNumber].pulp.pulp3 = false;
            }

        },
        thoothBone() {
            this.toothNumbers[this.toothNumber].bone = true;
        },
        discardToothBone() {
            this.toothNumbers[this.toothNumber].bone = false;
        },
        toothExtraction() {
            this.toothNumbers[this.toothNumber] = singleAdultTooth();
            this.toothNumbers[this.toothNumber].extraction = true;
        },
        discardToothExtraction() {
            this.toothNumbers[this.toothNumber].extraction = false;
        },
        toothImplant() {
            if (!this.toothNumbers[this.toothNumber].extraction) {
                this.toothNumbers[this.toothNumber].implant = true;
                this.toothNumbers[this.toothNumber].dent.root1 = false;
                this.toothNumbers[this.toothNumber].dent.root2 = false;
                this.discardToothPeriapical();
                this.discardToothPost();
                this.discardGinfivitisRight();
                this.discardGinfivitisLeft();
                this.discardCariesFillingClassI();
                this.discardCariesFillingClassIvMesial();
                this.discardCariesFillingClassIvDistal();
                this.discardCariesFillingClassIvMod();
                this.discardCariesFillingClassV();
                this.discardCariesFillingClassIiiDistal();
                this.discardCariesFillingClassIiiMesial();
                this.discardCariesFillingClassIiiMod();
                this.discardCariesFillingClassIiMesial();
                this.discardCariesFillingClassIiDistal();
                this.discardCariesFillingClassIiMod();
                this.discardEndo();
                this.discardEndoCrown();
                this.discardVeneer();
                this.discardRemovable();
                this.discardBridge();
                this.discardFullVeneer();
                this.dsicardPulp();
                this.discardPerioLeft();
                this.discardPerioRight();
                this.discarPeriodontalLeft();
                this.discardPeriodontalRight();
            }

        },
        discardToothImplant() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].implant = false;
                this.toothNumbers[this.toothNumber].dent.root1 = true;
                this.toothNumbers[this.toothNumber].dent.root2 = true;
            }
        },
        //Tooth Periapical
        toothPeriapical() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].periapical.periapical1 = true;
                this.toothNumbers[this.toothNumber].periapical.periapical2 = true;
                this.toothNumbers[this.toothNumber].periapical.periapical3 = true;
            }
        },
        discardToothPeriapical() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].periapical.periapical1 = false;
                this.toothNumbers[this.toothNumber].periapical.periapical2 = false;
                this.toothNumbers[this.toothNumber].periapical.periapical3 = false;
            }
        },
        //tooth Post
        toothPost() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].post.post1 = true;
                this.toothNumbers[this.toothNumber].post.post2 = true;
                this.toothNumbers[this.toothNumber].post.post3 = true;
            }
        },
        discardToothPost() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].post.post1 = false;
                this.toothNumbers[this.toothNumber].post.post2 = false;
                this.toothNumbers[this.toothNumber].post.post3 = false;
            }
        },
        //tooth Ginfivitis Right
        toothGinfivitisRight() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].ginfivitis.right = true;
            }
        },
        discardGinfivitisRight() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].ginfivitis.right = false;
            }
        },

        //tooth Ginfivitis perio
        toothPerioLeft() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].perio.left = true;
            }
        },
        discardPerioLeft() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].perio.left = false;
            }
        },
        //tooth perio Left
        toothPerioRight() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].perio.right = true;
            }
        },
        discardPerioRight() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].perio.right = false;
            }
        },
        //tooth Ginfivitis Left
        toothGinfivitisLeft() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].ginfivitis.left = true;
            }
        },
        discardGinfivitisLeft() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].ginfivitis.left = false;
            }
        },
        //tooth Periodontal Left
        toothPeriodontalLeft() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].periodontal.left = true;
            }
        },
        discarPeriodontalLeft() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].periodontal.left = false;
            }
        },
        //tooth Periodontal Left
        toothPeriodontalRight() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].periodontal.right = true;
            }
        },
        discardPeriodontalRight() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].periodontal.right = false;
            }
        },
        //tooth Caries Filling Class I
        toothCariesFillingClassI() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].filling_caries_class_i = true;
            }
        },
        discardCariesFillingClassI() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].filling_caries_class_i = false;
            }
        },
        //tooth Caries Filling Class IV Mesial
        toothCariesFillingClassIvMesial() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iv_mesial = true;
            }
        },
        discardCariesFillingClassIvMesial() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iv_mesial = false;
            }
        },
        //tooth Caries Filling Class IV Distal
        toothCariesFillingClassIvDistal() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iv_distal = true;
            }
        },
        discardCariesFillingClassIvDistal() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iv_distal = false;
            }
        },
        //tooth Caries Filling Class IV Mod
        toothCariesFillingClassIvMod() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothCariesFillingClassIvMesial();
                this.toothCariesFillingClassIvDistal();

            }

        },
        discardCariesFillingClassIvMod() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.discardCariesFillingClassIvMesial();
                this.discardCariesFillingClassIvDistal();
            }
        },

        //tooth Caries Filling Class V
        toothCariesFillingClassV() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].filling_caries_class_v = true;
            }
        },
        discardCariesFillingClassV() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].filling_caries_class_v = false;
            }
        },
        //tooth Caries Filling Class III Distal
        toothCariesFillingClassIiiDistal() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iii_distal = true;
            }
        },
        discardCariesFillingClassIiiDistal() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iii_distal = false;
            }
        },

        //tooth Caries Filling Class Iii Mesial
        toothCariesFillingClassIiiMesial() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iii_mesial = true;
            }
        },
        discardCariesFillingClassIiiMesial() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[
                    this.toothNumber
                ].filling_caries_class_iii_mesial = false;
            }
        },
        //tooth Caries Filling Class Iii Mod
        toothCariesFillingClassIiiMod() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothCariesFillingClassIiiMesial();
                this.toothCariesFillingClassIiiDistal();
            }
        },
        discardCariesFillingClassIiiMod() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.discardCariesFillingClassIiiMesial();
                this.discardCariesFillingClassIiiDistal();
            }
        },
        //tooth Caries Filling Class II Mesial
        toothCariesFillingClassIiMesial() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothCariesFillingClassI();
                this.toothCariesFillingClassIiiMesial();
            }
        },
        discardCariesFillingClassIiMesial() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.discardCariesFillingClassI();
                this.discardCariesFillingClassIiiMesial();
            }
        },
        //tooth Caries Filling Class II Distal
        toothCariesFillingClassIiDistal() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothCariesFillingClassI();
                this.toothCariesFillingClassIiiDistal();
            }
        },
        discardCariesFillingClassIiDistal() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.discardCariesFillingClassI();
                this.discardCariesFillingClassIiiDistal();
            }
        },
        //tooth Caries Filling Class II Mod
        toothCariesFillingClassIiMod() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothCariesFillingClassIiMesial();
                this.toothCariesFillingClassIiDistal();
            }
        },
        discardCariesFillingClassIiMod() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.discardCariesFillingClassIiMesial();
                this.discardCariesFillingClassIiDistal();
            }
        },
        //Tooth Endo
        toothEndo() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.dsicardPulp();
                this.toothNumbers[this.toothNumber].endo.endo1 = true;
                this.toothNumbers[this.toothNumber].endo.endo2 = true;
                this.toothNumbers[this.toothNumber].endo.endo3 = true;
            }
        },
        discardEndo() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].endo.endo1 = false;
                this.toothNumbers[this.toothNumber].endo.endo2 = false;
                this.toothNumbers[this.toothNumber].endo.endo3 = false;
            }
        },
        //Tooth Endo Crown
        toothEndoCrown() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].endo_crown.crown1 = true;
                this.toothNumbers[this.toothNumber].endo_crown.crown2 = true;
                this.toothNumbers[this.toothNumber].endo_crown.crown3 = true;
            }
        },
        discardEndoCrown() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].endo_crown.crown1 = false;
                this.toothNumbers[this.toothNumber].endo_crown.crown2 = false;
                this.toothNumbers[this.toothNumber].endo_crown.crown3 = false;
            }
        },

        //Tooth Veneer
        toothVeneer() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].veneer.veneer1 = true;
                this.toothNumbers[this.toothNumber].veneer.veneer2 = true;
            }
        },
        discardVeneer() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].veneer.veneer1 = false;
                this.toothNumbers[this.toothNumber].veneer.veneer2 = false;
            }
        },
        //Tooth Removable
        toothRemovable() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].removable = true;
            }
        },
        discardRemovable() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].removable = false;
            }
        },

        //Tooth Bridge
        toothBridge() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].bridge = true;
            }
        },
        discardBridge() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].bridge = false;
            }
        },

        //Tooth Bridge
        toothFullVeneer() {
            if (!this.toothNumbers[this.toothNumber].implant && !this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {
                this.toothNumbers[this.toothNumber].fullVeneer = true;
            }
        },
        discardFullVeneer() {
            if (!this.toothNumbers[this.toothNumber].extraction && !this.toothNumbers[this.toothNumber].removeImplant) {

                this.toothNumbers[this.toothNumber].fullVeneer = false;
            }
        },
    },
}