interface Props {
  stroke?: string;
  size?: string;
  onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const CancelIcon = ({ stroke = "#1A1A1A", size = "22", onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M15.1666 7.33331L7.83331 14.6666M15.1666 14.6666L7.83331 7.33331"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CancelIcon;
