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
  },
  {
    name: "Darzen's Process",
    reagent: "SOCl2 (Thionyl Chloride)",
    category: "Haloalkanes",
    tags: ["Alcohol", "Haloalkane", "Purity"],
    function: "Alcohol → Pure Alkyl Chloride",
    example: "$\\ce{R-OH + SOCl2 -> R-Cl + SO2 ^ + HCl ^}$",
    warning: "⚠️ Best method because gaseous by-products escape.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=24439&t=l",
    notes: ["Leaves behind pure alkyl halide.", "NCERT Priority."]
  },
  {
    name: "Swarts Reaction",
    reagent: "AgF / Hg2F2 / CoF2",
    category: "Haloalkanes",
    tags: ["Naming", "Fluoride", "Halogen Exchange"],
    function: "R-Cl/Br → Alkyl Fluoride",
    example: "$\\ce{CH3-Br + AgF -> CH3-F + AgBr}$",
    warning: "⚠️ Specifically for Fluorides.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6411&t=l",
    notes: ["Metallic fluorides are required."]
  },
  {
    name: "Finkelstein Reaction",
    reagent: "NaI + Dry Acetone",
    category: "Haloalkanes",
    tags: ["Naming", "Halogen Exchange"],
    function: "R-Cl/Br → Alkyl Iodide",
    example: "$\\ce{R-X + NaI ->[Acetone] R-I + NaX v}$",
    warning: "⚠️ Acetone is used to precipitate NaX.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5234&t=l",
    notes: ["Classic halogen exchange."]
  },
  {
    name: "Cyanide Substitution (KCN)",
    reagent: "KCN (Ethanolic)",
    category: "Haloalkanes",
    tags: ["Ambident", "Nitrile", "Step-up"],
    function: "Alkyl Halide → Alkyl Cyanide",
    example: "$\\ce{R-X + KCN -> R-CN + KX}$",
    warning: "⚠️ KCN is ionic; C-attack is preferred.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=2723951&t=l",
    notes: ["Increases carbon chain."]
  },
  {
    name: "Isocyanide Formation (AgCN)",
    reagent: "AgCN",
    category: "Haloalkanes",
    tags: ["Ambident", "Isocyanide"],
    function: "Alkyl Halide → Isocyanide",
    example: "$\\ce{R-X + AgCN -> R-NC + AgX}$",
    warning: "⚠️ AgCN is covalent; N-attack occurs.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10471&t=l",
    notes: ["Forms foul-smelling isocyanides."]
  },
  {
    name: "Acid-Catalyzed Hydration",
    reagent: "Dilute H2SO4 (H3O+)",
    category: "Alcohols",
    tags: ["Alkene", "Hydration", "Markovnikov"],
    function: "Alkene → Alcohol",
    example: "$\\ce{CH3-CH=CH2 + H2O ->[H+] CH3-CH(OH)-CH3}$",
    warning: "⚠️ Follows Markovnikov's Rule; Carbocation rearrangement possible.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=702&t=l",
    notes: ["Step 1: Protonation to Carbocation.", "Step 2: Nucleophilic attack of H2O."]
  },
  {
    name: "Reduction of Carbonyls",
    reagent: "NaBH4 or LiAlH4",
    category: "Alcohols",
    tags: ["Reduction", "Aldehyde", "Ketone"],
    function: "Aldehyde → 1° Alcohol; Ketone → 2° Alcohol",
    example: "$\\ce{R-CHO ->[NaBH4] R-CH2OH}$",
    warning: "⚠️ NaBH4 is milder; doesn't reduce Acids/Esters.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=439177&t=l",
    notes: ["Catalytic hydrogenation (H2/Ni) also works."]
  },
  {
    name: "Grignard Alcohol Synthesis",
    reagent: "RMgX + Carbonyl",
    category: "Alcohols",
    tags: ["Grignard", "Carbon-Carbon Bond"],
    function: "Aldehyde/Ketone → 1°/2°/3° Alcohols",
    example: "$\\ce{HCHO + RMgX -> R-CH2OH}$",
    warning: "⚠️ Formaldehyde gives 1°, Other Aldehydes give 2°, Ketones give 3°.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23724&t=l",
    notes: ["Followed by hydrolysis (H2O/H+)."]
  },
  {
    name: "Cumene Process",
    reagent: "O2 (Air) + Dilute Acid",
    category: "Phenols",
    tags: ["Industrial", "Oxidation", "Byproduct"],
    function: "Cumene → Phenol + Acetone",
    example: "$\\ce{C6H5-CH(CH3)2 ->[O2][H2O/H+] C6H5OH + CH3COCH3}$",
    warning: "⚠️ Most important industrial method for Phenol.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7406&t=l",
    notes: ["Acetone is a valuable byproduct."]
  },
  {
    name: "Benzene Sulphonic Acid Path",
    reagent: "Oleum + Molten NaOH",
    category: "Phenols",
    tags: ["Sulphonation", "Phenoxide"],
    function: "Benzene → Phenol",
    example: "$\\ce{C6H6 ->[Oleum] C6H5SO3H ->[NaOH][H+] C6H5OH}$",
    warning: "⚠️ Requires high temp for molten NaOH.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6619&t=l",
    notes: ["Sodium salt is acidified at the end."]
  },
  {
    name: "Aspirin Synthesis",
    reagent: "Salicylic Acid + Acetic Anhydride",
    category: "Phenols",
    tags: ["Esterification", "Medicine"],
    function: "Phenol Group Acetylation",
    example: "$\\ce{C6H4(OH)COOH + (CH3CO)2O -> C6H4(OCOCH3)COOH}$",
    warning: "⚠️ Acetylsalicylic acid is the chemical name.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=2244&t=l",
    notes: ["Acetic acid is the byproduct."]
  },
  {
    name: "Lucas Test",
    reagent: "Conc. HCl + Anhydrous ZnCl2",
    category: "Tests",
    tags: ["Identification", "Alcohol", "Turbidity"],
    function: "Distinguish 1°, 2°, 3° Alcohols",
    example: "$\\ce{R-OH + HCl ->[ZnCl2] R-Cl + H2O}$",
    warning: "⚠️ 3°: Instant Turbidity; 2°: 5 mins; 1°: No turbidity at RT.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=24247&t=l",
    notes: ["Based on carbocation stability."]
  },
  {
    name: "Alcohol Dehydration (Temp Trap)",
    reagent: "H2SO4 at 443K vs 413K",
    category: "Alcohols",
    tags: ["Temperature", "Elimination", "Substitution"],
    function: "Alcohol → Alkene (443K) or Ether (413K)",
    example: "$\\ce{2C2H5OH ->[413K] C2H5-O-C2H5}$; $\\ce{C2H5OH ->[443K] CH2=CH2}$",
    warning: "⚠️ Low temp favors SN2 (Ether), High temp favors E1 (Alkene).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=702&t=l",
    notes: ["Primary alcohols only for ether formation."]
  },
  {
    name: "Oxidation with PCC",
    reagent: "Pyridinium Chlorochromate (PCC)",
    category: "Alcohols",
    tags: ["Selective", "Aldehyde"],
    function: "1° Alcohol → Aldehyde (STOPS HERE)",
    example: "$\\ce{R-CH2OH ->[PCC] R-CHO}$",
    warning: "⚠️ Prevents over-oxidation to Carboxylic Acid.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=12313627&t=l",
    notes: ["CrO3 in anhydrous medium also used."]
  },
  {
    name: "Copper Dehydrogenation (573K)",
    reagent: "Cu / 573 K",
    category: "Alcohols",
    tags: ["Dehydrogenation", "3-Degree Trap"],
    function: "1° → Aldehyde; 2° → Ketone; 3° → Alkene",
    example: "$\\ce{(CH3)3C-OH ->[Cu/573K] (CH3)2C=CH2}$",
    warning: "⚠️ 3° alcohols undergo dehydration (NOT oxidation).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23978&t=l",
    notes: ["Vapors passed over heated copper."]
  },
  {
    name: "Phenol Nitration",
    reagent: "Dilute HNO3 vs Conc. HNO3",
    category: "Phenols",
    tags: ["Nitration", "Picric Acid", "Steam Volatile"],
    function: "Phenol → Nitrophenol",
    example: "$\\ce{Phenol + Conc. HNO3 -> 2,4,6-Trinitrophenol}$",
    warning: "⚠️ Conc. HNO3 gives Picric Acid; Dilute gives ortho/para.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6954&t=l",
    notes: ["o-nitrophenol is steam volatile due to intramolecular H-bonding."]
  },
  {
    name: "Bromine Water Test (Phenol)",
    reagent: "Br2 Water",
    category: "Tests",
    tags: ["Identification", "White PPT"],
    function: "Phenol → 2,4,6-Tribromophenol",
    example: "$\\ce{C6H5OH + 3Br2 -> C6H2(OH)Br3 + 3HBr}$",
    warning: "⚠️ Forms a white precipitate.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=4442&t=l",
    notes: ["In CS2 (non-polar), only mono-bromination occurs."]
  },
  {
    name: "Zinc Dust Reduction",
    reagent: "Zinc Dust / Heat",
    category: "Phenols",
    tags: ["Deoxygenation", "Benzene"],
    function: "Phenol → Benzene",
    example: "$\\ce{C6H5OH + Zn -> C6H6 + ZnO}$",
    warning: "⚠️ Simple way to remove the hydroxyl group.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23974&t=l",
    notes: ["Zinc acts as a reducing agent."]
  },
  {
    name: "Oxidation to Benzoquinone",
    reagent: "Na2Cr2O7 / H2SO4",
    category: "Phenols",
    tags: ["Oxidation", "Quinone"],
    function: "Phenol → p-Benzoquinone",
    example: "$\\ce{C6H5OH ->[Na2Cr2O7/H2SO4] O=C6H4=O}$",
    warning: "⚠️ Produces a dark colored mixture in air.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=4650&t=l",
    notes: ["Conjugated diketone formation."]
  },
  {
    name: "Ether Cleavage by HI",
    reagent: "HI (Hydroiodic Acid)",
    category: "Ethers",
    tags: ["Cleavage", "Mechanism"],
    function: "Ether → Alcohol + Alkyl Iodide",
    example: "$\\ce{R-O-R' + HI -> R-I + R'-OH}$",
    warning: "⚠️ Iodine goes to the SMALLER alkyl group (SN2).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=24841&t=l",
    notes: ["If 3° alkyl group is present, it forms 3° Iodide (SN1)."]
  },
  {
    name: "Friedel-Crafts (Anisole)",
    reagent: "CH3Cl / AlCl3",
    category: "Ethers",
    tags: ["Substitution", "Anisole"],
    function: "Alkylation/Acylation of Anisole",
    example: "$\\ce{C6H5OCH3 + CH3Cl ->[AlCl3] p-Methoxy toluene}$",
    warning: "⚠️ Methoxy group is ortho/para directing.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7519&t=l",
    notes: ["Para product is usually major."]
  },
  {
    name: "Phosphorus Halide Reactions",
    reagent: "PCl3 / PCl5 / Red P + X2",
    category: "Haloalkanes",
    tags: ["Alcohol", "Preparation", "Substitution"],
    function: "Alcohol → Alkyl Halide",
    example: "$\\ce{3R-OH + PCl3 -> 3R-Cl + H3PO3}$",
    warning: "⚠️ PCl5 gives POCl3 as a byproduct; PCl3 gives H3PO3.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=24387&t=l",
    notes: ["Red P + Br2/I2 is used for alkyl bromides/iodides.", "Higher yield than using HX."]
  },
  {
    name: "Iodobenzene Synthesis",
    reagent: "KI (Potassium Iodide)",
    category: "Haloalkanes",
    tags: ["Diazonium", "Iodide", "No Catalyst"],
    function: "Diazonium Salt → Iodobenzene",
    example: "$\\ce{C6H5N2+Cl- + KI -> C6H5I + KCl + N2}$",
    warning: "⚠️ Unlike Sandmeyer, this does NOT require Cuprous (Cu) salts.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7285&t=l",
    notes: ["Simple shaking with KI is enough.", "Easiest way to put Iodine on a ring."]
  },
  {
    name: "Zaitsev's Rule (Saytzeff)",
    reagent: "Alcoholic KOH",
    category: "Theory",
    tags: ["Elimination", "Major Product", "Alkene"],
    function: "Determining major alkene in Dehydrohalogenation",
    example: "$\\ce{CH3-CH2-CH(Br)-CH3 ->[alc. KOH] CH3-CH=CH-CH3}$ (Major)",
    warning: "⚠️ The 'more substituted' alkene is the major product.",
    diagram: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Zaitsev_Elimination.png",
    notes: ["The more alkyl groups on the double bond, the more stable the alkene.", "Also applies to alcohol dehydration."]
  },
  {
    name: "Chloroform Oxidation (Phosgene)",
    reagent: "O2 + Light",
    category: "Haloalkanes",
    tags: ["Poison", "Storage", "Chloroform"],
    function: "Formation of Phosgene gas",
    example: "$\\ce{2CHCl3 + O2 ->[light] 2COCl2 + 2HCl}$",
    warning: "⚠️ Phosgene (COCl2) is a deadly poisonous gas.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6371&t=l",
    notes: ["Bottles are filled to the brim and kept dark to prevent air contact.", "1% Ethanol is added to convert phosgene to harmless diethyl carbonate."]
  },
  {
    name: "Phenol from Diazonium Salt",
    reagent: "Warm Water / Dilute Acid",
    category: "Phenols",
    tags: ["Diazonium", "Hydrolysis"],
    function: "Diazonium Salt → Phenol",
    example: "$\\ce{C6H5N2+Cl- + H2O ->[warm] C6H5OH + N2 + HCl}$",
    warning: "⚠️ The solution must be warmed gently.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=996&t=l",
    notes: ["The starting material is Aniline (via Diazotization)."]
  },
  {
    name: "Phenol Acidity (Substituent Effects)",
    reagent: "Electron Withdrawing/Donating Groups",
    category: "Theory",
    tags: ["Acidity", "Inductive Effect", "Resonance"],
    function: "Predicting Acidity of substituted phenols",
    warning: "⚠️ Nitro groups (-NO2) at Ortho/Para increase acidity significantly.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6954&t=l",
    notes: ["p-Nitrophenol > o-Nitrophenol > Phenol > p-Cresol.", "Electron withdrawing groups stabilize the phenoxide ion."]
  },
  {
    name: "Ester Reduction (Commercial)",
    reagent: "H2 / Catalyst (after esterification)",
    category: "Alcohols",
    tags: ["Industrial", "Ester", "Reduction"],
    function: "Carboxylic Acid → Alcohol (via Ester)",
    example: "$\\ce{RCOOH ->[R'OH] RCOOR' ->[H2/Pd] RCH2OH + R'OH}$",
    warning: "⚠️ Used commercially because LiAlH4 is too expensive for industry.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=702&t=l",
    notes: ["Step 1: Esterification. Step 2: Hydrogenation."]
  },
  {
    name: "Rosenmund Reduction",
    reagent: "H2 / Pd-BaSO4 (Lindlar-like)",
    category: "Aldehydes",
    tags: ["Acyl Chloride", "Partial Reduction", "Naming"],
    function: "Acyl Chloride → Aldehyde",
    example: "$\\ce{R-COCl + H2 ->[Pd-BaSO4/S] R-CHO + HCl}$",
    warning: "⚠️ Pd is 'poisoned' with BaSO4 or Sulfur to stop reduction at aldehyde.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=240&t=l",
    notes: ["Used to prepare benzaldehyde and aliphatic aldehydes.", "Formaldehyde cannot be prepared this way."]
  },
  {
    name: "Stephen Reaction",
    reagent: "SnCl2 + HCl",
    category: "Aldehydes",
    tags: ["Nitrile", "Imine", "Naming"],
    function: "Nitrile → Aldehyde",
    example: "$\\ce{R-CN ->[SnCl2 + HCl] R-CH=NH ->[H3O+] R-CHO}$",
    warning: "⚠️ Intermediate is an imine hydrochloride.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=240&t=l",
    notes: ["Followed by hydrolysis.", "Alternative to DIBAL-H."]
  },
  {
    name: "DIBAL-H Reduction",
    reagent: "Diisobutylaluminium Hydride",
    category: "Aldehydes",
    tags: ["Selective", "Nitrile", "Ester"],
    function: "Nitrile/Ester → Aldehyde",
    example: "$\\ce{R-CN ->[DIBAL-H][H2O] R-CHO}$",
    warning: "⚠️ Selective: Does not reduce double bonds or carboxylic acids.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=240&t=l",
    notes: ["Lower temperatures are usually required.", "Very high yield for esters."]
  },
  {
    name: "Etard Reaction",
    reagent: "CrO2Cl2 (Chromyl Chloride)",
    category: "Aldehydes",
    tags: ["Toluene", "Oxidation", "Naming"],
    function: "Toluene → Benzaldehyde",
    example: "$\\ce{C6H5-CH3 ->[CrO2Cl2][CS2] C6H5-CHO}$",
    warning: "⚠️ A brown chromium complex is formed as an intermediate.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=240&t=l",
    notes: ["Specific for converting Methyl group on ring to Aldehyde."]
  },
  {
    name: "Gatterman-Koch Reaction",
    reagent: "CO + HCl / Anhyd. AlCl3",
    category: "Aldehydes",
    tags: ["Benzene", "Naming", "Carbonylation"],
    function: "Benzene → Benzaldehyde",
    example: "$\\ce{C6H6 + CO + HCl ->[AlCl3/CuCl] C6H5-CHO}$",
    warning: "⚠️ Requires high pressure of Carbon Monoxide.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=240&t=l",
    notes: ["Electrophile is effectively [HCO]+."]
  },
  {
    name: "Ketone from Dialkylcadmium",
    reagent: "R2Cd + 2R'COCl",
    category: "Ketones",
    tags: ["Acyl Chloride", "Organometallic"],
    function: "Acyl Chloride → Ketone",
    example: "$\\ce{2R'COCl + R2Cd -> 2R'COR + CdCl2}$",
    warning: "⚠️ Better than Grignard because Cadmium reagents don't react with the product Ketone.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=180&t=l",
    notes: ["R2Cd is prepared from Grignard: 2RMgX + CdCl2."]
  },
  {
    name: "Cyanohydrin Formation",
    reagent: "HCN / OH-",
    category: "Aldehydes",
    tags: ["Addition", "Nitrile", "Step-up"],
    function: "Carbonyl → Cyanohydrin",
    example: "$\\ce{R-CO-R + HCN -> R2C(OH)CN}$",
    warning: "⚠️ Pure HCN is slow; addition of base (OH-) speeds it up by forming CN- ions.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6813&t=l",
    notes: ["Useful for adding a carbon atom to the chain."]
  },
  {
    name: "Bisulphite Adduct",
    reagent: "Saturated NaHSO3",
    category: "Tests",
    tags: ["Purification", "White Crystalline"],
    function: "Purification of Aldehydes",
    example: "$\\ce{R-CHO + NaHSO3 <=> R-CH(OH)SO3Na}$",
    warning: "⚠️ Sterically hindered ketones do not react.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23665763&t=l",
    notes: ["Water-soluble crystalline solid.", "Product can be converted back to carbonyl with acid/alkali."]
  },
  {
    name: "Acetal & Ketal Formation",
    reagent: "Alcohol + Dry HCl gas",
    category: "Aldehydes",
    tags: ["Protection", "Alcohol"],
    function: "Aldehyde/Ketone → Acetal/Ketal",
    example: "$\\ce{RCHO + 2R'OH ->[HCl] RCH(OR')2 + H2O}$",
    warning: "⚠️ Reversible reaction; Dry HCl gas is used to remove water and drive it forward.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=12140&t=l",
    notes: ["Ketones often use Ethylene Glycol to form cyclic ketals."]
  },
  {
    name: "Semicarbazone Formation",
    reagent: "Semicarbazide (NH2NHCONH2)",
    category: "Tests",
    tags: ["Derivatives", "Identification"],
    function: "Carbonyl → Semicarbazone",
    example: "$\\ce{R2C=O + NH2NHCONH2 -> R2C=N-NHCONH2 + H2O}$",
    warning: "⚠️ Only the 'hydrazine' end of semicarbazide is nucleophilic!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6816&t=l",
    notes: ["Solid derivatives used to identify specific liquid carbonyls."]
  },
  {
    name: "Tollens' Test",
    reagent: "Ammoniacal Silver Nitrate",
    category: "Tests",
    tags: ["Silver Mirror", "Aldehyde only"],
    function: "Distinguish Aldehydes from Ketones",
    example: "$\\ce{R-CHO + 2[Ag(NH3)2]+ + 3OH- -> R-COO- + 2Ag v + 2H2O + 4NH3}$",
    warning: "⚠️ Forms a shiny silver mirror on the tube walls.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23954&t=l",
    notes: ["Positive for both aliphatic and aromatic aldehydes."]
  },
  {
    name: "Fehling's Test",
    reagent: "Fehling A (CuSO4) + Fehling B (Rochelle Salt)",
    category: "Tests",
    tags: ["Red PPT", "Aliphatic only"],
    function: "Distinguish Aliphatic Aldehydes",
    example: "$\\ce{R-CHO + 2Cu^2+ + 5OH- -> R-COO- + Cu2O v + 3H2O}$",
    warning: "⚠️ Aromatic aldehydes (like Benzaldehyde) do NOT give this test!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=10330&t=l",
    notes: ["Red precipitate is Cuprous Oxide (Cu2O)."]
  },
  {
    name: "Alkylbenzene Oxidation",
    reagent: "Alkaline KMnO4 / Heat",
    category: "Carboxylic Acids",
    tags: ["Aromatic", "Oxidation"],
    function: "Alkylbenzene → Benzoic Acid",
    example: "$\\ce{Ar-R ->[KMnO4/KOH][\Delta] Ar-COOK ->[H3O+] Ar-COOH}$",
    warning: "⚠️ Works for any alkyl group (1° or 2°) with at least one benzylic hydrogen.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=243&t=l",
    notes: ["Tertiary alkyl groups (no benzylic H) are NOT oxidized."]
  },
  {
    name: "Grignard Acid Synthesis",
    reagent: "Dry Ice (Solid CO2)",
    category: "Carboxylic Acids",
    tags: ["Grignard", "Addition", "Step-up"],
    function: "Grignard → Carboxylic Acid",
    example: "$\\ce{R-MgX + CO2 ->[Dry Ether] R-COOMgX ->[H3O+] R-COOH}$",
    warning: "⚠️ Increases carbon chain length by one.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=176&t=l",
    notes: ["Followed by acidic hydrolysis."]
  },
  {
    name: "Hell-Volhard-Zelinsky (HVZ)",
    reagent: "X2 / Red Phosphorus",
    category: "Carboxylic Acids",
    tags: ["Alpha-Halogenation", "Naming"],
    function: "Alpha-Hydrogen → Halogen",
    example: "$\\ce{R-CH2-COOH ->[X2/Red P][H2O] R-CH(X)-COOH}$",
    warning: "⚠️ Only for acids with Alpha-hydrogens.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=24522&t=l",
    notes: ["X can be Chlorine or Bromine."]
  },
  {
    name: "Decarboxylation",
    reagent: "Soda Lime (NaOH + CaO)",
    category: "Alkanes",
    tags: ["Step-down", "Gas Evolution"],
    function: "Sodium Salt → Alkane",
    example: "$\\ce{R-COONa ->[NaOH, CaO][\Delta] R-H + Na2CO3}$",
    warning: "⚠️ Loses the entire -COONa group as carbonate.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6324&t=l",
    notes: ["Commonly used to shorten the carbon chain."]
  },
  {
    name: "Ester Hydrolysis",
    reagent: "Dilute Acid or Alkali",
    category: "Carboxylic Acids",
    tags: ["Ester", "Saponification"],
    function: "Ester → Acid + Alcohol",
    example: "$\\ce{R-COOR' + H2O <=> R-COOH + R'-OH}$",
    warning: "⚠️ Basic hydrolysis is irreversible and called Saponification.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=176&t=l",
    notes: ["Acid hydrolysis is an equilibrium reaction."]
  },
  {
    name: "Sandmeyer Reaction",
    reagent: "Cu2Cl2/HCl or Cu2Br2/HBr",
    category: "Amines",
    tags: ["Naming", "Haloarene"],
    function: "Diazonium Salt → Chlorobenzene/Bromobenzene",
    example: "$\\ce{Ar-N2+Cl- ->[Cu2X2] Ar-X + N2}$",
    warning: "⚠️ More efficient than Gatterman reaction.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=104934&t=l",
    notes: ["Introduces Cl, Br, or CN into the benzene ring."]
  },
  {
    name: "Balz-Schiemann Reaction",
    reagent: "HBF4 / Heat",
    category: "Amines",
    tags: ["Naming", "Fluorination"],
    function: "Diazonium Salt → Fluorobenzene",
    example: "$\\ce{Ar-N2+Cl- + HBF4 -> Ar-F + BF3 + N2}$",
    warning: "⚠️ Intermediate diazonium fluoroborate is stable at room temp.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=245&t=l",
    notes: ["Best method to prepare Fluorobenzene."]
  },
  {
    name: "Coupling Reaction (Yellow Dye)",
    reagent: "Aniline + Diazonium Salt (pH 4-5)",
    category: "Tests",
    tags: ["Test", "Naming", "Color"],
    function: "Diazonium Salt → p-Aminoazobenzene",
    example: "$\\ce{Ar-N2+Cl- + C6H5NH2 -> Ar-N=N-C6H4NH2}$",
    warning: "⚠️ Forms a bright YELLOW dye.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=104934&t=l",
    notes: ["An electrophilic aromatic substitution reaction."]
  },
  {
    name: "Reduction of Nitro Compounds",
    reagent: "H2/Pd or Sn/HCl or Fe/HCl",
    category: "Amines",
    tags: ["Preparation", "Reduction"],
    function: "Nitrobenzene → Aniline",
    example: "$\\ce{Ar-NO2 ->[Fe/HCl] Ar-NH2}$",
    warning: "⚠️ Fe/HCl is preferred as FeCl2 formed gets hydrolysed to release HCl, requiring only small amounts of acid.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7472&t=l",
    notes: ["Can also be used for aliphatic nitroalkanes."]
  },
  {
    name: "Ammonolysis (Hoffmann's)",
    reagent: "Ethanolic Ammonia (NH3)",
    category: "Amines",
    tags: ["Preparation", "Nucleophilic Substitution"],
    function: "Alkyl Halide → Mixture of Amines",
    example: "$\\ce{R-X ->[NH3] R-NH2 ->[RX] R2NH ->[RX] R3N ->[RX] R4N+X-}$",
    warning: "⚠️ Results in a mixture of 1°, 2°, 3° amines and quaternary salts.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=222&t=l",
    notes: ["Use excess NH3 to get Primary amine as the major product."]
  },
  {
    name: "Reduction of Nitriles",
    reagent: "LiAlH4 or H2 / Ni",
    category: "Amines",
    tags: ["Preparation", "Step-up"],
    function: "Nitrile → 1° Amine",
    example: "$\\ce{R-CN ->[LiAlH4] R-CH2-NH2}$",
    warning: "⚠️ Excellent for 'ascent of series' (adding one carbon to the chain).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=104748&t=l",
    notes: ["Forms a primary amine with one more carbon than the starting halide (if made from KCN)."]
  },
  {
    name: "Gabriel Phthalimide Synthesis",
    reagent: "1. KOH, 2. RX, 3. NaOH(aq)",
    category: "Amines",
    tags: ["Preparation", "Naming", "Pure 1° Amine"],
    function: "Phthalimide → 1° Aliphatic Amine",
    example: "$\\ce{C6H4(CO)2NH ->[KOH][-H2O] C6H4(CO)2NK ->[RX] C6H4(CO)2NR ->[NaOH(aq)] R-NH2}$",
    warning: "⚠️ Aromatic amines (Aniline) CANNOT be prepared this way (Aryl halides don't undergo SN reaction).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=68077&t=l",
    notes: ["Produces very pure primary aliphatic amines."]
  },
  {
    name: "Carbylamine Reaction",
    reagent: "CHCl3 + Ethanolic KOH",
    category: "Tests",
    tags: ["Test", "Naming", "Foul Smell"],
    function: "Test for 1° Amines (Aliphatic/Aromatic)",
    example: "$\\ce{R-NH2 + CHCl3 + 3KOH ->[Heat] R-NC + 3KCl + 3H2O}$",
    warning: "⚠️ Produces extremely FOUL-smelling Isocyanides. 2° and 3° amines do NOT give this test.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6212&t=l",
    notes: ["Also known as the Isocyanide Test."]
  },
  {
    name: "Reaction with Nitrous Acid",
    reagent: "NaNO2 + HCl (In situ HNO2)",
    category: "Amines",
    tags: ["Alcohol formation", "Gas Evolution"],
    function: "Distinguish Aliphatic from Aromatic",
    example: "$\\ce{R-NH2 ->[HNO2] [R-N2+Cl-] ->[H2O] R-OH + N2 ^ + HCl}$",
    warning: "⚠️ Aliphatic diazonium salts are unstable and decompose to release Nitrogen gas (bubbles).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23668&t=l",
    notes: ["Aromatic amines form stable diazonium salts at 0-5°C instead of gas."]
  },
  {
    name: "Acylation of Amines",
    reagent: "Acid Chloride / Anhydride + Pyridine",
    category: "Amines",
    tags: ["Protection", "Amide Formation"],
    function: "Amine → Amide",
    example: "$\\ce{R-NH2 + CH3COCl ->[Pyridine] R-NHCOCH3 + HCl}$",
    warning: "⚠️ Pyridine (base) is added to remove HCl and shift equilibrium forward.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=31268&t=l",
    notes: ["Called 'Benzoylation' if Benzoyl Chloride is used (Schotten-Baumann)."]
  },
  {
    name: "Aniline Bromination",
    reagent: "Bromine Water (Br2/H2O)",
    category: "Amines",
    tags: ["Electrophilic substitution", "White PPT"],
    function: "Aniline → 2,4,6-Tribromoaniline",
    example: "$\\ce{C6H5NH2 + 3Br2 ->[H2O] C6H2(Br)3NH2 + 3HBr}$",
    warning: "⚠️ Forms a White Precipitate immediately due to high reactivity of Aniline.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7442&t=l",
    notes: ["To get monobromo (para), you must first protect -NH2 by acetylation."]
  },
  {
    name: "Aniline Nitration (The Trap)",
    reagent: "Conc. HNO3 + Conc. H2SO4",
    category: "Amines",
    tags: ["Electrophilic substitution", "Meta-product"],
    function: "Direct Nitration of Aniline",
    example: "$\\ce{Aniline ->[HNO3/H2SO4] p(51\\%) + m(47\\%) + o(2\\%)}$",
    warning: "⚠️ Significant meta-product (47%) forms because Aniline gets protonated to meta-directing Anilinium ion!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7472&t=l",
    notes: ["For pure Para-nitroaniline, protect with acetic anhydride first."]
  },
  {
    name: "Aniline Sulphonation",
    reagent: "Conc. H2SO4 / 453-473K",
    category: "Amines",
    tags: ["Zwitterion", "Electrophilic substitution"],
    function: "Aniline → Sulphanilic Acid",
    example: "$\\ce{C6H5NH2 ->[H2SO4] C6H5NH3+HSO4- ->[Heat] NH2-C6H4-SO3H}$",
    warning: "⚠️ Sulphanilic acid exists as a Zwitterion: $^+\\ce{NH3-C6H4-SO3-}$.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=67554&t=l",
    notes: ["Aniline does NOT undergo Friedel-Crafts reaction due to salt formation with AlCl3."]
  },
  {
    name: "Coupling Reaction (Orange Dye)",
    reagent: "Phenol + Diazonium Salt (pH 9-10)",
    category: "Tests",
    tags: ["Test", "Color", "Dye"],
    function: "Diazonium Salt → p-Hydroxyazobenzene",
    example: "$\\ce{Ar-N2+Cl- + C6H5OH ->[OH-] Ar-N=N-C6H4-OH}$",
    warning: "⚠️ Forms a bright ORANGE dye.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=104934&t=l",
    notes: ["Reaction is carried out in basic medium."]
  },
  {
    name: "Basic Strength Theory",
    reagent: "Aqueous Phase (pK_b)",
    category: "Theory",
    tags: ["Basicity", "Inductive Effect", "Solvation"],
    function: "Order of basicity for alkyl amines",
    example: "Ethyl: $\\ce{(C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3}$",
    warning: "⚠️ The order changes for Methyl: $\\ce{(CH3)2NH > CH3NH2 > (CH3)3N > NH3}$.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=222&t=l",
    notes: ["The order is a result of Inductive (+I), Solvation, and Steric Hindrance effects."]
  },
  {
    name: "Wurtz-Fittig Reaction",
    reagent: "Na / Dry Ether",
    category: "Hydrocarbons",
    tags: ["Aromatic", "Alkylbenzene", "Coupling"],
    function: "Aryl Halide + Alkyl Halide → Alkylbenzene",
    example: "$\\ce{C6H5Cl + CH3Cl + 2Na ->[dry ether] C6H5-CH3 + 2NaCl}$",
    warning: "⚠️ Mixtures of products (R-R, Ar-Ar, Ar-R) can form, but Ar-R is easy to separate.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1140&t=l",
    notes: ["Extension of Wurtz for aromatic rings.", "Example: Synthesis of Toluene."]
  },
  {
    name: "Fittig Reaction",
    reagent: "Na / Dry Ether",
    category: "Hydrocarbons",
    tags: ["Aromatic", "Biphenyl", "Coupling"],
    function: "2 Aryl Halides → Biphenyl",
    example: "$\\ce{2C6H5Cl + 2Na ->[dry ether] C6H5-C6H5 + 2NaCl}$",
    warning: "⚠️ Only for coupling two aromatic rings.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=7095&t=l",
    notes: ["Used to prepare Diphenyl/Biphenyl."]
  },
  {
    name: "Birch Reduction (Alkynes)",
    reagent: "Na or Li / Liquid NH3",
    category: "Hydrocarbons",
    tags: ["Alkyne", "Trans-Alkene", "Reduction"],
    function: "Alkyne → Trans-Alkene",
    example: "$\\ce{R-C#C-R ->[Na/liq. NH3] R-CH=CH-R}$ (Trans)",
    warning: "⚠️ Gives TRANS product (Lindlar gives CIS).",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6331&t=l",
    notes: ["Does not work for terminal alkynes (they form salts).", "Involves solvated electrons (blue solution)."]
  },
  {
    name: "Kharasch Effect (Peroxide Effect)",
    reagent: "HBr + Peroxide (R-O-O-R)",
    category: "Hydrocarbons",
    tags: ["Addition", "Anti-Markovnikov", "Free Radical"],
    function: "Alkene → Alkyl Bromide (Anti-Mark)",
    example: "$\\ce{CH3-CH=CH2 + HBr ->[Peroxide] CH3-CH2-CH2Br}$",
    warning: "⚠️ ONLY works for HBr. HCl and HI do not show this effect!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=8001&t=l",
    notes: ["Mechanism: Free Radical Addition.", "Major product is 1-bromopropane."]
  },
  {
    name: "Reductive Ozonolysis",
    reagent: "1. O3, 2. Zn / H2O or (CH3)2S",
    category: "Hydrocarbons",
    tags: ["Cleavage", "Aldehyde", "Ketone"],
    function: "Alkene → Aldehyde / Ketone",
    example: "$\\ce{R-CH=CH-R ->[O3][Zn/H2O] 2R-CHO}$",
    warning: "⚠️ Zn prevents further oxidation of aldehydes to acids.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=240&t=l",
    notes: ["Used to locate the position of double bonds."]
  },
  {
    name: "Oxidative Ozonolysis",
    reagent: "1. O3, 2. H2O2",
    category: "Hydrocarbons",
    tags: ["Cleavage", "Carboxylic Acid"],
    function: "Alkene → Carboxylic Acid / Ketone",
    example: "$\\ce{R-CH=CH-R ->[O3][H2O2] 2R-COOH}$",
    warning: "⚠️ Aldehydes are oxidized to Carboxylic Acids here.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=176&t=l",
    notes: ["Similar to hot KMnO4 cleavage."]
  },
  {
    name: "Kolbe's Electrolysis",
    reagent: "Electricity / Aq. Salt",
    category: "Hydrocarbons",
    tags: ["Alkane", "Electrolysis", "Step-up"],
    function: "2 R-COONa → R-R + 2CO2",
    example: "$\\ce{2CH3COONa + 2H2O ->[Electrolysis] C2H6 + 2CO2 + H2 + 2NaOH}$",
    warning: "⚠️ Ethane is formed at the ANODE. pH of solution increases.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6324&t=l",
    notes: ["Methane cannot be prepared.", "Anode: Alkane + CO2 | Cathode: H2 gas."]
  },
  {
    name: "Frankland Reaction",
    reagent: "Zinc (Zn) / Ether",
    category: "Hydrocarbons",
    tags: ["Alkane", "Coupling", "Organometallic"],
    function: "Alkyl Halide → Higher Alkane",
    example: "$\\ce{2R-X + Zn -> R-R + ZnX2}$",
    warning: "⚠️ Similar to Wurtz, but uses Zinc instead of Sodium.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=6440&t=l",
    notes: ["Used when a milder reducing agent than Sodium is needed."]
  },
  {
    name: "Peroxide Effect Exception (Theory)",
    reagent: "HCl or HI + Peroxide",
    category: "Theory",
    tags: ["Trap", "HBr only", "Free Radical"],
    function: "Explain why Anti-Mark fails for HCl/HI",
    example: "$\\ce{CH3-CH=CH2 + HCl ->[Peroxide] CH3-CHCl-CH3}$ (Still Mark!)",
    warning: "⚠️ Only HBr shows Anti-Markovnikov with peroxide!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=313&t=l",
    notes: ["HCl bond is too strong to break.", "HI bond is weak, but I· radicals combine to form I2 instead of attacking the alkene."]
  },
  {
    name: "Acidity of Terminal Alkynes",
    reagent: "NaNH2 or Na metal",
    category: "Hydrocarbons",
    tags: ["Alkyne", "Acidic H", "Gas Evolution"],
    function: "Identify Terminal Alkynes",
    example: "$\\ce{R-C#C-H + Na -> R-C#C^-Na^+ + 1/2 H2 ^}$",
    warning: "⚠️ Internal alkynes (R-C≡C-R) do NOT react as they lack acidic hydrogen!",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=23954&t=l",
    notes: ["The 's' character of sp hybridized carbon (50%) makes it highly electronegative."]
  },
  {
    name: "Aromatization (Hydroforming)",
    reagent: "Cr2O3 / V2O5 / Mo2O3 at 773K",
    category: "Hydrocarbons",
    tags: ["Alkane", "Benzene", "Industrial"],
    function: "n-Hexane → Benzene",
    example: "$\\ce{C6H14 ->[773K, 10-20 atm][Cr2O3] C6H6 + 4H2}$",
    warning: "⚠️ Requires at least 6 carbons in a straight chain.",
    diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=241&t=l",
    notes: ["n-Heptane gives Toluene under these conditions."]
  },
  {
    name: "Oxymercuration-Demercuration (OMDM)",
    reagent: "1. Hg(OAc)2, H2O / 2. NaBH4",
    category: "Hydrocarbons",
    tags: ["Alkene", "Alcohol", "Markovnikov"],
    function: "Alkene → Alcohol (NO rearrangement)",
    example: "$\\ce{R-CH=CH2 ->[Hg(OAc)2][NaBH4] R-CH(OH)-CH3}$",
    warning: "⚠️ Follows Markovnikov's rule but prevents carbocation rearrangement!",
    notes: ["Better than acid-catalyzed hydration for branched alkenes.", "Forms a cyclic mercurinium ion intermediate."]
  },
  {
    name: "Allylic Bromination (NBS)",
    reagent: "NBS / hv (Light)",
    category: "Hydrocarbons",
    tags: ["Bromination", "Allylic", "Free Radical"],
    function: "Alkene → Allylic Bromide",
    example: "$\\ce{CH2=CH-CH3 ->[NBS][hv] CH2=CH-CH2Br}$",
    warning: "⚠️ The double bond remains intact; substitution only happens at the alpha-carbon.",
    notes: ["NBS = N-Bromosuccinimide.", "High yield for allylic and benzylic positions."]
  },
  {
    name: "Birch Reduction (Benzene)",
    reagent: "Na / Liq. NH3 + Ethanol",
    category: "Hydrocarbons",
    tags: ["Aromatic", "Reduction", "Diene"],
    function: "Benzene → 1,4-Cyclohexadiene",
    example: "$\\ce{C6H6 ->[Na/Liq. NH3][EtOH] C6H4}$ (Non-conjugated diene)",
    warning: "⚠️ Electron Withdrawing Groups (EWG) lead to different products than Donating Groups (EDG)!",
    notes: ["Reduces the ring to a non-conjugated diene.", "Important for JEE Advanced and Mains 2024."]
  },
  {
    name: "1,4-Addition (Butadiene)",
    reagent: "HBr / 40°C (High Temp)",
    category: "Hydrocarbons",
    tags: ["Diene", "Thermodynamic", "Conjugated"],
    function: "1,3-Butadiene → 1-Bromo-2-butene",
    example: "$\\ce{CH2=CH-CH=CH2 + HBr ->[40 ^oC] CH3-CH=CH-CH2Br}$",
    warning: "⚠️ High Temp = 1,4-Addition (Thermodynamic); Low Temp = 1,2-Addition (Kinetic).",
    notes: ["At 40°C, the more stable internal alkene is the major product."]
  },
  {
    name: "Isomerisation of Alkanes",
    reagent: "Anhy. AlCl3 / HCl",
    category: "Hydrocarbons",
    tags: ["Alkane", "Branching", "Industrial"],
    function: "n-Alkane → Branched Alkane",
    example: "$\\ce{CH3(CH2)4CH3 ->[AlCl3/HCl] 2-Methylpentane + 3-Methylpentane}$",
    warning: "⚠️ Used to increase the Octane number of fuels.",
    notes: ["Commonly found in 2023-2024 JEE papers."]
  },
  {
    name: "Tollens' Test for Alkynes",
    reagent: "Ammoniacal AgNO3",
    category: "Tests",
    tags: ["Terminal Alkyne", "White PPT", "Silver"],
    function: "Distinguish Terminal vs Internal Alkynes",
    example: "$\\ce{R-C#C-H + [Ag(NH3)2]+ -> R-C#C-Ag v}$ (White PPT)",
    warning: "⚠️ ONLY for terminal alkynes. Internal alkynes give no reaction.",
    notes: ["Forms a silver acetylide precipitate."]
  },
  {
    name: "Ammoniacal Cuprous Chloride Test",
    reagent: "Cu2Cl2 + NH4OH",
    category: "Tests",
    tags: ["Terminal Alkyne", "Red PPT"],
    function: "Test for Terminal Acidic Hydrogen",
    example: "$\\ce{R-C#C-H ->[Cu2Cl2/NH4OH] R-C#C-Cu v}$ (Red PPT)",
    warning: "⚠️ Another test that fails for 2-Butyne but works for 1-Butyne.",
    notes: ["Resulting copper acetylide is a reddish-brown precipitate."]
  },
  {
    name: "Ipso Substitution (Picric Acid)",
    reagent: "Conc. HNO3 + Conc. H2SO4",
    category: "Phenols",
    tags: ["Nitration", "Ipso Effect", "Trap"],
    function: "Phenol-2,4-disulphonic acid → Picric Acid",
    example: "$\\ce{C6H3(OH)(SO3H)2 ->[Conc. HNO3] C6H2(OH)(NO2)3}$",
    warning: "⚠️ Statement II in your notes: Phenol-2,4-disulphonic acid is treated with Conc. HNO3 to get picric acid via Ipso effect.",
    notes: ["Picric acid is 2,4,6-trinitrophenol, NOT trinitrotoluene."]
  },
  {
    name: "Acylation of Phenol",
    reagent: "CH3COCl / Pyridine",
    category: "Phenols",
    tags: ["Esterification", "Protection"],
    function: "Phenol → Phenyl Acetate",
    example: "$\\ce{C6H5OH + CH3COCl ->[Pyridine] C6H5-OCOCH3}$",
    warning: "⚠️ Reaction occurs at the -OH group, not the ring.",
    notes: ["Often followed by a Fries rearrangement in JEE questions."]
  },
  {
    name: "Selective Reduction (LiBH4)",
    reagent: "LiBH4",
    category: "Reagents",
    tags: ["Selective", "Reduction", "Ester"],
    function: "Reduces Esters/Lactones but NOT Carboxylic Acids",
    example: "$\\ce{HOOC-(CH2)_n-COOEt ->[LiBH4] HOOC-(CH2)_n-CH2OH}$",
    warning: "⚠️ LiBH4 is more selective than LiAlH4; it leaves -COOH groups alone.",
    notes: ["High-yield trap for multi-functional group questions."]
  },
  {
    name: "Ether Cleavage (Excess HI)",
    reagent: "Conc. HI (Excess) / Heat",
    category: "Ethers",
    tags: ["Cleavage", "Substitution"],
    function: "R-O-R' → R-I + R'-I",
    example: "$\\ce{CH3-O-C(CH3)3 ->[Excess HI] CH3-I + (CH3)3C-I}$",
    warning: "⚠️ With excess HI, both the alcohol and ether parts convert to iodides.",
    notes: ["If the ether has a 3° group, it follows the SN1 pathway."]
  },
  {
    name: "Phthalein Dye Test",
    reagent: "Phthalic Anhydride + Conc. H2SO4",
    category: "Tests",
    tags: ["Phenol ID", "Indicator", "Pink"],
    function: "Identify Phenolic groups",
    example: "Phenol + Phthalic Anhydride $\\ce{->[Conc. H2SO4][NaOH]}$ Phenolphthalein (Pink)",
    warning: "⚠️ Requires a free para-position in the phenol to work.",
    notes: ["Phenolphthalein is colorless in acid and pink in base."]
  },
  {
    name: "Grignard Reagent Synthesis",
    reagent: "R-X + Mg in Dry Ether",
    category: "Naming",
    tags: ["Grignard"],
    function: "Form Grignard Reagent",
    example: "R-X $\\ce{->[Mg][Dry Ether]}$ R-MgX",
    warning: "No warning",
    notes: ["No notes"]
  },
  {
    name: "Controlled Oxidation of Methane",
    reagent: "Cu / 523K / 100 atm",
    category: "Hydrocarbons",
    tags: ["Alkane", "Oxidation", "Industrial"],
    function: "Methane → Methanol",
    example: "$\\ce{2CH4 + O2 ->[Cu/523K/100atm] 2CH3OH}$",
    warning: "⚠️ Using Mo2O3 gives Methanal; (CH3COO)2Mn gives Ethanoic acid.",
    diagram: "",
    notes: ["Industrial method for methanol production."]
  },
  {
    name: "Gattermann-Koch Reaction",
    reagent: "CO + HCl / Anhy. AlCl3",
    category: "Aromatic",
    tags: ["Benzene", "Formylation", "Aldehyde"],
    function: "Benzene → Benzaldehyde",
    example: "$\\ce{C6H6 + CO + HCl ->[AlCl3/CuCl] C6H5CHO}$",
    warning: "⚠️ CuCl is used to stabilize the formyl cation intermediate.",
    diagram: "",
    notes: ["Introduces a -CHO group directly to the benzene ring."]
  },
  {
    name: "Mulliken-Barker Test",
    reagent: "1. Zn/NH4Cl, 2. Tollen's Reagent",
    category: "Tests",
    tags: ["Nitro Group", "Silver Mirror", "Identification"],
    function: "Detects Aromatic Nitro (-NO2) group",
    example: "$\\ce{C6H5NO2 ->[Zn/NH4Cl] C6H5NHOH ->[AgNO3/NH3] Ag (v)}$",
    warning: "⚠️ A black precipitate or silver mirror confirms the Nitro group.",
    diagram: "",
    notes: ["Reduction to phenylhydroxylamine allows it to reduce Tollen's reagent."]
  },
  {
    name: "BHC (Lindane) Formation",
    reagent: "Cl2 / UV Light",
    category: "Aromatic",
    tags: ["Addition", "Insecticide", "Benzene"],
    function: "Benzene → Benzene Hexachloride (Gammaxene)",
    example: "$\\ce{C6H6 + 3Cl2 ->[hv] C6H6Cl6}$",
    warning: "⚠️ Addition reaction—aromaticity is lost.",
    diagram: "",
    notes: ["Used as an insecticide; the gamma-isomer is the most potent."]
  },
  {
    name: "Hell-Volhard-Zelinsky (HVZ)",
    reagent: "X2 / Red Phosphorus",
    category: "Carboxylic Acids",
    tags: ["Alpha-Halogenation", "Substitution"],
    function: "Carboxylic Acid → alpha-Halo Carboxylic Acid",
    example: "$\\ce{CH3COOH ->[Cl2/Red P] Cl-CH2COOH}$",
    warning: "⚠️ Only works for acids with alpha-hydrogens.",
    diagram: "",
    notes: ["Red phosphorus forms Phosphorus Trihalide (PX3) in situ."]
  },
  {
    name: "Selective Reduction (LiBH4)",
    reagent: "LiBH4",
    category: "Reagents",
    tags: ["Selective", "Ester", "Alcohol"],
    function: "Reduces Esters but leaves Carboxylic Acids intact",
    example: "$\\ce{HOOC-CH2-COOEt ->[LiBH4] HOOC-CH2-CH2OH}$",
    warning: "⚠️ LiAlH4 is too strong; it would reduce the COOH group as well.",
    diagram: "",
    notes: ["Critical 'trick' reagent in multi-step JEE synthesis."]
  },
  {
    name: "Ipso Substitution (Picric Acid)",
    reagent: "1. Conc. H2SO4, 2. Conc. HNO3",
    category: "Phenols",
    tags: ["Nitration", "Picric Acid"],
    function: "Phenol → 2,4,6-trinitrophenol",
    example: "$\\ce{C6H5OH ->[H2SO4] C6H4(OH)(SO3H)2 ->[HNO3] C6H2(OH)(NO2)3}$",
    warning: "⚠️ Avoid direct nitration to prevent ring oxidation.",
    diagram: "",
    notes: ["The sulfonic groups are replaced (Ipso) by nitro groups."]
  },
  {
    name: "Benzyne Intermediate (NAS)",
    reagent: "NaNH2 / Liquid NH3",
    category: "Aromatic",
    tags: ["Nucleophilic Substitution", "Benzyne"],
    function: "Aryl Halide → Aniline",
    example: "$\\ce{C6H5Cl ->[NaNH2/NH3] C6H5NH2}$",
    warning: "⚠️ Elimination-Addition mechanism, not Addition-Elimination.",
    diagram: "",
    notes: ["Can result in 'cine-substitution' products."]
  }
];

