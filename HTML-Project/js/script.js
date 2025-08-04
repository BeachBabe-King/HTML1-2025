// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeader();
    loadFooter();

    // Initialize contact form
    initContactForm();

    // Initialize product tabs
    initProductTabs();
});

/**Load the global header nav*/
function loadHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    // Get current page name
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const headerHTML = `
        <nav class="nav">
            <div class="container">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <img src="./img/Davisco.png" alt="Davisco Logo">
                        Davisco Shipping
                    </a>
                    <ul class="nav-menu">
                        <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                        <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                        <li><a href="shop.html" class="${currentPage === 'shop.html' ? 'active' : ''}">Products</a></li>
                        <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    header.innerHTML = headerHTML;
}

/** Load the global footer*/
function loadFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const footerHTML = `
        <div class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Davisco Shipping</h3>
                        <p>Leading the container revolution since 1975. Connecting global trade through innovative, secure, and standardized shipping solutions.</p>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="shop.html">Our Products</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contact Info</h4>
                        <p>📍 1 Georgian Dr<br>Barrie, ON L4M 1E9<br>Canada</p>
                        <p>📞 Sales: (705) 555-CCAN<br>Support: (705) 555-7878</p>
                        <p>📧 info@Daviscoshipping.com<br>sales@Daviscoshipping.com</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 1993 Davisco Shipping. All rights reserved.</p>
                </div>
            </div>
        </div>
    `;

    footer.innerHTML = footerHTML;
}

/** Initialize contact form*/
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // form validation
        if (validateForm(form)) {
            // Show success message
            alert('Thank you for your message! We will contact you within 24 hours.');
            form.reset();
        }
    });
}

/** Validate contact form*/
function validateForm(form) {
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const inquiryType = form.inquiryType.value;
    const message = form.message.value.trim();
    const privacy = form.privacy.checked;

    // Check required fields
    if (!firstName) {
        alert('Please enter your first name.');
        return false;
    }

    if (!lastName) {
        alert('Please enter your last name.');
        return false;
    }

    if (!email) {
        alert('Please enter your email address.');
        return false;
    }

    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!inquiryType) {
        alert('Please select an inquiry type.');
        return false;
    }

    if (!message) {
        alert('Please enter a message.');
        return false;
    }

    if (!privacy) {
        alert('Please agree to the Privacy Policy and Terms of Service.');
        return false;
    }

    return true;
}

/** Initialize product tabs */
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab; // Much simpler!
            if (tabName) {
                showTab(tabName);
            }
        });
    });
}

/** Show specific tab on product pages*/
function showTab(tabName) {
    // Hide all tab panels
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(function(panel) {
        panel.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show selected tab
    const targetPanel = document.getElementById(tabName);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    // Make corresponding button active
    const targetButton = document.querySelector('[data-tab="' + tabName + '"]');
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

/**Filter products on shop page*/
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Activate the clicked button
    buttons.forEach(function(btn) {
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // Show/hide products
    products.forEach(function(product) {
        const productType = product.getAttribute('data-type');

        if (category === 'all' || productType.includes(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

/**Request quote button functionality*/
function requestQuote() {
    alert('Quote Request:\n\nTo request a quote, please call our sales team at (705) 555-CCAN or visit our contact page ' +
        'to send us your requirements.');
}

/** Download catalog functionality*/
function downloadCatalog() {
    alert('Catalog Download:\n\nOur 1993 product catalog with complete specifications and pricing would be downloaded. ' +
        'Please contact sales@Daviscoshipping.com to request our catalog.');
}

/** Open support functionality*/
function openSupport() {
    alert('Technical Support:\n\nFor technical support:\n📞 (705) 555-7878\n📧 support@Daviscoshipping.com' +
        '\n\nSupport' + ' Hours: Monday-Friday, 7 AM - 6 PM EST');
}