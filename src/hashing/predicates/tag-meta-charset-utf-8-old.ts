import { matchTagAttributesFuzzy } from '../matchers'

export const predicate = matchTagAttributesFuzzy('meta', { 'http-equiv': 'Content-Type', content: 'charset=utf-8' })
