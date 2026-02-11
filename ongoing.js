/* --- ongoing.js --- */

// --- CONFIGURATION ---
// SET THIS TO null TO USE REAL DATE
// SET TO '2026-02-12' TO TEST PHASE 1
// SET TO '2026-03-10' TO TEST PHASE 2
const SIMULATED_DATE = '2026-02-12'; 

// --- THE DATA (Your Study Plan) ---
const studyPlan = [
    // PHASE 1 (Feb 12 - Mar 08)
    {
        id: "aiats7",
        title: "AIATS 7 Target",
        subject: "aiats",
        desc: "Prepare for AIATS 7 exam.",
        start: "2026-02-12",
        end: "2026-02-22",
        icon: "fa-clipboard-check"
    },
    {
        id: "aiats6",
        title: "AIATS 6 Target",
        subject: "aiats",
        desc: "Prepare for AIATS 6 exam.",
        start: "2026-02-23",
        end: "2026-03-08",
        icon: "fa-clipboard-list"
    },
    {
        id: "org_chem",
        title: "Organic Chemistry",
        subject: "chemistry",
        desc: "Class 12th Organic (Excl. GOC)",
        start: "2026-02-12",
        end: "2026-03-08",
        icon: "fa-flask"
    },
    {
        id: "bio_11",
        title: "Class 11 Biology",
        subject: "biology",
        desc: "Complete Class 11 Biology Syllabus",
        start: "2026-02-12",
        end: "2026-03-15", // Extends into Phase 2
        icon: "fa-dna"
    },

    // PHASE 2 (Mar 09 - Mar 15)
    {
        id: "rem_chem",
        title: "Remaining Chemistry",
        subject: "chemistry",
        desc: "Complete rest of 11th/12th Chem.",
        start: "2026-03-09",
        end: "2026-03-15",
        icon: "fa-vial"
    },
    {
        id: "phy_electro",
        title: "Physics: Electro & Current",
        subject: "physics",
        desc: "Electrostatics & Current Electricity",
        start: "2026-03-09",
        end: "2026-03-15",
        icon: "fa-bolt"
    },

    // PHASE 3 (Mar 16 - Mar 27)
    {
        id: "phy_11_sel",
        title: "Class 11 Physics (Selected)",
        subject: "physics",
        desc: "Units, Motion, WPE, Gravitation, etc.",
        start: "2026-03-16",
        end: "2026-03-27",
        icon: "fa-atom"
    }
];

// --- MAIN LOGIC ---

function getToday() {
    if (SIMULATED_DATE) return new Date(SIMULATED_DATE);
    return new Date();
}

function renderCards() {
    const today = getToday();
    const grid = document.getElementById('cards-grid');
    const dateDisplay = document.getElementById('current-date-display');
    
    // Display the date being used
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.innerText = today.toLocaleDateString('en-US', options);

    // Clear loading text
    grid.innerHTML = '';

    // Filter Logic: Check if today is between start and end date
    const activeTargets = studyPlan.filter(item => {
        const start = new Date(item.start);
        const end = new Date(item.end);
        // Reset hours to compare dates strictly
        start.setHours(0,0,0,0);
        end.setHours(23,59,59,999);
        today.setHours(12,0,0,0); // Mid-day to avoid timezone edge cases

        return today >= start && today <= end;
    });

    if (activeTargets.length === 0) {
        grid.innerHTML = '<p>No active targets for today. Check Upcoming!</p>';
        return;
    }

    // Generate HTML for each card
    activeTargets.forEach(target => {
        const card = document.createElement('div');
        card.className = `target-card card-${target.subject}`;
        
        // On Click: Go to details page with ID
        card.onclick = () => {
            window.location.href = `syllabus-details.html?id=${target.id}`;
        };

        card.innerHTML = `
            <i class="fas ${target.icon} status-icon"></i>
            <h3>${target.title}</h3>
            <p>${target.desc}</p>
            <div class="meta-info">
                <span><i class="far fa-calendar-alt"></i> Ends: ${target.end}</span>
                <span>Tap to view syllabus &rarr;</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', renderCards);