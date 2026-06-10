/* ==========================================
BhadeKaar Main JavaScript
Version 1.0
========================================== */

document.addEventListener("DOMContentLoaded", function () {

```
console.log("BhadeKaar Loaded");

initializeSearch();
initializeAnimations();
initializeWhatsApp();
initializeForms();
```

});

/* ==========================================
Search Box
========================================== */

function initializeSearch() {

```
const searchButton = document.querySelector(".search-box button");

if (!searchButton) return;

searchButton.addEventListener("click", function () {

    const category =
        document.querySelector(".search-box select")?.value || "";

    const location =
        document.querySelector(".search-box input")?.value || "";

    if (category === "Select Requirement") {
        alert("Please select a requirement.");
        return;
    }

    if (location.trim() === "") {
        alert("Please enter a location.");
        return;
    }

    alert(
        `Searching for ${category} in ${location}\n\nMarketplace functionality will be connected in Phase 2.`
    );
});
```

}

/* ==========================================
Scroll Animations
========================================== */

function initializeAnimations() {

```
const cards = document.querySelectorAll(
    ".card, .step, .stat-card"
);

if (!cards.length) return;

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.1
    }
);

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});
```

}

/* ==========================================
WhatsApp
========================================== */

function initializeWhatsApp() {

```
const whatsappButtons =
    document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach((button) => {

    button.addEventListener("click", function () {

        console.log("WhatsApp Contact Clicked");

    });

});
```

}

/* ==========================================
Forms
========================================== */

function initializeForms() {

```
const forms = document.querySelectorAll("form");

forms.forEach((form) => {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Form submitted successfully. Backend integration will be enabled in the next phase."
        );

    });

});
```

}

/* ==========================================
Dashboard Demo Data
========================================== */

const dashboardData = {

```
customer: {
    activeBookings: 2,
    completedBookings: 14,
    savedVendors: 6
},

vendor: {
    leadsToday: 8,
    monthlyRevenue: 42500,
    activeListings: 18
},

admin: {
    users: 125,
    vendors: 43,
    bookings: 512,
    revenue: 185000
}
```

};

/* ==========================================
Utility Functions
========================================== */

function formatCurrency(amount) {

```
return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
}).format(amount);
```

}

function showNotification(message) {

```
alert(message);
```

}

/* ==========================================
Future Integrations Placeholder
========================================== */

/*

PHASE 2

SUPABASE

* Authentication
* Database
* Vendor Profiles
* Customer Profiles

PHASE 3

GOOGLE LOGIN
PHONE OTP LOGIN

PHASE 4

RAZORPAY
CASHFREE

PHASE 5

GOOGLE MAPS
LIVE TRACKING

*/
