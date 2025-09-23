import { createAuthClient } from 'better-auth/vue'

export const { signIn, signUp, signOut, useSession } = createAuthClient()
