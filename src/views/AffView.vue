<template>
  <div class="landing-page">
    <header>
      <img src="logo.png" alt="Company Logo" class="logo" />
    </header>
    <main>
      <div class="hero-section">
        <h1 class="hero-title">Discover the Latest Tech & Gadgets</h1>
        <p class="hero-subtitle">
          Stay up to date with the latest and greatest in tech and gadgets
        </p>
        <div class="hero-images">
          <img src="tech1.jpg" alt="Tech Image 1" class="hero-image" />
          <img src="tech2.jpg" alt="Tech Image 2" class="hero-image" />
          <img src="gadget1.jpg" alt="Gadget Image 1" class="hero-image" />
        </div>
      </div>
      <div class="form-section">
        <h2 class="form-title">Join the Tech Community</h2>
        <p class="form-subtitle">
          Sign up to receive the latest tech news and updates
        </p>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" class="form-submit-button">Sign Up</button>
        </form>
        <p class="form-login-suggestion">
          Already a member? <a href="#" class="form-login-link">Log In</a>
        </p>
      </div>
    </main>
  </div>
</template>

<style>
/* Add your custom styles here */
</style>
