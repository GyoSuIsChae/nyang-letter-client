// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types  */
/* eslint-disable react/display-name  */
/* eslint-disable @typescript-eslint/no-unsafe-call  */
import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';

import arrowUpIco from '@assets/images/arrow-up-outline.png';
import calendarIco from '@assets/images/calendar-outline.png';
import { TX } from '@components/Text';

registerLocale('ko', ko);

interface CalenderProps {
  data: {
    date: Date;
    decreaseMonth(): void;
    increaseMonth(): void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
  };
}

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &.react-datepicker__month-container {
    width: 100%;
  }
`;
const CustomCalendar = ({ children }) => {
  console.log('CustomCalendar', children);
  return (
    <CalendarContainer className="react-datepicker__month-container">
      {children}
    </CalendarContainer>
  );
};

const SubtitleText = styled(TX.SubTitle1)``;

const BodyText = styled(TX.Body1)`
  text-align: center;
`;

const CalenderInput = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  border-radius: 8px;
  padding-block: 6px;
  padding-inline: 12px;
`;
const CalendarIcon = styled.img.attrs({
  src: calendarIco,
  alt: 'calendar',
})`
  width: 1.2rem;
  height: 1.2rem;
`;
const ArrowUpIcon = styled.img.attrs({
  src: arrowUpIco,
  alt: 'arrow-up',
})`
  width: 1.2rem;
  height: 1.2rem;
  ${({ isOpen }) => (!isOpen ? 'transform: rotate(180deg);' : '')}
  ${({ isRight }) => (isRight ? 'transform: rotate(90deg);' : '')}
  ${({ isLeft }) => (isLeft ? 'transform: rotate(-90deg);' : '')}
`;

const CustomHeader = ({ data }: CalenderProps) => {
  console.log('CustomHeader', data);
  const formatDate = (d: Date): string => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
  };
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: 16,
        paddingBlock: 8,
      }}
    >
      <button
        onClick={() => {
          data.decreaseYear();
        }}
      >
        <ArrowUpIcon isLeft />
      </button>
      <button
        onClick={() => {
          data.decreaseMonth();
        }}
      >
        <ArrowUpIcon isLeft />
      </button>
      <SubtitleText>{formatDate(data.date)}</SubtitleText>
      <button
        onClick={() => {
          data.increaseMonth();
        }}
      >
        <ArrowUpIcon isRight />
      </button>
      <button
        onClick={() => {
          data.increaseYear();
        }}
      >
        <ArrowUpIcon isRight />
      </button>
    </div>
  );
};

const CustomInput = ({ value, onClick, isOpen }) => {
  return (
    <CalenderInput onClick={onClick}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CalendarIcon style={{ marginRight: 8 }} />
        <BodyText>{format(value, 'yyyy.MM.dd')}</BodyText>
      </div>
      <ArrowUpIcon isOpen={isOpen} style={{ marginLeft: 8 }} />
    </CalenderInput>
  );
};
const CommonDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsCalendarOpen((prev) => !prev);
  };
  return (
    <>
      <CustomInput
        value={startDate}
        onClick={handleClick}
        isOpen={isCalendarOpen}
      />
      {isCalendarOpen && (
        <DatePicker
          dateFormat="yyyy.MM.dd"
          locale="ko"
          selected={startDate}
          disabledKeyboardNavigation
          onChange={(date: Date) => setStartDate(date)}
          calendarContainer={CustomCalendar}
          renderCustomHeader={(data) => <CustomHeader data={data} />}
          inline
        />
      )}
    </>
  );
};

export default CommonDatePicker;
