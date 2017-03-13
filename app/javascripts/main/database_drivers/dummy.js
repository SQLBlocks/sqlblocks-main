module.exports = function(DB){

	DB.ERROR_MSG = "";

	DB.CREDENTIALS = {
		HOST: "127.0.0.1",
		USERNAME: "martin",
		PASSWORD: "mondriot",
		DATABASE: "test"
	}

	DB.OPERATOR = {
		"EQUALS": "=",
		"NOT_EQUALS": "!=",
		"GREATER_THAN": ">",
		"LESS_THAN": "<",
		"GREATER_THAN_OR_EQUALS": ">=",
		"LESS_THAN_OR_EQUALS": "<=",
		"BETWEEN": "BETWEEN",
		"LIKE": "LIKE"
	}

	DB.WILDCARDS = {
		ALL: "*"
	}

	DB.CONNECT = function(){
		
	}

	DB.COLUMN_IDENT = function(column_name){
		return column_name;
	}

	DB.WHERE_COMPARATOR = function(subject, oper, comparator){
		return "WHERE "+subject+" "+oper+" "+comparator;
	}

	DB.SELECT = function(column, from, where){
		return "SELECT "+column+" FROM "+from+" "+where;
	}

	DB.TABLE_IDENT = function(table_name){
		return table_name;
	}


}