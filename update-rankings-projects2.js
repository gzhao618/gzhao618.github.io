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
        <div class="cat-nav-wrap">                                                                                                                                                                                           <div class="cat-nav">                                                                                                                                                                                                    <a href="projects2.html" class="next round">&#8250;</a>                                                                                                                                                              <br><p>1</p>                                                                                                                                                                                                     </div>                                                                                                                                                                                                               </div>
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
const leftSheets = [ ['OPMPC 1st & 2nd Refresh', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6vVRGew-qXieeoKkonEM14GJ65SA4le_aL29kNh5y9jMPLIUe0FMX2yrFGjlCGYJdg0t9Lv8NSRFX/pub?output=csv'],
['Valour Parking Garage', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRMu-skVSfNgfmRo0qvXhfT-AxhEqVhJwGkAbZsX4TLm62adwGMVoNjj0RscsyNxOeyAiYiq6c2yMww/pub?output=csv'],
['Confederation Café', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQC_7ghwE7DsQDT5UftBxAkWQstrc0fod6wfanPy-QzvFN-F5mApOPJE50M3M5XaEp3APSZzYiQX3wu/pub?output=csv'],
['Visitor Welcome Centre Complex', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3DFMmfzXJuqXLYZEmbOLK2hZUUzrY19c1h6p-3TySXMFMqjFwD8bWTCx0YkIf7bUhFAR9v8KngrNb/pub?output=csv'] ]; 

const rightSheets = [ ['Hope ID ID Desk', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNvaZM1FKrOiLVGHG2_TQsgTCdZX6szBs_tCB6VfNdBPpnHTOgKDMUBU_iyjqnKzOo2PqfHYlohYn9/pub?output=csv'],
['Valour Flooring', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQr-KDyAPOEozvufdsPmWnM0lmOEpjeOXrrWW_5l4-w7l5ecX7YJpysgNf4xicRPOTQGSrLfLwHywwl/pub?output=csv'],
['Boardroom 405', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBNwXHLe1jYOnoxzspnrp-4KD_-rO_I4w8x4bCzuv3m8bwOTbBrbRcqMp0w-YpNAKZFBNdTyL4fySL/pub?output=csv'],
['Demo and Abatement', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQHVa7Jyq9--igAMfkG0tpwdemqVJ87TsNTOUlrhTv579fTMRBuZNlWxVSoX68qujf7cXi_V3QH8pAG/pub?output=csv'] ]; 

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
