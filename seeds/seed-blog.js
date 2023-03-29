const { Blog } = require('../models');

const blogData = [
    {
        blog_title: "Node JS",
        blog_content: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."
    },
    {
        blog_title: "JavaScript",
        blog_content: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following hello world example, many connections can be handled concurrently."
    },
    {
        blog_title: "HTML",
        blog_content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    },
    {
        blog_title: "CSS",
        blog_content: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
    },
    {
        blog_title: "Bootstrap",
        blog_content: "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs."
    },
];
const seedBlogData = () => Blog.bulkCreate(blogData);

module.exports = seedBlogData;