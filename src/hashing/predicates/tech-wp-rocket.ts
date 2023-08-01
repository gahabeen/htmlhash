import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/wp-rocket/'),
    // in dom
    matchSelector(`style#wpr-usedcss`),
    // in js
    matchRegexInInnerHTML('script', 'RocketLazyLoadScripts'),
    matchRegexInInnerHTML('script', 'RocketPreloadLinksConfig'),
    matchRegexInInnerHTML('script', 'rocket_lazy'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!--[^>]+WP Rocket'),
    // in text

    // in css
])
