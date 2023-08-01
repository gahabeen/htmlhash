import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/blocksy/(?:.+main\\.js(?:\\?ver=([\\d\\.]+)))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/blocksy/']`),
    // in js
    matchRegexInInnerHTML('script', 'blocksyJsonP'),
    matchRegexInInnerHTML('script', 'blocksyResponsiveMenuCache'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
