<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 15 57.85 113.68"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_S_all">
        <g id="CHID_DENT_S">
          <g id="CHID_DENT_CROWN_S">
            <path
              id="CHID_DENT_CROWN_S1"
              v-if="selectedTooth.dent.crown1"
              :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
              d="M281.64,260c-3-.66-6.06-.52-12.12-.23s-9.17.48-10.54,2.24c-2.18,2.79-1.32,7.32-.5,11.64s1.79,9.41,5.23,11.63c2.09,1.35,3.65.75,12.41-.45,6.08-.82,9.11-1.24,10.55-1.23,9.74.09,12.06,4.9,16.95,2.69,5.29-2.4,7-10.05,7.39-11.75.48-2.12,2.08-9.26-1.28-12.86s-9.66-1.87-12.52-1.12c-2.47.65-2.31,1.09-4.33,1.45C288.58,262.75,286.45,261,281.64,260Z"
              transform="translate(-254.91 -226.77)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.25"
            />
            <path
              id="CHID_DENT_CROWN_S2"
              v-if="selectedTooth.dent.crown2"
              :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
              d="M285.58,259.85c0-1.05,4.14-1.85,5-2a11.92,11.92,0,0,1,6.31.34c1,.35,1.85.65,1.87,1.12,0,1-3.44,2.25-6.7,2.35C289.05,261.72,285.6,260.8,285.58,259.85Z"
              transform="translate(-254.91 -226.77)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.25"
            />
          </g>
          <path
            id="CHID_DENT_ROOT_S"
            v-if="selectedTooth.dent.root1"
            d="M263.71,286.7c-1.88,2.8,1.11,5.88.49,15.44a64.12,64.12,0,0,1-1.38,8.5c-1.51,7.53-2.74,10.08-3.94,17.23-.9,5.36-1.33,8.06-.4,8.72,1.93,1.37,8.93-4.49,13-12.3,2.49-4.76,3.24-9,7.79-14.66,2.71-3.37,3.79-3.53,4.43-3.35,3,.84,3,11.13,3,13.64,0,4.69-.08,9.12-2.66,12.87-2.05,3-4.46,3.74-4.24,4.36.35,1,6.62.3,11.83-3.69a24.19,24.19,0,0,0,7.58-10.63c1.34-3.5.43-3.34,2.27-12.58.67-3.4,1.48-6.9,2.37-12.59.78-5.08.88-7.1-.2-8.73-.39-.59-1.1-1.36-5.33-2.67a36,36,0,0,0-8.57-1.91c-3.88-.33-5.69.2-10.34.67C267.76,286.19,265.32,284.3,263.71,286.7Z"
            transform="translate(-254.91 -226.77)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.25"
          />
        </g>
        <path
          id="CHID_DENT_fiiling-caries_class_I_S"
          v-if="selectedTooth.filling_caries_class_i"
          d="M294.56,272.48H279.14a4.42,4.42,0,0,1-4.23-4.58v-6.17a2.51,2.51,0,0,1-.08-.85,1.85,1.85,0,0,1,.1-.52c.25-.56,1.5-.45,2-.4,2.11.21,3.16.32,3.87.47,1.1.24,1.88.46,3.2.84a18,18,0,0,1,2.3.75,6.32,6.32,0,0,0,1.57.65,11.81,11.81,0,0,0,1.72,0c.84,0,.86.07,1.65.07a8,8,0,0,0,1.48-.09,8.61,8.61,0,0,0,1.31-.37c.31-.11.93-.31,1.73-.66l1.31-.56a6.86,6.86,0,0,1,1-.28c.47-.09.59-.07.67,0,.24.23,0,.86,0,.91v6.17A4.41,4.41,0,0,1,294.56,272.48Z"
          transform="translate(-254.91 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.42"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_S"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M309.31,275.83h-7.92a2.69,2.69,0,0,1-2.5-2.84V262.3a2.25,2.25,0,0,1,.33-1.51c.43-.56,1.12-.53,2.5-.55.67,0,1.73,0,3.07-.1l2.85.57a4.69,4.69,0,0,1,1.89,1.31,5.58,5.58,0,0,1,1.23,2.42c.18,1.43.35,2.86.53,4.29-.11,1.5-.24,2.82-.36,3.93a5,5,0,0,1-.5,1.86A3.63,3.63,0,0,1,309.31,275.83Z"
          transform="translate(-254.91 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.42"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_S"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M274.93,260.36c-.49-.9-2.18-.2-5.21.08-3.2.3-4.16-.22-7.42.45a4.69,4.69,0,0,0-2.89,1.33,6.11,6.11,0,0,0-1.33,3.63,17.66,17.66,0,0,0,.31,2.84c.2,1.51.31,2.28.47,3.37a17.86,17.86,0,0,0,.63,3.37c.9,1.3,2.94.6,6,.27,6.21-.66,8.07,1.12,9.3-.53.61-.83.07-1.33-.16-8.34a22,22,0,0,1,.08-4.35C274.93,261.23,275.17,260.8,274.93,260.36Z"
          transform="translate(-254.91 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.42"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_S"
          v-if="selectedTooth.filling_caries_class_v"
          x="25.99"
          y="51.26"
          width="9.68"
          height="3.07"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.42"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_S"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M267.45,276l-8-.46h0c-.29-1.54-.59-3.09-.88-4.64h0l8.84-.65a2.11,2.11,0,0,1,2,2.23v1.29A2.11,2.11,0,0,1,267.45,276Z"
          transform="translate(-254.91 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.42"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_S"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M310,275.09l-7.79.93a2.11,2.11,0,0,1-2-2.23V272.5a2.11,2.11,0,0,1,2-2.23l8.76.83h0c-.32,1.33-.64,2.66-1,4Z"
          transform="translate(-254.91 -226.77)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.42"
          opacity="0.79"
        />
        <g id="CHID_DENT_EndoS">
          <path
            id="CHID_DENT_Endo1_S"
            v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
            :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
            :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
            d="M267.62,286.67a20.79,20.79,0,0,1,2.75-.48c1.34-.17,2.37-.23,2.65-.24,1.46-.07,1.8,0,3.39,0,2.54,0,2.65-.29,3-.12,2.23,1.19.59,15.53-6.46,29.83-4.59,9.28-11.09,17.83-12.61,16.84-1.75-1.12,6.94-12.27,6.14-29.35C266.25,298.74,265.12,287.64,267.62,286.67Z"
            transform="translate(-254.91 -226.77)"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Endo2_S"
            v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
            :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
            :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
            d="M286.16,284.87c.49-.37,1.49-.25,3.5,0a36.63,36.63,0,0,1,6.35,1.44,24.17,24.17,0,0,1,3.61,1.21c1.1.82,3,3.41-.53,23.21-1.93,10.67-3.22,13.95-5.09,17-2.29,3.69-6,7.83-7.31,7-1.58-1,2.9-7.78,2.65-18.77-.09-3.75-1.08-9.11-3.07-19.84C285.36,291.16,284.35,286.24,286.16,284.87Z"
            transform="translate(-254.91 -226.77)"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
        </g>
        <g id="CHID_DENT_Post_S">
          <g id="CHID_DENT_Post_S_1" v-if="selectedTooth.post.post1">
            <path
              d="M294.33,282.62l-9.62,2c-.36.08-.69-.23-.75-.69l-.42-3.26a.84.84,0,0,1,.54-1l9.62-2c.35-.07.69.23.75.69l.42,3.26A.83.83,0,0,1,294.33,282.62Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M295.07,322.22l-1.21.25c-.63.14-1.23-.41-1.33-1.21l-4.73-36.58a1.47,1.47,0,0,1,.95-1.7l1.22-.25c.63-.14,1.22.41,1.33,1.21L296,320.52A1.47,1.47,0,0,1,295.07,322.22Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M293.74,290.76l-6.59,1.39a.34.34,0,0,1-.36-.34l-.14-1.05a.4.4,0,0,1,.26-.47l6.59-1.39a.35.35,0,0,1,.37.34l.13,1.05A.41.41,0,0,1,293.74,290.76Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M294.56,296.32l-6.62,1.39a.33.33,0,0,1-.35-.32l-.14-1.1a.39.39,0,0,1,.25-.44l6.62-1.39c.17,0,.32.1.35.31l.14,1.11A.38.38,0,0,1,294.56,296.32Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M295.17,301.91l-6.57,1.39c-.18,0-.34-.12-.37-.35l-.14-1a.41.41,0,0,1,.27-.48l6.57-1.38c.18,0,.35.11.38.34l.13,1A.41.41,0,0,1,295.17,301.91Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M296,307.47l-6.63,1.39a.32.32,0,0,1-.34-.31l-.15-1.12a.39.39,0,0,1,.25-.43l6.63-1.39c.16,0,.31.1.34.31l.15,1.11A.4.4,0,0,1,296,307.47Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M296.74,313l-6.65,1.4c-.16,0-.3-.11-.33-.31l-.15-1.13a.37.37,0,0,1,.24-.42l6.61-1.39c.18,0,.35.12.38.35l.14,1.08A.37.37,0,0,1,296.74,313Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M297.34,318.64,290.76,320c-.17,0-.34-.11-.37-.34l-.13-1a.42.42,0,0,1,.26-.48l6.58-1.38c.18,0,.34.12.37.34l.14,1A.42.42,0,0,1,297.34,318.64Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="42.02"
              y1="86.12"
              x2="35.64"
              y2="93.2"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="41.77"
              y1="84.47"
              x2="35.4"
              y2="91.57"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="41.32"
              y1="80.49"
              x2="34.99"
              y2="87.62"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="41.08"
              y1="78.93"
              x2="34.77"
              y2="85.94"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="40.45"
              y1="75.01"
              x2="34.27"
              y2="82.04"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="40.25"
              y1="73.34"
              x2="34.03"
              y2="80.4"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="39.86"
              y1="69.37"
              x2="33.44"
              y2="76.44"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="39.61"
              y1="67.73"
              x2="33.27"
              y2="74.8"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="39.03"
              y1="63.83"
              x2="32.83"
              y2="70.89"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="38.8"
              y1="62.18"
              x2="32.63"
              y2="69.18"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M290.11,318.05"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M292.27,279l-6.56,1.38c-.7.15-1.36-.45-1.47-1.34l-.51-4a1.63,1.63,0,0,1,1-1.88l6.56-1.38c.7-.14,1.36.46,1.47,1.35l.51,4A1.61,1.61,0,0,1,292.27,279Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
          </g>
          <g id="CHID_DENT_Post_S_2" v-if="selectedTooth.post.post2">
            <path
              d="M282.63,285.08l-9.28-3.5a.8.8,0,0,1-.37-1l1-3.09a.71.71,0,0,1,.88-.54l9.28,3.5a.79.79,0,0,1,.37,1l-1,3.09A.72.72,0,0,1,282.63,285.08Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M266.45,320.17l-1.17-.45a1.4,1.4,0,0,1-.65-1.79L276,283.3a1.26,1.26,0,0,1,1.55-1l1.17.44a1.4,1.4,0,0,1,.65,1.79L268,319.2A1.27,1.27,0,0,1,266.45,320.17Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M278.65,291.88l-6.35-2.39a.39.39,0,0,1-.18-.5l.32-1a.35.35,0,0,1,.44-.26l6.35,2.39a.39.39,0,0,1,.18.5l-.33,1A.34.34,0,0,1,278.65,291.88Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M277,297.2l-6.39-2.41a.37.37,0,0,1-.17-.47l.35-1a.32.32,0,0,1,.4-.25l6.39,2.41a.36.36,0,0,1,.17.47l-.34,1A.33.33,0,0,1,277,297.2Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M275.17,302.44l-6.34-2.39a.4.4,0,0,1-.19-.51l.33-1a.35.35,0,0,1,.44-.27l6.34,2.39a.39.39,0,0,1,.18.5l-.32,1A.37.37,0,0,1,275.17,302.44Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M273.54,307.76l-6.4-2.42a.35.35,0,0,1-.17-.45l.35-1.06a.34.34,0,0,1,.4-.25l6.4,2.42a.36.36,0,0,1,.17.46l-.35,1.05A.32.32,0,0,1,273.54,307.76Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M271.81,313l-6.42-2.42a.36.36,0,0,1-.16-.45l.36-1.07a.31.31,0,0,1,.38-.24l6.38,2.4a.41.41,0,0,1,.18.52l-.33,1C272.13,313,272,313.1,271.81,313Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M270,318.27l-6.34-2.39a.38.38,0,0,1-.18-.5l.32-1a.37.37,0,0,1,.44-.27l6.34,2.39a.41.41,0,0,1,.19.51l-.33,1A.35.35,0,0,1,270,318.27Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="17.13"
              y1="86.24"
              x2="8.53"
              y2="88.95"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="17.61"
              y1="84.66"
              x2="9.01"
              y2="87.39"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="18.91"
              y1="80.92"
              x2="10.34"
              y2="83.7"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="19.36"
              y1="79.43"
              x2="10.85"
              y2="82.11"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="20.48"
              y1="75.65"
              x2="12.08"
              y2="78.42"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="21.01"
              y1="74.08"
              x2="12.57"
              y2="76.85"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="22.36"
              y1="70.39"
              x2="13.73"
              y2="73.06"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="22.83"
              y1="68.82"
              x2="14.27"
              y2="71.53"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="23.99"
              y1="65.08"
              x2="15.56"
              y2="67.87"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <line
              x1="24.49"
              y1="63.51"
              x2="16.11"
              y2="66.26"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M263.87,313.79"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
            <path
              d="M282.35,280.8,276,278.41a1.54,1.54,0,0,1-.72-2l1.23-3.75a1.42,1.42,0,0,1,1.73-1.07l6.32,2.39a1.54,1.54,0,0,1,.72,2l-1.23,3.75A1.42,1.42,0,0,1,282.35,280.8Z"
              transform="translate(-254.91 -226.77)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.42"
            />
          </g>
        </g>
        <g id="CHID_DENT_Ginfivitis_S">
          <path
            id="CHID_DENT_Right_Ginfivitis_S"
            v-if="selectedTooth.ginfivitis.right"
            d="M302.84,287.2c-.08.35.89.65,1.52,2.05a7.06,7.06,0,0,1,.44,3.19,37,37,0,0,1-.62,6.15c-.76,4.18-1.25,5-.8,5.7.69,1.12,3,1.09,4-.34,1.17-1.62-.23-3.64,0-9.23.15-3.73.86-4.91.08-6.27C306.26,286.34,303,286.59,302.84,287.2Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Left_Ginfivitis_S"
            v-if="selectedTooth.ginfivitis.left"
            d="M263.6,285.83c.09.22-.52.51-.9,1.48a4.9,4.9,0,0,0-.2,2.4c.2,1.93.45,2.8.7,4.33.38,2.32,0,1.67.4,5.58.12,1.15.22,1.81-.1,2.05-.48.37-1.67-.41-2.41-1.37-1.13-1.48-.72-2.81-1.2-6.49-.53-4.11-1.36-4.87-.7-6.15C260.23,285.62,263.41,285.37,263.6,285.83Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Right_periodontal_S"
            v-if="selectedTooth.periodontal.right"
            d="M302.84,287.2c-.08.35.89.65,1.52,2.05a7.06,7.06,0,0,1,.44,3.19,37,37,0,0,1-.62,6.15c-.76,4.18-1.25,5-.8,5.7.69,1.12,3,1.09,4-.34,1.17-1.62-.23-3.64,0-9.23.15-3.73.86-4.91.08-6.27C306.26,286.34,303,286.59,302.84,287.2Z"
            transform="translate(-254.91 -226.77)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Left_periodontal_S"
            v-if="selectedTooth.periodontal.left"
            d="M263.6,285.83c.09.22-.52.51-.9,1.48a4.9,4.9,0,0,0-.2,2.4c.2,1.93.45,2.8.7,4.33.38,2.32,0,1.67.4,5.58.12,1.15.22,1.81-.1,2.05-.48.37-1.67-.41-2.41-1.37-1.13-1.48-.72-2.81-1.2-6.49-.53-4.11-1.36-4.87-.7-6.15C260.23,285.62,263.41,285.37,263.6,285.83Z"
            transform="translate(-254.91 -226.77)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Right_perio_S"
            v-if="selectedTooth.perio.right"
            d="M302.84,287.2c-.08.35.89.65,1.52,2.05a7.06,7.06,0,0,1,.44,3.19,37,37,0,0,1-.62,6.15c-.76,4.18-1.25,5-.8,5.7.69,1.12,3,1.09,4-.34,1.17-1.62-.23-3.64,0-9.23.15-3.73.86-4.91.08-6.27C306.26,286.34,303,286.59,302.84,287.2Z"
            transform="translate(-254.91 -226.77)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Left_perio_S"
            v-if="selectedTooth.perio.left"
            d="M263.6,285.83c.09.22-.52.51-.9,1.48a4.9,4.9,0,0,0-.2,2.4c.2,1.93.45,2.8.7,4.33.38,2.32,0,1.67.4,5.58.12,1.15.22,1.81-.1,2.05-.48.37-1.67-.41-2.41-1.37-1.13-1.48-.72-2.81-1.2-6.49-.53-4.11-1.36-4.87-.7-6.15C260.23,285.62,263.41,285.37,263.6,285.83Z"
            transform="translate(-254.91 -226.77)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
        </g>
        <g id="CHID_DENT_Implant_S" v-if="selectedTooth.implant">
          <path
            d="M299.45,290.63l-30,.05c-1.11,0-2-.44-2-1l.07-3.95c0-.55.92-1,2-1l30-.05c1.11,0,2,.44,2,1l-.07,3.94C301.47,290.18,300.56,290.63,299.45,290.63Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M285.35,337.41h-3.8c-2,0-3.55-.78-3.54-1.75l.75-44.2c0-1,1.63-1.76,3.6-1.77h3.79c2,0,3.56.78,3.54,1.75l-.75,44.2C288.93,336.62,287.32,337.41,285.35,337.41Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M294.28,300.07l-20.55,0c-.55,0-1-.22-1-.48l0-1.27c0-.27.45-.49,1-.49l20.56,0c.55,0,1,.22,1,.49l0,1.27C295.28,299.85,294.83,300.07,294.28,300.07Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M294.5,306.81l-20.69,0c-.51,0-.92-.21-.92-.46l0-1.33c0-.25.42-.46.93-.46l20.69,0c.51,0,.92.2.92.46l0,1.33C295.43,306.6,295,306.81,294.5,306.81Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M294,313.54l-20.52,0c-.56,0-1-.22-1-.49l0-1.25c0-.28.46-.5,1-.5l20.53,0c.55,0,1,.22,1,.49l0,1.25C295.05,313.32,294.59,313.54,294,313.54Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M294.29,320.28l-20.72,0c-.5,0-.91-.2-.9-.45l0-1.34c0-.25.41-.45.92-.45l20.71,0c.51,0,.91.2.91.45l0,1.35C295.2,320.08,294.79,320.28,294.29,320.28Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M294.2,327l-20.77,0c-.49,0-.88-.2-.88-.44l0-1.37c0-.24.4-.44.89-.44l20.63,0c.56,0,1,.22,1,.5l0,1.31C295.09,326.82,294.69,327,294.2,327Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M293.7,333.75l-20.53,0c-.56,0-1-.22-1-.49l0-1.26c0-.27.46-.49,1-.49l20.53,0c.55,0,1,.22,1,.49l0,1.26C294.71,333.53,294.26,333.75,293.7,333.75Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="39.91"
            y1="100.11"
            x2="17.63"
            y2="106.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="39.83"
            y1="98.11"
            x2="17.56"
            y2="104.93"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="40.11"
            y1="93.31"
            x2="17.97"
            y2="100.18"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="40.03"
            y1="91.43"
            x2="17.97"
            y2="98.15"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="39.76"
            y1="86.66"
            x2="18.09"
            y2="93.44"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="39.82"
            y1="84.65"
            x2="18.03"
            y2="91.44"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="40.28"
            y1="79.88"
            x2="17.87"
            y2="86.64"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="40.2"
            y1="77.89"
            x2="18.02"
            y2="84.67"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="40.06"
            y1="73.16"
            x2="18.32"
            y2="79.96"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <line
            x1="40.04"
            y1="71.16"
            x2="18.42"
            y2="77.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M272,331.3"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            d="M294.67,285.9l-20.47,0c-2.18,0-3.94-.86-3.92-1.94l.08-4.78c0-1.08,1.8-1.95,4-1.95l20.48,0c2.18,0,3.93.87,3.91,1.95l-.08,4.78C298.63,285,296.85,285.9,294.67,285.9Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
        </g>
        <g id="CHID_DENT_Periapical_S">
          <path
            id="CHID_DENT_Periapical_S_1"
            v-if="selectedTooth.periapical.periapical1"
            d="M286,322.65c.33.18.11,1.37-.23,3.29a18.87,18.87,0,0,1-1,4.06,8.73,8.73,0,0,1-2.16,3.61c-1,.91-2.17,1.2-3.12,2.58a1.41,1.41,0,0,0-.34,1.09c.12.51.71.73,1,.84a4.23,4.23,0,0,0,2.72-.06c2.66-.86,4-1.29,4.55-1.55a20.52,20.52,0,0,0,5.11-3A19.74,19.74,0,0,0,296,329.8c1.83-2.53,2.39-4.37,2.66-4.25s.08,2.85-1.19,5.29c-1.17,2.25-2.75,3.38-5.05,5a26.61,26.61,0,0,1-6.59,3.35,9.25,9.25,0,0,1-4.54.9c-.91-.1-2.78-.3-3.35-1.68s.41-3.07.79-3.74c1.57-2.75,3.42-2.16,4.37-4.38.8-1.84-.25-2.77.74-5.09C284.46,323.71,285.62,322.42,286,322.65Z"
            transform="translate(-254.91 -226.77)"
            fill="#be1622"
            stroke="#be1622"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
          <path
            id="CHID_DENT_Periapical_S_2"
            v-if="selectedTooth.periapical.periapical2"
            d="M273,322.58c-.39-.12-.89,2.08-2.66,5a26.93,26.93,0,0,1-3.58,4.51c-1,1-.37.27-4.38,3.87a4.24,4.24,0,0,1-2.66,1.48,2.41,2.41,0,0,1-2.05-.9,3.76,3.76,0,0,1-.23-2.71c1.06-6,0-2.84,1.31-8.57.66-3,1-4.44,1.36-5.81.48-1.7.76-2.49.63-2.57s-1.88,2.33-3,5.22a38.94,38.94,0,0,0-1.48,5.48c-1.24,5.39-1.13,6.44-1,7s.57,3.82,2.57,4.79c1.32.64,2.63,0,4.66-1a22.87,22.87,0,0,0,7.73-6.71,13.33,13.33,0,0,0,2.83-5.67C273.26,324.45,273.31,322.69,273,322.58Z"
            transform="translate(-254.91 -226.77)"
            fill="#be1622"
            stroke="#be1622"
            stroke-miterlimit="10"
            stroke-width="0.42"
          />
        </g>
        <path
          id="CHID_DENT_Occlusal_Veneer_S"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M307.62,261.3a15.63,15.63,0,0,0-4.78-.58,22.6,22.6,0,0,0-6.46,1.37,15.58,15.58,0,0,1-3.24,1.05,14.21,14.21,0,0,1-3.62,0,18.65,18.65,0,0,1-3.68-.65c-1.85-.52-2.11-.92-3.62-1.35a15.11,15.11,0,0,0-4.11-.43c-2.81-.06-4.75,0-7.45.06a45,45,0,0,0-6.57.34,28.15,28.15,0,0,0-4.5,1.13,1.88,1.88,0,0,0-.44.31,2.33,2.33,0,0,0-.6,1.6l-.27,3.37a1.77,1.77,0,0,0,.56,1.78.76.76,0,0,0,.44.07h50.47a1.42,1.42,0,0,0,1.33-1.5c-.31-1.49-.62-3-.92-4.46a3.41,3.41,0,0,0-1.05-1.55A2.64,2.64,0,0,0,307.62,261.3Z"
          transform="translate(-254.91 -226.77)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.25"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_S"
          v-if="selectedTooth.crown.onlay"
          d="M307.62,261.3a15.63,15.63,0,0,0-4.78-.58,22.6,22.6,0,0,0-6.46,1.37,15.58,15.58,0,0,1-3.24,1.05,14.21,14.21,0,0,1-3.62,0,18.65,18.65,0,0,1-3.68-.65c-1.85-.52-2.11-.92-3.62-1.35a15.11,15.11,0,0,0-4.11-.43c-2.81-.06-4.75,0-7.45.06a45,45,0,0,0-6.57.34,28.15,28.15,0,0,0-4.5,1.13,1.88,1.88,0,0,0-.44.31,2.33,2.33,0,0,0-.6,1.6l-.27,3.37a1.77,1.77,0,0,0,.56,1.78.76.76,0,0,0,.44.07h50.47a1.42,1.42,0,0,0,1.33-1.5c-.31-1.49-.62-3-.92-4.46a3.41,3.41,0,0,0-1.05-1.55A2.64,2.64,0,0,0,307.62,261.3Z"
          transform="translate(-254.91 -226.77)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.25"
        />
        <g id="CHID_DENT_Endo_Crown_S">
          <path
            id="CHID_DENT_Endo_Crown_1S"
            v-if="selectedTooth.endo_crown.crown1"
            d="M281.09,276.26l9.33-.24,1.45-6.3a.24.24,0,0,0-.21-.3H279.51a.24.24,0,0,0-.21.31Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.25"
          />
          <path
            id="CHID_DENT_Endo_Crown_2S"
            v-if="selectedTooth.endo_crown.crown2"
            d="M307.64,261.15a15.63,15.63,0,0,0-4.78-.58A22.18,22.18,0,0,0,296.4,262a16,16,0,0,1-3.25,1,14.16,14.16,0,0,1-3.61,0,18.65,18.65,0,0,1-3.68-.65c-1.85-.53-2.11-.93-3.62-1.35a15.11,15.11,0,0,0-4.11-.43c-2.81-.06-4.75,0-7.45.06a45.66,45.66,0,0,0-6.57.33,27,27,0,0,0-4.5,1.14,1.58,1.58,0,0,0-.45.31,2.33,2.33,0,0,0-.59,1.59l-.27,3.38a1.75,1.75,0,0,0,.56,1.77.69.69,0,0,0,.44.07h50.47a1.42,1.42,0,0,0,1.33-1.5c-.31-1.48-.62-3-.92-4.45a3.38,3.38,0,0,0-1.05-1.56A2.72,2.72,0,0,0,307.64,261.15Z"
            transform="translate(-254.91 -226.77)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.25"
          />
        </g>
      </g>
    </svg>
      <span class="text-center my-3">S</span>
  </div>
</template>
<script>
export default {
    props:["selectedTooth"]
}
</script>
<style  lang="scss" scoped>
.single-tooth{
    width:100% ;
    height:100% ;
    position: relative;
    svg {
      width: 100%;
      height: 100%;
    }
    span {
      background: $tradmark-color;
      text-align: center;
      width:45px;
      height: 45px;
      font-size: 22px;
      font-weight: 500;
      padding: 10px;
      border-radius: 20px;
      color:#FFF;
      position: absolute;
      line-height: 1.3;
      bottom: -35px;
      left: 40%;
    }
}
</style>
