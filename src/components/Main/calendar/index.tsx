import React, { useEffect, useState } from "react";
import * as S from "./styles";
import moment from "moment";
import useDate from "../../../utils/hooks/date/useDate";

const Calendar = () => {

    const {state, setState} = useDate();

    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;

    useEffect(() => {
        console.log(state.tdDay);
    } , [])

    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendarArr=()=>{
        let result: any[] = [];
        let week = firstWeek;

        const changeDate = (date: string) => {
            setState.setDay(Number(date));
        }
        
        for ( week; week <= lastWeek; week++) {
          result = result.concat(
            <S.CalTr key={week}>
                {
                    // eslint-disable-next-line no-loop-func
                    Array(7).fill(0).map((data, index) => {
                        let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                        if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                            return(
                                <S.Today key={index}  >
                                    <span onClick={() => {
                                        changeDate(days.format('MMDD'))
                                    }} style={{color: '#6C00FF', textDecoration: 'underline'}}>{days.format('D')}</span>
                                </S.Today>
                            );
                        }else if(days.format('MM') !== today.format('MM')){
                            return(
                                <S.NotCurMonth key={index} style={{color: '#aeaeae'}} >
                                    <span onClick={() => {
                                        changeDate(days.format('MMDD'))
                                    }}>{days.format('D')}</span>
                                </S.NotCurMonth>
                            );
                        }else{
                            return(
                                <S.CurMonth key={index}>
                                    <span onClick={() => {
                                        changeDate(days.format('MMDD'))
                                    }}>{days.format('D')}</span>
                                </S.CurMonth>
                            );
                        }
                    })
                }
            </S.CalTr>

            
            );
        }
        return result;
      }
  
    return(
            <S.Wrapper>
                <S.Top>
                    <button className="previous" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >{"<"}</button>
                    <span className="yearMonth">{today.format('YYYY 년 MM 월')}</span>
                    <button className="next" onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >{">"}</button>
                </S.Top>
                <S.Table>
                    <S.TBody>
                        <tr>
                            <td>
                                <span style={{color: "#FF4545"}}>Sun</span>
                            </td>
                            <td>
                                <span>Mon</span>
                            </td>
                            <td>
                                <span>Tue</span>
                            </td>
                            <td>
                                <span>Wed</span>
                            </td>
                            <td>
                                <span>Thu</span>
                            </td>
                            <td>
                                <span>Fri</span>
                            </td>
                            <td>
                                <span style={{color: "#1DA0FF"}}>Sat</span>
                            </td>
                        </tr>
                        {calendarArr()}
                    </S.TBody>
                </S.Table>
                <S.Bottom>
                    <p>보관함 확인하기 {">"}</p>
                </S.Bottom>
            </S.Wrapper>
  );
}

export default Calendar;