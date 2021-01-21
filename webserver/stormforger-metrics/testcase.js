definition.setTarget($target);

definition.setArrivalPhases([
    {
        duration: 3 * 60,
        rate: 500,
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
