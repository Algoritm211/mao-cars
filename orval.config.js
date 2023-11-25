module.exports = {
  maocars: {
    output: {
      mode: 'split',
      target: 'src/maocars-client/maocars.ts',
      schemas: 'src/maocars-client/schemas',
      client: 'react-query',
      mock: false,
      override: {
        mutator: {
          path: 'src/maocars-client/fetch-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: 'src/maocars-client/spec.yaml',
    },
    hooks: {
      afterAllFilesWrite: 'npm run format',
    },
  },
};
