// Remove Loader Interface Frame Post Complete DOM Pipeline Processing
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 400);
});

// Clipboard Management Infrastructure Core Action Routing
function copyToClipboard(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
    }).catch(err => {
        console.error('System failed to execute write pipeline: ', err);
    });
}

// System Core Universal Toast Event Execution Window
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('toast-hidden');
    
    setTimeout(() => {
        toast.classList.add('toast-hidden');
    }, 2500);
}

// Live Dynamic End-to-End Cryptographic QR Framework Router
const qrToggleBtn = document.getElementById('qr-toggle-btn');
const qrContainer = document.getElementById('qr-container');
const qrImage = document.getElementById('qr-image');

qrToggleBtn.addEventListener('click', () => {
    if (qrContainer.classList.contains('hidden')) {
        const currentURL = window.location.href;
        // Connects to secure dynamic data routing rendering API pipeline for QR generation
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentURL)}&color=090e17`;
        
        qrContainer.classList.remove('hidden');
        qrToggleBtn.textContent = 'Hide QR Code Network';
    } else {
        qrContainer.classList.add('hidden');
        qrToggleBtn.textContent = 'Show Live QR Network';
    }
});
