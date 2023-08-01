import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'choices\\.js(?:@|/)?([\\d\\.]+)?.+choices\\.min\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/modules/choices/js/choices\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Choices'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
