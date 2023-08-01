import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'chat\\.s3\\.yandex\\.net/widget\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'yandexChatWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
