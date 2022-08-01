<template>
    <div class="case-desgin">
        <div class="row">
            <div class=" d-md-flex justify-content-center">
                    <div class="check-container d-flex align-items-center   m-3" v-for="(value,key) in lang[local].select" :key="key">
                        <Checkbox  v-model="data.lab.removableProsthetic.caseDesign.select[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                    </div>
            
        
            </div>  
        </div>
        <div class="child d-flex justify-content-center flex-wrap" v-if="type=='CHILD'">
            <div class="lower-thooth tooth">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 152 97.567">
                    <g id="Group_428" data-name="Group 428" transform="translate(-29 -212)">
                        <g id="Group_426" data-name="Group 426" transform="translate(-78.454 77.45)">
                        <path @click="handleTooth('E')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('E')}" fill="none" style="pointer-events: bounding-box; cursor: pointer;" id="Path_597" data-name="Path 597" d="M198.5,154.983c.193,5.13,5.764,11.921,13.028,11.5,8.568-.492,11.011-10.527,11.29-14.061a4.33,4.33,0,0,0-.695-3.239c-1.581-2.012-5.154-1.781-11.064-1.326-6.447.5-9.82.8-11.557,3.226A6.045,6.045,0,0,0,198.5,154.983Z" transform="translate(-37.705)"  stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('F')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('F')}"  id="Path_598" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 598" d="M248.852,149.7c1.387-1.774,4.336-1.868,7.818-1.98,1.527-.049,13.34-.427,15.667,4.847,2.28,5.168-5.056,14.61-12.462,14.36C251.437,166.644,245.6,153.866,248.852,149.7Z" transform="translate(-61 -0.078)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('G')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('G')}" id="Path_599" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 599" d="M295.263,160.851c-2.146.927-2.666,3.49-3.341,6.817-.764,3.768-1.574,7.762.8,9.557,2.5,1.889,7,.178,10.823-1.278,3.274-1.246,5.552-2.113,6.146-4.018,1.03-3.3-3.872-6.9-5.411-8.035C302.442,162.542,298.336,159.523,295.263,160.851Z" transform="translate(-81.355 -6.72)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('H')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('H')}" id="Path_600" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 600" d="M322.57,187.046c-2.724.417-4.4,3.416-5.612,5.6-1.138,2.043-3.654,6.559-1.4,9.435,2.139,2.735,7.212,2.228,10.021,1.948s6.589-.657,7.95-2.861C336.29,196.7,328.208,186.184,322.57,187.046Z" transform="translate(-92.428 -20.437)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('I')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('I')}" id="Path_601" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 601" d="M343.84,231.84c-2.451-5.825-1.257-8.068-3.608-9.557-2.318-1.468-5.5-.569-9.888.67-4.342,1.226-9.593,2.709-10.555,6.1-.6,2.118,1.11,2.732,2.739,7.9,1.789,5.675.51,7.423,2.405,8.888,2.22,1.716,5.846.766,12.026-.853,6.005-1.573,9.69-2.539,10.489-5.026C348.111,237.894,346.041,237.07,343.84,231.84Z" transform="translate(-94.791 -38.325)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('I')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('I')}" id="Path_602" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 602" d="M347.356,244.448a21.328,21.328,0,0,1-6.481,2.922,22.346,22.346,0,0,1-5.946.731" transform="translate(-101.982 -50.203)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('I')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('I')}" id="Path_603" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 603" d="M340.993,236.742a17.351,17.351,0,0,1,3.426,6.441,16.371,16.371,0,0,1,.382,7.134" transform="translate(-104.838 -46.21)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('J')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('J')}" id="Path_604" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 604" d="M353.074,284.494c-.872-6.188.871-8.11-1.028-10.063-1.872-1.925-5.2-1.737-9.781-1.478-4.537.257-10.024.567-11.838,3.654-1.134,1.93.37,2.894.613,8.267.267,5.9-1.429,7.322.033,9.154,1.712,2.145,5.482,2,11.906,1.759,6.243-.236,10.074-.381,11.5-2.626C355.655,291.3,353.856,290.05,353.074,284.494Z" transform="translate(-99.663 -64.888)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('J')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('J')}"  id="Path_605" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 605" d="M354.911,296.9a22.284,22.284,0,0,1-13.021.874" transform="translate(-105.261 -77.381)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('J')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('J')}" id="Path_606" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 606" d="M351.392,285.3a16.432,16.432,0,0,1,.181,14.01" transform="translate(-109.737 -71.368)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('C')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('C')}" id="Path_607" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 607" d="M144.38,203.643c1.356,1.777,4.216,1.824,7.929,1.885,4.2.069,8.662.142,10.216-2.288,1.635-2.557-.954-6.318-3.158-9.518-1.886-2.739-3.2-4.644-5.357-4.866-3.741-.385-6.839,4.611-7.812,6.181C145.034,196.914,142.439,201.1,144.38,203.643Z" transform="translate(-11.884 -21.39)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('D')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('D')}" id="Path_608" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 608" d="M165.314,171.723c.9,2.381,4.419,3.391,6.984,4.126,2.4.688,7.7,2.209,10.445-.286,2.61-2.371,1.23-6.848.466-9.327s-1.792-5.814-4.4-6.677C173.512,157.809,163.456,166.8,165.314,171.723Z" transform="translate(-21.969 -6.107)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('A')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('A')}"  id="Path_609" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 609" d="M119.4,284.4c.054,6.238-1.927,7.957-.3,10.1,1.606,2.116,4.933,2.29,9.518,2.531,4.538.239,10.026.527,12.232-2.34,1.379-1.792.012-2.913.475-8.275.509-5.885,2.379-7.114,1.168-9.092-1.419-2.316-5.18-2.585-11.591-3.043-6.229-.445-10.052-.718-11.757,1.357C117.726,277.369,119.348,278.8,119.4,284.4Z" transform="translate(0 -65.5)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('A')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('A')}"  id="Path_610" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 610" d="M127.274,295.856a22.383,22.383,0,0,1,7.194-.666,22.139,22.139,0,0,1,5.85,1.215" transform="translate(-4.155 -76.464)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('A')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('A')}" id="Path_611" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 611" d="M140.145,294.983a16.416,16.416,0,0,1-.73-7.126,16.863,16.863,0,0,1,2.386-6.8" transform="translate(-9.821 -69.168)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('B')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('B')}" id="Path_612" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 612" d="M128.681,231.935c-1.565,6.073-3.936,7.317-2.91,9.752,1.012,2.4,4.2,3.287,8.592,4.508,4.348,1.209,9.606,2.671,12.493.359,1.8-1.444.767-2.828,2.607-7.938,2.02-5.61,4.156-6.4,3.492-8.584-.778-2.556-4.363-3.627-10.474-5.451-5.938-1.773-9.582-2.862-11.776-1.212C128.881,224.74,130.086,226.481,128.681,231.935Z" transform="translate(-3.329 -38.861)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('B')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('B')}" id="Path_613" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 613" d="M138.093,244.652a22.371,22.371,0,0,1,7.162.9,21.272,21.272,0,0,1,5.369,2.44" transform="translate(-9.252 -50.301)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('B')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('B')}" id="Path_614" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 614" d="M148.156,246.669a16.442,16.442,0,0,1,1.139-7.082,17.765,17.765,0,0,1,4.083-6.1" transform="translate(-13.978 -44.526)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        </g>
                        <text id="Small" transform="translate(77 281)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">(Upper Arch)</tspan></text>
                        <text id="A" transform="translate(29 301)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">A</tspan></text>
                        <text id="B" transform="translate(33 275)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">B</tspan></text>
                        <text id="C" transform="translate(46 251)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">C</tspan></text>
                        <text id="D" transform="translate(60 233)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">D</tspan></text>
                        <text id="E" transform="translate(91 223)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">E</tspan></text>
                        <text id="F" transform="translate(116 223)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">F</tspan></text>
                        <text id="G" transform="translate(145 233)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">G</tspan></text>
                        <text id="H" transform="translate(163 251)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">H</tspan></text>
                        <text id="I" transform="translate(173 271)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">I</tspan></text>
                        <text id="J" transform="translate(177 301)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">J</tspan></text>
                    </g>
                </svg>
            </div>
            <div class="upper-thooth tooth">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 156 97.446">
                    <g id="Group_429" data-name="Group 429" transform="translate(-180 -228.554)">
                        <g id="Group_427" data-name="Group 427" transform="translate(71.146 -140.356)">
                        <path @click="handleTooth('O')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('O')}" id="Path_615" style="pointer-events: bounding-box; cursor: pointer;"  data-name="Path 615" d="M269.963,516.117c-.1-5.139-4.755-11.985-10.951-11.628-7.308.422-9.521,10.451-9.806,13.989a4.923,4.923,0,0,0,.55,3.249c1.321,2.028,4.369,1.826,9.41,1.419,5.5-.444,8.378-.723,9.891-3.136A6.921,6.921,0,0,0,269.963,516.117Z" transform="translate(-61.067 -69.911)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('P')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('P')}" id="Path_616" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 616" d="M226.983,520.653c-1.205,1.765-3.72,1.835-6.689,1.918-1.3.037-11.373.318-13.287-4.982-1.876-5.194,4.5-14.589,10.808-14.277C225,503.668,229.811,516.512,226.983,520.653Z" transform="translate(-41.214 -69.305)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('Q')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('Q')}" id="Path_617" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 617" d="M185.709,510.975c2.3-.907,2.885-3.468,3.647-6.793.864-3.765,1.779-7.757-.728-9.579-2.64-1.917-7.45-.25-11.544,1.169-3.5,1.214-5.941,2.059-6.6,3.96-1.14,3.294,4.033,6.952,5.658,8.1C178.085,509.208,182.419,512.273,185.709,510.975Z" transform="translate(-24.231 -64.355)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('R')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('R')}" id="Path_618" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 618" d="M156.439,484.743c2.908-.389,4.726-3.376,6.051-5.55,1.239-2.034,3.978-6.531,1.618-9.434-2.243-2.76-7.652-2.305-10.647-2.053s-7.026.591-8.505,2.783C141.953,474.939,150.423,485.549,156.439,484.743Z" transform="translate(-12.089 -50.786)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('S')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('S')}" id="Path_619" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 619" d="M126.525,431.149c2.534,5.858,1.232,8.092,3.716,9.607,2.449,1.494,5.852.626,10.54-.569,4.641-1.184,10.253-2.615,11.323-6,.669-2.115-1.146-2.747-2.813-7.94-1.83-5.7-.445-7.438-2.445-8.925-2.341-1.741-6.216-.827-12.819.731-6.417,1.513-10.354,2.443-11.237,4.925C122.055,425.043,124.249,425.888,126.525,431.149Z" transform="translate(-1.958 -24.328)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('S')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('S')}" id="Path_620" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 620" d="M137.29,441.758a23.5,23.5,0,0,1,6.941-2.859,25.234,25.234,0,0,1,6.342-.67" transform="translate(-8.8 -35.632)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('S')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('S')}" id="Path_621" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 621" d="M151.984,438.833a17.018,17.018,0,0,1-3.564-6.485,15.433,15.433,0,0,1-.314-7.147" transform="translate(-13.723 -28.894)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('T')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('T')}" id="Path_622" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 622" d="M120.265,380.648c.847,6.2-1.034,8.112.962,10.087,1.968,1.947,5.513,1.793,10.4,1.58,4.836-.211,10.684-.466,12.657-3.538,1.233-1.92-.356-2.9-.545-8.285-.206-5.91,1.619-7.318.086-9.167-1.8-2.166-5.812-2.062-12.658-1.885-6.653.173-10.735.278-12.278,2.512C117.6,373.81,119.5,375.076,120.265,380.648Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('T')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('T')}" id="Path_623" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 623" d="M129.365,391.52a24.957,24.957,0,0,1,7.533-1.374,25.246,25.246,0,0,1,6.348.632" transform="translate(-5.097 -10.752)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('T')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('T')}" id="Path_624" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 624" d="M143.742,389.734a15.57,15.57,0,0,1-.008-14.031" transform="translate(-11.032 -3.284)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('M')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('M')}" id="Path_625" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 625" d="M330.378,470.669c-1.421-1.793-4.467-1.87-8.42-1.969-4.477-.112-9.224-.231-10.911,2.186-1.775,2.545.934,6.336,3.239,9.564,1.973,2.762,3.345,4.683,5.642,4.928,3.98.424,7.345-4.548,8.4-6.11C329.593,477.4,332.412,473.236,330.378,470.669Z" transform="translate(-89.707 -51.376)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('N')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('N')}" id="Path_626" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 626" d="M308.034,501.376c-.926-2.393-4.662-3.44-7.383-4.2-2.545-.714-8.173-2.291-11.129.179-2.811,2.348-1.4,6.845-.619,9.335s1.832,5.84,4.6,6.731C299.12,515.225,309.949,506.328,308.034,501.376Z" transform="translate(-79.137 -65.534)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('K')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('K')}" id="Path_627" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 627" d="M352.91,383.2c.025-6.247,2.158-7.948.451-10.113-1.683-2.135-5.224-2.344-10.1-2.633-4.831-.286-10.672-.631-13.06,2.218-1.492,1.78-.051,2.917-.615,8.281-.619,5.888-2.627,7.1-1.363,9.093,1.48,2.334,5.483,2.641,12.305,3.166,6.629.509,10.7.822,12.54-1.238C354.6,390.258,352.888,388.808,352.91,383.2Z" transform="translate(-97.806 -0.471)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('K')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('K')}" id="Path_628" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 628" d="M355.315,395.234a25.326,25.326,0,0,1-7.671.594,24.837,24.837,0,0,1-6.214-1.277" transform="translate(-104.168 -13.036)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('K')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('K')}" id="Path_629" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 629" d="M351.536,382.487a15.5,15.5,0,0,1,.683,7.144,16.3,16.3,0,0,1-2.631,6.788" transform="translate(-107.98 -6.794)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('L')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('L')}" id="Path_630" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 630" d="M339.58,433.367c1.747-6.066,4.289-7.287,3.227-9.736-1.046-2.415-4.429-3.335-9.092-4.6-4.615-1.255-10.2-2.773-13.3-.487-1.941,1.428-.854,2.824-2.881,7.922-2.225,5.6-4.51,6.367-3.832,8.559.794,2.567,4.6,3.676,11.083,5.566,6.3,1.837,10.168,2.964,12.527,1.335C339.273,440.57,338.012,438.814,339.58,433.367Z" transform="translate(-91.158 -24.837)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth('L')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('L')}"  id="Path_631" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 631" d="M343.769,444.08a25.241,25.241,0,0,1-7.617-.976,23.265,23.265,0,0,1-5.686-2.5" transform="translate(-99.046 -36.865)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth('L')" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes('L')}"  id="Path_632" style="pointer-events: bounding-box; cursor: pointer;" data-name="Path 632" d="M339.93,431.524a15.6,15.6,0,0,1-1.306,7.08,17.9,17.9,0,0,1-4.429,6.063" transform="translate(-100.788 -32.166)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        </g>
                        <text id="Small" transform="translate(226 281)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">(Lower Arch)</tspan></text>
                        <text id="K" transform="translate(330 243)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">K</tspan></text>
                        <text id="L" transform="translate(323 271)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">L</tspan></text>
                        <text id="M" transform="translate(312 294)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">M</tspan></text>
                        <text id="N" transform="translate(295 313)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">N</tspan></text>
                        <text id="O" transform="translate(266 323)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">O</tspan></text>
                        <text id="P" transform="translate(244 323)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P</tspan></text>
                        <text id="Q" transform="translate(216 313)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Q</tspan></text>
                        <text id="R" transform="translate(196 294)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">R</tspan></text>
                        <text id="S" transform="translate(186 271)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">S</tspan></text>
                        <text id="T" transform="translate(180 243)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">T</tspan></text>
                    </g>
                </svg>
            </div>
        </div>
        <div  class="adult d-flex justify-content-center flex-wrap" v-if="type=='ADULT'">
            <div class="lower-thooth tooth">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 175 105.502">
                    <g id="Group_444" data-name="Group 444" transform="translate(-88 -209)">
                        <g id="Group_442" data-name="Group 442">
                        <text id="Small" transform="translate(135 281)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">(Upper Arch)</tspan></text>
                        <g id="Group_439" data-name="Group 439" transform="translate(-575.267 50.477)">
                            <g id="Group_438" data-name="Group 438" transform="translate(670.267 169.523)">
                            <path @click="handleTooth(9)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(9)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_633" data-name="Path 633" d="M832.385,172.845c-1.408-2.372-7.693-2.581-9.32-2.635-2.875-.1-7-.232-8.479,1.388-1.147,1.256-.082,2.887,1.873,5.882a9.673,9.673,0,0,0,4.141,4.1,9.166,9.166,0,0,0,5.521,1.124c1.671-.322,2.527-1.382,4.24-3.5a8.86,8.86,0,0,0,2.131-4.169C832.654,173.966,832.735,173.435,832.385,172.845Z" transform="translate(-739.259 -169.937)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(10)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(10)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_634" data-name="Path 634" d="M852.1,183.189c1.2-.292,2.575.085,4.437.595a16,16,0,0,1,5.028,2.379c1.612,1.083,2.418,1.624,2.662,2.379.6,1.864-1.9,3.937-4.437,4.891-2.446.922-6.089,1.242-8.578.066C846.238,191.152,848.477,184.072,852.1,183.189Z" transform="translate(-755.67 -178.355)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(11)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(11)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_635" data-name="Path 635" d="M884.465,202.148a7.011,7.011,0,0,0-2.366-.264c-2.756-.1-4.134-.15-4.24-.132-2.595.427-3.837,2.686-4.832,4.494a6.741,6.741,0,0,0-.986,3.767,3.323,3.323,0,0,0,1.183,2.776,7.578,7.578,0,0,0,4.043,1.19,12.489,12.489,0,0,0,7.1-1.785,6.538,6.538,0,0,0,3.057-2.975c.278-.742-.209-2.059-1.183-4.693C885.76,203.233,885.428,202.529,884.465,202.148Z" transform="translate(-767.038 -190.507)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(12)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(12)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_636" data-name="Path 636" d="M898.708,233.4c-1.606-1.937-5.236-3.023-7.789-2.512-1.8.36-1.716,1.243-4.141,1.917-2.537.7-3.486-.023-4.93.661-2.136,1.012-2.359,3.693-1.282,5.552a4.411,4.411,0,0,0,2.268,2.115c1.664.683,2.843.116,6.8.463,2.61.228,2.545.514,3.648.4a7.71,7.71,0,0,0,5.62-3.966A3.982,3.982,0,0,0,898.708,233.4Z" transform="translate(-770.829 -209.401)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(13)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(13)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_637" data-name="Path 637" d="M910.927,265.786c-1.467-2.274-5.764-2.66-6.408-2.71a15.528,15.528,0,0,0-8.381,2.049,7.058,7.058,0,0,0-3.155,2.247,3.425,3.425,0,0,0,.887,4.561,8.794,8.794,0,0,0,4.24,1.652,17.616,17.616,0,0,0,4.338.066,17.437,17.437,0,0,0,2.563-.33,8.608,8.608,0,0,0,5.718-3.9A3.433,3.433,0,0,0,910.927,265.786Z" transform="translate(-776.837 -230.416)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(14)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(14)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_638" data-name="Path 638" d="M920.123,294.256a10.727,10.727,0,0,0-1.972-1.124,16.276,16.276,0,0,0-4.733-1.917,11.669,11.669,0,0,0-6.408,1.256c-1.2.531-.939.618-4.832,3.5-2.425,1.8-3.069,2.167-3.451,3.106a3.237,3.237,0,0,0,.3,3.04c.607.892,1.2.86,2.662,2.115,1.557,1.34,1.166,1.624,2.465,2.71.766.64,2.7,2.256,4.93,2.181,1.243-.042,1.739-.58,3.845-1.784,4.033-2.306,4.664-1.732,6.212-3.04,2.034-1.719,2.142-3.719,2.268-6.015C921.552,295.59,920.533,294.6,920.123,294.256Z" transform="translate(-779.722 -248.708)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(15)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(15)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_639" data-name="Path 639" d="M928.673,345.352c.3-1.138.734-1.239.986-2.049.605-1.941-.858-4.678-3.944-5.882-2.979-1.163-6.231-.412-8.873.2a18.111,18.111,0,0,0-8.381,4.3,6.624,6.624,0,0,0-2.268,2.974,5.04,5.04,0,0,0,.888,4.164,8.338,8.338,0,0,0,5.028,4.164c1.832.545,3.431.415,6.113.2,2.388-.193,5.082-.411,7.493-1.785.929-.53,2.395-1.364,2.859-2.71C929,347.688,928.222,347.077,928.673,345.352Z" transform="translate(-783.343 -278.455)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(16)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(16)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_640" data-name="Path 640" d="M932.3,383.371a7.4,7.4,0,0,0-3.451-1.322c-1.969-.232-2.854.447-6.113.925-3.173.466-2.989-.082-5.226.4a12.792,12.792,0,0,0-6.113,3.04,5.639,5.639,0,0,0-.986,1.256c-1.625,2.922,1.017,5.779,1.479,6.279a10.553,10.553,0,0,0,3.845,2.644c4.454,1.857,11.428,1.811,15.086-.793,1.713-1.22,2.075-2.556,2.761-5.089C934.179,388.51,935.037,385.339,932.3,383.371Z" transform="translate(-785.197 -307.882)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(8)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(8)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_641" data-name="Path 641" d="M777.413,172.21c1.408-2.372,7.693-2.581,9.32-2.635,2.875-.1,7-.232,8.479,1.388,1.147,1.257.082,2.887-1.873,5.882a9.671,9.671,0,0,1-4.141,4.1,9.167,9.167,0,0,1-5.522,1.124c-1.67-.322-2.527-1.382-4.24-3.5a8.85,8.85,0,0,1-2.131-4.169C777.144,173.332,777.063,172.8,777.413,172.21Z" transform="translate(-721.539 -169.523)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(7)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(7)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_642" data-name="Path 642" d="M760.036,182.554c-1.2-.292-2.575.085-4.437.595a16,16,0,0,0-5.028,2.379c-1.612,1.083-2.418,1.624-2.662,2.379-.6,1.864,1.9,3.937,4.437,4.891,2.447.922,6.089,1.242,8.578.066C765.894,190.517,763.655,183.437,760.036,182.554Z" transform="translate(-707.462 -177.942)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(6)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(6)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_643" data-name="Path 643" d="M728.141,201.513a7.023,7.023,0,0,1,2.367-.264c2.756-.1,4.134-.15,4.24-.132,2.595.427,3.837,2.686,4.831,4.494a6.738,6.738,0,0,1,.986,3.767,3.323,3.323,0,0,1-1.183,2.776,7.575,7.575,0,0,1-4.043,1.19,12.486,12.486,0,0,1-7.1-1.785,6.536,6.536,0,0,1-3.057-2.974c-.278-.742.209-2.059,1.183-4.693C726.845,202.6,727.178,201.894,728.141,201.513Z" transform="translate(-696.569 -190.093)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(5)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(5)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_644" data-name="Path 644" d="M710.062,232.767c1.607-1.937,5.237-3.023,7.789-2.512,1.8.36,1.716,1.243,4.141,1.917,2.537.7,3.486-.023,4.93.661,2.136,1.012,2.359,3.694,1.282,5.552a4.407,4.407,0,0,1-2.267,2.115c-1.664.683-2.843.116-6.8.463-2.611.228-2.545.514-3.648.4a7.713,7.713,0,0,1-5.62-3.966A3.984,3.984,0,0,1,710.062,232.767Z" transform="translate(-688.941 -208.988)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(4)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(4)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_645" data-name="Path 645" d="M698.5,265.151c1.467-2.274,5.764-2.66,6.409-2.71a15.529,15.529,0,0,1,8.381,2.049,7.058,7.058,0,0,1,3.155,2.247,3.425,3.425,0,0,1-.888,4.561,8.791,8.791,0,0,1-4.24,1.652,17.617,17.617,0,0,1-4.338.066,17.391,17.391,0,0,1-2.563-.33,8.61,8.61,0,0,1-5.719-3.9A3.434,3.434,0,0,1,698.5,265.151Z" transform="translate(-683.588 -230.003)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(3)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(3)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_646" data-name="Path 646" d="M685.6,293.622a10.709,10.709,0,0,1,1.972-1.124,16.283,16.283,0,0,1,4.732-1.917,11.675,11.675,0,0,1,6.409,1.256c1.2.531.939.618,4.831,3.5,2.425,1.8,3.07,2.167,3.451,3.106a3.237,3.237,0,0,1-.3,3.04c-.607.892-1.2.86-2.662,2.115-1.558,1.34-1.167,1.624-2.465,2.71-.766.64-2.7,2.257-4.93,2.181-1.243-.042-1.739-.58-3.845-1.784-4.033-2.306-4.664-1.732-6.212-3.04-2.034-1.719-2.143-3.719-2.268-6.015C684.168,294.956,685.188,293.967,685.6,293.622Z" transform="translate(-676.998 -248.295)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(2)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(2)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_647" data-name="Path 647" d="M676.286,344.717c-.3-1.138-.733-1.239-.986-2.049-.605-1.941.858-4.678,3.944-5.882,2.979-1.163,6.232-.412,8.873.2a18.118,18.118,0,0,1,8.381,4.3,6.621,6.621,0,0,1,2.267,2.975,5.038,5.038,0,0,1-.887,4.164,8.338,8.338,0,0,1-5.028,4.164c-1.832.545-3.431.415-6.113.2-2.388-.193-5.083-.411-7.493-1.785-.929-.53-2.4-1.364-2.859-2.71C675.959,347.053,676.738,346.442,676.286,344.717Z" transform="translate(-672.617 -278.041)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            <path @click="handleTooth(1)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(1)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_648" data-name="Path 648" d="M672.161,382.736a7.4,7.4,0,0,1,3.451-1.322c1.969-.232,2.854.447,6.113.925,3.173.465,2.989-.083,5.226.4a12.789,12.789,0,0,1,6.113,3.04,5.625,5.625,0,0,1,.986,1.256c1.624,2.922-1.017,5.779-1.479,6.279a10.552,10.552,0,0,1-3.846,2.644c-4.453,1.857-11.427,1.811-15.085-.793-1.713-1.22-2.075-2.556-2.761-5.089C670.284,387.875,669.426,384.7,672.161,382.736Z" transform="translate(-670.267 -307.468)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                            <path @click="handleTooth(2)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(2)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_649" data-name="Path 649" d="M699.23,360.65a33.191,33.191,0,0,1-7.491.429,31.773,31.773,0,0,1-6.069-.923" transform="translate(-7.388 -124.133)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(2)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(2)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_650" data-name="Path 650" d="M695.731,348.092a8.5,8.5,0,0,1,.667,5.164,10.316,10.316,0,0,1-2.57,4.906" transform="translate(-11.301 -116.277)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(1)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(1)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_651" data-name="Path 651" d="M696.9,405.66a33.193,33.193,0,0,1-7.491.429,31.743,31.743,0,0,1-6.069-.923" transform="translate(-6.271 -153.441)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(1)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(1)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_652" data-name="Path 652" d="M693.4,393.1a8.5,8.5,0,0,1,.667,5.164,10.315,10.315,0,0,1-2.57,4.906" transform="translate(-10.184 -145.586)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(3)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(3)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_653" data-name="Path 653" d="M709.864,314.051a33.175,33.175,0,0,1-7.491.429,31.739,31.739,0,0,1-6.069-.923" transform="translate(-12.488 -93.789)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(3)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(3)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_654" data-name="Path 654" d="M706.364,301.494a8.5,8.5,0,0,1,.668,5.164,10.315,10.315,0,0,1-2.57,4.906" transform="translate(-16.401 -85.934)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(14)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(14)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_655" data-name="Path 655" d="M920.985,313.683a33.186,33.186,0,0,1-7.491.429,31.765,31.765,0,0,1-6.069-.923" transform="translate(-113.748 -93.55)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(14)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(14)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_656" data-name="Path 656" d="M917.485,301.125a8.5,8.5,0,0,1,.668,5.164,10.316,10.316,0,0,1-2.57,4.906" transform="translate(-117.66 -85.694)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(15)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(15)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_657" data-name="Path 657" d="M929.327,360.7a33.172,33.172,0,0,1-7.491.429,31.739,31.739,0,0,1-6.069-.923" transform="translate(-117.749 -124.168)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(15)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(15)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_658" data-name="Path 658" d="M925.828,348.148a8.5,8.5,0,0,1,.667,5.164,10.315,10.315,0,0,1-2.57,4.906" transform="translate(-121.661 -116.313)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(16)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(16)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_659" data-name="Path 659" d="M933.947,404.318a33.168,33.168,0,0,1-7.491.429,31.743,31.743,0,0,1-6.07-.923" transform="translate(-119.964 -152.568)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                            <path @click="handleTooth(16)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(16)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_660" data-name="Path 660" d="M930.448,391.761a8.5,8.5,0,0,1,.667,5.164,10.318,10.318,0,0,1-2.57,4.907" transform="translate(-123.877 -144.713)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        </g>
                        </g>
                        <text id="_1" data-name="1" transform="translate(91 305)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">1</tspan></text>
                        <text id="_2" data-name="2" transform="translate(93 285)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">2</tspan></text>
                        <text id="_3" data-name="3" transform="translate(97 270)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">3</tspan></text>
                        <text id="_4" data-name="4" transform="translate(103 257)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">4</tspan></text>
                        <text id="_5" data-name="5" transform="translate(109 247)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">5</tspan></text>
                        <text id="_6" data-name="6" transform="translate(120 235)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">6</tspan></text>
                        <text id="_7" data-name="7" transform="translate(135 225)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">7</tspan></text>
                        <text id="_8" data-name="8" transform="translate(158 218)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">8</tspan></text>
                        <text id="_9" data-name="9" transform="translate(181 218)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-2.156" y="0">9</tspan></text>
                        <text id="_10" data-name="10" transform="translate(201 223)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">10</tspan></text>
                        <text id="_11" data-name="11" transform="translate(219 235)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">11</tspan></text>
                        <text id="_12" data-name="12" transform="translate(229 247)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">12</tspan></text>
                        <text id="_13" data-name="13" transform="translate(235 257)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">13</tspan></text>
                        <text id="_14" data-name="14" transform="translate(243 270)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">14</tspan></text>
                        <text id="_15" data-name="15" transform="translate(247 285)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">15</tspan></text>
                        <text id="_16" data-name="16" transform="translate(250 305)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">16</tspan></text>
                    </g>
                </svg>

            </div >
            <div class="upper-thooth tooth">
                <svg xmlns="http://www.w3.org/2000/svg"  width="300" height="300" viewBox="0 0 175 105.502">
                <g id="Group_446" data-name="Group 446" transform="translate(-316 -219.493)">
                    <g id="Group_443" data-name="Group 443">
                    <text id="Small" transform="translate(372 275)" fill="#205072" font-size="10" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">(Lower Arch)</tspan></text>
                    <g id="Group_441" data-name="Group 441" transform="translate(-341.767 -222.195)">
                        <g id="Group_440" data-name="Group 440" transform="translate(670.267 442.194)">
                        <path @click="handleTooth(28)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(28)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_661" data-name="Path 661" d="M718.232,615.082a9.43,9.43,0,0,0,8.333,2.542c1.868-.445,1.73-1.412,4.239-2.218,2.625-.844,3.665-.071,5.142-.862,2.185-1.169,2.261-4.119,1.021-6.129a4.923,4.923,0,0,0-2.508-2.259c-1.788-.7-2.994-.049-7.176-.32-2.756-.178-2.7-.494-3.857-.334-3.922.543-5.6,4.344-5.673,4.508A4.545,4.545,0,0,0,718.232,615.082Z" transform="translate(-692.771 -542.907)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(29)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(29)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_662" data-name="Path 662" d="M704.838,583.9c1.675,2.455,6.213,2.76,6.894,2.8a15.461,15.461,0,0,0,8.687-2.48c1.461-.806,2.559-1.411,3.184-2.553a3.924,3.924,0,0,0-1.2-4.981,9.251,9.251,0,0,0-4.552-1.7,17.747,17.747,0,0,0-4.563.047,17.371,17.371,0,0,0-2.674.433,8.736,8.736,0,0,0-5.78,4.438A3.9,3.9,0,0,0,704.838,583.9Z" transform="translate(-686.573 -524.027)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(30)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(30)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_663" data-name="Path 663" d="M690.013,542.97a11.568,11.568,0,0,0,2.138,1.179c2.456,1.194,3.684,1.79,5.086,1.973a11.636,11.636,0,0,0,6.661-1.555c1.225-.616.95-.7,4.871-3.978,2.443-2.04,3.1-2.463,3.444-3.5a3.714,3.714,0,0,0-.49-3.329c-.69-.962-1.315-.911-2.922-2.248-1.716-1.427-1.321-1.75-2.75-2.906-.842-.682-2.968-2.4-5.309-2.258-1.3.08-1.793.685-3.936,2.065-4.1,2.642-4.8,2.029-6.349,3.508-2.036,1.943-2.033,4.141-2.029,6.664C688.432,541.545,689.562,542.6,690.013,542.97Z" transform="translate(-678.978 -494.098)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(31)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(31)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_664" data-name="Path 664" d="M678.175,493.756c-.247,1.258-.7,1.38-.916,2.276-.522,2.147,1.177,5.111,4.49,6.347,3.2,1.194,6.573.28,9.314-.462a18.17,18.17,0,0,0,8.554-4.947,6.979,6.979,0,0,0,2.208-3.327,5.826,5.826,0,0,0-1.178-4.545,9.243,9.243,0,0,0-5.529-4.432c-1.958-.547-3.63-.361-6.435-.049-2.5.278-5.317.592-7.77,2.165-.946.607-2.436,1.563-2.845,3.053C677.694,491.2,678.548,491.85,678.175,493.756Z" transform="translate(-673.576 -468.179)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(32)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(32)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_665" data-name="Path 665" d="M672.5,458.39a7.825,7.825,0,0,0,3.7,1.356c2.083.2,2.973-.57,6.369-1.184,3.308-.6,3.146.008,5.468-.58a12.789,12.789,0,0,0,6.245-3.506,5.914,5.914,0,0,0,.962-1.405c1.535-3.251-1.408-6.315-1.923-6.851a11.565,11.565,0,0,0-4.2-2.8c-4.789-1.915-12.115-1.672-15.806,1.287-1.729,1.386-2.031,2.863-2.6,5.662C670.221,452.8,669.506,456.305,672.5,458.39Z" transform="translate(-670.267 -442.195)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(25)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(25)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_666" data-name="Path 666" d="M793.636,650.052a3.963,3.963,0,0,0-2.592,1.306c-.839.877-.412,1.335-1.14,2.468-.829,1.289-1.694,1.182-2.178,2.105-.828,1.582.625,3.966,2.593,4.355,1.281.254,1.7-.552,4.147-.726,2.512-.179,3.231.589,4.458.145a3.233,3.233,0,0,0,1.659-4.065c-.226-.687-1.156-1.508-3.007-3.121C794.946,650.227,794.245,650.038,793.636,650.052Z" transform="translate(-726.489 -570.416)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(26)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(26)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_667" data-name="Path 667" d="M771.813,641.84a3.838,3.838,0,0,0-2.177.363c-1.236.549-1.331,1.242-2.281,2.25-1.328,1.409-2.249,1.228-3.11,2.178-1.313,1.446-1.243,4.14,1.14,5.735,2.87,1.92,7.864,1.422,9.85-.363a3.48,3.48,0,0,0,1.037-3.267c-.375-1.625-1.829-1.717-2.178-3.557-.185-.974.1-1.59-.622-2.4A2.778,2.778,0,0,0,771.813,641.84Z" transform="translate(-714.931 -565.326)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(27)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(27)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_668" data-name="Path 668" d="M750.992,630.913c.854.545.492.973,1.451,3.194.9,2.08,1.426,2.188,1.348,3.121-.1,1.245-1.131,2.148-2.074,2.977a8.452,8.452,0,0,1-3.94,2.25c-2.209.514-5.209.263-6.843-1.016-.856-.669-1.089-1.632-1.555-3.557a6.78,6.78,0,0,1-.311-2.977,4.554,4.554,0,0,1,2.177-3.557c1.283-.753,2.719-.831,4.77-.944C748.207,630.285,749.864,630.195,750.992,630.913Z" transform="translate(-703.234 -558.246)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(21)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(21)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_669" data-name="Path 669" d="M889.66,615.291a9.431,9.431,0,0,1-8.333,2.541c-1.868-.445-1.73-1.411-4.239-2.218-2.625-.843-3.665-.071-5.142-.861-2.185-1.169-2.261-4.119-1.02-6.129a4.925,4.925,0,0,1,2.508-2.259c1.788-.7,2.994-.049,7.176-.32,2.757-.179,2.7-.494,3.857-.334,3.922.543,5.6,4.343,5.673,4.508A4.544,4.544,0,0,1,889.66,615.291Z" transform="translate(-766.121 -543.036)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(20)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(20)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_670" data-name="Path 670" d="M903.791,584.1c-1.676,2.456-6.213,2.76-6.894,2.8a15.462,15.462,0,0,1-8.687-2.48c-1.461-.805-2.559-1.41-3.184-2.553a3.925,3.925,0,0,1,1.2-4.981,9.251,9.251,0,0,1,4.552-1.7,17.729,17.729,0,0,1,4.563.047,17.371,17.371,0,0,1,2.675.433,8.735,8.735,0,0,1,5.78,4.438A3.9,3.9,0,0,1,903.791,584.1Z" transform="translate(-773.056 -524.155)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(19)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(19)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_671" data-name="Path 671" d="M914.754,543.178a11.6,11.6,0,0,1-2.138,1.178c-2.456,1.194-3.684,1.791-5.086,1.973a11.635,11.635,0,0,1-6.661-1.555c-1.225-.615-.951-.7-4.871-3.978-2.443-2.04-3.1-2.463-3.443-3.5a3.715,3.715,0,0,1,.49-3.329c.69-.962,1.315-.911,2.922-2.248,1.716-1.428,1.321-1.75,2.75-2.906.842-.682,2.968-2.4,5.309-2.258,1.3.08,1.793.685,3.936,2.065,4.1,2.642,4.8,2.029,6.349,3.508,2.036,1.942,2.033,4.141,2.029,6.664C916.334,541.753,915.2,542.81,914.754,543.178Z" transform="translate(-776.789 -494.227)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(18)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(18)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_672" data-name="Path 672" d="M925.856,493.964c.247,1.257.7,1.38.916,2.276.521,2.147-1.177,5.111-4.49,6.347-3.2,1.194-6.573.28-9.314-.462a18.172,18.172,0,0,1-8.554-4.947,6.979,6.979,0,0,1-2.208-3.327,5.83,5.83,0,0,1,1.177-4.546,9.244,9.244,0,0,1,5.53-4.431c1.958-.547,3.63-.361,6.435-.049,2.5.278,5.317.592,7.769,2.165.946.607,2.437,1.564,2.845,3.053C926.337,491.41,925.483,492.059,925.856,493.964Z" transform="translate(-781.455 -468.308)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(17)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(17)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_673" data-name="Path 673" d="M930.944,458.6a7.824,7.824,0,0,1-3.7,1.356c-2.083.2-2.973-.569-6.369-1.184-3.308-.6-3.146.008-5.468-.579a12.791,12.791,0,0,1-6.245-3.506,5.912,5.912,0,0,1-.963-1.406c-1.535-3.251,1.409-6.314,1.924-6.85a11.554,11.554,0,0,1,4.2-2.8c4.79-1.916,12.115-1.672,15.806,1.287,1.729,1.386,2.03,2.863,2.6,5.662C933.218,453.011,933.933,456.514,930.944,458.6Z" transform="translate(-784.173 -442.323)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(24)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(24)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_674" data-name="Path 674" d="M821,650.26a3.96,3.96,0,0,1,2.592,1.307c.84.877.413,1.335,1.141,2.468.828,1.289,1.693,1.181,2.177,2.1.829,1.583-.625,3.966-2.592,4.356-1.281.254-1.7-.552-4.148-.726-2.512-.179-3.231.589-4.458.145a3.233,3.233,0,0,1-1.659-4.065c.226-.687,1.156-1.508,3.007-3.122C819.689,650.435,820.39,650.247,821,650.26Z" transform="translate(-739.147 -570.544)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(23)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(23)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_675" data-name="Path 675" d="M843.115,642.049a3.836,3.836,0,0,1,2.177.363c1.236.549,1.331,1.242,2.281,2.251,1.328,1.409,2.248,1.228,3.11,2.178,1.312,1.446,1.243,4.14-1.141,5.735-2.87,1.92-7.864,1.423-9.849-.363a3.479,3.479,0,0,1-1.037-3.267c.375-1.625,1.829-1.717,2.177-3.557.185-.975-.1-1.59.622-2.4A2.776,2.776,0,0,1,843.115,642.049Z" transform="translate(-750.996 -565.454)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path @click="handleTooth(22)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(22)}" style="pointer-events: bounding-box; cursor: pointer;" id="Path_676" data-name="Path 676" d="M862.237,631.122c-.854.544-.492.973-1.452,3.194-.9,2.08-1.425,2.188-1.348,3.122.1,1.245,1.131,2.148,2.074,2.976a8.453,8.453,0,0,0,3.94,2.25c2.209.514,5.208.263,6.843-1.016.855-.669,1.089-1.632,1.556-3.557a6.784,6.784,0,0,0,.311-2.976,4.554,4.554,0,0,0-2.178-3.557c-1.282-.753-2.719-.831-4.769-.944C865.022,630.493,863.364,630.4,862.237,631.122Z" transform="translate(-760.994 -558.375)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        </g>
                        <path @click="handleTooth(32)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(32)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_677" data-name="Path 677" d="M696.9,463.154a30.259,30.259,0,0,1-7.491.471,29.13,29.13,0,0,1-6.069-1.014" transform="translate(-6.271 -12.594)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(32)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(32)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_678" data-name="Path 678" d="M693.4,450.547a10.162,10.162,0,0,1,.667,5.671,11.709,11.709,0,0,1-2.57,5.389" transform="translate(-10.184 -5.152)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(31)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(31)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_679" data-name="Path 679" d="M701.436,506.445a30.28,30.28,0,0,1-7.491.471,29.131,29.131,0,0,1-6.069-1.014" transform="translate(-8.446 -39.3)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(31)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(31)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_680" data-name="Path 680" d="M697.936,493.839a10.16,10.16,0,0,1,.667,5.671,11.708,11.708,0,0,1-2.57,5.389" transform="translate(-12.358 -31.858)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(30)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(30)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_681" data-name="Path 681" d="M712.193,550.256a30.268,30.268,0,0,1-7.491.471,29.128,29.128,0,0,1-6.069-1.014" transform="translate(-13.605 -66.325)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(30)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(30)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_682" data-name="Path 682" d="M708.693,537.65a10.158,10.158,0,0,1,.668,5.671,11.709,11.709,0,0,1-2.57,5.389" transform="translate(-17.518 -58.884)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(17)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(17)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_683" data-name="Path 683" d="M936.667,464.024a30.272,30.272,0,0,1-7.491.471,29.147,29.147,0,0,1-6.069-1.014" transform="translate(-121.269 -13.131)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(17)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(17)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_684" data-name="Path 684" d="M933.167,451.417a10.16,10.16,0,0,1,.668,5.671,11.712,11.712,0,0,1-2.57,5.389" transform="translate(-125.182 -5.689)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(18)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(18)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_685" data-name="Path 685" d="M927,505.1a30.259,30.259,0,0,1-7.491.471,29.127,29.127,0,0,1-6.069-1.014" transform="translate(-116.631 -38.472)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(18)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(18)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_686" data-name="Path 686" d="M923.5,492.5a10.162,10.162,0,0,1,.667,5.671,11.711,11.711,0,0,1-2.57,5.389" transform="translate(-120.544 -31.03)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(19)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(19)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_687" data-name="Path 687" d="M919.856,554.2a30.269,30.269,0,0,1-7.491.471,29.154,29.154,0,0,1-6.069-1.014" transform="translate(-113.205 -68.761)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                        <path @click="handleTooth(19)" :class="{'selected':this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(19)}"  style="pointer-events: bounding-box; cursor: pointer;" id="Path_688" data-name="Path 688" d="M916.355,541.6a10.161,10.161,0,0,1,.667,5.671,11.707,11.707,0,0,1-2.57,5.389" transform="translate(-117.118 -61.319)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="1"/>
                    </g>
                    </g>
                    <text id="_17" data-name="17" transform="translate(486 233)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">17</tspan></text>
                    <text id="_18" data-name="18" transform="translate(482 252)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">18</tspan></text>
                    <text id="_19" data-name="19" transform="translate(476 270)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">19</tspan></text>
                    <text id="_20" data-name="20" transform="translate(468 285)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">20</tspan></text>
                    <text id="_21" data-name="21" transform="translate(459 296)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">21</tspan></text>
                    <text id="_22" data-name="22" transform="translate(444 310)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">22</tspan></text>
                    <text id="_23" data-name="23" transform="translate(425 317)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">23</tspan></text>
                    <text id="_24" data-name="24" transform="translate(410 320)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">24</tspan></text>
                    <text id="_25" data-name="25" transform="translate(397 320)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">25</tspan></text>
                    <text id="_26" data-name="26" transform="translate(380 318)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">26</tspan></text>
                    <text id="_27" data-name="27" transform="translate(362 310)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">27</tspan></text>
                    <text id="_28" data-name="28" transform="translate(348 297)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">28</tspan></text>
                    <text id="_29" data-name="29" transform="translate(341 285)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">29</tspan></text>
                    <text id="_30" data-name="30" transform="translate(332 270)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">30</tspan></text>
                    <text id="_31" data-name="31" transform="translate(326 252)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">31</tspan></text>
                    <text id="_32" data-name="32" transform="translate(321 233)" fill="#205072" font-size="8" font-family="SegoeUI, Segoe UI"><tspan x="-4.313" y="0">32</tspan></text>
                </g>
                </svg>



            </div>

        </div>
        <div class="acrylic-shade">
            <h4>{{lang[local].acrylicShade.acrylicShade}}</h4>
            <div class="row">
                <div class="col-xl-6">
                    <div class="row">
                        <div class="col-md-6" v-for="(value,key) in lang[local].acrylicShade.select" :key="key">
                            <div class="check-container d-flex align-items-center   m-3" >
                                <Checkbox  v-model="data.lab.removableProsthetic.caseDesign.acrylicShade.select[key]" :binary="true" />
                                <span class="mx-1">{{value}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="row">
                        <div class="col-xl-6">
                        <div class="d-flex align-items-start m-2">
                            <label class="mx-2 text-center"> 
                                <span>{{lang[local].acrylicShade.toothShade}}</span>
                                <small class="d-block text-center text-small">({{lang[local].acrylicShade.required}})</small>
                            </label>
                            <div >
                                <InputText 
                                type="text"
                                @change="$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$touch()"
                                v-model="data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade"
                                :placeholder="lang[local].acrylicShade.toothShade"
                                class="px-2"
                                :class="{
                                    'border-error':
                                    $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$invalid && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$dirty,
                                }"
                                ></InputText>
                                <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.notContainsHtmlTags && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].acrylicShade.toothShade) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.minLen && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].acrylicShade.toothShade,
                                            $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.maxLen && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].acrylicShade.toothShade,
                                            $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothShade.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="d-flex align-items-start m-2">
                                    <label class="mx-2 text-center" > 
                                        <span>{{lang[local].acrylicShade.shadeGuide}}</span>
                                        <small class="d-block text-center text-small">({{lang[local].acrylicShade.vitaIsDefault}})</small>
                                    </label>
                                    <div >
                                        <InputText 
                                        type="text"
                                        @change="$v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$touch()"
                                        v-model="data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide"
                                        :placeholder="lang[local].acrylicShade.shadeGuide"
                                        class="px-2"
                                        :class="{
                                            'border-error':
                                            $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$invalid && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$dirty,
                                        }"
                                        ></InputText>
                                        <div class="errors">
                                            <small
                                                class="text-error my-2"
                                                v-if="
                                                    !$v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.notContainsHtmlTags && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$dirty
                                                "
                                                >
                                                {{ errors.inputError(lang[local].acrylicShade.shadeGuide) }}
                                                </small>
                                                <small
                                                class="text-error my-2"
                                                v-else-if="!$v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.minLen && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$dirty"
                                                >
                                                {{
                                                    errors.minLengthError(
                                                    lang[local].acrylicShade.shadeGuide,
                                                    $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$params.minLen.min
                                                    )
                                                }}
                                                </small>
                                                <small
                                                class="text-error my-2"
                                                v-else-if="!$v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.maxLen && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$dirty"
                                                >
                                                {{
                                                    errors.maxLengthError(
                                                    lang[local].acrylicShade.shadeGuide,
                                                    $v.data.lab.removableProsthetic.caseDesign.acrylicShade.shadeGuide.$params.maxLen.max
                                                    )
                                                }}
                                                </small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="d-flex align-items-start m-2">
                                    <label class="mx-2 text-center" > 
                                        <span>{{lang[local].acrylicShade.toothMouldNo}}</span>
                                    </label>
                                    <div >
                                        <InputText 
                                        type="text"
                                        @change="$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$touch()"
                                        v-model="data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo"
                                        :placeholder="lang[local].acrylicShade.toothMouldNo"
                                        class="px-2"
                                        :class="{
                                            'border-error':
                                            $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$invalid && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$dirty,
                                        }"
                                        ></InputText>
                                        <div class="errors">
                                            <small
                                                class="text-error my-2"
                                                v-if="
                                                    !$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.notContainsHtmlTags && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$dirty
                                                "
                                                >
                                                {{ errors.inputError(lang[local].acrylicShade.toothMouldNo) }}
                                                </small>
                                                <small
                                                class="text-error my-2"
                                                v-else-if="!$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.minLen && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$dirty"
                                                >
                                                {{
                                                    errors.minLengthError(
                                                    lang[local].acrylicShade.toothMouldNo,
                                                    $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$params.minLen.min
                                                    )
                                                }}
                                                </small>
                                                <small
                                                class="text-error my-2"
                                                v-else-if="!$v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.maxLen && $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$dirty"
                                                >
                                                {{
                                                    errors.maxLengthError(
                                                    lang[local].acrylicShade.toothMouldNo,
                                                    $v.data.lab.removableProsthetic.caseDesign.acrylicShade.toothMouldNo.$params.maxLen.max
                                                    )
                                                }}
                                                </small>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
