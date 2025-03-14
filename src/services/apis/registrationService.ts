import service from '@/services/apiClient';
import { register } from '@/types/api/common';

// 查询所有部门信息
export const regFindAllDepartment = () => service.get('/registration/findAllDepartment');

// 查询所有部门名称及对应的id
export const regFindAllDepartmentName = () => service.get('/registration/findAllDepartmentname');

// 查询当前值班医生
export const regFindAllDutyEmployee = () => service.get('/registration/findAllDutyEmployee');

// 修改检查申请表的状态
export const regUpdateCheckremarkbyId = (data: { id: string, checkState: string }) => service.post('/registration/updateCheckremarkbyId', data);

// 添加挂号人员信息
export const regAddRegister = (data: register) => service.post('/registration/addRegister', data);