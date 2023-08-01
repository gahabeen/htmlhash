import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'shapecss[-.]([\\d.]*\\d)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/([\\d.]+)/shapecss(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'shapecss.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Shapecss'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href="[^"]*shapecss(?:\\.min)?\\.css'),
    // in text

    // in css
])
