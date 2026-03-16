export default defineNuxtRouteMiddleware((to) => {
  const resolvedRoute = useRouter().resolve(to.path)
  
  if (!resolvedRoute.matched.length) {
    return navigateTo('/')
  }
})