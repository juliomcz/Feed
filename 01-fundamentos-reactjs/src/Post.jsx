// props: {author: "", content: ""} 
export function Post(props){
    console.log(props);
  return( 
  <div><strong>{props.author}</strong> 
  <p>{props.content}</p></div>)
}












/* 
Default Exports vs Named Exports
Default Exports = function e no final um export default Post.
Named Exports = já declara na função o export : export function <nome> (){}

default exports
function Post(){     return <p>Post</p>
}

export default Post11

-----------------------

named exports 

export funcion Button(){  <p>Button<p>
}

melhor para não esquecer mudanças no codigo.

*/
