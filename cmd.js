#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('regex-adventure-ua')

var lessons = [
  { title: '1 Літерали', file: './problems/literally' }, //done
  { title: '2 Початок строки', file: './problems/anchor_start' }, //done
  { title: '3 Кінець строки', file: './problems/anchor_end' }, //done
  { title: '4 Підмножини', file: './problems/char_class' }, //done
  { title: '5 Заперечення та підмножини', file: './problems/negated_char_class' }, //done
  { title: '6 Метасимволи', file: './problems/meta' }, //done
  { title: '7 Квантифікатори', file: './problems/quantifier' }, //done
  { title: '8 Розділення', file: './problems/split' }, //done
  { title: '9 Захват', file: './problems/capture' }, //done
  { title: '10 Захват з пошуком кінця слова', file: './problems/capture_breakword' }, //done
  { title: '11 Оператор альтернативи (логічне або)', file: './problems/alteration' }, //done
  { title: '12 Групи квантифікаторiв', file: './problems/quantified_group' }, //done
  { title: '13 Лапки в регулярних виразах', file: './problems/quotes' }, //done
  { title: '14 Заміна з групами', file: './problems/blink' }
]
lessons.forEach(function (lesson) {
  shop.add(lesson.title, function () { return require(lesson.file) })
})
shop.execute(process.argv.slice(2))
