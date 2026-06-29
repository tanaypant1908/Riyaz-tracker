// --- Raga Database ---
const RAGAS = [
    { id: 1, name: "Yaman", intro: "A fundamental raga of the Kalyan Thaat, sung at evening. It evokes peace and devotion.", aaroh: "Ni Re Ga Ma' Pa Dha Ni Sa", avroh: "Sa Ni Dha Pa Ma' Ga Re Sa", pakad: "Ni Re Ga, Ma' Pa, Ga Re, Ni Re Sa", taans: ["Ni Re Ga Ma' Pa Dha Ni Sa, Sa Ni Dha Pa Ma' Ga Re Sa", "Ga Re Ni Re Sa, Ni Re Ga Ma' Pa, Ma' Pa Dha Ni Sa", "Pa Dha Ni Sa, Ni Dha Pa, Ma' Ga Re Sa"], time: "Evening", mood: "Devotional" },
    { id: 2, name: "Bhairav", intro: "The king of morning ragas, representing the solemnity of Lord Shiva.", aaroh: "Sa re Ga Ma Pa dha Ni Sa", avroh: "Sa Ni dha Pa Ma Ga re Sa", pakad: "Ga Ma dha dha Pa, Ma Ga re re Sa", taans: ["Sa re Ga Ma Pa dha Ni Sa, Sa Ni dha Pa Ma Ga re Sa", "Ga Ma dha Pa, Ga Ma re Sa", "Ni Sa re Ga Ma Pa dha Ni Sa"], time: "Morning", mood: "Serious" },
    { id: 3, name: "Bhupali", intro: "A pentatonic raga (Oudhav) that creates a calm, meditative atmosphere.", aaroh: "Sa Re Ga Pa Dha Sa", avroh: "Sa Dha Pa Ga Re Sa", pakad: "Ga Re Sa Dha(low) Sa, Re Ga, Pa Ga", taans: ["Sa Re Ga Pa Dha Sa, Sa Dha Pa Ga Re Sa", "Pa Dha Sa Dha Pa Ga Re Sa", "Ga Re Sa Dha Sa Re Ga Pa Dha Sa"], time: "Night", mood: "Calm" },
    { id: 4, name: "Durga", intro: "Pure and simple, dedicated to Goddess Durga, uses only five notes.", aaroh: "Sa Re Ma Pa Dha Sa", avroh: "Sa Dha Pa Ma Re Sa", pakad: "Ma Pa Dha, Ma Pa, Ma Re, Sa", taans: ["Sa Re Ma Pa Dha Sa, Sa Dha Pa Ma Re Sa", "Dha Pa Ma Re Sa, Sa Re Ma Pa Dha Sa", "Pa Dha Sa, Dha Pa, Ma Re Sa"], time: "Night", mood: "Joyful" },
    { id: 5, name: "Kafi", intro: "The base of Kafi Thaat, often used for Hori and light classical music.", aaroh: "Sa Re ga Ma Pa Dha ni Sa", avroh: "Sa ni Dha Pa Ma ga Re Sa", pakad: "Sa Re Re ga, Ma Ma Pa", taans: ["Sa Re ga Ma Pa Dha ni Sa, Sa ni Dha Pa Ma ga Re Sa", "ga Re Sa, ni Dha Pa, Ma ga Re Sa", "Pa Dha ni Sa, ni Dha Pa, Ma ga Re Sa"], time: "Night", mood: "Romantic" },
    { id: 6, name: "Bageshree", intro: "A popular late-night raga depicting a woman waiting for her lover.", aaroh: "Sa ga Ma Dha ni Sa", avroh: "Sa ni Dha Ma, ga Re Sa", pakad: "Dha(low) ni(low) Sa, Ma, ga Ma Dha ni Dha Ma, ga Re Sa", taans: ["Sa ga Ma Dha ni Sa, Sa ni Dha Ma ga Re Sa", "Ma Dha ni Dha Ma, ga Re Sa", "ga Ma Dha ni Sa ni Dha Ma"], time: "Night", mood: "Romantic" },
    { id: 7, name: "Malkauns", intro: "A heavy, serious raga using only flat (Komal) notes. Ancient and meditative.", aaroh: "Sa ga Ma dha ni Sa", avroh: "Sa ni dha Ma ga Sa", pakad: "Ma ga Sa, dha(low) ni(low) Sa, Ma ga Ma", taans: ["Sa ga Ma dha ni Sa, Sa ni dha Ma ga Sa", "dha ni Sa ga Ma, ga Ma ga Sa", "Ma dha ni Sa, ni dha Ma ga Sa"], time: "Night", mood: "Serious" },
    { id: 8, name: "Darbari Kanada", intro: "A majestic raga created by Tansen for Emperor Akbar's court.", aaroh: "Sa Re ga Ma Pa dha ni Sa", avroh: "Sa ni dha Pa, Ma Pa ga, Ma Re Sa", pakad: "ga Ma Re Sa, ni(low) Sa Re Sa", taans: ["Sa Re ga Ma Pa dha ni Sa, Sa ni dha Pa Ma Pa ga Ma Re Sa", "Pa dha ni Sa, ni dha Pa, Ma Pa ga Ma Re Sa", "Sa Re ga Ma Pa, Ma Pa ga Ma Re Sa"], time: "Night", mood: "Serious" },
    { id: 9, name: "Desh", intro: "A very popular raga in Indian folk and patriotic songs.", aaroh: "Sa Re Ma Pa Ni Sa", avroh: "Sa ni Dha Pa, Ma Ga Re, Ga(low) Ni(low) Sa", pakad: "Re Ma Pa, Ni Sa, ni Dha Pa, Ma Ga Re", taans: ["Sa Re Ma Pa Ni Sa, Sa ni Dha Pa Ma Ga Re Sa", "Re Ma Pa Ni Sa, ni Dha Pa", "Pa Ni Sa, ni Dha Pa, Ma Ga Re Sa"], time: "Night", mood: "Joyful" },
    { id: 10, name: "Bihag", intro: "A celebratory raga used in weddings, featuring both Madhyams.", aaroh: "Ni(low) Sa Ga Ma Pa Ni Sa", avroh: "Sa Ni Dha Pa, Ma' Pa Ga Ma Ga Re Sa", pakad: "Ni(low) Sa Ga, Ma Ga, Pa Ga, Ma' Pa Ga", taans: ["Ni Sa Ga Ma Pa Ni Sa, Sa Ni Dha Pa Ma' Pa Ga Ma Ga Re Sa", "Ga Ma Ga Re Sa, Ni Sa Ga Ma Pa", "Pa Ni Sa, Ni Dha Pa, Ma' Pa Ga"], time: "Night", mood: "Joyful" },
    { id: 11, name: "Jaunpuri", intro: "A morning raga with a touch of melancholy and devotion.", aaroh: "Sa Re Ma Pa dha ni Sa", avroh: "Sa ni dha Pa, Ma ga Re Sa", pakad: "Ma Pa dha ni dha Pa, Ma ga, Re Sa", taans: ["Sa Re Ma Pa dha ni Sa, Sa ni dha Pa Ma ga Re Sa", "Ma Pa dha ni Sa, ni dha Pa", "ga Re Sa, ni(low) dha(low) Pa(low), Sa Re Ma Pa"], time: "Morning", mood: "Devotional" },
    { id: 12, name: "Todi", intro: "One of the most complex and beautiful morning ragas.", aaroh: "Sa re ga ma' Pa dha Ni Sa", avroh: "Sa Ni dha Pa ma' ga re Sa", pakad: "dha Ni Sa, re ga re Sa, ma' ga re ga", taans: ["Sa re ga ma' Pa dha Ni Sa, Sa Ni dha Pa ma' ga re Sa", "ma' ga re Sa, dha Ni Sa re ga", "Pa dha Ni Sa, Ni dha Pa, ma' ga re Sa"], time: "Morning", mood: "Serious" },
    { id: 13, name: "Marwa", intro: "A sunset raga that creates an unsettling, yearning atmosphere.", aaroh: "Sa re Ga ma' Dha Ni Sa", avroh: "Sa Ni Dha ma' Ga re Sa", pakad: "Dha(low) Ni(low) re Ga re, Ni(low) re Sa", taans: ["Sa re Ga ma' Dha Ni Sa, Sa Ni Dha ma' Ga re Sa", "re Ga ma' Dha, ma' Ga re Sa", "Dha Ni re Ga, ma' Ga re Sa"], time: "Evening", mood: "Serious" },
    { id: 14, name: "Puriya", intro: "A deep evening raga, similar to Marwa but focused differently.", aaroh: "Ni(low) re Ga ma' Dha Ni Sa", avroh: "Sa Ni Dha ma' Ga re Sa", pakad: "Ga ma' Dha Ni Dha, Ga ma' Ga, re Sa", taans: ["Ni re Ga ma' Dha Ni Sa, Sa Ni Dha ma' Ga re Sa", "ma' Dha Ni Dha, ma' Ga re Sa", "Ni re Ga, ma' Ga re Sa"], time: "Evening", mood: "Calm" },
    { id: 15, name: "Shree", intro: "An ancient raga of the evening, representing majesty and awe.", aaroh: "Sa re Ma' Pa Ni Sa", avroh: "Sa Ni dha Pa Ma' Ga re Sa", pakad: "Sa, re(low) re(low) Pa, Ma' Pa, Ga re, Sa", taans: ["Sa re Ma' Pa Ni Sa, Sa Ni dha Pa Ma' Ga re Sa", "re Ma' Pa Ni Sa, Sa Ni dha Pa", "Pa Ma' Ga re Sa, re re Pa"], time: "Evening", mood: "Serious" },
    { id: 16, name: "Khamaj", intro: "A light, flirtatious raga often used for Thumri.", aaroh: "Sa Ga Ma Pa Dha Ni Sa", avroh: "Sa ni Dha Pa Ma Ga Re Sa", pakad: "Ni(low) Sa Ga, Ma Pa, Dha Ma Pa Ga", taans: ["Sa Ga Ma Pa Dha Ni Sa, Sa ni Dha Pa Ma Ga Re Sa", "Ga Ma Pa Dha ni Dha Pa", "Ma Ga Re Sa, Ni(low) Sa Ga Ma"], time: "Night", mood: "Romantic" },
    { id: 17, name: "Bilawal", intro: "The basic 'Shuddha' scale of Hindustani music.", aaroh: "Sa Re Ga Ma Pa Dha Ni Sa", avroh: "Sa Ni Dha Pa Ma Ga Re Sa", pakad: "Ga Re, Ga Ma Pa, Dha, Ni Sa", taans: ["Sa Re Ga Ma Pa Dha Ni Sa, Sa Ni Dha Pa Ma Ga Re Sa", "Ga Ma Pa Dha Ni Sa, Sa Ni Dha Pa", "Re Ga Ma Pa, Ga Re Sa"], time: "Morning", mood: "Joyful" },
    { id: 18, name: "Multani", intro: "A heavy afternoon raga of the Todi Thaat.", aaroh: "Ni(low) Sa ga ma' Pa Ni Sa", avroh: "Sa Ni dha Pa ma' ga re Sa", pakad: "Ni(low) Sa ga, ma' Pa, ga ma' ga, re Sa", taans: ["Ni Sa ga ma' Pa Ni Sa, Sa Ni dha Pa ma' ga re Sa", "ma' Pa Ni Sa, Ni dha Pa, ma' ga re Sa", "ga ma' ga re Sa, Ni Sa ga"], time: "Afternoon", mood: "Serious" },
    { id: 19, name: "Patdeep", intro: "An afternoon raga that blends melancholy with beauty.", aaroh: "Ni(low) Sa ga Ma Pa Ni Sa", avroh: "Sa Ni Dha Pa Ma ga Re Sa", pakad: "ga Ma Pa Ni Sa, Dha Pa, Ma ga, Re Sa", taans: ["Sa ga Ma Pa Ni Sa, Sa Ni Dha Pa Ma ga Re Sa", "Pa Ni Sa, Ni Dha Pa, Ma ga Re Sa", "Ni Sa ga Ma Pa, Ma ga Re Sa"], time: "Afternoon", mood: "Calm" },
    { id: 20, name: "Hamsadhwani", intro: "Borrowed from Carnatic music, it is bright and invokes Lord Ganesha.", aaroh: "Sa Re Ga Pa Ni Sa", avroh: "Sa Ni Pa Ga Re Sa", pakad: "Sa Re Ga, Pa Ga, Re Ni(low) Sa", taans: ["Sa Re Ga Pa Ni Sa, Sa Ni Pa Ga Re Sa", "Ga Pa Ni Sa Ni Pa Ga Re Sa", "Sa Re Ga Pa, Ni Pa Ga Re Sa"], time: "Night", mood: "Joyful" }
];

