import { anyOf, matchRegex } from '../matchers'

export const predicate = anyOf([matchRegex('<!--')])
