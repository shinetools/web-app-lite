import featureFlags from 'featureFlags';
import featuresJson from '../featureFlags/features.json';

const expectFeatureKeysMatch = (firstKeys, secondKeys) => {
  expect(Object.keys(firstKeys)).toEqual(Object.keys(secondKeys));
};

describe('The feature flags keys should match those of production', () => {
  it('for the development flags', () => {
    expectFeatureKeysMatch(featuresJson.development, featuresJson.production);
  });

  it('for the staging flags', () => {
    expectFeatureKeysMatch(featuresJson.staging, featuresJson.production);
  });

  it('for the testing flags', () => {
    expectFeatureKeysMatch(featuresJson.testing, featuresJson.production);
  });
});

// This is a loose check that Jest has been set up correctly to serve the testing
// feature flag values.
describe('In a testing environment', () => {
  it('runs tests with the testing features config', () => {
    expect(featureFlags).toEqual(featuresJson.testing);
  });
});
