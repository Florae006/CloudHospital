// 用户相关 API
import service from '@/services/apiClient';
import { loginRes } from '@/types/api/common';

// 用户登录
export const employeeLogin = (data: loginRes) => service.post('/login/employeeLogin', data);