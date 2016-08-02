/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Start_Menu'
   (function(symbolName) {   
   
   })("Start_Menu");
   //Edge symbol end:'Start_Menu'

   //=========================================================
   
   //Edge symbol: 'Start_Page'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Start_Button}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("Start_Page").hide();

      });
      //Edge binding end

   })("Start_Page");
   //Edge symbol end:'Start_Page'

   //=========================================================
   
   //Edge symbol: 'Game'
   (function(symbolName) {   
   
   })("Game");
   //Edge symbol end:'Game'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-340884769");