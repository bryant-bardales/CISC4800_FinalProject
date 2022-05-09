import { useEffect, useState } from 'react';

const Unsplash = () => {

  const [img, setImg] = useState('');

  useEffect(() => {
    fetch('${ REACT_APP_API } ${ REACT_APP_KEY }')
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])

  return (
    <div>
      <img src={img} alt="placeholder" />
    </div>
  );
}

export default Unsplash;