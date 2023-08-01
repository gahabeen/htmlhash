import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/customify/.+theme\\.min\\.js(?:.+ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Customify'),
    matchRegexInInnerHTML('script', 'Customify_JS'),
    matchRegexInInnerHTML('script', 'customify_is_mobile'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
