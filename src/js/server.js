const http = require('http');
const port = 7070;
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const cards = [];

function addId(id) {
  return id + 1;
}

class Card {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}

cards.push(new Card(1, 'Поменять краску в принтере'));
cards.push(new Card(2, 'Переустановить Windows'));

const app = new Koa();
app.use(cors());

app.use(koaBody({
  urlencoded: true,
  multipart: true
}));

app.use(async (ctx) => { 
  let method  = ctx.request.querystring;
  let id;
  if (method) {
    const num = Number(method.split('id=')[1]);
    if (num) id = num;
  } else if (ctx.request.method === 'DELETE') {
    method = 'DELETE';
  }

  switch (method) {
    case 'method=allCards':
      ctx.response.body = cards;
      return;
    
    case 'method=createCard':
      let idCard = ctx.request.body.id;
      let idArr = [];
      cards.forEach(a => idArr.push(a.id));
      if (idArr.length !== 0) {
        idCard = Math.max.apply(null, idArr);
      }
      cards.push(new Card(addId(idCard), ctx.request.body.textarea));
      ctx.response.body = cards;
      return;

    case 'DELETE':
      const deleteId = ctx.request.url.substring(7);
      const index = cards.findIndex(a => a.id === Number(deleteId));
      cards.splice(index, 1);
      ctx.response.body = cards;
      return;

    default:
      ctx.response.status = 404;
      return;
    }

});

const server = http.createServer(app.callback()).listen(port);
