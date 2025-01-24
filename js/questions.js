// Questions array
const questions = [
    {
        "numb": 101,
        "question": "Who was the founder of the creation of the phagocytic theory of immunity?",
        "answer": "Mechnikov I.I.",
        "options": [
            "Mechnikov I.I.",
            "Koch R.",
            "Pasteur L.",
            "Ibn Sina",
            "Lister D."
        ]
    },
    {
        "numb": 102,
        "question": "Who firstly introduced the principle of \"treating safely, quickly and pleasantly?",
        "answer": "Asclepiades",
        "options": [
            "Asclepiades",
            "Hippocrates",
            "Avicenna",
            "Garvey",
            "Galen"
        ]
    },
    {
        "numb": 103,
        "question": "Who was the founnder of antiseptics?",
        "answer": "D. Lister",
        "options": [
            "I. Zemmelweis",
            "N.I.Pirogov",
            "Paracelsus",
            "Hippocrates",
            "D. Lister"
        ]
    },
    {
        "numb": 104,
        "question": "Who was the founder of asepsis?",
        "answer": "Ambru az Pare",
        "options": [
            "Ambru az Pare",
            "Paracelsus",
            "E. Bergman",
            "J. Deni",
            "Hippocrates"
        ]
    },
    {
        "numb": 105,
        "question": "Choose which of the operations was the most ancient in the history of mankind?",
        "answer": "cesarean section",
        "options": [
            "heart transplant",
            "cesarean section",
            "lobotomy",
            "amputation",
            "appendectomy"
        ]
    },
    {
        "numb": 106,
        "question": "How were called people who carried out mummification in Ancient Egypt?",
        "answer": "tarikhevts",
        "options": [
            "canopachia",
            "nurse",
            "surgeon",
            "the priests",
            "tarikhevts"
        ]
    },
    {
        "numb": 107,
        "question": "Choose which sources do not relate to the study of the history of healing in Ancient Greece:",
        "answer": "the works of Martial",
        "options": [
            "\"Prognostics\"",
            "the works of Martial",
            "\"Epidemics\"",
            "\"Odyssey\"",
            "the Hippocratic Collection"
        ]
    },
    {
        "numb": 108,
        "question": "Choose the work of Hippocrates, in which describes the causes of the disease primarily in the human environment:",
        "answer": "A treatise \"On air, water and places\"",
        "options": [
            "\"Odyssey\"",
            "\"Prognostics\"",
            "A treatise \"On air, water and places\"",
            "the works of Martial",
            "\"Epidemics\""
        ]
    },
    {
        "numb": 109,
        "question": "What is asepsis?",
        "answer": "a method of preventing wound infection by preliminary destruction of microbes",
        "options": [
            "a method of surgery",
            "a method of preventing wound infection by preliminary destruction of microbes",
            "a set of techniques for mechanical action",
            "a method of anesthesia",
            "thermal effects on animal organisms"
        ]
    },
    {
        "numb": 110,
        "question": "Which one is inccorect answer for the statement \"Asepsis is achieved by\"?",
        "answer": "treatment of the source of infection",
        "options": [
            "carrying out hygienic measures",
            "carrying out special sanitary organizational measures",
            "sterilization",
            "treatment of the source of infection",
            "disinfection"
        ]
    },
    {
        "numb": 111,
        "question": "All participants in the operation unit must be in:",
        "answer": "sterile clothes and a mask",
        "options": [
            "it does not matter",
            "sterile clothes",
            "a mask",
            "sterile clothes and a mask",
            "clean clothes"
        ]
    },
    {
        "numb": 112,
        "question": "Which mode is used to sterilize surgical underwear?",
        "answer": "132C - 2.0 atm - 20 min",
        "options": [
            "132C - 2.0 atm - 20 min",
            "180C - 60 min",
            "180C - 90 min",
            "120C - 1.1 atm - 45 min",
            "160C - 180 min"
        ]
    },
    {
        "numb": 113,
        "question": "Which mode is used to sterilize rubber items and plastics?",
        "answer": "120C - 1.1 atm - 45 min",
        "options": [
            "132C - 2.0 atm - 20 min",
            "180C - 60 min",
            "160C - 180 min",
            "120C - 1.1 atm - 45 min",
            "180C - 90 min"
        ]
    },
    {
        "numb": 114,
        "question": "What is the time of chemical sterilization of instruments in a 6% solution of hydrogen peroxide at room temperature?",
        "answer": "6 hours",
        "options": [
            "3 hours",
            "2 hours",
            "1 hour",
            "6 hours",
            "40 min"
        ]
    },
    {
        "numb": 115,
        "question": "The endogenous pathway of infection into the wound is",
        "answer": "lymphogenic",
        "options": [
            "lymphogenic",
            "contact",
            "airborne",
            "hemogenic",
            "air-dust"
        ]
    },
    {
        "numb": 116,
        "question": "How often are air sowings produced in the operation unit?",
        "answer": "1 time per month",
        "options": [
            "4 times a month",
            "1 time in 3 months",
            "1 time per week",
            "1 time per month",
            "1 time in 2 months"
        ]
    },
    {
        "numb": 117,
        "question": "Which sterilization mode should be for the endoscopic equipment?",
        "answer": "in a 6% solution of hydrogen peroxide 360 min",
        "options": [
            "in a 3% chloramine solution for 30 min",
            "in a 10% solution of hydrogen peroxide for 60 min",
            "in a 6% solution of hydrogen peroxide 360 min",
            "in a 6% solution of hydrogen peroxide 180 min",
            "in 70% alcohol for 10 min"
        ]
    },
    {
        "numb": 118,
        "question": "What is the duration of disinfection by boiling in distilled water?",
        "answer": "30 min",
        "options": [
            "45 min",
            "30 min",
            "60 min",
            "25 min",
            "15 min"
        ]
    },
    {
        "numb": 119,
        "question": "The duration of hand treatment with 0,5% ammonia solution in each of the 2 basins according to the Spasokukotsky-Kochergin method is:",
        "answer": "3 min",
        "options": [
            "2 min",
            "10 min",
            "4 min",
            "5 min",
            "3 min"
        ]
    },
    {
        "numb": 120,
        "question": "How many minutes are the tools immersed in a cleaning solution during pre-sterilization treatment?",
        "answer": "15 min",
        "options": [
            "45 min",
            "60 min",
            "15 min",
            "10 min",
            "5 min"
        ]
    },
    {
        "numb": 121,
        "question": "The concept of \"antiseptics\" was introduced into medicine by:",
        "answer": "J. Pringle",
        "options": [
            "N.I.Pirogov",
            "I.V. Buyalsky",
            "K. Schimmelbush",
            "J. Pringle",
            "E. Bergmann"
        ]
    },
    {
        "numb": 122,
        "question": "The drainage function of the bandage was studied in detail by:",
        "answer": "M.Ya. Preobrazhensky",
        "options": [
            "R. Trendelenburg",
            "V. Tsege-Manteuffel",
            "M.V. Sklifosovsky",
            "K. Schimmelbusch",
            "M.Ya. Preobrazhensky"
        ]
    },
    {
        "numb": 123,
        "question": "The primary surgical treatment of the wound includes:",
        "answer": "dissection of the wound, removal of foreign bodies, excision of the edges and bottom, hemostasis, drainage",
        "options": [
            "only suturing the wound",
            "cleansing of the wound surface and evacuation of exudate",
            "opening and puncture of ulcers",
            "excision of non-viable tissues only",
            "dissection of the wound, removal of foreign bodies, excision of the edges and bottom, hemostasis, drainage"
        ]
    },
    {
        "numb": 124,
        "question": "The antiseptic effect of proteolytic enzyme preparations on the wound is based on the process:",
        "answer": "lysis of necrotic tissues",
        "options": [
            "stimulation of repair",
            "enhancement of exudation",
            "improvement of rheological properties of blood",
            "stimulation of local immunity",
            "lysis of necrotic tissues"
        ]
    },
    {
        "numb": 125,
        "question": "What kind of solution is used for cold sterilization of dental mirrors?",
        "answer": "6% hydrogen peroxide solution",
        "options": [
            "75% methyl alcohol",
            "6% hydrogen peroxide solution",
            "1% hydrogen peroxide solution",
            "0.5% chloramine solution",
            "45% ethyl alcohol"
        ]
    },
    {
        "numb": 126,
        "question": "The complete destruction of microbes, spores and viruses is called:",
        "answer": "sterilization",
        "options": [
            "deratization",
            "disinsection",
            "sterilization",
            "disinfection",
            "antiseptics"
        ]
    },
    {
        "numb": 127,
        "question": "What does the pre-sterilization treatment provide?",
        "answer": "removal of protein, fatty impurities and medications from the surface",
        "options": [
            "removal of fatty impurities from the surface",
            "removal of protein from the surface",
            "removal of protein, fatty impurities and medications from the surface",
            "removal of spores from the surface",
            "removal of vegetative forms of microorganisms from the surface"
        ]
    },
    {
        "numb": 128,
        "question": "Instruments are sterilized in a glassperlene sterilizer with:",
        "answer": "heated sterile beads",
        "options": [
            "irradiation",
            "chemical indicators",
            "hot steam",
            "dry heat",
            "heated sterile beads"
        ]
    },
    {
        "numb": 129,
        "question": "Which materials are processed in a glassperlene sterilizer?",
        "answer": "endodontic tools",
        "options": [
            "tips",
            "endodontic tools",
            "trays",
            "cotton swabs",
            "suture material"
        ]
    },
    {
        "numb": 130,
        "question": "Duration pre-sterilization treatment, the tools are immersed in a cleaning solution for:",
        "answer": "15 min",
        "options": [
            "15 min",
            "45 min",
            "30 min",
            "60 min",
            "5 min"
        ]
    },
    {
        "numb": 131,
        "question": "When carrying out chemical disinfection, the disinfectant must cover the intruments over:",
        "answer": "at least 1 cm",
        "options": [
            "0.5 cm",
            "the instruments must be completely in solution",
            "at the top",
            "at least 2 cm",
            "at least 1 cm"
        ]
    },
    {
        "numb": 132,
        "question": "The current control of steam sterilization is carried out using:",
        "answer": "control and measuring devices and chemical indicators",
        "options": [
            "physical indicators",
            "biological indicators",
            "vacuum-test",
            "sowing indicator for sterility of samples of sterilized items",
            "control and measuring devices and chemical indicators"
        ]
    },
    {
        "numb": 133,
        "question": "Any bandage begins with the application of:",
        "answer": "circular bandage",
        "options": [
            "creeping bandage",
            "8-shaped bandage",
            "spiral bandage",
            "cruciform bandage",
            "circular bandage"
        ]
    },
    {
        "numb": 134,
        "question": "What type of bandage should be used for the wound in the parietal area?",
        "answer": "sling bandage",
        "options": [
            "T-shaped bandage",
            "sling bandage",
            "spiral bandage",
            "turtle bandage",
            "cruciform bandage"
        ]
    },
    {
        "numb": 135,
        "question": "The converging turtle bandage on the elbow joint begins with the application:",
        "answer": "of the circular bandage below the joint",
        "options": [
            "of the circular bandage through the joint",
            "of the cruciform bandage on the joint area",
            "of the spiral bandage on the forearm",
            "of the circular bandage below the joint",
            "of the circular bandage above the joint"
        ]
    },
    {
        "numb": 136,
        "question": "When applying a circular bandage:",
        "answer": "each subsequent round completely overlaps the previous one",
        "options": [
            "each subsequent round overlaps the previous one by 2/3",
            "the bandage rounds go in a spiral manner without touching each other",
            "the rounds of the bandage go in an oblique direction",
            "the bandage rounds intersect with each other",
            "each subsequent round completely overlaps the previous one"
        ]
    },
    {
        "numb": 137,
        "question": "The sealing of the chest wound is created by a bandage:",
        "answer": "occlusive",
        "options": [
            "occlusive",
            "cotton swab bandage",
            "gypsum",
            "Kerchief",
            "glue"
        ]
    },
    {
        "numb": 138,
        "question": "A special tire for transport immobilization of the collarbone is a tire:",
        "answer": "Kuzminsky",
        "options": [
            "Bogdanova",
            "Dieterich",
            "Kramer",
            "Elansky",
            "Kuzminsky"
        ]
    },
    {
        "numb": 139,
        "question": "In case of the fracture of the scapula, the immobilization is enough with:",
        "answer": "Kerchief bandage",
        "options": [
            "Elansky's tire",
            "Kerchief bandage",
            "Dieterich's tire",
            "laying on the shield",
            "sticky patch"
        ]
    },
    {
        "numb": 140,
        "question": "If one eye is damaged, it is superimposed:",
        "answer": "monocular bandage",
        "options": [
            "\"bridle\" bandage",
            "binocular bandage",
            "monocular bandage",
            "turtle bandage",
            "\"cap\" bandage"
        ]
    },
    {
        "numb": 141,
        "question": "If there is damage in the area of the shoulder joint, a bandage is applied:",
        "answer": "spikelike",
        "options": [
            "Dezo",
            "spikelike",
            "spiral bandage",
            "turtle",
            "8-shaped"
        ]
    },
    {
        "numb": 142,
        "question": "In case of extensive chest injuries, a bandage is applied:",
        "answer": "spiral",
        "options": [
            "cruciform",
            "Dezo",
            "spike like",
            "spiral",
            "occlusal"
        ]
    },
    {
        "numb": 143,
        "question": "For hanging the upper limb most often is used a bandage:",
        "answer": "Kerchief",
        "options": [
            "spike",
            "spiral",
            "T-shaped",
            "returning",
            "Kerchief"
        ]
    },
    {
        "numb": 144,
        "question": "After the dislocation of the shoulder is corrected, you can apply:",
        "answer": "Velpo bandage",
        "options": [
            "turtle bandage",
            "Dezo bandage",
            "8-shaped bandage",
            "spike-shaped bandage on the shoulder joint area",
            "Velpo bandage"
        ]
    },
    {
        "numb": 145,
        "question": "If the blood has a bright red color and beats from the wound in a pulsating stream, then the bleeding is called:",
        "answer": "arterial",
        "options": [
            "capillary",
            "venous",
            "parenchymal",
            "abdominal",
            "arterial"
        ]
    },
    {
        "numb": 146,
        "question": "What is the cause of bleeding?",
        "answer": "vascular injury, neutrophic processes",
        "options": [
            "sepsis",
            "scurvy",
            "damage to the vascular wall as a result of injury",
            "violation of the permeability of the vascular wall",
            "vascular injury, neutrophic processes"
        ]
    },
    {
        "numb": 147,
        "question": "What are the MAIN groups of all methods of stopping bleeding?",
        "answer": "temporary, final",
        "options": [
            "pre-medical, medical",
            "reliable, unreliable",
            "temporary, final",
            "physical, chemical",
            "mechanical, biological"
        ]
    },
    {
        "numb": 148,
        "question": "Hematuria is blood in:",
        "answer": "urine",
        "options": [
            "vomit",
            "inside the abdominal cavity",
            "from nose",
            "from lungs",
            "urine"
        ]
    },
    {
        "numb": 149,
        "question": "What are the common symptoms of bleeding?",
        "answer": "pallor of the skin",
        "options": [
            "leukopenia",
            "high body temperature",
            "rare pulse",
            "pallor of the skin",
            "increased blood pressure"
        ]
    },
    {
        "numb": 150,
        "question": "What Is the cause of late secondary bleeding?",
        "answer": "purulent melting of a blood clot",
        "options": [
            "ligature slipping from a vessel",
            "thrombus ejection from a blood vessel",
            "vascular spasm ",
            "vascular paresis",
            "purulent melting of a blood clot"
        ]
    },
    ];
