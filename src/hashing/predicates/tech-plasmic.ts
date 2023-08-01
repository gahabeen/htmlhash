import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.plasmic_default__all`),
    // in js
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.plasmicData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
