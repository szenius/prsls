# Hello World

This project was created with Serverless framework. Namely

```
npx sls create --template aws-nodejs
```

## Development

To set up

```
npm install
```

To invoke function locally

```
npx sls invoke local --function <function_name>

// example
npx sls invoke local --function healthz
```

To deploy project

```
npx sls deploy
```

To deploy lambda

```
npx sls deploy --function <function_name>

// example
npx sls deploy --function healthz
```

To deploy to a specific stage

```
npx sls deploy --stage <stage_name>

// example
npx sls deploy --stage stg
```

To delete project

```
npx sls remove
npx sls remove --stage <stage_name>
```
