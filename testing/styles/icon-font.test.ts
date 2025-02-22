import { loadSync } from 'opentype.js';
import { readdirSync } from 'fs';
import { join } from 'path';

const BASE_PATH = join(__dirname, '..', '..');

describe('Equals svg to font', () => {
  const getCountElementInFont = (pathToFont: string): number => {
    // NOTE: Different SVG parsers produce different headers.
    // For opentype.js: first five glyphs are empty
    const countEmptySvg = 5;

    // eslint-disable-next-line spellcheck/spell-checker, @typescript-eslint/no-unsafe-member-access
    return loadSync(pathToFont).glyphs.length - countEmptySvg;
  };

  const getCountElementInSvg = (pathToSvg: string): number => {
    const files = readdirSync(pathToSvg);
    return files.length;
  };

  test('generic themes', () => {
    const countElementGenericFont = getCountElementInFont(`${BASE_PATH}/icons/dxicons.ttf`);
    const countElementGenericSvg = getCountElementInSvg(`${BASE_PATH}/images/icons/generic`);

    expect(countElementGenericFont).toBe(countElementGenericSvg);
  });

  test('material themes', () => {
    const countElementMaterialFont = getCountElementInFont(`${BASE_PATH}/icons/dxiconsmaterial.ttf`);
    const countElementMaterialSvg = getCountElementInSvg(`${BASE_PATH}/images/icons/material`);

    expect(countElementMaterialFont).toBe(countElementMaterialSvg);
  });
});
