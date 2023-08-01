import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/futurio/.+customscript\\.js(?:\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/futurio/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
