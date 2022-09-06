import http from 'k6/http';
import exec from 'k6/execution';

let target = 'http://k8s-default-testapp-d6d43fe263-625234464.us-east-1.elb.amazonaws.com/'

export const options = {
  discardResponseBodies: true,

  scenarios: {
    hello_world: {
      executor: 'ramping-arrival-rate',

      // Our test with at a rate of 60 iterations started per `timeUnit` (e.g minute).
      startRate: 60,

      // It should start `startRate` iterations per minute
      timeUnit: '1m',

      // It should preallocate 2 VUs before starting the test.
      preAllocatedVUs: 2,

      // It is allowed to spin up to 10 maximum VUs in order to sustain the defined
      // constant arrival rate.
      maxVUs: 10,

      stages: [
        // It should start 300 iterations per `timeUnit` for the first 5 minutes.
        { target: 60, duration: '5m' },
      ],
    },
  },
};

export default function () {
  http.get(target);
}
