import { useEffect, useState } from 'react';

const Unsplash = () => {

  const [img, setImg] = useState('');

  const API = 'https://api.unsplash.com/photos/random/?client_id='
  const KEY = 'O-TGWpqjLoj5Upmat-aYCuaB3bPKDxmib5mUwdwl8oU'

  useEffect(() => {
    fetch(`${API}${KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setImg(data.urls.raw);
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