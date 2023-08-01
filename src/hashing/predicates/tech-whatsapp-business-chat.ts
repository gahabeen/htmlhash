import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='api.whatsapp.com/send'], a[href*='web.whatsapp.com/send'], a[href*='wa.me/'], div[class*='wptwa-container'], a[href*='wa.link'][target='_blank']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
