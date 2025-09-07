import formatDate from "../Helpers/FormatDate";

const DateText = ({ title, date }) => {
  return (
    <p className='text-xs md:text-sm text-gray-500 mb-1'>
      {title} | {formatDate(date)}
    </p>
  );
};

export default DateText;
