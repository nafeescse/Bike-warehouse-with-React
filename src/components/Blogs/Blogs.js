import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        
            <div className='flex flex-col justify-center items-center m-2'>
            <h2 className='py-3 text-decoration-underline text-danger'>BLOGS</h2>
            <div className='w-5/6 mx-auto py-3 grid grid-cols-1 gap-3 '>
                <Card className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-1: Difference between Javascript and Node.js?</h3>
                <p className='fs-5 text-justify p-3'>Answer: JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.</p></Card>

                <Card  className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-2: When should you use Node.js and when should you use Mongodb?</h3>
                <p className='fs-5 text-justify p-3'>Answer: Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc..</p></Card>

                <Card className="border-0 shadow-lg rounded-lg"> <h3 className='fs-4 text-justify p-3'>Q-3: Difference between SQL and NoSQL?</h3>
                <p className='fs-5 text-justify p-3'>Answer: At the most basic level, the biggest difference between these two technologies is that SQL databases are relational, while NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p></Card>

            
                

            </div>
        </div>
        
    );
};

export default Blogs;