import {imageTypeError ,imageSizeError} from "../../../helpers/errors";
import { maxLength, minLength } from "vuelidate/lib/validators";
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../../../helpers/errors";
import { notContainsHtmlTags } from "../../../helpers/customValidators";
export default {
    components:{Checkbox,InputText},
    props:["data","type"],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    select:{
                        followDesign:"Follow the doctor's design",
                        bestDesign:"Best design for fit and function"
                    },
                    acrylicShade:{
                        acrylicShade:"Acrylic Shade",
                        toothShade:"Tooth Shade",
                        shadeGuide:"Shade Guide Used",
                        vitaIsDefault:"Vita is default",
                        toothMouldNo:"Tooth Mould No.",
                        required:"REQUIRED",
                        select:{
                            lucitone:"Lucitone*",
                            lightMeharry:"Light Meharry",
                            lightPink:"Light Pink (Luc 199L)",
                            meharry:"Meharry (Luc 199D)"
                        }
                    }
                },
                ar:{
                    select:{
                        followDesign:"Follow the doctor's design",
                        bestDesign:"Best design for fit and function"
                    },
                    acrylicShade:{
                        acrylicShade:"Acrylic Shade",
                        toothShade:"Tooth Shade",
                        shadeGuide:"Shade Guide Used",
                        vitaIsDefault:"Vita is default",
                        toothMouldNo:"Tooth Mould No.",
                        required:"REQUIRED",
                        select:{
                            lucitone:"Lucitone*",
                            lightMeharry:"Light Meharry",
                            lightPink:"Light Pink (Luc 199L)",
                            meharry:"Meharry (Luc 199D)"
                        }
                    }
                }
            },
            errors:{
                imageTypeError,
                imageSizeError,
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    watch:{
        type(){
            this.data.lab.removableProsthetic.caseDesign.selectedTooths = []
        },
        "data.lab.removableProsthetic.caseDesign.acrylicShade":{
            handler(){
                this.$store.dispatch("setToothLabCaseDesignIsValid",this.$v.data.lab.removableProsthetic.caseDesign.acrylicShade.$invalid );
            },
            deep:true
        },
        
    },
    methods:{
        handleTooth(val){
            if(this.data.lab.removableProsthetic.caseDesign.selectedTooths.includes(val)){
                this.data.lab.removableProsthetic.caseDesign.selectedTooths.splice(this.data.lab.removableProsthetic.caseDesign.selectedTooths.indexOf(val),1)
            }else{
                this.data.lab.removableProsthetic.caseDesign.selectedTooths.push(val);
            }
        }
    },
    validations:{
        data:{
            lab:{
                removableProsthetic:{
                    caseDesign:{
                        acrylicShade: {
                            toothShade:{
                                minLen: minLength(2),
                                maxLen: maxLength(100),
                                notContainsHtmlTags(val) {
                                if (!val) return true;
                                return notContainsHtmlTags(val);
                                },
                            },
                            shadeGuide:{
                                minLen: minLength(2),
                                maxLen: maxLength(100),
                                notContainsHtmlTags(val) {
                                if (!val) return true;
                                return notContainsHtmlTags(val);
                                },
                            },
                            toothMouldNo:{
                                minLen: minLength(2),
                                maxLen: maxLength(100),
                                notContainsHtmlTags(val) {
                                if (!val) return true;
                                return notContainsHtmlTags(val);
                                },
                            },
                        },
                    }
                }
            }
        },
    },
    
}
</script>
<style lang="scss" scoped>
.case-desgin{
    // .tooth{
    //     margin: 30px;

    // }
    .upper-thooth{
        margin-top: 20px;
    }
    .selected{
        fill:$tradmark-color ;
    }
    label{
        font-size: 10px;
        font-weight: 1000;
        // width: 30%;
    }
}

</style>