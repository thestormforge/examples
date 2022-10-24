definition.setTarget("testapp-ingress.example.com");

definition.setArrivalPhases([
  {
    duration: 5 * 60,  // 5min in seconds
    rate: 1.0,         // clients per second to launch
  },
]);

definition.setTestOptions({
  // see https://docs.stormforger.com/reference/test-cluster/
  cluster: { sizing: "preflight", },
});

// see https://docs.stormforger.com/reference/sessions/
definition.session("hello world", function(session) {
  session.get("/", { tag: "root" });
});
