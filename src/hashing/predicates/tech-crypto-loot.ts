import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^/crypto-loot\\.com/lib/'),
    matchRegexInAttribute('script', 'src', '^/webmine\\.pro/'),
    matchRegexInAttribute('script', 'src', '^/cryptoloot\\.pro/'),
    matchRegexInAttribute('script', 'src', '/crlt\\.js\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CRLT.CONFIG.ASMJS_NAME'),
    matchRegexInInnerHTML('script', 'CryptoLoot'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
