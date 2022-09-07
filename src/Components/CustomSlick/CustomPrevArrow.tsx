import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { CustomSlickPrevArrow } from "_Playground/StyledComponents/CustomSlick/customSlick.styled";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

const CustomPrevArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <CustomSlickPrevArrow
      style={{ ...style }}
      className={className}
      onClick={onClick}
    >
      <ArrowCircleLeftIcon
        sx={{ p: 0, color: "secondary.light", fontSize: "3rem" }}
      />
    </CustomSlickPrevArrow>
  );
};

export default CustomPrevArrow;
