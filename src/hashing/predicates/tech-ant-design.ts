import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='antd']`),
    // in js
    matchRegexInInnerHTML('script', 'antd.version'),
    // in meta

    // in scripts

    // in html
    matchRegex(
        '<[^>]*class="ant-(?:btn|col|row|layout|breadcrumb|menu|pagination|steps|select|cascader|checkbox|calendar|form|input-number|input|mention|rate|radio|slider|switch|tree-select|time-picker|transfer|upload|avatar|badge|card|carousel|collapse|list|popover|tooltip|table|tabs|tag|timeline|tree|alert|modal|message|notification|progress|popconfirm|spin|anchor|back-top|divider|drawer)'
    ),
    matchRegex('<i class="anticon anticon-'),
    // in text

    // in css
])
