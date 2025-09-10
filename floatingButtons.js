// floatingButtons.js
export function createFloatingButtons() {
  const floatingButtons = document.createElement('div');
  floatingButtons.className = 'floating-buttons';

  floatingButtons.innerHTML = `
    <a href="gastos.html" class="floating-btn gastos-btn" title="Gastos">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" 
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 1v22M5 6h14M5 18h14"/>
      </svg>
    </a>
    <a href="index.html" class="floating-btn home-btn" title="index">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" 
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>
      </svg>
    </a>
    <a href="senhas.html" class="floating-btn senhas-btn" title="Senhas">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" 
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="10" width="18" height="11" rx="2"/>
        <path d="M7 10V7a5 5 0 0 1 10 0v3"/>
      </svg>
    </a>
  `;

  // CSS exclusivo injetado
  const style = document.createElement('style');
  style.textContent = `
    .floating-buttons {
      position: fixed;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      border-radius: 40px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
    }
    .floating-buttons .floating-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 55px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(200,200,200,0.3);
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      color: #333;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .floating-buttons .floating-btn:hover {
      transform: scale(1.1);
      background: rgba(240, 240, 240, 0.9);
    }
    .floating-buttons svg {
      width: 26px;
      height: 26px;
    }
    @media (max-width: 600px) {
      .floating-buttons {
        gap: 15px;
        padding: 8px 16px;
      }
      .floating-buttons .floating-btn {
        width: 50px;
        height: 50px;
      }
      .floating-buttons svg {
        width: 24px;
        height: 24px;
      }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(floatingButtons);
}
