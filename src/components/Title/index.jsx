import { Title } from "./styles";
import PropTypes from 'prop-types';

function Titles({children}) {
    return(
        <Title>{children}</Title>
    )
}

Titles.propTypes = {
    children: PropTypes.node,
}

export default Titles;