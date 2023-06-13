import {
  WorkTimeContainer,
  WorkTimeTitle,
  WorkTimeText,
} from './WorkTime.styles';

export default function WorkTime() {
  return (
    <WorkTimeContainer>
      <WorkTimeTitle>Графік роботи:</WorkTimeTitle>
      <WorkTimeText>Пн-Пт: 9:00 - 18:00</WorkTimeText>
      <WorkTimeText>Сб: 9:00 - 15:00</WorkTimeText>
    </WorkTimeContainer>
  );
}
