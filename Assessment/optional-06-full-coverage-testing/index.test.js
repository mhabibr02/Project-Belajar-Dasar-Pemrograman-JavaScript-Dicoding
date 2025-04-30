import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return correct sum of two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(100, 200), 300);
});

test('should return 0 when one or both arguments are not numbers', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum('2', '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(2, undefined), 0);
  assert.strictEqual(sum({}, []), 0);
});

test('should return 0 when one or both arguments are negative numbers', () => {
  assert.strictEqual(sum(-1, 3), 0);
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, -3), 0);
});