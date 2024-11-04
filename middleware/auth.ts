export default defineNuxtRouteMiddleware((to, from) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  if (!token && to.path !== '/login') {
    return navigateTo('/login');
  }
});