function applySmartTags() {
    reactionDatabase.forEach(r => {
        const text = (r.name + r.reagent + r.function + (r.category || "")).toLowerCase();
        if (!r.tags) r.tags = [];

        if (["oxida", "kmno4", "pcc", "cro3", "tollens", "fehling", "ozonolysis"].some(k => text.includes(k))) {
            if (!r.tags.includes("Oxidation")) r.tags.push("Oxidation");
        }
        if (["reduc", "nabh4", "lialh4", "h2/", "sncl2", "clemmensen", "wolff", "stephen"].some(k => text.includes(k))) {
            if (!r.tags.includes("Reduction")) r.tags.push("Reduction");
        }
        if (text.includes("alkene") || r.category === "Alkenes") {
            if (!r.tags.includes("Alkene")) r.tags.push("Alkene");
        }
        if (text.includes("alkyne") || r.category === "Alkynes") {
            if (!r.tags.includes("Alkyne")) r.tags.push("Alkyne");
        }
      if (text.includes("test") || text.includes("distinguish") || text.includes("identification") || text.includes("iodoform")) {
            if (!r.tags.includes("Test")) r.tags.push("Test");
        }
    });
}

// Initialize tags immediately
applySmartTags();
/**
 * This function is called when you click a button like #Oxidation
 */
