function processLoans(scores) {

    
    let eligible = scores.filter(score => score > 700);

  
    let adjustedScores = scores.map(score => score + 20);

    
    let total = scores.reduce((sum, score) => sum + score, 0);

    
    let hasPerfectScore = scores.some(score => score === 900);

    
    let allAboveMinimum = scores.every(score => score >= 400);

    
    let severeRisk = scores.find(score => score < 500);

    
    let severeRiskIndex = scores.findIndex(score => score < 500);

    console.log("Eligible:", eligible);
    console.log("Adjusted Scores:", adjustedScores);
    console.log("Total Scores:", total);
    console.log("Has Perfect Score:", hasPerfectScore);
    console.log("All Above Minimum:", allAboveMinimum);
    console.log("Severe Risk Score:", severeRisk);
    console.log("Severe Risk Index:", severeRiskIndex);

}

processLoans([650, 800, 500, 720, 410, 900]);
