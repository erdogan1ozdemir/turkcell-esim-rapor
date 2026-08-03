const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=__dirname,PORT=process.env.PORT||3000;
const T={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript',
'.json':'application/json','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg',
'.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.md':'text/markdown; charset=utf-8'};
function resolve(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';
let fp=path.normalize(path.join(ROOT,p));if(!fp.startsWith(ROOT))return null;
if(fs.existsSync(fp)&&fs.statSync(fp).isDirectory())fp=path.join(fp,'index.html');
else if(!fs.existsSync(fp)&&fs.existsSync(fp+'.html'))fp=fp+'.html';
return fs.existsSync(fp)&&fs.statSync(fp).isFile()?fp:null;}
http.createServer((req,res)=>{const fp=resolve(req.url==='/'?'/index.html':req.url);
if(!fp){res.writeHead(404);res.end('404');return;}
res.writeHead(200,{'Content-Type':T[path.extname(fp)]||'application/octet-stream'});
fs.createReadStream(fp).pipe(res);}).listen(PORT);
