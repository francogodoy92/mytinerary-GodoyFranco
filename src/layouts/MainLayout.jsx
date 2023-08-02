import React from 'react'
import Header from './../components/Header.jsx';
import Nav from './../components/Nav.jsx';

const links = [
    { value: '#', content: 'Link 1', id: '1' },
    { value: '#', content: 'Link 2', id: '2' },
    { value: '#', content: 'Link 3', id: '3' },
    { value: '#', content: 'Link 4', id: '4' },
]

const MainLayout = ({ children }) => {

    return (
        <div className='w-full bg-gray-200 min-h-screen flex flex-col'>
            <Header />
            {
                children
            }
        </div>
    )
}

export default MainLayout