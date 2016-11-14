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




	

