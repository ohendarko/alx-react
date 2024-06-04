import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell = null }) => {
  const headerStyle = { backgroundColor: '#deb5b545' };
  const rowStyle = { backgroundColor: '#f5f5f5ab' };

  return (
    <tr style={isHeader ? headerStyle : rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.th)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
});

export default CourseListRow;
