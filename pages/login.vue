<template>
  <validation-observer ref="refFormObserver">
    <section class="card">
      <form class="login-form" @submit.prevent="onSubmit">
        <h3 class="title">Login</h3>

        <validation-provider rules="required" vid="email" class="mb-1">
          <template #default="{ errors }">
            <input
              v-model="email"
              type="text"
              name="Email"
              class="d-block w-full"
              placeholder="Email"
            />

            <small v-if="errors.length" class="text-red">{{ errors[0] }}</small>
          </template>
        </validation-provider>

        <validation-provider
          rules="required|min:6"
          vid="password"
          name="Password"
          class="mb-1"
        >
          <template #default="{ errors }">
            <input
              v-model="password"
              class="d-block w-full"
              type="password"
              placeholder="Password"
            />

            <small v-if="errors.length" class="text-red">{{ errors[0] }}</small>
          </template>
        </validation-provider>

        <button class="btn" type="submit">Submit</button>
      </form>
    </section>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'auth',

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    async onSubmit() {
      const isValid = await this.$refs.refFormObserver.validate()

      if (!isValid) return

      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (error) {
        alert(error.response.data.first_errors.email)
      }
    },
  },
}
</script>

<style scoped>
.login-form {
  width: 500px;
  display: flex;
  flex-direction: column;
}
</style>
