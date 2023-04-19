import React, { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    // }

    // class Search extends React.Component {
    //     state = {
    //         search: '',
    //         type: 'all',
    //     };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            // this.props.searchMovies(this.state.search, this.state.type);
            searchMovies(search, type);
        }
    };

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
        // this.setState(
        //     () => ({ type: e.target.dataset.type }),
        //     () => {
        //         this.props.searchMovies(this.state.search, this.state.type);
        //     }
        // );
    };

    // render() {
    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    placeholder='search'
                    type='search'
                    className='validate'
                    // value={this.state.search}
                    // onChange={(e) =>
                    //     this.setState({ search: e.target.value })
                    // }
                    // onKeyDown={this.handleKey}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className='btn search-btn'
                    // onClick={() =>
                    //     this.props.searchMovies(
                    //         this.state.search,
                    //         this.state.type
                    //     )
                    // }
                    onClick={() => searchMovies(search, type)}
                >
                    Search
                </button>
            </div>
            <div>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='all'
                        // onChange={this.handleFilter}
                        // checked={this.state.type === 'all'}
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='movie'
                        // onChange={this.handleFilter}
                        // checked={this.state.type === 'movie'}
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='series'
                        // onChange={this.handleFilter}
                        // checked={this.state.type === 'series'}
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    );
    // }
};
export { Search };