// --- State Management ---
let logs = JSON.parse(localStorage.getItem('riyaz_logs')) || [];
let progress = JSON.parse(localStorage.getItem('raga_progress')) || {};

// --- DOM Elements ---
const ragaGrid = document.getElementById('raga-grid');
const logRagaSelect = document.getElementById('log-raga');
const riyazForm = document.getElementById('riyaz-form');
const logList = document.getElementById('log-list');
const ragaModal = document.getElementById('raga-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// --- Initialization ---
function init() {
    renderRagas();
    populateRagaSelect();
    updateDashboard();
    renderLogs();
    setupFilters();
}

// --- Library Functions ---
function renderRagas(filterText = '', timeFilter = 'all', moodFilter = 'all') {
    ragaGrid.innerHTML = '';
    const filtered = RAGAS.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(filterText.toLowerCase());
        const matchesTime = timeFilter === 'all' || r.time === timeFilter;
        const matchesMood = moodFilter === 'all' || r.mood === moodFilter;
        return matchesSearch && matchesTime && matchesMood;
    });

    filtered.forEach(raga => {
        const prog = getRagaProgressPercent(raga.id);
        const card = document.createElement('div');
        card.className = 'raga-card';
        card.onclick = () => openRagaDetails(raga.id);
        card.innerHTML = `
            <span class="badge-prepared" id="badge-${raga.id}" style="display: ${prog === 100 ? 'block' : 'none'}">Prepared</span>
            <h3>${raga.name}</h3>
            <div class="raga-meta">${raga.time} • ${raga.mood}</div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${prog}%"></div>
            </div>
            <p style="font-size: 0.8rem; color: #666;">Progress: ${Math.round(prog)}%</p>
        `;
        ragaGrid.appendChild(card);
    });
}

