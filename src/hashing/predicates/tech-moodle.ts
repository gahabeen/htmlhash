import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'M.core'),
    matchRegexInInnerHTML('script', 'Y.Moodle'),
    // in meta
    matchRegexInAttribute('meta', 'keywords', '^moodle'),
    // in scripts

    // in html
    matchRegex('<img[^>]+moodlelogo'),
    // in text

    // in css
])
