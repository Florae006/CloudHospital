import service from '@/services/apiClient';

export const commonOnline = () => service.get('/common/online');
