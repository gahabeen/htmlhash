import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'phpbb'),
    matchRegexInInnerHTML('script', 'style_cookie_settings'),
    // in meta
    matchRegexInAttribute('meta', 'copyright', 'phpBB Group'),
    // in scripts

    // in html
    matchRegex('Powered by <a[^>]+phpBB'),
    matchRegex('<div class=phpbb_copyright>'),
    matchRegex('<[^>]+styles/(?:sub|pro)silver/theme'),
    matchRegex('<img[^>]+i_icon_mini'),
    matchRegex('<table class="[^"]*forumline'),
    // in text

    // in css
])
