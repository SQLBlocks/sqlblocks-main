module.exports = function(Blockly){
	
	Blockly.Blocks['db_condition'] = {
		init: function() {
			this.jsonInit({
				"message0": 'comparison %1 %2 %3',
				"args0": [
					{
						"type": "input_value",
						"name": "SUBJECT",
						"check": "String"
					},
					{
						"type": "field_dropdown",
						"name": "OPERATOR",
						"options": [
							[ "=", "DB.OPERATOR.EQUALS" ],
							[ "!=", "DB.OPERATOR.NOT_EQUALS" ],
							[ ">", "DB.OPERATOR.GREATER_THAN" ],
							[ "<", "DB.OPERATOR.LESS_THAN" ],
							[ ">=", "DB.OPERATOR.GREATER_THAN_OR_EQUALS" ],
							[ "<=", "DB.OPERATOR.LESS_THAN_OR_EQUALS" ],
							[ "BETWEEN", "DB.OPERATOR.BETWEEN" ],
							[ "LIKE", "DB.OPERATOR.LIKE" ]
						]
					},
					{
						"type": "input_value",
						"name": "COMPARATOR"
					}
				],
				"output": "String",
				"colour": 70,
				"tooltip": "Limit selection using a logical comparison"
			});
		}
	};
	Blockly.JavaScript['db_condition'] = function(block) {
		var argument0 = Blockly.JavaScript.valueToCode(block, 'SUBJECT',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		var argument1 = Blockly.JavaScript.valueToCode(block, 'OPERATOR',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		var argument2 = Blockly.JavaScript.valueToCode(block, 'COMPARATOR',Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
		return ["DB.WHERE_COMPARATOR("+argument0+"+"+argument1+"+"+argument2+")"];
	};
	
};