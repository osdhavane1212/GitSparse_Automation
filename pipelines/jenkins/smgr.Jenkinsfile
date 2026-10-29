pipeline {
  agent any
  options { skipDefaultCheckout(true) }
  environment {
    // change the URL below to your repo
    REPO_URL = 'https://github.com/osdhavane1212/GitSparse_Automation.git'
  }
  stages {
    stage('Checkout (partial + sparse)') {
      steps {
        deleteDir()
        script {
          def cmd = 'git clone --filter=blob:none --depth 1 ' +
                    '--sparse --no-tags --branch main ' +
                    env.REPO_URL + ' . && ' +
                    'git sparse-checkout set core config data/common ' +
                    'products/smgr data/products/smgr'
          if (isUnix()) { sh cmd } else { bat cmd }
        }
      }
    }
    stage('Show what was pulled') {
      steps {
        script {
          if (isUnix()) { sh 'ls products' } else { bat 'dir products' }
        }
      }
    }
    stage('Test') {
      steps {
        script {
          def cmd = 'npm ci && npx playwright install chromium && ' +
                    'npx playwright test products/smgr'
          if (isUnix()) { sh cmd } else { bat cmd }
        }
      }
    }
  }
}