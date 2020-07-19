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

export const ProjectSectionHeaderWrapper = styled.div`
  background-color: #b3b3b3;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 20px;
`;

// For DrawerForm Component
export const InputErrorWrapper = styled.span`
  color: red;
`;
