import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/materialis(?:-pro)?/'),
    // in dom
    matchSelector(`link#materialis-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'MaterialisTheme'),
    matchRegexInInnerHTML('script', 'materialisSetHeaderTopSpacing'),
    matchRegexInInnerHTML('script', 'materialis_theme_pro_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
