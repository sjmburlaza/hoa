export function renderAlphsInUI(grouped: any): void {
    for (let key in grouped) {
        let li = document.createElement("li");
        li.classList.add('list-group-item');
        li.style.width = "4.3vw";

        const outerUl = document.getElementById("outerUl");
        
        if (outerUl) {
            outerUl.appendChild(li);
        }

        const groupTitleUl = document.getElementById("groupTitleUl");
        if (groupTitleUl) {
            let li = document.createElement("li");
            li.innerHTML = key;
            li.style.width = "4.3vw";
            li.style.textAlign = "center";
            li.style.fontSize = "0.8vw";
            groupTitleUl.appendChild(li);
        }

        let ul = document.createElement("ul"); 

        for (let group of grouped[key]) { 
            let li = document.createElement("li"); 
            li.innerHTML = group['codename'];
            li.style.borderStyle = "solid";
            li.style.width = "2vw";
            li.style.height = "2vw";
            li.style.marginTop = "5px";
            li.style.fontSize = "0.6vw";
            li.style.textAlign = "center";
            li.style.backgroundColor = group['color'];
            ul.append(li);
        }
        li.append(ul);
        ul.style.listStyle = "none";
        ul.style.margin = "0";
        ul.style.padding = "0";
        // ul.style.height = "80vh"
        ul.style.display = "flex";
        ul.style.flexWrap = "wrap";
        ul.style.flexDirection = "row"
        li.style.borderColor = "red";

    }
}

export function renderGroupsInUI(grouped: any): void {
    for (let key in grouped) {
        let li = document.createElement("li");
        li.classList.add('list-group-item');
        // li.classList.add(key);
        li.style.width = "4.3vw";
        if (key === 'Africa' || key === 'North America' || key === 'South America') {
            li.style.margin = "0 2vw";
        }

        const outerUl = document.getElementById("outerUl");
        
        if (outerUl) {
            outerUl.appendChild(li);
        }

        const groupTitleUl = document.getElementById("groupTitleUl");
        if (groupTitleUl) {
            let li = document.createElement("li");
            li.innerHTML = key;
            li.style.width = "4.3vw";
            li.style.textAlign = "center";
            li.style.fontSize = "0.8vw";
            if (key === 'Africa' || key === 'North America' || key === 'South America') {
                // li.style.margin = "0 2vw";
                li.style.width = "8.3vw";
            }
            groupTitleUl.appendChild(li);
        }

        let ul = document.createElement("ul"); 

        for (let group of grouped[key]) { 
            let li = document.createElement("li"); 
            li.innerHTML = group['codename'];
            li.style.borderStyle = "solid";
            li.style.width = "2vw";
            li.style.height = "2vw";
            li.style.marginTop = "5px";
            li.style.fontSize = "0.6vw";
            li.style.textAlign = "center";
            li.style.backgroundColor = group['color'];
            ul.append(li);
        }
        li.append(ul);
        ul.style.listStyle = "none";
        ul.style.margin = "0";
        ul.style.padding = "0";
        // ul.style.height = "80vh"
        ul.style.display = "flex";
        ul.style.flexWrap = "wrap";
        ul.style.flexDirection = "row"
        li.style.borderColor = "red";

    }
}