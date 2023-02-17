<template>
  <div class="landing-page">
    <div class="header">
      <h1>Welcome to Our App</h1>
      <p>Please log in or sign up to continue</p>
    </div>

    <div class="form-section">
      <div class="login-form">
        <h3>Login</h3>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>

      <div class="sign-up-suggestion">
        <p>Don't have an account?</p>
        <router-link to="/sign-up">Sign up now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #6d85b6, #b6b8c6);
}

.header {
  margin-top: 3rem;
}

.header h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
}

.header p {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 4rem;
}

.form-section {
  display: flex;
  justify-content: space-between;
  width: 60%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #ccc;
  padding: 3rem;
}

.login-form {
  width: 45%;
}

.login-form h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #6d85b6;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #5a6d9c;
}

.sign-up-suggestion {
  width: 45%;
  text-align: center;
}

.sign-up-suggestion p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.sign-up-suggestion router-link {
  font-size: 1.2rem;
  color: #6d85b6;
  text-decoration: underline;
}
</style>

<!-- <template>
  <div class="landing-page">
    <header>
      <img src="logo.png" alt="Company Logo" class="logo" />
    </header>
    <main>
      <div class="hero-section">
        <h1 class="hero-title">Discover the latest Tech & Gadgets</h1>
        <div class="hero-images">
          <img
            src="../assets/controller.png"
            alt="PS5 Remote Controller"
            class="ps5-remote-controller"
          />
          <img src="pc.png" alt="PC" class="pc" />
        </div>
        <button class="discover-button">Log in to Discover</button>
      </div>
    </main>
    <footer>
      <p>&copy; 2022 Company Name</p>
    </footer>
  </div>
</template>

<style>
/* Add your custom styles here */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: #f2f2f2;
}
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}
.hero-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
}
.hero-images {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.ps5-remote-controller {
  width: 200px;
  margin-right: 50px;
}
.pc {
  width: 300px;
}
.discover-button {
  background-color: #0070f3;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.discover-button:hover {
  background-color: #0060d3;
}
footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
</style> -->
<!-- <template>
  <div class="landing-page">
    <div class="header">
      <img src="../assets/logo.png" alt="Company Logo" class="logo" />
    </div>
    <div class="hero-section">
      <h1 class="hero-title">Discover the Latest Tech & Gadgets</h1>
      <img
        src="../assets/remote-controller.png"
        alt="PS5 Remote Controller"
        class="hero-image"
      />
      <div class="pc-image-container">
        <img src="../assets/pc.png" alt="PC" class="pc-image" />
        <button class="discover-button">Click to Discover</button>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: #f2f2f2;
}
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.header {
  position: absolute;
  top: 20px;
  left: 20px;
}
.logo {
  height: 40px;
}
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero-image {
  width: 200px;
  margin-bottom: 2rem;
}
.pc-image-container {
  position: relative;
  margin-top: 3rem;
}
.pc-image {
  width: 600px;
}
.discover-button {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style> -->
<!-- <template>
  <div class="landing-page">
    <header>
      <img src="logo.png" alt="Company Logo" class="logo" />
    </header>
    <main>
      <div class="hero-section">
        <div class="hero-images">
          <img src="../assets/pc.png" alt="PC Image" class="pc-image" />
          <img
            src="../assets/remote-controller.png"
            alt="Remote Controller Image"
            class="remote-controller-image"
          />
        </div>
        <div class="hero-text">
          <h1 class="hero-title">Discover the Latest Tech & Gadgets</h1>
          <button class="discover-button">Click to Discover</button>
        </div>
      </div>
    </main>
    <footer>
      <p>&copy; 2022 Company Name</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: #f2f2f2;
}
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.logo {
  height: 50px;
}
.hero-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.hero-images {
  position: relative;
}
.pc-image {
  height: 500px;
  margin-right: -200px;
}
.remote-controller-image {
  position: absolute;
  top: 200px;
  left: 100px;
  height: 200px;
}
.hero-text {
  margin-left: 2rem;
}
.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.discover-button {
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.discover-button:hover {
  background-color: #006080;
}
footer {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style> -->
<!-- 
<template>
  <div class="landing-page">
    <div class="header">
      <img src="../assets/logo.png" alt="Company Logo" class="logo" />
    </div>
    <div class="hero-section">
      <h1 class="hero-title">Discover the Latest Tech & Gadgets</h1>
      <img
        src="../assets/remote-controller.png"
        alt="PS5 Remote Controller"
        class="hero-image"
      />
      <div class="pc-image-container">
        <img src="../assets/pc.png" alt="PC" class="pc-image" />
        <button class="discover-button">Click to Discover</button>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your custom styles here */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: #2c3e50;
}
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.header {
  position: absolute;
  top: 20px;
  left: 20px;
}
.logo {
  height: 40px;
}
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.hero-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
}
.pc-image-container {
  position: relative;
  margin-top: 3rem;
  max-width: 100%;
  height: auto;
}
.pc-image {
  max-width: 100%;
  height: auto;
}
.discover-button {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #f39c12;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style> -->
