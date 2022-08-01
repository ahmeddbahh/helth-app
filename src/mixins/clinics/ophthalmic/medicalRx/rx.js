export default {
    data(){
        return{
            drugNameOptions: [
                { english: "New York", arabic: "New York"},
                { english: "Rome",arabic: "Rome"},
                { english: "London",arabic: "London" },
                { english: "Istanbul",arabic: "Istanbul" },
                { english: "Paris",arabic: "Paris"},
            ],
            eyeOptions:[
                {english:"OS",arabic:"OS"},
                {english:"OD",arabic:"OD"},
                {english:"OU",arabic:"OU"},
            ],
            drugFormOptions:[
                {english:'AEROSOL',arabic: 'AEROSOL'
                },
                {english:'AEROSOL,FOAM',arabic: 'AEROSOL,FOAM'
                },
                {english:'AEROSOL, METERED',arabic: 'AEROSOL, METERED'
                },
                {english:'AEROSOL, POWDER',arabic: 'AEROSOL, POWDER'
                },
                {english:'AEROSOL, SPRAY',arabic: 'AEROSOL, SPRAY'
                },
                {english:'BAR, CHEWABLE',arabic: 'BAR, CHEWABLE'
                },
                {english:'BEAD',arabic: 'BEAD'
                },
                {english:'CAPSULE',arabic: 'CAPSULE'
                },
                {english:'CAPSULE, COATED',arabic: 'CAPSULE, COATED'
                },
                {english:'CAPSULE, COATED PELLETS',arabic: 'CAPSULE, COATED PELLETS'
                },
                {english:'CAPSULE, COATED, EXTENDED RELEASE',arabic:'CAPSULE, COATED, EXTENDED RELEASE'
                },
                {english:'CAPSULE, DELAYED RELEASE',arabic:'CAPSULE, DELAYED RELEASE'
                },
                {english:'CAPSULE, DELAYED RELEASE PELLETS',arabic:'CAPSULE, DELAYED RELEASE PELLETS'
                },
                {english:'CAPSULE, EXTENDED RELEASE',arabic:'CAPSULE, EXTENDED RELEASE'
                },
                {english:'CAPSULE, FILM COATED, EXTENDED RELEASE',arabic:'CAPSULE, FILM COATED, EXTENDED RELEASE'
                },
                {english:'CAPSULE, GELATIN COATED',arabic:'CAPSULE, GELATIN COATED'
                },
                {english:'CAPSULE, LIQUID FILLED',arabic:'CAPSULE, LIQUID FILLED'
                },
                {english:'CELLULAR SHEET',arabic:'CELLULAR SHEET'
                },
                {english:'CHEWABLE',arabic:'CHEWABLE'
                },
                {english:'CLOTH',arabic:'CLOTH'
                },
                {english:'CONCENTRATE',arabic:'CONCENTRATE'
                },
                {english:'CREAM',arabic:'CREAM'
                },
                {english:'CREAM, AUGMENTED',arabic:'CREAM, AUGMENTED'
                },
                {english:'CRYSTAL',arabic:'CRYSTAL'
                },
                {english:'DISC',arabic:'DISC'
                },
                {english:'DOUCHE',arabic:'DOUCHE'
                },
                {english:'DRESSING',arabic:'DRESSING'
                },
                {english:'ELIXIR',arabic:'ELIXIR'
                },
                {english:'EMULSION',arabic:'EMULSION'
                },
                {english:'ENEMA',arabic:'ENEMA'
                },
                {english:'EXTRACT',arabic:'EXTRACT'
                },
                {english:'FIBER, EXTENDED RELEASE',arabic:'FIBER, EXTENDED RELEASE'
                },
                {english:'FILM',arabic:'FILM'
                },
                {english:'FILM, EXTENDED RELEASE',arabic:'FILM, EXTENDED RELEASE'
                },
                {english:'FILM, SOLUBLE',arabic:'FILM, SOLUBLE'
                },
                {english:'FOR SOLUTION',arabic:'FOR SOLUTION'
                },
                {english:'FOR SUSPENSION',arabic:'FOR SUSPENSION'
                },
                {english:'FOR SUSPENSION, EXTENDED RELEASE',arabic:'FOR SUSPENSION, EXTENDED RELEASE'
                },
                {english:'GAS',arabic:'GAS'
                },
                {english:'GEL',arabic:'GEL'
                },
                {english:'GEL, METERED',arabic:'GEL, METERED'
                },
                {english:'GLOBULE',arabic:'GLOBULE'
                },
                {english:'GRANULE',arabic:'GRANULE'
                },
                {english:'GRANULE, DELAYED RELEASE',arabic:'GRANULE, DELAYED RELEASE'
                },
                {english:'GRANULE, FOR SOLUTION',arabic:'GRANULE, FOR SOLUTION'
                },
                {english:'GRANULE, FOR SUSPENSION',arabic:'GRANULE, FOR SUSPENSION'
                },
                {english:'GRANULE, FOR SUSPENSION, EXTENDED RELEASE',arabic:'GRANULE, FOR SUSPENSION, EXTENDED RELEASE'
                },
                {english:'GUM, CHEWING',arabic:'GUM, CHEWING'
                },
                {english:'IMPLANT',arabic:'IMPLANT'
                },
                {english:'INHALANT',arabic:'INHALANT'
                },
                {english:'INJECTABLE FOAM',arabic:'INJECTABLE FOAM'
                },
                {english:'INJECTABLE, LIPOSOMAL',arabic:'INJECTABLE, LIPOSOMAL'
                },
                {english:'INJECTION',arabic:'INJECTION'
                },
                {english:'INJECTION, EMULSION',arabic:'INJECTION, EMULSION'
                },
                {english:'INJECTION, LIPID COMPLEX',arabic:'INJECTION, LIPID COMPLEX'
                },
                {english:'INJECTION, POWDER, FOR SOLUTION',arabic:'INJECTION, POWDER, FOR SOLUTION'
                },
                {english:'INJECTION, POWDER, FOR SUSPENSION',arabic:'INJECTION, POWDER, FOR SUSPENSION'
                },
                {english:'INJECTION, POWDER, FOR SUSPENSION, EXTENDED RELEASE',arabic:'INJECTION, POWDER, FOR SUSPENSION, EXTENDED RELEASE'
                },
                {english:'INJECTION, POWDER, LYOPHILIZED, FOR LIPOSOMAL SUSPENSION',arabic:'INJECTION, POWDER, LYOPHILIZED, FOR LIPOSOMAL SUSPENSION'
                },
                {english:'INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION',arabic:'INJECTION, POWDER, LYOPHILIZED, FOR SOLUTION'
                },
                {english:'INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION',arabic:'INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION'
                },
                {english:'INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION, EXTENDED RELEASE',arabic:'INJECTION, POWDER, LYOPHILIZED, FOR SUSPENSION, EXTENDED RELEASE'
                },
                {english:'INJECTION, SOLUTION',arabic:'INJECTION, SOLUTION'
                },
                {english:'INJECTION, SOLUTION, CONCENTRATE',arabic:'INJECTION, SOLUTION, CONCENTRATE'
                },
                {english:'INJECTION, SUSPENSION',arabic:'INJECTION, SUSPENSION'
                },
                {english:'INJECTION, SUSPENSION, EXTENDED RELEASE',arabic:'INJECTION, SUSPENSION, EXTENDED RELEASE'
                },
                {english:'INJECTION, SUSPENSION, LIPOSOMAL',arabic:'INJECTION, SUSPENSION, LIPOSOMAL'
                },
                {english:'INJECTION, SUSPENSION, SONICATED',arabic:'INJECTION, SUSPENSION, SONICATED'
                },
                {english:'INSERT',arabic:'INSERT'
                },
                {english:'INSERT, EXTENDED RELEASE',arabic:'INSERT, EXTENDED RELEASE'
                },
                {english:'INTRAUTERINE DEVICE',arabic:'INTRAUTERINE DEVICE'
                },
                {english:'IRRIGANT',arabic:'IRRIGANT'
                },
                {english:'JELLY',arabic:'JELLY'
                },
                {english:'KIT',arabic:'KIT'
                },
                {english:'LINIMENT',arabic:'LINIMENT'
                },
                {english:'LIPSTICK',arabic:'LIPSTICK'
                },
                {english:'LIQUID',arabic:'LIQUID'
                },
                {english:'LIQUID, EXTENDED RELEASE',arabic:'LIQUID, EXTENDED RELEASE'
                },
                {english:'LOTION',arabic:'LOTION'
                },
                {english:'LOTION, AUGMENTED',arabic:'LOTION, AUGMENTED'
                },
                {english:'LOTION/SHAMPOO',arabic:'LOTION/SHAMPOO'
                },
                {english:'LOZENGE',arabic:'LOZENGE'
                },
                {english:'MOUTHWASH',arabic:'MOUTHWASH'
                },
                {english:'NOT APPLICABLE',arabic:'NOT APPLICABLE'
                },
                {english:'OIL',arabic:'OIL'
                },
                {english:'OINTMENT',arabic:'OINTMENT'
                },
                {english:'OINTMENT, AUGMENTED',arabic:'OINTMENT, AUGMENTED'
                },
                {english:'PASTE',arabic:'PASTE'
                },
                {english:'PASTE, DENTIFRICE',arabic:'PASTE, DENTIFRICE'
                },
                {english:'PASTILLE',arabic:'PASTILLE'
                },
                {english:'PATCH',arabic:'PATCH'
                },
                {english:'PATCH, EXTENDED RELEASE',arabic:'PATCH, EXTENDED RELEASE'
                },
                {english:'PATCH, EXTENDED RELEASE, ELECTRICALLY CONTROLLED',arabic:'PATCH, EXTENDED RELEASE, ELECTRICALLY CONTROLLED'
                },
                {english:'PELLET',arabic:'PELLET'
                },
                {english:'PELLET, IMPLANTABLE',arabic:'PELLET, IMPLANTABLE'
                },
                {english:'PELLETS, COATED, EXTENDED RELEASE',arabic:'PELLETS, COATED, EXTENDED RELEASE'
                },
                {english:'PILL',arabic:'PILL'
                },
                {english:'PLASTER',arabic:'PLASTER'
                },
                {english:'POULTICE',arabic:'POULTICE'
                },
                {english:'POWDER',arabic:'POWDER'
                },
                {english:'POWDER, DENTIFRICE',arabic:'POWDER, DENTIFRICE'
                },
                {english:'POWDER, FOR SOLUTION',arabic:'POWDER, FOR SOLUTION'
                },
                {english:'POWDER, FOR SUSPENSION',arabic:'POWDER, FOR SUSPENSION'
                },
                {english:'POWDER, METERED',arabic:'POWDER, METERED'
                },
                {english:'RING',arabic:'RING'
                },
                {english:'RINSE',arabic:'RINSE'
                },
                {english:'SALVE',arabic:'SALVE'
                },
                {english:'SHAMPOO',arabic:'SHAMPOO'
                },
                {english:'SHAMPOO, SUSPENSION',arabic:'SHAMPOO, SUSPENSION'
                },
                {english:'SOAP',arabic:'SOAP'
                },
                {english:'SOLUTION',arabic:'SOLUTION'
                },
                {english:'SOLUTION CONCENTRATE',arabic:'SOLUTION, CONCENTRATE'
                },
                {english:'SOLUTION, FOR SLUSH',arabic:'SOLUTION, FOR SLUSH'
                },
                {english:'SOLUTION GEL FORMING / DROPS',arabic:'SOLUTION, GEL FORMING / DROPS'
                },
                {english:'SOLUTION GEL FORMING, EXTENDED RELEASE',arabic:'SOLUTION, GEL FORMING, EXTENDED RELEASE'
                },
                {english:'SOLUTION/ DROPS',arabic:'SOLUTION/ DROPS'
                },
                {english:'SPONGE',arabic:'SPONGE'
                },
                {english:'SPRAY',arabic:'SPRAY'
                },
                {english:'SPRAY, METERED',arabic:'SPRAY, METERED'
                },
                {english:'SPRAY, SUSPENSION',arabic:'SPRAY, SUSPENSION'
                },
                {english:'STICK',arabic:'STICK'
                },
                {english:'STRIP',arabic:'STRIP'
                },
                {english:'SUPPOSITORY',arabic:'SUPPOSITORY'
                },
                {english:'SUPPOSITORY, EXTENDED RELEASE',arabic:'SUPPOSITORY, EXTENDED RELEASE'
                },
                {english:'SUSPENSION',arabic:'SUSPENSION'
                },
                {english:'SUSPENSION, EXTENDED RELEASE',arabic:'SUSPENSION, EXTENDED RELEASE'
                },
                {english:'SUSPENSION/ DROPS',arabic:'SUSPENSION/ DROPS'
                },
                {english:'SWAB',arabic:'SWAB'
                },
                {english:'SYRUP',arabic:'SYRUP'
                },
                {english:'SYSTEM',arabic:'SYSTEM'
                },
                {english:'TABLET',arabic:'TABLET'
                },
                {english:'TABLET, CHEWABLE',arabic:'TABLET, CHEWABLE'
                },
                {english:'TABLET, CHEWABLE, EXTENDED RELEASE',arabic:'TABLET, CHEWABLE, EXTENDED RELEASE'
                },
                {english:'TABLET, COATED',arabic:'TABLET, COATED'
                },
                {english:'TABLET, COATED PARTICLES',arabic:'TABLET, COATED PARTICLES'
                },
                {english:'TABLET, DELAYED RELEASE',arabic:'TABLET, DELAYED RELEASE'
                },
                {english:'TABLET, DELAYED RELEASE PARTICLES',arabic:'TABLET, DELAYED RELEASE PARTICLES'
                },
                {english:'TABLET, EFFERVESCENT',arabic:'TABLET, EFFERVESCENT'
                },
                {english:'TABLET, EXTENDED RELEASE',arabic:'TABLET, EXTENDED RELEASE'
                },
                {english:'TABLET, FILM COATED',arabic:'TABLET, FILM COATED'
                },
                {english:'TABLET, FILM COATED, EXTENDED RELEASE',arabic:'TABLET, FILM COATED, EXTENDED RELEASE'
                },
                {english:'TABLET, FOR SOLUTION',arabic:'TABLET, FOR SOLUTION'
                },
                {english:'TABLET, FOR SUSPENSION',arabic:'TABLET, FOR SUSPENSION'
                },
                {english:'TABLET, MULTILAYER',arabic:'TABLET, MULTILAYER'
                },
                {english:'TABLET, MULTILAYER, EXTENDED RELEASE',arabic:'TABLET, MULTILAYER, EXTENDED RELEASE'
                },
                {english:'TABLET, ORALLY DISINTEGRATING',arabic:'TABLET, ORALLY DISINTEGRATING'
                },
                {english:'TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE',arabic:'TABLET, ORALLY DISINTEGRATING, DELAYED RELEASE'
                },
                {english:'TABLET, SOLUBLE',arabic:'TABLET, SOLUBLE'
                },
                {english:'TABLET, SUGAR COATED',arabic:'TABLET, SUGAR COATED'
                },
                {english:'TABLET WITH SENSOR',arabic:'TABLET WITH SENSOR'
                },
                {english:'TAMPON',arabic:'TAMPON'
                },
                {english:'TAPE',arabic:'TAPE'
                },
                {english:'TINCTURE',arabic:'TINCTURE'
                },
                {english:'TROCHE',arabic:'TROCHE'
                },
                {english:'WAFER',arabic:'WAFER'
                }
            ],
            periodUnitOptions:[
                {english:'days',arabic:'days'},
                {english:'weeks',arabic:'weeks'},
                {english:'months',arabic:'months'},
                {english:'years',arabic:'years'},
                {english:'life time',arabic:'life time'}
            ],
            strengthUnitOptions:[
                {english:'AU',arabic:'AU'},
                {english:'Amba1U',arabic:'Amba1U'},
                {english:'BAU',arabic:'BAU'},
                {english:'arbU',arabic:'arbU'},
                {english:'CCID_50',arabic:'CCID_50'},
                {english:'CFU',arabic:'CFU'},
                {english:'Ci',arabic:'Ci'},
                {english:'d',arabic:'d'},
                {english:'DagU',arabic:'DagU'},
                {english:'dL',arabic:'dL'},
                {english:'FFU',arabic:'FFU'},
                {english:'g',arabic:'g'},
                {english:'hp_C',arabic:'hp_C'},
                {english:'kp_C',arabic:'kp_C'},
                {english:'hp_M',arabic:'hp_M'},
                {english:'hp_Q',arabic:'hp_Q'},
                {english:'hp_X',arabic:'hp_X'},
                {english:'h',arabic:'h'},
                {english:'iU',arabic:'iU'},
                {english:'kg',arabic:'kg'},
                {english:'Lf',arabic:'Lf'},
                {english:'L',arabic:'L'},
                {english:'uCi',arabic:'uCi'},
                {english:'ug',arabic:'ug'},
                {english:'uL',arabic:'uL'},
                {english:'umol',arabic:'umol'},
                {english:'um',arabic:'um'},
                {english:'mCi',arabic:'mCi'},
                {english:'meq',arabic:'meq'},
                {english:'mg',arabic:'mg'},
                {english:'mL',arabic:'mL'},
                {english:'mm',arabic:'mm'},
                {english:'mmol',arabic:'mmol'},
                {english:'min',arabic:'min'},
                {english:'mol',arabic:'mol'},
                {english:'mo',arabic:'mo'},
                {english:'ng',arabic:'ng'},
                {english:'nmol',arabic:'nmol'},
                {english:'PFU',arabic:'PFU'},
                {english:'PNU',arabic:'PNU'},
                {english:'s',arabic:'s'},
                {english:'cm2',arabic:'cm2'},
                {english:'TCID_50',arabic:'TCID_50'},
                {english:'U',arabic:'U'},
                {english:'USP U',arabic:'USP U'},
                {english:'VP',arabic:'VP'},
                {english:'wk',arabic:'wk'},
                {english:'a',arabic:'a'},
            ],
            doseTypeOptions: [
                { english: 'liquid', arabic: 'liquid' },
                { english: 'tablet', arabic: 'tablet' },
                { english: 'capsules', arabic: 'capsules' },
                { english: 'topical', arabic: 'topical' },
                { english: 'suppositories', arabic: 'suppositories' },
                { english: 'drops', arabic: 'drops' },
                { english: 'inhalers', arabic: 'inhalers' },
                { english: 'injections', arabic: 'injections' },
                { english: 'implants', arabic: 'implants' },
                { english: 'patches', arabic: 'patches' }
            ],
        }
    }
}