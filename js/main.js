var myVar=setInterval(function(){myTimer()},1000);

function myTimer()
{
var d=new Date();
var t=d.toLocaleTimeString();
document.getElementById("timer").innerHTML=t;
}


/**********************************************************
	my functions
***********************************************************/



var data = [
	{
		answer: "Apple",
		link: "images/apple.jpeg"
	},
	{
		answer: "Real Madrid",
		link: "images/madrid.jpeg"
	},
	{

		answer: "Manchester United",
		link: "images/manu.jpeg"
	},
	{

	answer: "Liverpool",
		link: "images/liverpool.jpeg"
	},
	{
	answer: "Manchester City",
		link: "images/mcfc.jpeg"
	},
	{
		answer: "Tottenham Hotspur",
			link: "images/spurs.jpeg"
	},
	{
	answer: "Borussia Dortmund",
			link:"images/bd.jpeg"

		},

	{
			answer:"Santos",
				link:"images/s.jpeg"


	}
	
]

function checkAnswer(current_question)
{
 var answer=$("#answer"+current_question).val();
 if (answer.toLowerCase() == data[current_question].answer.toLowerCase()) alert('correct');
 else alert('incorrect')
}

