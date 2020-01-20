import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>(
    <header className="bg-gray-100 p-6">
        <div className="flex items-center justify-between flex-wrap">
            <div className="block">
                <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">🍅 Pomodoro Timer</span></Link>
            </div>
            <nav className="block">
            </nav>
        </div>
    </header>
)

export default Header;