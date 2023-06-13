import styled from 'styled-components';
import Link from 'next/link';

export const FooterNavigationList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const FooterNavigationItem = styled.li`
  list-style: none;
  text-align: left;
  margin: 5px;
  padding: 5px;
`;

export const FooterNavigationLink = styled(Link)`
  text-decoration: none;
`;
