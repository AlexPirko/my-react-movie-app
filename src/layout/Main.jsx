import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    // }
    // class Main extends React.Component {
    //     state = {
    //         movies: [],
    //         loading: true,
    //     };

    // componentDidMount() {
    //     fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
    //         .then((response) => response.json())
    //         .then((data) =>
    //             this.setState({ movies: data.Search, loading: false })
    //         )
    //         .catch((err) => {
    //             console.error(err);
    //             this.setState({ loading: false });
    //         });
    // }

    const searchMovies = (str, type = 'all') => {
        // this.setState({ loading: true });
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    setLoading(false);
                    setMovies(data.Search);
                }
                // this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                // this.setState({ loading: false });
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // render() {
    // const { movies, loading } = this.state;

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
    // }
}
export { Main };
