import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer: FooterWrapper } = Layout;

const StyledFooter = styled(FooterWrapper)`
  background-color: #1a1a1a;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter theme="dark">
      <p>This is footer</p>
    </StyledFooter>
  );
};

export default Footer;
