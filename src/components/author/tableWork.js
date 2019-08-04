import React from 'react';
import PropTypes from 'prop-types';
import id from 'react-id-generator';

class TableWork extends React.Component {
  render() {
    const { work } = this.props;
    const events = work.map(event => (
      <tr key={id()}>
        <td>{event.title}</td>
        <td>{event.date}</td>
      </tr>
    ));
    const result = (
      <table className="filmography">
        <thead>
          <tr>
            <th>Фильмография</th>
            <th>Дата создания</th>
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </table>
    );
    return result;
  }
}

TableWork.propTypes = {
  work: PropTypes.array,
};

TableWork.defaultProps = {
  work: {},
};

export default TableWork;
