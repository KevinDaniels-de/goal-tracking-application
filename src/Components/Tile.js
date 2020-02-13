import PropTypes from "prop-types";
import styled from "styled-components";

const Tile = styled.div`
    box-shadow: 0px 10px 20px rgba(31, 32, 64, ${props => props.elevation});
    border-radius: 5px 5px 5px 5px;
    padding: 20px;
`;

Tile.propTypes = {
    elevation: PropTypes.string
};

Tile.defaultProps = {
    elevation: "0.05"
};

export default Tile;