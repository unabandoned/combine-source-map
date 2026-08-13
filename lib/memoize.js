'use strict';

/**
 * Minimal memoize used by combine-source-map's path rebasing.
 *
 * Caches `fn`'s result keyed by `resolver(...args)` (or the first argument when
 * no resolver is given), mirroring the slice of `lodash.memoize`'s contract this
 * package relies on. Vendored in-tree to drop the abandoned `lodash.memoize`
 * runtime dependency.
 *
 * @param fn {Function} function whose results are cached
 * @param resolver {Function} optional; computes the cache key from the arguments
 * @return {Function} memoized wrapper around `fn`
 */
module.exports = function memoize(fn, resolver) {
  var cache = new Map();
  function memoized() {
    var key = resolver ? resolver.apply(this, arguments) : arguments[0];
    if (cache.has(key)) return cache.get(key);
    var result = fn.apply(this, arguments);
    cache.set(key, result);
    return result;
  }
  memoized.cache = cache;
  return memoized;
};
