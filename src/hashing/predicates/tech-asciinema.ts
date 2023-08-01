import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'asciinema\\.org/'),
    // in dom
    matchSelector(`div.asciinema-player-wrapper`),
    matchSelector(`div.asciinema-player`),
    // in js
    matchRegexInInnerHTML('script', 'AsciinemaPlayer'),
    matchRegexInInnerHTML('script', 'asciinema'),
    // in meta

    // in scripts

    // in html
    matchRegex('<asciinema-player'),
    // in text

    // in css
])
