const url = 'ws://127.0.0.1:3000/ws';
const connection = new WebSocket(url);
connection.onopen = () => {
    connection.send('hey')
  }