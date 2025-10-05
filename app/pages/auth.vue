<script setup lang="ts">
import { signIn, signUp } from '~/lib/auth-client'

definePageMeta({
  layout: false,
})

const authError = ref()

const signUpForm = reactive({
  email: '',
  password: '',
  name: '',
})

const submitting = ref(false)

async function handleSignUp() {
  if (submitting.value) {
    return
  }

  submitting.value = true

  const { error } = await signUp.email({
    email: signUpForm.email,
    password: signUpForm.password,
    name: signUpForm.name,
    fetchOptions: {
      onSuccess: () => {
        submitting.value = false
      },
    },
  })

  if (error) {
    authError.value = error
  }
  else {
    navigateTo('/')
  }
}

const signInForm = reactive({
  email: '',
  password: '',
})

async function handleSignIn() {
  if (submitting.value) {
    return
  }

  submitting.value = true

  const { error } = await signIn.email({
    email: signInForm.email,
    password: signInForm.password,
    callbackURL: '/',
    fetchOptions: {
      onSuccess: () => {
        submitting.value = false
      },
    },
  },
  )

  if (error) {
    authError.value = error
  }
  else {
    navigateTo('/')
  }
}
</script>

<template>
  <div class="mt-[20%] max-w-[300px] mx-auto">
    <div class="tabs tabs-lift">
      <input type="radio" name="my_tabs_2" class="tab" aria-label="Login" checked>
      <div class="tab-content border-base-300 bg-base-100 p-10">
        <form class="space-y-3" @submit.prevent="handleSignIn">
          <div>
            <label class="input validator">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </g>
              </svg>
              <input v-model="signInForm.email" type="email" placeholder="mail@site.com" required>
            </label>
            <div class="validator-hint hidden">
              Enter valid email address
            </div>
          </div>

          <div>
            <label class="input validator">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  />
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                </g>
              </svg>
              <input
                v-model="signInForm.password"
                type="password"
                required
                placeholder="Password"
                minlength="8"
              >
            </label>
          </div>

          <button type="submit" :disabled="submitting">
            <span v-if="submitting" class="loading loading-spinner loading-sm" />
            Sign in
          </button>
        </form>
      </div>

      <input type="radio" name="my_tabs_2" class="tab" aria-label="Register">
      <div class="tab-content border-base-300 bg-base-100 p-10">
        <form class="space-y-3" @submit.prevent="handleSignUp">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">
              What is your name?
            </legend>
            <input v-model="signUpForm.name" type="text" class="input validator" placeholder="Type here" required>
            <div class="validator-hint hidden">
              Enter your name
            </div>
          </fieldset>

          <div>
            <label class="input validator">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </g>
              </svg>
              <input v-model="signUpForm.email" type="email" placeholder="mail@site.com" required>
            </label>
            <div class="validator-hint hidden">
              Enter valid email address
            </div>
          </div>

          <div>
            <label class="input validator">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  />
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                </g>
              </svg>
              <input
                v-model="signUpForm.password"
                type="password"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              >
            </label>
            <p class="validator-hint hidden">
              Must be more than 8 characters, including
              <br>At least one number <br>At least one lowercase letter <br>At least one uppercase letter
            </p>
          </div>

          <button type="submit" :disabled="submitting">
            <span v-if="submitting" class="loading loading-spinner loading-sm" />
            Register
          </button>
        </form>
      </div>
    </div>
    <div>
      <p>
        {{ authError }}
      </p>
    </div>
  </div>
</template>
