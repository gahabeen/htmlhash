import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/kadence/.+navigation\\.min\\.js(?:\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#kadence-global-css`),
    // in js
    matchRegexInInnerHTML('script', 'kadence'),
    matchRegexInInnerHTML('script', 'kadenceConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
