import React, { useState } from 'react';
import Space from './Space';
import '../styles/List.css';
import data from '../anime-data.js';

function List(props) {
    const [query, setQuery] = useState('');

    const spaces = data.filter((obj) => {
        const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());

        return inTitle;
    }).map((obj) => {
        const { title, images, id } = obj;

        return (
          <Space
            id={id}
            key={title}
            name={title}
            image={images[0]}
          />
        )
    })

    return (
        <div className="List">
          <form>
              <input
                value={query}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Submit</button>
          </form>
          { spaces }
        </div>
    );
}

export default List;
