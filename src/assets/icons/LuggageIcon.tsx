interface Props {
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
}

const LuggageIcon = ({
  fill = "none",
  stroke = "#1a1a1a",
  width = "18",
  height = "18",
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill={fill}
    >
      <path
        d="M5.88281 14.4615V6.56923M11.6719 14.4615V6.56923M6.32812 6.13077V4.37692C6.32812 3.89261 6.72687 3.5 7.21875 3.5H10.3359C10.8278 3.5 11.2266 3.89261 11.2266 4.37692V6.13077M3.65625 14.9H14.3438C15.3275 14.9 16.125 14.1148 16.125 13.1462V7.88462C16.125 6.91599 15.3275 6.13077 14.3438 6.13077H3.65625C2.67249 6.13077 1.875 6.91599 1.875 7.88462V13.1462C1.875 14.1148 2.67249 14.9 3.65625 14.9Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LuggageIcon;
