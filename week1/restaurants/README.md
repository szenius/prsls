# Restaurants

This project was created with Serverless framework. Namely

```
npm init -y
npm install --save-dev serverless
npx sls create --template aws-nodejs
```

`.env` was added by

```
npx sls export-env
```

## Development

To deploy

```
npx sls deploy
```

To see the main page that was deployed, use the root URL, i.e. `https://<some id>.execute-api.<some region>.amazonaws.com/dev/`

As IAM auth was added, `/restaurants` path should return 403 Forbidden.

To delete

```
npx sls remove
```

## Useful resources

- [CloudFormation Ref & GetAtt cheatsheet](https://theburningmonk.com/cloudformation-ref-and-getatt-cheatsheet/)
