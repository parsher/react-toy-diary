import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Color } from '../mixin/Mixins';

const StyledLink = styled(Link)`
  font-weight: bold;
  ${Color}
`;


StyledLink.defaultProps = {
  color: 'pink'
}

export default StyledLink;