import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.viral-loops\\.com/'),
    // in dom
    matchSelector(`link[href*='wp-content/plugins/viral-loops-wp-integration/assets/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
