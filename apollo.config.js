module.exports = {
  client: {
    service: {
      name: 'my-service-name',
      localSchemaFile: './schema.json',
    },
  },
  includes: ['./src/types/*.ts'],
};
