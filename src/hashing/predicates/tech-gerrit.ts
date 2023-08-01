import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^gerrit_ui/gerrit_ui'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Gerrit'),
    matchRegexInInnerHTML('script', 'gerrit_ui'),
    // in meta
    matchRegexInAttribute('meta', 'title', '^Gerrit Code Review$'),
    // in scripts

    // in html
    matchRegex('>Gerrit Code Review</a>\\s*"\\s*\\(([0-9.]+)\\)\\;version:\\1'),
    matchRegex('<(?:div|style) id="gerrit_'),
    // in text

    // in css
])
