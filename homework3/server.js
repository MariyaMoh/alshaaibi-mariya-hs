#!/usr/bin/env node
const http = require('http');
const program = require('commander');
const axios = require('axios');

program
  .version('0.0.1')

  .option(
    '-b, --body [type]',
    'if specified, should sent a random generated body with request'
  )
  .option(
    'url',
    'url which should be used for requests',
    'https://www.google.com/'
  )

  .option(
    '-c, --concurrency <n>',
    'number of parallel requests to perform at a time',
    1
  )

  .option(
    '-n, --requests <n>',
    'number of requests to perform for the benchmarking session',
    2
  );

program.parse(process.argv);
const { concurrency, requests, body, url } = program.opts();

const data = JSON.stringify({
  msg: 'hello from Mariya',
});

const arrOfTime = [];
async function makeRequests() {
  for (let i = 0; i < requests; i++) {
    const start = Date.now();
    try {
      if (body) {
        await axios.post(url, data);
      } else {
        await axios.get(url);
      }
    } catch (err) {
      arrOfTime.push(false);
    }
    const end = Date.now();
    arrOfTime.push(end - start);
  }
}
makeRequests().then(() => {
  failedRequestsIndex = [];
  let sum = 0;
  for (let item of arrOfTime) {
    if (item === false) {
      continue;
    } else {
      sum += item;
    }
  }
  let avg = sum / arrOfTime.length;
  console.log(`bombared ${url}`);
  console.log(`${requests} requests in ${sum} ms`);
  console.log(
    `the successfull requests ${arrOfTime.length - failedRequestsIndex.length}`
  );
  console.log(`${failedRequestsIndex.length} requests failed`);
  for (let i = 0; i < arrOfTime.length; i++) {
    if (arrOfTime[i] === false) {
      console.log(`the failed request ${i}`);
    } else {
      console.log(`the request ${i} took ${arrOfTime[i]} ms`);
    }
  }
  console.log(`the average request time ${avg} ms`);
});
