import { test, expect } from 'vitest'
import { getName } from './browser-env'

test('browser-env', () => {
  localStorage.setItem("name", "gjf")
  expect(getName()).toBe("gjf")
});

