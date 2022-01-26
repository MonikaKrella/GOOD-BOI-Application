import ContestDetailsContentStyled from './ContestDetailsContentStyled';
import ContestDetailsLine from './ContestDetailsLine';
import PropTypes from 'prop-types';
import {
  getDataFormatDdMmhYyy,
  getDataFormatDdMonthYyy,
  getHourMinutesFormat,
} from '../../Tools/TimeFunctions';

// eslint-disable-next-line react/prop-types
const ContestDetailsContent = ({ contestInfo }) => {
  const { date } = contestInfo;
  console.log(date);
  /*DATE AND HOUR*/
  let dateAndHour;
  date &&
    (dateAndHour = [
      `${getDataFormatDdMonthYyy(date)}`,
      `${getHourMinutesFormat(date)}`,
    ]);

  console.log(dateAndHour);
  /*APPLICATION INFO*/
  const { applicationOpenDate, applicationClosedDate, applicationFeeInPLN } =
    contestInfo;
  const applicationOpenDateText = `${getDataFormatDdMmhYyy(
    applicationOpenDate,
  )}`;
  const applicationClosedDateText = `${getDataFormatDdMmhYyy(
    applicationClosedDate,
  )}`;
  const applicationFeeInPLNText = `${applicationFeeInPLN.toFixed(2)} PLN`;

  return (
    <ContestDetailsContentStyled>
      {/*DATE AND HOUR*/}
      date && (<ContestDetailsLine textArray={dateAndHour} />){/*PLACE*/}
      <ContestDetailsLine textArray={['UL. GRUNWALDZKA 402', 'GDAŃSK']} />
      <ContestDetailsLine textArray={['OLIVIA BUSINESS CENTER']} />
      {/*JUDGES*/}
      <ContestDetailsLine textArray={['SKŁAD SĘDZIOWSKI:']} />
      <ContestDetailsLine textArray={['skład nieznany']} judge={true} />
      <ContestDetailsLine textArray={['NATASZA URBAŃSKA']} judge={true} />
      <ContestDetailsLine textArray={['MICHAŁ MILOWICZ']} judge={true} />
      {/*APPLICATION INFO*/}
      <ContestDetailsLine
        textArray={['OTWARCIE ZGŁOSZEŃ', applicationOpenDateText]}
        highlight={true}
      />
      <ContestDetailsLine
        textArray={['ZGŁOSZENIA DO', applicationClosedDateText]}
        highlight={true}
      />
      <ContestDetailsLine
        textArray={['OPŁATA WPISOWA', applicationFeeInPLNText]}
        highlight={true}
      />
    </ContestDetailsContentStyled>
  );
};
ContestDetailsContent.propTypes = {
  contestInfo: PropTypes.object,
};

export default ContestDetailsContent;
