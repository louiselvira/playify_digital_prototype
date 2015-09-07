$(document).ready(function(){

	//Some global variables to handle data:
	var chosenCategory = "";
	var card = "";
	var chosenCardId = null;
	var chosenCard = "";
	var board = [];

	//Generate img tags for card images:
	var players = "";
	for (var i = 1; i < 15; i++) {
  		players += "<img id='" + i + "' class='card-thumb' src='img/player_front/" + i + ".jpeg' />";
	}

	var challenges = "";
	for (var i = 1; i < 11; i++) {
  		challenges += "<img id='" + i + "' class='card-thumb' src='img/challenge_front/" + i + ".jpeg' />";
	}

	var mechanics = "";
	for (var i = 1; i < 21; i++) {
  		mechanics += "<img id='" + i + "' class='card-thumb' src='img/mechanics_front/" + i + ".jpeg' />";
	}

	var feedback = "";
	for (var i = 1; i < 20; i++) {
  		feedback += "<img id='" + i + "' class='card-thumb' src='img/feedback_front/" + i + ".jpeg' />";
	}

	//When a "Add card" button is clicked, bring up category window: 
	$(".modal-launcher, #modal-background, .category-close").click(function() {
		$("#modal-content, #modal-background").toggleClass("active"); //Pulls up the card category pop up.
		chosenCategory = $(this).parent().attr('id'); //Checks id on parent element to get category. 
		//Check which category of cards to render into container:
		if (chosenCategory === "player") {
			$("#category-header").html("The Player");
			$("#card-container").empty();
			$("#card-container").append(players);
		}
		if (chosenCategory === "challenge") {
			$("#category-header").html("The Challenge");
			$("#card-container").empty();
			$("#card-container").append(challenges);
		}
		if (chosenCategory === "mechanics") {
			$("#category-header").html("The Mechanics");
			$("#card-container").empty();
			$("#card-container").append(mechanics);
		}
		if (chosenCategory === "feedback") {
			$("#category-header").html("The Feedback");
			$("#card-container").empty();
			$("#card-container").append(feedback);
		}

		//When a card is clicked:
		$(".card-details, #modal-background, .card-thumb").click(function() { 
			$(".card-details, #modal-background").toggleClass("active"); //Bring up card details window and clear the container. 
			$(".card-details").empty();

			card = "<img class='card-full' src='img/" + chosenCategory + "_back/" + $(this).attr('id') + ".jpeg' />"; //Put card image in container.
			cardCloseButton = "<button class='card-close'>Close</button>"; //Add a close button.
			cardAddButton = "<button class='card-add'>Add to board</button>"; //Add a button to add card to board.
			//Append elements to container:
			$(".card-details").append(card);
			$(".card-details").append(cardCloseButton);
			$(".card-details").append(cardAddButton);

			//When Add card is clicked:
			$(".card-add").click(function(){
				chosenCardId = $(this).prevAll(".card-full").attr("src").match(/\d+/); //Check for number inside image src.
				chosenCard = "<img class='board-card' src='img/" + chosenCategory + "_front/" + chosenCardId[0] + ".jpeg' />" //Generate the card image.
				$("#" + chosenCategory + "").append(chosenCard); //Put card in the right category on the board.

			}); // End of card click handler.

			//When card close button is clicked: 
			$(".card-close"),click(function(){
				$(".card-details, #modal-background").toggleClass("active"); //Close down window.
			});

		}); //End of card details function.

		//When card on board is clicked:
		$(".board-card").click(function(){
			//Pull up card details view:
			chosenCardId = $(this).attr("src").match(/\d+/); //Check for number inside image src.
			chosenCardCategoryTemp = $(this).attr("src").split("/"); //Split to access category name.
			chosenCardCategory = chosenCardCategoryTemp[1].split("_");

			$(".card-details, #modal-background").toggleClass("active"); //Bring up card details view and clear the container. 
			$(".card-details").empty();

			card = "<img class='card-full' src='img/" + chosenCardCategory[0] + "_back/" + chosenCardId + ".jpeg' />"; //Put card image in container.
			cardCloseButton = "<button class='card-close'>Close</button>"; //Add a close button.
			cardRemoveButton = "<button class='remove-card'>Remove from board</button>"; //Add a remove button.
			//Append elements to container:
			$(".card-details").append(card);
			$(".card-details").append(cardCloseButton);
			$(".card-details").append(cardRemoveButton);
		});

		//When Remove card is clicked: 
		$(".remove-card").click(function(){
			$(".card-details").empty();
			$(".card-details").toggleClass("active");
		});

	}); //End of pop up window functions.
	

}); //End of document.ready function.