function getRagaProgressPercent(ragaId) {
    const tasks = progress[ragaId] || [];
    if (tasks.length === 0) return 0;
    return (tasks.length / 6) * 100;
}

function openRagaDetails(id) {
    const raga = RAGAS.find(r => r.id === id);
    const userTasks = progress[id] || [];
    
    modalBody.innerHTML = `
        <h2>${raga.name}</h2>
        <p>${raga.intro}</p>
        
        <div class="t-data">
            <strong>Aaroh:</strong> ${raga.aaroh}<br>
            <strong>Avroh:</strong> ${raga.avroh}<br>
            <strong>Pakad:</strong> ${raga.pakad}
        </div>

        <div class="task-list">
            <h3>Learning Checklist</h3>
            ${['Read Introduction', 'Learn Aaroh', 'Learn Avroh', 'Learn Pakad', 'Practice Taans', 'Complete Revision'].map((task, index) => `
                <div class="task-item">
                    <input type="checkbox" id="task-${index}" ${userTasks.includes(index) ? 'checked' : ''} onchange="toggleTask(${id}, ${index})">
                    <label for="task-${index}">${task}</label>
                </div>
            `).join('')}
        </div>

        <div style="margin-top:20px;">
            <h3>Sample Taans</h3>
            <ul>
                ${raga.taans.map(t => `<li style="margin-bottom:10px;">${t}</li>`).join('')}
            </ul>
        </div>
    `;
    ragaModal.style.display = 'block';
}

