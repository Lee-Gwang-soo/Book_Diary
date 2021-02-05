import axios from 'axios';

const kakao_Key = process.env.REACT_APP_KAKAO_KEY;
// kakao REST API KEY를 환경변수에 넣어 git에 올리지 않고 사용.
const Kakao = axios.create({
	baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
	headers: {
		Authorization: 'KakaoAK ' + kakao_Key, // 공통으로 요청 할 헤더
	},
});

//search book api
export const bookSearch = (params) => {
	return Kakao.get('/v3/search/book', {params});
};
