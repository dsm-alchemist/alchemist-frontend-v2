import React, { useState } from "react";
import * as S from "./styles";
import Webcam from "react-webcam";

const Record = () => {

    const webcamRef = React.useRef<any>(null);

    const [imgSrc, setImgSrc] = useState<string>("");

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc)
    },[webcamRef, imgSrc]);

    return(
        <S.Wrapper>
            <Webcam
        audio={false}
        height={600}
        ref={webcamRef}
        screenshotFormat="image/png"
        width={1280}
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && (
        <img className="capture"
          src={imgSrc}
        />
      )}
        </S.Wrapper>
    )
}

export default Record;