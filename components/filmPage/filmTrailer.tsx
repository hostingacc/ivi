import Script from 'next/script'

const FilmTrailer = () => {
  
    
    return(
   
        <div>
            <Script type="module" src="https://unpkg.com/x-frame-bypass"></Script>
            <iframe is="x-frame-bypass" src="https://widgets.kinopoisk.ru/discovery/trailer/89901?onlyPlayer=1&autoplay=1&cover=1" width="500" height="500"></iframe>
      </div>

    )
}

export default FilmTrailer;

