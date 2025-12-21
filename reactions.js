const reactionDatabase = [
  { 
    reagent: "Na / dry ether", 
    name: "Wurtz Reaction",
    function: "Alkyl Halide → Alkane (Double Carbons)", 
    warning: "⚠️ Fails for 3° alkyl halides (Elimination occurs instead).",
    notes: ["Used to prepare symmetrical alkanes.", "Methane cannot be prepared this way."]
  },
  { 
    reagent: "R2CuLi (Gilman Reagent)", 
    name: "Corey-House Synthesis",
    function: "Alkyl Halide + R2CuLi → Alkane", 
    warning: "⚠️ Better than Wurtz for unsymmetrical alkanes.",
    notes: ["Works with 1°, 2°, and even aryl/vinyl halides.", "Highly efficient for making long chains."]
  },
  { 
    reagent: "Zn-Hg / conc. HCl", 
    name: "Clemmensen Reduction",
    function: "C=O (Carbonyl) → CH2 (Alkane)", 
    warning: "⚠️ Avoid if the molecule has acid-sensitive groups like -OH.",
    notes: ["Mechanism involves zinc carbenoids.", "Best for ketones that are stable in acid."]
  },
  { 
    reagent: "NH2NH2 / KOH / Ethylene Glycol", 
    name: "Wolff-Kishner Reduction",
    function: "C=O (Carbonyl) → CH2 (Alkane)", 
    warning: "⚠️ Avoid if the molecule has base-sensitive groups.",
    notes: ["The 'Base' version of Clemmensen.", "High temperature is required."]
  },
  { 
    reagent: "CHCl3 + aq. NaOH", 
    name: "Reimer-Tiemann Reaction",
    function: "Phenol → Salicylaldehyde", 
    warning: "⚠️ The active electrophile is Dichlorocarbene (:CCl2). Watch out for the ortho-product!",
    notes: ["If CCl4 is used instead of CHCl3, Salicylic acid is formed.", "Major product is ortho due to H-bonding."]
  },
  { 
    reagent: "CO2 + NaOH (High P & T)", 
    name: "Kolbe's Reaction",
    function: "Phenol → Salicylic Acid", 
    warning: "⚠️ Requires high pressure (4-7 atm) to force CO2 to react.",
    notes: ["Followed by acidification (H+).", "Used industrially to make Aspirin."]
  },
  { 
    reagent: "NaNO2 + HCl (0-5°C)", 
    name: "Diazotization",
    function: "Aniline → Benzene Diazonium Chloride", 
    warning: "⚠️ Temperature must be below 5°C. If it gets warm, Phenol is formed instead!",
    notes: ["The diazonium salt is a 'gateway' to Chlorobenzene, Iodobenzene, etc.", "Crucial for Sandmeyer and Gattermann reactions."]
  },
  { 
    reagent: "Br2 + NaOH (or NaOBr)", 
    name: "Hoffmann Bromamide Degradation",
    function: "Amide → 1° Amine (One less Carbon)", 
    warning: "⚠️ The carbon chain shortens! It's a 'Step-down' reaction. Intermediate is Nitrene.",
    notes: ["Only for primary amides.", "R-NH2 is the product, the C=O group is lost as CO3^2-."]
  },
  { 
    reagent: "C6H5SO2Cl", 
    name: "Hinsberg Reagent Test",
    function: "Distinguish 1°, 2°, 3° Amines", 
    warning: "⚠️ 1° Amine: Soluble in alkali; 2° Amine: Insoluble in alkali; 3° Amine: No reaction.",
    notes: ["Used to separate a mixture of amines.", "The reagent is Benzenesulphonyl chloride."]
  },
  { 
    reagent: "NaNO2 + HCl / CuCl", 
    name: "Sandmeyer Reaction",
    function: "Diazonium Salt → Chlorobenzene", 
    warning: "⚠️ If you use Cu powder instead of CuCl, it's called the Gattermann Reaction.",
    notes: ["Better yield than Gattermann.", "Can be used to introduce Cl, Br, or CN into the ring."]
  },
  { 
    reagent: "FeCl3 (Neutral)", 
    name: "Ferric Chloride Test",
    function: "Phenol/Enol → Violet Coloration", 
    warning: "⚠️ Only works with neutral FeCl3. If it's acidic, the color might not appear.",
    notes: ["Used to distinguish Phenol from Alcohols.", "Forms a complex: [Fe(OC6H5)6]^3-."]
  },
  { 
    reagent: "I2 + NaOH (Warm)", 
    name: "Iodoform Test",
    function: "Methyl Ketones/Alcohols → Yellow ppt", 
    warning: "⚠️ Positive for Ethanol, Propan-2-ol, Acetone, and Acetaldehyde.",
    notes: ["Yellow precipitate is CHI3.", "Doesn't work for Methanol or 3-pentanone."]
  },
  { 
    reagent: "Na (Metal)", 
    name: "Sodium Metal Test",
    function: "Active H (Alcohols/Acids) → H2 Gas (Effervescence)", 
    warning: "⚠️ Dangerous! Reacts violently with moisture. Don't use for wet samples.",
    notes: ["Tests for any acidic hydrogen.", "Bubbles of Hydrogen gas confirm the presence of active H."]
  },
  { 
    reagent: "Dilute NaOH", 
    name: "Aldol Condensation",
    function: "Aldehyde/Ketone → Beta-Hydroxy Carbonyl", 
    warning: "⚠️ Requires at least one Alpha-Hydrogen!",
    notes: ["Intermediate is an Enolate ion.", "On heating, it loses water to give an unsaturated product."]
  },
  { 
    reagent: "Conc. NaOH (50%)", 
    name: "Cannizzaro Reaction",
    function: "Aldehyde → Alcohol + Carboxylic Acid Salt", 
    warning: "⚠️ Only for Aldehydes with NO Alpha-Hydrogen.",
    notes: ["Disproportionation reaction.", "One molecule is oxidized, one is reduced."]
  },
  { 
    reagent: "Lindlar's Catalyst (Pd/CaCO3 + Quinoline)", 
    name: "Partial Hydrogenation",
    function: "Alkyne → Cis-Alkene", 
    warning: "⚠️ Only gives the CIS isomer.",
    notes: ["Controlled reduction.", "Quinoline acts as a poison to stop the reaction."]
  },
  { 
    reagent: "Hot Acidic KMnO4", 
    name: "Oxidative Ozonolysis Equivalent",
    function: "Alkene → Carboxylic Acid / Ketone", 
    warning: "⚠️ Very strong oxidative cleavage!",
    notes: ["Terminal =CH2 becomes CO2.", "Internal -CH= becomes -COOH."]
  },
  { 
    reagent: "NaNH2 (2 equivalents)", 
    name: "Dehydrohalogenation",
    function: "Vicinal Dihalide → Alkyne", 
    warning: "⚠️ Stronger base than alc. KOH.",
    notes: ["Used to 'Step-up' to an alkyne.", "Commonly used in conversion sequences."]
  },
  { 
    reagent: "Acidic Strength Orders", 
    name: "GOC Concept",
    function: "Comparing Stability of Conjugate Bases", 
    warning: "⚠️ Remember: -I and -M groups increase acidity.",
    notes: [
      "Picric Acid > Formic Acid > Benzoic Acid > Acetic Acid",
      "Phenol is more acidic than Alcohols due to resonance.",
      "Ortho-effect: Substituted benzoic acids are usually stronger."
    ]
  },
  { 
    reagent: "Huckel's Rule (4n + 2)", 
    name: "Aromaticity Test",
    function: "Is it Aromatic, Anti-aromatic, or Non-aromatic?", 
    warning: "⚠️ Must be Planar, Cyclic, and fully Conjugated first!",
    notes: [
      "Aromatic: 4n + 2 pi electrons (2, 6, 10, 14...).",
      "Anti-aromatic: 4n pi electrons (4, 8, 12...).",
      "Non-aromatic: If planarity/conjugation fails."
    ]
  },
  { 
  reagent: "\\(\\ce{NaOH + CO2}\\)", 
  name: "Kolbe's Reaction",
  category: "Naming",
  function: "Phenol \\(\\rightarrow\\) Salicylic Acid", 
  example: "\\(\\ce{C6H5OH ->[NaOH] C6H5ONa ->[CO2][H+] C6H4(OH)COOH}\\)",
  diagram: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=338&t=l",
  notes: ["Occurs at 125°C and 4-7 atm.", "Intermediate is Sodium Phenoxide."]
}
];


