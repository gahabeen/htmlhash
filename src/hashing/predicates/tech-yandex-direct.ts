import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https?://an\\.yandex\\.ru/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'yandex_ad_format'),
    matchRegexInInnerHTML('script', 'yandex_partner_id'),
    // in meta

    // in scripts

    // in html
    matchRegex('<yatag class="ya-partner__ads">'),
    // in text

    // in css
])
