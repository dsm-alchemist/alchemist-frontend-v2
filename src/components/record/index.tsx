import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Webcam from "react-webcam";
import { ACCESS_TOKEN, requestWithAccessToken } from "../../utils/api/axios";

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
    }, [running]);

    const a: any = localStorage.getItem("prevTime");

    const hour = (time.toString() + Math.floor((time / 3600000) % 60)).slice(-2);
    const minute = (time.toString() + Math.floor((time / 60000) % 60)).slice(-2);
    const second = (time.toString() + Math.floor((time / 1000) % 60)).slice(-2);

    useEffect(() => {
        localStorage.setItem("prevTime",  time.toString());
    }, [!running]);

    const sendTimer = () => {
        requestWithAccessToken({
            method: "POST",
            url: "/timer",
            headers: {authorization: ACCESS_TOKEN},
            data: {
                "time":  hour
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    const stopTimer = () => {
        requestWithAccessToken({
            method: "PUT",
            url: "/timer",
            headers: {authorization: ACCESS_TOKEN},
            data: {}
        }).then((res) => {
            console.log(res);
            setRunning(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        sendTimer();
    }, [hour])


    // useEffect(() => {
    //     setInterval(function() {
    //         for(let i=0; i < 5; i ++){
    //             capture();
    //             console.log("12345");
    //         } 
    //     }, 5000)
    // }, [])

    // localStorage.getItem("timer")?.substr(0,2)
    //localStorage.getItem("timer")?.substr(2,2)
    //localStorage.getItem("timer")?.substr(4,6)

    return(
        <S.Wrapper>
            <S.Time>
                <span>
                    {
                        hour == "0" ?
                        (a ? a : "0" + + Math.floor((time / 3600000) % 60)).slice(-2) : hour
                    }:
                </span>
                <span>
                    {
                        minute == "0" ?
                            (a ? a : "0" + + Math.floor((time / 60000) % 60)).slice(-2) : minute
                    }:
                </span>
                <span>
                    {
                        second == "0" ? 
                            (a ? a : "0" + + Math.floor((time / 1000) % 60)).slice(-2) : second
                    }
                </span>
            </S.Time>
            <Webcam
                mirrored={true}
                audio={false}
                height={650}
                ref={webcamRef}
                screenshotFormat="image/png"
            />
            {
                !running ? 
                    <button className="timer" onClick={() => setRunning(true)}>타이머 시작하기</button>
                        : 
                    <button className="timer" onClick={() => stopTimer()}>타이머 멈추기</button>
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