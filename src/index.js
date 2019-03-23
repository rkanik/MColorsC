
let minimize = document.getElementById('minimize')
minimize.addEventListener('click', (event)=> {
    event.preventDefault();
    require('electron').remote.BrowserWindow.getFocusedWindow().minimize();
})

let close_to_tray = document.getElementById('close_to_tray')
close_to_tray.addEventListener('click', (event)=> {
    event.preventDefault();
    require('electron').remote.BrowserWindow.getFocusedWindow().hide();
})

const col_class_name = [
    'co_red','co_pink','co_purple','co_depurple','co_indigo','co_blue','co_liblue',
    'co_cyan','co_teal','co_green','co_ligreen','co_lime','co_yellow','co_amber',
    'co_orange','co_deorange','co_brown','co_grey','co_bluegrey'
]
var colorNames = [];
col_class_name.forEach( name => {
    colorNames.push(name.split('_')[1]);
})
const col_colors = [
    '#EE393A','#E30064','#9824AE','#663BB5','#4153B3',
    '#3398F0','#2CABF2','#30BED3','#249788','#56AF54',
    '#8FC351','#CDDB46','#FEEA4A','#FCBF29','#FA9420',
    '#F94F2B','#775449','#9E9E9E','#627E8A'];

let container = document.querySelector('.container');
for (let index = 0; index < colorNames.length ; index++) {
    
    if( (index >= 10 && index <= 15) || index == 17 ){
        container.innerHTML += `
        <div id='${col_class_name[index]}' 
        class="co_col ${col_class_name[index]}" 
        onclick=onColClick('${col_class_name[index]}')
        style="background-color:${col_colors[index]};display: grid;grid-template-columns: 1fr;">
        <p class='col-he-p fo-black'>${colorNames[index].toUpperCase()}</p>
        </div>`;
    }else{
        container.innerHTML += `
        <div id='${col_class_name[index]}' 
        class="co_col ${col_class_name[index]}" 
        onclick=onColClick('${col_class_name[index]}')
        style="background-color:${col_colors[index]};display: grid;grid-template-columns: 1fr;">
        <p class='col-he-p fo-white'>${colorNames[index].toUpperCase()}</p>
        </div>`;
    }
}

