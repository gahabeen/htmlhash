import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Joomla'),
    matchRegexInInnerHTML('script', 'jcomments'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Joomla!(?: ([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('(?:<div[^>]+id="wrapper_r"|<(?:link|script)[^>]+(?:feed|components)/com_|<table[^>]+class="pill)\\;confidence'),
    // in text

    // in css
])
