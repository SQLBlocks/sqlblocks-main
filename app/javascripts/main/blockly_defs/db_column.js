module.exports = function(Blockly){
	
	Blockly.Blocks['db_column'] = {
		init: function() {
			this.jsonInit({
				"message0": 'column %1',
				"args0": [
					{
						"type": "input_value",
						"name": "COLUMN_NAME",
						"check": "String"
					}
				],
				"output": "String",
				"colour": 70,
				"tooltip": "Indicate a column from the DB"
			});
		}
	};
	Blockly.JavaScript['db_column'] = function(block) {
		var argument0 = Blockly.JavaScript.valueToCode(block, 'COLUMN_NAME',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		return ["DB.COLUMN_IDENT("+argument0+")"];
	};
	
};