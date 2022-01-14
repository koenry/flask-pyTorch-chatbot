document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && (document.activeElement.tagName.toLowerCase() !== 'button')) {
  
  let javascriptData = document.getElementById('textInput').value
   fetch('http://127.0.0.1:5000/postmethod',  {
    method: 'POST',
    body: JSON.stringify(javascriptData),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  )
  fetch('http://127.0.0.1:5000/getpythondata')
    .then(res => res.json())
    .then(data => { 
   
    const para = document.createElement('P');
    const t = document.createTextNode(`You: ${javascriptData}`);
    para.appendChild(t);
    document.getElementById('box').appendChild(para);
        
    const para2 = document.createElement('p');
    const tb = document.createTextNode(data);
    para2.appendChild(tb);
    document.getElementById('box').appendChild(para2);
  });
}  
  })
  