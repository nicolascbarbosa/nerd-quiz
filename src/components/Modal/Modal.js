import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ children }) => createPortal(children, global.document.getElementById('modal'));

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
