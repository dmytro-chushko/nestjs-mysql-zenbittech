# Hello! This is the open API for [feedback form](https://github.com/dmytro-chushko/front-react-feedback-zenbittech) app.
## Used technologies:
- [Nest.js](https://nestjs.com/);
- [MySql](https://www.mysql.com/);
## Deployed on [Heroku.com](https://id.heroku.com/).
## Usage.
This API receives requests with feedback messages and stores them into the database.
### Requests:
- To store feedback message use (method: POST) - https://nestjs-mysql-zenbittech.herokuapp.com/api/feedback.  
You need provide to request body such parameters:
  ```jsx
  request.body={
                  name: 'Name',
                  email: 'email@email.com', 
                  message: 'Text'
                }
  ```
- To recive list of stored messages use (method: GET) - https://nestjs-mysql-zenbittech.herokuapp.com/api/feedback.  
You will recive such responce:
  ```jsx
  "allFeedback": [
        {
            "id": 41,
            "name": "Jennifer",
            "email": "jen@jennifer.com",
            "message": "Hello, it's me"
        },
        {
            "id": 51,
            "name": "Piter",
            "email": "piter@piter.com",
            "message": "Hello, I'm Piter"
        }
    ]
    ```
- To delete one of stored messages you need to know 'id' of entity you want to delete.  
To use it you need to pass (method: DELETE) - https://nestjs-mysql-zenbittech.herokuapp.com/api/feedback/${id}. Message will be deleted.
  ```jsx
  "message": "Feedback with id: 51 - was deleted"
  ```
# Thank you for your time :)
