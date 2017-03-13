module.exports = function(Blockly){
	
	Blockly.Blocks['db_table'] = {
		init: function() {
			this.jsonInit({
				"message0": 'table %1',
				"args0": [
					{
						"type": "input_value",
						"name": "TABLE_NAME",
						"check": "String"
					}
				],
				"output": "String",
				"colour": 70,
				"tooltip": "Locate a table from the DB"
			});
		}
	};
	Blockly.JavaScript['db_table'] = function(block) {
		var argument0 = Blockly.JavaScript.valueToCode(block, 'TABLE_NAME',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		return ["DB.TABLE_IDENT("+argument0+")"];
	};
	
};