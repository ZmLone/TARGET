/* --- syllabus-details.js --- */

// --- 1. THE DATA (Based on PDF Schedule) ---
const syllabusDatabase = {
    // === CARD: AIATS 7 ===
    "aiats7": {
        title: "AIATS 7 Syllabus (Feb 12 - Feb 22)",
        subjects: [
            {
                name: "Physics",
                chapters: [
                    {
                        title: "Ray Optics",
                        tests: [
                            { id: "DT-27 (Phy-XII)", topics: "Reflection of light, Spherical mirrors, Refraction" },
                            { id: "DT-28 (Phy-XII)", topics: "Total internal reflection, Refraction at spherical surface, Lenses" },
                            { id: "DT-29 (Phy-XII)", topics: "Refraction through prism, Dispersion, Optical Instruments (Eye)" },
                            { id: "DT-30 (Phy-XII)", topics: "Telescope, Microscope" }
                        ]
                    },
                    {
                        title: "Wave Optics",
                        tests: [
                            { id: "DT-31 (Phy-XII)", topics: "Huygens Principle, Interference, Young's experiment" },
                            { id: "DT-32 (Phy-XII)", topics: "Diffraction, Polarization" }
                        ]
                    },
                    {
                        title: "Dual Nature of Radiation",
                        tests: [
                            { id: "DT-33 (Phy-XII)", topics: "Photoelectric effect, Einstein's equation, Photons" },
                            { id: "DT-34 (Phy-XII)", topics: "Wave nature of matter, Davisson Germer Experiment" }
                        ]
                    },
                    {
                        title: "Atoms & Nuclei",
                        tests: [
                            { id: "DT-35 (Phy-XII)", topics: "Rutherford model, Bohr model, Line spectra" },
                            { id: "DT-36 (Phy-XII)", topics: "Binding energy, Nuclear force, Radioactivity" }
                        ]
                    },
                    {
                        title: "Semiconductors",
                        tests: [
                            { id: "DT-37 (Phy-XII)", topics: "Intrinsic/Extrinsic semiconductors, P-N Junction diode" },
                            { id: "DT-38 (Phy-XII)", topics: "Junction diode as rectifier, Special purpose diodes" }
                        ]
                    }
                ]
            },
            {
                name: "Chemistry",
                chapters: [
                    {
                        title: "p-Block Elements (Group 15-18)",
                        tests: [
                            { id: "DT-10 (Chem-XII)", topics: "Group 15: N2, NH3, Oxides of Nitrogen, HNO3" },
                            { id: "DT-11 (Chem-XII)", topics: "Ozone, Sulphur forms, Group 16 compounds" },
                            { id: "DT-12 (Chem-XII)", topics: "Group 17 (Halogens), Group 18 (Inert Gases)" }
                        ]
                    },
                    {
                        title: "Biomolecules",
                        tests: [
                            { id: "DT-27 (Chem-XII)", topics: "Carbohydrates, Amino acids" }
                        ]
                    }
                ]
            },
            {
                name: "Botany",
                chapters: [
                    {
                        title: "Organisms and Populations",
                        tests: [
                            { id: "DT-17 (Bot-XII)", topics: "Biomes, Abiotic factors, Adaptations" },
                            { id: "DT-18 (Bot-XII)", topics: "Population characteristics, Growth models, Interactions" }
                        ]
                    },
                    {
                        title: "Ecosystem",
                        tests: [
                            { id: "DT-19 (Bot-XII)", topics: "Structure, Productivity, Decomposition" },
                            { id: "DT-20 (Bot-XII)", topics: "Energy flow, Ecological pyramids" }
                        ]
                    },
                    {
                        title: "Biodiversity",
                        tests: [
                            { id: "DT-21 (Bot-XII)", topics: "Levels, Patterns, Importance of biodiversity" },
                            { id: "DT-22 (Bot-XII)", topics: "Loss of biodiversity and conservation" }
                        ]
                    }
                ]
            },
            {
                name: "Zoology",
                chapters: [
                    {
                        title: "Biotechnology: Principles",
                        tests: [
                            { id: "DT-21 (Zoo-XII)", topics: "Tools of recombinant DNA technology" },
                            { id: "DT-22 (Zoo-XII)", topics: "Cloning vectors, Processes of recombinant DNA" }
                        ]
                    },
                    {
                        title: "Biotechnology: Applications",
                        tests: [
                            { id: "DT-23 (Zoo-XII)", topics: "Agriculture: Bt Cotton, Pest resistant plants" },
                            { id: "DT-24 (Zoo-XII)", topics: "Medicine: Insulin, Gene Therapy, Diagnosis" },
                            { id: "DT-25 (Zoo-XII)", topics: "Transgenic Animals, Ethical Issues" }
                        ]
                    }
                ]
            }
        ]
    },

    // === CARD: ORGANIC CHEMISTRY ===
    "org_chem": {
        title: "Organic Chemistry Target (Feb 12 - Mar 08)",
        subjects: [
            {
                name: "Chemistry (Class XII)",
                chapters: [
                    {
                        title: "Haloalkanes and Haloarenes",
                        tests: [
                            { id: "DT-17 (Chem-XII)", topics: "Nomenclature, Nature of C-X bond, Preparation, Optical activity" },
                            { id: "DT-18 (Chem-XII)", topics: "Elimination reactions, Reaction with Na" },
                            { id: "DT-19 (Chem-XII)", topics: "Aromatic nucleophilic substitution, Polyhalogen compounds" }
                        ]
                    },
                    {
                        title: "Alcohols, Phenols and Ethers",
                        tests: [
                            { id: "DT-20 (Chem-XII)", topics: "Nomenclature, Preparation of alcohols" },
                            { id: "DT-21 (Chem-XII)", topics: "Preparation of aromatic alcohols, Reactions of phenols" },
                            { id: "DT-22 (Chem-XII)", topics: "Preparation & properties of Ethers" }
                        ]
                    },
                    {
                        title: "Aldehydes, Ketones & Carboxylic Acids",
                        tests: [
                            { id: "DT-23 (Chem-XII)", topics: "Nomenclature, Carbonyl group, Nucleophilic addition" },
                            { id: "DT-24 (Chem-XII)", topics: "Halogenation, Carboxylic acids preparation & properties" }
                        ]
                    },
                    {
                        title: "Amines",
                        tests: [
                            { id: "DT-25 (Chem-XII)", topics: "Structure, Nomenclature, Preparation" },
                            { id: "DT-26 (Chem-XII)", topics: "Chemical reactions, Diazonium salts" }
                        ]
                    }
                ]
            }
        ]
    },

    // === CARD: CLASS 11 BIOLOGY ===
    "bio_11": {
        title: "Class 11 Biology Target (Feb 12 - Mar 15)",
        subjects: [
            {
                name: "Botany (Class XI)",
                chapters: [
                    {
                        title: "Cell: The Unit of Life",
                        tests: [
                            { id: "DT-1 (Bot-XI)", topics: "Cell theory, Prokaryotic vs Eukaryotic cells" },
                            { id: "DT-2 (Bot-XI)", topics: "Plasma membrane, Cell wall, Endomembrane system" },
                            { id: "DT-3 (Bot-XI)", topics: "Mitochondria, Plastid, Ribosome, Cytoskeleton" },
                            { id: "DT-4 (Bot-XI)", topics: "Centrosome, Cilia, Nucleus, Chromosomes" }
                        ]
                    },
                    {
                        title: "Cell Cycle & Cell Division",
                        tests: [
                            { id: "DT-5 (Bot-XI)", topics: "Cell cycle phases, Mitosis, Cytokinesis" },
                            { id: "DT-6 (Bot-XI)", topics: "Meiosis I & II, Significance" }
                        ]
                    },
                    {
                        title: "The Living World",
                        tests: [
                            { id: "DT-7 (Bot-XI)", topics: "Characteristics of life, Taxonomy, Systematics" },
                            { id: "DT-8 (Bot-XI)", topics: "Taxonomic categories" }
                        ]
                    },
                    {
                        title: "Biological Classification",
                        tests: [
                            { id: "DT-9 (Bot-XI)", topics: "Monera, Bacteria structure & life process" },
                            { id: "DT-10 (Bot-XI)", topics: "Reproduction in bacteria, Mycoplasma" },
                            { id: "DT-11 (Bot-XI)", topics: "Protista (Chrysophytes, Euglenoids, Protozoans)" },
                            { id: "DT-12 (Bot-XI)", topics: "Fungi classes (Phyco, Asco, Basidio, Deutero)" },
                            { id: "DT-13 (Bot-XI)", topics: "Virus, Viroids, Lichens" }
                        ]
                    },
                    {
                        title: "Morphology of Flowering Plants",
                        tests: [
                            { id: "DT-14 (Bot-XI)", topics: "Root types, Stem modifications" },
                            { id: "DT-15 (Bot-XI)", topics: "Leaf, Inflorescence, Flower symmetry" },
                            { id: "DT-16 (Bot-XI)", topics: "Floral parts, Aestivation, Placentation, Fruits" },
                            { id: "DT-17 (Bot-XI)", topics: "Seed structure, Families (Solanaceae, Fabaceae etc.)" }
                        ]
                    },
                    {
                        title: "Anatomy of Flowering Plants",
                        tests: [
                            { id: "DT-18 (Bot-XI)", topics: "Tissues (Parenchyma, Collenchyma), Xylem" },
                            { id: "DT-19 (Bot-XI)", topics: "Phloem, Tissue systems, Vascular bundles" },
                            { id: "DT-20 (Bot-XI)", topics: "Internal structure of Dicot/Monocot root, stem, leaf" },
                            { id: "DT-21 (Bot-XI)", topics: "Secondary Growth (Complete Chapter)" }
                        ]
                    },
                    {
                        title: "Plant Kingdom",
                        tests: [
                            { id: "DT-22 (Bot-XI)", topics: "Classification systems, Algae characters" },
                            { id: "DT-23 (Bot-XI)", topics: "Algae classes (Chloro, Phaeo, Rhodo)" },
                            { id: "DT-24 (Bot-XI)", topics: "Bryophytes & Pteridophytes" },
                            { id: "DT-25 (Bot-XI)", topics: "Gymnosperms" }
                        ]
                    },
                    {
                        title: "Plant Physiology",
                        tests: [
                            { id: "DT-26 (Bot-XI)", topics: "Photosynthesis: Pigments, Light reaction" },
                            { id: "DT-27 (Bot-XI)", topics: "Photosynthesis: Dark reaction (C3, C4), Photorespiration" },
                            { id: "DT-28 (Bot-XI)", topics: "Respiration: Glycolysis, Krebs cycle" },
                            { id: "DT-29 (Bot-XI)", topics: "Respiration: ETS, Amphibolic pathway" },
                            { id: "DT-30 (Bot-XI)", topics: "Growth phases, Differentiation" },
                            { id: "DT-31 (Bot-XI)", topics: "Hormones: Auxins, Gibberellins, Cytokinins" },
                            { id: "DT-32 (Bot-XI)", topics: "Hormones: Ethylene, ABA, Photoperiodism" }
                        ]
                    }
                ]
            },
            {
                name: "Zoology (Class XI)",
                chapters: [
                    {
                        title: "Structural Organisation (Tissues)",
                        tests: [
                            { id: "DT-1 (Zoo-XI)", topics: "Epithelial Tissue: Simple & Compound" },
                            { id: "DT-2 (Zoo-XI)", topics: "Connective Tissue: Bone, Cartilage, Blood" },
                            { id: "DT-3 (Zoo-XI)", topics: "Muscular & Nervous Tissue: Neuron structure" }
                        ]
                    },
                    {
                        title: "Biomolecules",
                        tests: [
                            { id: "DT-4 (Zoo-XI)", topics: "Carbohydrates: Monosaccharides, Polysaccharides" },
                            { id: "DT-5 (Zoo-XI)", topics: "Proteins (Structure), Lipids, Nucleic Acids" },
                            { id: "DT-6 (Zoo-XI)", topics: "Enzymes: Mechanism, Factors affecting activity" }
                        ]
                    },
                    {
                        title: "Breathing & Exchange of Gases",
                        tests: [
                            { id: "DT-7 (Zoo-XI)", topics: "Respiratory organs, Human Respiratory System" },
                            { id: "DT-8 (Zoo-XI)", topics: "Mechanism of Breathing, Respiratory Volumes" },
                            { id: "DT-9 (Zoo-XI)", topics: "Exchange & Transport of Gases, Disorders" }
                        ]
                    },
                    {
                        title: "Body Fluids & Circulation",
                        tests: [
                            { id: "DT-10 (Zoo-XI)", topics: "Blood composition, Coagulation, Lymph" },
                            { id: "DT-11 (Zoo-XI)", topics: "Human Heart Structure, Circulatory pathways" },
                            { id: "DT-12 (Zoo-XI)", topics: "Cardiac Cycle, ECG, Heart sounds" },
                            { id: "DT-13 (Zoo-XI)", topics: "Double circulation, Regulation, Disorders" }
                        ]
                    },
                    {
                        title: "Excretory Products & Elimination",
                        tests: [
                            { id: "DT-14 (Zoo-XI)", topics: "Modes of Excretion, Human Excretory System" },
                            { id: "DT-15 (Zoo-XI)", topics: "Nephron Structure (Cortical vs Juxtamedullary)" },
                            { id: "DT-16 (Zoo-XI)", topics: "Urine Formation, Counter current mechanism" },
                            { id: "DT-17 (Zoo-XI)", topics: "Regulation of Kidney Function (RAAS, ADH)" },
                            { id: "DT-18 (Zoo-XI)", topics: "Micturition, Urine composition, Dialysis" }
                        ]
                    },
                    {
                        title: "Locomotion & Movement",
                        tests: [
                            { id: "DT-19 (Zoo-XI)", topics: "Types of Movement, Muscle Contraction Mechanism" },
                            { id: "DT-20 (Zoo-XI)", topics: "Axial Skeleton: Skull, Vertebral column, Ribs" },
                            { id: "DT-21 (Zoo-XI)", topics: "Appendicular Skeleton, Joints, Disorders" }
                        ]
                    },
                    {
                        title: "Neural Control & Coordination",
                        tests: [
                            { id: "DT-22 (Zoo-XI)", topics: "Neuron types, Nerve Impulse Transmission" },
                            { id: "DT-23 (Zoo-XI)", topics: "Central Neural System: Brain Structure" },
                            { id: "DT-24 (Zoo-XI)", topics: "Spinal Cord, PNS, ANS (Sympathetic/Parasympathetic)" }
                        ]
                    },
                    {
                        title: "Chemical Coordination & Integration",
                        tests: [
                            { id: "DT-25 (Zoo-XI)", topics: "Hypothalamus, Pituitary Gland & Hormones" },
                            { id: "DT-26 (Zoo-XI)", topics: "Thyroid, Parathyroid, Adrenal Glands" },
                            { id: "DT-27 (Zoo-XI)", topics: "Pancreas, Pineal, Thymus" },
                            { id: "DT-28 (Zoo-XI)", topics: "Gonads, Hormone Mechanism (Steroid vs Protein)" }
                        ]
                    },
                    {
                        title: "Animal Kingdom (Non-Chordates)",
                        tests: [
                            { id: "DT-29 (Zoo-XI)", topics: "Basis of Classification (Symmetry, Coelom)" },
                            { id: "DT-30 (Zoo-XI)", topics: "Porifera: Canal system, Spicules" },
                            { id: "DT-31 (Zoo-XI)", topics: "Cnidaria: Metagenesis, Corals" },
                            { id: "DT-32 (Zoo-XI)", topics: "Ctenophora & Platyhelminthes" },
                            { id: "DT-33 (Zoo-XI)", topics: "Aschelminthes & Annelida" },
                            { id: "DT-34 (Zoo-XI)", topics: "Arthropoda & Mollusca" },
                            { id: "DT-35 (Zoo-XI)", topics: "Echinodermata & Hemichordata" }
                        ]
                    },
                    {
                        title: "Animal Kingdom (Chordates)",
                        tests: [
                            { id: "DT-36 (Zoo-XI)", topics: "Chordata features, Cyclostomata, Pisces" },
                            { id: "DT-37 (Zoo-XI)", topics: "Amphibia: General characters" },
                            { id: "DT-38 (Zoo-XI)", topics: "Reptilia: General characters, Snakes" },
                            { id: "DT-39 (Zoo-XI)", topics: "Aves: General characters" },
                            { id: "DT-40 (Zoo-XI)", topics: "Mammalia: General characters" }
                        ]
                    },
                    {
                        title: "Structural Organisation (Morphology)",
                        tests: [
                            { id: "DT-41 (Zoo-XI)", topics: "Cockroach: Morphology (Head, Thorax, Abdomen)" },
                            { id: "DT-42 (Zoo-XI)", topics: "Cockroach: Digestive, Resp, Circ Systems" },
                            { id: "DT-43 (Zoo-XI)", topics: "Cockroach: Excretory, Nervous, Repro Systems" },
                            { id: "DT-44 (Zoo-XI)", topics: "Frog: Morphology & Anatomy (Complete)" }
                        ]
                    }
                ]
            }
        ]
    },
    
    // === CARD: AIATS 6 (Upcoming) ===
    "aiats6": {
        title: "AIATS 6 Target (Feb 23 - Mar 08)",
        subjects: [
            {
                name: "Physics",
                chapters: [
                    { title: "Moving Charges & Magnetism", tests: [{id: "DT-16 to 19", topics: "Biot-savart, Ampere law, Solenoid, Torque"}] },
                    { title: "Magnetism & Matter", tests: [{id: "DT-20 to 21", topics: "Bar magnet, Earth magnetism, Materials"}] },
                    { title: "EMI & AC", tests: [{id: "DT-22 to 25", topics: "Faraday law, Lenz law, LCR circuit, Transformers"}] }
                ]
            },
            {
                name: "Chemistry",
                chapters: [
                    { title: "Coordination Compounds", tests: [{id: "DT-15 to 16", topics: "Werner theory, VBT, CFT"}] },
                    { title: "d and f Block", tests: [{id: "DT-13 to 14", topics: "KMnO4, K2Cr2O7, Lanthanoids"}] }
                ]
            }
        ]
    }
};

