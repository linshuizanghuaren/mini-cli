const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate mini-app page',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'view name please',
    validate: notEmpty('name')
  }],
  actions: () => {
    const name = '{{name}}'
    const actions = [
      {
        type: 'add',
        path: `src/pages/${name}/index.vue`,
        templateFile: 'plop-templates/pages/view.hbs'
      },
      {
        type: 'add',
        path: `src/pages/${name}/main.js`,
        templateFile: 'plop-templates/pages/js.hbs'
      },
      {
        type: 'add',
        path: `src/pages/${name}/index.css`,
        templateFile: 'plop-templates/pages/css.hbs'
      }
    ]
    return actions
  }
}
