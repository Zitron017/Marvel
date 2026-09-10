<script setup>
import navbar from '@/components/navbar.vue'
</script>

<template>
  <div class="homepage">
    <navbar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-columns">
        <!-- Left Column: Hero Text -->
        <div class="hero-left">
          <span class="established">ESTABLISHED 1939</span>
          <h1>
            Empowering <em>Earth's</em><br />
            Mightiest <br />Heroes.
          </h1>
          <p>
            The premier training and strategic operations facility for extraordinary individuals. 
            Dedicated to global protection, advanced technological research, and the pursuit of
            <strong>Justice and Innovation</strong>.
          </p>
          <div class="buttons">
            <button>Explore Initiatives</button>
            <button class="secondary">Join the Roster</button>
          </div>
        </div>

        <!-- Right Column: Marvel Feature Badge -->
        <div class="hero-right">
          <img src="@/assets/logo.png" alt="Marvel Emblem" class="seal" />
          <h2>AVENGERS ACADEMY</h2>
          <span class="tagline">HEROES IN TRAINING</span>
          <p class="quote">"With Great Power Comes Great Responsibility"</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-us">
      <h2>Global Defense &amp; Leadership</h2>
      <p>
        Avengers Academy is a world-class institution committed to training the next generation 
        of defenders. We integrate tactical mastery, technological advancement, and ethical leadership.
        <br>-Zidge Escleto
      </p>
    </section>
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
  background-color: #0f1115;
  color: #f1f5f9;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* HERO SECTION */
.hero {
  background-color: #0f1115;
  width: 100%;
  margin: 0;
  padding: 4rem 2rem;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-columns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
}

/* HERO LEFT */
.hero-left {
  flex: 1;
  min-width: 320px;
  color: #ffffff;
}

.established {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  color: #e62429;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  border-left: 3px solid #e62429;
  padding-left: 0.75rem;
  text-transform: uppercase;
}

.hero-left h1 {
  font-family: 'Impact', 'Trebuchet MS', sans-serif;
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 1.25rem;
  color: #ffffff;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.hero-left h1 em {
  font-style: normal;
  background: linear-gradient(135deg, #ffffff 0%, #e62429 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-left p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #cbd5e1;
}

.hero-left p strong {
  color: #ffffff;
}

.hero-left .buttons {
  display: flex;
  gap: 1rem;
}

.hero-left .buttons button {
  background: linear-gradient(135deg, #e62429 0%, #b31217 100%);
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  border: none;
  border-radius: 6px;
  padding: 0.85rem 1.6rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 14px rgba(230, 36, 41, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-left .buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(230, 36, 41, 0.6);
}

.hero-left .buttons button.secondary {
  background: transparent;
  border: 2px solid #e62429;
  color: #ffffff;
  box-shadow: none;
}

.hero-left .buttons button.secondary:hover {
  background-color: rgba(230, 36, 41, 0.15);
}

/* HERO RIGHT */
.hero-right {
  flex: 0.8;
  background: linear-gradient(135deg, #181b20 0%, #251214 100%);
  border: 1px solid #331a1c;
  border-radius: 12px;
  text-align: center;
  padding: 3.5rem 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

.seal {
  width: 180px;
  height: auto;
  object-fit: contain;
  margin-bottom: 1.25rem;
}

.hero-right h2 {
  font-family: 'Impact', 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0.5rem 0 0.25rem;
}

.tagline {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  color: #e62429;
  letter-spacing: 2px;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.hero-right::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #e62429 0%, #ff6b6b 100%);
  margin: 1.25rem auto;
  border-radius: 2px;
}

.quote {
  font-style: italic;
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.5;
  margin: 0;
}

/* ABOUT SECTION */
.about-us {
  background-color: #12141a;
  border-top: 1px solid #1e222b;
  padding: 3.5rem 2rem;
  text-align: center;
}

.about-us h2 {
  font-family: 'Impact', 'Trebuchet MS', sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.about-us p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .hero-columns {
    flex-direction: column;
    text-align: center;
  }
  .hero-left {
    margin-left: 0;
  }
  .hero-left .buttons {
    justify-content: center;
  }
  .established {
    border-left: none;
    padding-left: 0;
  }
}
</style>