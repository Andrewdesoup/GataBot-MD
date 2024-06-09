let handler = async (m, { conn, usedPrefix, command, text }) => {

/*const messages = [
['Descripción 1', 'Footer 1', 'https://telegra.ph/file/b31cd03f716d362b33716.jpg', [], '', [], []],
['Descripción 2', 'Footer 2', 'https://telegra.ph/file/98c672926fbc35a4b9948.jpg', [], '', [], []],
['Descripción 3', 'Footer 3', 'https://telegra.ph/file/f689a972cfc1c5efff189.jpg', [], '', [], []],
]*/

const messages = [
['Descripción 1', 'Footer 1', 'https://telegra.ph/file/b31cd03f716d362b33716.jpg',
[['Botón A', 'idA'], ['Botón B', 'idB']],
'Texto para copiar 1',  
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[['Lista 1', ['Opción 1', 'Opción 2']], ['Lista 2', ['Opción 3', 'Opción 4']]]
],
[
    'Descripción 2',
    'Footer 2',
    'https://telegra.ph/file/98c672926fbc35a4b9948.jpg',
    [
      ['Botón C', 'idC'], // Botones para la tarjeta 2
      ['Botón D', 'idD']
    ],
    'Texto para copiar 2',  // Texto para copiar para la tarjeta 2
    [
      ['Enlace 3', 'https://example.com/link3'], // URLs para la tarjeta 2
      ['Enlace 4', 'https://example.com/link4']
    ],
    [
      ['Lista 3', ['Opción 5', 'Opción 6']], // Lista para la tarjeta 2
      ['Lista 4', ['Opción 7', 'Opción 8']]
    ]
  ],
  [
    'Descripción 3',
    'Footer 3',
    'https://telegra.ph/file/f689a972cfc1c5efff189.jpg',
    [
      ['Botón E', 'idE'], // Botones para la tarjeta 3
      ['Botón F', 'idF']
    ],
    'Texto para copiar 3',  // Texto para copiar para la tarjeta 3
    [
      ['Enlace 5', 'https://example.com/link5'], // URLs para la tarjeta 3
      ['Enlace 6', 'https://example.com/link6']
    ],
    [
      ['Lista 5', ['Opción 9', 'Opción 10']], // Lista para la tarjeta 3
      ['Lista 6', ['Opción 11', 'Opción 12']]
    ]
  ]
];

await conn.sendCarousel(m.chat, 'Prueba', 'SuperBot', messages, m)

}

handler.command = /^(carousel)$/i
export default handler
