interface Props {
  fill?: string;
  stroke?: string;
  handleClick?: () => void;
}

const MapIcon = ({ fill = "none", stroke = "#6979F8", handleClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      onClick={handleClick}
    >
      <path
        d="M8.625 16.0476V10.0238M14.8125 13.8571V7.83333M3 17.7143V4L8.47826 6.28571L14.7391 4L21 6.28571V20L14.7391 17.7143L8.47826 20L3 17.7143Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MapIcon;
