import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'haddock-util\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<p>Produced by <a href="http://www\\.haskell\\.org/haddock/">Haddock</a> version ([0-9.]+)</p>\\;version:\\1'),
    // in text

    // in css
])
