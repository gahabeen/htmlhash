import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Drupal ([\\d]+) \\(http:\\/\\/drupal\\.org\\) \\+ govCMS\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
