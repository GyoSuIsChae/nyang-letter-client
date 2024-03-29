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
interface ButtonProps {
  confirm?: boolean;
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

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ confirm, theme }) =>
    confirm ? theme.colors.black001 : theme.colors.white_grey001};
  color: ${({ confirm, theme }) =>
    confirm ? theme.colors.white_grey001 : theme.colors.black001};
  padding-block: 12px;
  width: 100%;
  border-radius: 6px;
`;

const ButtonText = styled(TX.Body1)<ButtonProps>`
  color: ${({ confirm, theme }) =>
    confirm ? theme.colors.white_grey001 : theme.colors.black001};
`;

const SubtitleText = styled(TX.SubHead1)`
  font-size: 0.9rem;
`;

const SelectedText = styled(TX.Body1)`
  text-align: center;
  color: #767676;
`;

const CalenderInput = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.white_grey001};
  border-radius: 11px;
  padding-block: 13px;
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
  border: 1px solid ${({ theme }) => theme.colors.grey001};
  border-radius: 0.4rem;
`;

const StyledDatePickerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  margin-inline: 16px;

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
      <SelectedText>{format(value, 'yyyy.MM.dd')}</SelectedText>
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
        <ButtonText>취소</ButtonText>
      </StyledButton>
      <StyledButton type="button" confirm onClick={confirmButton}>
        <ButtonText confirm>확인</ButtonText>
      </StyledButton>
    </CalendarFooter>
  </>
);

const CommonDatePicker = ({
  currentDate,
  setCurrentDate,
}: {
  currentDate: Date | string;
  setCurrentDate: (date: Date | string) => void;
}) => {
  const initialDate = new Date();
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCalendarOpen((prev) => !prev);
  };

  const onClickToCancel = () => {
    setIsCalendarOpen(false);
    setCurrentDate(initialDate);
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
        value={new Date(currentDate)}
        onClick={handleClick}
        isOpen={isCalendarOpen}
      />

      {isCalendarOpen && (
        <StyledDatePickerContainer>
          <DatePicker
            className="customDatePickerWidth"
            dateFormat="yyyy.MM.dd"
            locale="ko"
            selected={new Date(currentDate)}
            disabledKeyboardNavigation
            onChange={(date: Date) => setCurrentDate(date)}
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
