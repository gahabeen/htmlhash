import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BOOMR_API_key'),
    // in meta

    // in scripts

    // in html
    matchRegex('<script>[\\s\\S]*?go-mpulse\\.net\\/boomerang[\\s\\S]*?</script>'),
    // in text

    // in css
])
