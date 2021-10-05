function userInformationHTML(user) {
    return `
    <h2>${user.name} 
        <span class="small-name">
            (@<a href="${user.html_url}" target="_blank">${user.login}</a>)
        </span>
    </h2>
    <div class="gh-content">
        <div class="gh-avatar">
            <a href="${user.html_url}" target="_blank">
            <img src="${user.avatar_url} width="80" height="80" alt="${user.login}"/>
            </a>
        </div>
        <p>Followers: ${user.followers} - Following: ${user.following} <br> Repositories: ${user.public_repos}</p>
    </div>`;
}

function repoInformationHTML(repos) {
    if (repos.length == 0) {
        return `<div class="clearfix repo-list">No repositories available for this user!</div>`;
    }

    let listItemsHTML = repos.map(function(repo) {
        return `<li>
                    <a href="${repo.html_url}" target="blank">${repo.name}</a>
                </li>`
    });
    return `<div class="clearfix repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <ul>
                    ${listItemsHTML.join("\n")}
                </ul>
            </div>`
}


function fetchGitHubInformation(event) {
    $("#gh-user-data").html("");
    $("#gh-repo-data").html("");
    
    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h5>Please enter a GitHub username in the input field above</h5>`);
        return
    }

    $("#gh-user-data").html(`<div id="loader">
    <img src="assets/images/loader.gif" alt="Loading....."/>
    </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function (firstResponse, secondResponse) {
            let userData = firstResponse[0];
            let repoData = secondResponse[0];
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));
        },
        function (errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(`<h4>Sorry, I couldn't find ${username} :(</h4>`);
            } else if (errorResponse.status === 403) {
                let resetTime = new Date(errorResponse.getResponseHeader("X-RateLimit-Reset")*1000);
                $("#gh-user-data").html(`<h4> Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(`<h4>Error: ${errorResponse.responseJSON.message}</h4>`);
            }
        })
}

$(document).ready(fetchGitHubInformation);