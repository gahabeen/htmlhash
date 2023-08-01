import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/Chart(?:\\.bundle)?(?:\\.min)?\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', 'chartjs\\.org/dist/([\\d.]+(?:-[^/]+)?|master|latest)/Chart.*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'cdnjs\\.cloudflare\\.com/ajax/libs/Chart\\.js/([\\d.]+(?:-[^/]+)?)/Chart.*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'cdn\\.jsdelivr\\.net/(?:npm|gh/chartjs)/chart\\.js@([\\d.]+(?:-[^/]+)?|latest)/dist/Chart.*\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Chart'),
    matchRegexInInnerHTML('script', 'Chart.defaults.doughnut'),
    matchRegexInInnerHTML('script', 'chart.ctx.bezierCurveTo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
