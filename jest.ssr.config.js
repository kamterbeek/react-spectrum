/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  displayName: 'SSR',

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|styl)$': 'identity-obj-proxy',
    '\\.\./Icon/.*$': '<rootDir>/__mocks__/iconMock.js'
  },

  // Run tests from one or more projects
  projects: ['<rootDir>'],

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    'packages/'
  ],

  // The test environment that will be used for testing
  testEnvironment: require.resolve('@react-spectrum/test-utils/src/SSREnvironment'),

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/?(*.)+(ssr.test).[tj]s?(x)"
  ]
};