const color_names = [
    '50','100','200','300','400','500','600',
    '700','800','900','A100','A200','A400','A700'
]
const colors = {
    'red':[
        '#ffebee','#ffcdd2','#ef9a9a','#e57373','#ef5350',
        '#f44336','#e53935','#d32f2f','#c62828','#b71c1c',
        '#ff8a80','#ff5252','#ff1744','#d50000'
    ],
    'pink':[
        '#fce4ec','#f8bbd0','#f48fb1','#f06292','#ec407a',
        '#e91e63','#d81b60','#c2185b','#ad1457','#880e4f',
        '#ff80ab','#ff4081','#f50057','#c51162'
    ],
    'purple':[
        '#f3e5f5','#e1bee7','#ce93d8','#ba68c8','#ab47bc',
        '#9c27b0','#8e24aa','#7b1fa2','#6a1b9a','#4a148c',
        '#ea80fc','#e040fb','#d500f9','#aa00ff'
    ],
    'depurple':[
        '#ede7f6','#d1c4e9','#b39ddb','#9575cd','#7e57c2',
        '#673ab7','#5e35b1','#512da8','#4527a0','#311b92',
        '#b388ff','#7c4dff','#651fff','#6200ea'
    ],
    'indigo':[
        '#e8eaf6','#c5cae9','#9fa8da','#7986cb','#5c6bc0',
        '#3f51b5','#3949ab','#303f9f','#283593','#1a237e',
        '#8c9eff','#536dfe','#3d5afe','#304ffe'
    ],
    'blue':[
        '#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5',
        '#2196f3','#1e88e5','#1976d2','#1565c0','#0d47a1',
        '#82b1ff','#448aff','#2979ff','#2962ff'
    ],
    'liblue':[
        '#e1f5fe','#b3e5fc','#81d4fa','#4fc3f7','#29b6f6',
        '#03a9f4','#039be5','#0288d1','#0277bd','#01579b',
        '#80d8ff','#40c4ff','#00b0ff','#0091ea'
    ],
    'cyan':[
        '#e0f7fa','#b2ebf2','#80deea','#4dd0e1','#26c6da',
        '#00bcd4','#00acc1','#0097a7','#00838f','#006064',
        '#84ffff','#18ffff','#00e5ff','#00b8d4'
    ],
    'teal':[
        '#e0f2f1','#b2dfdb','#80cbc4','#4db6ac','#26a69a',
        '#009688','#00897b','#00796b','#00695c','#004d40',
        '#a7ffeb','#64ffda','#1de9b6','#00bfa5'
    ],
    'green':[
        '#e8f5e9','#c8e6c9','#a5d6a7','#81c784','#66bb6a',
        '#4caf50','#43a047','#388e3c','#2e7d32','#1b5e20',
        '#b9f6ca','#69f0ae','#00e676','#00c853'
    ],
    'ligreen':[
        '#f1f8e9','#dcedc8','#c5e1a5','#aed581','#9ccc65',
        '#8bc34a','#7cb342','#689f38','#558b2f','#33691e',
        '#ccff90','#b2ff59','#76ff03','#64dd17'
    ],
    'lime':[
        '#f9fbe7','#f0f4c3','#e6ee9c','#dce775','#d4e157',
        '#cddc39','#c0ca33','#afb42b','#9e9d24','#827717',
        '#f4ff81','#eeff41','#c6ff00','#aeea00'
    ],
    'yellow':[
        '#fffde7','#fff9c4','#fff59d','#fff176','#ffee58',
        '#ffeb3b','#fdd835','#fbc02d','#f9a825','#f57f17',
        '#ffff8d','#ffff00','#ffea00','#ffd600'
    ],
    'amber':[
        '#fff8e1','#ffecb3','#ffe082','#ffd54f','#ffca28',
        '#ffc107','#ffb300','#ffa000','#ff8f00','#ff6f00',
        '#ffe57f','#ffd740','#ffc400','#ffab00'
    ],
    'orange':[
        '#fff3e0','#ffe0b2','#ffcc80','#ffb74d','#ffa726',
        '#ff9800','#fb8c00','#f57c00','#ef6c00','#e65100',
        '#ffd180','#ffab40','#ff9100','#ff6d00'
    ],
    'deorange':[
        '#fbe9e7','#ffccbc','#ffab91','#ff8a65','#ff7043',
        '#ff5722','#f4511e','#e64a19','#d84315','#bf360c',
        '#ff9e80','#ff6e40','#ff3d00','#dd2c00'
    ],
    'brown':[
        '#efebe9','#d7ccc8','#bcaaa4','#a1887f','#8d6e63',
        '#795548','#6d4c41','#5d4037','#4e342e','#3e2723'
    ],
    'grey':[
        '#fafafa','#f5f5f5','#eeeeee','#e0e0e0','#bdbdbd',
        '#9e9e9e','#757575','#616161','#424242','#212121'
    ],
    'bluegrey':[
        '#eceff1','#cfd8dc','#b0bec5','#90a4ae','#78909c',
        '#607d8b','#546e7a','#455a64','#37474f','#263238'
    ],
};
fontColorsForRows = {
    'red':[0,0,0,0,0,1,1,1,1,1,0,1,1,1],
    'pink':[0,0,0,0,0,1,1,1,1,1,0,1,1,1],
    'purple':[0,0,0,1,1,1,1,1,1,1,0,1,1,1],
    'depurple':[0,0,0,1,1,1,1,1,1,1,0,1,1,1],
    'indigo':[0,0,0,1,1,1,1,1,1,1,0,1,1,1],
    'blue':[0,0,0,0,0,1,1,1,1,1,0,1,1,1],
    'liblue':[0,0,0,0,0,1,1,1,1,1,0,0,0,1],
    'cyan':[0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    'teal':[0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    'green':[0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    'ligreen':[0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    'lime':[0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    'yellow':[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'amber':[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'orange':[0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    'deorange':[0,0,0,0,0,1,1,1,1,1,0,0,1,1],
    'brown':[0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    'grey':[0,0,0,0,0,0,1,1,1,1,0,0,0,0],
    'bluegrey':[0,0,0,0,1,1,1,1,1,1,0,0,0,0]
}
colorNames.forEach( (element,x) => {
    generateRowColors(col_class_name[x],element,fontColorsForRows[element])
    x++
});
function generateRowColors( cClassName, cColor,fontColor) {
    let co_Corrent = document.querySelector(`.${cClassName}`);
    let colorCurrent = colors[cColor];
    for (let i = 0; i < colorCurrent.length; i++) {

        if(fontColor[i] === 1 ){

            co_Corrent.innerHTML += 
            `<div id="${cColor}${i}" 
                class="${cColor}_${color_names[i]} ${cColor}_rows rows"
                onclick=copyColorToClipboard('${colorCurrent[i]}')>
                <p class='fo-white'>${color_names[i]}</p>
                <p class='fo-white'>${colorCurrent[i]}</p>
            </div>`;

        }else if(fontColor[i] === 0 ){
            co_Corrent.innerHTML += 
            `<div id="${cColor}${i}" 
                class="${cColor}_${color_names[i]} ${cColor}_rows rows"
                onclick=copyColorToClipboard('${colorCurrent[i]}')>
                <p class='fo-black'>${color_names[i]}</p>
                <p class='fo-black'>${colorCurrent[i]}</p>
            </div>`;
        }
        
        let row = document.getElementById(`${cColor}${i}`);
        row.style.cssText = `
            display:none;
            visibility:hidden;
        `;
    }
}
var previousSelectedColumn = '';
function onColClick( col ) {
    switch (col) {
        case col_class_name[0]:
            showRowColors(col,colorNames[0])
            break
        case col_class_name[1]:
            showRowColors(col,colorNames[1])
            break
        case col_class_name[2]:
            showRowColors(col,colorNames[2])
            break
        case col_class_name[3]:
            showRowColors(col,colorNames[3])
            break
        case col_class_name[4]:
            showRowColors(col,colorNames[4])
            break
        case col_class_name[5]:
            showRowColors(col,colorNames[5])
            break
        case col_class_name[6]:
            showRowColors(col,colorNames[6])
            break
        case col_class_name[7]:
            showRowColors(col,colorNames[7])
            break
        case col_class_name[8]:
            showRowColors(col,colorNames[8])
            break
        case col_class_name[9]:
            showRowColors(col,colorNames[9])
            break
        case col_class_name[10]:
            showRowColors(col,colorNames[10])
            break
        case col_class_name[11]:
            showRowColors(col,colorNames[11])
            break
        case col_class_name[12]:
            showRowColors(col,colorNames[12])
            break
        case col_class_name[13]:
            showRowColors(col,colorNames[13])
            break
        case col_class_name[14]:
            showRowColors(col,colorNames[14])
            break
        case col_class_name[15]:
            showRowColors(col,colorNames[15])
            break
        case col_class_name[16]:
            showRowColors(col,colorNames[16])
            break
        case col_class_name[17]:
            showRowColors(col,colorNames[17])
            break
        case col_class_name[18]:
            showRowColors(col,colorNames[18])
            break
        default:
            break
    }
}
function showRowColors( column , cColor ) {
    if( previousSelectedColumn !== ''){
        hidePreviousSelectedColumn(column)
    }
    previousSelectedColumn = column

    let childList = document.getElementById(column).children;
    childList[0].style.opacity = '0';
    let color = colors[cColor];
    for (let index = 1; index < childList.length; index++) {
        childList[index].style.cssText = `
        background-color: ${color[index-1]};
        display:block;
        visibility:visible;`
    }
}
function hidePreviousSelectedColumn() {
    let childList = document.getElementById(previousSelectedColumn).children;
    childList[0].style.opacity = '1';
    for (let index = 1; index < childList.length; index++) {
        childList[index].style.cssText = `
        display:none;
        visibility:hidden;`
    }
}
function copyColorToClipboard (str) {
    var tempElement = document.createElement('textarea');
    tempElement.value = str;
    tempElement.setAttribute('readonly', '');
    tempElement.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    showToast(str)
}
function showToast(str) {
    let copied = document.getElementById('copied');
    copied.innerText = `${str} copied to clipboard`;
    copied.style.opacity = '1';
    setTimeout( () =>{
        copied.style.opacity = '0';
    },2500)
}
function changeView( a, x ) {
    let grid_view = document.querySelector('.grid-view');
    let img_col = document.getElementById('btn_col_view');
    let img_grid = document.getElementById('btn_grid_view');
    let ma_to_vi_p = document.getElementById('ma-to-vi-p');
    let grid_color_preview = document.getElementById('grid_color_preview');
    let con_grid = document.querySelector('.con_grid');
    switch (x) {
        case 'grid':
            a.style.opacity = '1';
            img_col.style.opacity = '0.3';
            grid_view.style.cssText = 'display:block;visibility:visible;';
            container.style.cssText = 'display:none;visibility:hidden';
            con_grid.style.cssText = 'display:block;visibility:visible;';
            ma_to_vi_p.innerText = 'Grid view';
            showGridView();
            showClickedColor('red');
            break;
        case 'col':
            a.style.opacity = '1';
            img_grid.style.opacity = '0.3';
            grid_view.style.cssText = 'display:none;visibility:hidden;';
            container.style.cssText = 'display:grid;visibility:visible';
            grid_color_preview.style.cssText = 'display:none;visibility:hidden;';
            con_grid.style.cssText = 'display:none;visibility:hidden';
            ma_to_vi_p.innerText = 'Column view';
            break;
        default:
            break;
    }
}
var gridCreated = false ;
function showGridView() {
    if( !gridCreated ){
        let grid_view = document.querySelector('.grid-view');
        grid_view.style.cssText = 'display:block;visibility:visible;';
        for (let index = 0; index < colorNames.length; index++) {
            if( (index >= 10 && index <= 15) || index == 17 ){
                grid_view.innerHTML += `
                    <div class="colors-grid" style="background-color:
                    ${col_colors[index]};"
                    onmouseover="expand(this,'over',${index})" 
                    onmouseout="expand(this,'out',${index})"
                    onclick="showClickedColor('${colorNames[index]}')">
                    <h4 class="fo-black">${colorNames[index].toUpperCase()}</h4></div>
                `;
            }else{
                grid_view.innerHTML += `
                    <div class="colors-grid" style="background-color:
                    ${col_colors[index]};"
                    onmouseover="expand(this,'over',${index})" 
                    onmouseout="expand(this,'out',${index})"
                    onclick="showClickedColor('${colorNames[index]}')">
                    <h4 class="fo-white">${colorNames[index].toUpperCase()}</h4></div>
                `;
            }
        }
        gridCreated = true;
    }
    
}
function showClickedColor(cName) {
    let grid_color_preview = document.getElementById('grid_color_preview');
    let colorCodes = colors[cName];
    grid_color_preview.innerHTML = ``;
    grid_color_preview.style.cssText = 'display:grid;visibility:visible;';
    let fontColors = fontColorsForRows[cName];
    for (let i = 0; i < colorCodes.length; i++) {
        if( fontColors[i] === 1 ){
            grid_color_preview.innerHTML += `
            <div id="gcp_${cName}_${color_names[i]}" 
                style="background-color:${colorCodes[i]}"
                onclick="copyColorToClipboard('${colorCodes[i]}')">
                <p class="fo-white cp_p">${color_names[i]}</p>
                <p class="fo-white cp_p">${colorCodes[i]}</p>
            </div>
            `;
        }else{
            grid_color_preview.innerHTML += `
            <div id="gcp_${cName}_${color_names[i]}" 
                style="background-color:${colorCodes[i]}"
                onclick="copyColorToClipboard('${colorCodes[i]}')">
                <p class="fo-black cp_p">${color_names[i]}</p>
                <p class="fo-black cp_p">${colorCodes[i]}</p>
            </div>
            `;
        }
    }
}


function expand(x,y,i) {
    if (y === 'over') {
        if ( i < 6 ) {
            overOutlooper(0,6,147.2)
            x.style.width = '300px'
        }else if( i >= 6 && i < 12 ){
            overOutlooper(6,12,147.2)
            x.style.width = '300px'
        }else if( i >= 12 && i < 18 ){
            overOutlooper(12,18,147.2)
            x.style.width = '300px'
        }else{
            x.style.width = '300px'
        }
    }
    else{
        if ( i < 6 ) {
            overOutlooper(0,6,172.6)
        }else if( i >= 6 && i < 12 ){
            overOutlooper(6,12,172.6)
        }else if( i >= 12 && i < 18 ){
            overOutlooper(12,18,172.6)
        }else{
            x.style.width = '172.6px'
        }
    }
}
function overOutlooper(b,c,d) {
    let grids = document.querySelectorAll('.colors-grid');
    for (let index = b; index < c; index++) {
        grids[index].style.width = `${d}px`;
    }
}
