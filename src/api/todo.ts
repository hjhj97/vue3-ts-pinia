import useAxios from '@/compositions/useAxios';
import { Todo } from '@/types/Todo';

const { fetchData, postData } = useAxios();

export function fetchTodos() {
	return new Promise<Todo[]>((resolve, reject) => {
		fetchData(
			'https://jsonplaceholder.typicode.com/todos',
			{},
			(res) => resolve(res),
			(fail) => reject(fail),
		);
	});
}
