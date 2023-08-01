import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mw\\.brainsins\\.com'),
    matchRegexInAttribute('script', 'src', 'cloudfront\\.net/brainsins(?:_v)?(\\d+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BrainSINS'),
    matchRegexInInnerHTML('script', 'BrainSINSRecommender'),
    matchRegexInInnerHTML('script', 'brainsins_token'),
    matchRegexInInnerHTML('script', 'launchBrainSINS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
