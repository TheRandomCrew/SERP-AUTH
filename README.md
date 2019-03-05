# SERP-AUTH

A simple server with JWT authentication with the ability to create new users, and to authenticate the existing ones.

## Endpoints:
* /auth/login - POST (email, password)
* /auth/register - POST (email, password)
* /users/:userid - GET (protected)

TODOS:

* set `.env` for secrets
* set other endpoints in users
* set tests
* Change mongo for aws dynamo