function toggleTask(ragaId, taskIndex) {
    if (!progress[ragaId]) progress[ragaId] = [];
    
    const idx = progress[ragaId].indexOf(taskIndex);
    if (idx > -1) {
        progress[ragaId].splice(idx, 1);
    } else {
        progress[ragaId].push(taskIndex);
    }
    
    localStorage.setItem('raga_progress', JSON.stringify(progress));
    updateDashboard();
    renderRagas(document.getElementById('search-input').value);
}

// --- Log Functions ---
function populateRagaSelect() {
    logRagaSelect.innerHTML = RAGAS.map(r => `<option value="${r.name}">${r.name}</option>`).join('');
}

riyazForm.onsubmit = (e) => {
    e.preventDefault();
    const newLog = {
        id: Date.now(),
        date: document.getElementById('log-date').value,
        raga: document.getElementById('log-raga').value,
        minutes: parseInt(document.getElementById('log-minutes').value),
        notes: document.getElementById('log-notes').value
    };
    
    logs.unshift(newLog);
    localStorage.setItem('riyaz_logs', JSON.stringify(logs));
    riyazForm.reset();
    renderLogs();
    updateDashboard();
};

function renderLogs() {
    logList.innerHTML = logs.length ? '' : '<p>No sessions recorded yet.</p>';
    logs.forEach(log => {
        const div = document.createElement('div');
        div.className = 'log-item';
        div.innerHTML = `
            <div>
                <strong>${log.raga}</strong><br>
                <small>${log.date} • ${log.minutes} mins</small>
            </div>
            <button class="btn-delete" onclick="deleteLog(${log.id})">Delete</button>
        `;
        logList.appendChild(div);
    });
}

