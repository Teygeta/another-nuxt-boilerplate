export default defineNuxtRouteMiddleware(async (to) => {
  const result = await useFetch('/api/auth/get-session') // HACK: Follow https://github.com/better-auth/better-auth/issues/4722#issuecomment-3320538089
  const isLoggedIn = result.data.value

  if (!to.path.startsWith('/auth')) {
    if (!isLoggedIn) {
      return navigateTo('/auth')
    }
  }

  if (to.path.startsWith('/auth')) {
    if (isLoggedIn) {
      return navigateTo('/')
    }
  }
})
