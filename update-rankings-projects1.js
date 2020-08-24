let outputSegmentOne = `
<!DOCTYPE html>
<html lang="en">
<head>
	<link 	rel="icon" 
      		type="image/png" 
      		href="https://www.cheo.on.ca/en/images/structure/news_avatar.jpg">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">	
	<title> CHEO-OPOLY!</title>

	<link rel="stylesheet" type="text/css" href="styles.css">
	<style>
	tr:nth-child(even) {background-color: #f2f2f2;}

	table {
 		 border-collapse: collapse;
  			width: 100%;
		}

	th, td {
  		text-align: left;
  		padding: 20px;
		}
	</style>
</head>

<body style="overflow-x: hidden;">

	<div class="container">
		<div class="nav-wrapper">
			<div class="left-side">
				<div class="nav-logo">
					<a href="https://www.cheo.on.ca/en/index.aspx"><img src="images/logo.jpg" alt="CHEO Logo"></a>
				</div>
				<div class="nav-link-wrap">
					<a href="index.html"><p>Home</p></a>
				</div>
				<div class="nav-link-wrap">
					<div class="dropdown">
					<a href="page1.html"><p>Auction</p></a>
					<div class="dropdown-content">
						<a href="page1.html">Projects</a>
						<a href="misc.html">Miscellaneous</a>
  					</div>
					</div>
					
				</div>
				<div class="nav-link-wrap">
					<div class="dropdown">
					<a href="overallranking.html"><p>Leaderboards</p></a>
					<div class="dropdown-content">
						<a href="overallranking.html">Overall</a>
						<a href="projects1.html">Projects</a>
  						<a href="miscboard.html">Misc</a>
  					</div>
					</div>
				</div>
				<div class="nav-link-wrap">
					<a href="rules.html"><p>Rules</p></a>
				</div>
			</div>

			<div class="right-side">
				<div><p style="font-size:1.1vw;">CHEO-OPOLY</p></div>
				<div class="nav-link-bid">
					<a href="page1.html">BID NOW</a>
				</div>
			</div>
		</div>



	<div class="limiter-left">
`
let outputSegmentOpenTable = `
		<div class="container-table100">
			<div class="wrap-table100">
`
let outputSegmentInBetween = `
				<div class="table100 ver1 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Ranking</th>
									<th class="cell100 column2">Company</th>
									<th class="cell100 column3">Contributed</th>
									
								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						
						<table>
							<tbody>
`
let outputSegmentCloseTable = `
                            </tbody>                                                                                                                                                                                                       </table>                                                                                                                                                                                                       </div>                                                                                                                                                                                                         </div>                                                                                                                                                                                                         </div>                                                                                                                                                                                                         </div>
`

let outputSegmentTwo = `
	</div>
	<div class="limiter-right">
`

let outputSegmentThree = `
	</div>
        <div class="cat-nav-wrap">
        <div class="cat-nav">
        <a href="projects2.html" class="next round">&#8250;</a>
        <br><p>1</p>
        </div>
        </div>
		<div class="footer">
			<div class="socials">
				<a href="https://www.facebook.com/CHEOkids/" class="fa fa-facebook" target="_blank"></a>
				<a href="https://www.instagram.com/cheohospital/?hl=en" class="fa fa-instagram" target="_blank"></a>	
				<a href="https://twitter.com/CHEO?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="fa fa-twitter" target="_blank"></a>	
			</div>
		</div>
	</div>
</body>
</html>
`;

