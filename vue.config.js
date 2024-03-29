const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({ 
  transpileDependencies: true,
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      filename: "index.html",
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    'rebuild': {
      entry: './src/pages/InternalRebuild/main.js',
      template: 'public/index.html',
      filename: "rebuild.html",
      title: 'Internal Rebuild',
      chunks: ['chunk-vendors', 'chunk-common', 'rebuild'],
    },
    'randomforest': {
      entry: './src/pages/RandomForest/main.js',
      template: 'public/index.html',
      filename: "randomforest.html",
      title: 'Random Forest',
      chunks: ['chunk-vendors', 'chunk-common', 'randomforest'],
    },
    'validations': {
      entry: './src/pages/LabValidations/main.js',
      template: 'public/index.html',
      filename: "validations.html",
      title: 'Lab Validations',
      chunks: ['chunk-vendors', 'chunk-common', 'validations'],
    },
    'annualreports': {
      entry: './src/pages/AnnualReports/main.js',
      template: 'public/index.html',
      filename: "annualreports.html",
      title: 'Annual Reports',
      chunks: ['chunk-vendors', 'chunk-common', 'annualreports'],
    },
    'webapps': {
      entry: './src/pages/WebApplications/main.js',
      template: 'public/index.html',
      filename: "webapps.html",
      title: 'Web Apps',
      chunks: ['chunk-vendors', 'chunk-common', 'webapps'],
    },
    'itsystems': {
      entry: './src/pages/ITSystems/main.js',
      template: 'public/index.html',
      filename: "itsystems.html",
      title: 'IT Systems',
      chunks: ['chunk-vendors', 'chunk-common', 'itsystems'],
    },
  }
})
