module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

fetch('http://localhost:3000/questions')
  .then((response) => response.json())
  .then((data) => console.log(data));

  const data = { questions: 'example' };

fetch('http://localhost:3000/questions', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  
  formData.append('username', 'abc123');
  formData.append('avatar', fileField.files[0]);
  
  fetch('const formData = new FormData'()
  const  FileField = document.querySelector('input[type="file"]');
  
  formData.append('username', 'abc123');
  formData.append('avatar', fileField.files[0]);
  
  fetch('http://localhost:3000/questions', {
    method: 'PUT',
    body: formData
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });', {
    method: 'PUT',
    body: formData
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    async function* makeTextFileLineIterator(fileURL) {
      const utf8Decoder = new TextDecoder('utf-8');
      const response = await fetch(fileURL);
      const reader = response.body.getReader();
      let { value: chunk, done: readerDone } = await reader.read();
      chunk = chunk ? utf8Decoder.decode(chunk) : '';
    
      const re = /\n|\r|\r\n/gm;
      let startIndex = 0;
      let result;
    
      while (true) {
        let result = re.exec(chunk);
        if (!result) {
          if (readerDone) break;
          let remainder = chunk.substr(startIndex);
          ({ value: chunk, done: readerDone } = await reader.read());
          chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
          startIndex = re.lastIndex = 0;
          continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
      }
    
      if (startIndex < chunk.length) {
        // Last line didn't end in a newline char
        yield chunk.substr(startIndex);
      }
    }
    
    async function run() {
      for await (const line of makeTextFileLineIterator(urlOfFile)) {
        processLine(line);
      }
    }
    
    run();
    const myHeaders = new Headers();

    const myRequest = new Request('flowers.jpg', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });
    
    fetch(myRequest)
      .then((response) => response.blob())
      .then((myBlob) => {
        myImage.src = URL.createObjectURL(myBlob);
      });
      const content = 'Hello World';
const MyHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // null

