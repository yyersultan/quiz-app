import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-67260-default-rtdb.firebaseio.com/'
})