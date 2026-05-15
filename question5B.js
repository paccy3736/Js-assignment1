function generateYearlyReport(startYear, endYear) {

    for (let year = startYear; year <= endYear; year++) {

    
        if (
            (year % 4 === 0 && year % 100 !== 0) ||
            (year % 400 === 0)
        ) {

            console.log(
                "Year " + year + " is a special audit year."
            );

        }

    
        if (year % 10 === 0) {

            console.log(year + " - Decade Anniversary");

        }

        
        else if (year % 5 === 0) {

            console.log(year + " - 5 Year Anniversary");

        }

    }

}



generateYearlyReport(2000, 2025);