var request = require('request-promise');
const leftSheets = [ ['West Block 2019', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpL-uKo4xJTIwUv4N5OZH069fxDBhAYAbEmGyGKs5hoyIuc0svD-FiUr2Yi6JaHQpxlS_ZgTxn7UDu/pub?output=csv' ],
['Valour Roofing', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQpHigj2Wk9Axrhm6UDtlqrE9YpzbtvPogclvppwm50zjlFKHVEtOU1IltFNjGRwKusBPcTh62jESjq/pub?output=csv' ],
['Postal Station B', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPjpWGH2j9W-I-NHtf-oM066XtagZlEJQqGLwYIBLpiHZjwXzIsOGBxRo40dfvPB0Je78O61mNgo8d/pub?output=csv'],
['Library of Parliament IE', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRCgLp9VNbEj7H8e4M23QJjsiA4AKUeOT-IXnYRi_yUfsJsAxWpVi7YPrvw8hVc5TvPqjUWt5P0hI7/pub?output=csv'] ];

const rightSheets = [ ['Food Production', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRE8O1d7kjNU3IRt9kNyk-As2MNptu3Pl43F9fgj3sgderWnz5KvJEgftBHVu7q3Ta44aQH-aUNK9M_/pub?output=csv'],
['100 Wellington', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4uVA7p6_i7rQgqBaaPmbsr1h2kvfDlBDxPIjvlEGfZbPewTHpZA0VwJfmEU66oCWSPMn8Y6cePd0_/pub?output=csv'],
['National Press Building Roofing', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTRXboKqdWTmRQjV--RkPg_gz4TX5_i2e9I_UnlskVbOc-mQEsR2H8_LWDWaBRnUzNjCCU7AkWjazL-/pub?output=csv'],
['Blackburn 5th Floor', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRuEI1T20Eh9BF5SRBxVojL1DSG3M_WPLESTCTWfKtcPKfevTrzSVWPcVHi_aZB_iH1tfL6RNj12Wd1/pub?output=csv'] ];

// Function to parse Google spreadsheet csv into HTML table
async function parseSpreadsheet(url, columnName) {
  // Asynchronous request to retrieve spreadsheet from URL
  let body = await request.get(url);

  // Extracts the needed parts of CSV and parses into array
  let arr = CSVToArray(body)
  let grossSalesIndex = arr[0].indexOf(columnName);
  let rankings = [];

  arr.forEach(function (element, index) {
    if (index > 0) rankings.push([element[0], parseInt(element[grossSalesIndex])]);
  })

  // Sorts the array based on 'Total gross sales'
  rankings.sort(function (el1, el2) {
    return el2[1] - el1[1];
  });

  // Generates the HTML output
  let webOutput = "";
  rankings.forEach(function (element, index) {
    webOutput = webOutput + `<tr class="row100 body">
<td class="cell100 column1">${index+1}</td>
<td class="cell100 column2">${element[0]}</td>
<td class="cell100 column3">$${element[1]}</td>
</tr>
`
  })

  return webOutput;
}

// Parses Google spreadsheet into array
function CSVToArray(strData, strDelimiter){
  strDelimiter = (strDelimiter || ",");

  const objPattern = new RegExp(("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");

  let arrData = [[]];
  let arrMatches = null;
  while (arrMatches = objPattern.exec( strData )){
    let strMatchedDelimiter = arrMatches[1];
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter){
      arrData.push( [] );
    }

    let strMatchedValue;
    if (arrMatches[2]){
      strMatchedValue = arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"");
    } else {
      strMatchedValue = arrMatches[3];
    }

    arrData[arrData.length - 1].push( strMatchedValue );
  }
  return(arrData);
}

async function printOutput() {
  // Asynchronous request to retrieve spreadsheet from URL
  let finalOutput = outputSegmentOne;

  for (var i=0; i<leftSheets.length; ++i) {
    finalOutput += outputSegmentOpenTable;
    let headerOutput = `
            <h1>${leftSheets[i][0]}</h1>
`;
    let tableOutput = await parseSpreadsheet(leftSheets[i][1], 'Total Sales');
    finalOutput += headerOutput + outputSegmentInBetween + tableOutput + outputSegmentCloseTable;
  }

  finalOutput += outputSegmentTwo;

  for (var i=0; i<rightSheets.length; ++i) {
    finalOutput += outputSegmentOpenTable;
    let headerOutput = `
            <h1>${rightSheets[i][0]}</h1>
`;
    let tableOutput = await parseSpreadsheet(rightSheets[i][1], 'Total Sales');
    finalOutput += headerOutput + outputSegmentInBetween + tableOutput + outputSegmentCloseTable;
  }
  
  finalOutput += outputSegmentThree;

  console.log(finalOutput);
}

printOutput();