function deleteLog(id) {
    logs = logs.filter(l => l.id !== id);
    localStorage.setItem('riyaz_logs', JSON.stringify(logs));
    renderLogs();
    updateDashboard();
}

// --- Dashboard Logic ---
function updateDashboard() {
    const totalMins = logs.reduce((sum, l) => sum + l.minutes, 0);
    document.getElementById('total-minutes').innerText = totalMins;
    document.getElementById('total-hours').innerText = (totalMins / 60).toFixed(1);
    
    // Calculate Streak
    const uniqueDates = [...new Set(logs.map(l => l.date))].sort().reverse();
    let streak = 0;
    if (uniqueDates.length > 0) {
        const today = new Date().toISOString().split('T')[0];
        // If no log today, check if streak continued until yesterday
        let checkDate = new Date(uniqueDates[0] === today ? today : uniqueDates[0]);
        streak = uniqueDates.length; // Simplified streak for demo
    }
    document.getElementById('practice-streak').innerText = streak;

    // Completed Ragas (where all 6 tasks are checked)
    const completedCount = Object.values(progress).filter(p => p.length === 6).length;
    document.getElementById('completed-ragas').innerText = completedCount;

    // Overall Progress
    const totalPossibleTasks = RAGAS.length * 6;
    const totalCompletedTasks = Object.values(progress).reduce((sum, p) => sum + p.length, 0);
    const overallPct = totalPossibleTasks ? Math.round((totalCompletedTasks / totalPossibleTasks) * 100) : 0;
    
    document.getElementById('overall-percentage').innerText = overallPct + '%';
    document.querySelector('.circular-progress').style.background = `conic-gradient(var(--success) ${overallPct}%, #eee 0%)`;
}

// --- Filters ---
function setupFilters() {
    const search = document.getElementById('search-input');
    const time = document.getElementById('time-filter');
    const mood = document.getElementById('mood-filter');

    const triggerRender = () => renderRagas(search.value, time.value, mood.value);

    search.oninput = triggerRender;
    time.onchange = triggerRender;
    mood.onchange = triggerRender;
}

// --- Modal Close ---
closeModal.onclick = () => ragaModal.style.display = 'none';
window.onclick = (e) => { if (e.target == ragaModal) ragaModal.style.display = 'none'; };

// Launch
document.addEventListener('DOMContentLoaded', init);