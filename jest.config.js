/** @screen {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testEnvironmentOptions: { resources: 'usable' },
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    moduleDirectories: ['node_modules', './src'],
    roots: ['<rootDir>/src/'],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/__mocks__/svg.ts',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@data/(.*)$': '<rootDir>/src/data/$1',
        '^@static/(.*)$': '<rootDir>/src/app/static/$1',
        '^@constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@context/(.*)$': '<rootDir>/src/context/$1',
        '^@sounds/(.*)$': '<rootDir>/src/app/components/StartGameSFX/$1',
        '^@pages/(.*)$': '<rootDir>/src/app/components/pages/$1',
        '^@templates/(.*)$': '<rootDir>/src/app/components/templates/$1',
        '^@ui/(.*)$': '<rootDir>/src/app/components/UI/$1',
        '^@routes/(.*)$': '<rootDir>/src/app/routes/$1',
        '^@hooks/(.*)$': '<rootDir>/src/app/hooks/$1',
        '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
        '^@store/(.*)$': '<rootDir>/src/app/store/$1',
        '^@styles/(.*)$': '<rootDir>/src/app/styles/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    jest: {
        transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
