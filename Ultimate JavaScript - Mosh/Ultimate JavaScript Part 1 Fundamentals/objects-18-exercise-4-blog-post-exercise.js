
//Create and intialize blog post using object literal syntax
// title
// body
// author
// views
// comments
// {author, body}
// isLive
let post = {  
  title: 'blog title',
  body: 'Loreum Ipsum',
  author: 'Astra Rai',
  views: 2.4,
  comments: [
      {
      author: 'customer 1',
      body: 'more loreum ipsum'
    
      },
    
      {
      author:'customer2',
      body: 'more more loreum ipsum'      
    }
  ],
 
isLive: true, 
   
};
console.log(post);
console.log(typeof(post.isLive));
