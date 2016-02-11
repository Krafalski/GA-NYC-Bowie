# Credit Card Validation

Did you know that not all numbers are valid credit card numbers. One of the simplest checks that every website does is using [Luhn's Algorigthm](https://en.wikipedia.org/wiki/Luhn_algorithm). It is used to quickly check for possible typos on part of the user. Write a command line application `validator.js` which checks if a credit card number is valid based in Luhn's Algorithm. The procedure is the following:

1. Start at the right most digit, and moving left double every other digit. If the result of doubling it is a two digit number add the two digits.
2. Take the sum of all digits
3. If the total is divisible by 10 you have a valid number.

Test your application:
Some Valid Numbers:
- `4501039878866379`
- `4061232917948892`
- `4336830788510706`
Some Invalid Numbers
- `4501039878866378`
- `4501039878863456`
- `3421039878863456`

# Largest Palindrome (Project Euler Problem 4)

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

# Special Pythagorean Triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

> a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