/* --- CLEANED LOGIC START --- */

// 1. Unified Filter Function
function filterByTag(tagName) {
    // UI: Handle the green button toggle
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    const clickedBtn = Array.from(document.querySelectorAll('.tag-btn'))
                            .find(btn => btn.innerText.includes(tagName));
    if (clickedBtn) clickedBtn.classList.add('active');

    // Data: Filter the reactions
    const filtered = reactionDatabase.filter(r => 
        r.tags && r.tags.includes(tagName)
    );
    
    // Display: Update the screen
    render(filtered);
    
    // Return view to top of page naturally
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. The Flashcard Toggle (Background Lock)

// Function to stop the scroll event
function preventDefault(e) {
    e.preventDefault();
}

/* --- NAVIGATION LOGIC --- */

function openReaction(id) {
    // 1. Find the reaction data using the ID
    const reaction = reactionDatabase.find(r => r.id === id);
    if (!reaction) return;

    // 2. Hide everything on the homepage
    // Note: Change '.top-section-container' to match your actual header class if different
    const header = document.querySelector('.top-section-container') || document.querySelector('header');
    if (header) header.style.display = 'none';
    document.getElementById('feed').style.display = 'none';

    // 3. Populate the Detail View
    const detailView = document.getElementById('reaction-detail');
    const detailContent = document.getElementById('detail-content');
    
    detailContent.innerHTML = `
        <h1 style="color: #2ecc71; margin-top: 0;">${reaction.name}</h1>
        <div style="background: #222; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <strong style="color: #aaa;">Reagent:</strong> 
            <code style="font-size: 1.2rem; color: #fff;">${reaction.reagent}</code>
        </div>
        <div class="content-body">
            <p>${reaction.description || 'Details for this reaction...'}</p>
            </div>
    `;

    // 4. Show the page and jump to top
    detailView.style.display = 'block';
    window.scrollTo(0, 0);
}

function goBack() {
    // 1. Hide the detail view
    document.getElementById('reaction-detail').style.display = 'none';

    // 2. Show the homepage elements again
    const header = document.querySelector('.top-section-container') || document.querySelector('header');
    if (header) header.style.display = 'block';
    document.getElementById('feed').style.display = 'flex';
    
    // 3. Return to normal scrolling
    document.body.style.overflow = "auto";
}

// 3. The "Clear All" logic
function clearFilters() {
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    const searchInput = document.getElementById('mainSearch');
    if (searchInput) searchInput.value = '';
    
    render(reactionDatabase);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = "auto"; // Safety unlock
}

// 4. Search Logic
const searchInput = document.getElementById('mainSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = reactionDatabase.filter(r => 
            r.name.toLowerCase().includes(term) || 
            r.reagent.toLowerCase().includes(term)
        );
        
        render(filtered);
    });
}
function openFlashcardPage(index) {
    const r = reactionDatabase[index];
    const cleanKey = (r.reagent || 'unknown').replace(/\s+/g, '_').replace(/[.#$/[\]]/g, "_");

    // 1. Lock background scroll
    document.body.style.overflow = "hidden";

    // 2. Hide homepage elements (prevents background "peek-through")
    const topSection = document.querySelector('.top-section-container');
    if (topSection) topSection.style.display = 'none';
    document.getElementById('feed').style.display = 'none';
    document.getElementById('mainSearch').style.display = 'none';

    // 3. Populate full-screen view
    const content = document.getElementById('flashcard-fullscreen-content');
    content.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: var(--accent); font-size: 2.5rem; margin-bottom: 5px;">${r.reagent}</h1>
            <h2 style="opacity: 0.8; margin-top: 0; color: white;">${r.name || ''}</h2>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 15px; border: 1px solid #333; margin-bottom: 20px;">
            <p style="color: #2ecc71; font-weight: bold;">Description:</p>
            <p style="font-size: 1.1rem; line-height: 1.6; color: white;">${r.function || 'Details for this reaction...'}</p>
        </div>

        ${r.diagram ? `<div style="text-align:center; margin: 30px 0;"><img src="${r.diagram}" style="max-width:100%; border-radius:15px; box-shadow: 0 0 20px rgba(46,204,113,0.2);"></div>` : ''}

        <div style="background: #111; padding: 20px; border-radius: 15px; border-left: 5px solid #2ecc71; margin-bottom: 20px; color: white;">
            <strong style="color: #2ecc71;">Example & Mechanism:</strong>
            <p style="margin-top: 10px; line-height: 1.5;">${r.example || 'No example provided.'}</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 15px; margin-bottom: 40px; color: white;">
            <h3 style="margin-top:0;">Community Hacks</h3>
            <div id="notes-list-${index}" style="margin-bottom: 15px; font-size: 0.95rem; color: #ccc;">
                Loading hacks...
            </div>
            <div style="display: flex; gap: 10px;">
                <input type="text" id="note-input-${index}" placeholder="Add a hack..." style="flex:1; padding: 12px; border-radius: 8px; border: 1px solid #444; background: #000; color: white;">
                <button onclick="postNote('${cleanKey}', ${index})" style="background: #2ecc71; color: white; border: none; padding: 0 20px; border-radius: 8px; cursor: pointer; font-weight: bold;">Post</button>
            </div>
        </div>
    `;

    // 4. Show the page
    document.getElementById('flashcard-page').style.display = 'block';
    window.scrollTo(0, 0);

    // 5. IMPORTANT: Fetch existing notes for this reaction
    if (typeof fetchNotes === 'function') {
        fetchNotes(cleanKey, index);
    }
}

function closeFlashcardPage() {
    // Hide the page
    document.getElementById('flashcard-page').style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = "auto";

    // Show homepage elements again
    const topSection = document.querySelector('.top-section-container');
    if (topSection) topSection.style.display = 'block';
    document.getElementById('feed').style.display = 'flex';
    document.getElementById('mainSearch').style.display = 'block';
}











