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
 * calculate the number of missing skills matched
 *
 * @param preferredSkills preferred skills of a team
 * @param foundSkills skills that the team have already
 * @param currentSkills skills of the signed in user
 * @return missing skills matched and number of missing skills matched
 */
function missingSkillsMatched(preferredSkills, foundSkills, currentSkills){
	var missingSkillsArray = preferredSkills.filter(
	function(preferredSkill){
		return !foundSkills.includes(preferredSkill);
	}
	);
	var missingSkillsMatchedArray = missingSkillsArray.filter(
	function(missingSkill){
		return currentSkills.includes(missingSkill);
	}
	);
	(return {match: missingSkillsMatchedArray, number:missingSkillsMatchedArray.length};);
}


function hasNoTeam(member){
	return member.team === undefined;
}

/**
 * filter members that do not have a team yet
 *
 * @param members array of members
 * @return filtered members
 */
function membersWithNoTeam(members){
	return members.filter(hasNoTeam);
}
