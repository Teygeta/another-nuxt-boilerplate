<script setup lang="ts">
import { signOut, useSession } from '~/lib/auth-client'

const session = useSession()

async function handleSignOut() {
  const { error } = await signOut()

  if (!error) {
    reloadNuxtApp()
  }
}
</script>

<template>
  <div>
    <div v-if="!session.data?.user.emailVerified" role="alert" class="alert alert-warning rounded-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span>Warning: Invalid email address!</span>
    </div>

    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <NuxtLink class="btn-ghost text-xl">
          {{ session.data?.user.name }}
        </NuxtLink>
      </div>
      <div class="flex-none">
        <button @click="handleSignOut">
          Sing out
        </button>
      </div>
    </div>

    <slot />
  </div>
</template>
