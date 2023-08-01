import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__admin_media_prefix__'),
    matchRegexInInnerHTML('script', 'django'),
    // in meta

    // in scripts

    // in html
    matchRegex('(?:powered by <a[^>]+>Django ?([\\d.]+)?<\\/a>|<input[^>]*name=["\']csrfmiddlewaretoken["\'][^>]*>)\\;version:\\1'),
    // in text

    // in css
])
