	let data;
	let Island = new Array();
        let nRows;
        let nColumns;
		
        function main() { //main 
            delElem();
            creatArray();
			if(chekArr(data)) {
				return false;
			}
			ArrInDoc();

            for(let i=0; i<nRows; i++) {
                for(let j=0; j<nColumns; j++) {
                    if(data[i][j] === 1) {
                        Island.push(searchIsland(i,j));
                    };
                };
            };
            showIsland();
        };
		
        function searchIsland(r, c) {
            if(r < 0 || r > nRows - 1 || c < 0 || c > nColumns - 1 || data[r][c] < 0) {
                return 0;
                }
		else {
                if (data[r][c] === 1) {
                    data[r][c] = -1;
                    return(1 +
			  (r > 0 ? searchIsland(r-1, c) : 0) +
			  (r < nRows - 1 ? searchIsland(r+1, c) : 0) +
			  (c > 0 ? searchIsland(r, c-1) : 0) +
			  (c < nColumns - 1 ? searchIsland(r, c+1) : 0) + 
			  (c > 0 && r > 0 ? searchIsland(r-1, c-1) : 0) + 
			  (c < nColumns - 1 && r < nRows - 1 ? searchIsland(r+1, c+1) : 0) + 
			  (c > 0 && r<nRows - 1 ? searchIsland(r+1, c-1) : 0) + 
			  (c < nColumns - 1 && r > 0 ? searchIsland(r-1, c+1) : 0));
                }
		else { 
                    return 0;
                };
            };
        };
		
        function mainTable() {
	    delElem();
            delWorkPlace();
            nRows = Number.parseInt(document.getElementById("nRows").value);
            nColumns = Number.parseInt(document.getElementById("nColumns").value);
		//проверка входных параметров
		if(chekNum(nRows) ||
	           chekNum(nColumns) ||
		   chekSizeArr(nColumns) ||
		   chekSizeArr(nRows)) {
		   return false;
		};
            genWorkPlace();
            let tbl = document.createElement("table");
            tbl.insertRow(-1);
		for (let j=0; j<=nColumns; j++) tbl.tBodies[0].rows[0].insertCell(-1).innerHTML = j || " ";
		for (let i=1; i<=nRows; i++) {
		    tbl.insertRow(-1).insertCell(-1).innerHTML = i;
		    for (let j=1; j<=nColumns; j++) {
			let input = document.createElement("input");
			input.id=input.name="m_" +i+ "_" +j;
			input.type = "number";
			input.defaultValue = Math.floor(Math.random() * 2);
			tbl.tBodies[0].rows[i].insertCell(-1).appendChild(input);
		    };
	        };
            document.querySelector("#workPlace").append(tbl);
            //создание кнопки 
	    MainButton();
        };
	// создание рабочего массива, значения из ранее созданой таблицы
        function creatArray() {
            data = Array(nRows);
            for(let i=0; i<nRows; i++) {
                data[i] = new Array(nColumns);
                for(let j=0; j<nColumns; j++) {
                    let str = "m_" + (i+1) + "_" + (j+1);
                    data[i][j] = Number.parseInt(document.getElementById(str).value);
                };
            };
        };
	//для работы массива
        function compNum(a, b) {
            return a - b;
        };
	//создание html элемента
        function genWorkPlace() {
            document.querySelector("#optimiz").innerHTML += "<div id=\"workPlace\"></div>";
        };
		
        function MainButton() {
            document.querySelector("#workPlace").innerHTML +=
            "<br><button onclick=main() >Найти самый большой остров</button><br><br>";
        };
		
        function ArrInDoc() {
            document.querySelector("#workPlace").innerHTML += "<span class=\"elements\">Карта:<br></span>";
            data.forEach(element => {
                document.querySelector("#workPlace").innerHTML += "<span class=\"elements\">["+ element +"]<br></span>";
            });
        };
		
        function showIsland() {
            if(Island.length > 0) {
                Island.sort(compNum).reverse();
                document.querySelector("#workPlace").innerHTML += "<p class=elements><b>Площадь самого большого острова = </b>" + Island[0] + "</p>";
                Island.length = 0;
            }
			else {
                document.querySelector("#workPlace").innerHTML += "<p class=elements><b>На карте нет островов!</b></p>";
            };
        };
	//для очистки интерфейса
        function delElem() {
            if(document.querySelector(".error") != null) {
                document.querySelectorAll(".error").forEach(element => {
                    element.remove();
                });
            };
            if(document.querySelector(".elements") != null) {
                document.querySelectorAll(".elements").forEach(element => {
                    element.remove();
                });
            };
        };
		
        function delWorkPlace() {
            if(document.querySelector("#workPlace") != null) {
                document.querySelector("#workPlace").remove();
            };
        };
	//проверки
        function chekSizeArr(size) {
            if(size <= 0) {
                document.querySelector("#optimizblock").innerHTML += "<div id=\"workPlace\"><b>Количество строк и/или столбцов не может быть меньше 1!</b></div>";
                return true;
            };
        };
		
        function chekArr(array) {
            if(!Array.isArray(array)) {
                document.querySelector("#optimizblock").innerHTML += "<div id=\"workPlace\"><b>Не является массивом!</b></div>";
                return true;
            };
        };
		
        function chekNum(number) {
            if(!Number.isInteger(number)) {
                document.querySelector("#optimizblock").innerHTML += "<div id=\"workPlace\"><b>Введенное значение не является числом!</b></div>";
                return true;
            };
        };
