/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
    return (
        <nav className='teal darken-1'>
            <div className='nav-wrapper'>
                <a href='#' className='brand-logo'>
                    MoviesApp
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='!#'>Sass</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
