import React from 'react'
import '../assets/styles/list.scss';
type list = {
    items: Array<string>
}

const List = ({ items }: list) => {
    return (
        <div className='list'>
            <ul>
                {items.map((content) => <li>{content}</li>)}
            </ul>
        </div>
    )
}

export default List
