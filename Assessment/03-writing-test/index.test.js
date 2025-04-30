import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('should return correct sum of two numbers positive', () => {
  const result = sum(11, 8);
  assert.strictEqual(result, 19);
});

test('should return correct sum of two numbers negative', () => {
    const result = sum(-6, -9);
    assert.strictEqual(result, -15);
});

test('should return correct sum of one numbers positive and one numbers negative', () => {
    const result = sum(13, -7);
    assert.strictEqual(result, 6);
});

test('should return correct sum of one numbers negative and one number positive', () => {
    const result = sum(-12, 5);
    assert.strictEqual(result, -7);
});

test('should return 0 when adding 0 and one numbers positive', () => {
  const result = sum(0, 10);
  assert.strictEqual(result, 10);
});