// --- 2. LOGIC TO RENDER THE PAGE ---

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id'); // Get the 'id' passed from ongoing.html

    const contentDiv = document.getElementById('syllabus-content');
    const titleHeader = document.getElementById('page-title');

    // Check if data exists for this card
    if (cardId && syllabusDatabase[cardId]) {
        const data = syllabusDatabase[cardId];
        titleHeader.innerText = data.title;
        renderSyllabus(data.subjects, contentDiv);
    } else {
        titleHeader.innerText = "Syllabus Not Found";
        contentDiv.innerHTML = "<p style='text-align:center; padding:20px;'>No data available for this target yet.</p>";
    }
});

function renderSyllabus(subjects, container) {
    container.innerHTML = '';

    subjects.forEach(subject => {
        // Create Subject Group
        const subjectGroup = document.createElement('div');
        subjectGroup.className = 'subject-group';
        
        const subjectTitle = document.createElement('div');
        subjectTitle.className = 'subject-title';
        subjectTitle.innerText = subject.name;
        subjectGroup.appendChild(subjectTitle);

        // Iterate Chapters
        subject.chapters.forEach(chapter => {
            // Create Accordion HTML structure
            const accordion = document.createElement('div');
            accordion.className = 'chapter-accordion';

            // Header (The part you click)
            const header = document.createElement('div');
            header.className = 'accordion-header';
            header.onclick = () => toggleAccordion(header);
            
            header.innerHTML = `
                <h4>${chapter.title}</h4>
                <i class="fas fa-chevron-down accordion-icon"></i>
            `;

            // Content (The list of Daily Tests)
            const content = document.createElement('div');
            content.className = 'accordion-content';

            // List of tests inside the chapter
            chapter.tests.forEach(test => {
                const testItem = document.createElement('div');
                testItem.className = 'dt-item';
                testItem.innerHTML = `
                    <span class="dt-name">${test.id}</span>
                    <div class="dt-topics">${test.topics}</div>
                `;
                content.appendChild(testItem);
            });

            accordion.appendChild(header);
            accordion.appendChild(content);
            subjectGroup.appendChild(accordion);
        });

        container.appendChild(subjectGroup);
    });
}

// Logic to open/close accordion
function toggleAccordion(headerElement) {
    // Toggle active class
    headerElement.classList.toggle('active');

    // Get the content sibling
    const content = headerElement.nextElementSibling;

    if (headerElement.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = 0;
    }
}