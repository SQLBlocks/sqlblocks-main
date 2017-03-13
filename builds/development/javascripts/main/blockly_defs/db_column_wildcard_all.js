module.exports = function(Blockly){
	
	Blockly.Blocks['db_column_wildcard_all'] = {
		init: function() {
			this.jsonInit({
				"message0": '*',
				"output": "String",
				"colour": 70,
				"tooltip": "Locate a table from the DB"
			});
		}
	};
	Blockly.JavaScript['db_table'] = function(block) {
		return ["DB.WILDCARD.ALL"];
	};
	
};