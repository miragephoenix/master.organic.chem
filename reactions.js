const reactionDatabase = [
  { 
    reagent: "Na / dry ether", 
    name: "Wurtz Reaction",
    category: "Alkanes",
    tags: ["Hydrocarbon", "Alkyl Halide", "Symmetrical", "Step-up"],
    function: "Alkyl Halide → Alkane (Double Carbons)", 
    example: "$\\ce{2R-X + 2Na ->[dry ether] R-R + 2NaX}$",
    warning: "⚠️ Fails for 3° alkyl halides (Elimination occurs instead).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6324&t=l",
    caption: "Product: Ethane (from Methyl Chloride)",
    notes: ["Used to prepare symmetrical alkanes.", "Methane cannot be prepared this way."]
  },
  { 
    reagent: "R2CuLi (Gilman Reagent)", 
    name: "Corey-House Synthesis",
    category: "Alkanes",
    tags: ["Alkane", "Coupling", "Unsymmetrical", "Gilman"],
    function: "Alkyl Halide + R2CuLi → Alkane", 
    example: "$\\ce{R2CuLi + R'-X -> R-R' + RCu + LiX}$",
    warning: "⚠️ Better than Wurtz for unsymmetrical alkanes.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6334&t=l",
    caption: "Product: Propane",
    notes: ["Works with 1°, 2°, and even aryl/vinyl halides.", "Highly efficient for making long chains."]
  },
  { 
    reagent: "Zn-Hg / conc. HCl", 
    name: "Clemmensen Reduction",
    category: "Reduction",
    tags: ["Carbonyl", "Alkane", "Acidic", "Deoxygenation"],
    function: "C=O (Carbonyl) → CH2 (Alkane)", 
    example: "$\\ce{R-CO-R ->[Zn-Hg][HCl] R-CH2-R}$",
    warning: "⚠️ Avoid if the molecule has acid-sensitive groups like -OH.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10340&t=l",
    caption: "Product: Propane (from Acetone)",
    notes: ["Mechanism involves zinc carbenoids.", "Best for ketones that are stable in acid."]
  },
  { 
    reagent: "NH2NH2 / KOH / Ethylene Glycol", 
    name: "Wolff-Kishner Reduction",
    category: "Reduction",
    tags: ["Carbonyl", "Alkane", "Basic", "Hydrazine"],
    function: "C=O (Carbonyl) → CH2 (Alkane)", 
    example: "$\\ce{R-CO-R ->[NH2NH2][KOH, \Delta] R-CH2-R + N2}$",
    warning: "⚠️ Avoid if the molecule has base-sensitive groups.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10340&t=l",
    caption: "Product: Propane",
    notes: ["The 'Base' version of Clemmensen.", "High temperature is required."]
  },
  { 
    reagent: "CHCl3 + aq. NaOH", 
    name: "Reimer-Tiemann Reaction",
    category: "Phenols",
    tags: ["Phenol", "Aldehyde", "Carbene", "Naming"],
    function: "Phenol → Salicylaldehyde", 
    example: "$\\ce{C6H5OH + CHCl3 + 3NaOH -> C6H4(OH)CHO + 3NaCl + 2H2O}$",
    warning: "⚠️ The active electrophile is Dichlorocarbene (:CCl2). Watch out for the ortho-product!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6527&t=l",
    caption: "Product: Salicylaldehyde",
    notes: ["If CCl4 is used instead of CHCl3, Salicylic acid is formed.", "Major product is ortho due to H-bonding."]
  },
  { 
    reagent: "CO2 + NaOH (High P & T)", 
    name: "Kolbe's Reaction",
    category: "Phenols",
    tags: ["Phenol", "Carboxylic Acid", "Aspirin"],
    function: "Phenol → Salicylic Acid", 
    example: "$\\ce{C6H5OH ->[NaOH] C6H5ONa ->[CO2, \Delta, P][H+] C6H4(OH)COOH}$",
    warning: "⚠️ Requires high pressure (4-7 atm) to force CO2 to react.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=338&t=l",
    caption: "Product: Salicylic Acid",
    notes: ["Followed by acidification (H+).", "Used industrially to make Aspirin."]
  },
  { 
    reagent: "NaNO2 + HCl (0-5°C)", 
    name: "Diazotization",
    category: "Amines",
    tags: ["Aniline", "Diazonium", "Ice-cold"],
    function: "Aniline → Benzene Diazonium Chloride", 
    example: "$\\ce{C6H5NH2 ->[NaNO2 + HCl][0-5 ^oC] C6H5N2+Cl-}$",
    warning: "⚠️ Temperature must be below 5°C. If it gets warm, Phenol is formed instead!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=11162&t=l",
    caption: "Product: Benzene Diazonium Chloride",
    notes: ["The diazonium salt is a 'gateway' to Chlorobenzene, Iodobenzene, etc.", "Crucial for Sandmeyer and Gattermann reactions."]
  },
  { 
    reagent: "Br2 + NaOH (or NaOBr)", 
    name: "Hoffmann Bromamide Degradation",
    category: "Amines",
    tags: ["Amide", "Amine", "Step-down", "Nitrene"],
    function: "Amide → 1° Amine (One less Carbon)", 
    example: "$\\ce{R-CONH2 + Br2 + 4NaOH -> R-NH2 + Na2CO3 + 2NaBr + 2H2O}$",
    warning: "⚠️ The carbon chain shortens! It's a 'Step-down' reaction. Intermediate is Nitrene.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6328&t=l",
    caption: "Product: Methylamine",
    notes: ["Only for primary amides.", "R-NH2 is the product, the C=O group is lost as carbonate."]
  },
  { 
    reagent: "C6H5SO2Cl", 
    name: "Hinsberg Reagent Test",
    category: "Tests",
    tags: ["Amine", "Identification", "Hinsberg"],
    function: "Distinguish 1°, 2°, 3° Amines", 
    example: "$\\ce{R-NH2 + C6H5SO2Cl -> C6H5SO2NHR}$ (Soluble in NaOH)",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7394&t=l",
    caption: "Reagent: Benzenesulphonyl chloride",
    notes: ["Used to separate a mixture of amines.", "The reagent is Benzenesulphonyl chloride."]
  },
  { 
    reagent: "NaNO2 + HCl / CuCl", 
    name: "Sandmeyer Reaction",
    category: "Amines",
    tags: ["Diazonium", "Chlorobenzene", "Copper"],
    function: "Diazonium Salt → Chlorobenzene", 
    example: "$\\ce{C6H5N2+Cl- ->[CuCl/HCl] C6H5Cl + N2}$",
    warning: "⚠️ If you use Cu powder instead of CuCl, it's called the Gattermann Reaction.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7285&t=l",
    caption: "Product: Chlorobenzene",
    notes: ["Better yield than Gattermann.", "Can be used to introduce Cl, Br, or CN into the ring."]
  },
  { 
    reagent: "FeCl3 (Neutral)", 
    name: "Ferric Chloride Test",
    category: "Tests",
    tags: ["Phenol", "Enol", "Violet"],
    function: "Phenol/Enol → Violet Coloration", 
    example: "$\\ce{6C6H5OH + Fe^3+ -> [Fe(OC6H5)6]^3- + 6H+}$",
    warning: "⚠️ Only works with neutral FeCl3. If it's acidic, the color might not appear.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=996&t=l",
    caption: "Target: Phenol",
    notes: ["Used to distinguish Phenol from Alcohols.", "Forms a complex: [Fe(OC6H5)6]^3-."]
  },
  { 
    reagent: "I2 + NaOH (Warm)", 
    name: "Iodoform Test",
    category: "Tests",
    tags: ["Methyl Ketone", "Yellow ppt", "CHI3"],
    function: "Methyl Ketones/Alcohols → Yellow ppt", 
    example: "$\\ce{R-CO-CH3 ->[I2][NaOH] CHI3 v + R-COONa}$",
    warning: "⚠️ Positive for Ethanol, Propan-2-ol, Acetone, and Acetaldehyde.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6374&t=l",
    caption: "Product: Iodoform (Yellow Precipitate)",
    notes: ["Yellow precipitate is CHI3.", "Doesn't work for Methanol or 3-pentanone."]
  },
  { 
    reagent: "Na (Metal)", 
    name: "Sodium Metal Test",
    category: "Tests",
    tags: ["Active Hydrogen", "Alcohol", "Acid"],
    function: "Active H → H2 Gas", 
    example: "$\\ce{2R-OH + 2Na -> 2R-ONa + H2 ^}$",
    warning: "⚠️ Dangerous! Reacts violently with moisture. Don't use for wet samples.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=702&t=l",
    caption: "Example Reactant: Propanol",
    notes: ["Tests for any acidic hydrogen.", "Bubbles of Hydrogen gas confirm the presence of active H."]
  },
  { 
    reagent: "Dilute NaOH", 
    name: "Aldol Condensation",
    category: "Aldehydes",
    tags: ["Alpha-Hydrogen", "Enolate", "Beta-hydroxy"],
    function: "Aldehyde/Ketone → Beta-Hydroxy Carbonyl", 
    example: "$\\ce{2CH3CHO ->[dil. NaOH] CH3-CH(OH)-CH2-CHO}$",
    warning: "⚠️ Requires at least one Alpha-Hydrogen!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8105&t=l",
    caption: "Product: 3-Hydroxybutanal (Aldol)",
    notes: ["Intermediate is an Enolate ion.", "On heating, it loses water to give an unsaturated product."]
  },
  { 
    reagent: "Conc. NaOH (50%)", 
    name: "Cannizzaro Reaction",
    category: "Aldehydes",
    tags: ["No Alpha-Hydrogen", "Redox", "Disproportionation"],
    function: "Aldehyde → Alcohol + Carboxylic Acid Salt", 
    example: "$\\ce{2HCHO ->[conc. NaOH] CH3OH + HCOONa}$",
    warning: "⚠️ Only for Aldehydes with NO Alpha-Hydrogen.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=439&t=l",
    caption: "Product: Methanol (Red. Product)",
    notes: ["Disproportionation reaction.", "One molecule is oxidized, one is reduced."]
  },
  { 
    reagent: "Lindlar's Catalyst", 
    name: "Partial Hydrogenation",
    category: "Alkenes",
    tags: ["Alkyne", "Cis", "Controlled Reduction"],
    function: "Alkyne → Cis-Alkene", 
    example: "$\\ce{R-C#C-R ->[H2, Pd/CaCO3][Quinoline] R-CH=CH-R}$ (Cis)",
    warning: "⚠️ Only gives the CIS isomer.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6331&t=l",
    caption: "Product: Cis-2-butene",
    notes: ["Controlled reduction.", "Quinoline acts as a poison to stop the reaction."]
  },
  { 
    reagent: "Hot Acidic KMnO4", 
    name: "Oxidative Cleavage",
    category: "Oxidation",
    tags: ["Alkene", "Cleavage", "Carboxylic Acid"],
    function: "Alkene → Carboxylic Acid / Ketone", 
    example: "$\\ce{R-CH=CH-R' ->[KMnO4][H+, \Delta] RCOOH + R'COOH}$",
    warning: "⚠️ Very strong oxidative cleavage!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=243&t=l",
    caption: "Product: Benzoic Acid (Example)",
    notes: ["Terminal =CH2 becomes CO2.", "Internal -CH= becomes -COOH."]
  },
  { 
    reagent: "NaNH2 (2 equivalents)", 
    name: "Dehydrohalogenation",
    category: "Alkynes",
    tags: ["Elimination", "Alkyne", "Vicinal Dihalide"],
    function: "Vicinal Dihalide → Alkyne", 
    example: "$\\ce{R-CH(X)-CH2(X) ->[2 NaNH2] R-C#CH}$",
    warning: "⚠️ Stronger base than alc. KOH.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6326&t=l",
    caption: "Product: Propyne",
    notes: ["Used to 'Step-up' to an alkyne.", "Commonly used in conversion sequences."]
  },
  { 
    reagent: "Acidic Strength Orders", 
    name: "GOC Concept",
    category: "Theory",
    tags: ["Acidity", "Stability", "Resonance"],
    function: "Comparing Stability of Conjugate Bases", 
    warning: "⚠️ Remember: -I and -M groups increase acidity.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=14909&t=l",
    caption: "Example: Picric Acid (Highly acidic)",
    notes: [
      "Picric Acid > Formic Acid > Benzoic Acid > Acetic Acid",
      "Phenol is more acidic than Alcohols due to resonance.",
      "Ortho-effect: Substituted benzoic acids are usually stronger."
    ]
  },
  { 
    reagent: "Huckel's Rule (4n + 2)", 
    name: "Aromaticity Test",
    category: "Theory",
    tags: ["Aromatic", "Pi-electrons", "Conjugation"],
    function: "Is it Aromatic, Anti-aromatic, or Non-aromatic?", 
    warning: "⚠️ Must be Planar, Cyclic, and fully Conjugated first!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=241&t=l",
    caption: "Example: Benzene (Aromatic)",
    notes: [
      "Aromatic: 4n + 2 pi electrons (2, 6, 10, 14...).",
      "Anti-aromatic: 4n pi electrons (4, 8, 12...).",
      "Non-aromatic: If planarity/conjugation fails."
    ]
  },
  {
    name: "Kolbe's Reaction",
    reagent: "NaOH + CO2",
    category: "Phenols",
    tags: ["Phenol", "Carboxylic Acid", "Substitution"],
    function: "Phenol to Salicylic Acid",
    example: "\\(\\ce{C6H5OH ->[NaOH][CO2, 400K][H+] C6H4(OH)COOH}\\)",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=338&t=l",
    caption: "Product: Salicylic Acid (Major)",
    notes: ["Ortho isomer is major due to H-bonding", "Requires high pressure"]
  },
  {
    name: "Reimer-Tiemann Reaction",
    reagent: "CHCl3 + aq. NaOH",
    category: "Phenols",
    tags: ["Phenol", "Aldehyde", "Naming"],
    function: "Phenol to Salicylaldehyde",
    example: "\\(\\ce{C6H5OH ->[CHCl3][NaOH] C6H4(OH)CHO}\\)",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6527&t=l",
    caption: "Product: Salicylaldehyde",
    notes: ["Intermediate is Dichlorocarbene (:CCl2)", "Ortho is major"]
  },
  {
    name: "Williamson Ether Synthesis",
    reagent: "RX + R'ONa",
    category: "Ethers",
    tags: ["Ether", "Substitution", "SN2"],
    function: "Alkyl Halide to Ether",
    example: "\\(\\ce{R-X + R'-ONa -> R-O-R' + NaX}\\)",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=3283&t=l",
    caption: "Product Example: Diethyl Ether",
    notes: ["Follows SN2 mechanism", "Best with primary (1°) alkyl halides"]
  },
  {
    name: "Hydroboration-Oxidation",
    reagent: "B2H6 / H2O2, OH-",
    category: "Alcohols",
    tags: ["Alcohol", "Alkene", "Addition"],
    function: "Alkene to Alcohol (Anti-Mark)",
    example: "\\(\\ce{R-CH=CH2 ->[B2H6][H2O2/OH-] R-CH2CH2OH}\\)",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=702&t=l",
    caption: "Product: Propan-1-ol (from Propene)",
    notes: ["Anti-Markovnikov addition of water", "Syn-addition mechanism"]
  },
  {
    name: "Dow's Process",
    reagent: "NaOH (623K, 300 atm)",
    category: "Phenols",
    tags: ["Phenol", "Aromatic", "Industrial"],
    function: "Chlorobenzene to Phenol",
    example: "\\(\\ce{C6H5Cl ->[NaOH, 623K][300 atm] C6H5ONa ->[H+] C6H5OH}\\)",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=996&t=l",
    caption: "Product: Phenol",
    notes: ["Benzyne intermediate is NOT formed here", "Drastic conditions required"]
  }
];

