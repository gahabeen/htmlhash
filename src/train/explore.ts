
// export const makeFeaturesExtractor = (featuresPredicates: (context: PredicateContext) => FeaturesDefinitionRecord) => (context: PredicateContext) => {
//   return featuresPredicates(context);
//   // return FeaturesDefinitionRecord.parse();
// };

// export const inferFeaturesFrequencies = (items: FeaturesDefinitionRecord[]) => {
//   let featuresCounts: Record<string, number> = {};

//   for (const item of items) {
//     for (const [feature, record] of Object.entries(item)) {
//       if (record.count > 0) {
//         featuresCounts[feature] = (featuresCounts[feature] || 0) + 1;
//       }
//     }
//   }

//   let featuresFrequencies: FeaturesFrequencies = {};

//   for (const [feature, count] of Object.entries(featuresCounts).sort(([, a], [, z]) => z - a)) {
//     console.log(feature, count, items.length, count / items.length);
//     featuresFrequencies[feature] = count / items.length;
//   }

//   return featuresFrequencies;
//   // return FeaturesFrequencies.parse(featuresFrequencies);
// }

// export const mergeFeaturesFrequencies = (items: FeaturesFrequencies[]) => {
//   let featuresFrequencies: FeaturesFrequencies = {};

//   for (const item of items) {
//     for (const [feature, frequency] of Object.entries(item)) {
//       featuresFrequencies[feature] = (featuresFrequencies[feature] || 0) + frequency;
//     }
//   }

//   for (const [feature, frequency] of Object.entries(featuresFrequencies)) {
//     featuresFrequencies[feature] = frequency / items.length;
//   }

//   return featuresFrequencies;
// }

// export const pickFeatures = (features: FeaturesDefinitionRecord) => {

// };