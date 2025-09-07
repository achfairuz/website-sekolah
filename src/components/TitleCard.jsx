import limitWords from "../Helpers/TextHelpers";

const TitleCard = ({ title }) => {
  return (
    <h3 className='text-sm md:text-base font-medium text-justify line-clamp-2'>
      {limitWords(title, 8)}
    </h3>
  );
};

export default TitleCard;
