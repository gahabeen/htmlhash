import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tailwindcss(?:tailwind-config-cdn)?\\.(?:com|js)'),
    // in dom
    matchSelector(`[src*='tailwind'], [href*='tailwind']`),
    // in js
    matchRegexInInnerHTML('script', 'tailwind'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('--tw-(?:rotate|translate|space-x|text-opacity|border-opacity)'),
])
