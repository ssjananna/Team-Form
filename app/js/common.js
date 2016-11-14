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
	function(each){
		for (var i=0;i<foundSkills.length;i++){
			if(each!=foundSkills[i]){
				return true;
			}
		}
		return false;
	}
	);
	var missingSkillsMatchedArray = missingSkillsArray.filter(
	function(each2){
		currentSkills.includes(each2);
	}
	);
	(return {match: missingSkillsMatchedArray, number:missingSkillsMatchedArray.length};);
}




	

