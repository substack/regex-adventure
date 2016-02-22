#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('regex-adventure-ua')

var lessons = [
  { title: 'LITERALS', file: './problems/literally' }, //done
  { title: 'BEGIN STRING', file: './problems/anchor_start' }, //done
  { title: 'END STRING', file: './problems/anchor_end' }, //done
  { title: 'CHARACTER CLASS', file: './problems/char_class' }, //done
  { title: 'NEGATED CHARACTER CLASS', file: './problems/negated_char_class' },
  { title: 'META', file: './problems/meta' },
  { title: 'QUANTIFIER', file: './problems/quantifier' },
  { title: 'SPLIT', file: './problems/split' },
  { title: 'CAPTURE', file: './problems/capture' },
  { title: 'CAPTURE BREAKWORD', file: './problems/capture_breakword' },
  { title: 'ALTERATION', file: './problems/alteration' },
  { title: 'QUANTIFIED GROUP', file: './problems/quantified_group' },
  { title: 'QUOTES', file: './problems/quotes' },
  { title: 'BLINK', file: './problems/blink' }
]
lessons.forEach(function (lesson) {
  shop.add(lesson.title, function () { return require(lesson.file) })
})
shop.execute(process.argv.slice(2))
