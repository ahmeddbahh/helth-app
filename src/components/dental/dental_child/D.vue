<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.69 100"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_D_all">
        <g id="CHID_DENT_D">
          <path
            id="CHID_DENT_ROOT_D"
            v-if="selectedTooth.dent.root1"
            d="M268.73,229.87c-2,.19,1.27,6.54-.29,17-.82,5.6-2.12,6.27-4.32,16.1-2.59,11.48-1.7,14.47,1.44,15.13,2.71.58,4.53-1.14,12.41-2,10.11-1.16,15.78.68,17.89-.68s-3.26-3.59-6.35-8.6c-2.58-4.18-.4-5.25-1.73-10.63-.72-2.92-3-6.17-7.5-12.55C273.71,234.36,270.42,229.72,268.73,229.87Z"
            transform="translate(-254.81 -226.47)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
          <path
            id="CHID_DENT_CROWN_D"
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
            d="M265.85,279.93c-.73.47-1.43,1.07-3.18,5.45a37.75,37.75,0,0,0-2.31,6.82c-.95,4.91-1.43,7.37,1.45,9,2.37,1.35,6.45,2.22,10.1,2.32,2.86.08,3.25-.37,6.35-.27,4.83.16,5.49,1.32,9.81,1.64,3,.22,3.33-.31,11.25-1.1s8.51-.33,10.1-1c3.45-1.33,2.64-4.23.87-10a29.76,29.76,0,0,0-4.91-9.54c-2.81-3.7-4.28-5.57-7.5-6.55-5-1.52-11.09-.87-17.89-.14C274.26,277.27,269.07,277.83,265.85,279.93Z"
            transform="translate(-254.81 -226.47)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
        </g>
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_D"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M300,303.1l3.48-.31a26.51,26.51,0,0,0,3.4-.26,10.82,10.82,0,0,0,1.94-.37,2.41,2.41,0,0,0,1.84-1.84q-1.65-5.76-3.31-11.52a26.15,26.15,0,0,0-1.67-2.81c-.27-.4-.55-.79-.83-1.17l-3.89-.06c-4,0-7.17,1.51-7.17,3.39v12.17c-.26.94.54,1.87,2.1,2.39A10.6,10.6,0,0,0,300,303.1Z"
          transform="translate(-254.81 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.61"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_D"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M279.51,302.64c-.53.11-.92-.08-2.48-.05-.48,0-.48,0-2.08.14-1.27.09-1.9.13-2.28.14a19.31,19.31,0,0,1-3.17-.23,21.55,21.55,0,0,1-4.66-1,8.41,8.41,0,0,1-3-1.68c-.59-.58-.89-1.19-.89-2.86a23.6,23.6,0,0,1,.6-4.27c.47-2.65.54-2.94.89-3.46a9.92,9.92,0,0,0,.89-1.69c.53-1.2.36-1.35.79-1.59.94-.52,2.57-.27,6.75-.19,5.1.1,5.7-.21,6.74.19,1.42.55,1.18,1.46,1.35,4.08a39.36,39.36,0,0,0,.53,4.21c.41,2.11.61,4.22.92,6.33C280.49,301.07,280.68,302.38,279.51,302.64Z"
          transform="translate(-254.81 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.61"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_D"
          v-if="selectedTooth.filling_caries_class_v"
          x="19.98"
          y="53.2"
          width="21.85"
          height="2.89"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.61"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_D"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M270.23,294.37l-8.25-.54h0l-.29-1.22c.2-.55.41-1.1.62-1.65l.59-1.38h0l7.33-.62c2.45,0,4.43.94,4.43,2.1v1.21C274.66,293.43,272.68,294.37,270.23,294.37Z"
          transform="translate(-254.81 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.61"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_D"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M309.06,293.36l-9,1c-2.45,0-4.44-.94-4.44-2.1v-1.21c0-1.16,2-2.1,4.44-2.1l7.68.82.65,1.18c.1.44.2.88.29,1.31S308.94,293,309.06,293.36Z"
          transform="translate(-254.81 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.61"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoD"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M273.7,240c-.92,0-.65,3.72-1.71,10.66-.93,6.17-1.82,7.72-2.39,13.57-.8,8.29.39,11.26,3.08,11.64.85.12.88-.16,5.47-.65a60.32,60.32,0,0,1,7.86-.48c3.06,0,3.47.36,4.1.16,2.64-.83-4.52-6.34-8.54-14.06-1-1.89-.27-1-4.45-13.09C275,241.66,274.33,240,273.7,240Z"
          transform="translate(-254.81 -226.47)"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <g id="CHID_DENT_Post_D" v-if="selectedTooth.post.post1">
          <path
            d="M277.78,277.76l12.88-1.33a1,1,0,0,1,1.06.56l.73,2.57c.11.36-.2.69-.68.74l-12.88,1.33a1,1,0,0,1-1.05-.56l-.74-2.57C277,278.14,277.3,277.81,277.78,277.76Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M274.74,246.67l1.62-.17a1.71,1.71,0,0,1,1.86,1l8.28,28.83c.18.64-.36,1.22-1.2,1.31l-1.63.17a1.74,1.74,0,0,1-1.86-1L273.53,248C273.35,247.34,273.89,246.75,274.74,246.67Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M278.16,271.39l8.82-.91a.49.49,0,0,1,.52.27l.23.83c0,.18-.1.34-.33.36l-8.82.91a.47.47,0,0,1-.52-.27l-.23-.83C277.78,271.58,277.93,271.41,278.16,271.39Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M276.76,267l8.87-.92a.44.44,0,0,1,.48.26l.25.87c.05.16-.09.31-.31.34l-8.87.91a.43.43,0,0,1-.48-.25l-.25-.87C276.4,267.18,276.54,267,276.76,267Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M275.65,262.6l8.8-.91a.49.49,0,0,1,.53.28l.23.81c.05.18-.1.35-.34.37l-8.8.91a.49.49,0,0,1-.53-.28l-.23-.81C275.26,262.79,275.41,262.62,275.65,262.6Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M274.23,258.22l8.89-.92a.45.45,0,0,1,.47.25l.25.88c.05.16-.09.31-.3.34l-8.89.91a.44.44,0,0,1-.48-.25l-.25-.88C273.88,258.39,274,258.24,274.23,258.22Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M273,253.83l8.91-.92a.41.41,0,0,1,.46.24l.25.9c.05.15-.08.3-.29.32l-8.85.92a.52.52,0,0,1-.54-.29l-.24-.85C272.61,254,272.75,253.85,273,253.83Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M271.86,249.41l8.81-.91a.48.48,0,0,1,.52.28l.24.82c.05.18-.1.34-.34.37l-8.81.91a.48.48,0,0,1-.52-.28l-.24-.82C271.47,249.6,271.62,249.44,271.86,249.41Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="17.9"
            y1="27.47"
            x2="26.14"
            y2="22.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="18.32"
            y1="28.77"
            x2="26.56"
            y2="23.36"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="19.14"
            y1="31.91"
            x2="27.31"
            y2="26.48"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="19.54"
            y1="33.14"
            x2="27.7"
            y2="27.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="20.58"
            y1="36.23"
            x2="28.57"
            y2="30.88"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="20.94"
            y1="37.54"
            x2="28.98"
            y2="32.17"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="21.68"
            y1="40.67"
            x2="29.98"
            y2="35.29"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="22.1"
            y1="41.96"
            x2="30.3"
            y2="36.58"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="23.08"
            y1="45.04"
            x2="31.09"
            y2="39.67"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="23.48"
            y1="46.34"
            x2="31.44"
            y2="41.01"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M281.66,250.07"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M280.75,280.64l8.78-.91a1.9,1.9,0,0,1,2.06,1.1l.9,3.12c.2.7-.4,1.34-1.33,1.44l-8.79.91a1.89,1.89,0,0,1-2.05-1.1l-.9-3.12C279.22,281.38,279.81,280.74,280.75,280.64Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_D">
          <path
            id="CHID_DENT_Left_Ginfivitis_D"
            v-if="selectedTooth.ginfivitis.left"
            d="M262.37,283.32c.82-.17-.77-1.64.92-3,1.13-.88,2.94-1.08,2.76-1.57s-1.66-.42-2.94-1a2.68,2.68,0,0,1-1.84-2.7,27.66,27.66,0,0,1,1.1-7.22c1-4.5-.63-4.65.92-7.92.92-1.94,2-3.07,1.1-3.39-1.24-.43-5.61.74-7.91,2.52s-1.09,3-.74,8.61c.13,2,.17,5,.19,6.53,0,2.91,0,4.63,2,6.61C259.47,282.36,261.61,283.47,262.37,283.32Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            id="CHID_DENT_Right_Ginfivitis_D"
            v-if="selectedTooth.ginfivitis.right"
            d="M304.15,279.84c-.63,0-.44-1.07-2.39-2.44a6.33,6.33,0,0,0-2.58-1.22c-1.18-.25-2.09-.15-2.39-.43s.58-.67.92-1.22c.53-.86-.64-1.69-1.47-2.35a36.2,36.2,0,0,1-4.23-4.26,9,9,0,0,1-2.4-4.44c-.36-2.41,1.17-2.83.37-5.13-.55-1.6-1.68-2.53-.92-2.78s3.11.4,4.6,1.21c2.19,1.19,2.29,2.49,2.76,5.05.73,3.94,1.11,5.93,2,7.05.21.26,1.7,1.6,4.68,4.28,1.78,1.6,2.75,2.45,2.87,3.72C306.13,278.44,304.89,279.85,304.15,279.84Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            id="CHID_DENT_Left_periodontal_D"
            v-if="selectedTooth.periodontal.left"
            d="M262.37,283.32c.82-.17-.77-1.64.92-3,1.13-.88,2.94-1.08,2.76-1.57s-1.66-.42-2.94-1a2.68,2.68,0,0,1-1.84-2.7,27.66,27.66,0,0,1,1.1-7.22c1-4.5-.63-4.65.92-7.92.92-1.94,2-3.07,1.1-3.39-1.24-.43-5.61.74-7.91,2.52s-1.09,3-.74,8.61c.13,2,.17,5,.19,6.53,0,2.91,0,4.63,2,6.61C259.47,282.36,261.61,283.47,262.37,283.32Z"
            transform="translate(-254.81 -226.47)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            id="CHID_DENT_Right_periodontal_D"
            v-if="selectedTooth.periodontal.right"
            d="M304.15,279.84c-.63,0-.44-1.07-2.39-2.44a6.33,6.33,0,0,0-2.58-1.22c-1.18-.25-2.09-.15-2.39-.43s.58-.67.92-1.22c.53-.86-.64-1.69-1.47-2.35a36.2,36.2,0,0,1-4.23-4.26,9,9,0,0,1-2.4-4.44c-.36-2.41,1.17-2.83.37-5.13-.55-1.6-1.68-2.53-.92-2.78s3.11.4,4.6,1.21c2.19,1.19,2.29,2.49,2.76,5.05.73,3.94,1.11,5.93,2,7.05.21.26,1.7,1.6,4.68,4.28,1.78,1.6,2.75,2.45,2.87,3.72C306.13,278.44,304.89,279.85,304.15,279.84Z"
            transform="translate(-254.81 -226.47)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            id="CHID_DENT_Left_perio_D"
            v-if="selectedTooth.perio.left"
            d="M262.37,283.32c.82-.17-.77-1.64.92-3,1.13-.88,2.94-1.08,2.76-1.57s-1.66-.42-2.94-1a2.68,2.68,0,0,1-1.84-2.7,27.66,27.66,0,0,1,1.1-7.22c1-4.5-.63-4.65.92-7.92.92-1.94,2-3.07,1.1-3.39-1.24-.43-5.61.74-7.91,2.52s-1.09,3-.74,8.61c.13,2,.17,5,.19,6.53,0,2.91,0,4.63,2,6.61C259.47,282.36,261.61,283.47,262.37,283.32Z"
            transform="translate(-254.81 -226.47)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            id="CHID_DENT_Right_perio_D"
            v-if="selectedTooth.perio.right"
            d="M304.15,279.84c-.63,0-.44-1.07-2.39-2.44a6.33,6.33,0,0,0-2.58-1.22c-1.18-.25-2.09-.15-2.39-.43s.58-.67.92-1.22c.53-.86-.64-1.69-1.47-2.35a36.2,36.2,0,0,1-4.23-4.26,9,9,0,0,1-2.4-4.44c-.36-2.41,1.17-2.83.37-5.13-.55-1.6-1.68-2.53-.92-2.78s3.11.4,4.6,1.21c2.19,1.19,2.29,2.49,2.76,5.05.73,3.94,1.11,5.93,2,7.05.21.26,1.7,1.6,4.68,4.28,1.78,1.6,2.75,2.45,2.87,3.72C306.13,278.44,304.89,279.85,304.15,279.84Z"
            transform="translate(-254.81 -226.47)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
        </g>
        <g id="CHID_DENT_Implant_D" v-if="selectedTooth.implant">
          <path
            d="M264.39,270.71l35.49,0c1.32,0,2.37.42,2.35.94l-.12,3.7c0,.52-1.09.94-2.41.93l-35.49,0c-1.31,0-2.36-.42-2.35-.94l.12-3.7C262,271.12,263.08,270.71,264.39,270.71Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M281.54,226.77H286c2.33,0,4.19.74,4.16,1.66L288.84,270c0,.91-1.94,1.65-4.27,1.65h-4.48c-2.32,0-4.19-.74-4.16-1.66l1.34-41.54C277.3,227.51,279.21,226.77,281.54,226.77Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M270.59,261.85l24.29,0c.65,0,1.16.21,1.15.46l0,1.19c0,.26-.54.46-1.19.46l-24.28,0c-.65,0-1.17-.21-1.16-.46l0-1.19C269.42,262.05,270,261.85,270.59,261.85Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M270.41,255.52l24.44,0c.6,0,1.08.19,1.08.43l0,1.25c0,.24-.51.43-1.11.43l-24.44,0c-.6,0-1.09-.2-1.08-.43l0-1.25C269.31,255.71,269.81,255.52,270.41,255.52Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M271,249.19l24.25,0c.65,0,1.18.22,1.17.47l0,1.18c0,.26-.54.47-1.2.47l-24.24,0c-.66,0-1.19-.21-1.18-.47l0-1.18C269.83,249.39,270.37,249.18,271,249.19Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M270.8,242.85l24.47,0c.6,0,1.07.19,1.06.43l0,1.26c0,.24-.49.42-1.09.42l-24.47,0c-.59,0-1.07-.19-1.06-.42l0-1.27C269.72,243,270.2,242.85,270.8,242.85Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M271,236.52l24.54,0c.57,0,1,.19,1,.41l0,1.29c0,.23-.48.41-1.06.41l-24.37,0c-.67,0-1.2-.21-1.2-.47l0-1.23C269.92,236.7,270.4,236.52,271,236.52Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M271.63,230.19l24.26,0c.65,0,1.17.21,1.16.47l0,1.18c0,.25-.55.46-1.2.46l-24.26,0c-.65,0-1.18-.21-1.17-.47l0-1.18C270.44,230.4,271,230.19,271.63,230.19Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="15.42"
            y1="10.17"
            x2="41.81"
            y2="3.86"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="15.5"
            y1="12.05"
            x2="41.88"
            y2="5.71"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="15.11"
            y1="16.56"
            x2="41.34"
            y2="10.18"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="15.19"
            y1="18.34"
            x2="41.31"
            y2="12.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="15.46"
            y1="22.82"
            x2="41.13"
            y2="16.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="15.36"
            y1="24.71"
            x2="41.17"
            y2="18.39"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="14.77"
            y1="29.19"
            x2="41.32"
            y2="22.9"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="14.85"
            y1="31.06"
            x2="41.12"
            y2="24.75"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="14.97"
            y1="35.51"
            x2="40.72"
            y2="29.18"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <line
            x1="14.98"
            y1="37.39"
            x2="40.58"
            y2="31.11"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M297.25,232.55"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
          <path
            d="M270,275.17l24.19,0c2.57,0,4.64.82,4.6,1.83l-.14,4.5c0,1-2.15,1.83-4.72,1.82l-24.19,0c-2.57,0-4.64-.82-4.6-1.83l.14-4.5C265.3,276,267.42,275.16,270,275.17Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.61"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_D"
          v-if="selectedTooth.periapical.periapical1"
          d="M267,245.71c.4,0,.4-1.37.39-4.06,0-1.24,0-2.33-.13-3.94a33.4,33.4,0,0,0-.39-4.06,24.48,24.48,0,0,1-.12-3.33.91.91,0,0,1,.64-1,5.18,5.18,0,0,1,3.33.24,1.35,1.35,0,0,1,.77.85c.41.93,1,1,2.31,2.42,1.08,1.16.78,1.22,2.18,3.15.94,1.29.9,1,2.56,3.15a42.92,42.92,0,0,1,2.57,3.46c.84,1.32,1,1.89,1.28,1.88.48,0,.69-2.23.26-4.37s-2-4.24-5.13-8.36c-1.64-2.15-2.48-3.08-4.62-3.76-.27-.08-3.93-1.21-6.8-.54s-3.23,2.79-3.59,5.15c-.25,1.65.06,3,.65,5.63a18.08,18.08,0,0,0,.76,2.73C264.73,243.06,266.28,245.76,267,245.71Z"
          transform="translate(-254.81 -226.47)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.61"
        />
        <g id="CHID_DENT_Occlusal_Veneer_D">
          <path
            id="CHID_DENT_Occlusal_Veneer_D_2"
            v-if="selectedTooth.crown.occlusalVeneer"
            d="M273.14,302.54l-5.28-.15a19.62,19.62,0,0,1-4-1.05,8.56,8.56,0,0,1-3.59-2.37l-.74-1.64c0-.79,1.34-1.42,3-1.42h11.53c1.66,0,3,.63,3,1.42v4.14a.62.62,0,0,1-.22.5C276.3,302.44,274.82,302.68,273.14,302.54Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_D_1"
            v-if="selectedTooth.crown.occlusalVeneer"
            d="M295.79,303.19l6-.55c.35,0,3.66-.06,5.5-1.35a2,2,0,0,0,1.05-1.85v-1.61c0-1.06-1.81-1.92-4.05-1.92h-8.47c-2.24,0-4.06.86-4.06,1.92v3.44C291.73,302.33,293.55,303.19,295.79,303.19Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_D_2"
            v-if="selectedTooth.crown.onlay"
            d="M273.14,302.54l-5.28-.15a19.62,19.62,0,0,1-4-1.05,8.56,8.56,0,0,1-3.59-2.37l-.74-1.64c0-.79,1.34-1.42,3-1.42h11.53c1.66,0,3,.63,3,1.42v4.14a.62.62,0,0,1-.22.5C276.3,302.44,274.82,302.68,273.14,302.54Z"
            transform="translate(-254.81 -226.47)"
            fill="#FFC0CB"
            stroke="#FFC0CB"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
          <path
            id="CHID_DENT_Occlusal_Veneer_D_1"
            v-if="selectedTooth.crown.onlay"
            d="M295.79,303.19l6-.55c.35,0,3.66-.06,5.5-1.35a2,2,0,0,0,1.05-1.85v-1.61c0-1.06-1.81-1.92-4.05-1.92h-8.47c-2.24,0-4.06.86-4.06,1.92v3.44C291.73,302.33,293.55,303.19,295.79,303.19Z"
            transform="translate(-254.81 -226.47)"
            fill="#FFC0CB"
            stroke="#FFC0CB"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
          
        </g>
        <g id="CHID_DENT_Endo_Crown_D">
          <path
            id="CHID_DENT_Endo_Crown_D_2"
            v-if="selectedTooth.endo_crown.crown2"
            d="M273.19,302.4l-5.28-.15a18.46,18.46,0,0,1-4-1.05,8.45,8.45,0,0,1-3.59-2.37l-.74-1.64c0-.78,1.34-1.42,3-1.42h11.53c1.66,0,3,.64,3,1.42v4.14a.57.57,0,0,1-.22.5C276.34,302.31,274.86,302.54,273.19,302.4Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
          <path
            id="CHID_DENT_Endo_Crown_D_1"
            v-if="selectedTooth.endo_crown.crown1"
            d="M295.83,303.05l6-.55c.34,0,3.65-.06,5.49-1.35a2,2,0,0,0,1.06-1.84v-1.62c0-1.06-1.82-1.92-4.06-1.92h-8.47c-2.24,0-4.06.86-4.06,1.92v3.44C291.77,302.19,293.59,303.05,295.83,303.05Z"
            transform="translate(-254.81 -226.47)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.82"
          />
        </g>
      </g>
    </svg>
    <span class="text-center my-3">D</span>
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