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
  // ... keep your previous entries and add these:
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
 
  // ... your existing entries
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
    notes: ["Tests for any acidic hydrogen (Alcohols, Phenols, Carboxylic acids, Terminal alkynes).", "Bubbles of Hydrogen gas confirm the presence of active H."]
  },

  // ... your existing entries
  { 
    reagent: "Dilute NaOH", 
    name: "Aldol Condensation",
    function: "Aldehyde/Ketone → Beta-Hydroxy Carbonyl", 
    warning: "⚠️ Requires at least one Alpha-Hydrogen! If there is no alpha-H, it won't work.",
    notes: ["Intermediate is an Enolate ion.", "On heating, it loses water to give an unsaturated product."]
  },
  { 
    reagent: "Conc. NaOH (50%)", 
    name: "Cannizzaro Reaction",
    function: "Aldehyde → Alcohol + Carboxylic Acid Salt", 
    warning: "⚠️ Only for Aldehydes with NO Alpha-Hydrogen (like Benzaldehyde or Formaldehyde).",
    notes: ["Disproportionation reaction: one molecule is oxidized, one is reduced.", "No Beta-hydroxy product here."]
  },
  { 
    reagent: "CHCl3 + NaOH + Phenol", 
    name: "Reimer-Tiemann Reaction",
    function: "Phenol → Salicylaldehyde", 
    warning: "⚠️ Active species is Dichlorocarbene (:CCl2). High yield of ortho-isomer.",
    notes: ["Used to introduce a -CHO group onto a phenol ring.", "One of the most important reactions for JEE."]
  },
  { 
    reagent: "Lindlar's Catalyst (Pd/CaCO3 + Quinoline)", 
    name: "Partial Hydrogenation",
    function: "Alkyne → Cis-Alkene", 
    warning: "⚠️ Only gives the CIS isomer. If you want the TRANS isomer, use Na/Liquid NH3 (Birch Reduction).",
    notes: ["Controlled reduction—doesn't go all the way to Alkane.", "Quinoline acts as a poison to stop the reaction at the alkene stage."]
  },
  { 
    reagent: "Hot Acidic KMnO4", 
    name: "Oxidative Ozonolysis Equivalent",
    function: "Alkene → Carboxylic Acid / Ketone", 
    warning: "⚠️ Very strong! It breaks the C=C bond completely and oxidizes the carbons to their highest state.",
    notes: ["Terminal =CH2 becomes CO2.", "Internal -CH= becomes -COOH."]
  },
  { 
    reagent: "NaNH2 (2 equivalents)", 
    name: "Dehydrohalogenation",
    function: "Vicinal Dihalide → Alkyne", 
    warning: "⚠️ Stronger base than alc. KOH. Necessary to pull off the second Hydrogen to form the triple bond.",
    notes: ["Used to 'Step-up' to an alkyne from an alkene (after bromination).", "Commonly used in conversion sequences."]
  },
  { 
  reagent: "Acidic Strength Orders", 
  name: "GOC Concept",
  function: "Comparing Stability of Conjugate Bases", 
  warning: "⚠️ Remember: -I and -M groups increase acidity; +I and +M groups decrease it.",
  notes: [
    "Picric Acid > Formic Acid > Benzoic Acid > Acetic Acid",
    "Phenol is more acidic than Alcohols due to resonance in Phenoxide ion.",
    "Ortho-effect: Ortho-substituted benzoic acids are usually stronger than benzoic acid."
  
},
{ 
  reagent: "Huckel's Rule (4n + 2)", 
  name: "Aromaticity Test",
  function: "Is it Aromatic, Anti-aromatic, or Non-aromatic?", 
  warning: "⚠️ Must be Planar, Cyclic, and fully Conjugated first!",
  notes: [
    "Aromatic: 4n + 2 pi electrons (2, 6, 10, 14...). Extremely stable.",
    "Anti-aromatic: 4n pi electrons (4, 8, 12...). Very unstable.",
    "Non-aromatic: If any condition (planarity/conjugation) fails."

}
];






