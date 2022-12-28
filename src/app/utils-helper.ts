export function renderSingleGroupsInUI(grouped: any): void {
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
            onMouseOverEvent(li);
            onMouseOutEvent(li);
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
        ul.style.display = "flex";
        ul.style.flexWrap = "wrap";
        ul.style.flexDirection = "row";
        li.style.border = "none";
    }
}

export function renderMultiGroupsInUI(grouped: any): void {
    console.log(grouped)
    const uniqueLabel = ['Africa', 'Asia', 'Europe', 'North America', 'South America',
    'Accessory', 'Cultural', 'Institutional', 'Memorial', 'Mixed-use', 'Public Space',
    'Religious', 'Residential', 'Utility'];
    
    for (let key in grouped) {
        let li = document.createElement("li");
        li.classList.add('list-group-item');
        li.style.width = "4.3vw";
        if (uniqueLabel.includes(key)) {
            li.style.marginLeft = "3vw";
        }

        const outerUl = document.getElementById("outerUl");
        
        if (outerUl) {
            outerUl.appendChild(li);
        }

        const groupTitleUl = document.getElementById("groupTitleUl");
        if (groupTitleUl) {
            let li = document.createElement("li");
            // li.innerHTML = key;
            li.style.width = "4.3vw";
            li.style.textAlign = "center";
            li.style.fontSize = "0.8vw";
            if (uniqueLabel.includes(key)) {
                li.style.marginLeft = "3vw";
                // li.style.width = "8.3vw";
                li.innerHTML = key;
            } else {
                li.innerHTML = '~';
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
        li.style.border = "none";
    }
}

function onMouseOverEvent(selector: HTMLLIElement): void {
    selector.addEventListener('mouseover', (event) => {
        if (event.target) {
            (event.target as HTMLLIElement).style.width = "3vw";
            (event.target as HTMLLIElement).style.height = "3vw";
            (event.target as HTMLLIElement).style.fontSize = "1vw";
        }
    })
}

function onMouseOutEvent(selector: HTMLLIElement): void {
    selector.addEventListener('mouseout', (event) => {
        if (event.target) {
            (event.target as HTMLLIElement).style.width = "2vw";
            (event.target as HTMLLIElement).style.height = "2vw";
            (event.target as HTMLLIElement).style.fontSize = "0.6vw";
        }
    })
}