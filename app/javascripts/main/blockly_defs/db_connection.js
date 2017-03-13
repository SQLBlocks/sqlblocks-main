module.exports = function(Blockly){
	
	Blockly.Blocks['db_connection'] = {
		init: function() {
			this.jsonInit({
				"message0": 'start connection',
				"args0": [
				],
				"nextStatement": "Action",
				"colour": 70,
				"tooltip": "Initiate connection to DB with presetted credentials"
			});
		}
	};
	Blockly.JavaScript['db_connection'] = function(block) {
		return ["DB.CONNECT();"];
	};
	
};