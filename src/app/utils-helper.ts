import { Category } from "./models";

export function renderSingleGroupsInUI(grouped: any, category: Category): void {
    const uniqueLabel = ['Africa', 'Asia', 'Europe', 'North America', 'South America',
    'Accessory', 'Cultural', 'Institutional', 'Memorial', 'Mixed-use', 'Public Space',
    'Religious', 'Residential', 'Utility'];

    for (let key in grouped) {
        let li = document.createElement("li");
        li.classList.add('list-group-item');
        li.style.width = "4.3vw";
        if ((category === Category.LOCATION || category === Category.PROGRAMMATIC) && uniqueLabel.includes(key)) {
            li.style.marginLeft = "3vw";
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
            li.style.fontFamily = "Barlow Condensed";
            if (category === Category.LOCATION || category === Category.PROGRAMMATIC) {
                if (uniqueLabel.includes(key)) {
                    li.style.marginLeft = "3vw";
                    li.innerHTML = key;
                } else {
                    li.innerHTML = '~';
                }
            }
            groupTitleUl.appendChild(li);
        }

        let ul = document.createElement("ul"); 

        for (let group of grouped[key]) { 
            let li = document.createElement("li");
            li.innerHTML = `<a href="/detail/${group.id}" class="nav-link" routerLink="detail"
                style="width: 2vw; height: 2vw; margin-top: 5px; font-size: 0.4vw; font-family: 'Barlow'; text-align: center; background-color: ${group.color}">
                ${group.codename}
                </a>`;
            onMouseOverEvent(li);
            onMouseOutEvent(li);
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

function onMouseOverEvent(selector: HTMLLIElement): void {
    selector.addEventListener('mouseover', (e) => {
        (e.target as HTMLLIElement).style.fontSize = "0.9vw";
    })
}

function onMouseOutEvent(selector: HTMLLIElement): void {
    selector.addEventListener('mouseout', (e) => {
        (e.target as HTMLLIElement).style.fontSize = "0.4vw";
    })
}