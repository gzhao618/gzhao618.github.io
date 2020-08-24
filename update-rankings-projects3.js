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
const leftSheets = [ ['Envelope', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfV1zFiTAw8cj_9qdcPDeiXMIxZiWfrZCZ2AlkfmKQrW2Me_QIDTtdCq7ws8MiSmgX41ud-EJqsQA0/pub?output=csv'],
['M and E', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnG30ogIG-f-7iJ0UnmTY7zzW3IeS-KJ4Egxdrqm6xn_BSgPpFBogkbvx6-EJd8OWoLQUS72QulpQW/pub?output=csv'],
['CB Rehabilitation - TA5 Investigations', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6O9VeJHaqHlLCqjtiNpriiH4oZqCsyTqy71Aco4k7cabEXj2MZeXpkjb9kEUtf0DeguiDIxxUaPYp/pub?output=csv'],
['CB Rehabilitation - TA16 Temp Cons Road', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQV0w-T94o2Odlx4YKBuf1qcuoeqp-jD4FfoZhgDj6TOiagnayUHZ7erkGg8yAhMqrl469Jp4EkpOMM/pub?output=csv'],
['CB Rehabilitation - TA18 Monuments', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkDa2bQC4jTYfJ8icLQZfy8YCWa6b691jGQJKRyOQGO_LYfXnuafeDgMsItg-lmAwnTGSO45O0GkbM/pub?output=csv'] ]; 

const rightSheets = [ ['Heritage', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoYn9WQDZ78iYy_TAk4kAYtI1MkMeD3x4IyA6X9Jw2E-JO4__ebufuywcBF_cARFvaWIg-FpxV0WjJ/pub?output=csv'],
['LoP Basement', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_Gu5POEszlb3_YpaCHksYi-6IZBJmcwjjX05rWXqdGyOOOQlzxTzJDx8QluvAITqu4aRVbSvg5gSa/pub?output=csv'],
['CB Rehabilitation - TA8 Heritage Conservation', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-puIPv2jEUzhRTY1U1Ze9fxqjdtVkk43qdwJ8xfzLahh6QS_YCjC4qp8c4E-QUGxLJwsE4oDTk0SC/pub?output=csv'],
['CB Rehabilitation - TA17 Public Washrooms', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ86ZomF9ivOy_uePd_6njGDPpZ1L0RLSk9olQbNYAIjGuzH0gP-E5jVmaLOSEpl-coaA8PkWuvVpNB/pub?output=csv'],
['CB Rehabilitation - TA19 MSO', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRQJ8T6b3rQ8SoMuCzAMhOHPt-Kie9fCz74LVrqZveNSs8seHXNb51hzFEmvsJxPMJ4KSo66SrRn3rE/pub?output=csv'] ]; 

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
