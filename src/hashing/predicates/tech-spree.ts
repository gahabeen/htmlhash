import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<link[^>]*/assets/store/all-[a-z\\d]{32}\\.css[^>]+>|<script>\\s*Spree\\.(?:routes|translations|api_key))'),
    // in text

    // in css
])
