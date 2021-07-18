import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='container'>
      <div className='jumbotron bg-light p-4'>
        <h1 className='display-4'>Apply for Credit Cards!</h1>
        <p className='lead'>
          Credit Cards are the new-age convenient alternative to hard cash and debit cards. The Credit Cards offered by a lot of banks these days go far beyond just increasing your spending capacity as they come with certain benefits and offers. There are certain assured advantages of having Credit Cards. The first being that they allow you to shop without worrying about the current funds in your account.Secondly, you get multiple offers on a variety of exclusive Credit Cards that allow you to discounts at movie tickets, on travelling, on shopping and various cashback offers as well.
        </p>
        <hr className='my-4' />
        <p className='lead'>
          <Link exact to='/apply' className='btn btn-primary'>Apply</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
