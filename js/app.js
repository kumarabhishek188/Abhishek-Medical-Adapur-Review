/**
 * Abhishek Medical Hall - Smart QR Google Review Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const shopNameEl = document.getElementById('shopName');
  const shopTaglineEl = document.getElementById('shopTagline');
  const shopLocationPrimaryEl = document.getElementById('shopLocationPrimary');
  const shopLocationSecondaryEl = document.getElementById('shopLocationSecondary');
  
  const starButtons = document.querySelectorAll('.star-btn');
  const ratingStatusEl = document.getElementById('ratingStatus');
  const feedbackSection = document.getElementById('feedbackSection');
  
  const categoryTabsContainer = document.getElementById('categoryTabs');
  const suggestionsListContainer = document.getElementById('suggestionsList');
  const reviewTextarea = document.getElementById('reviewTextarea');
  
  const submitReviewBtn = document.getElementById('submitReviewBtn');
  const skipBtn = document.getElementById('skipBtn');
  const toastContainer = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  
  const redirectModal = document.getElementById('redirectModal');
  const modalCopiedText = document.getElementById('modalCopiedText');
  const modalOpenGoogleBtn = document.getElementById('modalOpenGoogleBtn');

  // State
  let selectedRating = null;
  let activeCategoryIndex = 0;

  // Initialize shop info from CONFIG
  if (typeof CONFIG !== 'undefined') {
    if (shopNameEl) shopNameEl.textContent = CONFIG.shopName || "Abhishek Medical Hall";
    if (shopTaglineEl) shopTaglineEl.textContent = CONFIG.shopTagline || "Trusted Healthcare & Genuine Medicines";
    if (CONFIG.shopLocation) {
      const locationParts = CONFIG.shopLocation.split(/,\s*(?=East Champaran,)/);
      if (shopLocationPrimaryEl) {
        shopLocationPrimaryEl.textContent = locationParts[0];
      }
      if (shopLocationSecondaryEl) {
        shopLocationSecondaryEl.textContent = locationParts[1] || "Adapur, Bihar";
      }
    }
  }

  // Render suggestion categories and pills
  function getCategoryReviews(category) {
    if (!category) return [];
    return category[`reviews${selectedRating}`] || category.reviews || [];
  }

  function renderSuggestions() {
    if (!CONFIG || !CONFIG.reviewSuggestions || CONFIG.reviewSuggestions.length === 0) return;
    
    // Clear tabs
    categoryTabsContainer.innerHTML = '';
    
    CONFIG.reviewSuggestions.forEach((cat, idx) => {
      const tab = document.createElement('button');
      tab.className = `category-tab ${idx === activeCategoryIndex ? 'active' : ''}`;
      tab.textContent = cat.category;
      tab.setAttribute('type', 'button');
      tab.addEventListener('click', () => {
        activeCategoryIndex = idx;
        renderCategoryTabs();
        renderSuggestionPills();
      });
      categoryTabsContainer.appendChild(tab);
    });

    renderSuggestionPills();
  }

  function renderCategoryTabs() {
    const tabs = categoryTabsContainer.querySelectorAll('.category-tab');
    tabs.forEach((tab, idx) => {
      if (idx === activeCategoryIndex) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function renderSuggestionPills() {
    suggestionsListContainer.innerHTML = '';
    const currentCategory = CONFIG.reviewSuggestions[activeCategoryIndex];
    const reviews = getCategoryReviews(currentCategory);

    reviews.forEach((reviewText) => {
      const pill = document.createElement('div');
      pill.className = 'suggestion-pill';
      if (reviewTextarea.value.trim() === reviewText.trim()) {
        pill.classList.add('selected');
      }

      pill.innerHTML = `
        <svg class="chip-icon" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>${escapeHtml(reviewText)}</span>
      `;

      pill.addEventListener('click', () => {
        // Unselect others
        document.querySelectorAll('.suggestion-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        
        // Populate textarea
        reviewTextarea.value = reviewText;
        reviewTextarea.focus();
        showToast("✨ Suggestion selected! You can edit or submit directly.");
      });

      suggestionsListContainer.appendChild(pill);
    });
  }

  // Star Rating Interaction
  starButtons.forEach(btn => {
    const ratingValue = parseInt(btn.getAttribute('data-rating'), 10);

    if (btn.classList.contains('disabled')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast("⭐ Please choose 4 or 5 stars to leave a public Google review.");
        highlightTopStars();
      });
    } else {
      btn.addEventListener('click', () => {
        selectRating(ratingValue, btn);
      });
    }
  });

  function highlightTopStars() {
    const activeBtns = document.querySelectorAll('.star-btn.active-enabled');
    activeBtns.forEach(btn => {
      btn.classList.add('selected');
      setTimeout(() => {
        if (selectedRating !== parseInt(btn.getAttribute('data-rating'), 10)) {
          btn.classList.remove('selected');
        }
      }, 700);
    });
  }

  function selectRating(rating, clickedBtn) {
    const ratingChanged = selectedRating !== rating;
    selectedRating = rating;

    // Update active visual state
    starButtons.forEach(btn => btn.classList.remove('selected'));
    clickedBtn.classList.add('selected');

    // Update rating status banner
    if (rating === 5) {
      ratingStatusEl.innerHTML = "🌟 <strong>5 Star (Excellent)</strong> selected! Thank you for supporting us.";
    } else if (rating === 4) {
      ratingStatusEl.innerHTML = "✨ <strong>4 Star (Very Good)</strong> selected! Thank you for your support.";
    }

    // Reveal feedback section
    feedbackSection.classList.add('show');
    
    // Auto-select first popular suggestion if textarea is empty
    if ((!reviewTextarea.value.trim() || ratingChanged) && CONFIG.reviewSuggestions.length > 0) {
      const defaultSuggestion = getCategoryReviews(CONFIG.reviewSuggestions[0])[0];
      reviewTextarea.value = defaultSuggestion;
    }

    renderSuggestions();

    // Smooth scroll down to feedback section
    setTimeout(() => {
      feedbackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }

  // Copy to Clipboard Utility
  async function copyToClipboard(text) {
    if (!text) return false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        // Fallback for non-https or older webviews
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        textArea.remove();
        return successful;
      }
    } catch (err) {
      console.warn("Clipboard copy error:", err);
      return false;
    }
  }

  // Toast Notification
  let toastTimer = null;
  function showToast(msg) {
    if (!toastContainer) return;
    toastMessage.textContent = msg;
    toastContainer.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastContainer.classList.remove('show');
    }, 3200);
  }

  // Handle Review Submission / Redirection
  async function handleProceedToGoogle(isSkip = false) {
    const textToCopy = isSkip ? "" : reviewTextarea.value.trim();
    const googleUrl = (CONFIG && CONFIG.googleReviewUrl) ? CONFIG.googleReviewUrl : "https://www.google.com";

    if (textToCopy) {
      await copyToClipboard(textToCopy);
      
      // Populate preview in modal
      if (modalCopiedText) {
        modalCopiedText.textContent = `"${textToCopy}"`;
      }
      
      // Show confirmation popup with immediate redirect button
      if (redirectModal) {
        redirectModal.classList.add('active');
        
        // Auto open after a gentle 1.2s delay or let user click directly
        setTimeout(() => {
          window.open(googleUrl, '_blank');
        }, 1200);
      } else {
        window.open(googleUrl, '_blank');
      }
    } else {
      // Just redirect directly
      window.open(googleUrl, '_blank');
    }
  }

  // Event Listeners for Actions
  if (submitReviewBtn) {
    submitReviewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleProceedToGoogle(false);
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleProceedToGoogle(true);
    });
  }

  if (modalOpenGoogleBtn) {
    modalOpenGoogleBtn.addEventListener('click', () => {
      const googleUrl = (CONFIG && CONFIG.googleReviewUrl) ? CONFIG.googleReviewUrl : "https://www.google.com";
      window.open(googleUrl, '_blank');
      redirectModal.classList.remove('active');
    });
  }

  // Helper: HTML escape
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Initial render of suggestions
  renderSuggestions();
});
