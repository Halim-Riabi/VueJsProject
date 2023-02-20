<template>
  <div class="sign-up-container">
    <h2>Sign Up Here</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<style>
.sign-up-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

input.form-control {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid gray;
}

button.btn {
  padding: 10px 20px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // Perform form validation and submission here
      console.log(this.form);
    },
  },
};
</script>
