/**
 * Simple client-side password protection for tools pages
 * Change PASSWORD below to update the password
 */

// ========================================
// CONFIGURATION
// ========================================
const PASSWORD = 'agorax2025'; // Change this to your desired password
const STORAGE_KEY = 'agora-tools-auth';
const AUTH_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

// ========================================
// PASSWORD PROTECTION LOGIC
// ========================================
(function() {
    // Check if already authenticated
    function isAuthenticated() {
        const authData = localStorage.getItem(STORAGE_KEY);
        if (!authData) return false;

        try {
            const { timestamp, authenticated } = JSON.parse(authData);
            const elapsed = Date.now() - timestamp;

            // Check if authentication is still valid
            if (authenticated && elapsed < AUTH_DURATION) {
                return true;
            }
        } catch (e) {
            console.error('Auth check failed:', e);
        }

        // Clear invalid auth data
        localStorage.removeItem(STORAGE_KEY);
        return false;
    }

    // Store authentication
    function setAuthenticated() {
        const authData = {
            authenticated: true,
            timestamp: Date.now()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
    }

    // Create password overlay
    function createPasswordOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'password-overlay';
        overlay.innerHTML = `
            <div class="password-container">
                <div class="password-card">
                    <h2>🔒 Protected Area</h2>
                    <p>This section is for Agora X site maintainers only.</p>
                    <p class="password-subtitle">Please enter the password to continue:</p>

                    <form id="password-form">
                        <input
                            type="password"
                            id="password-input"
                            placeholder="Enter password"
                            autocomplete="off"
                            autofocus
                        />
                        <button type="submit" class="btn-unlock">Unlock</button>
                    </form>

                    <div id="password-error" class="password-error"></div>

                    <div class="password-footer">
                        <p>Don't have the password? Contact the Agora X team.</p>
                    </div>
                </div>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #password-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, #DFE4E2 0%, #786F4F 100%);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .password-container {
                width: 100%;
                max-width: 450px;
                padding: 20px;
            }

            .password-card {
                background: white;
                padding: 40px;
                border-radius: 8px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                text-align: center;
            }

            .password-card h2 {
                color: #786F4F;
                margin-bottom: 15px;
                font-size: 1.8rem;
            }

            .password-card p {
                color: #666;
                margin-bottom: 15px;
                line-height: 1.6;
            }

            .password-subtitle {
                font-weight: 600;
                color: #333;
                margin-top: 25px;
            }

            #password-form {
                margin: 25px 0;
            }

            #password-input {
                width: 100%;
                padding: 14px;
                border: 2px solid #DFE4E2;
                border-radius: 4px;
                font-size: 16px;
                margin-bottom: 15px;
                transition: border-color 0.3s;
            }

            #password-input:focus {
                outline: none;
                border-color: #786F4F;
            }

            .btn-unlock {
                width: 100%;
                padding: 14px;
                background-color: #786F4F;
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.3s;
            }

            .btn-unlock:hover {
                background-color: #5f5a3f;
            }

            .password-error {
                color: #dc3545;
                font-size: 14px;
                margin-top: 10px;
                min-height: 20px;
            }

            .password-footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
            }

            .password-footer p {
                font-size: 0.9rem;
                color: #999;
            }

            @media (max-width: 600px) {
                .password-card {
                    padding: 30px 25px;
                }

                .password-card h2 {
                    font-size: 1.5rem;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(overlay);

        // Handle form submission
        const form = document.getElementById('password-form');
        const input = document.getElementById('password-input');
        const errorDiv = document.getElementById('password-error');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const enteredPassword = input.value;

            if (enteredPassword === PASSWORD) {
                setAuthenticated();
                overlay.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    overlay.remove();
                }, 300);
            } else {
                errorDiv.textContent = '❌ Incorrect password. Please try again.';
                input.value = '';
                input.focus();

                // Shake animation
                form.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    form.style.animation = '';
                }, 500);
            }
        });

        // Add shake animation
        const shakeStyle = document.createElement('style');
        shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }

            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(shakeStyle);
    }

    // Initialize password protection
    function init() {
        if (!isAuthenticated()) {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', createPasswordOverlay);
            } else {
                createPasswordOverlay();
            }
        }
    }

    // Run initialization
    init();
})();
