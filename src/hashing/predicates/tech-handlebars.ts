import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'handlebars(?:\\.runtime)?(?:-v([\\d.]+?))?(?:\\.min)?\\.js\\;version:\\1'),
    // in dom
    matchSelector(`script[type='text/x-handlebars-template']`),
    // in js
    matchRegexInInnerHTML('script', 'Handlebars'),
    matchRegexInInnerHTML('script', 'Handlebars.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
