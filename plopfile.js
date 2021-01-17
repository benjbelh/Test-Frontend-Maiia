module.exports = function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Full React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name Please:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/Component/ComponentTsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.ts',
        templateFile: 'plop-templates/Component/ComponentIndex.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.module.scss',
        templateFile: 'plop-templates/Component/ComponentModuleScss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/tests/{{name}}.test.tsx',
        templateFile: 'plop-templates/Component/ComponentTestTsx.hbs',
      },
    ],
  });
};
