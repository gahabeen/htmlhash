import { matchTagAttributesFuzzy } from '../matchers'

export const predicate = matchTagAttributesFuzzy('meta', { property: 'video:series' })
