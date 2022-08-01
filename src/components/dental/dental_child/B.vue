<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.69 100"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_B_all">
        <g id="CHID_DENT_B">
          <g id="CHID_DENT_ROOT_B">
            <path
              v-if="selectedTooth.dent.root1"
              id="CHID_DENT_ROOT_B1"
              d="M291.22,229.08c-1,.26,1.93,6.89.75,17.46-.5,4.44-1.51,7.61-3.29,13.23-2,6.16-3.56,11.17-5.39,11.11-1.58,0-1.5-3.76-5.09-9.79-1.6-2.68-3.51-4.87-7.34-9.26-5.9-6.77-7-7-8.53-10.05-2.61-5.45-1.48-9.88-2.24-9.93s-3.6,6.06-2.4,12.84c1,5.6,3.61,5.83,6.44,14,1.56,4.53,2.56,7.41,2.24,11.38-.45,5.65-3.21,9.13-1.49,10.45,1.22.95,2.72-.74,7-.39,2.86.22,3.26,1.05,8.23,1.85,3.1.49,4.12.36,4.64.26,2.41-.43,2.7-1.49,5.09-2.25a14.8,14.8,0,0,1,6.89-.13c4.44.66,6.07,2.27,7,1.59,1.12-.8-.65-3.3-1.34-7-1-5.22,1.23-7.29,1.64-12.31.14-1.64.1-3.92-3.59-13.63C299.92,247,292.93,228.64,291.22,229.08Z"
              transform="translate(-254.9 -226.56)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.29"
            />
            <path
              v-if="selectedTooth.dent.root2"
              id="CHID_DENT_ROOT_B2"
              d="M270.77,229.9c-.46.35,1.67,2.3,3.24,6.72.86,2.45,1.83,5.16,1.19,8.33-.76,3.83-3,4.23-2.84,6.88.2,2.81,2.79,3.29,5.69,7.15,4.17,5.56,3.23,10.49,4.94,10.58s3.57-5.32,4.34-7.67c1-3.07,1.86-5.68,1.64-9-.34-5.4-3.27-9.19-6.28-13C277.8,233.78,271.51,229.34,270.77,229.9Z"
              transform="translate(-254.9 -226.56)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.29"
            />
          </g>
          <g id="CHID_DENT_CROWN_B">
            <path
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
              id="CHID_DENT_CROWN_B1"
              d="M263.68,281.73a10.47,10.47,0,0,0-3.44,3.18,20.36,20.36,0,0,0-3.9,9.26c-.5,2.74-1.75,9.46,1.05,10.72,1.35.6,2.28-.66,4.64-.14s2.49,2.2,5.09,3.31,5.43.63,7.49.27a26.93,26.93,0,0,0,6.43-2.25c4-1.78,4.35-2.55,6-2.52,2.71.06,2.83,2.19,5.84,2.91,3.75.9,5.17-2,11.07-2.11,3.6-.06,4.43,1,5.87.22,3.25-1.78,1.69-8.72,1.17-11.07-1-4.58-1.83-8.17-5.54-10.85-4.53-3.28-11-3.47-15.42-2-3.13,1.06-2.95,2.2-5.69,2.65-4.08.67-5.35-1.74-12-2.51C269.75,280.5,266.59,280.17,263.68,281.73Z"
              transform="translate(-254.9 -226.56)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.29"
            />
            <path
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
              id="CHID_DENT_CROWN_B2"
              d="M294.21,307.27c0,.7-3.19,1.44-6.13,1.45-3.53,0-7.22-1-7.19-1.85,0-.12.09-.28,2.4-1.19s3.39-1.34,4-1.32c1,0,1.05.32,4.29,1.67C293.72,306.9,294.22,307,294.21,307.27Z"
              transform="translate(-254.9 -226.56)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.29"
            />
            <path
            v-if="selectedTooth.dent.crown3"
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
              id="CHID_DENT_CROWN_B3"
              d="M307.39,305.28c.16.76-2.45,1.88-4.35,2.38-3.43.92-7.57.64-7.78-.26s3-2.27,5.85-2.75S307.21,304.47,307.39,305.28Z"
              transform="translate(-254.9 -226.56)"
              fill="none"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="1.29"
            />
          </g>
        </g>
        <path
          id="CHID_DENT_fiiling-caries_class_I_B"
          v-if="selectedTooth.filling_caries_class_i"
          d="M299.68,304.36a7.79,7.79,0,0,0-1.81.55c-.71.3-.79.46-1.38.7A6.05,6.05,0,0,1,294,306a5.81,5.81,0,0,1-2.3-.63c-.89-.45-.78-.68-2-1.44a5.29,5.29,0,0,0-2.16-1,4.69,4.69,0,0,0-1.67.05c-1.3.24-1.78.77-3.3,1.6-.58.32-1.38.66-3,1.33a34.46,34.46,0,0,1-3.4,1.34,17.54,17.54,0,0,1-4.63.75,16.74,16.74,0,0,1-2.17-.13l.12-11.26a1.42,1.42,0,0,1,1.5-1.33h27.13a1.42,1.42,0,0,1,1.5,1.33Z"
          transform="translate(-254.9 -226.56)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_B"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M309.32,304.13c-.9.4-1.59-.11-3.9-.28a15.45,15.45,0,0,0-2.39,0,14.55,14.55,0,0,0-3,.54l-.3-.29,0-13.17a1.44,1.44,0,0,1,1.52-1.35l8.19.3.29,1.22a38.79,38.79,0,0,1,1,4.13c.75,3.87.46,5.5.18,6.48a10.37,10.37,0,0,1-.38,1.08A2.29,2.29,0,0,1,309.32,304.13Z"
          transform="translate(-254.9 -226.56)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_B"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M257.65,304.31c.67.28,1.08-.31,2.67-.37a6.5,6.5,0,0,1,2.1.26,6.73,6.73,0,0,1,2.21,1.25,11.94,11.94,0,0,1,1.33,1.24,4.28,4.28,0,0,0,.38.27,6.71,6.71,0,0,0,1.82.74c.91.27,1,.23,1.12.17s.14-.49.09-.91c-.08-.65,0-1.3,0-2-.1-1.51.07-2.36.06-5.18,0-2.49-.15-2.15-.12-3.73.07-4,.91-4.95,0-5.82-.6-.6-1.17-.28-5.42-.53-3.54-.21-4.86-.53-5.68.27a5.58,5.58,0,0,0-.76,2.08c-.17.67-.23,1.06-.49,2.62-.41,2.55-.43,2.6-.48,3.05a23.23,23.23,0,0,0-.12,2.73,8.51,8.51,0,0,0,.15,1.72C256.78,303.17,257,304,257.65,304.31Z"
          transform="translate(-254.9 -226.56)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_B"
          v-if="selectedTooth.filling_caries_class_v"
          x="23.98"
          y="58.92"
          width="11.33"
          height="2.8"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_B"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M265,295.8h-5.29l-1.44-.05c-.85,0-1.26,0-1.41-.19s0-.23,0-.54.16-.71.27-1.25l.42-1.81a1.32,1.32,0,0,1,.27-.78,2,2,0,0,1,1.86-.62H265a2.18,2.18,0,0,1,2.3,2v1.18A2.18,2.18,0,0,1,265,295.8Z"
          transform="translate(-254.9 -226.56)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_B"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M308.32,295.79H303a2.18,2.18,0,0,1-2.3-2v-1.18a2.18,2.18,0,0,1,2.3-2h5.29a2.56,2.56,0,0,1,1.14.68,2.15,2.15,0,0,1,.6,1.2l.08,1.43a1.26,1.26,0,0,1,.17,1.13A1.77,1.77,0,0,1,308.32,295.79Z"
          transform="translate(-254.9 -226.56)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.43"
          opacity="0.79"
        />
        <g id="CHID_DENT_EndoB">
          <path
            v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
            :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
            :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
            id="CHID_DENT_Endo1_B"
            d="M280.06,281c-.89.67-2.66.28-5.49-.36a16.79,16.79,0,0,1-4.27-1.37c-3.53-2.06-.85-7.36-2.3-15-.92-4.82-2.22-4.07-6.39-15.68-1-2.75-2.68-7.48-2.12-7.68.38-.14,1.63,2,5.85,8.78,4.56,7.28,4.58,7.1,6.38,10.19.78,1.34,3.14,5.44,5.68,11C281.19,279.11,280.73,280.49,280.06,281Z"
            transform="translate(-254.9 -226.56)"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Endo2_B"
            v-if="selectedTooth.endo.endo2 || selectedTooth.pulp.pulp2"
            :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
            :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
            d="M294.77,238.22c-.59,0,.45,5.92-1.41,14.42-1.15,5.21-1.81,4.19-4.26,13-3,10.83-1.18,9.35-2.74,14.16,0,.1-.61,1.87-.18,2.05s1.21-1.65,3.27-2.58c1.39-.62,3-.52,6-.31,3.49.24,3.82.67,4.44.31,1.92-1.1-.22-5.8-1.42-12.54-.9-5-.08-4.45-.89-12.85C296.89,246.4,295.48,238.17,294.77,238.22Z"
            transform="translate(-254.9 -226.56)"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Endo3_B"
            v-if="selectedTooth.endo.endo3 || selectedTooth.pulp.pulp3"
            :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
            :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
            d="M276.15,235.24c-.29.15,1.67,2.21,1.78,6a17.85,17.85,0,0,1-1.24,6.42,15.78,15.78,0,0,0-1.6,4.55,4.37,4.37,0,0,0,.35,3c.51.87,1.16,1.07,2.13,1.88a10.46,10.46,0,0,1,2.66,3.44,25.41,25.41,0,0,1,1.95,5.8c.48,1.77.55,2.31.89,2.36,1.09.15,2.81-4.88,3-5.49a26.65,26.65,0,0,0,1.25-5.33C288.18,249.19,276.9,234.86,276.15,235.24Z"
            transform="translate(-254.9 -226.56)"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <g id="CHID_DENT_Post_B">
          <g id="CHID_DENT_Post_B_1" v-if="selectedTooth.post.post1">
            <path
              d="M288,279.88l10.45,1a.66.66,0,0,1,.63.71l-.27,2.58a.7.7,0,0,1-.77.59l-10.45-1a.67.67,0,0,1-.63-.72l.27-2.58A.68.68,0,0,1,288,279.88Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M295.81,249.71l1.32.13a1.18,1.18,0,0,1,1.12,1.26L295.19,280a1.22,1.22,0,0,1-1.36,1l-1.32-.12a1.2,1.2,0,0,1-1.12-1.27l3.05-28.91A1.23,1.23,0,0,1,295.81,249.71Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M290.34,273.87l7.15.66a.32.32,0,0,1,.31.35l-.09.83a.32.32,0,0,1-.37.28l-7.15-.65a.34.34,0,0,1-.32-.36l.09-.83A.34.34,0,0,1,290.34,273.87Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M290.69,269.45l7.2.66a.33.33,0,0,1,.29.33l-.1.87a.3.3,0,0,1-.35.27l-7.19-.66a.3.3,0,0,1-.29-.33l.09-.87A.3.3,0,0,1,290.69,269.45Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M291.28,265.05l7.13.66a.34.34,0,0,1,.32.36l-.09.82a.33.33,0,0,1-.38.29l-7.14-.66a.32.32,0,0,1-.31-.35l.08-.82A.36.36,0,0,1,291.28,265.05Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M291.62,260.64l7.2.66a.31.31,0,0,1,.29.32l-.1.88a.31.31,0,0,1-.34.27l-7.21-.66a.33.33,0,0,1-.29-.33l.1-.88A.3.3,0,0,1,291.62,260.64Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M292.07,256.23l7.23.66a.29.29,0,0,1,.27.32l-.09.9a.3.3,0,0,1-.34.25L292,257.7a.34.34,0,0,1-.32-.36l.09-.85A.3.3,0,0,1,292.07,256.23Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M292.67,251.83l7.14.66a.34.34,0,0,1,.32.36l-.09.82a.34.34,0,0,1-.38.29l-7.15-.66a.32.32,0,0,1-.31-.35l.09-.82A.35.35,0,0,1,292.67,251.83Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="36.94"
              y1="29.74"
              x2="45.12"
              y2="26.03"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="36.85"
              y1="31.05"
              x2="45.02"
              y2="27.32"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="36.44"
              y1="34.18"
              x2="44.58"
              y2="30.42"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="36.36"
              y1="35.42"
              x2="44.45"
              y2="31.75"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="36.15"
              y1="38.55"
              x2="44.11"
              y2="34.83"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="36"
              y1="39.86"
              x2="44"
              y2="36.14"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="35.54"
              y1="42.97"
              x2="43.76"
              y2="39.29"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="35.44"
              y1="44.28"
              x2="43.58"
              y2="40.57"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="35.19"
              y1="47.38"
              x2="43.18"
              y2="43.64"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="35.07"
              y1="48.69"
              x2="43.02"
              y2="44.99"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M300.06,254.16"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M289.31,283.13l7.12.66a1.3,1.3,0,0,1,1.24,1.4l-.33,3.12a1.35,1.35,0,0,1-1.51,1.15l-7.12-.65a1.32,1.32,0,0,1-1.24-1.4l.33-3.13A1.36,1.36,0,0,1,289.31,283.13Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
          </g>
          <g id="CHID_DENT_Post_B_2" v-if="selectedTooth.post.post2">
            <path
              d="M269.17,281.69l8-2.84a.49.49,0,0,1,.66.4l.51,2.34a.69.69,0,0,1-.41.78l-8,2.84a.5.5,0,0,1-.67-.4l-.5-2.34A.69.69,0,0,1,269.17,281.69Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M266.69,252.68l1-.35a.88.88,0,0,1,1.17.7l5.69,26.23a1.23,1.23,0,0,1-.72,1.38l-1,.36a.89.89,0,0,1-1.17-.71L266,254.07A1.22,1.22,0,0,1,266.69,252.68Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M269.29,275.62l5.46-1.95a.24.24,0,0,1,.32.2l.17.75a.36.36,0,0,1-.2.39L269.58,277a.24.24,0,0,1-.33-.19l-.16-.75A.33.33,0,0,1,269.29,275.62Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M268.33,271.66l5.5-2a.22.22,0,0,1,.3.18l.17.79a.31.31,0,0,1-.18.36l-5.5,2a.23.23,0,0,1-.3-.19l-.17-.79A.29.29,0,0,1,268.33,271.66Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M267.56,267.63l5.45-1.95a.25.25,0,0,1,.33.2l.16.74a.34.34,0,0,1-.2.39L267.85,269a.25.25,0,0,1-.33-.2l-.17-.74A.34.34,0,0,1,267.56,267.63Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M266.6,263.66l5.5-2a.23.23,0,0,1,.3.18l.17.8a.3.3,0,0,1-.18.35l-5.51,2a.24.24,0,0,1-.3-.18l-.17-.8A.32.32,0,0,1,266.6,263.66Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M265.72,259.67l5.52-2a.22.22,0,0,1,.29.18l.17.81a.3.3,0,0,1-.18.34l-5.47,2a.26.26,0,0,1-.34-.2l-.17-.78A.3.3,0,0,1,265.72,259.67Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M265,255.64l5.45-1.95a.26.26,0,0,1,.33.2l.16.75a.34.34,0,0,1-.2.38l-5.46,2a.26.26,0,0,1-.33-.2l-.16-.75A.34.34,0,0,1,265,255.64Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="10.67"
              y1="33.25"
              x2="15.69"
              y2="27.14"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="10.96"
              y1="34.42"
              x2="15.97"
              y2="28.3"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="11.52"
              y1="37.29"
              x2="16.49"
              y2="31.15"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="11.8"
              y1="38.4"
              x2="16.76"
              y2="32.35"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="12.5"
              y1="41.2"
              x2="17.36"
              y2="35.15"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="12.75"
              y1="42.39"
              x2="17.64"
              y2="36.33"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="13.27"
              y1="45.26"
              x2="18.32"
              y2="39.15"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="13.55"
              y1="46.42"
              x2="18.54"
              y2="40.33"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="14.22"
              y1="49.21"
              x2="19.09"
              y2="43.15"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="14.49"
              y1="50.39"
              x2="19.34"
              y2="44.37"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M271.05,255.05"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M271.07,284l5.44-1.94a1,1,0,0,1,1.3.79l.61,2.83a1.33,1.33,0,0,1-.79,1.53l-5.44,1.94a1,1,0,0,1-1.3-.78l-.61-2.84A1.34,1.34,0,0,1,271.07,284Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
          </g>
          <g id="CHID_DENT_Post_B_3" v-if="selectedTooth.post.post3">
            <path
              d="M278.53,281.41l8.38-1.18c.32,0,.59.29.62.74l.21,3.25c0,.45-.2.85-.51.9l-8.39,1.17c-.31,0-.58-.29-.61-.74L278,282.3C278,281.85,278.22,281.45,278.53,281.41Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M279.79,242.4l1.06-.15c.55-.08,1,.51,1.08,1.31l2.33,36.38c.05.8-.35,1.51-.9,1.58l-1.06.15c-.55.08-1-.51-1.09-1.31L278.88,244C278.83,243.18,279.24,242.47,279.79,242.4Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M279.43,273.45l5.74-.8c.15,0,.29.14.3.36l.07,1c0,.23-.1.42-.25.44l-5.74.81c-.15,0-.29-.15-.3-.37l-.07-1C279.17,273.67,279.28,273.47,279.43,273.45Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M279,267.92l5.77-.81c.14,0,.27.13.28.34l.07,1.09c0,.21-.09.4-.23.42l-5.78.8c-.14,0-.26-.13-.28-.34l-.07-1.09C278.74,268.12,278.84,267.94,279,267.92Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M278.73,262.36l5.73-.8c.15,0,.29.14.3.37l.07,1a.41.41,0,0,1-.26.45l-5.72.8c-.16,0-.3-.15-.31-.37l-.07-1C278.46,262.58,278.57,262.38,278.73,262.36Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M278.27,256.83l5.79-.81c.14,0,.26.13.27.33l.07,1.11a.36.36,0,0,1-.23.41l-5.78.81c-.14,0-.26-.13-.28-.34l-.07-1.11C278,257,278.13,256.85,278.27,256.83Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M277.91,251.28l5.8-.81c.13,0,.26.13.27.33l.07,1.13c0,.2-.09.37-.22.39l-5.76.81c-.16,0-.3-.15-.31-.38l-.07-1.07C277.68,251.48,277.78,251.3,277.91,251.28Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M277.66,245.72l5.74-.8c.15,0,.29.15.3.37l.07,1c0,.23-.1.43-.26.45l-5.73.8c-.15,0-.29-.14-.3-.37l-.07-1A.41.41,0,0,1,277.66,245.72Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="22.84"
              y1="24.86"
              x2="28.67"
              y2="18.43"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="22.98"
              y1="26.5"
              x2="28.81"
              y2="20.05"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="23.18"
              y1="30.46"
              x2="28.96"
              y2="23.98"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="23.31"
              y1="32.01"
              x2="29.08"
              y2="25.65"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="23.66"
              y1="35.92"
              x2="29.32"
              y2="29.53"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="23.75"
              y1="37.57"
              x2="29.45"
              y2="31.16"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="23.9"
              y1="41.51"
              x2="29.77"
              y2="35.11"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="24.04"
              y1="43.14"
              x2="29.84"
              y2="36.73"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="24.35"
              y1="47.03"
              x2="30.03"
              y2="40.62"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <line
              x1="24.47"
              y1="48.67"
              x2="30.12"
              y2="42.31"
              fill="#e30613"
              stroke="#e30613"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M283.87,246.92"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
            <path
              d="M280.14,285.12l5.71-.8c.61-.09,1.15.56,1.2,1.45l.26,3.93c.05.89-.4,1.67-1,1.76l-5.72.8c-.61.08-1.14-.57-1.2-1.45l-.25-3.94C279.08,286,279.53,285.2,280.14,285.12Z"
              transform="translate(-254.9 -226.56)"
              fill="#e30613"
              stroke="#e30613"
              stroke-miterlimit="10"
              stroke-width="0.43"
            />
          </g>
        </g>
        <g id="CHID_DENT_Ginfivitis_B">
          <path
            id="CHID_DENT_Left_Ginfivitis_B"
            v-if="selectedTooth.ginfivitis.left"
            d="M264.31,280.61c.07-.2-.29-.3-.57-.84a2.69,2.69,0,0,1-.09-1.86,10,10,0,0,1,1-2.11,20.22,20.22,0,0,0,.67-3.21c.14-.69.27-1.35.38-2.28s.18-1.52,0-1.77c-.69-1-3.89-1.07-5.15.25s.59,2.63-.29,6.16a13,13,0,0,0-.48,3.13c0,1.57.27,2,.38,2.11C261.18,281.44,264.14,281.14,264.31,280.61Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Right_Ginfivitis_B"
            v-if="selectedTooth.ginfivitis.right"
            d="M304.7,281.37c-.26-.38-.06-.64-.19-1.94a14,14,0,0,0-.29-1.69c-.31-1.53-.51-1.83-1-3.54a9.47,9.47,0,0,1-.48-3.46c.08-.87.17-1.6.76-1.95a2.77,2.77,0,0,1,3,.68c.94,1-.13,2,.19,4.47.16,1.19.42,1,1.44,4.31.84,2.71.77,3.15.47,3.46C307.79,282.57,305.33,282.31,304.7,281.37Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Left_periodontal_B"
            v-if="selectedTooth.periodontal.left"
            d="M264.31,280.61c.07-.2-.29-.3-.57-.84a2.69,2.69,0,0,1-.09-1.86,10,10,0,0,1,1-2.11,20.22,20.22,0,0,0,.67-3.21c.14-.69.27-1.35.38-2.28s.18-1.52,0-1.77c-.69-1-3.89-1.07-5.15.25s.59,2.63-.29,6.16a13,13,0,0,0-.48,3.13c0,1.57.27,2,.38,2.11C261.18,281.44,264.14,281.14,264.31,280.61Z"
            transform="translate(-254.9 -226.56)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Right_periodontal_B"
            v-if="selectedTooth.periodontal.right"
            d="M304.7,281.37c-.26-.38-.06-.64-.19-1.94a14,14,0,0,0-.29-1.69c-.31-1.53-.51-1.83-1-3.54a9.47,9.47,0,0,1-.48-3.46c.08-.87.17-1.6.76-1.95a2.77,2.77,0,0,1,3,.68c.94,1-.13,2,.19,4.47.16,1.19.42,1,1.44,4.31.84,2.71.77,3.15.47,3.46C307.79,282.57,305.33,282.31,304.7,281.37Z"
            transform="translate(-254.9 -226.56)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Left_perio_B"
            v-if="selectedTooth.perio.left"
            d="M264.31,280.61c.07-.2-.29-.3-.57-.84a2.69,2.69,0,0,1-.09-1.86,10,10,0,0,1,1-2.11,20.22,20.22,0,0,0,.67-3.21c.14-.69.27-1.35.38-2.28s.18-1.52,0-1.77c-.69-1-3.89-1.07-5.15.25s.59,2.63-.29,6.16a13,13,0,0,0-.48,3.13c0,1.57.27,2,.38,2.11C261.18,281.44,264.14,281.14,264.31,280.61Z"
            transform="translate(-254.9 -226.56)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Right_perio_B"
            v-if="selectedTooth.perio.right"
            d="M304.7,281.37c-.26-.38-.06-.64-.19-1.94a14,14,0,0,0-.29-1.69c-.31-1.53-.51-1.83-1-3.54a9.47,9.47,0,0,1-.48-3.46c.08-.87.17-1.6.76-1.95a2.77,2.77,0,0,1,3,.68c.94,1-.13,2,.19,4.47.16,1.19.42,1,1.44,4.31.84,2.71.77,3.15.47,3.46C307.79,282.57,305.33,282.31,304.7,281.37Z"
            transform="translate(-254.9 -226.56)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <g id="CHID_DENT_Implant_B" v-if="selectedTooth.implant">
          <path
            d="M270.37,276.26l29.45,0c1.09,0,2,.41,1.95.91l-.09,3.59c0,.5-.91.91-2,.91l-29.45,0c-1.09,0-2-.41-2-.91l.1-3.6C268.38,276.66,269.28,276.26,270.37,276.26Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M284.6,233.64h3.72c1.93,0,3.47.72,3.45,1.61l-1.11,40.3c0,.89-1.61,1.6-3.54,1.6H283.4c-1.93,0-3.48-.73-3.45-1.61l1.11-40.3C281.08,234.35,282.67,233.63,284.6,233.64Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.52,267.66l20.15,0c.54,0,1,.2,1,.45l0,1.16c0,.24-.45.44-1,.44l-20.16,0c-.54,0-1-.2-1-.44l0-1.16C274.54,267.86,275,267.66,275.52,267.66Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.36,261.52l20.28,0c.51,0,.91.19.9.42l0,1.21c0,.23-.42.42-.92.42l-20.28,0c-.51,0-.91-.19-.9-.42l0-1.21C274.45,261.71,274.86,261.52,275.36,261.52Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.87,255.38l20.12,0c.55,0,1,.2,1,.45l0,1.14c0,.25-.46.46-1,.46l-20.12,0c-.55,0-1-.21-1-.46l0-1.14C274.88,255.58,275.33,255.38,275.87,255.38Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.69,249.24l20.31,0c.49,0,.89.18.88.41l0,1.22c0,.23-.42.41-.91.41l-20.31,0c-.49,0-.89-.18-.88-.41l0-1.23C274.79,249.42,275.19,249.24,275.69,249.24Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275.83,243.09l20.36,0c.48,0,.86.18.86.4l0,1.25c0,.22-.4.4-.88.4l-20.22,0c-.56,0-1-.21-1-.46l0-1.19C275,243.27,275.35,243.09,275.83,243.09Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M276.37,237l20.14,0c.54,0,1,.2,1,.45l0,1.15c0,.25-.45.45-1,.45l-20.13,0c-.55,0-1-.2-1-.45l0-1.15C275.39,237.15,275.83,237,276.37,237Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.32"
            y1="16.65"
            x2="42.21"
            y2="10.53"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.38"
            y1="18.48"
            x2="42.27"
            y2="12.33"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.06"
            y1="22.85"
            x2="41.83"
            y2="16.66"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.13"
            y1="24.58"
            x2="41.8"
            y2="18.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.35"
            y1="28.92"
            x2="41.66"
            y2="22.81"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="20.27"
            y1="30.76"
            x2="41.69"
            y2="24.62"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="19.78"
            y1="35.11"
            x2="41.81"
            y2="29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="19.85"
            y1="36.92"
            x2="41.65"
            y2="30.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="19.94"
            y1="41.23"
            x2="41.31"
            y2="35.09"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <line
            x1="19.95"
            y1="43.05"
            x2="41.2"
            y2="36.96"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M297.64,239.25"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            d="M275,280.58l20.07,0c2.14,0,3.85.8,3.82,1.78l-.12,4.36c0,1-1.78,1.78-3.92,1.77l-20.07,0c-2.14,0-3.85-.8-3.82-1.78l.12-4.37C271.13,281.37,272.88,280.58,275,280.58Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <g id="CHID_DENT_Periapical_B">
          <path
            id="CHID_DENT_Periapical_B_2"
            v-if="selectedTooth.periapical.periapical2"
            d="M256.83,244a17.78,17.78,0,0,1-.2-2.7,19.5,19.5,0,0,1,.26-3.35,21.84,21.84,0,0,1,.67-2.88c0-.11.35-.92,1-2.53a1.71,1.71,0,0,1,.86-1.12,1.33,1.33,0,0,1,1.07.06c.43.25.51.75.59,1.47.11.94.16,1.4.2,2.47a14,14,0,0,0,.6,3.35c.06.21.77,2.81,1.13,2.76s.23-1.35.2-2.76c-.07-3.13-.11-4.69-.8-6.35-.54-1.3-1.39-3.35-2.79-3.47-1.74-.14-3.49,2.78-4.12,4.82a10.61,10.61,0,0,0-.2,4.82A18.22,18.22,0,0,0,256.83,244Z"
            transform="translate(-254.9 -226.56)"
            fill="#be1622"
            stroke="#be1622"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Periapical_B_3"
            v-if="selectedTooth.periapical.periapical3"
            d="M274.59,240.9c.23-.12-.16-1.2-.94-3.36a24.68,24.68,0,0,0-1-2.52,13.28,13.28,0,0,0-1.47-2.71,4.57,4.57,0,0,1-1.13-1.88c-.07-.3-.17-.79.14-1.06s.95-.14,1.33-.06a6.5,6.5,0,0,1,2.39,1.36l2.06,1.52c.95.76,1.65,1.39,2,1.71a30.27,30.27,0,0,1,2.39,2.41c.87,1,1.09,1.4,1.2,1.35s-.28-2.1-1.6-3.88c-.81-1.11-1.89-1.85-4.05-3.35-3.35-2.32-4.38-2.43-5.06-2.41a3.38,3.38,0,0,0-2.46.88c-.3.38-.55,1.06,1.66,6a18.76,18.76,0,0,0,1.47,2.88C272.61,239.42,274.21,241.09,274.59,240.9Z"
            transform="translate(-254.9 -226.56)"
            fill="#be1622"
            stroke="#be1622"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
          <path
            id="CHID_DENT_Periapical_B_1"
            v-if="selectedTooth.periapical.periapical1"
            d="M291.41,237.54c.13,0,0-.58-.33-2.41-.26-1.66-.17-1.52-.4-2.82a17.48,17.48,0,0,0-.33-2.17,1.42,1.42,0,0,1-.07-1.12,1.17,1.17,0,0,1,.93-.59c.36,0,.72.15,1.27.71a7.54,7.54,0,0,1,1.46,2.17c1.13,2.28,1,1.88,1.46,2.94s.82,1.74,1.07,2.35c.46,1.16.53,1.57.65,1.56s.56-2.21-.12-4.44a11.41,11.41,0,0,0-2.73-4.29c-1.46-1.69-2.41-2.8-3.46-2.64-1.21.17-1.78,2-1.92,2.41-.63,2,.1,3.71.86,5.52C290.34,236.14,291.19,237.61,291.41,237.54Z"
            transform="translate(-254.9 -226.56)"
            fill="#be1622"
            stroke="#be1622"
            stroke-miterlimit="10"
            stroke-width="0.43"
          />
        </g>
        <path
          id="CHID_DENT_Occlusal_Veneer_B"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M306.28,303.83a13.07,13.07,0,0,0-6.26.06c-3,.82-4.32,2.57-6.37,2.06-.7-.17-.46-.35-2.84-1.73s-3.21-1.51-3.55-1.55a6.07,6.07,0,0,0-3.27.83c-5.72,2.65-6,3.07-7.83,3.68a11.5,11.5,0,0,1-6.57.67,8.48,8.48,0,0,1-3.66-1.73c-.88-.75-1.13-1.39-2.15-1.9a5.47,5.47,0,0,0-2.71-.5,3.18,3.18,0,0,1-3.35-.06,2.16,2.16,0,0,1-.83-1.39c0-.54-.08-1.28-.12-2.18-.06-1.36-.06-1.82.27-2.28a2.37,2.37,0,0,1,1.12-.82H309a1.47,1.47,0,0,1,1.56,1.37v3.35a2.69,2.69,0,0,1-1,1.62A3.64,3.64,0,0,1,306.28,303.83Z"
          transform="translate(-254.9 -226.56)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.29"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_B"
          v-if="selectedTooth.crown.onlay"
          d="M306.28,303.83a13.07,13.07,0,0,0-6.26.06c-3,.82-4.32,2.57-6.37,2.06-.7-.17-.46-.35-2.84-1.73s-3.21-1.51-3.55-1.55a6.07,6.07,0,0,0-3.27.83c-5.72,2.65-6,3.07-7.83,3.68a11.5,11.5,0,0,1-6.57.67,8.48,8.48,0,0,1-3.66-1.73c-.88-.75-1.13-1.39-2.15-1.9a5.47,5.47,0,0,0-2.71-.5,3.18,3.18,0,0,1-3.35-.06,2.16,2.16,0,0,1-.83-1.39c0-.54-.08-1.28-.12-2.18-.06-1.36-.06-1.82.27-2.28a2.37,2.37,0,0,1,1.12-.82H309a1.47,1.47,0,0,1,1.56,1.37v3.35a2.69,2.69,0,0,1-1,1.62A3.64,3.64,0,0,1,306.28,303.83Z"
          transform="translate(-254.9 -226.56)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.29"
        />
        <g id="CHID_DENT_Endo_Crown_B">
          <path
            id="CHID_DENT_Endo_Crown_1B"
            v-if="selectedTooth.endo_crown.crown1"
            d="M288.71,290.23l-10.92.23-1.7,5.74a.23.23,0,0,0,.24.28h14.24a.23.23,0,0,0,.24-.29Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.29"
          />
          <path
            id="CHID_DENT_Endo_Crown_2B"
            v-if="selectedTooth.endo_crown.crown1"
            d="M306.3,303.7a13.06,13.06,0,0,0-6.25.05c-3,.83-4.33,2.58-6.38,2.07-.7-.17-.45-.35-2.84-1.73s-3.2-1.52-3.54-1.55a6.18,6.18,0,0,0-3.28.82c-5.71,2.66-6,3.07-7.83,3.69a11.59,11.59,0,0,1-6.57.67A8.6,8.6,0,0,1,266,306c-.87-.76-1.13-1.39-2.15-1.9a5.36,5.36,0,0,0-2.71-.5,3.21,3.21,0,0,1-3.35-.06,2.16,2.16,0,0,1-.82-1.39c0-.54-.08-1.29-.13-2.18-.06-1.36-.06-1.82.27-2.28a2.44,2.44,0,0,1,1.13-.83h50.86a1.47,1.47,0,0,1,1.55,1.38v3.35a2.69,2.69,0,0,1-1,1.62A3.66,3.66,0,0,1,306.3,303.7Z"
            transform="translate(-254.9 -226.56)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.29"
          />
        </g>
      </g>
    </svg>
    <span class="text-center my-3">B</span>
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