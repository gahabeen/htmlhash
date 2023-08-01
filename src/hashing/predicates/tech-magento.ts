import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/mage'),
    matchRegexInAttribute('script', 'src', 'skin/frontend/(?:default|(enterprise))\\;version:\\1?1 (Enterprise):1 (Community)'),
    matchRegexInAttribute('script', 'src', 'skin/frontend/\\;confidence:50\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'static/_requirejs\\;confidence:50\\;version'),
    // in dom
    matchSelector(`script[data-requiremodule*='mage/'], script[data-requiremodule*='Magento_'], html[data-image-optimizing-origin]`),
    matchSelector(`script[type='text/x-magento-init']`),
    // in js
    matchRegexInInnerHTML('script', 'Mage'),
    matchRegexInInnerHTML('script', 'VarienForm'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
