import { portPost } from './http'

// --------------------------登录注册模块 --------------------->>
// 登录
export const login = p => portPost(8801, 'user/login', p)
// 注册
export const register = p => portPost(8801, 'user/register', p)
// --------------------------登录注册模块 ---------------------<<
