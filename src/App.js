import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './App.module.scss';
import PhotoList from './components/photo-list/photo-list.component';
import Pagination from './components/pagination/pagination.component';
import BasicLayout from './components/basic-layout/basic-layout.component';

const App = () => {
	// API info would never show api key, but this is a demo so you can check the app out :)
	const API_KEY = 'eb4f38bf9b527b07e80a6836a80ee59f';

	const [userSearch, setUserSearch] = useState('');
	const [photosList, setPhotosList] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [isInitialized, setisInitialized] = useState(false);
	const [page, setPage] = useState(1);

	const searchSubmitHandler = (userSearch) => {
		setisInitialized(true);
		setUserSearch(userSearch);
		setPage(1);
	};

	useEffect(() => {
		if (isInitialized) {
			const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${userSearch}&sort=relevance&page=${page}&per_page=28&format=json&nojsoncallback=1`;
			setIsSearching(true);
			axios
				.get(url)
				.then((res) => {
					setPhotosList(res.data.photos.photo);
					setIsSearching(false);
				})
				.catch((err) => console.log('Error fetching and parsing data', err));
		}
	}, [page, userSearch, isInitialized]);

	const prevPageHandler = () => {
		setPage(page - 1);
	};

	const nextPageHandler = () => {
		setPage(page + 1);
	};

	// if check for rendering next/prev pagination
	let mainContent;
	console.log(photosList.length);

	if (isInitialized) {
		mainContent = (
			<div>
				<PhotoList photos={photosList} userSearch={userSearch} />
				{photosList.length > 0 && <Pagination
					page={page}
					onNextClick={nextPageHandler}
					onPrevClick={prevPageHandler}
				/>}
			</div>
		);
	}

	if (isSearching) {
		mainContent = <h2>Searching....</h2>;
	}

	return (
		<div className={classes.App}>
			<BasicLayout onSearchSubmit={searchSubmitHandler} mainContent={mainContent} />
		</div>
	);
};

export default App;
