import { useEffect, useRef, useState } from "react";
import { ArrowBackUp, ArrowForwardUp, PlayerPlay, PlayerPause } from 'tabler-icons-react';

const AudioPlayer = ({ isShown, src, playing, setPlaying, setPlayingEpisode }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();

  const [duration, setDuration] = useState(0)
  const [audible, setAudible] = useState(true)

  const togglePlayPause = () => {
    setAudible(!audible)
    if (audible) {
      audioPlayer.current.pause()
    } else {
      audioPlayer.current.play()
    }
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
  }

  const backTimer = (time) => {
    progressBar.current.value = Number(progressBar.current.value) - time;
    changeRange();
  }

  const forwardTimer = (time) => {
    progressBar.current.value = Number(progressBar.current.value) + time;
    changeRange();
  }

  useEffect(() => {
    const audioElement = audioPlayer.current
    if (audioElement) {
      const handleMetadataLoaded = () => {
        const seconds = Math.floor(audioElement.duration)
        setDuration(seconds)
        progressBar.current.max = seconds
      }

      const handleTimeUpdate = () => {
        progressBar.current.value = Math.floor(audioElement.currentTime)
        const currentTime = Math.floor(audioElement.currentTime)
        setDuration(Math.floor(audioElement.duration) - currentTime)
        console.log(progressBar.current.value)
      }

      if(playing) {
        setAudible(false)
      }

      audioElement.addEventListener('loadedmetadata', handleMetadataLoaded)
      audioElement.addEventListener('timeupdate', handleTimeUpdate)

      return () => {
        audioElement.removeEventListener('loadedmetadata', handleMetadataLoaded)
        audioElement.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  }, [playing, src])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  return (
    <>
      {isShown &&
        <footer className='fixed w-full bottom-0 h-18 z-50 left-0'>
          <div className='flex w-full bg-purple-700 h-full items-center justify-center gap-5'>
            <audio ref={audioPlayer} src={src}></audio>

            <div className='grid grid-cols-3 gap-2'>
              <button className='flex flex-col col-span-1 items-center'>
                <ArrowBackUp size={56} strokeWidth={1.2} className='translate-y-2 stroke-light' onClick={() => backTimer(10)} />
                <div className='text-xs -translate-y-3 -translate-x-3 text-light'>10</div>
              </button>
              <button className='col-span-1 rounded-full place-self-center border-2 border-light p-2' onClick={togglePlayPause}>
                {audible ?
                  <PlayerPause size={24} strokeWidth={0} className=' fill-light' /> :
                  <PlayerPlay size={24} strokeWidth={0} className='fill-light' />
                }
              </button>
              <button className='flex flex-col col-span-1 items-center'>
                <ArrowForwardUp size={56} strokeWidth={1.2} className='translate-y-2 stroke-light' onClick={() => forwardTimer(30)} />
                <div className='text-xs -translate-y-3 translate-x-3 text-light'>30</div>
              </button>
            </div>

            <div>
              <input
                type='range'
                className='w-[50vw] sm:w-[26vw] h-1 mb-3 bg-light rounded-lg appearance-none cursor-pointer range-sm'
                defaultValue='0'
                ref={progressBar}
                onChange={changeRange}></input>
            </div>

            <div className='text-md text-light'>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
          </div>
        </footer>
      }
    </>
  );
};
export default AudioPlayer;