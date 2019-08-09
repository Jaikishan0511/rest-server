const testRegex = (regex, str) => {
  return new RegExp(regex).test(str);
};

const mailRegex = /^[A-Za-z0-9._-]+@codeastu\.com/g;
console.log(
  "test: avs+132@codeastu.com",
  testRegex(mailRegex, "avs132@codeastu.com")
);

const numRegex = /^[0-9]*$/g;
console.log("test 23432:", testRegex(numRegex, "3242"));

const pattRegex = /^(forum|blog)\.[\w-_]{1,255}\.com$/g;
console.log("test forum.123.com:", testRegex(pattRegex, "forum.123.com"));
console.log("test blog.123.com:", testRegex(pattRegex, "blog.123.com"));

const wordRegex = /^\w+(?:\s+(\w|\.|@)+)+/g;
console.log("test abc fs :", testRegex(wordRegex, "abc fs"));

const curRegex = /^(\$|₹)\s[\d]+(?:\.{1}\d+){0,1}$/g;
console.log("test $ 23.2 :", testRegex(curRegex, "$ 23.2"));
console.log("test ₹ 23 :", testRegex(curRegex, "₹ 223"));
