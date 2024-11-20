// plugins/click-outside.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted(el, binding) {
      el._clickOutside = (event: Event) => {
        // Skip if the click target is the toggle button or its icon
        if ((event.target as Element)?.closest('[data-menu-toggle]')) {
          return;
        }
        
        // Check if the click was outside the el and its children
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(event);
        }
      };
      
      // Use nextTick to attach the listener after the current call stack
      setTimeout(() => {
        document.body.addEventListener('click', el._clickOutside);
      }, 0);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el._clickOutside);
    },
  });
});