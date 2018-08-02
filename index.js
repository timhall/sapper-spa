// Remove initial empty preload to force load
if (typeof window !== 'undefined' && window.__SAPPER__) {
  window.__SAPPER__.preloaded = [];
}
