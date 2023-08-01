import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/kadence-blocks/dist/.+/kb-form-block\\.min\\.js(?:\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/kadence-blocks/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
