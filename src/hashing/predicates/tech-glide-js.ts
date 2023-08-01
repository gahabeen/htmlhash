import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/@glidejs/glide(?:@([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`div[data-glide-el]`),
    // in js
    matchRegexInInnerHTML('script', 'Glide'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
