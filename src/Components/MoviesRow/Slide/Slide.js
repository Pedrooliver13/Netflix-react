import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SlideItem, SlideUl, SlidePrev, SlideNext } from '../style';

const Slide = ({ items }) => {
  const [scrollX, setScrollX] = React.useState(0);
  let windowWidth = window.innerWidth;

  function nextSlide() {
    const listTotalWidth = items.results.length * 165;
    let moveSlide = scrollX - Math.round(windowWidth / 2);
    let paddingPage = 60;

    if (windowWidth - listTotalWidth > moveSlide) {
      moveSlide = windowWidth - listTotalWidth - paddingPage;
    }

    setScrollX(moveSlide);
  }

  function prevSlide() {
    let moveSlide = scrollX + Math.round(windowWidth / 2);

    if (moveSlide > 0) {
      moveSlide = 0;
    }

    setScrollX(moveSlide);
  }

  return (
    <>
      <SlideNext onClick={nextSlide}>
        <MdKeyboardArrowRight fontSize={50}/>
      </SlideNext>

      <SlidePrev onClick={prevSlide}>
        <MdKeyboardArrowLeft fontSize={50}/>
      </SlidePrev>

      <SlideUl
        style={{
          marginLeft: `${scrollX}px`,
          width: items.results.length * 150,
        }}
      >
        {items.results.map(({ poster_path, id, name }, index) => (
          <SlideItem key={id} index={index}>
            <Link to={`movie/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={name}
              />
            </Link>
          </SlideItem>
        ))}
      </SlideUl>
    </>
  );
};

export default Slide;
