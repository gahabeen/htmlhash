import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'disqus_url'),
    // in dom
    matchSelector(`div#disqus_thread`),
    // in js
    matchRegexInInnerHTML('script', 'DISQUS'),
    matchRegexInInnerHTML('script', 'disqus_shortname'),
    matchRegexInInnerHTML('script', 'disqus_url'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
