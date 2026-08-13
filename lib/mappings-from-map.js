var SourceMapConsumer = require('source-map').SourceMapConsumer;

/**
 * @name mappingsFromMap
 * @function
 * @param map {Object} the JSON.parse()'ed map
 * @return {Promise<Array>} promise for an array of mappings
 *
 * Note: `source-map` >= 0.7 exposes an asynchronous, WebAssembly-backed
 * `SourceMapConsumer`, so this returns a promise. `SourceMapConsumer.with`
 * owns the consumer's lifecycle and frees it once the callback resolves.
 */
module.exports = function (map) {
  return SourceMapConsumer.with(map, null, function (consumer) {
    var mappings = [];

    consumer.eachMapping(function (mapping) {
      // only set source if we have original position to handle edgecase (see inline-source-map tests)
      mappings.push({
        original: mapping.originalColumn != null ? {
          column: mapping.originalColumn
        , line: mapping.originalLine
        } : undefined
      , generated: {
          column: mapping.generatedColumn
        , line: mapping.generatedLine
        }
      , source: mapping.originalColumn != null ? mapping.source : undefined
      , name: mapping.name
      });
    });

    return mappings;
  });
}
