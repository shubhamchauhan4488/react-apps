// serviceWorkerRegistration.js
//It operates in the background and is registered in your main application file (index.js) using navigator.serviceWorker.register().
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch((error) => {
            console.error('ServiceWorker registration failed: ', error);
          });
      });
    } else {
      console.warn('Service workers are not supported in this browser.');
    }
  }
  