import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { CustomSlickNextArrow } from "_Playground/StyledComponents/CustomSlick/customSlick.styled";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

const CustomNextArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <CustomSlickNextArrow
      style={{ ...style }}
      className={className}
      onClick={onClick}
    >
      <ArrowCircleRightIcon
        sx={{ p: 0, color: "secondary.light", fontSize: "3rem" }}
      />
    </CustomSlickNextArrow>
  );
};

export default CustomNextArrow;
