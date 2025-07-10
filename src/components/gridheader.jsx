'use client';
import '../gridHeader.css'

function GridHeaderNav() {

    return (
        <>
    <header>
        <nav className="headerNav nav header">
            <ul>
                <div class="navListItem">
                    <li>
                        <img src="https://placehold.co/34x40" href="google.com" id="header-logo" title="home" width="34px" height="40px"/>
                        <a id="header-text" href="" title="home">CompanyName</a>
                    </li>
                </div>
                <div class="navListItem">
                    <li><a href="">Button</a></li>
                </div>
                <div class="navListItem">
                    <li><a href="">Button</a></li>
                </div>
                <div class="navListItem">
                    <li><a href="">Button</a></li>
                </div>
                <div class="navListItem">
                    <li><a href="">Button</a></li>
                </div>
                <div class="navListItem signIn">
                    <li><a href="">Sign in</a></li>
                </div>
            </ul>
        </nav>
    </header>
        </>
    )
}

export default GridHeaderNav