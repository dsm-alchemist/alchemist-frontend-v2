import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Webcam from "react-webcam";
import { clearInterval } from "timers";

const Record = () => {

    const webcamRef = React.useRef<any>(null);

    const [imgSrc, setImgSrc] = useState<string>("");

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc)
    },[webcamRef, imgSrc]);

    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);

    useEffect(() => {
        let interval: any;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 10);
        }else if(!running){
            clearTimeout(interval);
        }
        return () => clearTimeout(interval);
    }, [running])

    const hour = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);
    const minute = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    const second = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

    useEffect(() => {
        localStorage.setItem("timer",(hour + minute + second).toString());
    }, [!running])




    // useEffect(() => {
    //     setInterval(function() {
    //         for(let i=0; i < 5; i ++){
    //             capture();
    //             console.log("12345");
    //         } 
    //     }, 5000)
    // }, [])

    return(
        <S.Wrapper>
            <S.Time>
                <span>{hour}:</span>
                <span>{minute}:</span>
                <span>{second}</span>
            </S.Time>
            <Webcam
                audio={false}
                height={650}
                ref={webcamRef}
                screenshotFormat="image/png"
            />
            {
                !running ? 
                    <button className="timer" onClick={() => setRunning(true)}>타이머 시작하기</button>
                        : 
                    <button className="timer" onClick={() => setRunning(false)}>타이머 멈추기</button>
            }
            <button className="reset" onClick={() => setTime(0)}>reset</button>

      
      {/* 캡처한 이미지 나타내는 코드 */}
      {/* {imgSrc && (
        <img className="capture"
          src={imgSrc}
        />
      )} */}
        </S.Wrapper>
    )
}

export default Record;