# CoachBackend
Info about API 

Global url: http://localhost:3000

LOGIN\
POST\
/login\
info: login to app and get accessToken
example:
        "email":"erykmati@o2.pl",
        "password":"12345"
       
result:
        "name": "eryk",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyeWttYXRpQG8yLnBsIiwiaWF0IjoxNjMzODY2NjA4LCJleHAiOjE2MzM4Njg0MDh9.5qmqQ3LQFARLpGp-CGpF5jH7fg_Xd3wShg6tQ4KwuGc"

USERS
GET
/users
info: get all users from database
example:
        "id_user": 1,
        "name": "eryk",
        "surname": "janocha",
        "email": "erykmati@o2.pl",
        "password": "$2a$10$800D9wdPRtqemFKPHG87QOB5Gr7O//52hGyA/M7QcPUW4heDWZzey",
        "growth": "181.00",
        "weight": "67.00",
        "age": 24,
        "type_of_role_id": 3
        
POST
/users
info: add user to database
example:
        "name": "eryk",
        "surname": "janocha",
        "email": "erykmati9979@o2.pl",
        "password": "12345",
        "growth": 188,
        "weight": 87.00,
        "age": 26,
        "type_of_role_id": 1    
result:
        "message": "correct add user"
