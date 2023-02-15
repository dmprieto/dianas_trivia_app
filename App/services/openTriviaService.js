import axios from "axios"

const encoding = "base64"

const handleError = (error) => {
  if (error.response) {
    console.log("error data: " + error.response.data)
    console.log("error status: " + error.response.status)
    console.log("error headers: " + error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    console.log("error - no response: " + error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error: ", error.message)
  }
  console.log("Error config: " + error.config)
}
export const openTriviaAPI = axios.create({
  baseURL: "https://opentdb.com",
  timeout: 1000
})

export const getCategories = async () => {
  try {
    const res = await openTriviaAPI.get(`/api_category.php`)
    if (res.data && res.data.trivia_categories) {
      return res.data.trivia_categories
    }
    return []
  } catch (error) {
    handleError(error)
    return []
  }
}

export const getQuestions = async (categoryId, numQuestions) => {
  try {
    const res = await openTriviaAPI.get(
      `/api.php?amount=${numQuestions}&category=${categoryId}&encode=${encoding}`
    )

    if (res.data !== undefined && res.data.response_code !== undefined) {
      switch (res.data.response_code) {
        case 0:
          return res.data.results
        case 1:
          console.log("no questions found")
          return []
        default:
          console.log("error open api error code:" + res.data.response_code)
          return []
      }
    }
    return []
  } catch (error) {
    handleError(error)
    return []
  }
}
