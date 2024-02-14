


// note first lettter in constructor function is a capital letter
// creating a new blog post that has yet to be posted 
let post = new Post('a', 'b', 'c');

//note function name starts w/a captial letter
function Post (title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  // a new blog post  
  this. comments = comments = [];
  // isLive is set to false by default
  this.isLive = false;  
}
console.log(post);
