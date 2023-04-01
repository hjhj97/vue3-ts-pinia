import axios, { AxiosResponse } from 'axios';
import router from '../router';

export default function useAxios() {
	function postData(
		url: string,
		payload: any,
		callback: (v: any) => any,
		failCallback: (v: any) => any,
	) {
		axios
			.post(url, payload, { headers: {} })
			.then((res: AxiosResponse) => {
				if (res.data.success) {
					callback(res.data);
				} else if (res.data.data.success) {
					if (callback) {
						callback(res.data.data);
					}
				} else {
					// post에 대한 응답으로 success가 false일 경우 실행할 로직(서버와 통신은 성공한 상태)
					if (failCallback) {
						failCallback(res.data.data);
					}
				}
			})
			// 서버와 통신자체가 실패한 상태
			.catch((error) => {
				console.error(error);
			});
	}

	function fetchData(
		url: string,
		params: any,
		callback: (v: any) => any,
		failCallback: (v: any) => any,
	) {
		axios
			.get(url, {
				headers: {},
				params: params,
			})
			.then((res) => {
				if (res.data) {
					callback(res.data);
				} else if (res.data.success) {
					callback(res.data);
				} else if (res.data.data.success) {
					callback(res.data.data);
				} else {
					if (failCallback) {
						failCallback(res.data.data);
					}
				}
			})
			.catch((error) => {
				console.log(error);
				const status = error.message.slice(-3);
				if (status === '500') {
					router.push('/404');
				} else {
					if (status === '429') {
						router.push('/');
					} else {
						router.push('/');
					}
				}
			});
	}

	return {
		postData,
		fetchData,
	};
}
