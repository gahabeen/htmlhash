import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/static/gxgral\\.js'),
    matchRegexInAttribute('script', 'src', '/static/gxtimezone\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gx.gxVersion'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+?id="gxtheme_css_reference"'),
    // in text

    // in css
])
