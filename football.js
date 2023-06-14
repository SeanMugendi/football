"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];

window.onload = function() {
  initializeFootballSelect();
};

function initializeFootballSelect() {
  var footballSelect = document.getElementById("footballSelect");

  for (var i = 0; i < teams.length; i++) {
    var option = document.createElement("option");
    option.text = teams[i].name;
    option.value = teams[i].code;
    footballSelect.appendChild(option);
  }
}

var showInfoBtn = document.getElementById("showInfoBtn");
var teamInfo = document.getElementById("teamInfo");

showInfoBtn.addEventListener("click", function() {
  var selectedTeamCode = footballSelect.value;

  if (selectedTeamCode) {
    var selectedTeam = teams.find(function(team) {
      return team.code === selectedTeamCode;
    });

    if (selectedTeam) {
      teamInfo.textContent = "You selected the " + selectedTeam.name + " (" + selectedTeam.code + ") who play in " + selectedTeam.plays;
    }
  }
});
