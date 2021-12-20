import { useState, useRef, useEffect } from 'react';
import { ACCESS_TOKEN, requestWithAccessToken } from '../../api/axios';

const useTimer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [date, setDate] = useState<number>(new Date().getDate());

  useEffect(() => {
    requestWithAccessToken({
        method: "GET",
        url: "/time",
        headers: {authorization: ACCESS_TOKEN},
        data: {}
    }).then((res) => {
        console.log(res);
        setTimer(res.data);
    }).catch((err) => {
        console.log(err);
    });

    setInterval(function() {
        const curDate = new Date().getDate();
        if(curDate != date) {
            setTimer(0);
            setDate(new Date().getDate());
        }
    }, 5000);
  }, []);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const countRef = useRef<any>(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset };
}

export default useTimer;