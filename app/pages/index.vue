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
  <h1>Index page</h1>
  <pre>
    {{ session }}
  </pre>
  <div>
    <button v-if="session.data" @click="handleSignOut()">
      Sign out
    </button>
  </div>
</template>
