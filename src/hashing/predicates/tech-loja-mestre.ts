import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'lojamestre\\.\\w+\\.br'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'webmaster', 'www\\.lojamestre\\.\\w+\\.br'),
    // in scripts

    // in html

    // in text

    // in css
])
