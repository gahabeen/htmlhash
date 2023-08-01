import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/media/conv/js/jquery\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'uKnowva (?: ([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<a[^>]+>Powered by uKnowva</a>'),
    // in text

    // in css
])
