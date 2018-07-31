import React from 'react';
import {string, array, oneOfType, bool} from 'prop-types';


export const propTypes = {
  data: oneOfType([string, array]).isRequired,
  headers: array,
  target: string,
  separator: string,
  quoteCharacter: string,
  filename: string,
  uFEFF: bool
};

export const defaultProps = {
  separator: ',',
  quoteCharacter: "\"",
  filename: 'generatedBy_react-csv.csv',
  uFEFF: true
};

export const PropsNotForwarded = [
  `data`,
  `headers`
];

// export const DownloadPropTypes = Object.assign(
//   {},
//   PropTypes,
//   {
//     : ,
//   }
// );
