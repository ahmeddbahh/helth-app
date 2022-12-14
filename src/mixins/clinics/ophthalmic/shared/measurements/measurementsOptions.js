export default {
    data() {
      return {
        addOptions:[[10,20],[0.00,0.25,0.50,0.75]],
        axisOptions:[[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180],[1,2,3,4,5,6,7,8,9]],
        cylindricalOptions:[['Balance','-','+'],[10,20,30],[1,2,3,4,5,6,7,8,9],[.00,.25,.50,.75]],
        dvaOptions:[[15,20,25,30,40,50,60,70,80,100,200,400,600],['-3','-2','-1','+1','+2','+3','NLP']],
        nvaOptions:[[15,20,25,30,40,50,60,70,80,100,200,400,600],['-3','-2','-1','+1','+2','+3','NLP','Prothesis']],
        prismOptions:[[10,20],['.00','.25','.50','.75'],['In','Out'],[10,20],['.00','.25','.50','.75'],['Up','Down']],
        sphericalOptions:[['Balance','-','+'],[10,20,30],[1,2,3,4,5,6,7,8,9],[.25,.50,.75]],
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ampOptions:[[10,20],[0,1,2,3,4,5,6,7,8,9]],
        hOptions:[[10,20,30,40,50],[0,1,2,3,4,5,6,7,8,9],["HYPER","HYPO","ORTHO"]],
        nraOptions:[[0,1,2,3,4,5,6,7,8,9],[0.00,0.25,0.50,0.75]],
        praOptions:[[0,1,2,3,4,5,6,7,8,9],[0.00,0.25,0.50,0.75]],
        ratioOptions:[["1:1","1:2","1:3","1:4","1:5","1:6"]],
        vergenceOptions:[[10,20,30,40,50],[0,1,2,3,4,5,6,7,8,9],["*"]],
        vOptions:[[10,20],[0,1,2,3,4,5,6,7,8,9],["HYPER","HYPO","ORTHO"]],
        pachOptions:[["+","-"],["1","2","3","4","5","6","7","8","9"]],
        // pachymetryOptions:[["+","-"],["1","2","3","4","5","6","7","8","9"]],
        tensionOptions:[[10,20,30],[0,1,2,3,4,5,6,7,8,9]],
        adjOptions:[[10,20,30],[0,1,2,3,4,5,6,7,8,9]],
        lang:{
            en:{
                measurementsLabels:{
                    od:"O.D.",
                    os:"O.S.",
                    ou:"O.U.",
                    simple:"Simple",
                    advanced:"Advanced",
                    spherical:"Spherical",
                    cylindrical:"Cylindrical",
                    axis:"Axis",
                    prism:"Add",
                    add:"Prism",
                    dva:"DVA",
                    nva:"NVA",
                    aide:"Aide",
                    scale: "Scale",
                    ph:"PH",
                    amp: "Amp.",
                    acaRatio: "AC/A Ratio",
                    nra: "NRA",
                    pra: "PRA",
                    h:"H",
                    v:"V",
                    blur: "Blur",
                    break: "Break",
                    recov: "Recov.",
                    tension:"Tension",
                    pachCor:"Pach. Cor.",
                    adjTn:"ADJ TN",
                },
            },
            ar:{
                measurementsLabels:{
                    od:"O.D.",
                    os:"O.S.",
                    ou:"O.U.",
                    simple:"Simple",
                    advanced:"Advanced",
                    spherical:"Spherical",
                    cylindrical:"Cylindrical",
                    axis:"Axis",
                    prism:"Add",
                    add:"Prism",
                    dva:"DVA",
                    nva:"NVA",
                    aide:"Aide",
                    scale: "Scale",
                    ph:"PH",
                    amp: "Amp.",
                    acaRatio: "AC/A Ratio",
                    h:"H",
                    v:"V",
                    nra: "NRA",
                    pra: "PRA",
                    tension:"Tension",
                    pachCor:"Pach. Cor.",
                    adjTn:"ADJ TN",
                },
            },
        }
      };
    },
  };
  