import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/phabricator/[a-f0-9]{8}/rsrc/js/phui/[a-z-]+\\.js$'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+(?:class|id)="phabricator-'),
    // in text

    // in css
])
