import React, { PropsWithChildren, useCallback, useState } from 'react';
import DatePicker, {
  CalendarContainerProps,
  registerLocale,
} from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';

import arrowDoubleUpIco from '@assets/images/arrow-double-up.png';
import arrowUpIco from '@assets/images/arrow-up-outline.png';
import calendarIco from '@assets/images/calendar-outline.png';
import { TX } from '@components/Text';
import { COLORS } from '@constants/theme';
import './styles.css';

registerLocale('ko', ko);

interface CalenderProps {
  data: {
    date: Date;
    decreaseYear(): void;
    decreaseMonth(): void;
    increaseYear(): void;
    increaseMonth(): void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
  };
}

const CalendarFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
`;

const StyledButton = styled.button<{
  confirm?: boolean;
}>`
  background-color: ${({ confirm }) =>
    confirm ? COLORS.black001 : COLORS.white_grey001};
  color: ${({ confirm }) => (confirm ? COLORS.white_grey001 : COLORS.black001)};
  padding-block: 12px;
  width: 100%;
  border-radius: 6px;
`;

const SubtitleText = styled(TX.SubTitle1)`
  font-size: 0.9rem;
`;

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
})<{
  isOpen?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
}>`
  width: 0.8rem;
  height: 0.8rem;
  ${({ isOpen }) => (!isOpen ? 'transform: rotate(180deg);' : '')}
  ${({ isRight }) => (isRight ? 'transform: rotate(90deg);' : '')}
  ${({ isLeft }) => (isLeft ? 'transform: rotate(-90deg);' : '')}
`;

const ArrowDoubleUpIcon = styled.img.attrs({
  src: arrowDoubleUpIco,
  alt: 'arrow-double-up',
})<{
  isRight?: boolean;
  isLeft?: boolean;
}>`
  width: 0.8rem;
  height: 0.8rem;
  ${({ isRight }) => (isRight ? 'transform: rotate(90deg);' : '')}
  ${({ isLeft }) => (isLeft ? 'transform: rotate(-90deg);' : '')}
`;

const StyledArrowButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const StyledArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.35rem;
  border: 1px solid ${COLORS.grey001};
  border-radius: 0.4rem;
`;

const StyledDatePickerContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 6px;
  margin-block: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

const StyledDatePickerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 4px;
  padding-bottom: 8px;
`;

const CustomInput = ({
  value,
  onClick,
  isOpen,
}: {
  value: Date;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
}) => (
  <CalenderInput onClick={onClick}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CalendarIcon style={{ marginRight: 8 }} />
      <BodyText>{format(value, 'yyyy.MM.dd')}</BodyText>
    </div>
    <ArrowUpIcon isOpen={isOpen} style={{ marginLeft: 8 }} />
  </CalenderInput>
);

const CustomHeader = ({ data }: CalenderProps) => {
  const formatDate = (d: Date): string => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
  };
  return (
    <StyledDatePickerHeader>
      <StyledArrowButtonContainer>
        <StyledArrowButton onClick={data.decreaseYear}>
          <ArrowDoubleUpIcon isLeft />
        </StyledArrowButton>
        <StyledArrowButton onClick={data.decreaseMonth}>
          <ArrowUpIcon isLeft />
        </StyledArrowButton>
      </StyledArrowButtonContainer>
      <SubtitleText>{formatDate(data.date)}</SubtitleText>
      <StyledArrowButtonContainer>
        <StyledArrowButton onClick={data.increaseMonth}>
          <ArrowUpIcon isRight />
        </StyledArrowButton>
        <StyledArrowButton onClick={data.increaseYear}>
          <ArrowDoubleUpIcon isRight />
        </StyledArrowButton>
      </StyledArrowButtonContainer>
    </StyledDatePickerHeader>
  );
};

const CustomCalendar = ({
  children = null,
  cancelButton,
  confirmButton,
}: PropsWithChildren<{
  cancelButton: () => void;
  confirmButton: () => void;
}>) => (
  <>
    {children}
    <CalendarFooter>
      <StyledButton type="button" onClick={cancelButton}>
        취소
      </StyledButton>
      <StyledButton type="button" confirm onClick={confirmButton}>
        확인
      </StyledButton>
    </CalendarFooter>
  </>
);

const CommonDatePicker = () => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState<Date>(initialDate);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCalendarOpen((prev) => !prev);
  };

  const onClickToCancel = () => {
    setIsCalendarOpen(false);
    setStartDate(initialDate);
  };
  const onClickToConfirm = () => {
    setIsCalendarOpen(false);
  };

  const renderCalendarContainer = useCallback(
    (props: CalendarContainerProps) => (
      <CustomCalendar
        {...props}
        cancelButton={() => onClickToCancel()}
        confirmButton={() => onClickToConfirm()}
      />
    ),
    [],
  );

  return (
    <>
      <CustomInput
        value={startDate}
        onClick={handleClick}
        isOpen={isCalendarOpen}
      />

      {isCalendarOpen && (
        <StyledDatePickerContainer>
          <DatePicker
            className="customDatePickerWidth"
            dateFormat="yyyy.MM.dd"
            locale="ko"
            selected={startDate}
            disabledKeyboardNavigation
            onChange={(date: Date) => setStartDate(date)}
            calendarContainer={renderCalendarContainer}
            renderCustomHeader={(data) => <CustomHeader data={data} />}
            inline
            minDate={initialDate}
          />
        </StyledDatePickerContainer>
      )}
    </>
  );
};

export default CommonDatePicker;
