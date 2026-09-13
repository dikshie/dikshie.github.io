/**
 * dikshie.github.io - Minimalist JavaScript
 * Handles theme switching, PDF modal preview, and clipboard copy with toast.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPdfModal();
  initClipboard();
});

/* --------------------------------------------------------------------------
   Theme Switcher (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* --------------------------------------------------------------------------
   PDF Viewer Modal
   -------------------------------------------------------------------------- */
function initPdfModal() {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-iframe');
  const titleEl = document.getElementById('pdf-modal-title');
  const downloadLink = document.getElementById('pdf-modal-download');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !iframe) return;

  window.openPdfModal = function(url, title) {
    iframe.src = url;
    if (titleEl) titleEl.textContent = title || 'Document Preview';
    if (downloadLink) {
      downloadLink.href = url;
      downloadLink.setAttribute('download', url.split('/').pop());
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closePdfModal = function() {
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closePdfModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closePdfModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      window.closePdfModal();
    }
  });
}

/* --------------------------------------------------------------------------
   Clipboard Copy & Toast Notification
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.appendChild(toast);
    document.body.appendChild(container);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function initClipboard() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard!';
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(label);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(label);
      }
    });
  });
}
