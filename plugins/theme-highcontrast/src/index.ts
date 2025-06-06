/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview High contrast theme.
 *
 * Darker colours to contrast the white font.
 */

import * as Blockly from 'blockly/core';

const defaultBlockStyles = {
  colour_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#a52714',
    colourSecondary: '#FB9B8C',
    colourTertiary: '#FBE1DD',
  },
  list_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#4a148c',
    colourSecondary: '#AD7BE9',
    colourTertiary: '#CDB6E9',
  },
  logic_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#01579b',
    colourSecondary: '#64C7FF',
    colourTertiary: '#C5EAFF',
  },
  loop_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#33691e',
    colourSecondary: '#9AFF78',
    colourTertiary: '#E1FFD7',
  },
  math_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#1a237e',
    colourSecondary: '#8A9EFF',
    colourTertiary: '#DCE2FF',
  },
  procedure_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#006064',
    colourSecondary: '#77E6EE',
    colourTertiary: '#CFECEE',
  },
  text_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#004d40',
    colourSecondary: '#5ae27c',
    colourTertiary: '#D2FFDD',
  },
  variable_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#880e4f',
    colourSecondary: '#FF73BE',
    colourTertiary: '#FFD4EB',
  },
  variableDynamic_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#880e4f',
    colourSecondary: '#FF73BE',
    colourTertiary: '#FFD4EB',
  },
  hat_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#880e4f',
    colourSecondary: '#FF73BE',
    colourTertiary: '#FFD4EB',
    hat: 'cap',
  },
};

const categoryStyles = {
  colour_category: {colour: '#a52714'}, // eslint-disable-line camelcase
  list_category: {colour: '#4a148c'}, // eslint-disable-line camelcase
  logic_category: {colour: '#01579b'}, // eslint-disable-line camelcase
  loop_category: {colour: '#33691e'}, // eslint-disable-line camelcase
  math_category: {colour: '#1a237e'}, // eslint-disable-line camelcase
  procedure_category: {colour: '#006064'}, // eslint-disable-line camelcase
  text_category: {colour: '#004d40'}, // eslint-disable-line camelcase
  variable_category: {colour: '#880e4f'}, // eslint-disable-line camelcase
  variable_dynamic_category: {colour: '#880e4f'}, // eslint-disable-line camelcase
};

/**
 * High contrast theme.
 */
export default Blockly.Theme.defineTheme('highcontrast', {
  name: 'highcontrast',
  blockStyles: defaultBlockStyles,
  categoryStyles: categoryStyles,
  componentStyles: {
    selectedGlowColour: '#000000',
    // selectedGlowSize: 1,
    replacementGlowColour: '#000000',
  },
  fontStyle: {
    family: undefined, // Use default font-family.
    weight: undefined, // Use default font-weight.
    size: 16,
  },
  startHats: undefined,
});
