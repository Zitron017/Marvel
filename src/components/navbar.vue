<template>
  <nav class="marvel-nav">
    <div class="brand">
      <img src="@/assets/logo.png" alt="Marvel Academy Logo" class="logo" />
      <div class="brand-text">
        <span class="brand-name">AVENGERS ACADEMY</span> 
        <span class="brand-tagline">HEROES UNITED</span> 
      </div>
    </div>

    <div class="nav-right">
      <ul>
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li><router-link to="/about_us" active-class="active">About Us</router-link></li>
        <li><router-link to="/admission" active-class="active">Admissions</router-link></li>
        <li>Initiatives</li>
        <li>Roster</li>
        <li>News</li>
        <li>Contact</li>
        <li><router-link to="/sample-data">Sample Data</router-link></li>
        <li><router-link to="/sample-methods">Sample Methods</router-link></li>
        <li><router-link to="/sample-vmodel">Live Profile</router-link></li>


      </ul>

      <div class="portal-btn">HERO PORTAL</div>
    </div>
  </nav>
</template>

<style scoped> 
.marvel-nav {
  font-family: 'Impact', 'Trebuchet MS', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 50px;
  background: linear-gradient(180deg, #121212 0%, #1a1a1a 100%);
  border-bottom: 3px solid #e62429;
  flex-wrap: wrap;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}


.logo {
  height: 38px;            
  width: auto;             
  object-fit: contain;     
  border-radius: 0;        
  border: none;            
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
}

.brand-tagline {
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #e62429;
  text-transform: uppercase;
}

.marvel-nav ul {
  display: flex;
  list-style: none;
  gap: 24px;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #cccccc;
}

.portal-btn {
  background: linear-gradient(135deg, #e62429 0%, #b31217 100%);
  color: #fff;
  font-family: Arial, sans-serif;
  font-weight: 800;
  border-radius: 4px; 
  border: none;
  padding: .6rem 1.2rem;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(230, 36, 41, 0.4);
}

.marvel-nav a {
  text-decoration: none;
  color: #ffffff;
  transition: color 0.2s ease;
}

.marvel-nav a:hover,
.marvel-nav a.active {
  color: #e62429;
  text-decoration: none;
  border-bottom: 2px solid #e62429;
}
</style>