import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  InsecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages:[
    { duration: '2m', target:100 },
    { duration: '5m', target:100 },
    { duration: '2m', target:200 },
    { duration: '5m', target:200 },
    { duration: '2m', target:300 },
    { duration: '5m', target:300 },
    { duration: '2m', target:400 },
    { duration: '5m', target:400 },
    { duration: '10m', target:0 },
  ]
};

export default function () {
  const response = http.get('http://weather1-api.sre-course.example/');
  check(response,{
    '200': (r) => r.status === 200
  })
  sleep(1)
}
