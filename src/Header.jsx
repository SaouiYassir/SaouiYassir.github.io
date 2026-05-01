import { useEffect, useRef } from 'react';
import './Header.css';
import $ from 'jquery';

function Header() {
  const navRef = useRef(null);

  useEffect(() => {
    const listItems = $(navRef.current).find('li');

    listItems.hover(
      function() {
        $(this).css({
          'color': '#007bff',
          'transition': '0.3s',
          'cursor': 'pointer'
        });
      },
      function() {
        $(this).css('color', 'black');
      }
    );

    return () => {
      listItems.off();
    };
  }, []);

  return (
    <header>
      <div className='right-part'>YASSIR SAOUI</div>
      <div className='list-elements'>
        <ul ref={navRef}>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='left-part'>
        <a href="mailto:yassirsaoui06@gmail.com">Hire me</a>
      </div>
    </header>
  );
}

export default Header;