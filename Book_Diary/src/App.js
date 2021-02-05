/* eslint-disable */
import React, {useState, useEffect} from 'react';
import './App.css';
import {bookSearch} from './api';
import Item from './Item';
import axios from 'axios';

const App = (props) => {
	const [books, setBooks] = useState([]);
	const [text, setText] = useState('');
	const [query, setQuery] = useState('');

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			//keyCode 13 = Enter
			setQuery(text); // Enter를 누르면 query는 text가 된다
		}
	};

	const onTextUpdate = (e) => {
		setText(e.target.value); // text를 입력할때마다 text값이 바뀐다
	};

	useEffect(() => {
		bookSearchHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
	}, [query]);

	const bookSearchHandler = async (query, reset) => {
		const params = {
			query: query, // 검색하려는 책의 제목
			sort: 'accuracy', // accuracy or recency = 정확성 or 최신
			page: 1, // 페이지 번호
			size: 10, // 한 페이지에 보여줄 책의 수
		};
		const {data} = await bookSearch(params);
		if (reset) {
			setBooks(data.documents);
		} else {
			setBooks(books.concat(data.documents));
		}
		console.log(data);
	};

	return (
		<div className='container'>
			<input
				type='search'
				placeholder='검색어를 입력 하세요'
				name='query'
				className='input_search'
				onKeyDown={onEnter}
				onChange={onTextUpdate}
				value={text}
			/>
			<ul>
				{books.map((
					book,
					index, //data.documents의 요소를 map으로 순회
				) => (
					<Item //Item에 props로 아래의 요소를 넘겨준다.
						key={index}
						authors={book.authors}
						thumbnail={book.thumbnail}
						title={book.title}
						bookname={book.bookname}
						contents={book.contents}
						url={book.url}
					/>
				))}
			</ul>
		</div>
	);
};

export default App;
