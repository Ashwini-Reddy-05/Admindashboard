const stats = [
    { title: 'Total Users', value: 1234 },
    { title: 'Revenue', value: '$45,678' },
    { title: 'Orders', value: 567 },
    { title: 'Products', value: 89 }
];

function showStats() {
    const container = document.getElementById('stats');
    
    container.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <h3>${stat.title}</h3>
            <div class="number">${stat.value}</div>
        </div>
    `).join('');
}

showStats();
