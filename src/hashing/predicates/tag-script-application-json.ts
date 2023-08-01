import { anyOf, matchRegexInAttribute } from '../matchers'

export const predicate = anyOf([matchRegexInAttribute('script', 'type', 'application/json')])
