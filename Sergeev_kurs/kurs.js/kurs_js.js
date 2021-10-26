let data;
        let largeIsland = new Array();
        let rowCount;
        let colCount;

        function run(){ 
            delElements();
            setDataInArray();
            if(chekArray(data)){
                return false;
            }
            addArrayInDocument();

            for(let i = 0; i < rowCount; i++){
                for(let j = 0; j < colCount; j++){
                    if(data[i][j] == 1){
                        largeIsland.push(searchLargeIsland(i,j));
                    }
                }
            }

            showLargeIsland();
        }

        function searchLargeIsland(r, c){
            if(r<0 || r>rowCount-1 || c<0 || c>colCount-1 || data[r][c]<0){

                return 0;

            }else{
                if (data[r][c]==1){

                    data[r][c]=-1;

                    return(1 +
                    (r>0 ? searchLargeIsland(r-1,c) : 0) +
                    (r<rowCount-1 ? searchLargeIsland(r+1,c) : 0) +
                    (c>0 ? searchLargeIsland(r,c-1) : 0) +
                    (c<colCount-1 ? searchLargeIsland(r,c+1) : 0) + 
                    (c>0 && r>0 ? searchLargeIsland(r-1,c-1) : 0) + 
                    (c<colCount-1 && r<rowCount-1 ? searchLargeIsland(r+1,c+1) : 0) + 
                    (c>0 && r<rowCount-1 ? searchLargeIsland(r+1,c-1) : 0) + 
                    (c<colCount-1 && r>0 ? searchLargeIsland(r-1,c+1) : 0));
                }else {
                    return 0;
                }
            }
        }

        function generateData()
        {
            delElements();
            delWorkPlace();

            rowCount = Number.parseInt(document.getElementById("rowCount").value);
            colCount = Number.parseInt(document.getElementById("colCount").value);

            if(chekNumber(rowCount) ||
            chekNumber(colCount) ||
            chekSizeOfArray(colCount) ||
            chekSizeOfArray(rowCount)){
                return false;
            }

            generateWorkPlace();

            let tbl = document.createElement("table");
            tbl.insertRow(-1);

            for (let j=0; j<=colCount; j++)	tbl.tBodies[0].rows[0].insertCell(-1).innerHTML = j||" ";

            for (let i=1; i<=rowCount; i++)
            {
                tbl.insertRow(-1).insertCell(-1).innerHTML = i;

                for (let j=1; j<=colCount; j++)	
                {
                    let input = document.createElement("input");
                    input.id=input.name="m_"+i+"_"+j;
                    input.type = "number";
                    input.defaultValue = Math.floor(Math.random() * 2);
                    tbl.tBodies[0].rows[i].insertCell(-1).appendChild(input);
                }
            }

            document.querySelector("#workPlace").append(tbl);

            addMainButton();
        }

        function setDataInArray(){
            data = Array(rowCount);

            for(let i = 0; i < rowCount; i++){
                data[i] = new Array(colCount);
                for(let j = 0; j < colCount; j++){
                    let str = "m_"+(i+1)+"_"+(j+1);
                    data[i][j] = Number.parseInt(document.getElementById(str).value);
                }
            }
        }

        function compareNumbers(a, b) {
            return a - b;
        }

        function generateWorkPlace(){
            document.body.innerHTML += "<div id=\"workPlace\"></div>";
        }

        function addMainButton(){
            document.querySelector("#workPlace").innerHTML +=
            "<br><button onclick=run()>Найти самый большой остров</button><br><br>";
        }

        function addArrayInDocument(){
            document.querySelector("#workPlace").innerHTML += "<span class=\"elements\">Карта:<br></span>";
            data.forEach(element => {
                document.querySelector("#workPlace").innerHTML += "<span class=\"elements\">["+ element +"]<br></span>";
            });
        }

        function showLargeIsland(){
            if(largeIsland.length > 0){
                largeIsland.sort(compareNumbers).reverse();
                document.querySelector("#workPlace").innerHTML += "<p class=elements>Площадь самого большого острова = " 
                    + largeIsland[0] + "</p>";
                largeIsland.length = 0;
            }else{
                document.querySelector("#workPlace").innerHTML += "<p class=elements>На карте нет островов!</p>";
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
                document.body.innerHTML += "<p class=\"error\">Количество строк и/или столбцов не может быть меньше 1!</p>";
                return true;
            }
        }

        function chekArray(array){
            if(!Array.isArray(array)){
                document.body.innerHTML += "<p class=\"error\">Не является массивом!</p>";
                return true;
            }
        }

        function chekNumber(number){
            if(!Number.isInteger(number)){
                document.body.innerHTML += "<p class=\"error\">Введенное значение не является числом!</p>";
                return true;
            }
        }