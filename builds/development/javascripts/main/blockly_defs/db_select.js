module.exports = function(Blockly){
	
	Blockly.Blocks['db_select'] = {
		init: function() {
			this.jsonInit({
				"message0": 'select %1 from %2 where %3',
				"args0": [
					{
						"type": "input_value",
						"name": "COLUMN",
						"check": "String"
					},
					{
						"type": "input_value",
						"name": "FROM",
						"check": "String"
					},
					{
						"type": "input_value",
						"name": "WHERE",
						"check": "String"
					}
				],
				"previousStatement": "Action",
				"nextStatement": "Action",
				"colour": 70,
				"tooltip": "Select a list of records from the DB"
			});
		}
	};
	Blockly.JavaScript['db_select'] = function(block) {
		var argument0 = Blockly.JavaScript.valueToCode(block, 'COLUMN',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		var argument1 = Blockly.JavaScript.valueToCode(block, 'FROM',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		var argument2 = Blockly.JavaScript.valueToCode(block, 'WHERE',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		return ["DB.SELECT("+argument0+","+argument1+","+argument2+");"];
	};
	
};