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
