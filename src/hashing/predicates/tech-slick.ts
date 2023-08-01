import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/([\\d.]+))?/slick(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]+(?:/([\\d.]+)/)?slick-theme\\.css\\;version:\\1'),
    // in text

    // in css
])
