<template>
  <div class="container">
    <form @submit.prevent="submitLogin" class="form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          id="username"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          id="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      // Perform login action, e.g. sending a request to the server
      // with the username and password
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 400px;
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.form-control {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}
</style>
