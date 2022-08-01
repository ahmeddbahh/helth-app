<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.69 100"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_C_all">
        <g id="CHID_DENT_C">
          <path
            id="CHID_DENT_ROOT_C"
            v-if="selectedTooth.dent.root1"
            d="M270,230.59c-3.2.41,4.33,11.07.27,27.62-2.59,10.55-9.68,20.54-5.66,21.47,1.83.43,3.77-1.51,11.08-2.51a66.4,66.4,0,0,1,11.84-.41c8.85.29,10.76,1.58,12.67,1,4.83-1.53-1.78-11.57-11.05-24.41C272.82,230.75,270.67,230.51,270,230.59Z"
            transform="translate(-254.82 -226.48)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.78"
          />
          <path
            id="CHID_DENT_CROWN_C"
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
            d="M263.52,280.66a10.38,10.38,0,0,0-4.85,5,8.39,8.39,0,0,0,1.08,9.9c4,4.78,12,6.86,16.18,7.95a42.13,42.13,0,0,0,9.43,1.68c9.53.44,19.59-2.81,24-7.4,4.1-4.26,2.11-8.44.8-11.15s-2.63-5.51-7.54-7.39c-4.39-1.69-9.13-1.59-18.61-1.4S268.22,278.19,263.52,280.66Z"
            transform="translate(-254.82 -226.48)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.78"
          />
        </g>
        <path
          id="CHID_DENT_fiiling-caries_class_I_C"
          v-if="selectedTooth.filling_caries_class_i"
          d="M288,304.64c-1.18,0-2.56-.09-4.07-.24a33,33,0,0,1-4.17-.63,24.27,24.27,0,0,1-3.57-1.07v-4c0-1.68,3-3,6.65-3h8.83c3.68,0,6.65,1.36,6.65,3v4c-.2.08-.52.19-.93.31-.57.18-1,.28-1.33.35-1.34.31-1.36.37-2.22.56s-1.61.28-2.78.43C290.27,304.44,289.23,304.55,288,304.64Z"
          transform="translate(-254.82 -226.48)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_C"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M305.23,300a23.83,23.83,0,0,1-3.31,1.66,12.15,12.15,0,0,1-1.59.64,3.28,3.28,0,0,1-1.54.34c-.45-.1-.61-.55-.48-1.09V289.71c0-1.06,1.67-1.92,3.71-1.92h5.11a4.18,4.18,0,0,1,2.4.39c.23.19.17.36.41.95a6.56,6.56,0,0,0,.37.75,7.45,7.45,0,0,1-.05,4.27,9.44,9.44,0,0,1-1.43,2.8,12,12,0,0,1-1.65,1.65A17.1,17.1,0,0,1,305.23,300Z"
          transform="translate(-254.82 -226.48)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_C"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M275.43,302.74c.88-.21.53-1.41.34-2.61A34,34,0,0,1,276,291c.18-1.43.39-2.11-.55-2.64-1.18-.65-2.79-.31-7.78-.38-5.28-.07-7.51-.5-8.43.19-.25.19-.29.75-.37,1.87a5.81,5.81,0,0,0,0,1.63,6.4,6.4,0,0,0,1.29,2.49,11.73,11.73,0,0,0,2.32,2.64,19.32,19.32,0,0,0,3.15,2.1,29.54,29.54,0,0,0,3.15,1.58c.71.31,1.58.62,3.33,1.25C274.81,302.74,275.14,302.8,275.43,302.74Z"
          transform="translate(-254.82 -226.48)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_C"
          v-if="selectedTooth.filling_caries_class_v"
          x="22.22"
          y="56.04"
          width="20.41"
          height="2.95"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_C"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M267.22,293.41h-3.91l-3.33-.87-.87-.24.15-3.8h0l4.05-.62h3.91c2.29,0,4.15,1,4.15,2.14v1.25C271.37,292.45,269.51,293.41,267.22,293.41Z"
          transform="translate(-254.82 -226.48)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_C"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M310,292.86l-8.1.55c-2.29,0-4.14-1-4.14-2.14V290c0-1.18,1.85-2.14,4.14-2.14l7.64.62h0l.42,1.52v1.25C310,291.8,310,292.33,310,292.86Z"
          transform="translate(-254.82 -226.48)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoC"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M274.85,239.64c-1.76.16,3.68,8.51.32,20.65-2,7.25-7.16,15.89-4.15,16.52.8.17,1.56-.36,5.43-.66,1.39-.1,2.52-.12,4.79-.16,2.56-.05,4.54,0,5.43,0s2.61.05,4.79.16a28.77,28.77,0,0,0,3.2.18c3-.73-4.52-12.3-9-19.51C278.38,244.89,276.25,239.5,274.85,239.64Z"
          transform="translate(-254.82 -226.48)"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <g id="CHID_DENT_Post_C" v-if="selectedTooth.post.post1">
          <path
            d="M274.42,278.93l15.15-.59c.56,0,1.05.23,1.08.57l.23,2.4c0,.34-.4.62-1,.65l-15.16.59c-.56,0-1-.23-1.07-.56l-.23-2.41C273.43,279.25,273.86,279,274.42,278.93Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M278.43,250.14l1.91-.07c1,0,1.85.41,1.9,1l2.56,27c.06.6-.7,1.11-1.7,1.15l-1.91.07c-1,0-1.84-.41-1.9-1l-2.56-27C276.67,250.7,277.43,250.18,278.43,250.14Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M276.4,273.08l10.37-.41c.27,0,.51.12.53.28l.07.78c0,.16-.2.3-.47.31l-10.37.41c-.28,0-.51-.11-.53-.28l-.07-.77C275.91,273.23,276.12,273.09,276.4,273.08Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M275.84,269l10.44-.41c.26,0,.48.11.49.26l.08.81c0,.16-.18.29-.44.3l-10.44.41c-.25,0-.48-.11-.49-.26l-.08-.81C275.39,269.12,275.59,269,275.84,269Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M275.63,264.86l10.35-.4c.28,0,.52.11.54.28l.07.76c0,.17-.2.31-.48.33l-10.35.4c-.28,0-.52-.11-.54-.28l-.07-.76C275.13,265,275.35,264.87,275.63,264.86Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M275.06,260.76l10.45-.41c.25,0,.47.1.48.26l.08.82c0,.15-.18.28-.43.29l-10.45.41c-.26,0-.48-.1-.49-.26l-.08-.82C274.61,260.9,274.8,260.77,275.06,260.76Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M274.65,256.65l10.48-.41c.24,0,.46.1.47.25l.08.84c0,.14-.18.27-.42.28l-10.41.41c-.28,0-.53-.12-.54-.29l-.08-.79C274.22,256.79,274.41,256.66,274.65,256.65Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M274.46,252.53l10.35-.4c.28,0,.52.11.54.28l.07.77c0,.16-.2.31-.48.32l-10.35.4c-.28,0-.52-.11-.54-.28l-.07-.76C274,252.69,274.18,252.55,274.46,252.53Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="19.53"
            y1="30.27"
            x2="30.31"
            y2="25.71"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="19.7"
            y1="31.48"
            x2="30.48"
            y2="26.91"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="19.88"
            y1="34.42"
            x2="30.59"
            y2="29.81"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="20.04"
            y1="35.57"
            x2="30.72"
            y2="31.05"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="20.5"
            y1="38.47"
            x2="30.98"
            y2="33.93"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="20.6"
            y1="39.69"
            x2="31.14"
            y2="35.14"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="20.68"
            y1="42.61"
            x2="31.54"
            y2="38.07"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="20.86"
            y1="43.82"
            x2="31.6"
            y2="39.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="21.24"
            y1="46.7"
            x2="31.76"
            y2="42.15"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="21.39"
            y1="47.92"
            x2="31.84"
            y2="43.4"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M285.57,253.62"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M277.15,281.73l10.32-.41c1.1,0,2,.46,2.11,1.11l.27,2.92c.07.65-.78,1.22-1.87,1.26l-10.33.41c-1.1,0-2-.45-2.11-1.11l-.27-2.92C275.21,282.34,276.05,281.77,277.15,281.73Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_C">
          <path
            id="CHID_DENT_Left_Ginfivitis_C"
            v-if="selectedTooth.ginfivitis.left"
            d="M258.87,283.25c1-.15.29-1.32,2.06-2.31,1.15-.64,2.22-.64,2.41-1.15s-1-.78-1.38-1.61.22-1.1.69-2.13c.64-1.42,0-1.69.34-3.11.39-1.62,1.27-1.51,2.24-3.47,1.12-2.28,0-2.55,1.2-4.72.94-1.7,2-2.21,1.38-2.76-.93-.8-4.7-1-7.05-.17-2,.66-2.66,1.89-3.27,7.2a38.76,38.76,0,0,1-2.06,9.61,2.85,2.85,0,0,0,.68,3.47A4.18,4.18,0,0,0,258.87,283.25Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            id="CHID_DENT_Right_Ginfivitis_C"
            v-if="selectedTooth.ginfivitis.right"
            d="M308.91,282.1c-.69,0-.54-.87-2.07-1.87-2.2-1.44-5.16-1.35-5.33-2.22-.1-.51.89-.64,1.55-1.52s.35-1.67,0-2.58c-1.74-4.48-1.29-3.72-1.72-4.53a28.74,28.74,0,0,0-3.61-5.79c-1.16-1.35-1.92-1.92-1.38-2.31.93-.66,5.13-.36,7.74.8s2.91,2.9,3.61,6.41c.83,4.11-.32,4.54,1.21,6.67.92,1.29,1.92,1.94,2.06,3.38C311.14,280.32,309.89,282.1,308.91,282.1Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            id="CHID_DENT_Left_periodontal_C"
            v-if="selectedTooth.periodontal.left"
            d="M258.87,283.25c1-.15.29-1.32,2.06-2.31,1.15-.64,2.22-.64,2.41-1.15s-1-.78-1.38-1.61.22-1.1.69-2.13c.64-1.42,0-1.69.34-3.11.39-1.62,1.27-1.51,2.24-3.47,1.12-2.28,0-2.55,1.2-4.72.94-1.7,2-2.21,1.38-2.76-.93-.8-4.7-1-7.05-.17-2,.66-2.66,1.89-3.27,7.2a38.76,38.76,0,0,1-2.06,9.61,2.85,2.85,0,0,0,.68,3.47A4.18,4.18,0,0,0,258.87,283.25Z"
            transform="translate(-254.82 -226.48)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            id="CHID_DENT_Right_periodontal_C"
            v-if="selectedTooth.periodontal.right"
            d="M308.91,282.1c-.69,0-.54-.87-2.07-1.87-2.2-1.44-5.16-1.35-5.33-2.22-.1-.51.89-.64,1.55-1.52s.35-1.67,0-2.58c-1.74-4.48-1.29-3.72-1.72-4.53a28.74,28.74,0,0,0-3.61-5.79c-1.16-1.35-1.92-1.92-1.38-2.31.93-.66,5.13-.36,7.74.8s2.91,2.9,3.61,6.41c.83,4.11-.32,4.54,1.21,6.67.92,1.29,1.92,1.94,2.06,3.38C311.14,280.32,309.89,282.1,308.91,282.1Z"
            transform="translate(-254.82 -226.48)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            id="CHID_DENT_Left_perio_C"
            v-if="selectedTooth.perio.left"
            d="M258.87,283.25c1-.15.29-1.32,2.06-2.31,1.15-.64,2.22-.64,2.41-1.15s-1-.78-1.38-1.61.22-1.1.69-2.13c.64-1.42,0-1.69.34-3.11.39-1.62,1.27-1.51,2.24-3.47,1.12-2.28,0-2.55,1.2-4.72.94-1.7,2-2.21,1.38-2.76-.93-.8-4.7-1-7.05-.17-2,.66-2.66,1.89-3.27,7.2a38.76,38.76,0,0,1-2.06,9.61,2.85,2.85,0,0,0,.68,3.47A4.18,4.18,0,0,0,258.87,283.25Z"
            transform="translate(-254.82 -226.48)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            id="CHID_DENT_Right_perio_C"
            v-if="selectedTooth.perio.right"
            d="M308.91,282.1c-.69,0-.54-.87-2.07-1.87-2.2-1.44-5.16-1.35-5.33-2.22-.1-.51.89-.64,1.55-1.52s.35-1.67,0-2.58c-1.74-4.48-1.29-3.72-1.72-4.53a28.74,28.74,0,0,0-3.61-5.79c-1.16-1.35-1.92-1.92-1.38-2.31.93-.66,5.13-.36,7.74.8s2.91,2.9,3.61,6.41c.83,4.11-.32,4.54,1.21,6.67.92,1.29,1.92,1.94,2.06,3.38C311.14,280.32,309.89,282.1,308.91,282.1Z"
            transform="translate(-254.82 -226.48)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
        </g>
        <g id="CHID_DENT_Implant_C" v-if="selectedTooth.implant">
          <path
            d="M266.36,271.7l33.15.05c1.23,0,2.22.43,2.2.95l-.11,3.79c0,.53-1,1-2.25,1l-33.16-.05c-1.23,0-2.21-.43-2.19-1l.11-3.79C264.12,272.13,265.13,271.7,266.36,271.7Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M282.37,226.77h4.19c2.18,0,3.92.76,3.89,1.69L289.2,271c0,.93-1.81,1.69-4,1.68H281c-2.18,0-3.92-.76-3.89-1.7l1.25-42.48C278.42,227.52,280.2,226.77,282.37,226.77Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M272.15,262.64l22.69,0c.6,0,1.09.21,1.08.47l0,1.22c0,.26-.5.47-1.1.47l-22.69,0c-.6,0-1.09-.21-1.08-.47l0-1.22C271.05,262.85,271.55,262.64,272.15,262.64Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M272,256.17l22.83,0c.56,0,1,.2,1,.44l0,1.28c0,.24-.47.44-1,.44l-22.82,0c-.57,0-1-.2-1-.44l0-1.28C271,256.36,271.42,256.17,272,256.17Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M272.55,249.69l22.65,0c.62,0,1.11.22,1.1.48l0,1.2c0,.27-.51.48-1.12.48l-22.65,0c-.61,0-1.11-.21-1.1-.48l0-1.2C271.43,249.91,271.94,249.69,272.55,249.69Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M272.34,243.22l22.87,0c.55,0,1,.19,1,.43l0,1.3c0,.23-.46.43-1,.43l-22.86,0c-.56,0-1-.2-1-.44l0-1.29C271.33,243.41,271.79,243.22,272.34,243.22Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M272.51,236.74l22.91,0c.54,0,1,.19,1,.42l0,1.32c0,.23-.45.42-1,.42l-22.77,0c-.62,0-1.12-.22-1.11-.49l0-1.25C271.52,236.93,272,236.74,272.51,236.74Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M273.12,230.27l22.66,0c.61,0,1.1.21,1.09.47l0,1.21c0,.26-.51.48-1.12.48l-22.67,0c-.61,0-1.1-.22-1.09-.48l0-1.21C272,230.48,272.51,230.27,273.12,230.27Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="17"
            y1="10.39"
            x2="41.65"
            y2="3.93"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="17.07"
            y1="12.31"
            x2="41.71"
            y2="5.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.71"
            y1="16.92"
            x2="41.21"
            y2="10.39"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.78"
            y1="18.74"
            x2="41.18"
            y2="12.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="17.03"
            y1="23.32"
            x2="41.02"
            y2="16.87"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.94"
            y1="25.25"
            x2="41.06"
            y2="18.79"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.39"
            y1="29.84"
            x2="41.19"
            y2="23.41"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.47"
            y1="31.75"
            x2="41.01"
            y2="25.3"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.57"
            y1="36.3"
            x2="40.63"
            y2="29.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <line
            x1="16.58"
            y1="38.22"
            x2="40.5"
            y2="31.8"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M297.05,232.69"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
          <path
            d="M271.59,276.26l22.59,0c2.41,0,4.34.85,4.31,1.88l-.14,4.6c0,1-2,1.87-4.41,1.86l-22.59,0c-2.41,0-4.34-.84-4.31-1.87l.14-4.6C267.21,277.09,269.19,276.26,271.59,276.26Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.59"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_C"
          v-if="selectedTooth.periapical.periapical1"
          d="M269.85,243.08c.31-.07.33-.38-.6-4a49.22,49.22,0,0,1-1-4.83,5.94,5.94,0,0,1,.24-2.48c.19-.61.58-1.87,1.44-1.92.11,0,.32,0,1.56.74a19.06,19.06,0,0,1,1.79,1.18,13,13,0,0,1,1.44,1.24,26.27,26.27,0,0,1,2.76,3.35c1.3,1.75,1.2,1.38,3,3.72s2.12,3,2.4,3c.62-.06.53-3.12-1.08-6.14a20.61,20.61,0,0,0-4.43-5.2,13.09,13.09,0,0,0-4.67-3.22c-1-.39-3.93-1.53-6.11-1-1.47.36-1.9,1.31-2.4,2.48-.58,1.37-.5,2.37-.24,4.65.46,4,.59,4.31.84,4.71C266.15,241.47,269,243.27,269.85,243.08Z"
          transform="translate(-254.82 -226.48)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.59"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_C"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M284.55,304.45a55.47,55.47,0,0,1-14.18-3.22,10.32,10.32,0,0,1-1.76-.88c-1.14-.71-3.5-2.27-8.11-5.57h0l49.05-.16h0l-1.13,2a6.06,6.06,0,0,1-2.15,2.08c-.48.29-1,.61-1.61.95a39.83,39.83,0,0,1-6.93,3.3,34.77,34.77,0,0,1-10.67,1.59A20.89,20.89,0,0,1,284.55,304.45Z"
          transform="translate(-254.82 -226.48)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.78"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_C"
          v-if="selectedTooth.crown.onlay"
          d="M284.55,304.45a55.47,55.47,0,0,1-14.18-3.22,10.32,10.32,0,0,1-1.76-.88c-1.14-.71-3.5-2.27-8.11-5.57h0l49.05-.16h0l-1.13,2a6.06,6.06,0,0,1-2.15,2.08c-.48.29-1,.61-1.61.95a39.83,39.83,0,0,1-6.93,3.3,34.77,34.77,0,0,1-10.67,1.59A20.89,20.89,0,0,1,284.55,304.45Z"
          transform="translate(-254.82 -226.48)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.78"
        />
        <g id="CHID_DENT_Endo_Crown_C">
          <path
          v-if="selectedTooth.endo_crown.crown1"
            id="CHID_DENT_Endo_Crown_1C"
            d="M294.49,287.79l-19.67.24-3.05,6.06c-.07.15.14.29.43.29h25.65c.3,0,.51-.15.42-.3Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.78"
          />
          <path
            id="CHID_DENT_Endo_Crown_2C"
            v-if="selectedTooth.endo_crown.crown2"
            d="M284.59,304.31a55.47,55.47,0,0,1-14.18-3.22,9.63,9.63,0,0,1-1.76-.88c-1.14-.71-3.5-2.27-8.11-5.57h0l49-.16h0l-1.13,2a6.06,6.06,0,0,1-2.15,2.08c-.48.29-1,.61-1.6,1a40.31,40.31,0,0,1-6.94,3.3,34.77,34.77,0,0,1-10.67,1.59A20.89,20.89,0,0,1,284.59,304.31Z"
            transform="translate(-254.82 -226.48)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.78"
          />
        </g>
      </g>
    </svg>
      <span class="text-center my-3">C</span>
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