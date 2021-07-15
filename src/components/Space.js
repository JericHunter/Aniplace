import React from 'react';
import '../styles/Space.css';
import { Link } from 'react-router-dom';

function Space(props) {
    const { name, image, address, hours, id } = props;
    return (
        <div className="Space">
              <Link className="Space" to={`/details/${id}`}><img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" /></Link>
              <Link className="Space-title" to={`/details/${id}`}><h1>{name}</h1></Link>

        </div>
    );
}

export default Space;