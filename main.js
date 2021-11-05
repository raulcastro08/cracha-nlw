function showMeShomthing() {
  alert(links.instagram);
}
const LinksSocialMedia = {
  github: "raulcastro08",
  youtube: "UCTECbebwtaXbM9SbOupJeEQ",
  facebook: "raul08",
  instagram: "raulcs08",
  twitter: "Raull08",
};

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMedia();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.login;
      userImg.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}
getGitHubProfileInfos();
