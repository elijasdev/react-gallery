import {useState} from 'react';
import classes from './search-form.module.scss';
import searchIcon from '../../assets/searchIcon.svg';

const SearchForm = ({onSearchSubmit}) => {

	const [userSearch, setUserSearch] = useState("");

	const searchChangeHandler = (e) => {
		setUserSearch(e.target.value);
	}

	const searchSubmitHandler = (e) => {
		e.preventDefault();
		onSearchSubmit(userSearch);
	}
	return(
		<form className={classes.searchForm} onSubmit={searchSubmitHandler}>
			<input onChange={searchChangeHandler} type="search" name="search" placeholder="Search" required/>
			<button type="submit">
				<img src={searchIcon} alt="search icon"/>
			</button>
		</form>
	);
}

export default SearchForm;
