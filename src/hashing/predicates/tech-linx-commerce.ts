import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EzGaCfg.Config.Store'),
    matchRegexInInnerHTML('script', 'EzGaCfg.Shopper'),
    matchRegexInInnerHTML('script', 'linxImpulse.config.integrationFlags.platformProvider'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
