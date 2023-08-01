import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#svelte-announcer`),
    matchSelector(`a`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'SvelteKit'),
    // in scripts

    // in html

    // in text

    // in css
])
