var keepCall =''

function recall (call) {
  if (call ===undefined || null || '' ){
  return 'this is if ' + keepCall +call;
  } else {
 keepCall = keepCall + call;
  return function(){
   return recall;
  }}
}



//greeting

function greeting(name){
return function ()
{
 return console.log('Hello, '+ name);
}}
