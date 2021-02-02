/* eslint-disable */
import React, {useState, useEffect} from 'react';
import './App.css';
import {bookSearch} from './api';
import axios from 'axios';

const App = (props) => {
	useEffect(() => {
		bookSearchHandler(); // 컴포넌트 마운트 후에, 함수를 호출한다.
	}, []);

	const bookSearchHandler = async () => {
		const params = {
			query: '미움받을 용기',
			sort: 'accuracy',
			page: 1,
			size: 10,
		};
		const {data} = await bookSearch(params);
		console.log(data);
	};

	return <div>{console.log(1 + 1)}</div>;
};

export default App;
