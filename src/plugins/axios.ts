import router from '@/router';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

axios.interceptors.request.use(
	(request: AxiosRequestConfig): AxiosRequestConfig => {
		//요청을 보내기 전
		return request;
	},
	(error) => {
		// 에러 요청을 보내기 전
		return error;
	},
);

axios.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => {
		// interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
		// 2xx 범위에 있는 상태코드는 여기에서 실행됨

		return response;
	},
	(error) => {
		// 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
		//console.log(error);
		return error;
	},
);

export default axios;
