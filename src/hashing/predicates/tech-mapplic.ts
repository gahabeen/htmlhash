import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wp-content/plugins/mapplic/'),
    matchRegexInAttribute('script', 'src', '/include/mapplic/mapplic\\.js'),
    // in dom
    matchSelector(`div.mapplic-layer > div.mapplic-map-image`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
