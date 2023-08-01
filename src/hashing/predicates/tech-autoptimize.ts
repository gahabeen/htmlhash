import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/autoptimize/.+\\.js(?:\\?ao_version=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/autoptimize/'], link[href*='/wp-content/cache/autoptimize/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
