## README

### Deploying

We deploy via GitHub Actions. See [Pipeline Configuration](.github/workflows//sam-pipeline.yml)


### TODOS:

- [ ] Figure out how to run server locally, so I can test from Postman etc
- [ ] New event to create new journal entries -- based on `eventType` within the event object.


### Commands:
- `aws cloudformation validate-template --template-body file://template.yaml`
- `yarn start:local`
- `yarn build` _DEPRECATED_ - Bundles up all the relevant files into a .zip, for upload to AWS Lambda console. _This will break the lambda application, which was created via the GitHub Actions. If you use this method, CD will break until you delete the entire application manually from the AWS Console.