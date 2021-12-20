import React from "react";
import { useHistory } from "react-router";

export default function ImgLogo() {
    const history = useHistory();
    return(
        <svg style={{cursor: "pointer"}} onClick={() => {history.push("/")}} xmlns="http://www.w3.org/2000/svg" width="63.419" height="46.6" viewBox="0 0 63.419 46.6">
            <g id="그룹_24" data-name="그룹 24" transform="translate(-203.956 -250.5)">
                <g id="그룹_7" data-name="그룹 7" transform="translate(203.956 252)">
                <g id="그룹_6" data-name="그룹 6" transform="translate(0 0)">
                    <g id="그룹_5" data-name="그룹 5" transform="translate(0)">
                    <g id="그룹_4" data-name="그룹 4">
                        <line id="선_5" data-name="선 5" x2="8.494" transform="translate(32.276 0) rotate(180)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_6" data-name="선 6" x2="8.494" transform="translate(63.419 0) rotate(180)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_1" data-name="선 1" x2="14.722" transform="translate(12.174 0)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_1-2" data-name="선 1" x2="14.722" transform="translate(51.245 43.6) rotate(180)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_5-2" data-name="선 5" x2="8.494" transform="translate(31.143 43.6)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_6-2" data-name="선 6" x2="8.494" transform="translate(0 43.6)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_4" data-name="선 4" x2="19.252" transform="translate(53.51 17.553) rotate(180)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <path id="패스_1" data-name="패스 1" d="M0,43.6,15.855,0" transform="translate(59.738 43.6) rotate(180)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_3" data-name="선 3" x1="15.855" y1="43.6" transform="translate(43.884 43.6) rotate(180)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_4-2" data-name="선 4" x2="19.252" transform="translate(9.909 26.047)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_2" data-name="선 2" y1="43.6" x2="15.855" transform="translate(3.681 0)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                        <line id="선_3-2" data-name="선 3" x1="15.855" y1="43.6" transform="translate(19.535 0)" fill="none" stroke="#1d1d1d" stroke-width="3"/>
                    </g>
                    </g>
                </g>
                </g>
            </g>
        </svg>

    )
}