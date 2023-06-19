/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const { documentValid } = require('../path');
// eslint-disable-next-line import/order
const axios = require('axios');
const { validateA } = require('../validate');

describe('documentValid', () => {
  test('is a function', () => {
    // eslint-disable-next-line semi
    expect(typeof documentValid).toBe('function')
  });
});
test('Convierte una ruta relativa a absoluta', () => {
  const path = 'C:\\Users\\ferna\\OneDrive\\Escritorio\\md-links\\DEV005-md-links-lite\\texto.md';
  const result = documentValid(path);
  expect(result).toBe('C:\\Users\\ferna\\OneDrive\\Escritorio\\md-links\\DEV005-md-links-lite\\texto.md');
});

test('No convierte una ruta absoluta', () => {
  const path = 'C:\\Users\\ferna\\OneDrive\\Escritorio\\md-links\\DEV005-md-links-lite\\texto.md';
  const result = documentValid(path);
  expect(result).toBe(path);
});
/// /////validate

describe('validateA', () => {
  test('debería validar los links y devolver los resultados', async () => {
    const objLinks = [
      {
        href: 'https://example.com',
        text: 'Link 1',
        file: 'file1.md',
      },
      {
        href: 'https://google.com',
        text: 'Link 2',
        file: 'file2.md',
      },
    ];
    // Mock de la función axios.head(obtiene encabezado de resp url)simular respuestas exitosas
    jest.spyOn(axios, 'head').mockImplementation((url) => Promise.resolve({ status: 200 }));
    const result = await validateA(objLinks);
    expect(result).toEqual([
      {
        href: 'https://example.com',
        text: 'Link 1',
        file: 'file1.md',
        status: 200,
        ok: true,
      },
      {
        href: 'https://google.com',
        text: 'Link 2',
        file: 'file2.md',
        status: 200,
        ok: true,
      },
    ]);
    // Restaurar la implementación original de axios.head
    axios.head.mockRestore();
  });
  test('debería marcar como inválidos los links que retornen un error', async () => {
    const objLinks = [
      {
        href: 'https://example.com',
        text: 'Link 1',
        file: 'file1.md',
      },
      {
        href: 'https://google.com',
        text: 'Link 2',
        file: 'file2.md',
      },
    ];
    // Mock de la función axios.head() para simular errores (0)
    jest.spyOn(axios, 'head').mockRejectedValue({ response: { status: 0 } });
    const result = await validateA(objLinks);
    expect(result).toEqual([
      {
        href: 'https://example.com',
        text: 'Link 1',
        file: 'file1.md',
        status: 0,
        ok: false,
      },
      {
        href: 'https://google.com',
        text: 'Link 2',
        file: 'file2.md',
        status: 0,
        ok: false,
      },
    ]);
    // Restaurar la implementación original de axios.head
    axios.head.mockRestore();
  });
});
