module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {
    angular: true,
  },
  rules: {
    'no-tabs': 0,
    'func-names': [
      'error',
      'never',
    ],
    'valid-jsdoc': [
      'error',
      {
        requireReturn: true,
        requireReturnType: true,
        requireParamDescription: true,
        requireReturnDescription: true,
      },
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__express',
          '_id',
          '_slugname',
          '_languages',
          '_tagsKey',
          '_btagsKey',
          '_updatedAt',
          '_element',
          '_loggedUser',
          '__selectOwnCompany',
          '_start',
          '_st',
          '_connect',
          '_per',
          '_keyword',
          '_rgb',
          '_postData',
          '_v',
          '_password',
        ],
      },
    ],
    indent: [
      'error',
      4,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'error',
      120,
    ],
  },
};
