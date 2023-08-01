import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '2badvice-cdn\\.azureedge\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BBCookieControler'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
