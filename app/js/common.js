function isAvailable(team) {
	return team.currentTeamSize < team.size;
}

/**
 * filter teams that still have places left
 *
 * @param teams array of teams
 * @return filtered teams
 */
function getAvailableTeam(teams) {
	return teams.filter(isAvailable);
}

/**
 * filter members that do not have a team yet
 *
 * @param array of members
 * @return filtered members
 */

function hasNoTeam(member){
	return team===undefined;
}
function membersWithNoTeam(members){
	return members.filter(hasNoTeam);
}