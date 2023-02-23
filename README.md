# Hosting a Full-Stack Application
1- backend  =>reactnd-contacts-server   (contain api link ,RDS DB)<br>
2- frontend =>reactnd-contacts-complete (contain bucket files)


### Dependencies

```
- Nodejs

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

## Built With

- [react] - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework


## circleci
- using this website [https://circleci.com] to apply [CI (Continuous Integration ) ,CD (Continuous development/delivery)]

- CI  => test ,lint,build ,check
- CD  => deploy, send to client


## License

[License](LICENSE.txt)

## more info
- look at docs

## variables 
1- place it in .env file in api code <br>
POSTGRES_HOST
POSTGRES_USERNAME
POSTGRES_PASSWORD
POSTGRES_DB
PORT <br>
2- if you use circleci put the following in variables configurations, to open your account in aws after that will push api code beside front end code <br>
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
