import axios from 'axios';

const Kakao = axios.create({
	baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
	headers: {
		Authorization: 'KakaoAK 9390fb2e22f1538bcbc062dbdab566cb', // 공통으로 요청 할 헤더
	},
});

//search book api
export const bookSearch = (params) => {
	return Kakao.get('/v3/search/book', {params});
};
