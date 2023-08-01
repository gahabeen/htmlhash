import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/pixelyoursite/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pys.Facebook'),
    matchRegexInInnerHTML('script', 'pysOptions'),
    matchRegexInInnerHTML('script', 'pys_generate_token'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
