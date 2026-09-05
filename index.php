<?php
// Data Profil
$nama = "Novitasari";
$bio = "Hello! I’m Novitasari, an Information Systems student at Universitas Tanjungpura. I’m currently exploring various areas of technology while building valuable experiences and skills that will help me contribute meaningfully in the future.";

// Data Pendidikan
$education = [
    [
        "tahun" => "2025 – Now",
        "kampus" => "Universitas Tanjungpura",
        "jurusan" => "S1 Information Systems"
    ],
    [
        "tahun" => "2022 – 2025",
        "kampus" => "SMA Negeri 1 Pontianak",
        "jurusan" => "MIPA"
    ]
];

// Data Sosial Media
$socials = [
    ["platform" => "Instagram", "handle" => "@vitazssr"],
    ["platform" => "Tiktok", "handle" => "swetezz"],
    ["platform" => "GitHub", "handle" => "novitaasaariiii27-bit"]
];
?>
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me — <?php echo $nama; ?></title>
    
    <!-- Google Fonts untuk font pixel dan serif retro -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&family=Playfair+Display:ital,wght@0,600;1,600&family=Tahoma&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- Bar Navigasi Atas Gaya Windows/Browser -->
    <div class="top-nav">
        <div class="nav-tabs">
            <button class="tab active">Start</button>
            <button class="tab">about me</button>
            <button class="tab">skills</button>
            <button class="tab">education</button>
            <button class="tab">+</button>
        </div>
        <div class="nav-time">
            <?php echo date('d/m/Y H:i A'); ?>
        </div>
    </div>

    <!-- Layout Utama -->
    <div class="main-container">

        <!-- Kolom Kiri: Teks & Informasi -->
        <div class="left-col">
            <h1 class="pixel-heading">about me!</h1>
            <h2 class="sub-heading"><?php echo $nama; ?></h2>
            <p class="bio-text"><?php echo $bio; ?></p>

            <!-- Section Skills -->
            <div class="section-block">
                <h3 class="section-title">SKILLS</h3>
                <div class="skills-icons">
                    <span class="icon-badge" title="Figma">F</span>
                    <span class="icon-badge" title="HTML">H</span>
                    <span class="icon-badge" title="CSS">C</span>
                    <span class="icon-badge" title="PHP">P</span>
                    <span class="icon-badge" title="Git">G</span>
                </div>
            </div>

            <!-- Section Education -->
            <div class="section-block">
                <h3 class="section-title">EDUCATION</h3>
                <div class="education-list">
                    <?php foreach ($education as $edu): ?>
                        <div class="edu-item">
                            <span class="edu-year"><?php echo $edu['tahun']; ?></span>
                            <strong class="edu-school"><?php echo $edu['kampus']; ?></strong>
                            <span class="edu-major"><?php echo $edu['jurusan']; ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <!-- Kolom Kanan: Windows Pop-up Gambar & Sosmed -->
        <div class="right-col">

            <!-- Window 1: Foto Profil -->
            <div class="retro-window photo-window">
                <div class="window-header">
                    <span>MEET-NOVITA</span>
                    <button class="btn-close">X</button>
                </div>
                <div class="window-body">
                    <!-- Ganti profil.jpg dengan nama file fotomu -->
                    <img src="hi.jpg" alt="Foto <?php echo $nama; ?>" class="profile-img">
                </div>
            </div>

            <!-- Window 2: Social Media (Menumpuk di kanan bawah) -->
            <div class="retro-window socials-window">
                <div class="window-header">
                    <span>SOCIALS</span>
                    <button class="btn-close">X</button>
                </div>
                <div class="window-body">
                    <ul class="social-list">
                        <?php foreach ($socials as $soc): ?>
                            <li>
                                <strong><?php echo $soc['platform']; ?>:</strong> 
                                <span><?php echo $soc['handle']; ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>

        </div>

    </div>

</body>

</html>