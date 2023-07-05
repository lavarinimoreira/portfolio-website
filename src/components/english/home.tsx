import { useNavigate } from "react-router-dom";
import Click from "../shared/button";
import { Button, Home, HomeContent } from "../styles/home";

function EnglishHome() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate("/about");
  };

  return (
    <Home>
      <h1>Home</h1>
      <HomeContent>
        <h2>Gabriel Lavarini</h2>
        <p>web developer, editor and artist</p>
        <Button>
          <Click title="see more" action={handleNavigate} />
        </Button>
      </HomeContent>
    </Home>
  );
}

export default EnglishHome;
