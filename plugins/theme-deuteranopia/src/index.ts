/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Deuteranopia theme.
 */

import * as Blockly from 'blockly/core';

const defaultBlockStyles = {
  colour_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#f2a72c',
    colourSecondary: '#f1c172',
    colourTertiary: '#da921c',
  },
  list_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#7d65ab',
    colourSecondary: '#a88be0',
    colourTertiary: '#66518e',
  },
  logic_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#9fd2f1',
    colourSecondary: '#c0e0f4',
    colourTertiary: '#74bae5',
  },
  loop_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#795a07',
    colourSecondary: '#ac8726',
    colourTertiary: '#c4a03f',
  },
  math_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#e6da39',
    colourSecondary: '#f3ec8e',
    colourTertiary: '#f2eeb7',
  },
  procedure_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#590721',
    colourSecondary: '#8c475d',
    colourTertiary: '#885464',
  },
  text_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#058863',
    colourSecondary: '#5ecfaf',
    colourTertiary: '#04684c',
  },
  variable_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#47025a',
    colourSecondary: '#820fa1',
    colourTertiary: '#8e579d',
  },
  variable_dynamic_blocks: { // eslint-disable-line camelcase
    colourPrimary: '#47025a',
    colourSecondary: '#820fa1',
    colourTertiary: '#8e579d',
  },
};

const categoryStyles = {
  colour_category: { // eslint-disable-line camelcase
    colour: '#f2a72c',
  },
  list_category: { // eslint-disable-line camelcase
    colour: '#7d65ab',
  },
  logic_category: { // eslint-disable-line camelcase
    colour: '#9fd2f1',
  },
  loop_category: { // eslint-disable-line camelcase
    colour: '#795a07',
  },
  math_category: { // eslint-disable-line camelcase
    colour: '#e6da39',
  },
  procedure_category: { // eslint-disable-line camelcase
    colour: '#590721',
  },
  text_category: { // eslint-disable-line camelcase
    colour: '#058863',
  },
  variable_category: { // eslint-disable-line camelcase
    colour: '#47025a',
  },
  variable_dynamic_category: { // eslint-disable-line camelcase
    colour: '#47025a',
  },
};

/**
 * Deuteranopia theme.
 * A colour palette for people that have deuteranopia (the inability to perceive
 * green light). This can also be used for people that have protanopia (the
 * inability to perceive red light).
 */
export default Blockly.Theme.defineTheme('deuteranopia', {
  name: 'deuteranopia',
  base: Blockly.Themes.Classic,
  blockStyles: defaultBlockStyles,
  categoryStyles: categoryStyles,
  componentStyles: {},
  fontStyle: {},
  startHats: undefined,
});
