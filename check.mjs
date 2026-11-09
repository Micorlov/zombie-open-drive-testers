import assert from 'node:assert/strict';
import { normalizeEmail } from './common.js';

assert.equal(normalizeEmail('  Foo.Bar+x@Gmail.COM '), 'foo.bar+x@gmail.com');
assert.equal(normalizeEmail('a@b.co'), 'a@b.co');
for (const bad of ['', '   ', 'no-at.com', 'a@b', 'a b@c.com', 'a@b.c', '@x.com', 'a/b@x.com', null, undefined,
  'x'.repeat(65) + '@a.com', 'a@' + 'x'.repeat(191) + '.com']) {
  assert.equal(normalizeEmail(bad), null, `should reject ${String(bad).slice(0, 20)}`);
}
console.log('check.mjs: ok');
