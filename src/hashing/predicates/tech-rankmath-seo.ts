import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/seo-by-rank-math(?:-pro)?/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/seo-by-rank-math/'], script.rank-math-schema-pro, script.rank-math-schema`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
