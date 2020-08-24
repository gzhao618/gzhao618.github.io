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
		<div class="container-table100">
			<div class="wrap-table100">
			<h1>Project Rankings</h1>
				<div class="table100 ver1 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Ranking</th>
									<th class="cell100 column2">Project</th>
									<th class="cell100 column3">Contributed</th>
									
								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						
						<table>
							<tbody>
`

let outputSegmentTwo = `
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	<div class="limiter-right">
		<div class="container-table100">
			<div class="wrap-table100">
			<h1>Highest Bidder</h1>
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
<tr class="row100 body">
<td class="cell100 column1">1</td>
<td class="cell100 column2">CompanyABC</td>
<td class="cell100 column3">$5000</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">2</td>
<td class="cell100 column2">CompanyDEF</td>
<td class="cell100 column3">$4000</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">3</td>
<td class="cell100 column2">CompanyGHI</td>
<td class="cell100 column3">$3000</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">4</td>
<td class="cell100 column2">CompanyJKL</td>
<td class="cell100 column3">$2750</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">5</td>
<td class="cell100 column2">CompanyMNO</td>
<td class="cell100 column3">$2500</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">6</td>
<td class="cell100 column2">CompanyPQR</td>
<td class="cell100 column3">$2250</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">7</td>
<td class="cell100 column2">CompanySTU</td>
<td class="cell100 column3">$2000</td>
</tr>
<tr class="row100 body">
<td class="cell100 column1">8</td>
<td class="cell100 column2">CompanyVWX</td>
<td class="cell100 column3">$1750</td>
</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
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
const projectRankingLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaqn8khHgRF5MtEfxcF-OIc_I9W8_ZiYl2Ax_q8H2G7QKsCQhgShVZAyXhyDpchU61skoyLv6YT_Ls/pub?output=csv';
let projectRankingOutput = "";

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

  projectRankingOutput = webOutput;
  return;
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
  await parseSpreadsheet(projectRankingLink, 'Total sales');

  console.log(outputSegmentOne + projectRankingOutput + outputSegmentTwo);
}

printOutput();
