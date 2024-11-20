document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from server
    fetchData();
    
    // Initialize map
    initMap();
});

function fetchData() {
    fetch('server/data-endpoint') // Ganti dengan endpoint server Anda
        .then(response => response.json())
        .then(data => {
            const dataContent = document.getElementById('data-content');
            dataContent.innerHTML = JSON.stringify(data); // Sementara, tampilkan data mentah
        })
        .catch(error => console.error('Error fetching data:', error));
}

function initMap() {
    const mapElement = document.getElementById('map');
    // Inisialisasi peta menggunakan library seperti Leaflet.js atau Google Maps API
    // Contoh sederhana menggunakan Leaflet.js
    const map = L.map(mapElement).setView([-6.1751, 106.8650], 13); // Koordinat Jakarta

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Tambahkan marker atau layer lain sesuai kebutuhan
}
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    
    const homeContent = `
        <h2>Selamat Datang di Black Sigatoka Mapping!</h2>
        <p>Website ini bertujuan untuk memberikan informasi lengkap terkait penyebaran penyakit Black Sigatoka, yang menyerang tanaman pisang. Penyakit ini merupakan salah satu ancaman besar bagi produksi pisang di seluruh dunia.</p>
        <p>Melalui website ini, Anda dapat melihat data penyebaran penyakit, memetakan wilayah yang terinfeksi, serta mengetahui lebih banyak tentang pengembang proyek ini.</p>
    `;
    
    const dataContent = `
        <h2>Data Penyebaran Black Sigatoka</h2>
        <p>Berikut adalah data penyebaran penyakit Black Sigatoka yang telah diamati:</p>
        <table>
            <tr><th>Wilayah</th><th>Presentase Terinfeksi</th></tr>
            <tr><td>Wilayah A</td><td>45%</td></tr>
            <tr><td>Wilayah B</td><td>30%</td></tr>
            <tr><td>Wilayah C</td><td>20%</td></tr>
            <tr><td>Wilayah D</td><td>5%</td></tr>
        </table>
        <p>Data ini merupakan hasil observasi di lapangan yang dilakukan oleh tim peneliti di wilayah-wilayah yang rentan terinfeksi penyakit.</p>
    `;
    
    const pemetaanContent = `
        <h2>Peta Penyebaran Black Sigatoka</h2>
        <p>Peta di bawah ini menunjukkan distribusi wilayah yang terinfeksi oleh penyakit Black Sigatoka berdasarkan hasil survei terkini.</p>
        <img src="/images/peta-sigatoka.jpg" alt="Peta Penyebaran Black Sigatoka">
    `;
    
    const authorContent = `
        <h2>Tentang Pengembang</h2>
        <p>Website ini dikembangkan oleh [Nama Pengembang], seorang peneliti di bidang pertanian yang fokus pada pemanfaatan teknologi Machine Learning dan GIS dalam memantau dan memprediksi penyebaran penyakit tanaman.</p>
        <p>Tujuan utama pengembangan website ini adalah untuk membantu petani dan pihak terkait dalam mengantisipasi penyebaran penyakit yang dapat merugikan produksi pertanian.</p>
    `;

    // Load home content by default
    content.innerHTML = homeContent;

    document.getElementById('home-link').addEventListener('click', function () {
        content.innerHTML = homeContent;
    });
    document.getElementById('data-link').addEventListener('click', function () {
        content.innerHTML = dataContent;
    });
    document.getElementById('pemetaan-link').addEventListener('click', function () {
        content.innerHTML = pemetaanContent;
    });
    document.getElementById('author-link').addEventListener('click', function () {
        content.innerHTML = authorContent;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    
    const homeContent = `
        <h2>Selamat Datang di Black Sigatoka Mapping!</h2>
        <p>Website ini bertujuan untuk memberikan informasi lengkap terkait penyebaran penyakit Black Sigatoka, yang menyerang tanaman pisang. Penyakit ini merupakan salah satu ancaman besar bagi produksi pisang di seluruh dunia.</p>
        <p>Melalui website ini, Anda dapat melihat data penyebaran penyakit, memetakan wilayah yang terinfeksi, serta mengetahui lebih banyak tentang pengembang proyek ini.</p>
    `;
    
    const dataContent = `
        <h2>Data Penyebaran Black Sigatoka</h2>
        <p>Berikut adalah data penyebaran penyakit Black Sigatoka yang telah diamati:</p>
        <table>
            <tr><th>Wilayah</th><th>Presentase Terinfeksi</th></tr>
            <tr><td>Wilayah A</td><td>45%</td></tr>
            <tr><td>Wilayah B</td><td>30%</td></tr>
            <tr><td>Wilayah C</td><td>20%</td></tr>
            <tr><td>Wilayah D</td><td>5%</td></tr>
        </table>
        <p>Data ini merupakan hasil observasi di lapangan yang dilakukan oleh tim peneliti di wilayah-wilayah yang rentan terinfeksi penyakit.</p>
    `;
    
    const pemetaanContent = `
        <h2>Peta Penyebaran Black Sigatoka</h2>
        <p>Peta di bawah ini menunjukkan distribusi wilayah yang terinfeksi oleh penyakit Black Sigatoka berdasarkan hasil survei terkini.</p>
        <img src="/images/peta-sigatoka.jpg" alt="Peta Penyebaran Black Sigatoka">
    `;
    
    const authorContent = `
        <h2>Tentang Pengembang</h2>
        <p>Website ini dikembangkan oleh [Nama Pengembang], seorang peneliti di bidang pertanian yang fokus pada pemanfaatan teknologi Machine Learning dan GIS dalam memantau dan memprediksi penyebaran penyakit tanaman.</p>
        <p>Tujuan utama pengembangan website ini adalah untuk membantu petani dan pihak terkait dalam mengantisipasi penyebaran penyakit yang dapat merugikan produksi pertanian.</p>
    `;

    // Load home content by default
    content.innerHTML = homeContent;

    document.getElementById('home-link').addEventListener('click', function () {
        content.innerHTML = homeContent;
    });
    document.getElementById('data-link').addEventListener('click', function () {
        content.innerHTML = dataContent;
    });
    document.getElementById('pemetaan-link').addEventListener('click', function () {
        content.innerHTML = pemetaanContent;
    });
    document.getElementById('author-link').addEventListener('click', function () {
        content.innerHTML = authorContent;
    });
});
function displayDots(norm_c, norm_sr, norm_sp) {
    const maxDots = 100;

    const bars = document.querySelectorAll('.bar-container');
    bars.forEach((bar, index) => {
        let label = (index % 3) + 1;

        // Perbarui innerHTML dengan label bar yang berulang setiap tiga bar
        bar.innerHTML = `<h3 class="bar-title" onclick="showDetails(${index + 1})">Baris ${label}</h3>`;

        const count_c = Math.min(Math.round(norm_c), maxDots);
        const count_sr = Math.min(Math.round(norm_sr), maxDots);
        const count_sp = Math.min(Math.round(norm_sp), maxDots);

        // Menampilkan dot untuk Persentase_C (Hijau)
        for (let i = 0; i < count_c; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.backgroundColor = 'green';
            dot.style.left = `${Math.random() * 95}%`;
            dot.style.top = `${Math.random() * 100}%`;
            dot.style.transform = 'translate(-50%, -50%)';
            bar.appendChild(dot);
        }

        // Menampilkan dot untuk Persentase_SR (Kuning)
        for (let i = 0; i < count_sr; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.backgroundColor = 'yellow';
            dot.style.left = `${Math.random() * 95}%`;
            dot.style.top = `${Math.random() * 100}%`;
            dot.style.transform = 'translate(-50%, -50%)';
            bar.appendChild(dot);
        }

        // Menampilkan dot untuk Persentase_SP (Merah)
        for (let i = 0; i < count_sp; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.backgroundColor = 'red';
            dot.style.left = `${Math.random() * 95}%`;
            dot.style.top = `${Math.random() * 100}%`;
            dot.style.transform = 'translate(-50%, -50%)';
            bar.appendChild(dot);
        }
    });
}
