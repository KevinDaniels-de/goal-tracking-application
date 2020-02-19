import React, {useState} from "react";
import styled from "styled-components";
import avatarLarge from "../assets/avatar_small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Menu(props) {  

  const handleOpenChange = e => {
    props.onOpenChange(props.open);            
  }

  const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  const StyledLi = styled.li`
    margin-bottom: 10%;
    cursor: pointer;
    width: 100%;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:   ${({ theme, active }) => active ? theme.colors.darkShade[25] : ""}
  `;

  const StyledP = styled.p`
    color: white;
    font-size: 2em;
    display: inline-block;
    padding: 16px;
    cursor: pointer;
    text-align: right;
  `;

  return (
      <StyledNav>
        <StyledP onClick={handleOpenChange}> X </StyledP>
        <ul>
          <StyledLi  active={true}> Dash </StyledLi>
          <StyledLi > Profile </StyledLi>
        </ul>
      </StyledNav>);
}



function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = e => {
    // e.preventDefault();
    setOpen(!open);
  };
  
  const StyledBurgerMenu = styled.div`
    width: 90px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr {
      margin: 4px 0 0 4px;
      width: 20%;
      border: 1px solid ${({ theme }) => theme.colors.darkShade[100]};
    }
  `;

  const StyledUserAvatar = styled.div`
    color: ${({ theme }) => theme.colors.darkShade[50]};
    display: flex;
    align-items: center;
    img {
      margin-top: 8%;
    }
  `;

  const StyledMenuWrapper = styled.div`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 304px;
  background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
  position: absolute;
  padding-top: 10%;
  top: 0;
  left: 0;
`;

  const StyledWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.lightPurple} 0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    height: 50px;
    display: flex;
    justify-content: space-between;
  `;



  return (
    <div>
      <StyledMenuWrapper open={open}>
          <Menu open={open} onOpenChange={handleClick} />
      </StyledMenuWrapper>
     
      <StyledWrapper>
        <StyledBurgerMenu onClick={handleClick}>
          <hr />
          <hr />
          <hr />
        </StyledBurgerMenu>
        <StyledUserAvatar>
          <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faChevronDown} />
          {JSON.stringify(open)}
          <h6> Joe Appleton</h6>
          <img src={avatarLarge} />
        </StyledUserAvatar>
      </StyledWrapper>
    </div>
  );
}

export default Header;
