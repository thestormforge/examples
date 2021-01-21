definition.setTarget($target);

definition.setArrivalPhases([
    {
        duration: 1 * 60,
        rate: 100,
    },
    {
        duration: 2 * 60,
        rate: 500,
    },
    {
        duration: 2 * 60,
        rate: 1000,
    },
]);

definition.setTestOptions({
    cluster: {
        sizing: "small",
        region: "us-east-1"
    },
});

definition.session("vote", function (session) {

    session.post("/", {
        payload: {
            vote: "a",
        }
    });

});
