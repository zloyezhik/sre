import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  InsecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages:[
    { duration: '2m', target:1400 },
    { duration: '5h30m', target:20000 },
    { duration: '2m', target:0 }
  ]
};

export default function () {
  const response = http.get('http://weather1-api.sre-course.example');
  check(response,{
    '200': (r) => r.status === 200
  })
  sleep(1)
}