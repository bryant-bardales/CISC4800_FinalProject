import { useEffect, useState } from 'react';

const Unsplash = () => {

  const [img, setImg] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}${process.env.REACT_APP_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setImg(data.urls.full);
        document.body.style.backgroundImage = `url(${img})`;
      })
  }, [])

  return (
    <>
      <div className="image-credits">Image by Unsplash</div>
    </>
  )
    ;
}

export default Unsplash;