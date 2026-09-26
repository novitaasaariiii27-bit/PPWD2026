// ========== 1. FITUR TEMA GELAP (MODE COKELAT) ==========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️ Mode Pink';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️ Mode Pink';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙 Mode Cokelat';
        }
    });
}

// ========== 2. EFEK MENGETIK ==========
const typingText = document.getElementById('typing-text');
if (typingText) {
    const roles = [
        'Mahasiswa Sistem Informasi.',
        'Pembelajar Kreatif.',
        'Pengembang Solusi Digital.'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 80 : 120;
        if (!isDeleting && charIndex === currentRole.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 500;
        }
        setTimeout(typeEffect, delay);
    }
    typeEffect();
}

// ========== 3. DATA 4 PROYEK AKADEMIK & KREATIF ==========
const projectGrid = document.getElementById('project-grid');
if (projectGrid) {
    const projects = [
        {
            title: 'TalentHub',
            category: 'CRM & Bisnis Digital',
            desc: 'Proyek simulasi bisnis digital yang mengeksplorasi penerapan CRM menggunakan Mekari Qontak pada lokapasar pekerja lepas.',
            image: 'image/talenthub.webp'
        },
        {
            title: 'PawNovCare',
            category: 'Analisis Sistem',
            desc: 'Proyek analisis dan perancangan sistem informasi layanan penitipan hewan dengan fokus pada kebutuhan pengguna dan proses layanan.',
            image: 'image/pawnovcare.webp'
        },
        {
            title: 'PontiSend',
            category: 'Struktur Data',
            desc: 'Program pengelolaan data pengiriman yang menerapkan konsep struktur data dan pemrograman untuk mengatur informasi resi, zona, dan status pengiriman.',
            image: 'image/pontisend.webp'
        },
        {
            title: 'BECA',
            category: 'Desain UI/UX',
            desc: 'Proyek desain antarmuka yang berfokus pada perancangan tampilan dan pengalaman pengguna yang konsisten serta intuitif.',
            image: 'image/beca.webp'
        }
    ];

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'work-item';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x200/f48fb1/fff?text=${encodeURIComponent(project.title)}'">
            <span class="category-tag">${project.category}</span>
            <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin: 10px 0 5px;">${project.title}</h3>
            <p style="font-size: 0.9rem; line-height: 1.5; font-weight: 600;">${project.desc}</p>
        `;
        projectGrid.appendChild(card);
    });
}

// ========== 4. DATA 2 PENGALAMAN ORGANISASI ==========
const orgGrid = document.getElementById('org-grid');
if (orgGrid) {
    const organizations = [
        {
            title: 'HMSI FMIPA UNTAN',
            role: 'Sekretaris',
            desc: 'Mengelola administrasi, penyusunan dokumentasi resmi, serta mengoordinasikan kebutuhan kesekretariatan kegiatan organisasi.',
            image: 'image/hmsi.webp'
        },
        {
            title: 'Art Laboratory',
            role: 'Sekretaris',
            desc: 'Berkontribusi dalam pengelolaan arsip administrasi, dokumentasi acara, serta mendukung kelancaran koordinasi internal.',
            image: 'image/artlab.webp'
        }
    ];

    organizations.forEach(org => {
            const card = document.createElement('div');
            card.className = 'work-item';
            card.innerHTML = `
                <img src="${org.image}" alt="${org.title}" onerror="this.src='https://via.placeholder.com/300x200/4a2c2a/fff?text=${encodeURIComponent(org.title)}'">
                <span class="category-tag" style="background: var(--primary-pink); color: #4a2c2a; font-weight: 900; border: none;">${org.role}</span>
                <h3 style="font-family: 'Fredoka', sans-serif; font-size: 1.4rem; margin: 10px 0 5px;">${org.title}</h3>
                <p style="font-size: 0.9rem; line-height: 1.5; font-weight: 600;">${org.desc}</p>
            `;
            orgGrid.appendChild(card);
    });
}

// ==========5. PENGIRIMAN FORM TANPA PINDAH HALAMAN (AJAX)==========
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const submitBtn = form.querySelector('.btn-submit');
        const originalBtnText = submitBtn.textContent;

        submitBtn.textContent = 'Mengirim Pesan... ⏳';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Yay! Pesanmu berhasil terkirim ke Novita 💌');
                form.reset();
            } else {
                alert('Oops! Ada masalah saat mengirim pesan. Coba lagi ya.');
            }
        } catch (error) {
            alert('Oops! Gagal terhubung. Pastikan koneksi internetmu aktif.');
        } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}