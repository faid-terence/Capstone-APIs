/**
 * GENERATE RANDOM STRING
 */

const randomString = (length) => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };
  /*
 * MOCK DATA FOR TESING THE BLOGS ROUTE
 */

// UNIQUE BLOG
const blogUnique = {
     icon: " fa fa-compare ",
    title: `${randomString(30)}`,
    body: `${randomString(100)}`,

   
  };
  
  // EXISTING BLOG
  const blogRequest = {
    icon: "fa fa-laptop-code",
    title: "Testing Cloudinary",
    body: "AWS is not it, really.. not never taught her not to ever think of himself as the best alien alive.",
  };
  
  // UPDATE BLOG
  const blogUpdate = {
    icon: "fa fa-laptop",
    title: "This is the updated body...",
    body: "Niyontwali John",
  };
  
  // BLOG ID
  const blogId = "64136b3137424b8e0b93aa61";
  
  export {
    blogUnique,
    blogRequest,
    blogId,
    blogUpdate,
  };