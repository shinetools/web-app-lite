import featuresJson from '../featureFlags/features.json';

// eslint-disable-next-line no-var
declare var featureFlags: FeatureFlags;

// This enables the FeatureFlags type to dynamically include
// all existing feature flag keys.
type FeatureKey = keyof typeof featuresJson.production;
type FeatureFlags = Record<FeatureKey, boolean>;

export = featureFlags;
