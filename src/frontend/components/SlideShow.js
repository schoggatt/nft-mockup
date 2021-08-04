import React from 'react'
import { SlideShowData } from './SlideShowData';
import "./SlideShow.css";


const SlideShow = ({slides}) => {

  const[current, setCurrent] = React.useState(0)
  const length = slides.length
  const delay = 10000
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  return(
    <section className='slider'>
      {SlideShowData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <button className='button-left' onClick={prevSlide}>
              <img className='slideshow-button-left' src='https://dsm01pap001files.storage.live.com/y4mhylUSU2K7udh7_8fwRh7gHNk7YFf0vDA5hhjJERoHnWL05L5JWYM8oyC2oNrvL0-8KfmWn2o4cGc9w9DkSWiF3vq4ubieMhxxyFhxnP0NkbxQunXCtl7BB-XexOhmvP3sVhjxaitMugq344YJDZkUzv69GNWML17Uhz2KkPS_82voTMGdu6KON-j3RorsFDr?width=50&height=50&cropmode=none'/>
            </button>
            <button className='button-right' onClick={nextSlide}>
              <img className='slideshow-button-right' src='https://dsm01pap001files.storage.live.com/y4mxKaPjzbjAgSpF471mHt05zM0HEauXpNdRkLrF_LxKlJQ-HypFZdAdCSFvBCm6NqQnxWJ7W3pd_zuI8nl-ZqKy-YFyjDFgBHdpY-zQn3266pHw3uM8CFcMvzAV3hmhD7saEy2cE2ANEhSYqzFfY44YAivxGZK-qeXpAiZ2htN3DX0w0gvdiHFkKYL2lfRzJ5I?width=50&height=50&cropmode=none'/>
            </button>
            {index === current && (
              <img src={slide.image} className='image' />
            )}
            <div class="overlay">
                <img src="https://dsm01pap001files.storage.live.com/y4mbFwwGCedqUGsg-49TEpfVWrM-rqoyXA7zE5qGKNX93SwMkxvFi_m5oEiqNK6yCeiZR0Yiws5doJNzJAzQlePC939Rele0HxydpfmIAH4vIDSeC7lozakIF4VhZzp_ccGQwGjFOouauQ12eNZBeLVwjhhbRncKcFUqfF4AZES8dPvjQKDUtQq7DbecQdZMEar?width=1920&height=1080&cropmode=none" className='overlay-image'/>
            </div>
          </div>
        );
      })}
    </section>
  )
};

export default SlideShow;