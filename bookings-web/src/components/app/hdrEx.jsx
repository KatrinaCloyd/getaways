export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='link-list'>
                    {(this.props.user && this.props.user.token) && <>
                        <NavLink
                            exact
                            activeClassName='selected'
                            className='header-link'
                            to='/search'
                        >search</NavLink>
                        <NavLink
                            exact
                            activeClassName='selected'
                            className='header-link'
                            to='/my_garden'
                        >My Garden</NavLink>
                        <NavLink
                            exact
                            activeClassName='selected'
                            className='header-link'
                            to='/wishlist'
                        >Wishlist</NavLink>
                    </>}
                    {
                        (!this.props.user) && <>
                        </>
                    }
                    <NavLink
                        exact
                        activeClassName='selected'
                        className='header-link'
                        to='/about_us'
                    >
                        <HoverImage
                            className='header-icon'
                            alt='search icon'
                            src='/about_header_icon.png'
                            hoverSrc='/about_icon_Y.png'
                        />
            About Us
          </NavLink>
                    <NavLink
                        className='header-link'
                        onClick={this.props.handleLogout}
                        to='/'
                    >
                        <HoverImage
                            className='header-icon'
                            alt='search icon'
                            src='/logout_header_icon.png'
                            hoverSrc='/logout_icon_Y.png'
                        />
            Log Out
          </NavLink>

                </div >
            </div >
        );
    }
}