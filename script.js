        // --- Ganti 'af56' jika Anda ingin mengganti kuncinya ---
        const EXPECTED_USER_AGENT = "af56";
        
        // Ambil elemen-elemen yang akan kita kontrol
        const uaDisplay = document.getElementById('user-agent-display');
        const linksContainer = document.getElementById('exam-links');
        const errorContainer = document.getElementById('error-message');

        // Ambil User Agent asli dari browser pengunjung
        const detectedUserAgent = navigator.userAgent;
        
        // Tampilkan User Agent yang terdeteksi (untuk debug)
        uaDisplay.textContent = detectedUserAgent;

        // Lakukan Pengecekan
        if (detectedUserAgent === EXPECTED_USER_AGENT) {
            // JIKA BENAR: Tampilkan link ujian
            linksContainer.style.display = 'block';
        } else {
            // JIKA SALAH: Tampilkan pesan error
            errorContainer.style.display = 'block';
        }