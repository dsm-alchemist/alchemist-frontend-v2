import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Webcam from "react-webcam";
import { ACCESS_TOKEN, requestWithAccessToken, requestWithOutAccessToken } from "../../utils/api/axios";
import useTimer from "../../utils/hooks/timer/useTimer";

const Record = () => {

    const webcamRef = React.useRef<any>(null);

    const [imgSrc, setImgSrc] = useState<string>("");

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc)
    },[webcamRef, imgSrc]);

    // localStorage.getItem("timer")?.substr(0,2)
    //localStorage.getItem("timer")?.substr(2,2)
    //localStorage.getItem("timer")?.substr(4,6);

    const sendTimer = (i: number) => {
        requestWithAccessToken({
            method: "POST",
            url: "/timer",
            headers: {authorization: ACCESS_TOKEN},
            data: {
                "time": i
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    const formatTime = (timer: number) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2);
        const minutes: any = `${Math.floor(timer / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    }

    const { timer, isActive, isPaused, handleStart, handlePause, handleResume } = useTimer();

    useEffect(() => {
        if(isPaused == true){
            console.log("isPaused true")
            setInterval(function() {
                for(let i=0; i < 5; i ++){
                    capture();
                    console.log("asd")
                }
            }, 5000);
        }
    }, []);

    useEffect(() => {
        console.log(isPaused);
    }, [isPaused])

    useEffect(() => {
        requestWithOutAccessToken({
            method: "POST",
            url: "/ai",
            headers: {},
            data: {
                "file": imgSrc
            },
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [imgSrc])

    const timerStop = () => {
        if(isPaused) {
            requestWithAccessToken({
                method: "PUT",
                url: "/timer",
                headers: {authorization: ACCESS_TOKEN},
                data: {
                    "time": timer
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }


    useEffect(() => {
        for (let i = 1; i < 24; i++) {
            if(timer / i === 3600) {
                sendTimer(i);
            }
        }
    }, [timer])

    return(
        <S.Wrapper>
            <S.Time>
                <span>{formatTime(timer)}</span>
            </S.Time>
            <Webcam
                mirrored={true}
                audio={false}
                height={650}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            {
                !isActive && !isPaused ?
                <button className="timer" onClick={() => {handleStart();}}>타이머 시작하기</button>
                : (
                    isPaused ? <button className="timer" onClick={() => {handlePause(); timerStop();}}>타이머 멈추기</button> :
                    <button className="timer" onClick={() => {handleResume();}}>타이머 재시작</button>
                )
            }
            <span className="reset" >* 시간은 날짜가 바뀌면 초기화 됩니다. *</span>

      
      {/* 캡처한 이미지 나타내는 코드 */}
      {imgSrc && (
        <img style={{}} className="capture"
          src={imgSrc}
        />
      )}
        </S.Wrapper>
    )
}

export default Record;