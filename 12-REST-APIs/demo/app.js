(() => {
  $.get('https://api.github.com/user?access_token=' + window.gitToken)
    .then(user => {
      $.get(user.repos_url + '?access_token=' + window.gitToken)
        .then(repos => {
          repos.forEach(repo => {
            $('#repo-list').append(`<li>${repo.name}</li>`);
          })
        }, error => {
          console.log(error);
        });
    }, error => {
      console.log(error);
    });
})();
