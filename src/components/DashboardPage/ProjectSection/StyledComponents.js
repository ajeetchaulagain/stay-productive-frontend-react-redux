import styled from "styled-components";

export const ProjectSectionWrapper = styled.div`
  min-height: 90vh;
  border-radius: 3px;
  background-color: white;
`;

export const ListWrapper = styled.ul`
  padding: 0;
  list-style-type: none;
  a {
    color: inherit;
    display: block;
    :hover {
      background-color: #ebebeb;
    }
  }
  li {
    list-style-type: none;
    border-bottom: 1px solid #dadada;
    padding: 8px 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;
