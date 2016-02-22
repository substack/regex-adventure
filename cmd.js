#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('regex-adventure-ua')

var lessons = [
  { title: '1 Лiтерали', file: './problems/literally' }, //done
  { title: '2 Початок строки', file: './problems/anchor_start' }, //done
  { title: '3 Кiнець строки', file: './problems/anchor_end' }, //done
  { title: '4 Пiдмножини', file: './problems/char_class' }, //done
  { title: '5 Заперечення та пiдмножини', file: './problems/negated_char_class' }, //done
  { title: '6 Метасимволи', file: './problems/meta' }, //done
  { title: '7 Квантифiкатори', file: './problems/quantifier' }, //done
  { title: '8 Роздiлення', file: './problems/split' }, //done
  { title: '9 Захват', file: './problems/capture' }, //done
  { title: '10 Захват з пошуком кiнця слова', file: './problems/capture_breakword' }, //done
  { title: '11 Оператор альтернативи (логiчне або)', file: './problems/alteration' }, //done
  { title: '12 Групи квантифiкаторiв', file: './problems/quantified_group' }, //done
  { title: '13 Лапки в регулярних виразах', file: './problems/quotes' }, //done
  { title: '14 Замiна з групами', file: './problems/blink' }
]
lessons.forEach(function (lesson) {
  shop.add(lesson.title, function () { return require(lesson.file) })
})
shop.execute(process.argv.slice(2))
