import fetch from 'isomorphic-fetch';

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const METHOD_SEND_MESSAGE = 'sendMessage';

const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/`;

export function sendMessage(text, chatId) {
  let formData = new FormData();
  formData.append('text', text);
  formData.append('chat_id', chatId);
  let req = fetch(url + METHOD_SEND_MESSAGE, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      chat_id: chatId,
      text: text
    })
  });
  console.log(req);
  req.then(res => {
    console.log('result')
    console.log(res);
  }).catch(err => {
    console.log('err')
    console.log(err);
  });
}
