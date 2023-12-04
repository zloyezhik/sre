import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  InsecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages:[
    { duration: '10s', target:100 },
    { duration: '1m', target:100 },
    { duration: '10s', target:1400 },
    { duration: '3m', target:1400 },
    { duration: '10s', target:100 },
    { duration: '3m', target:100 },
    { duration: '10s', target:0 },
  ]
};

export default function () {
  const response = http.get('http://mip.dev.skdf');
  check(response,{
    '200': (r) => r.status === 200
  })
  sleep(1)
}