const ncertHaloData = [
  {
    name: "Darzen's Process",
    reagent: "SOCl2 (Thionyl Chloride)",
    category: "Haloalkanes",
    tags: ["Alcohol", "Haloalkane", "Purity"],
    function: "Alcohol → Pure Alkyl Chloride",
    example: "\\(\\ce{R-OH + SOCl2 -> R-Cl + SO2 ^ + HCl ^}\\)",
    warning: "⚠️ Best method because gaseous by-products (SO2, HCl) escape.",
    diagram: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Reaction_of_alcohol_with_thionyl_chloride.png/300px-Reaction_of_alcohol_with_thionyl_chloride.png",
    notes: ["Leaves behind pure alkyl halide.", "NCERT Priority."]
  },
  {
    name: "Swarts Reaction",
    reagent: "AgF / Hg2F2 / CoF2 / SbF3",
    category: "Haloalkanes",
    tags: ["Naming", "Fluoride", "Halogen Exchange"],
    function: "Alkyl Bromide/Chloride → Alkyl Fluoride",
    example: "\\(\\ce{CH3-Br + AgF -> CH3-F + AgBr}\\)",
    warning: "⚠️ Specifically used for Fluoride synthesis (others are too violent).",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xNq4u5hP_8f_m9m5v1Gj7E_0Z-F_l7Z2w&s",
    notes: ["Metallic fluorides are required.", "Reaction involves Halogen Exchange."]
  },
  {
    name: "Finkelstein Reaction",
    reagent: "NaI + Dry Acetone",
    category: "Haloalkanes",
    tags: ["Naming", "Halogen Exchange", "Iodide"],
    function: "R-Cl/Br → Alkyl Iodide",
    example: "\\(\\ce{R-X + NaI ->[Acetone] R-I + NaX v}\\)",
    warning: "⚠️ Acetone precipitates NaX, pushing the reaction forward (Le Chatelier).",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-m_W77n6YF_v9Y-v1W5Gj7E_0Z-F_l7Z2w&s",
    notes: ["Follows SN2 mechanism.", "Yields are high due to precipitation."]
  },
  {
    name: "Cyanide Substitution (KCN)",
    reagent: "KCN (Ethanolic)",
    category: "Haloalkanes",
    tags: ["Ambident", "Nitrile", "Step-up"],
    function: "Alkyl Halide → Alkyl Cyanide",
    example: "\\(\\ce{R-X + KCN -> R-CN + KX}\\)",
    warning: "⚠️ KCN is ionic; C-C bond is more stable than C-N bond.",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xNq4u5hP_8f_m9m5v1Gj7E_0Z-F_l7Z2w&s",
    notes: ["Increases carbon chain by one.", "Product is a Cyanide/Nitrile."]
  },
  {
    name: "Isocyanide Formation (AgCN)",
    reagent: "AgCN",
    category: "Haloalkanes",
    tags: ["Ambident", "Isocyanide"],
    function: "Alkyl Halide → Isocyanide",
    example: "\\(\\ce{R-X + AgCN -> R-NC + AgX}\\)",
    warning: "⚠️ AgCN is covalent; only Nitrogen has a lone pair free to attack.",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xNq4u5hP_8f_m9m5v1Gj7E_0Z-F_l7Z2w&s",
    notes: ["Forms foul-smelling isocyanides.", "Crucial NCERT Distinction."]
  },
  {
    name: "Nitroalkane Prep (AgNO2)",
    reagent: "AgNO2",
    category: "Haloalkanes",
    tags: ["Ambident", "Nitro"],
    function: "Alkyl Halide → Nitroalkane",
    example: "\\(\\ce{R-X + AgNO2 -> R-NO2 + AgX}\\)",
    warning: "⚠️ N-attack occurs because Ag-O bond is covalent.",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-m_W77n6YF_v9Y-v1W5Gj7E_0Z-F_l7Z2w&s",
    notes: ["Product is Nitroalkane.", "N is the donor atom."]
  },
  {
    name: "Wurtz-Fittig Reaction",
    reagent: "2Na / Dry Ether",
    category: "Haloarenes",
    tags: ["Naming", "Alkylbenzene", "Coupling"],
    function: "Aryl Halide + Alkyl Halide → Alkylbenzene",
    example: "\\(\\ce{Ar-X + R-X + 2Na ->[dry ether] Ar-R + 2NaX}\\)",
    warning: "⚠️ Mixed coupling; used to add an alkyl group to a benzene ring.",
    diagram: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xNq4u5hP_8f_m9m5v1Gj7E_0Z-F_l7Z2w&s",
    notes: ["Example: Chlorobenzene + Methyl Chloride → Toluene."]
  }
];

// CLEANING LOGIC: Checks both hardcoded DB and Firebase to prevent duplicates
db.ref('custom_reactions').once('value', (snapshot) => {
    const firebaseData = snapshot.val() || {};
    const firebaseNames = Object.values(firebaseData).map(r => r.name.toLowerCase());
    const jsNames = reactionDatabase.map(r => r.name.toLowerCase());

    ncertHaloData.forEach(r => {
        if (!firebaseNames.includes(r.name.toLowerCase()) && !jsNames.includes(r.name.toLowerCase())) {
            db.ref('custom_reactions').push(r);
            console.log(`✅ Successfully added: ${r.name}`);
        } else {
            console.log(`⏭️ Skipped duplicate: ${r.name}`);
        }
    });
});

