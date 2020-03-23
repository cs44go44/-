/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const service = axios.create({
  timeout: 10000,
  headers: {
    test: 'test-header'
  }
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.dir(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.dir(error)
  }
)

// 请求拦截器
/* axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }); */

// 响应拦截器
/* axios.interceptors.response.use(
    response => {
        // 定时刷新access-token
        if (!response.data.value && response.data.data.message === 'token invalid') {
            // 刷新token
            store.dispatch('refresh').then(response => {
                sessionStorage.setItem('access_token', response.data)
            }).catch(error => {
                throw new Error('token刷新' + error)
            })
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
); */

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    service.get('http://localhost:8011/' + url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function portPost (port, url, params) {
  return new Promise((resolve, reject) => {
    service.post('http://localhost:' + port + '/' + url, JSON.stringify(params), {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(res => {
      if (res.data.code === 'E000') {
        resolve(res.data.data)
      } else if (res.data.code === 201) {
        // 做201错误的特殊处理
        reject(res.data)
      } else {
        // 其他统一处理
        reject(res.data)
      }
    }).catch(err => {
      reject(err.data)
    })
  })
}
