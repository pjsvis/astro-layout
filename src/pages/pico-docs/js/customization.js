/*
 * Customization
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2023 - Licensed under MIT
 */

// Imports
import materialDesignColors from './material-design-colors.js';
import colorPicker from './color-picker.js';

// Color Picker
colorPicker.colors = materialDesignColors;
colorPicker.init();