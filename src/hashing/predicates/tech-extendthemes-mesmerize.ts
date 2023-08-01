import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/mesmerize(?:-pro)?/'),
    // in dom
    matchSelector(`link#mesmerize-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'MesmerizeKube'),
    matchRegexInInnerHTML('script', 'mesmerizeDomReady'),
    matchRegexInInnerHTML('script', 'mesmerizeFooterParalax'),
    matchRegexInInnerHTML('script', 'mesmerizeMenuSticky'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
