let data;
        let largeIsland = new Array();
        let numberOfRows;
        let numberOfColumns;

        function run(){ 
            delElements();
            DataInArray();
            if(chekArray(data)){
                return false;
            }
            ArrayInDocument();

            for(let i = 0; i < numberOfRows; i++){
                for(let j = 0; j < numberOfColumns; j++){
                    if(data[i][j] == 1){
                        largeIsland.push(searchLargeIsland(i,j));
                    }
                }
            }

            showLargeIsland();
        }

        function searchLargeIsland(r, c){
            if(r<0 || r>numberOfRows-1 || c<0 || c>numberOfColumns-1 || data[r][c]<0){

                return 0;

            }else{
                if (data[r][c]==1){

                    data[r][c]=-1;

                    return(1 +
                    (r>0 ? searchLargeIsland(r-1,c) : 0) +
                    (r<numberOfRows-1 ? searchLargeIsland(r+1,c) : 0) +
                    (c>0 ? searchLargeIsland(r,c-1) : 0) +
                    (c<numberOfColumns-1 ? searchLargeIsland(r,c+1) : 0) + 
                    (c>0 && r>0 ? searchLargeIsland(r-1,c-1) : 0) + 
                    (c<numberOfColumns-1 && r<numberOfRows-1 ? searchLargeIsland(r+1,c+1) : 0) + 
                    (c>0 && r<numberOfRows-1 ? searchLargeIsland(r+1,c-1) : 0) + 
                    (c<numberOfColumns-1 && r>0 ? searchLargeIsland(r-1,c+1) : 0));
                }else {
                    return 0;
                }
            }
        }

        function mainTable()
        {
            delElements();
            delWorkPlace();

            numberOfRows = Number.parseInt(document.getElementById("numberOfRows").value);
            numberOfColumns = Number.parseInt(document.getElementById("numberOfColumns").value);

            if(chekNumber(numberOfRows) ||
            chekNumber(numberOfColumns) ||
            chekSizeOfArray(numberOfColumns) ||
            chekSizeOfArray(numberOfRows)){
                return false;
            }

            generateWorkPlace();

            let tbl = document.createElement("table");
            tbl.insertRow(-1);

            for (let j=0; j<=numberOfColumns; j++)	tbl.tBodies[0].rows[0].insertCell(-1).innerHTML = j||" ";

            for (let i=1; i<=numberOfRows; i++)
            {
                tbl.insertRow(-1).insertCell(-1).innerHTML = i;

                for (let j=1; j<=numberOfColumns; j++)	
                {
                    let input = document.createElement("input");
                    input.id=input.name="m_"+i+"_"+j;
                    input.type = "number";
                    input.defaultValue = Math.floor(Math.random() * 2);
                    tbl.tBodies[0].rows[i].insertCell(-1).appendChild(input);
                }
            }

            document.querySelector("#workPlace").append(tbl);

            MainButton();
        }

        function DataInArray(){
            data = Array(numberOfRows);

            for(let i = 0; i < numberOfRows; i++){
                data[i] = new Array(numberOfColumns);
                for(let j = 0; j < numberOfColumns; j++){
                    let str = "m_"+(i+1)+"_"+(j+1);
                    data[i][j] = Number.parseInt(document.getElementById(str).value);
                }
            }
        }

        function compareNumbers(a, b) {
            return a - b;
        }

        function generateWorkPlace(){
            document.querySelector("#block").innerHTML += "<div id=\"workPlace\"></div>";
        }

        function MainButton(){
            document.querySelector("#workPlace").innerHTML +=
            "<br><button onclick=run() >Найти самый большой остров</button><br><br>";
        }

        function ArrayInDocument(){
            document.querySelector("#workPlace").innerHTML += "<span class=\"elements\">Карта:<br></span>";
            data.forEach(element => {
                document.querySelector("#workPlace").innerHTML += "<span class=\"elements\">["+ element +"]<br></span>";
            });
        }

        function showLargeIsland(){
            if(largeIsland.length > 0){
                largeIsland.sort(compareNumbers).reverse();
                document.querySelector("#workPlace").innerHTML += "<p class=elements><b>Площадь самого большого острова = </b>" 
                    + largeIsland[0] + "</p>";
                largeIsland.length = 0;
            }else{
                document.querySelector("#workPlace").innerHTML += "<p class=elements><b>На карте нет островов!</b></p>";
            }
        }

        function delElements(){
            if(document.querySelector(".error") != null){
                document.querySelectorAll(".error").forEach(element => {
                    element.remove();
                });
            }

            if(document.querySelector(".elements") != null){
                document.querySelectorAll(".elements").forEach(element => {
                    element.remove();
                });
            }
        }

        function delWorkPlace(){
            if(document.querySelector("#workPlace") != null){
                document.querySelector("#workPlace").remove();
            }
        }

        function chekSizeOfArray(size){
            if(size <= 0){
                document.querySelector("#errorblock").innerHTML += "<div id=\"workPlace\"><b>Количество строк и/или столбцов не может быть меньше 1!</b></div>";
                return true;
            }
        }

        function chekArray(array){
            if(!Array.isArray(array)){
                document.querySelector("#errorblock").innerHTML += "<div id=\"workPlace\"><b>Не является массивом!</b></div>";
                return true;
            }
        }

        function chekNumber(number){
            if(!Number.isInteger(number)){
                document.querySelector("#errorblock").innerHTML += "<div id=\"workPlace\"><b>Введенное значение не является числом!</b></div>";
                return true;
            }
        }