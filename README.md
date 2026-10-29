# Sparse_Checkout_Automation (practice monorepo)

TypeScript + Playwright. One repo, one folder per product.

```
config/    shared: environments, logger
core/      shared: base page, SSH helper
data/      common/ + products/<product>/
products/  cm/  cms/  smgr/  solution/
pipelines/jenkins/   one Jenkinsfile per product (+ solution)
scripts/   sparse-setup.sh
```

## First-time setup (once, by the repo owner)
```bash
npm install                    # creates package-lock.json - COMMIT IT (Jenkins uses npm ci)
npx playwright install chromium
npm test                       # all products
```

## Work on one product only (sparse clone)
```bash
git clone --filter=blob:none --sparse <repo-url> Aura_Automation
cd Aura_Automation
git sparse-checkout set scripts
bash scripts/sparse-setup.sh cm          # or: cm cms   (several products)
npm install
npx playwright install chromium
npm run test:cm
```
Add another product later: `bash scripts/sparse-setup.sh cm cms`
Solution tests (CM + CMS): `bash scripts/sparse-setup.sh cm cms` then `git sparse-checkout add products/solution`
Back to everything: `git sparse-checkout disable`

If a test says "Cannot find module ../../../core/...", `core/` is not in your sparse set.
