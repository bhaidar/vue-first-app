<template>
  <article>
    <h2>Form Validation</h2>
    <form @submit.prevent="handleSubmit" novalidate="true" class="form">
      <div class="field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" />
        <div v-if="submitted && !$v.name.required" class="invalid-feedback">
          Name is required
        </div>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
        <div v-if="submitted && !$v.email.required" class="invalid-feedback">
          Email is required
        </div>
        <div v-if="submitted && !$v.email.email" class="invalid-feedback">
          Email is invalid
        </div>
      </div>

      <div class="field">
        <label for="framework">Framework</label>
        <select
          name="framework"
          id="framework"
          aria-label="Select a Framework"
          v-model="framework"
        >
          <option value="null" selected>Select a Framework</option>
          <option value="1">Angular</option>
          <option value="2">React</option>
          <option value="3">Svelte</option>
          <option value="4">Vue</option>
        </select>
      </div>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </article>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  data() {
    return {
      name: null,
      email: null,
      framework: null,
      submitted: false
    };
  },
  validations: {
    name: {
      required,
      min: minLength(4)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    handleSubmit: function(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      e.preventDefault();
    }
  }
};
</script>

<styles lang="scss" scoped>
    article {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .form {
    margin: 0 auto;
    display: inline-block;
    padding: 20px;
    min-width: 300px;
    background: lightblue;
    border-radius: 5px;
    }

    .field + .field {
    padding-top: 20px;
    }

    .invalid-feedback {
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
    padding-left: 100px;
    }

    label {
    display: inline-block;
    width: 100px;
    text-align: left;
    }

    input[type="text"],
    input[type="email"],
    select
    {
    display: inline-block;
    width: 200px;
    height: 30px;
    border: 0;
    outline: 0;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
    }

    select {
    padding: 10px;
    height: 40px;
    width: 210px;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }

    input[type="submit"] {
    padding: 10px;
    outline: 0;
    border: 0;
    margin-left: 100px;
    border-radius: 5px;
    cursor: pointer;
    }
</styles>
