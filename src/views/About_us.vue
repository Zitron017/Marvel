<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <div class="about-page">
    <navbar />

    <main class="content-container">
      <!-- Section Header with Marvel Gradient -->
      <div class="header-section">
        <span class="eyebrow">ASSEMBLE WITH US</span>
        <h1>ABOUT US</h1>
        <div class="marvel-divider"></div>
      </div>

      <!-- 3-Column Card Grid -->
      <div class="card-grid">
        <!-- Card 1: Recruitment Process -->
        <div class="card">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e62429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <h2>Recruitment Process</h2>
          <ol class="step-list">
            <li>
              <span class="step-number">1</span>
              <span>Submit online application via S.H.I.E.L.D. Portal.</span>
            </li>
            <li>
              <span class="step-number">2</span>
              <span>Take the Power &amp; Aptitude Assessment.</span>
            </li>
            <li>
              <span class="step-number">3</span>
              <span>Undergo interview with Avengers Division Heads.</span>
            </li>
            <li>
              <span class="step-number">4</span>
              <span>Pay clearance fees and register for academy tracks.</span>
            </li>
          </ol>
          <a href="#" class="card-link">Learn more &rarr;</a>
        </div>

        <!-- Card 2: Requirements -->
        <div class="card">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e62429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <h2>Requirements</h2>
          <ul class="check-list">
            <li><span class="check-icon">&#10003;</span> S.H.I.E.L.D. Security Clearance Form</li>
            <li><span class="check-icon">&#10003;</span> Character Reference Certificate</li>
            <li><span class="check-icon">&#10003;</span> Identification &amp; Photo (White Background)</li>
            <li><span class="check-icon">&#10003;</span> Mutation / Power Record (If Applicable)</li>
            <li><span class="check-icon">&#10003;</span> Transfer Credentials (for Transferees)</li>
          </ul>
          <a href="#" class="card-link">View full checklist &rarr;</a>
        </div>

        <!-- Card 3: Programs Offered -->
        <div class="card">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e62429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <h2>Academy Tracks</h2>
          <p class="programs-desc">We offer specialized training tracks catering to different hero disciplines:</p>
          <div class="program-pills">
            <div class="pill-item">Tactical &amp; Field Operations</div>
            <div class="pill-item">Stark Tech &amp; Engineering</div>
            <div class="pill-item">Mystic Arts &amp; Sorcery</div>
            <div class="pill-item">Global Defense Leadership</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #0f1115;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #f1f5f9;
  padding-bottom: 5rem;
}

/* Header Styles */
.content-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.header-section {
  text-align: center;
  margin-bottom: 3.5rem;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: 800;
  color: #e62429;
  letter-spacing: 3px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.header-section h1 {
  font-family: 'Impact', 'Trebuchet MS', sans-serif;
  font-size: 3.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  /* Signature Marvel Red Gradient Text */
  background: linear-gradient(135deg, #ffffff 0%, #e62429 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  margin: 0 0 0.75rem 0;
}

.marvel-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #e62429 0%, #ff6b6b 100%);
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(230, 36, 41, 0.6);
}

/* Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Card Styling */
.card {
  background: #181b20;
  border: 1px solid #2a2e37;
  border-radius: 12px;
  padding: 2.25rem 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(230, 36, 41, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.card h2 {
  font-family: 'Impact', 'Trebuchet MS', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0 0 1.25rem 0;
}

/* Step List */
.step-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

.step-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #cbd5e1;
}

.step-number {
  background: linear-gradient(135deg, #e62429 0%, #b31217 100%);
  color: #ffffff;
  font-weight: 800;
  font-size: 0.75rem;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Check List */
.check-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

.check-list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.85rem;
  font-size: 0.9rem;
  color: #cbd5e1;
}

.check-icon {
  color: #e62429;
  font-weight: bold;
}

/* Programs List */
.programs-desc {
  font-size: 0.9rem;
  color: #cbd5e1;
  line-height: 1.4;
  margin: 0 0 1.25rem 0;
}

.program-pills {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex-grow: 1;
}

.pill-item {
  border: 1px solid #2a2e37;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #21252d;
}

/* Card Links */
.card-link {
  font-size: 0.875rem;
  font-weight: 800;
  color: #e62429;
  text-decoration: none;
  margin-top: auto;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-link:hover {
  text-decoration: underline;
}

/* Responsive Support */
@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>