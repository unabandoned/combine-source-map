# Changelog

## [1.0.0](https://github.com/unabandoned/combine-source-map/compare/combine-source-map-v0.8.1...combine-source-map-v1.0.0) (2026-08-13)


### ⚠ BREAKING CHANGES

* base64() and comment() now return a Promise instead of a string. Callers must await (or .then) the final base64()/comment() call. addFile() remains synchronous and chainable.

### Features

* migrate to source-map 8 (async base64/comment) and pin runtime deps ([#3](https://github.com/unabandoned/combine-source-map/issues/3)) ([c878017](https://github.com/unabandoned/combine-source-map/commit/c87801766774deffd4290e7c9545d7d55510ba87))


### Bug Fixes

* **deps:** update dependency convert-source-map to ~1.9.0 ([#4](https://github.com/unabandoned/combine-source-map/issues/4)) ([d56b7a1](https://github.com/unabandoned/combine-source-map/commit/d56b7a1044c585d0a2b7a40969b6c1ccfb969e3d))
* **deps:** update dependency lodash.memoize to ~3.1.0 ([#5](https://github.com/unabandoned/combine-source-map/issues/5)) ([03847e3](https://github.com/unabandoned/combine-source-map/commit/03847e37ae959ea80d8cd6f221aa09846888ebe4))


### Dependencies & maintenance

* graduate combine-source-map to a 1.0.0 major ([#10](https://github.com/unabandoned/combine-source-map/issues/10)) ([0c01b19](https://github.com/unabandoned/combine-source-map/commit/0c01b1990884f0d7b1cc240234bf7728eab5001c))

## [0.8.1](https://github.com/unabandoned/combine-source-map/compare/combine-source-map-v0.8.0...combine-source-map-v0.8.1) (2026-08-13)


### Dependencies & maintenance

* onboard combine-source-map into the unabandoned program ([#1](https://github.com/unabandoned/combine-source-map/issues/1)) ([85ecc51](https://github.com/unabandoned/combine-source-map/commit/85ecc51ecea7e64dcbb24ad54cc7713abe70dd5c))
* pinning source-map version as tests fail with patch upgrades ([df66551](https://github.com/unabandoned/combine-source-map/commit/df66551f41916b95ac82e1fa3c644ea3f235667c))
* upgrading inline-source-map to 0.6 ([23ad4c6](https://github.com/unabandoned/combine-source-map/commit/23ad4c6a7f01b81c8c736d9a08ee0749029e0c0d))

## combine-source-map Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
