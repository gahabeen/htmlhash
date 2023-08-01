import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/genesis/lib/js/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'genesisBlocksShare'),
    matchRegexInInnerHTML('script', 'genesis_responsive_menu'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
