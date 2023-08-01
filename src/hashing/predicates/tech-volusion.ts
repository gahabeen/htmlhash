import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/volusion\\.js(?:\\?([\\d.]*))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'volusion'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]*href="[^"]*/vspfiles/\\;version'),
    matchRegex('<body [^>]*data-vn-page-name\\;version'),
    // in text

    // in css
])
