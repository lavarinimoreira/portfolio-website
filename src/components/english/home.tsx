import Click from "../shared/button";
import { Button, Home, HomeContent, SocialMedia } from "../styles/home";

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

function EnglishHome() {
  return (
    <Home>
      <h1>Home</h1>
      <HomeContent>
        <h2>Gabriel Lavarini</h2>
        <p>{`< front end dev, editor and artist >`}</p>
        <Button>
          <Click title="see more" action="/about" />
        </Button>
        <SocialMedia>
          <a
            className="home-link-git"
            href="https://www.github.com/lavarinimoreira"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="home-link-in"
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="home-link-tt"
            href="https://twitter.com/lavarinimoreira"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </SocialMedia>
      </HomeContent>
    </Home>
  );
}

export default EnglishHome;
