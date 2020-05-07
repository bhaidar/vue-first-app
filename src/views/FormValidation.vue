<template>
    <article>
        <h2>Form Validation</h2>
        <form @submit.prevent="save" novalidate="true" class="form">
            <div v-show="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>

            <p>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="name" />
            </p>

            <p>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" />
            </p>

            <p>
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
            </p>

            <p>
                <input type="submit" value="Submit" />
            </p>
        </form>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                name: null,
                email: null,
                framework: null
            };
        },
        methods: {
            save: function(e) {
                this.errors = [];

                if (!this.name) this.errors.push("Name required.");

                if (!this.email) {
                    this.errors.push("Email required.");
                } else if (!this.validEmail(this.email)) {
                    this.errors.push("Valid email required.");
                }

                if (!this.errors.length) return true;

                e.preventDefault();
            },
            validEmail: function(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
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
    }
</styles>
