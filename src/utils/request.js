import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

export const get = (url, param = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, { param }).then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }, (err) => {
      reject(err)
    })
  })
}
