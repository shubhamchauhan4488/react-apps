import { useContext, useState } from "react"
import { fetchMovies } from "./api"
import { NamesList } from "./PeopleList";
import './index.css';
import { TitlesList } from "./TitleList";
import { AppContext } from "../../context/AppContext";
import { themes } from "../../theme";

export const ImdbHome = () => {
    //theme toggler
    const { themeId, toggleTheme } = useContext(AppContext);
    const [searchText, setSearchText] = useState('');
    const [names, setNames] = useState([])
    const [titles, setTitles] = useState([])

    // get the current theme styling
    const newTheme = themes[themeId];

    const inputChangeHandler = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearch = async () => {
        if (searchText) {
            const results = await fetchMovies(searchText)
            setNames(results.nameResults.results)
            setTitles(results.titleResults.results)
            console.log('results', results)
        }
    }

    return (
        <div style={{color: newTheme["color"], backgroundColor: newTheme["background-color"]}}>
            <label htmlFor="textInput">Enter Text:</label>
            <input
                type="text"
                id="textInput"
                value={searchText}
                onChange={inputChangeHandler}
                placeholder="type here..."
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={toggleTheme}>Toggle</button>
            {names?.length > 0 && <NamesList names={names}/>}
            {titles?.length > 0 && <TitlesList titles={titles}/>}
        </div>
    )
}