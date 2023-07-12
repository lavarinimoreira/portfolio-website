import { Contact, ContactContent, IconsLinks } from "../styles/contact";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

function PortugueseContact() {
  return (
    <Contact>
      <h1>Contato</h1>
      <ContactContent>
        <p>
          No momento, estou procurando uma oportunidade de trabalho. Caso você
          seja um desenvolvedor, um recrutador ou talvez apenas alguém que
          queira conversar, sinta-se à vontade para entrar em contato! Pode
          contactar-me a qualquer hora pelo{" "}
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          ou pelo meu email pessoal:{" "}
          <a
            className="mail"
            href="mailto:lavarinimoreira@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            lavarinimoreira@gmail.com
          </a>
        </p>
        <h3>Entre em contato!</h3>
        <IconsLinks>
          <a
            href="mailto:lavarinimoreira@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/"
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

export default PortugueseContact;
