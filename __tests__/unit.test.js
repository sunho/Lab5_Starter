// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('Valid phone number with area code and parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Valid phone number with area code and dash', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Invalid phone number with incorrect area code', () => {
  expect(isPhoneNumber('(1234) 567-890')).toBe(false);
});
test('Invalid phone number with missing digits', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

test('Valid email', () => {
  expect(isEmail('example@test.com')).toBe(true);
});
test('Valid email with underscore', () => {
  expect(isEmail('example_name@test.co')).toBe(true);
});
test('Invalid email with missing domain', () => {
  expect(isEmail('example@.com')).toBe(false);
});
test('Invalid email with missing @ symbol', () => {
  expect(isEmail('example.com')).toBe(false);
});

test('Valid strong password', () => {
  expect(isStrongPassword('a1b2c3')).toBe(true);
});
test('Valid strong password with underscore', () => {
  expect(isStrongPassword('Abc_123')).toBe(true);
});
test('Invalid strong password too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});
test('Invalid strong password starts with number', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});

// Testing isDate function
test('Valid date format', () => {
  expect(isDate('12/31/2020')).toBe(true);
});
test('Valid date format with single digit month and day', () => {
  expect(isDate('1/1/2020')).toBe(true);
});
test('Invalid date format with month exceeding two digits', () => {
  expect(isDate('123/12/2020')).toBe(false);
});
test('Invalid date format without slashes', () => {
  expect(isDate('12312020')).toBe(false);
});

test('Valid hex color with 3 characters', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('Valid hex color with 6 characters', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});
test('Invalid hex color with 2 characters', () => {
  expect(isHexColor('#ff')).toBe(false);
});
test('Invalid hex color with non-hex characters', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});