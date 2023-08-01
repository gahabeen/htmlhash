import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/assets/[a-zA-Z0-9]{8}\\/yii\\.js$'),
    matchRegexInAttribute('script', 'src', '/yii\\.(?:validation|activeForm)\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('Powered by <a href="http://www\\.yiiframework\\.com/" rel="external">Yii Framework</a>'),
    matchRegex('<input type="hidden" value="[a-zA-Z0-9]{40}" name="YII_CSRF_TOKEN" \\/>'),
    matchRegex('<!\\[CDATA\\[YII-BLOCK-(?:HEAD|BODY-BEGIN|BODY-END)\\]'),
    // in text

    // in css
])
