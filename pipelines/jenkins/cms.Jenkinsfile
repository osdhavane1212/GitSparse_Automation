pipeline {
  agent any
  options { skipDefaultCheckout(true) }
  environment {
    REPO_URL = 'https://github.com/osdhavane1212/GitSparse_Automation.git'   // change this
  }
  stages {
    stage('Checkout (sparse)') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: '*/main']],
          userRemoteConfigs: [[url: env.REPO_URL]],
          extensions: [
            [$class: 'CleanBeforeCheckout'],
            [$class: 'CloneOption', shallow: true, depth: 10, noTags: true],
            [$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [
              [path: 'core/'], [path: 'config/'], [path: 'data/common/'],
              [path: 'products/cms/'], [path: 'data/products/cms/'],
              [path: '/package.json'], [path: '/package-lock.json'],
              [path: '/playwright.config.ts'], [path: '/tsconfig.json']
            ]]
          ]
        ])
      }
    }
    stage('Show what was pulled') {
      steps { script { if (isUnix()) { sh 'ls products' } else { bat 'dir products' } } }
    }
    stage('Test') {
      steps {
        script {
          if (isUnix()) { sh 'npm ci && npx playwright install chromium && npx playwright test products/cms' }
          else          { bat 'npm ci && npx playwright install chromium && npx playwright test products/cms' }
        }
      }
    }
  }
}
