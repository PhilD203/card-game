;(function(window){

// Game
    var Game = function(el, option){
        this.el = document.getElementById(el);
        this.option = option;
            //     Info Section
        this.info_div = document.createElement('div');
        this.info_div.id = "info_div";
                //     Deck
        this.deck_div= document.createElement('div');
        this.deck_div.id="deck_div";

            //     Discard Pile
            //     Rules
            
        this.el.appendChild(this.info_div);
        this.el.appendChild(this.deck_div);
    }
        
        // Deck
        //     Cards
        //     ------
        //     shuffle
        //     stack
        
        // Cards
        //     val 
        //     suit
        //     ------
        //     flip
        // Discard Pile
        //     Holders
        //     ----
        //     accept or reject a card 
    window.Game = Game
}) (window);