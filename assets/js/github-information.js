function fetchGitHubInformation(event) {
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h3>Please enter a GitHub username</h3>`);
        return;
    }

    $("#gh-user-data").html(`<div id="loader"><img src="assets/css/loader.gif" alt="loading..."/></div>`);
}