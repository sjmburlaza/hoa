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
            li.style.color = determineBrightness(group.color);
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

function determineBrightness(hexcode: string): string {
    const c = hexcode.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (luma < 100) {
        return 'white';
    } else {
        return 'black';
    }
}

export function divideArray(origArr: any, name: string, chunkLen: number): any {
    const newArr = [];
    let i = 0;
    while (i < origArr.length) {
      const chunk = origArr.slice(i, i+chunkLen);
      if (!newArr.length) {
        newArr.push([name, chunk]);
      } else {
        newArr.push([`${name}${i}`, chunk]);
      }
      i += chunkLen;
    }
    return newArr;
}

export function findArr(arr: [string, any][], name: string): any {
    let array;
    arr.forEach(el => {
      if (el[0] === name) {
        array = el[1];
      }
    })
    return array;
}