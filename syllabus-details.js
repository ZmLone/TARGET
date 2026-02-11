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