/** @format */

import { Link } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                }}
            >
                <Link to="/login">Login</Link> | <Link to="/admin">Admin</Link>
            </nav>
        </div>
    )
}
