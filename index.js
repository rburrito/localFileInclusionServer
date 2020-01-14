const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');

app.get('/search', (req, res, next) => {
    const { q, file, mode } = req.query;
    if(mode === 'read'){
	console.log('read');
	console.log(file);
        if(file.indexOf('./') === -1){
		console.log('readfile');
            file_contents = fs.readFileSync(path.join(__dirname, 'searchable', req.query.file));
console.log(file_contents);
if(file_contents.indexOf(q)){
		console.log('sending file');
		searchPath=path.join(__dirname,'searchable',req.query.file);
		console.log(searchPath);
                res.sendFile(searchPath);
            }
        } else {
	console.log('hack')
            res.send('<h1>Trying to hack me?</h1>')
        }

    } else if(mode === 'write'){
	console.log('write');
        fs.writeFile(path.join(__dirname, 'searchable', req.query.file), req.query.q, () => {
            res.send('Query in progress!');
        });
    } 
 else if(mode==='execute') {
console.log('execute');
  const myFile=require('./searchable/'+file);
result=myFile();
res.send('File run '+result);

}else {
	console.log('file mode')
        res.status(400).send('File mode must be set!');
    }
});

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/water',(req,res)=>{
 res.sendFile(path.join(__dirname,'penguinpage.html'));
});

app.get('/secretpath', (req,res)=>{
res.sendFile(path.join(__dirname,'secret.html'));
});

app.get('/robots.txt',(req,res)=>{
res.sendFile(path.join(__dirname, 'robots.txt'));
});


app.use(express.static(path.join(__dirname, '/public')));


app.listen(12000, () =>{
    console.log('Chilling on port 12000');
});


