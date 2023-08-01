import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wp-content/plugins/buttonizer-multifunctional-button/'),
    matchRegexInAttribute('script', 'src', 'cdn\\.buttonizer\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Buttonizer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
