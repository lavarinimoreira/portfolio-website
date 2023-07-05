import { Button } from "./styles";

interface ClickProps {
  title: string;
  action: () => void;
}

function Click({ title, action }: ClickProps) {
  return (
    <Button onClick={() => action()}>
      <a href="" className="click click-w-button">
        {title}
      </a>
      <div className="click-decoration_upper-left-blur"></div>
      <div className="click-decoration_upper-left-deco"></div>
      <div className="click-decoration_bottom-right"></div>
      <div className="click-decoration_bottom-right-blur"></div>
    </Button>
  );
}

export default Click;
