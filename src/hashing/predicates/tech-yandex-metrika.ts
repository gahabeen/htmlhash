import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mc\\.yandex\\.ru/metrika/(?:tag|watch)\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.jsdelivr\\.net/npm/yandex\\-metrica\\-watch/watch\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'yandex_metrika'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
