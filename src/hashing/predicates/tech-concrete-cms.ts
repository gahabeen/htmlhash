import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/concrete/js/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CCM_IMAGE_PATH'),
    matchRegexInInnerHTML('script', 'Concrete'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^concrete5(?: - ([\\d.]+)$)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
