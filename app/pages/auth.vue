<script setup lang="ts">
import { signIn, signUp } from '~/lib/auth-client'

const authError = ref()

const signUpForm = reactive({
  email: 'johndoe@email.com',
  password: '12345678',
  name: 'John Doe',
})

async function handleSignUp() {
  const { error } = await signUp.email({
    email: signUpForm.email,
    password: signUpForm.password,
    name: signUpForm.name,
  })

  if (error) {
    authError.value = error
  }
  else {
    navigateTo('/')
  }
}

const signInForm = reactive({
  email: 'johndoe@email.com',
  password: '12345678',
  name: 'John Doe',
})

async function handleSignIn() {
  const { error } = await signIn.email({
    email: signInForm.email,
    password: signInForm.password,
    callbackURL: '/',
  })

  if (error) {
    authError.value = error
  }
  else {
    navigateTo('/')
  }
}
</script>

<template>
  <div>
    <h1>Auth page</h1>

    <h2>Sign up</h2>
    <form @submit.prevent="handleSignUp">
      <div>
        <input v-model="signUpForm.name" type="text" placeholder="name" required>
      </div>

      <div>
        <input v-model="signUpForm.email" type="email" placeholder="Email" required>
      </div>

      <div>
        <input v-model="signUpForm.password" type="password" placeholder="Password" required>
      </div>

      <button type="submit">
        Sign up
      </button>
    </form>

    <h2>Sign in</h2>
    <form @submit.prevent="handleSignIn">
      <div>
        <input v-model="signInForm.email" type="email" placeholder="Email" required>
      </div>

      <div>
        <input v-model="signInForm.password" type="password" placeholder="Password" required>
      </div>

      <button type="submit">
        Sign in
      </button>
    </form>

    <div>
      <p>
        {{ authError }}
      </p>
    </div>
  </div>
</template>
