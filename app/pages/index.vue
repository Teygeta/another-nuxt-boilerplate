<script setup lang="ts">
import { useSession } from '~/lib/auth-client'

const session = useSession()
</script>

<template>
  <div>
    <pre>
      {{ session }}
    </pre>
  </div>
</template>
