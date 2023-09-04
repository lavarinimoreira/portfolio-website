import { Contact, ContactContent, IconsLinks } from "../styles/contact";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

function EnglishContact() {
  return (
    <Contact>
      <h1>Contact</h1>
      <ContactContent>
        <p>
          I'm currently looking for a job opportunity, in case you're a dev, a
          recruiter, or maybe just someone who wants to talk, fell free to reach
          out - I would love to chat! You can reach me any hour through{" "}
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-8270b228a/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          or via my personal email:{" "}
          <a
            className="mail"
            href="mailto:lavarinimoreira@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            lavarinimoreira@gmail.com
          </a>
        </p>
        <h3>Get in touch!</h3>
        <IconsLinks>
          <a
            href="mailto:lavarinimoreira@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-8270b228a/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.github.com/lavarinimoreira"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/lavarinimoreira"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/gabriel_lavarini/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
        </IconsLinks>
      </ContactContent>
    </Contact>
  );
}

export default EnglishContact;
