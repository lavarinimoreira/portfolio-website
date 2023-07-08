import { Button } from "./styles";

interface ClickProps {
  title: string;
  action: string;
}

function Click({ title, action }: ClickProps) {
  return (
    <Button to={action}>
      <div className="a click click-w-button">{title}</div>
      <div className="click-decoration_upper-left-blur"></div>
      <div className="click-decoration_upper-left-deco"></div>
      <div className="click-decoration_bottom-right"></div>
      <div className="click-decoration_bottom-right-blur"></div>
    </Button>
  );
}

export default Click;
