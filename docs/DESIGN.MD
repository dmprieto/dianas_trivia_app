## Data Analysis

After analyzing the following REST Endpoint from Open Trivia API
- https://opentdb.com/api_category.php
- https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
- https://opentdb.com/api.php?amount=10&category=9

I created the following diagram that shows the attributes and relationships of the data retrieved by the API
![data](/assets/trivia_data.jpg "data")

From the diagram and from the API documentation, the following can be infered:
- No token needs to be sent when calling the REST endpoints
- The API can be queried to get all the  categories and the counts related to the category (total questions, number of easy questions,  number of medium questions, number of hard questions)
- Given the category id, the questions can be retrieved
- The questions REST endpoint needs a number of questions to be retrieved
- The encoding needs to be taken into account. Different encodings can be defined in the REST endpoint call: urlLegacy, url3986, base64
- The following codes are returned after a REST API call, depending on the result of the query:
  * **Code 0**: Success Returned results successfully.
  * **Code 1**: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
  * **Code 2**: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
  * **Code 3**: Token Not Found Session Token does not exist.
  * **Code 4**: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
